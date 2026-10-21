import React from "react";
import { Link } from "react-router-dom";
import "./Footter.css";
import logoMark from "../assets/KloudLogoMark.png";

// Each column is split into two sub-lists, exactly like the live site.
// `to` must match the route paths defined in main.jsx.
const services = [
  [
    { label: "Web Development", to: "/services/web-design-development" },
    { label: "Graphics Designing", to: "/services/graphic-designing" },
    { label: "Mobile Apps Development", to: "/services/mobile-app-development" },
  ],
  [
    { label: "Software Development", to: "/services/software-development" },
    { label: "Digital Marketing", to: "/services/digital-marketing" },
    { label: "ERP & CRM", to: "/services/erp-crm" },
    { label: "Domain & Hosting", to: "/services/domain-hosting" },
  ],
];

// There are no separate pages per portfolio category, so all of these
// open the Projects page. Change a `to` value here if you add a page later.
const portfolio = [
  [
    { label: "Web", to: "/projects" },
    { label: "Ecommerce", to: "/projects" },
    { label: "Digital Marketing", to: "/projects" },
  ],
  [
    { label: "Search Engine Optimization", to: "/projects" },
    { label: "Logo", to: "/projects" },
    { label: "Brochure", to: "/projects" },
    { label: "Campaigns", to: "/projects" },
  ],
];

// The footer sits at the bottom of the page, so jump back to the top
// after navigating, otherwise the new page opens scrolled down.
const scrollToTop = () => window.scrollTo({ top: 0, left: 0 });

function Footter() {
  return (
    <footer className="ftr">
      <div className="ftr__inner">
        {/* Brand: K mark + name + tagline, copyright at the bottom */}
        <div className="ftr__brand">
          <Link
            to="/"
            className="ftr__brand-link"
            aria-label="KlouD InnoVisionZ home"
            onClick={scrollToTop}
          >
            <img src={logoMark} alt="" className="ftr__logo" />
            <span className="ftr__brand-text">
              <span className="ftr__brand-name">KlouD InnoVisionZ</span>
              <span className="ftr__brand-tag">Transforming Client&rsquo;s Vision</span>
            </span>
          </Link>
          <p className="ftr__copy">
            &copy; {new Date().getFullYear()} KlouD InnoVisionZ. All Rights
            Reserved.
          </p>
        </div>

        {/* Services */}
        <nav className="ftr__col" aria-label="Services">
          <h3 className="ftr__title">Services</h3>
          <div className="ftr__lists">
            {services.map((list, i) => (
              <ul className="ftr__list" key={i}>
                {list.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} onClick={scrollToTop}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>

        {/* Work Portfolio */}
        <nav className="ftr__col" aria-label="Work Portfolio">
          <h3 className="ftr__title">Work Portfolio</h3>
          <div className="ftr__lists">
            {portfolio.map((list, i) => (
              <ul className="ftr__list" key={i}>
                {list.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} onClick={scrollToTop}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="ftr__bottom">
        <Link to="/terms-and-conditions" className="ftr__terms" onClick={scrollToTop}>
          Terms &amp; Conditions
        </Link>
      </div>
    </footer>
  );
}

export default Footter;
