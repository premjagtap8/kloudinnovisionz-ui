import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  Lightbulb,
  TrendingUp,
  Handshake,
  Target,
  MountainSnow,
  Server,
  Code,
  Cloud,
  BarChart3,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

import heroImage from "../assets/AboutUsHeroImage.png";
import founderImage from "../assets/KadirSirImage.jpg";
import signatureImage from "../assets/SignatureKadirSayed.png";
import ctaImage from "../assets/AboutUsSun.png";

import "./AboutUs.css";

const whoWeAre = [
  {
    icon: Users,
    title: "People First",
    text: "We take the time to understand your business.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    text: "We recommend what makes sense for your goals.",
  },
  {
    icon: TrendingUp,
    title: "Measured Impact",
    text: "We focus on real business outcomes.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    text: "We support your journey beyond implementation.",
  },
];

const journey = [
  {
    icon: Server,
    title: "Infrastructure & Networking",
    text: "Building reliable and secure foundations.",
  },
  {
    icon: Code,
    title: "Software & Applications",
    text: "Delivering solutions for real business needs.",
  },
  {
    icon: Cloud,
    title: "Digital Transformation",
    text: "Modernising operations and enabling growth.",
  },
  {
    icon: BarChart3,
    title: "Tomorrow and Beyond",
    text: "Exploring AI, data and new opportunities.",
    green: true,
  },
];

const principles = [
  {
    icon: Users,
    title: "Understand First",
    text: "Take the time to understand your people, operations and objectives.",
  },
  {
    icon: ClipboardCheck,
    title: "Advise Responsibly",
    text: "Recommend solutions that are practical, measurable and aligned with your goals.",
  },
  {
    icon: TrendingUp,
    title: "Focus on Value",
    text: "Improve efficiency, strengthen capability and support sustainable growth.",
  },
  {
    icon: Handshake,
    title: "Build Lasting Relationships",
    text: "Support you beyond implementation, as your needs evolve.",
  },
];

const AboutUs = () => {
  const { hash } = useLocation();

  // <Link to="/about#story"> changes the URL but React Router does not scroll
  // to the anchor by itself, so do it here.
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <main className="ab-page">
      {/* ================= HERO ================= */}
      <section className="ab-hero">
        <img
          className="ab-hero__img"
          src={heroImage}
          alt=""
          decoding="async"
        />
        <div className="ab-hero__overlay" />
        <div className="ab-container ab-hero__inner">
          <div className="ab-hero__content">
            <div className="ab-eyebrow">
              <span>About Kloud</span>
              <i className="ab-eyebrow__line" aria-hidden="true" />
            </div>
            <h1 className="ab-hero__title">
              Technology Experience.
              <span>Business Perspective.</span>
            </h1>
            <p className="ab-hero__text">
              We connect business goals with practical technology, helping
              organisations move forward with clarity and confidence.
            </p>
            <div className="ab-hero__actions">
              <Link to="/about#story" className="ab-btn ab-btn--primary">
                Our Story <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/team" className="ab-btn ab-btn--outline">
                Meet the Team <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="ab-who" id="story">
        <div className="ab-container ab-who__grid">
          <div className="ab-who__left">
            <div className="ab-eyebrow">
              <span>Who We Are</span>
              <i className="ab-eyebrow__line" aria-hidden="true" />
            </div>
            <h2 className="ab-h2">A Business Technology Partner</h2>
            <p className="ab-who__text">
              Kloud InnoVisionZ brings together experience across IT
              infrastructure, software, digital transformation and business
              growth. We start by understanding the organisation, then help
              identify and implement practical solutions aligned with its goals.
            </p>
          </div>

          <div className="ab-who__right">
            {whoWeAre.map(({ icon: Icon, title, text }) => (
              <div className="ab-feature" key={title}>
                <div className="ab-icon-circle">
                  <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="ab-vm">
        <div className="ab-container ab-vm__grid">
          <article className="ab-vm__card">
            <div className="ab-icon-circle ab-icon-circle--lg">
              <Target size={26} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <div>
              <span className="ab-vm__label">Our Vision</span>
              <h3>A future where technology helps every business realise its potential.</h3>
              <p>
                To be a trusted technology partner, helping organisations
                navigate change, embrace opportunities and build sustainable
                futures.
              </p>
            </div>
          </article>

          <article className="ab-vm__card">
            <div className="ab-icon-circle ab-icon-circle--lg ab-icon-circle--green">
              <MountainSnow size={26} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <div>
              <span className="ab-vm__label">Our Mission</span>
              <h3>Make technology purposeful, practical and meaningful.</h3>
              <p>
                To connect business objectives with the right strategies,
                software, digital capabilities and intelligent
                solutions—delivering value through informed decisions and
                responsible implementation.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="ab-journey">
        <div className="ab-container">
          <div className="ab-eyebrow">
            <span>Our Journey</span>
            <i className="ab-eyebrow__line" aria-hidden="true" />
          </div>
          <h2 className="ab-h2 ab-h2--lg">From Strong Foundations to a Broader Future</h2>
          <p className="ab-journey__sub">
            Our experience across infrastructure, software and digital
            initiatives helps us take a holistic view of each business
            challenge.
          </p>

          <div className="ab-journey__steps">
            {journey.map(({ icon: Icon, title, text, green }, index) => (
              <React.Fragment key={title}>
                <div className="ab-step">
                  <div
                    className={`ab-icon-circle ab-icon-circle--step ${
                      green ? "ab-icon-circle--green" : ""
                    }`}
                  >
                    <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div className="ab-step__body">
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </div>
                {index < journey.length - 1 && (
                  <span className="ab-step__arrow" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="ab-principles">
        <div className="ab-container">
          <div className="ab-principles__head">
            <div>
              <div className="ab-eyebrow">
                <span>What Guides Us</span>
              </div>
              <h2 className="ab-h2 ab-h2--lg">Simple Principles. Real Impact.</h2>
            </div>
            <p>
              Our decisions and recommendations are grounded in a clear set of
              principles that keep your business at the centre.
            </p>
          </div>

          <div className="ab-principles__grid">
            {principles.map(({ icon: Icon, title, text }) => (
              <div className="ab-principle" key={title}>
                <div className="ab-icon-circle ab-icon-circle--step">
                  <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="ab-founder">
        <div className="ab-container">
          <div className="ab-founder__card">
            <div className="ab-founder__photo">
              <img
                src={founderImage}
                alt="Kadir Sayed, Founder"
                loading="lazy"
                decoding="async"
              />
              <span className="ab-founder__pointer" />
            </div>

            <div className="ab-founder__content">
              <div className="ab-founder__main">
                <span className="ab-founder__label">A Message From Our Founder</span>
                <h3>Technology with a Purpose</h3>
                <p>
                  Technology has evolved considerably throughout my career, from
                  hardware and networking to software, digital business and
                  intelligent systems. Yet one principle has remained constant:
                  technology matters most when it solves a real problem and
                  creates meaningful value for people and businesses.
                </p>
                <Link to="/founder-message" className="ab-link">
                  Read My Full Message <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>

              <div className="ab-founder__sign">
                {/* Signature-only PNG (transparent background): the name and
                    titles below are real, selectable text. */}
                <img
                  className="ab-founder__sig"
                  src={signatureImage}
                  alt="Kadir Sayed signature"
                  loading="lazy"
                  decoding="async"
                />
                <strong>Kadir Sayed</strong>
                <span>Founder &amp; Director</span>
                <span>Kloud InnoVisionZ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="ab-cta-wrap">
        <div className="ab-container">
          <div
            className="ab-cta"
            style={{ backgroundImage: `url(${ctaImage})` }}
          >
            <div className="ab-cta__overlay" />
            <div className="ab-cta__text">
              <span className="ab-cta__label">Let&apos;s Work Together</span>
              <h2>Let&apos;s Shape What Comes Next.</h2>
              <p>
                Tell us about <em>your goals</em>, challenges and ideas.
                We&apos;ll start with a conversation and explore how Kloud
                InnoVisionZ can support your next step.
              </p>
            </div>
            <div className="ab-cta__actions">
              <Link to="/contact" className="ab-btn ab-btn--white">
                Let&apos;s Talk <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="ab-btn ab-btn--ghost">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
