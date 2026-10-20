import React from "react";
import { Link } from "react-router-dom";
import "./Footter.css";
import logoMark from "../assets/KloudLogoMark.png";

// Each column is split into two sub-lists, exactly like the live site
const services = [
  ["Web Development", "Graphics Designing", "Mobile Apps Development"],
  ["Software Development", "Digital Marketing", "ERP & CRM", "Domain & Hosting"],
];

const portfolio = [
  ["Web", "Ecommerce", "Digital Marketing"],
  ["Search Engine Optimization", "Logo", "Brochure", "Campaigns"],
];

function Footter() {
  return (
    <footer className="ftr">
      <div className="ftr__inner">
        {/* Brand: K mark + name + tagline, copyright at the bottom */}
        <div className="ftr__brand">
          <Link to="/" className="ftr__brand-link" aria-label="KlouD InnoVisionZ home">
            <img src={logoMark} alt="" className="ftr__logo" />
            <span className="ftr__brand-text">
              <span className="ftr__brand-name">KlouD InnoVisionZ</span>
              <span className="ftr__brand-tag">Transforming Client&rsquo;s Vision</span>
            </span>
          </Link>
          <p className="ftr__copy">
            &copy; {new Date().getFullYear()} KlouD InnoVisionZ. All Rights
            Reserved.
          </p>
        </div>

        {/* Services */}
        <nav className="ftr__col" aria-label="Services">
          <h3 className="ftr__title">Services</h3>
          <div className="ftr__lists">
            {services.map((list, i) => (
              <ul className="ftr__list" key={i}>
                {list.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>

        {/* Work Portfolio */}
        <nav className="ftr__col" aria-label="Work Portfolio">
          <h3 className="ftr__title">Work Portfolio</h3>
          <div className="ftr__lists">
            {portfolio.map((list, i) => (
              <ul className="ftr__list" key={i}>
                {list.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="ftr__bottom">
        <Link to="/terms-and-conditions" className="ftr__terms">
          Terms &amp; Conditions
        </Link>
      </div>
    </footer>
  );
}

export default Footter;
