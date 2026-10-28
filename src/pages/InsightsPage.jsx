import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, TrendingUp, Mail, Download, FileText,
  CheckCircle2, X
} from "lucide-react";
import "./InsightsPage.css";
import ctaImage from "../assets/AboutUsSun.png";
import heroImage from "../assets/InsightsHero.png";

const categories = [
  "All", "Digital Transformation", "AI & Innovation", "ERP & CRM",
  "Cyber Security", "SEO / AEO / GEO", "Business Strategy", "Industry Insights"
];

const articles = [
  {
    category: "Digital Transformation", date: "12 Oct 2026",
    title: "A Practical Guide to Digital Transformation for SMEs",
    description: "Key steps, common challenges and how to achieve measurable progress.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85"
  },
  {
    category: "AI & Innovation", date: "28 Sep 2026",
    title: "Real Business Use Cases for AI in 2026",
    description: "Practical examples of how businesses are using AI to improve efficiency and decision-making.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=85"
  },
  {
    category: "ERP & CRM", date: "22 Sep 2026",
    title: "ERP vs CRM: A Practical Comparison for Business Leaders",
    description: "Understand the differences, key benefits and how to choose the right solution for your business.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=85"
  },
  {
    category: "SEO / AEO / GEO", date: "15 Sep 2026",
    title: "SEO, AEO and GEO: What Businesses Should Understand",
    description: "How search and AI-driven discovery are evolving and what it means for your digital strategy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85"
  },
  {
    category: "Cyber Security", date: "10 Sep 2026",
    title: "Cybersecurity for SMEs: A Practical Starting Point",
    description: "Essential steps to protect your data, systems and business operations.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=85"
  },
  {
    category: "Business Strategy", date: "05 Sep 2026",
    title: "Building a Scalable Foundation for Growth",
    description: "Why the right technology foundations matter and how to plan for future opportunities.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=85"
  }
];

const featuredArticle = {
  category: "AI & Innovation",
  date: "18 Oct 2026",
  title: "A Practical Guide to AI Readiness for Businesses",
  description: "Understand how to assess your current position, identify real opportunities and prepare your organisation for practical and responsible AI adoption.",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=90"
};

const popular = [
  { title: "Digital Transformation for SMEs", date: "12 Oct 2026", image: articles[0].image },
  { title: "ERP vs CRM: How to Decide What You Need", date: "08 Oct 2026", image: articles[2].image },
  { title: "SEO, AEO and GEO: What Businesses Should Know", date: "02 Oct 2026", image: articles[3].image },
  { title: "Cybersecurity Basics for Growing Businesses", date: "28 Sep 2026", image: articles[4].image },
  { title: "Automation Opportunities in Everyday Operations", date: "20 Sep 2026", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=85" }
];

function ArticleCard({ article, onRead }) {
  return (
    <article className="ins-card">
      <button type="button" className="ins-card-image-btn" onClick={() => onRead(article)} aria-label={`Read ${article.title}`}>
        <img src={article.image} alt="" loading="lazy" />
      </button>
      <div className="ins-card-content">
        <div className="ins-card-meta">
          <span className="ins-tag">{article.category}</span>
          <time>{article.date}</time>
        </div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <button type="button" className="ins-text-link" onClick={() => onRead(article)}>Read Article <ArrowRight size={15} /></button>
      </div>
    </article>
  );
}

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [resourceOpen, setResourceOpen] = useState(false);

  const filteredArticles = useMemo(() => (
    activeCategory === "All" ? articles : articles.filter(a => a.category === activeCategory)
  ), [activeCategory]);

  // Modal UX: lock page scroll while a modal is open and close it with Escape.
  const modalOpen = Boolean(selectedArticle) || resourceOpen;
  useEffect(() => {
    if (!modalOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedArticle(null);
        setResourceOpen(false);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modalOpen]);

  function subscribe(e) {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <main className="insights-page">
      <section className="ins-hero">
        <div className="ins-hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="ins-hero-shade" />
        <div className="ins-hero-content">
          <div className="ins-eyebrow">INSIGHTS</div>
          <h1>Better Questions<br />Lead to <span>Better Decisions.</span></h1>
          <p>Practical perspectives on digital transformation, enterprise<br className="ins-desktop-break" /> software, AI, cybersecurity and digital growth—designed to<br className="ins-desktop-break" /> help business leaders make informed decisions.</p>
        </div>
        <div className="ins-hero-mantra" aria-hidden="true">Ideas.<br />Strategy.<br />Technology.<br />People.<br />Growth.<i /></div>
      </section>

      <section className="ins-body">
        <div className="ins-category-bar" role="group" aria-label="Filter insights by category">
          {categories.map(category => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? "active" : ""}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="ins-layout">
          <div className="ins-main">
            {activeCategory === "All" && (
              <article className="ins-featured">
                <img className="ins-featured-image" src={featuredArticle.image} alt="AI technology and digital innovation" />
                <div className="ins-featured-content">
                  <div className="ins-featured-meta"><span>FEATURED INSIGHT</span><time>{featuredArticle.date}</time></div>
                  <h2>{featuredArticle.title}</h2>
                  <p>{featuredArticle.description}</p>
                  <button type="button" className="ins-text-link" onClick={() => setSelectedArticle(featuredArticle)}>Read Full Article <ArrowRight size={15} /></button>
                </div>
              </article>
            )}

            <div className="ins-latest-heading">
              <h2>{activeCategory === "All" ? "Latest Insights" : activeCategory}</h2>
              <button type="button" onClick={() => setActiveCategory("All")}>View All Insights <ArrowRight size={15} /></button>
            </div>
            <div className="ins-grid">
              {filteredArticles.map(article => <ArticleCard key={article.title} article={article} onRead={setSelectedArticle} />)}
            </div>
            {filteredArticles.length === 0 && <p className="ins-empty">No insights in this category yet.</p>}
          </div>

          <aside className="ins-sidebar">
            <section className="ins-panel ins-popular">
              <h2><TrendingUp size={15} /> POPULAR TOPICS</h2>
              <div className="ins-popular-list">
                {popular.map((item, index) => (
                  <button type="button" className="ins-popular-item" key={item.title} onClick={() => setSelectedArticle({
                    ...item,
                    category: "Popular Topic",
                    description: "Explore practical ideas, important considerations, and actionable next steps for your business."
                  })}>
                    <span className="ins-popular-number">{String(index + 1).padStart(2, "0")}</span>
                    <img src={item.image} alt="" loading="lazy" />
                    <span className="ins-popular-text"><strong>{item.title}</strong><time>{item.date}</time></span>
                  </button>
                ))}
              </div>
            </section>

            <section className="ins-panel ins-subscribe">
              {subscribed ? (
                <div className="ins-subscribe-success">
                  <CheckCircle2 size={36} />
                  <h2>You’re on the list!</h2>
                  <p>Thanks for subscribing. Your inbox is set for fresh ideas.</p>
                </div>
              ) : (
                <>
                  <div className="ins-subscribe-title">
                    <div className="ins-subscribe-icon"><Mail size={22} /></div>
                    <div><h2>Get the Latest Insights</h2><p>Practical ideas, industry trends and technology perspectives, directly in your inbox.</p></div>
                  </div>
                  <form onSubmit={subscribe}>
                    <input type="email" aria-label="Your email address" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required />
                    <button className="ins-btn-primary" type="submit">Subscribe <ArrowRight size={16} /></button>
                  </form>
                  <p className="ins-privacy">We respect your privacy. No spam,<br /> just relevant insights.</p>
                </>
              )}
            </section>

            <section className="ins-panel ins-resource">
              <h2><span className="ins-resource-icon"><FileText size={16} /></span> Featured Resource</h2>
              <button type="button" className="ins-resource-cover" onClick={() => setResourceOpen(true)} aria-label="Open AI Readiness Checklist">
                <span className="ins-resource-cover-title">AI READINESS<br />CHECKLIST</span>
                <small>FOR BUSINESS LEADERS</small>
              </button>
              <h3>AI Readiness Checklist for Business Leaders</h3>
              <p>A practical checklist to help you assess opportunities, risks and next steps.</p>
              <button type="button" className="ins-text-link" onClick={() => setResourceOpen(true)}>Download Now <ArrowRight size={15} /></button>
            </section>
          </aside>
        </div>
      </section>

      <section className="ins-cta" style={{ backgroundImage: `url(${ctaImage})` }}>
        <div className="ins-cta-overlay" />
        <div className="ins-cta-inner">
          <div>
            <div className="ins-cta-eyebrow">HAVE A QUESTION OR TOPIC IN MIND?</div>
            <h2>Let’s Explore the Right Insights for Your Business.</h2>
            <p>Tell us what you’re looking to understand. We’ll be happy to share relevant<br className="ins-desktop-break" /> resources or start a conversation.</p>
          </div>
          <a href="mailto:info@kloudinnovisionz.com" className="ins-cta-btn">Let’s Talk <ArrowRight size={16} /></a>
        </div>
      </section>

      {selectedArticle && (
        <div className="ins-modal-backdrop" role="presentation" onClick={() => setSelectedArticle(null)}>
          <section className="ins-modal ins-article-modal" role="dialog" aria-modal="true" aria-label={selectedArticle.title} onClick={e => e.stopPropagation()}>
            <button type="button" className="ins-modal-close" onClick={() => setSelectedArticle(null)} aria-label="Close article"><X size={20} /></button>
            <img src={selectedArticle.image} alt="" />
            <div className="ins-modal-body">
              <span className="ins-tag">{selectedArticle.category}</span>
              <p className="ins-modal-date">{selectedArticle.date}</p>
              <h2>{selectedArticle.title}</h2>
              <p>{selectedArticle.description}</p>
              <p>Every organisation has different priorities. Start by clarifying the business outcome you want, understanding your current capabilities, and choosing practical next steps that can be measured over time.</p>
              <button type="button" className="ins-text-link" onClick={() => setSelectedArticle(null)}>Back to insights <ArrowRight size={15} /></button>
            </div>
          </section>
        </div>
      )}

      {resourceOpen && (
        <div className="ins-modal-backdrop" role="presentation" onClick={() => setResourceOpen(false)}>
          <section className="ins-modal ins-resource-modal" role="dialog" aria-modal="true" aria-label="AI Readiness Checklist" onClick={e => e.stopPropagation()}>
            <button type="button" className="ins-modal-close" onClick={() => setResourceOpen(false)} aria-label="Close resource"><X size={20} /></button>
            <div className="ins-resource-modal-icon"><Download size={28} /></div>
            <h2>AI Readiness Checklist</h2>
            <p>This sample resource covers business goals, data readiness, risk, governance, people and implementation planning.</p>
            <p className="ins-resource-note">Connect this action to your downloadable PDF or resource landing page before publishing.</p>
            <button type="button" className="ins-btn-primary" onClick={() => setResourceOpen(false)}>Got it <ArrowRight size={16} /></button>
          </section>
        </div>
      )}
    </main>
  );
}
