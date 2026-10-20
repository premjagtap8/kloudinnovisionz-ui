import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import KloudLogoMark from "../assets/KloudLogoMark.png";
import "./Navbar.css";

// -----------------------------------------------------------------------------
// Data Definitions (edit labels / paths / dropdown items here)
// -----------------------------------------------------------------------------
const NAV_LINKS = [
  { id: "home", label: "Home", to: "/" },
  { id: "about", label: "About Us", to: "/about-us" },
  {
    id: "services",
    label: "Services",
    to: "/services",
    children: [
      { label: "Web Design Development", to: "/services/web-design-development" },
      { label: "Graphics Designing", to: "/services/graphic-designing" },
      { label: "Mobile App Development", to: "/services/mobile-app-development" },
      { label: "Software Development", to: "/services/software-development" },
      { label: "Digital Marketing", to: "/services/digital-marketing" },
      { label: "Domain Hosting", to: "/services/domain-hosting" },
      { label: "ERP & CRM", to: "/services/erp-crm" },
    ],
  },
  { id: "our-software", label: "Our Software", to: "/Our-Software" },
  { id: "projects", label: "Projects", to: "/projects" },
  { id: "careers", label: "Careers", to: "/careers" },
  { id: "contact", label: "Contact", to: "/contact-us" },
];

// Must match the CSS breakpoint: hamburger menu is used at <= 1199px
const DESKTOP_QUERY = "(min-width: 1200px)";

// -----------------------------------------------------------------------------
// Navbar Component (Default Export)
// -----------------------------------------------------------------------------
export default function Navbar() {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(null); // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null); // mobile accordion
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const lastPointerType = useRef("mouse");

  // A link is active when the current URL matches it (Home only on exact "/").
  // Comparison ignores letter case, so /Our-Software and /our-software both match.
  const isLinkActive = useCallback(
    (to) => {
      const path = pathname.toLowerCase();
      const target = to.toLowerCase();
      return target === "/" ? path === "/" : path === target || path.startsWith(`${target}/`);
    },
    [pathname]
  );

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSub(null);
  }, []);

  // Shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside press / Escape (Escape also returns focus to the toggle)
  useEffect(() => {
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen((wasOpen) => {
        if (wasOpen) toggleRef.current?.focus();
        return false;
      });
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Close the mobile menu when the viewport grows to desktop size (matchMedia = no resize spam)
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e) => {
      if (e.matches) {
        setMobileOpen(false);
        setMobileSub(null);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menus whenever the route changes
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Opening the mobile menu pre-expands the section you are currently in
  const toggleMobile = () => {
    setMobileOpen((open) => {
      if (!open) {
        const current = NAV_LINKS.find((l) => l.children && isLinkActive(l.to));
        setMobileSub(current ? current.id : null);
      }
      return !open;
    });
  };

  // Desktop dropdown button:
  //  - mouse: hover already opened it, so a click must NOT close it again
  //  - touch / keyboard: click toggles
  const onDropdownButtonClick = (id, isOpen) => {
    if (lastPointerType.current === "mouse") {
      setOpenMenu(id); // hover already opened it: keep it open
    } else {
      setOpenMenu(isOpen ? null : id);
    }
    lastPointerType.current = "keyboard"; // next click without a pointerdown = keyboard
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} ref={navRef}>
      <div className="navbar__container">
        {/* Logo lockup */}
        <Link
          to="/"
          className="navbar__brand"
          aria-label="KlouD InnoVisionZ - Home"
          onClick={closeAll}
        >
          <img
            src={KloudLogoMark}
            alt=""
            className="navbar__logo"
            width={64}
            height={64}
            decoding="async"
          />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">KlouD InnoVisionZ</span>
            <span className="navbar__brand-tagline">Transforming Client’s Vision</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__list">
            {NAV_LINKS.map((link) => {
              const hasChildren = Array.isArray(link.children);
              const isActive = isLinkActive(link.to);
              const isOpen = openMenu === link.id;
              const dropdownId = `navbar-dropdown-${link.id}`;

              return (
                <li
                  key={link.id}
                  className={`navbar__item ${hasChildren ? "navbar__item--has-children" : ""}`}
                  // hover only for a real mouse, so a tap on touch screens doesn't open-then-close
                  onPointerEnter={(e) =>
                    hasChildren && e.pointerType === "mouse" && setOpenMenu(link.id)
                  }
                  onPointerLeave={(e) =>
                    hasChildren && e.pointerType === "mouse" && setOpenMenu(null)
                  }
                  // close when keyboard focus leaves this item
                  onBlur={(e) => {
                    if (hasChildren && !e.currentTarget.contains(e.relatedTarget)) {
                      setOpenMenu(null);
                    }
                  }}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      className={`navbar__link ${isActive ? "navbar__link--active" : ""}`}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      aria-controls={dropdownId}
                      onPointerDown={(e) => {
                        lastPointerType.current = e.pointerType || "mouse";
                      }}
                      onClick={() => onDropdownButtonClick(link.id, isOpen)}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={15}
                        className={`navbar__chevron ${isOpen ? "navbar__chevron--open" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.to}
                      className={`navbar__link ${isActive ? "navbar__link--active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={closeAll}
                    >
                      <span>{link.label}</span>
                    </Link>
                  )}

                  {hasChildren && (
                    <ul
                      id={dropdownId}
                      className={`navbar__dropdown ${isOpen ? "navbar__dropdown--open" : ""}`}
                    >
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            className="navbar__dropdown-link"
                            aria-current={isLinkActive(child.to) ? "page" : undefined}
                            onClick={closeAll}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right side: CTA + mobile toggle */}
        <div className="navbar__actions">
          <Link to="/contact-us" className="navbar__cta" onClick={closeAll}>
            <span>Let’s Talk</span>
            <ArrowRight size={15} className="navbar__cta-icon" aria-hidden="true" />
          </Link>

          <button
            type="button"
            ref={toggleRef}
            className="navbar__toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="navbar-mobile-panel"
            onClick={toggleMobile}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Dimmed backdrop behind the mobile panel: tap to close */}
      <div
        className={`navbar__scrim ${mobileOpen ? "navbar__scrim--open" : ""}`}
        onClick={closeAll}
        aria-hidden="true"
      />

      {/* Mobile / tablet panel */}
      <div
        id="navbar-mobile-panel"
        className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}
      >
        <ul className="navbar__mobile-list">
          {NAV_LINKS.map((link, index) => {
            const hasChildren = Array.isArray(link.children);
            const isActive = isLinkActive(link.to);
            const isExpanded = mobileSub === link.id;
            const subId = `navbar-mobile-sub-${link.id}`;

            return (
              <li
                key={link.id}
                className="navbar__mobile-item"
                style={{ "--i": index }} // drives the staggered entrance animation
              >
                {hasChildren ? (
                  <>
                    <button
                      type="button"
                      className={`navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`}
                      aria-expanded={isExpanded}
                      aria-controls={subId}
                      onClick={() => setMobileSub(isExpanded ? null : link.id)}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={18}
                        className={`navbar__chevron ${isExpanded ? "navbar__chevron--open" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <ul
                      id={subId}
                      className={`navbar__mobile-sub ${isExpanded ? "navbar__mobile-sub--open" : ""}`}
                    >
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            className={`navbar__mobile-sub-link ${
                              isLinkActive(child.to) ? "navbar__mobile-sub-link--active" : ""
                            }`}
                            aria-current={isLinkActive(child.to) ? "page" : undefined}
                            onClick={closeAll}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className={`navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeAll}
                  >
                    <span>{link.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <Link to="/contact-us" className="navbar__cta navbar__cta--mobile" onClick={closeAll}>
          <span>Let’s Talk</span>
          <ArrowRight size={15} className="navbar__cta-icon" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
