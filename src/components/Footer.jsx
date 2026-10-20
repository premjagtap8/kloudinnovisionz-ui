import React from "react";
import "./Footer.css";
import logoMark from "../assets/KloudLogoMark.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const company = ["About Us", "Leadership", "Careers", "Newsroom"];
// Rendered left-to-right in 2 columns: Consult | Protect / Build | Innovate / Transform
const practiceAreas = ["Consult", "Protect", "Build", "Innovate", "Transform"];
const industries = [
  "Manufacturing",
  "Healthcare",
  "Construction",
  "Education",
  "Retail",
];
const resources = [
  "Insights",
  "Case Studies",
  "Whitepapers",
  "Downloads",
  "Frameworks",
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand: K mark + name + tagline, copyright at the bottom */}
        <div className="footer__brand">
          <a href="/" className="footer__brand-link" aria-label="KlouD InnoVisionZ home">
            <img src={logoMark} alt="" className="footer__logo" />
            <span className="footer__brand-text">
              <span className="footer__brand-name">KlouD InnoVisionZ</span>
              <span className="footer__brand-tag">Transforming Client&rsquo;s Vision</span>
            </span>
          </a>
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} KlouD InnoVisionZ. All Rights
            Reserved.
          </p>
        </div>

        {/* Company */}
        <nav className="footer__col" aria-label="Company">
          <h4 className="footer__title">Company</h4>
          <ul className="footer__list">
            {company.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Practice Areas */}
        <nav className="footer__col" aria-label="Practice Areas">
          <h4 className="footer__title">Practice Areas</h4>
          <ul className="footer__list footer__list--two">
            {practiceAreas.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Industries */}
        <nav className="footer__col" aria-label="Industries">
          <h4 className="footer__title">Industries</h4>
          <ul className="footer__list">
            {industries.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resources */}
        <nav className="footer__col" aria-label="Resources">
          <h4 className="footer__title">Resources</h4>
          <ul className="footer__list">
            {resources.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="footer__col footer__contact">
          <h4 className="footer__title">Contact Us</h4>
          <ul className="footer__list">
            <li>
              <a href="tel:+912249798360">
                <FaPhoneAlt className="footer__icon" />
                +91 22 4979 8360
              </a>
            </li>
            <li>
              <a href="mailto:hello@kloudinnovisionz.com">
                <FaEnvelope className="footer__icon" />
                hello@kloudinnovisionz.com
              </a>
            </li>
            <li>
              <span>
                <FaMapMarkerAlt className="footer__icon" />
                Mumbai, India
              </span>
            </li>
          </ul>

          <div className="footer__social">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
