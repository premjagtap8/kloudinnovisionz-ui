import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Code2,
  Settings,
  BarChart3,
  ShieldCheck,
  Cpu,
  ArrowRight,
} from "lucide-react";
import "./WhatWeDo.css";

// -----------------------------------------------------------------------------
// Data Definitions (edit titles / text / links here)
// -----------------------------------------------------------------------------

const SERVICES = [
  {
    id: "consult",
    icon: Users,
    color: "blue",
    title: "Consult",
    description:
      "Strategic consulting and technology roadmaps that align with your business goals.",
    href: "#consult",
  },
  {
    id: "build",
    icon: Code2,
    color: "blue",
    title: "Build",
    description:
      "Custom software, ERP, CRM, portals & digital platforms built for scale and performance.",
    href: "#build",
  },
  {
    id: "transform",
    icon: Settings,
    color: "teal",
    title: "Transform",
    description:
      "Process automation, cloud migration and digital transformation for modern businesses.",
    href: "#transform",
  },
  {
    id: "grow",
    icon: BarChart3,
    color: "green",
    title: "Grow",
    description:
      "Digital marketing, SEO, AEO, GEO & lead generation strategies that drive measurable growth.",
    href: "#grow",
  },
  {
    id: "protect",
    icon: ShieldCheck,
    color: "green",
    title: "Protect",
    description:
      "Cyber security, cloud security, compliance and managed IT for business resilience.",
    href: "#protect",
  },
  {
    id: "innovate",
    icon: Cpu,
    color: "blue",
    title: "Innovate",
    description:
      "AI solutions, data analytics and innovation workshops to prepare you for the future.",
    href: "#innovate",
  },
];

// -----------------------------------------------------------------------------
// WhatWeDo Component (Default Export)
// -----------------------------------------------------------------------------

export default function WhatWeDo() {
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
      id="what-we-do"
      className={`wwd ${isVisible ? "wwd--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="wwd-heading"
    >
      <div className="wwd__container">
        {/* Section Header */}
        <header className="wwd__header">
          <span className="wwd__eyebrow">What We Do</span>
          <h2 className="wwd__title" id="wwd-heading">
            End-to-End Solutions. Real Business Impact.
          </h2>
        </header>

        {/* Service Cards */}
        <ul className="wwd__grid">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <li
                key={service.id}
                className="wwd__item"
                style={{ "--delay": `${index * 80}ms` }}
              >
                <article className={`wwd__card wwd__card--${service.color}`}>
                  <div className="wwd__card-icon" aria-hidden="true">
                    <Icon size={38} strokeWidth={1.7} />
                  </div>

                  <div className="wwd__card-body">
                    <h3 className="wwd__card-title">{service.title}</h3>
                    <p className="wwd__card-text">{service.description}</p>

                    <a
                      href={service.href}
                      className="wwd__card-link"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={14} className="wwd__card-link-icon" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
