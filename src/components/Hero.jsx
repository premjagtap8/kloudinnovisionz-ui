import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Cpu,
  BarChart3,
  Settings,
  CheckCircle2,
  Star,
  Briefcase,
  Building2,
  Globe,
  Users,
  Headphones,
} from "lucide-react";
import KloudLogoMark from "../assets/KloudLogoMark.png";
import logoIcon from "../assets/logo-icon.png"

import "./Hero.css";

// -----------------------------------------------------------------------------
// Data Definitions
// -----------------------------------------------------------------------------

const AVATARS = [
  { id: "avatar-1", src: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: "avatar-2", src: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: "avatar-3", src: "https://randomuser.me/api/portraits/men/75.jpg" },
  { id: "avatar-4", src: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: "avatar-5", src: "https://randomuser.me/api/portraits/men/12.jpg" },
];

const ORBIT_CARDS = [
  {
    id: "strategy",
    slotClass: "hero__orbit-slot--top-center",
    icon: Target,
    title: "STRATEGY",
    subtitle: "Right Roadmap",
    color: "blue",
    floatDelay: "0s",
    enterDelay: "0.2s",
  },
  {
    id: "innovation",
    slotClass: "hero__orbit-slot--top-left",
    icon: Lightbulb,
    title: "INNOVATION",
    subtitle: "Future Ready",
    color: "blue",
    floatDelay: "-1.2s",
    enterDelay: "0.3s",
  },
  {
    id: "technology",
    slotClass: "hero__orbit-slot--top-right",
    icon: Cpu,
    title: "TECHNOLOGY",
    subtitle: "Intelligent Solutions",
    color: "blue",
    floatDelay: "-2.4s",
    enterDelay: "0.4s",
  },
  {
    id: "growth",
    slotClass: "hero__orbit-slot--bottom-left",
    icon: BarChart3,
    title: "GROWTH",
    subtitle: "Unlock Potential",
    color: "green",
    floatDelay: "-3.6s",
    enterDelay: "0.5s",
  },
  {
    id: "transformation",
    slotClass: "hero__orbit-slot--bottom-right",
    icon: Settings,
    title: "TRANSFORMATION",
    subtitle: "Process. People. Performance.",
    color: "blue",
    floatDelay: "-4.8s",
    enterDelay: "0.6s",
  },
  {
    id: "results",
    slotClass: "hero__orbit-slot--bottom-center",
    icon: CheckCircle2,
    title: "RESULTS",
    subtitle: "Measurable Impact",
    color: "blue",
    floatDelay: "-2s",
    enterDelay: "0.7s",
  },
];

const STATS = [
  { id: "experience", icon: Star, color: "blue", value: 25, suffix: "+", label: "Years of Experience" },
  { id: "projects", icon: Briefcase, color: "green", value: 500, suffix: "+", label: "Projects Delivered" },
  { id: "industries", icon: Building2, color: "green", value: 12, suffix: "+", label: "Industries Served" },
  { id: "countries", icon: Globe, color: "blue", value: 3, suffix: "", label: "Countries Presence" },
  { id: "retention", icon: Users, color: "blue", value: 98, suffix: "%", label: "Client Retention" },
  { id: "support", icon: Headphones, color: "blue", isStatic: true, staticValue: "24/7", label: "Support & Monitoring" },
];

// Tells the Navbar to open its Services menu (see the listener in Navbar.jsx)
const openServicesMenu = () => {
  window.dispatchEvent(new CustomEvent("open-services-menu"));
};

// -----------------------------------------------------------------------------
// Count-Up Hook (requestAnimationFrame: in sync with the screen refresh)
// -----------------------------------------------------------------------------

function useCountUp(target, duration = 1600, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart || typeof target !== "number") return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(easeOut * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, shouldStart]);

  return count;
}

// -----------------------------------------------------------------------------
// Stat Item Component
// -----------------------------------------------------------------------------

function StatItem({ item, isVisible }) {
  const { icon: Icon, color, value, suffix = "", label, isStatic, staticValue } = item;
  const count = useCountUp(value, 1600, isVisible);

  const finalValue = isStatic ? staticValue : `${value}${suffix}`;
  const displayValue = isStatic ? staticValue : `${count}${suffix}`;

  return (
    <li className="hero__stat-item">
      <div className={`hero__stat-icon-wrap hero__stat-icon-wrap--${color}`} aria-hidden="true">
        <Icon size={19} />
      </div>
      <div className="hero__stat-content">
        {/* Animated number is hidden from screen readers (it would announce 1, 2, 3...);
            they get the final value once instead. */}
        <span className="hero__stat-number" aria-hidden="true">
          {displayValue}
        </span>
        <span className="hero__sr-only">{finalValue}</span>
        <span className="hero__stat-label">{label}</span>
      </div>
    </li>
  );
}

// -----------------------------------------------------------------------------
// Hero Component (Default Export)
// -----------------------------------------------------------------------------

export default function Hero() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const heroRef = useRef(null);

  // Start the count-up when the hero scrolls into view (fires at once when above the fold)
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" ref={heroRef} aria-labelledby="hero-title">
      {/* Background skyline layer */}
      <div className="hero__bg" aria-hidden="true" />

      <div className="hero__container">
        <div className="hero__main">
          {/* Left column */}
          <div className="hero__content">
            <h1 className="hero__title" id="hero-title">
              <span className="hero__title-line">We Don’t Just Build Technology.</span>
              <span className="hero__title-accent">We Transform Businesses.</span>
            </h1>

            <p className="hero__description">
              From strategy to execution, we help organisations modernise,
              automate and grow with intelligent digital solutions that create
              measurable impact.
            </p>

            <div className="hero__actions">
              <Link to="/contact-us" className="hero__btn hero__btn--primary">
                <span>Let’s Transform Your Business</span>
                <ArrowRight size={15} className="hero__btn-icon" aria-hidden="true" />
              </Link>

              {/* Opens the Services menu in the navbar (no separate /services page) */}
              <button
                type="button"
                className="hero__btn hero__btn--secondary"
                onClick={openServicesMenu}
              >
                <span>Explore Our Capabilities</span>
                <ArrowRight size={15} className="hero__btn-icon" aria-hidden="true" />
              </button>
            </div>

            <div className="hero__social-proof">
              <div className="hero__avatars" aria-hidden="true">
                {AVATARS.map((avatar) => (
                  <img
                    key={avatar.id}
                    src={avatar.src}
                    alt=""
                    className="hero__avatar"
                    decoding="async"
                    width={36}
                    height={36}
                  />
                ))}
              </div>
              <p className="hero__social-text">
                Trusted by <strong>500+</strong> businesses across <strong>12+</strong>{" "}
                industries to deliver results that matter.
              </p>
            </div>
          </div>

          {/* Right column: orbit visual (decorative) */}
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__orbit">
              <div className="hero__orbit-ring" />

              <div className="hero__orbit-arc">
                <svg viewBox="0 0 340 340" className="hero__orbit-svg" focusable="false">
                  <defs>
                    <linearGradient id="heroOrbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1F6FEB" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#1F6FEB" stopOpacity="0.3" />
                    </linearGradient>
                    <filter id="heroArcGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <circle
                    cx="170"
                    cy="170"
                    r="168"
                    fill="none"
                    stroke="url(#heroOrbitGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="85 30 140 40 70 35"
                    strokeLinecap="round"
                    filter="url(#heroArcGlow)"
                  />
                  <circle cx="170" cy="2" r="3.5" fill="#FFFFFF" filter="url(#heroArcGlow)" />
                  <circle cx="338" cy="170" r="3.5" fill="#1F6FEB" filter="url(#heroArcGlow)" />
                </svg>
              </div>

              <div className="hero__orbit-center">
                <img
                  src={logoIcon}
                  alt=""
                  className="hero__orbit-logo"
                  width={124}
                  height={124}
                />
              </div>

              {ORBIT_CARDS.map((card) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={card.id}
                    className={`hero__orbit-slot ${card.slotClass}`}
                    style={{ "--enter-delay": card.enterDelay }}
                  >
                    <div className="hero__orbit-float" style={{ "--float-delay": card.floatDelay }}>
                      <div className="hero__orbit-card">
                        <div
                          className={`hero__orbit-card-icon-wrap hero__orbit-card-icon-wrap--${card.color}`}
                        >
                          <CardIcon size={20} aria-hidden="true" />
                        </div>
                        <div className="hero__orbit-card-text">
                          <span className="hero__orbit-card-title">{card.title}</span>
                          <span className="hero__orbit-card-subtitle">{card.subtitle}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <section className="hero__stats-card" aria-labelledby="hero-stats-title">
          <div className="hero__stats-lead">
            <h2 className="hero__stats-title" id="hero-stats-title">
              25+ Years of<br />Technology Excellence
            </h2>
            <p className="hero__stats-subtitle">Built on trust. Driven by innovation.</p>
          </div>

          <ul className="hero__stats-list">
            {STATS.map((stat) => (
              <StatItem key={stat.id} item={stat} isVisible={isIntersecting} />
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
