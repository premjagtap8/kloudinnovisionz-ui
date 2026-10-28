import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Settings,
  Lock,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import "./KloudWay.css";

// -----------------------------------------------------------------------------
// Data Definitions (edit titles / text here)
// `color` picks the accent in KloudWay.css: blue > sky > aqua > green > forest.
// All five derive from the brand palette (blue #1f6feb / #3b8bff, green #16a34a),
// running from the brand blue into the brand green.
// -----------------------------------------------------------------------------

const STEPS = [
  {
    id: "know",
    icon: Users,
    color: "blue",
    title: "Know",
    description: "We understand your business, challenges and goals deeply.",
  },
  {
    id: "lead",
    icon: Target,
    color: "sky",
    title: "Lead",
    description: "We craft the right strategy and roadmap to achieve success.",
  },
  {
    id: "optimise",
    icon: Settings,
    color: "aqua",
    title: "Optimise",
    description: "We streamline processes and technology for efficiency.",
  },
  {
    id: "unlock",
    icon: Lock,
    color: "green",
    title: "Unlock",
    description: "We unlock growth opportunities with technology and intelligence.",
  },
  {
    id: "deliver",
    icon: ClipboardCheck,
    color: "forest",
    title: "Deliver",
    description: "We deliver measurable results and continuous value.",
  },
];

// Where "Learn More About Our Approach" goes. Change it to a dedicated page if you have one.
const APPROACH_LINK = "/about-us";

// -----------------------------------------------------------------------------
// KloudWay Component (Default Export)
// -----------------------------------------------------------------------------

export default function KloudWay() {
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
      id="our-approach"
      className={`kw ${isVisible ? "kw--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="kw-heading"
    >
      {/* Top: centered section header */}
      <header className="kw__header">
        <p className="kw__eyebrow">The Kloud Way</p>
        <h2 className="kw__heading" id="kw-heading">
          From <span className="kw__heading-accent">Vision</span> to{" "}
          <span className="kw__heading-accent">Value</span>
        </h2>
        <p className="kw__subtitle">
          A structured approach to help businesses navigate change, unlock
          opportunities and achieve sustainable growth.
        </p>
      </header>

      <div className="kw__container">
        {/* Left: intro */}
        <div className="kw__intro">
          <h3 className="kw__title">
            A proven framework for transformation that delivers results.
          </h3>
          <Link to={APPROACH_LINK} className="kw__link">
            {/* One text node: the CSS wraps it into two balanced lines, so screen
                readers get a normal sentence instead of text split by a <br />. */}
            <span className="kw__link-text">Learn More About Our Approach</span>
            <ArrowRight size={15} className="kw__link-icon" aria-hidden="true" />
          </Link>
        </div>

        {/* Right: 5-step framework */}
        <ol className="kw__steps" role="list">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === STEPS.length - 1;

            return (
              <li
                key={step.id}
                className={`kw__step kw__step--${step.color}`}
                style={{ "--delay": `${index * 120}ms` }}
              >
                <div className="kw__step-top">
                  <div className="kw__icon" aria-hidden="true">
                    <Icon size={32} strokeWidth={1.7} />
                  </div>
                  {!isLast && <span className="kw__connector" aria-hidden="true" />}
                </div>

                <div className="kw__step-body">
                  <h3 className="kw__step-title">{step.title}</h3>
                  <p className="kw__step-text">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
