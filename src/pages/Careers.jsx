import { useState } from "react";
import "./Careers.css";

// Put submitresume.jpg inside: src/assets/
import RESUME_IMG from "../assets/submitresume.jpg";

/* WhatsApp number that receives the career enquiries.
   Country code + number, digits only (no +, spaces or dashes). */
const WHATSAPP_NUMBER = "919594865555";

/* ---------- Icons (same stroke style as the Contact Us page) ---------- */
const iconProps = {
  width: 30,
  height: 30,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const joinCards = [
  {
    title: "Collaborative Culture",
    text: "Environment that encourages teamwork and innovation",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "High Salary",
    text: "Benefit from competitive salaries and company benefits.",
    icon: (
      <>
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </>
    ),
  },
  {
    title: "Life Balance",
    text: "Enjoy work life balance with our flexible schedules",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  {
    title: "Explore Solutions",
    text: "Be part of a team driving cutting edge solutions",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
      </>
    ),
  },
  {
    title: "Development",
    text: "Benefit from training and skill-building programs",
    icon: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
  },
  {
    title: "Growth Opportunities",
    text: "Unlock endless career advancement opportunities",
    icon: (
      <>
        <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
        <path d="M16 7h6v6" />
      </>
    ),
  },
];

const jobRoles = [
  { value: "Managment_Team", label: "Managment Team" },
  { value: "Software_Developer", label: "Software Developer" },
  { value: "Web_Developer", label: "Web Developer" },
  { value: "Database_Managment", label: "Database Managment" },
  { value: "Front-end_Developer", label: "Front-end Developer" },
  { value: "Digital_Marketing", label: "Digital Marketing" },
  { value: "IT_Support", label: "IT Support" },
  { value: "BDM", label: "BDM" },
  { value: "Sales", label: "Sales" },
];

const HERO_VIDEO =
  "https://framerusercontent.com/assets/E9Y9Rr6Ks68vsC8YAYrifOGkN8.mp4";
const HERO_IMG_1 =
  "https://framerusercontent.com/images/2jTv34IpiojuLMANEENsy1tFSy0.jpg?width=1000&height=560";
const HERO_IMG_2 =
  "https://framerusercontent.com/images/8albrP4MSK9zuegrbYgoE1AirwY.jpg?width=1000&height=683";

const initialForm = { name: "", email: "", phone: "", role: "" };

/* Builds the WhatsApp message and the wa.me link from the form values */
const buildWhatsAppLink = (form) => {
  const roleLabel =
    jobRoles.find((r) => r.value === form.role)?.label || form.role;

  const message = [
    "*New Career Enquiry*",
    "",
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    `Phone: ${form.phone.trim()}`,
    `Job Role: ${roleLabel}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const Careers = () => {
  const [form, setForm] = useState(initialForm);
  const [waLink, setWaLink] = useState(""); // set after a successful submit

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const link = buildWhatsAppLink(form);

    // Open WhatsApp right away (inside the click, so browsers do not block it)
    window.open(link, "_blank", "noopener,noreferrer");

    // Keep the link so the visitor can retry if the pop-up was blocked
    setWaLink(link);
    setForm(initialForm);
    e.currentTarget.reset();
  };

  return (
    <main className="career-page">
      {/* ================= HERO ================= */}
      <section className="career-hero">
        <div className="career-container">
          <div className="career-hero__text">
            <p className="career-eyebrow">Careers</p>
            <h1 className="career-title career-title--hero">
              Explore opportunities that{" "}
              <span className="career-accent">make an impact</span>
            </h1>
          </div>

          <div className="career-hero__media">
            <div className="career-hero__video">
              <video
                src={HERO_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
            </div>

            <div className="career-hero__grid">
              <div className="career-hero__img">
                <img
                  src={HERO_IMG_1}
                  alt="Team at work"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="career-hero__img">
                <img
                  src={HERO_IMG_2}
                  alt="Office culture"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOIN US ================= */}
      <section className="career-join">
        <div className="career-container">
          <div className="career-join__head">
            <p className="career-eyebrow">Join Us</p>
            <h2 className="career-title">
              Why you should consider{" "}
              <span className="career-accent career-accent--green">
                joining our team
              </span>
            </h2>
          </div>

          <div className="career-join__grid">
            {joinCards.map((card) => (
              <article className="join-card" key={card.title}>
                <span className="join-card__icon">
                  <svg {...iconProps}>{card.icon}</svg>
                </span>
                <h3 className="join-card__title">{card.title}</h3>
                <p className="join-card__text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLICATION FORM ================= */}
      <section className="career-apply">
        <div className="career-container">
          <div className="career-apply__wrap">
            <div className="career-apply__form">
              <h2 className="career-apply__title">Send Us Your Enquiry</h2>
              <p className="career-apply__sub">
                Share your details and our team will get back to you on
                WhatsApp.
              </p>

              {waLink && (
                <div className="career-apply__success" role="status">
                  Thank you! Your enquiry is ready on WhatsApp. If it did not
                  open, tap{" "}
                  <a
                    className="career-apply__wa-link"
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open WhatsApp
                  </a>{" "}
                  and press Send.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="career-field">
                  <label htmlFor="career-name" className="career-sr">
                    Your name
                  </label>
                  <input
                    id="career-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    pattern="[a-zA-Z]+[ ][a-zA-Z]+"
                    title="Enter your first and last name (letters only)"
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="career-field">
                  <label htmlFor="career-email" className="career-sr">
                    Your email
                  </label>
                  <input
                    id="career-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="career-field">
                  <label htmlFor="career-phone" className="career-sr">
                    Your phone number
                  </label>
                  <input
                    id="career-phone"
                    type="tel"
                    inputMode="numeric"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    pattern="^[789]\d{9}$"
                    maxLength={10}
                    title="Mobile no. should be of 10 digits"
                    placeholder="Your Phone"
                    autoComplete="tel-national"
                    required
                  />
                </div>

                <div className="career-field">
                  <label htmlFor="career-role" className="career-sr">
                    Job role
                  </label>
                  <select
                    id="career-role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Job Role</option>
                    {jobRoles.map((role) => (
                      <option key={role.value} value={role.value}>
                        {role.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button className="career-submit" type="submit">
                  Send on WhatsApp
                </button>
              </form>
            </div>

            <div className="career-apply__image">
              <img
                src={RESUME_IMG}
                alt="Join our team"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;