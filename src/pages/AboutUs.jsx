import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react"; // swap for the icons you already use
import whoWeAreImg from "../assets/Who-we-are.webp"; // adjust to your real file name
import whyUsImg from "../assets/why-us.webp"; // adjust to your real file name
import "./AboutUs.css";

const CONTACT_ROUTE = "/contact-us"; // change to "/contact" if that is your route

// Only use numbers that are true for KlouD. Edit these freely.
const STATS = [
  { value: "18+", label: "Years of experience" },
  { value: "7", label: "Core services" },
  { value: "Mumbai", label: "Based in India" },
];

const WHO_POINTS = [
  "Business automation and deployment planning",
  "Dedicated teams that act as an extension of yours",
  "Solutions tailored to your goals and budget",
];

const WHY_POINTS = [
  "Fast delivery within your allocated budget",
  "Strategic thinking and quality at every step",
  "IT, software, web, mobile and digital marketing under one roof",
];

const PILLARS = [
  {
    title: "Our Mission",
    text: "To transform the client’s vision into reality, to provide a package of attractive and innovative IT services for business purposes through a quality-oriented and motivated team using state-of-the-art technology, and to exceed our clients’ expectations by going beyond software.",
  },
  {
    title: "Our Vision",
    text: "To grow constantly as a major IT service provider and become a leading performer in quality IT, web and software development solutions in the competitive global marketplace. We want to be known as the most reliable, innovative and user-friendly software service provider in the IT industry.",
  },
  {
    title: "Message From Founder",
    text: "“We are growing very fast as a startup and needed a way to accelerate our time to value for our esteemed clients. KlouD InnoVisionZ is versed in innovative visions and supports projects in all phases with high professionalism and niche technology competency.”",
  },
];

function CheckList({ items }) {
  return (
    <ul className="au-checks">
      {items.map((item) => (
        <li key={item}>
          <Check className="au-check__icon" size={20} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutUs() {
  return (
    <main className="about-us">
      {/* ---------------- Hero ---------------- */}
      <section className="au-hero">
        <div className="au-container au-hero__inner">
          <span className="au-eyebrow">About Us</span>
          <h1 className="au-hero__title">
            Transforming Your <span className="au-accent">Vision</span>
          </h1>
          <p className="au-hero__lead">
            Professional IT, software and digital solutions, built around your
            business goals.
          </p>
        </div>
      </section>

      {/* ---------------- Who we are ---------------- */}
      <section className="au-section">
        <div className="au-container au-split">
          <div className="au-split__text">
            <h5 className="au-kicker">About</h5>
            <h2 className="au-h2 au-h2--bar">
              Who <span className="au-accent">we are</span>
            </h2>
            <p>
              KlouD InnoVisionZ provides product performance and price
              comparisons together with deployment plans and project
              management, reducing the impact on your staff. We examine your
              current applications and hardware and provide business
              automation processes and options to advance your business
              towards the future.
            </p>
            <p>
              With over 18 years of experience, our success is founded on
              professionalism, integrity and exceptional client service. We
              help businesses compete with the big giants in both quality and
              quantity, and we deliver solutions of the highest standard
              tailored to your technology needs.
            </p>
            <CheckList items={WHO_POINTS} />
          </div>

          <figure className="au-media">
            <img src={whoWeAreImg} alt="Who we are" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="au-stats">
        <div className="au-container">
          <ul className="au-stats__grid">
            {STATS.map((s) => (
              <li key={s.label} className="au-stat">
                <span className="au-stat__value">{s.value}</span>
                <span className="au-stat__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Why us ---------------- */}
      <section className="au-section au-section--wash">
        <div className="au-container au-split au-split--reverse">
          <div className="au-split__text">
            <h2 className="au-h2 au-h2--bar">
              Why <span className="au-accent">us</span>
            </h2>
            <p>
              We make managing your company’s technology and special project
              needs easy and painless. We work fast, delivering quality,
              strategic thinking and efficiency within your budget. We become
              fully immersed in your business and industry, taking on the same
              vision to accomplish goals together.
            </p>
            <p>
              Building a credible relationship with our clients is the most
              important daily practice for us. It lets us explore your
              essential needs and exceed your expectations with tailored
              business solutions.
            </p>
            <CheckList items={WHY_POINTS} />
          </div>

          <figure className="au-media">
            <img src={whyUsImg} alt="Why choose us" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ---------------- Mission / Vision / Founder ---------------- */}
      <section className="au-section">
        <div className="au-container">
          <div className="au-center">
            <h2 className="au-h2 au-h2--bar au-h2--center">
              Why <span className="au-accent">Choose Us</span>
            </h2>
          </div>

          <div className="au-grid">
            {PILLARS.map((p) => (
              <article key={p.title} className="au-card">
                <h3 className="au-card__title">{p.title}</h3>
                <p className="au-card__text">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="au-cta">
        <div className="au-container">
          <div className="au-cta__box">
            <h2 className="au-cta__title">
              Ready to transform your business? Let’s talk.
            </h2>
            <Link to={CONTACT_ROUTE} className="au-btn au-btn--light">
              Let’s Talk
              <ArrowRight className="au-btn__icon" size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}