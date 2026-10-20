import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Factory,
  HeartPulse,
  Building2,
  GraduationCap,
  ShoppingCart,
  Hotel,
  Truck,
  Briefcase,
  Landmark,
  MoreHorizontal,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import manufacturingImg from "../assets/case-manufacturing.jpg";
import "./Industries.css";

// -----------------------------------------------------------------------------
// Data Definitions (edit labels / links / slides here)
// -----------------------------------------------------------------------------

const INDUSTRIES = [
  { id: "manufacturing", icon: Factory, label: "Manufacturing", href: "#manufacturing" },
  { id: "healthcare", icon: HeartPulse, label: "Healthcare", href: "#healthcare" },
  { id: "construction", icon: Building2, label: "Construction", href: "#construction" },
  { id: "education", icon: GraduationCap, label: "Education", href: "#education" },
  { id: "retail", icon: ShoppingCart, label: "Retail", href: "#retail" },
  { id: "hospitality", icon: Hotel, label: "Hospitality", href: "#hospitality" },
  { id: "logistics", icon: Truck, label: "Logistics", href: "#logistics" },
  { id: "professional", icon: Briefcase, label: "Professional Services", href: "#professional-services" },
  { id: "government", icon: Landmark, label: "Government", href: "#government" },
  { id: "more", icon: MoreHorizontal, label: "And More", href: "#industries", circled: true },
];

// Add more slides here and the arrows + dots will appear automatically.
const SLIDES = [
  {
    id: "manufacturing-erp",
    image: manufacturingImg,
    imageAlt: "White robotic arm assembling electronics on a smart factory line",
    titleLines: ["Manufacturing Automation", "ERP Implementation"],
    stats: [
      { value: "40%", label: "Increase in Efficiency" },
      { value: "30%", label: "Cost Reduction" },
      { value: "25%", label: "Faster Time to Market" },
    ],
    href: "#case-manufacturing",
  },
  // {
  //   id: "cloud-migration",
  //   image: cloudImg,
  //   imageAlt: "Modern data center with glowing server racks",
  //   titleLines: ["Cloud Migration", "Infrastructure Modernisation"],
  //   stats: [
  //     { value: "50%", label: "Lower Hosting Cost" },
  //     { value: "99.9%", label: "Uptime Achieved" },
  //     { value: "3x", label: "Faster Deployments" },
  //   ],
  //   href: "#case-cloud",
  // },
];

const AUTOPLAY_MS = 6000;
const SWIPE_MIN_PX = 40; // horizontal distance that counts as a swipe

// -----------------------------------------------------------------------------
// Industries Component (Default Export)
// -----------------------------------------------------------------------------

export default function Industries() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);
  const touchStartX = useRef(null);

  const hasMany = SLIDES.length > 1;

  // Entrance animation when the section scrolls into view
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-play (paused on hover/focus, disabled for reduced motion)
  useEffect(() => {
    if (!hasMany || paused || !isVisible) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [hasMany, paused, isVisible]);

  // Touch swipe: left = next story, right = previous story
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null || !hasMany) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < SWIPE_MIN_PX) return;
    setActive((current) => (current + (deltaX < 0 ? 1 : -1) + SLIDES.length) % SLIDES.length);
  };

  return (
    <section
      id="industries"
      className={`ind ${isVisible ? "ind--visible" : ""}`}
      ref={sectionRef}
      aria-label="Industries and success stories"
    >
      <div className="ind__container">
        {/* ------------------------------------------------------------------ */}
        {/* Left panel: Industries We Serve                                     */}
        {/* ------------------------------------------------------------------ */}
        <div className="ind__panel ind__panel--industries">
          <div className="ind__panel-body">
            <div className="ind__text">
              <span className="ind__eyebrow">Industries We Serve</span>
              <h2 className="ind__title">
                Industry Knowledge. Practical Experience.
              </h2>
              <p className="ind__desc">
                We understand industry-specific challenges and deliver solutions
                that create real impact.
              </p>
              <a href="#industries-all" className="ind__link">
                <span>View All Industries</span>
                <ArrowRight size={14} className="ind__link-icon" aria-hidden="true" />
              </a>
            </div>

            <ul className="ind__grid" role="list">
              {INDUSTRIES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.id}
                    className="ind__grid-item"
                    style={{ "--delay": `${index * 55}ms` }}
                  >
                    <a href={item.href} className="ind__industry">
                      <span
                        className={`ind__industry-icon ${item.circled ? "ind__industry-icon--circle" : ""}`}
                        aria-hidden="true"
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </span>
                      <span className="ind__industry-label">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Right panel: Success Stories                                        */}
        {/* ------------------------------------------------------------------ */}
        <div className="ind__panel ind__panel--stories">
          <div className="ind__panel-body">
            <div className="ind__text">
              <span className="ind__eyebrow">Success Stories</span>
              <h2 className="ind__title">Real Challenges. Real Results.</h2>
              <p className="ind__desc">
                Explore how we’ve helped businesses across industries achieve
                measurable growth.
              </p>
              <a href="#case-studies" className="ind__link">
                <span>View All Case Studies</span>
                <ArrowRight size={14} className="ind__link-icon" aria-hidden="true" />
              </a>
            </div>

            <div
              className="ind__carousel-wrap"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <div
                className={`ind__carousel ${hasMany ? "ind__carousel--multi" : ""}`}
                role="region"
                aria-roledescription="carousel"
                aria-label="Success stories"
                aria-live={hasMany && !paused ? "off" : "polite"}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {SLIDES.map((slide, index) => {
                  const isActive = index === active;
                  return (
                    <div
                      key={slide.id}
                      className={`ind__slide ${isActive ? "ind__slide--active" : ""}`}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${index + 1} of ${SLIDES.length}`}
                      aria-hidden={!isActive}
                    >
                      <img
                        src={slide.image}
                        alt={slide.imageAlt}
                        className="ind__slide-img"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="ind__slide-overlay" aria-hidden="true" />

                      <div className="ind__slide-content">
                        <h3 className="ind__slide-title">
                          {slide.titleLines.map((line) => (
                            <span key={line}>{line}</span>
                          ))}
                        </h3>

                        <ul className="ind__stats" role="list">
                          {slide.stats.map((stat) => (
                            <li key={stat.label} className="ind__stat">
                              <span className="ind__stat-value">{stat.value}</span>
                              <span className="ind__stat-label">{stat.label}</span>
                            </li>
                          ))}
                        </ul>

                        <a
                          href={slide.href}
                          className="ind__slide-btn"
                          tabIndex={isActive ? 0 : -1}
                        >
                          <span>Read Full Story</span>
                          <ArrowRight size={14} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  );
                })}

                {hasMany && (
                  <>
                    <button
                      type="button"
                      className="ind__arrow ind__arrow--prev"
                      aria-label="Previous story"
                      onClick={() => goTo(active - 1)}
                    >
                      <ChevronLeft size={22} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="ind__arrow ind__arrow--next"
                      aria-label="Next story"
                      onClick={() => goTo(active + 1)}
                    >
                      <ChevronRight size={22} aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>

              {hasMany && (
                <div className="ind__dots" role="group" aria-label="Choose story">
                  {SLIDES.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      aria-current={index === active ? "true" : undefined}
                      aria-label={`Go to story ${index + 1}`}
                      className={`ind__dot ${index === active ? "ind__dot--active" : ""}`}
                      onClick={() => goTo(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
