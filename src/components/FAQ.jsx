import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Plus, ArrowRight } from "lucide-react";
import "./FAQ.css";

// -----------------------------------------------------------------------------
// Data Definitions (edit questions / answers here)
// Each inner array is one column on desktop.
// 8 questions are split 3 / 3 / 2 across the three columns.
// -----------------------------------------------------------------------------

const FAQ_COLUMNS = [
  [
    {
      id: "what-we-do",
      question: "What does Kloud Innovisionz do?",
      answer:
        "Kloud Innovisionz works across business technology consulting, digital transformation, enterprise software, digital growth, cybersecurity and AI-related initiatives. The appropriate engagement depends on the organisation's needs and objectives.",
    },
    {
      id: "smes",
      question: "Does Kloud work with small and medium-sized businesses?",
      answer:
        "Kloud's proposed positioning includes SMEs and growing organisations. The scope of each engagement should reflect the client's requirements, budget and available resources.",
    },
    {
      id: "choose-tech",
      question: "Can Kloud help us choose the right technology?",
      answer:
        "Yes. Technology consulting can begin with understanding business objectives, existing systems, operational challenges and constraints before identifying suitable options.",
    },
  ],
  [
    {
      id: "erp-crm",
      question: "Does Kloud develop ERP and CRM software?",
      answer:
        "Kloud's proposed Build practice covers ERP, CRM, custom software and system integrations. The precise solution and delivery approach depend on the project requirements.",
    },
    {
      id: "ai-help",
      question: "How can AI help our business?",
      answer:
        "AI may support tasks such as information retrieval, document processing, customer support and workflow automation. Use cases should be assessed for feasibility, data security, cost and measurable business value.",
    },
    {
      id: "seo-aeo-geo",
      question: "What is the difference between SEO, AEO and GEO?",
      answer:
        "SEO improves a website's visibility in search engines. AEO focuses on making content useful for direct answers, while GEO focuses on visibility and representation in generative AI experiences. These approaches overlap and should be supported by useful content and sound technical foundations.",
    },
  ],
  [
    {
      id: "support",
      question: "Does Kloud provide ongoing support after implementation?",
      answer:
        "Ongoing maintenance and support can be considered as part of the engagement where these services are available and included in the agreed scope.",
    },
    {
      id: "get-started",
      question: "How do we get started?",
      answer:
        "Start by contacting Kloud to explain your business challenge, objectives and priorities. The next step is to determine whether an advisory discussion, assessment or defined project is appropriate.",
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
