import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  AlertTriangle,
  Settings,
  BarChart3,
  Workflow,
  TrendingUp,
  Check,
  Quote,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import heroImage from "../assets/CaseStudiesHeroSectionblur.png";
import erpImage from "../assets/CaseStudiesErpBlurImage.png";
import realEstateImage from "../assets/CaseStudiesRealEstateBlurImage.png";
import educationImage from "../assets/CaseStudiesThirdImageblur.png";
import engineerImage from "../assets/CaseStudiesengineerblur.png";
import ecommerceImage from "../assets/CaseStudiesEccomerceBlurImage.png";
import healthcareImage from "../assets/CaseStudiesHealthCareImageblur.png";
import logisticsImage from "../assets/CaseStudiesLogistics.png";
import ctaImage from "../assets/AboutUsSun.png";
import operationsManagerImage from "../assets/OperationsManager.png";

import "./CaseStudies.css";

// -----------------------------------------------------------------------------
// Data (edit titles / text / images here)
// Each case study carries its own modal content: industry, stats, challenge,
// solution and results. The modal opens when "Read Case Study" is clicked.
// -----------------------------------------------------------------------------
const FILTERS = [
  "All",
  "Manufacturing",
  "Real Estate",
  "Education",
  "Retail & eCommerce",
  "Healthcare",
  "Hospitality",
  "Logistics",
  "Professional Services",
];

const caseStudies = [
  {
    slug: "erp-implementation-operations-efficiency",
    category: "Manufacturing",
    industry: "Manufacturing Industry",
    title: "ERP Implementation for Operations Efficiency",
    text: "Streamlined operations and improved visibility across multiple locations.",
    image: erpImage,
    stats: [
      { value: "40%", label: "Reduction in manual processes" },
      { value: "60%", label: "Faster reporting and decision-making" },
      { value: "25%", label: "Improvement in operational efficiency" },
    ],
    challenge:
      "Operations were managed through multiple disconnected systems, leading to manual processes, data inconsistencies and limited visibility across locations.",
    solution:
      "Implemented a customised ERP solution with integrated modules for production, inventory, finance and reporting, along with staff training and a phased rollout.",
    results: [
      "40% reduction in manual processes",
      "60% faster reporting and decision-making",
      "25% improvement in operational efficiency",
      "A scalable foundation for future growth",
    ],
  },
  {
    slug: "digital-growth-strategy-real-estate",
    category: "Real Estate",
    industry: "Real Estate Industry",
    title: "Digital Growth Strategy for a Real Estate Brand",
    text: "Increased qualified leads and project enquiries through integrated digital campaigns.",
    image: realEstateImage,
    stats: [
      { value: "3x", label: "Increase in qualified enquiries" },
      { value: "45%", label: "Lower cost per lead" },
      { value: "2x", label: "More site visit bookings" },
    ],
    challenge:
      "The brand relied on scattered promotions and offline channels. Enquiries were not tracked in one place, so it was hard to know which campaigns brought in genuine buyers.",
    solution:
      "Built an integrated digital strategy covering SEO, targeted paid campaigns, project landing pages and a CRM that captures every enquiry, with clear reporting on lead quality and source.",
    results: [
      "Three times more qualified project enquiries",
      "Lower cost per lead across campaigns",
      "Every enquiry tracked from first click to site visit",
      "Clear view of which channels drive real buyers",
    ],
  },
  {
    slug: "web-platform-education-group",
    category: "Education",
    industry: "Education Sector",
    title: "Web Platform for an Education Group",
    text: "A unified platform for courses, admissions and student management.",
    image: educationImage,
    stats: [
      { value: "50%", label: "Faster admissions processing" },
      { value: "1", label: "Platform for all campuses" },
      { value: "70%", label: "Less paperwork for staff" },
    ],
    challenge:
      "Course information, admissions and student records lived in separate tools and spreadsheets across campuses, causing delays, duplicate entries and a confusing experience for applicants.",
    solution:
      "Delivered a single web platform with course listings, online applications, document uploads, fee tracking and a student management module, with role-based access for staff and administrators.",
    results: [
      "Admissions processed about 50% faster",
      "One consistent experience across all campuses",
      "Significantly less manual paperwork for staff",
      "Accurate, up-to-date student records in one place",
    ],
  },
  {
    slug: "ecommerce-platform-retail-brand",
    category: "Retail & eCommerce",
    industry: "Retail & eCommerce",
    title: "eCommerce Platform for a Growing Retail Brand",
    text: "A scalable online store with integrated inventory and order management.",
    image: ecommerceImage,
    stats: [
      { value: "2.5x", label: "Growth in online orders" },
      { value: "35%", label: "Fewer stock-out issues" },
      { value: "30%", label: "Faster order fulfilment" },
    ],
    challenge:
      "The brand's existing store could not handle growing traffic, and inventory was updated by hand, leading to overselling, delayed orders and unhappy customers.",
    solution:
      "Built a scalable eCommerce platform with real-time inventory sync, automated order management, secure payments, shipping integration and an admin dashboard for day-to-day control.",
    results: [
      "Online orders grew more than twofold",
      "Fewer stock-outs and overselling errors",
      "Faster, more reliable order fulfilment",
      "A store ready for new products and categories",
    ],
  },
  {
    slug: "crm-automation-healthcare-provider",
    category: "Healthcare",
    industry: "Healthcare Sector",
    title: "CRM and Automation for a Healthcare Provider",
    text: "Improved patient engagement and operational efficiency through a unified CRM and automation workflows.",
    image: healthcareImage,
    stats: [
      { value: "40%", label: "Fewer missed appointments" },
      { value: "55%", label: "Less manual follow-up work" },
      { value: "30%", label: "Higher patient engagement" },
    ],
    challenge:
      "Patient details, appointments and follow-ups were handled across different systems. Staff spent hours on manual reminders, and patients often missed visits or follow-up care.",
    solution:
      "Implemented a unified CRM with automated appointment reminders, follow-up workflows, patient communication templates and reporting, designed with data privacy and access control in mind.",
    results: [
      "Noticeably fewer missed appointments",
      "Staff freed from repetitive follow-up tasks",
      "Better patient engagement and satisfaction",
      "A single, secure view of every patient interaction",
    ],
  },
  {
    slug: "operational-dashboard-logistics-company",
    category: "Logistics",
    industry: "Logistics Industry",
    title: "Operational Dashboard for a Logistics Company",
    text: "Real-time visibility across fleet, inventory and deliveries with a custom dashboard.",
    image: logisticsImage,
    stats: [
      { value: "Real-time", label: "Fleet and delivery visibility" },
      { value: "35%", label: "Faster decision-making" },
      { value: "20%", label: "Fewer delivery delays" },
    ],
    challenge:
      "Fleet, inventory and delivery data sat in spreadsheets and separate tools. Managers lacked a live view, so problems were spotted late and delays were hard to explain to customers.",
    solution:
      "Developed a custom operational dashboard that brings fleet status, inventory levels and delivery progress into one live view, with alerts, filters and exportable reports for managers.",
    results: [
      "Live visibility across fleet, inventory and deliveries",
      "Faster, better-informed operational decisions",
      "Fewer delays through early alerts",
      "Reports ready in minutes instead of hours",
    ],
  },
];

// Featured block on the page (uses the first case study's modal content)
const featured = {
  slug: "erp-implementation-operations-efficiency",
  title: "ERP Implementation for Operations Efficiency",
  industry: "Manufacturing Industry",
  text: "A leading manufacturing company partnered with Kloud InnoVisionZ to modernise its operations, improve data visibility and support future growth through a unified ERP solution.",
  image: engineerImage,
  stats: [
    { icon: Workflow, value: "40%", label: "Reduction in manual processes" },
    { icon: BarChart3, value: "60%", label: "Faster reporting and decision-making" },
    { icon: TrendingUp, value: "25%", label: "Improvement in operational efficiency" },
  ],
  challenge: caseStudies[0].challenge,
  solution: caseStudies[0].solution,
  results: caseStudies[0].results,
};

// Placeholder testimonials: replace with real, approved client quotes.
// Optional: add `avatar: importedImage` to show a photo instead of initials.
const testimonials = [
  {
    quote:
      "Kloud InnoVisionZ took the time to understand our business, recommended a practical solution and supported us throughout the implementation. The result has been better visibility, improved efficiency and a stronger foundation for growth.",
    role: "Operations Director",
    company: "Manufacturing Company",
    initials: "OD",
    avatar: null,
  },
  {
    quote:
      "The team explained every option in plain language and delivered what they promised. Our enquiries are now tracked in one place, follow-ups no longer fall through the cracks, and we can finally see which campaigns bring in the most qualified leads.",
    role: "Marketing Head",
    company: "Real Estate Company",
    initials: "MH",
    avatar: null,
  },
  {
    quote:
      "We moved from spreadsheets to a single dashboard for fleet, inventory and deliveries. Our team now sees everything in real time, decisions are faster, and the support after go-live has been quick and dependable throughout.",
    role: "Operations Manager",
    company: "Logistics Company",
    initials: "OM",
    avatar: operationsManagerImage,
  },
];

// -----------------------------------------------------------------------------
// Small reusable card
// -----------------------------------------------------------------------------
function CaseCard({ item, onRead }) {
  return (
    <article className="cs-card">
      <div className="cs-card__media">
        <img src={item.image} alt="" loading="lazy" decoding="async" />
        <span className="cs-card__badge">{item.category}</span>
      </div>
      <div className="cs-card__body">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <button type="button" className="cs-link" onClick={() => onRead(item)}>
          Read Case Study <ArrowRight size={15} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

// -----------------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------------
const CaseStudies = () => {
  const [filter, setFilter] = useState("All");
  const [slide, setSlide] = useState(0);
  const [selected, setSelected] = useState(null);
  const closeBtnRef = useRef(null);

  const isAll = filter === "All";
  const filtered = caseStudies.filter((c) => c.category === filter);
  const t = testimonials[slide];

  const prev = () => setSlide((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setSlide((i) => (i + 1) % testimonials.length);

  const showAll = () => {
    setFilter("All");
    document.getElementById("cs-filters")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openFeatured = () => {
    const match = caseStudies.find((c) => c.slug === featured.slug);
    if (match) setSelected(match);
  };

  // Modal UX: lock page scroll, close with Escape, focus the close button.
  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <main className="cs-page">
      {/* ================= HERO ================= */}
      <section className="cs-hero">
        <img
          className="cs-hero__img"
          src={heroImage}
          alt=""
          decoding="async"
          fetchpriority="high"
        />
        <div className="cs-hero__overlay" />
        <div className="cs-container cs-hero__inner">
          <div className="cs-hero__content">
            <div className="cs-eyebrow">Case Studies</div>
            <h1 className="cs-hero__title">
              Practical Thinking.
              <span>Real Results.</span>
            </h1>
            <p className="cs-hero__text">
              Explore how we have helped businesses solve real challenges through
              the right combination of strategy, technology and execution.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FILTERS + GRID ================= */}
      <section className="cs-listing" id="cs-filters">
        <div className="cs-container">
          <div className="cs-filters" role="group" aria-label="Filter case studies by industry">
            {FILTERS.map((name) => (
              <button
                key={name}
                type="button"
                className={`cs-pill ${filter === name ? "cs-pill--active" : ""}`}
                aria-pressed={filter === name}
                onClick={() => setFilter(name)}
              >
                {name}
              </button>
            ))}
          </div>

          {isAll ? (
            <div className="cs-grid">
              {caseStudies.slice(0, 3).map((item) => (
                <CaseCard key={item.slug} item={item} onRead={setSelected} />
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <div className="cs-grid" aria-live="polite">
              {filtered.map((item) => (
                <CaseCard key={item.slug} item={item} onRead={setSelected} />
              ))}
            </div>
          ) : (
            <div className="cs-empty" aria-live="polite">
              <h3>No {filter} case studies yet</h3>
              <p>We are adding more work soon. Browse all case studies in the meantime.</p>
              <button type="button" className="cs-btn cs-btn--primary" onClick={showAll}>
                Show all case studies <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured + More sections only show in the "All" view */}
      {isAll && (
        <>
          {/* ================= FEATURED ================= */}
          <section className="cs-featured">
            <div className="cs-container">
              <div className="cs-featured__grid">
                <div className="cs-featured__text">
                  <div className="cs-eyebrow">Featured Case Study</div>
                  <h2 className="cs-h2">{featured.title}</h2>
                  <p className="cs-featured__industry">{featured.industry}</p>
                  <p className="cs-featured__desc">{featured.text}</p>
                  <button type="button" className="cs-btn cs-btn--primary" onClick={openFeatured}>
                    View Full Case Study <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>

                <div className="cs-featured__media">
                  <img src={featured.image} alt="" loading="lazy" decoding="async" />
                  <ul className="cs-stats">
                    {featured.stats.map(({ icon: Icon, value, label }) => (
                      <li className="cs-stat" key={label}>
                        <span className="cs-icon-circle">
                          <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                        </span>
                        <div>
                          <strong>{value}</strong>
                          <span>{label}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="cs-detail">
                <article className="cs-detail__card">
                  <span className="cs-icon-circle cs-icon-circle--red">
                    <AlertTriangle size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <h4>The Challenge</h4>
                    <p>{featured.challenge}</p>
                  </div>
                </article>

                <article className="cs-detail__card">
                  <span className="cs-icon-circle">
                    <Settings size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <h4>Our Solution</h4>
                    <p>{featured.solution}</p>
                  </div>
                </article>

                <article className="cs-detail__card">
                  <span className="cs-icon-circle cs-icon-circle--green">
                    <BarChart3 size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <h4>The Results</h4>
                    <ul className="cs-checks">
                      {featured.results.map((r) => (
                        <li key={r}>
                          <Check size={14} strokeWidth={2.4} aria-hidden="true" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* ================= MORE CASE STUDIES ================= */}
          <section className="cs-more">
            <div className="cs-container">
              <div className="cs-more__head">
                <div>
                  <div className="cs-eyebrow">More Case Studies</div>
                  <p className="cs-more__sub">
                    Different industries. Different challenges. Practical solutions
                    that deliver measurable impact.
                  </p>
                </div>
                <Link to="/case-studies" className="cs-link" onClick={showAll}>
                  View All Case Studies <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>

              <div className="cs-grid">
                {caseStudies.slice(3).map((item) => (
                  <CaseCard key={item.slug} item={item} onRead={setSelected} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ================= TESTIMONIALS ================= */}
      <section className="cs-voices">
        <div className="cs-container cs-voices__grid">
          <div className="cs-voices__intro">
            <div className="cs-eyebrow">Client Perspective</div>
            <h2 className="cs-h2 cs-h2--lg">What Our Clients Say</h2>
            <p>
              We value long-term partnerships and are proud to support
              organisations across different industries in their growth journey.
            </p>
            <div className="cs-voices__nav">
              <button type="button" onClick={prev} aria-label="Previous testimonial">
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button type="button" onClick={next} aria-label="Next testimonial">
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <figure className="cs-quote" key={slide} aria-live="polite">
            <Quote className="cs-quote__mark" size={30} aria-hidden="true" />
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <span
                className={`cs-avatar${t.avatar ? " cs-avatar--photo" : ""}`}
                aria-hidden="true"
              >
                {t.avatar ? <img src={t.avatar} alt="" /> : t.initials}
              </span>
              <span>
                <strong>{t.role}</strong>
                <span>{t.company}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ================= CTA (full-width band) ================= */}
      <section className="cs-cta-wrap">
        <div className="cs-cta" style={{ backgroundImage: `url(${ctaImage})` }}>
          <div className="cs-cta__overlay" />
          <div className="cs-cta__text">
            <span className="cs-cta__label">Let&apos;s Work Together</span>
            <h2>
              Have a <em>Similar</em> Challenge?
            </h2>
            <p>
              Tell us about <em>your goals</em>, challenges and ideas.
              We&apos;ll start with a conversation and explore how Kloud
              InnoVisionZ can support your next step.
            </p>
          </div>
          <div className="cs-cta__actions">
            <Link to="/contact-us" className="cs-btn cs-btn--white">
              Let&apos;s Talk <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/contact-us" className="cs-btn cs-btn--ghost">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDY MODAL ================= */}
      {selected && (
        <div
          className="cs-modal-backdrop"
          role="presentation"
          onClick={() => setSelected(null)}
        >
          <section
            className="cs-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              ref={closeBtnRef}
              className="cs-modal__close"
              onClick={() => setSelected(null)}
              aria-label="Close case study"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <img className="cs-modal__img" src={selected.image} alt="" />

            <div className="cs-modal__body">
              <span className="cs-modal__tag">{selected.category}</span>
              <p className="cs-modal__industry">{selected.industry}</p>
              <h2>{selected.title}</h2>
              <p className="cs-modal__lead">{selected.text}</p>

              <ul className="cs-modal__stats">
                {selected.stats.map((s) => (
                  <li key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>

              <div className="cs-modal__block">
                <h3>
                  <AlertTriangle size={16} aria-hidden="true" /> The Challenge
                </h3>
                <p>{selected.challenge}</p>
              </div>

              <div className="cs-modal__block">
                <h3>
                  <Settings size={16} aria-hidden="true" /> Our Solution
                </h3>
                <p>{selected.solution}</p>
              </div>

              <div className="cs-modal__block">
                <h3>
                  <BarChart3 size={16} aria-hidden="true" /> The Results
                </h3>
                <ul className="cs-checks">
                  {selected.results.map((r) => (
                    <li key={r}>
                      <Check size={14} strokeWidth={2.4} aria-hidden="true" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cs-modal__actions">
                <Link to="/contact-us" className="cs-btn cs-btn--primary">
                  Discuss a Similar Project <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <button
                  type="button"
                  className="cs-link"
                  onClick={() => setSelected(null)}
                >
                  Back to case studies <ArrowRight size={15} aria-hidden="true" />
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default CaseStudies;
