import { Link } from "react-router-dom";
import "./InsightsPage.css";

/* ---------- Page copy: change the text here, no need to touch the markup ---------- */
const CONTENT = {
  eyebrow: "Insights",
  title: "Our insights are coming soon",
  text: "We are preparing articles on web development, mobile apps, digital marketing and technology trends. Stay tuned.",
  primary: { label: "Back to Home", to: "/" },
  secondary: { label: "Contact Us", to: "/contact-us" },
};

/* What visitors can expect, shown as small cards. Edit or remove freely. */
const TOPICS = [
  {
    title: "Tech Guides",
    text: "Practical tips on web, app and software development.",
    icon: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
  },
  {
    title: "Digital Marketing",
    text: "Ideas to help your business grow online.",
    icon: (
      <>
        <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
        <path d="M16 7h6v6" />
      </>
    ),
  },
  {
    title: "Company Updates",
    text: "News, launches and what our team is building.",
    icon: (
      <>
        <path d="M4 5h13a2 2 0 0 1 2 2v12H6a2 2 0 0 1-2-2z" />
        <path d="M19 9h1a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2" />
        <path d="M8 9h7M8 13h7M8 17h4" />
      </>
    ),
  },
];

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const ClockIcon = () => (
  <svg {...iconProps} width="34" height="34">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    className="ins-btn__icon"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const Insights = () => {
  return (
    <main className="insights-page">
      {/* ================= HERO / COMING SOON ================= */}
      <section className="ins-hero">
        <div className="ins-container">
          <div className="ins-hero__inner">
            <span className="ins-hero__icon">
              <ClockIcon />
            </span>
            <p className="ins-eyebrow">{CONTENT.eyebrow}</p>
            <h1 className="ins-title">{CONTENT.title}</h1>
            <p className="ins-lead">{CONTENT.text}</p>

            <div className="ins-actions">
              <Link to={CONTENT.primary.to} className="ins-btn">
                {CONTENT.primary.label}
                <ArrowIcon />
              </Link>
              <Link to={CONTENT.secondary.to} className="ins-btn ins-btn--ghost">
                {CONTENT.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT TO EXPECT ================= */}
      <section className="ins-topics">
        <div className="ins-container">
          <h2 className="ins-h2">What to expect</h2>
          <div className="ins-topics__grid">
            {TOPICS.map((topic) => (
              <article className="ins-card" key={topic.title}>
                <span className="ins-card__icon">
                  <svg {...iconProps}>{topic.icon}</svg>
                </span>
                <h3 className="ins-card__title">{topic.title}</h3>
                <p className="ins-card__text">{topic.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Insights;
