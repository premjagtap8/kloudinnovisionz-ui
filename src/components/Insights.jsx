import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Download, CloudDownload } from "lucide-react";
import aiImg from "../assets/insight-ai.jpg";
import strategyImg from "../assets/insight-strategy.jpg";
import cyberImg from "../assets/insight-cyber.jpg";
import "./Insights.css";

// -----------------------------------------------------------------------------
// Data Definitions (edit titles / dates / links here)
// `tone` is "blue" or "green" only (the two brand colours).
// -----------------------------------------------------------------------------

const ARTICLES = [
  {
    id: "ai-operations",
    image: aiImg,
    imagePosition: "center 45%",
    category: "AI",
    tone: "blue",
    date: "May 22, 2024",
    dateTime: "2024-05-22",
    title: "How AI is Transforming Business Operations",
    href: "#insight-ai",
  },
  {
    id: "sme-roadmap",
    image: strategyImg,
    imagePosition: "center 50%",
    category: "Strategy",
    tone: "blue",
    date: "May 15, 2024",
    dateTime: "2024-05-15",
    title: "Digital Transformation Roadmap for SMEs",
    href: "#insight-strategy",
  },
  {
    id: "cyber-trends",
    image: cyberImg,
    imagePosition: "center 40%",
    category: "Cyber Security",
    tone: "green",
    date: "May 10, 2024",
    dateTime: "2024-05-10",
    title: "Top Cyber Security Trends in 2024",
    href: "#insight-cyber",
  },
];

const RESOURCES = [
  { id: "dt-checklist", label: "Digital Transformation Checklist", href: "#resource-dt-checklist" },
  { id: "ai-readiness", label: "AI Readiness Assessment", href: "#resource-ai-readiness" },
  { id: "erp-guide", label: "ERP Selection Guide", href: "#resource-erp-guide" },
  { id: "cyber-checklist", label: "Cyber Security Checklist", href: "#resource-cyber-checklist" },
  { id: "bpa-template", label: "Business Process Audit Template", href: "#resource-bpa-template" },
];

// -----------------------------------------------------------------------------
// Insights Component (Default Export)
// -----------------------------------------------------------------------------

export default function Insights() {
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
      id="insights"
      className={`ins ${isVisible ? "ins--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="ins-heading"
    >
      <div className="ins__panel">
        {/* Left: intro */}
        <div className="ins__intro">
          <span className="ins__eyebrow">Insights &amp; Resources</span>
          <h2 className="ins__title" id="ins-heading">
            Knowledge that empowers better decisions.
          </h2>
          <p className="ins__desc">
            Stay updated with expert insights, guides, frameworks and the latest
            technology trends.
          </p>
          <a href="#insights-all" className="ins__link">
            <span>Explore Insights</span>
            <ArrowRight size={14} className="ins__link-icon" aria-hidden="true" />
          </a>
        </div>

        {/* Middle: article cards (the whole card is clickable through the "Read More" link) */}
        <ul className="ins__cards" role="list">
          {ARTICLES.map((article, index) => (
            <li
              key={article.id}
              className="ins__cards-item"
              style={{ "--delay": `${index * 100}ms` }}
            >
              <article className="ins__card">
                <div className="ins__card-media">
                  <img
                    src={article.image}
                    alt=""
                    className="ins__card-img"
                    style={{ objectPosition: article.imagePosition }}
                    loading="lazy"
                    decoding="async"
                  />
                  <time className="ins__card-date" dateTime={article.dateTime}>
                    {article.date}
                  </time>
                </div>

                <div className="ins__card-body">
                  <span className={`ins__tag ins__tag--${article.tone}`}>
                    {article.category}
                  </span>
                  <h3 className="ins__card-title">{article.title}</h3>
                  <a
                    href={article.href}
                    className="ins__card-link"
                    aria-label={`Read more: ${article.title}`}
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} className="ins__link-icon" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* Right: free resources */}
        <aside className="ins__resources" aria-labelledby="ins-resources-heading">
          <h3 className="ins__resources-title" id="ins-resources-heading">
            Free Resources
          </h3>

          <div className="ins__resources-main">
            <ul className="ins__resources-list" role="list">
              {RESOURCES.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="ins__resource">
                    <span className="ins__resource-icon" aria-hidden="true">
                      <Download size={12} strokeWidth={2.4} />
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="ins__resources-art" aria-hidden="true">
              <CloudDownload size={54} strokeWidth={1.3} />
            </div>
          </div>

          <a href="#resources" className="ins__resources-btn">
            <span>Explore All Resources</span>
            <ArrowRight size={15} className="ins__link-icon" aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
}
