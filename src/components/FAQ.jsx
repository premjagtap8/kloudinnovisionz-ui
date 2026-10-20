import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Plus, ArrowRight } from "lucide-react";
import "./FAQ.css";

// -----------------------------------------------------------------------------
// Data Definitions (edit questions / answers here)
// Each inner array is one column on desktop.
// -----------------------------------------------------------------------------

const FAQ_COLUMNS = [
  [
    {
      id: "what-is-dt",
      question: "What is Digital Transformation?",
      answer:
        "Digital transformation is the process of using technology to improve how your business operates and serves customers. It covers everything from automating manual processes and moving to the cloud to using data and AI for better decisions.",
    },
    {
      id: "ai-help",
      question: "How can AI help my business?",
      answer:
        "AI can automate repetitive work, surface insights from your data, improve customer service and speed up decision-making. We start with a quick readiness assessment to find where it will have the biggest impact for you.",
    },
    {
      id: "startups",
      question: "Do you work with startups?",
      answer:
        "Yes. We work with startups, SMEs and large enterprises. For early-stage teams we offer flexible engagement models, so you can start small and scale as you grow.",
    },
  ],
  [
    {
      id: "project-time",
      question: "How long does a typical project take?",
      answer:
        "It depends on the scope. A focused automation or website project can take a few weeks, while ERP or large platform builds typically run several months. We share a clear timeline and milestones after the discovery phase.",
    },
    {
      id: "different",
      question: "What makes KlouD InnoVisionZ different?",
      answer:
        "We combine consulting, engineering, security and growth under one roof, backed by 25+ years of experience. That means one accountable partner from strategy through to delivery and ongoing support.",
    },
    {
      id: "support",
      question: "Do you provide post-implementation support?",
      answer:
        "Yes. We offer managed services and 24/7 support and monitoring, along with regular reviews, so your systems stay secure, reliable and continue to deliver value.",
    },
  ],
  [
    {
      id: "industries",
      question: "Which industries do you serve?",
      answer:
        "We serve 12+ industries, including manufacturing, healthcare, construction, education, retail, hospitality, logistics, professional services and government.",
    },
    {
      id: "technologies",
      question: "What technologies do you work with?",
      answer:
        "We work across cloud platforms, modern web and mobile stacks, ERP and CRM systems, data and analytics tools, AI and machine learning, and cyber security solutions. We choose the stack that fits your needs rather than forcing one.",
    },
    {
      id: "get-started",
      question: "How do we get started?",
      answer:
        "Just reach out through the Let’s Talk button. We’ll schedule a short discovery call to understand your goals, then propose a roadmap and clear next steps.",
    },
  ],
];

// Where "View All FAQs" goes. Change this to your real route.
const ALL_FAQS_PATH = "/faqs";

// -----------------------------------------------------------------------------
// FAQ Component (Default Export)
// -----------------------------------------------------------------------------

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openId, setOpenId] = useState(null); // one question open at a time
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

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  let itemIndex = 0;

  return (
    <section
      id="faq"
      className={`faq ${isVisible ? "faq--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="faq-heading"
    >
      <div className="faq__inner">
        <div className="faq__panel">
          {/* Left: intro */}
          <div className="faq__intro">
            <p className="faq__eyebrow">Frequently Asked Questions</p>
            <h2 className="faq__title" id="faq-heading">
              Answers to common questions about our{" "}
              <span className="faq__title-blue">services</span> and{" "}
              <span className="faq__title-green">approach</span>.
            </h2>
            <Link to={ALL_FAQS_PATH} className="faq__link">
              <span>View All FAQs</span>
              <ArrowRight size={14} className="faq__link-icon" aria-hidden="true" />
            </Link>
          </div>

          {/* Right: accordion columns */}
          <div className="faq__columns">
            {FAQ_COLUMNS.map((column, colIndex) => (
              <ul className="faq__column" key={colIndex}>
                {column.map((item) => {
                  const isOpen = openId === item.id;
                  const delay = `${itemIndex++ * 60}ms`;

                  return (
                    <li
                      key={item.id}
                      className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
                      style={{ "--delay": delay }}
                    >
                      <h3 className="faq__heading">
                        <button
                          type="button"
                          className="faq__question"
                          id={`faq-q-${item.id}`}
                          aria-expanded={isOpen}
                          aria-controls={`faq-a-${item.id}`}
                          onClick={() => toggle(item.id)}
                        >
                          <span>{item.question}</span>
                          <Plus size={16} strokeWidth={2.2} className="faq__icon" aria-hidden="true" />
                        </button>
                      </h3>

                      {/* Closed answers are visibility:hidden in the CSS, so they are
                          skipped by screen readers and the Tab key */}
                      <div className="faq__answer-wrap" id={`faq-a-${item.id}`}>
                        <div className="faq__answer-inner">
                          <p className="faq__answer">{item.answer}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
