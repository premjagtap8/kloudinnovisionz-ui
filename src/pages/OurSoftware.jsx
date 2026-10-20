
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

import schoolsImg from "../assets/schools.jpg";
import hospitalImg from "../assets/hospital.webp";
import hotelImg from "../assets/hotel.webp";

import "./OurSoftware.css";

const PRODUCTS = [
  {
    id: "schools",
    name: "Schools",
    image: schoolsImg,
    category: "Market Strategy",
    expertise: "Mobile App",
    demoUrl: "https://kloudschools.in/site/login",
    intro:
      "Schools can utilize our custom software to keep admission details of students. Can produce Transfer Certificates; track the student’s academics, total inventory of the library and also the billing softwares. Below are the major benefits of the School Management Softwares in an educational institution.",
    benefits: [
      "General Benefits",
      "To Management",
      "To Administration",
      "To Parents",
      "To Teachers",
      "To Students",
    ],
    outro:
      "For more information on benefits of School Management Softwares in an educational institution, please contact us with your requirements or queries.",
  },
  {
    id: "hospitals",
    name: "Hospitals",
    image: hospitalImg,
    category: "Market Strategy",
    expertise: "Mobile App",
    demoUrl: "https://kloudinnovisionz.com/hospital",
    intro:
      "To keep the data of a patient and retrieve it any time, enabling a doctor and his assistants to transfer the details of a patient through a network and also keeping patients’ blood groups in the hospital database makes the search for suitable-group blood easy. Lastly, Hospitals also can use billing software especially in their dispensary/clinics/etc. The salient benefits to opt for the hospital softwares are as under.",
    benefits: [
      "Achieve good quality ratings",
      "Better revenue management",
      "Avoid errors and track every single detail",
      "Improved clinical decision-making",
      "Improve data security",
      "Establish your hospital as technically advanced",
    ],
    outro:
      "For more information on the benefits of Hospital Management Software, please contact us with your requirements or queries.",
  },
  {
    id: "hotels",
    name: "Hotels",
    image: hotelImg,
    category: "Market Strategy",
    expertise: "Mobile App",
    demoUrl: "https://kloudinnovisionz.com/lukma/",
    intro:
      "Hotel management system designed to encompass the needs of hospitality businesses of all sizes. We create custom software with the aim of minimizing the work involved in managing any hospitality business. We ensure to combine all essential functions of hospitality management, including booking, billing, marketing, reporting and global distribution. The highlighted points below will enable you to explore our Hotel/Resorts Software.",
    benefits: [
      "Real-time business controls",
      "Maintain rate parity and centralized rate control",
      "Diminishing double or over-bookings",
      "Manage guest reservations",
      "Integration complexity and cost",
      "The frustration of managing different vendors",
      "Key pillar to hotel's success - Guest Satisfaction",
      "Best-in-Class solution",
    ],
    outro:
      "For more information on the benefits of Hotel Management Software, please contact us with your requirements or queries.",
  },
];

export default function OurSoftware() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Our Software | KlouD InnoVisionZ";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="os">
      <header className="os__hero">
        <div className="os__container os__hero-inner">
          <span className="os__eyebrow">
            Solutions built around your business
          </span>

          <h1 className="os__title">
            Our <span className="os__accent">Software</span>
          </h1>

          <p className="os__subtitle">
            Smart management solutions for schools, hospitals, and
            hotels — designed to simplify operations and help your
            business grow.
          </p>

          <div className="os__hero-actions">
            <a href="#schools" className="os__hero-link">
              Explore our solutions
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <div className="os__container os__list">
        {PRODUCTS.map((product, index) => (
          <section
            className="os__product"
            key={product.id}
            id={product.id}
            aria-labelledby={`${product.id}-title`}
          >
            <div className="os__content">
              <div className="os__image-wrap">
                <img
                  src={product.image}
                  alt={`${product.name} management software`}
                  className="os__image"
                  loading="lazy"
                  decoding="async"
                />

                <span className="os__image-label">
                  {String(index + 1).padStart(2, "0")} / 03
                </span>
              </div>

              <div className="os__heading-group">
                <span className="os__section-label">
                  Industry solution
                </span>

                <h2
                  className="os__name"
                  id={`${product.id}-title`}
                >
                  {product.name} Management Software
                </h2>
              </div>

              <p className="os__text">{product.intro}</p>

              <div className="os__benefits-heading">
                <h3>Key Benefits</h3>
                <span>{product.benefits.length} highlights</span>
              </div>

              <ul className="os__benefits">
                {product.benefits.map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle2
                      size={19}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <p className="os__text os__outro">
                {product.outro}
              </p>

              <Link to="/contact-us" className="os__link">
                <span>Discuss your requirements</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <aside
              className="os__aside"
              aria-labelledby={`${product.id}-overview-title`}
            >
              <div className="os__overview">
                <span className="os__overview-kicker">
                  SOLUTION OVERVIEW
                </span>

                <h3
                  className="os__overview-title"
                  id={`${product.id}-overview-title`}
                >
                  {product.name}
                </h3>

                <p className="os__overview-description">
                  Discover a solution tailored to the needs of your
                  industry.
                </p>

                <dl className="os__overview-list">
                  <div className="os__overview-row">
                    <dt>Project</dt>
                    <dd>{product.name}</dd>
                  </div>

                  <div className="os__overview-row">
                    <dt>Category</dt>
                    <dd>{product.category}</dd>
                  </div>

                  <div className="os__overview-row">
                    <dt>Expertise</dt>
                    <dd>{product.expertise}</dd>
                  </div>
                </dl>

                <a
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="os__btn"
                  aria-label={`Open ${product.name} live demo in a new tab`}
                >
                  <span>Explore Live Demo</span>
                  <ExternalLink size={17} aria-hidden="true" />
                </a>

                <p className="os__demo-note">
                  <span className="os__status-dot" aria-hidden="true" />
                  View the solution in action
                </p>
              </div>
            </aside>
          </section>
        ))}
      </div>

      <section className="os__cta">
        <div className="os__container os__cta-inner">
          <div className="os__cta-copy">
            <span className="os__section-label">
              Have a project in mind?
            </span>

            <h2>Let's build the right solution for your business.</h2>

            <p>
              Tell us about your requirements, and let's explore how
              custom software can make your operations easier.
            </p>
          </div>

          <Link to="/contact-us" className="os__cta-button">
            Talk to our team
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
