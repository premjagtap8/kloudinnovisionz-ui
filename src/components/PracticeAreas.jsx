import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Code2,
  Settings,
  BarChart3,
  ShieldCheck,
  Cpu,
  ArrowRight,
} from "lucide-react";
import "./PracticeAreas.css";

// -----------------------------------------------------------------------------
// Data Definitions (edit titles / text / links here)
// `color` is "blue" or "green" only (the two brand colours, same as the Hero).
// The six cards run blue > green, like the rest of the site.
// `href` must match a route defined in main.jsx.
// -----------------------------------------------------------------------------

const AREAS = [
  {
    id: "consult",
    icon: Users,
    color: "blue",
    title: "Consult",
    description:
      "Strategy, advisory and digital roadmap to accelerate your business transformation.",
    href: "/contact-us",
  },
  {
    id: "build",
    icon: Code2,
    color: "blue",
    title: "Build",
    description:
      "Custom software, ERP, CRM, portals and platforms that scale with your business.",
    href: "/services/software-development",
  },
  {
    id: "transform",
    icon: Settings,
    color: "blue",
    title: "Transform",
    description:
      "Automation, cloud migration and digital transformation for smarter operations.",
    href: "/services/erp-crm",
  },
  {
    id: "grow",
    icon: BarChart3,
    color: "green",
    title: "Grow",
    description:
      "Digital marketing, SEO, AEO, GEO and lead generation strategies that drive growth.",
    href: "/services/digital-marketing",
  },
  {
    id: "protect",
    icon: ShieldCheck,
    color: "green",
    title: "Protect",
    description:
      "Cyber security, cloud security and managed IT for a secure and resilient business.",
    href: "/contact-us",
  },
  {
    id: "innovate",
    icon: Cpu,
    color: "green",
    title: "Innovate",
    description:
      "AI solutions, data analytics and innovation workshops to future-proof your business.",
    href: "/contact-us",
  },
];

// -----------------------------------------------------------------------------
// PracticeAreas Component (Default Export)
// -----------------------------------------------------------------------------

export default function PracticeAreas() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger the entrance animation when the section scrolls into view
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

  return (
    <section
      id="practice-areas"
      className={`pa ${isVisible ? "pa--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="pa-heading"
    >
      <div className="pa__container">
        {/* Section Header */}
        <header className="pa__header">
          <span className="pa__eyebrow">Our Practice Areas</span>
          <h2 className="pa__title" id="pa-heading">
            End-to-End <span className="pa__title-blue">Solutions</span>. Real Business{" "}
            <span className="pa__title-green">Impact</span>.
          </h2>
        </header>

        {/* Practice Area Cards */}
        <ul className="pa__grid" role="list">
          {AREAS.map((area, index) => {
            const Icon = area.icon;
            return (
              <li
                key={area.id}
                className="pa__item"
                style={{ "--delay": `${index * 80}ms` }}
              >
                <article className={`pa__card pa__card--${area.color}`}>
                  <div className="pa__card-main">
                    {/* Soft tinted circle, same icon treatment as the Hero cards */}
                    <div className="pa__card-icon" aria-hidden="true">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <div className="pa__card-body">
                      <h3 className="pa__card-title">{area.title}</h3>
                      <p className="pa__card-text">{area.description}</p>
                    </div>
                  </div>

                  <Link
                    to={area.href}
                    className="pa__card-link"
                    aria-label={`Explore ${area.title}`}
                  >
                    <span>Explore</span>
                    <ArrowRight size={14} className="pa__card-link-icon" aria-hidden="true" />
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
