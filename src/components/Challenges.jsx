import React from "react";
import { Link } from "react-router-dom";
import "./Challenges.css";
import {
  MdOutlineSettingsSuggest,
  MdOutlineApartment,
  MdOutlineAutoAwesome,
  MdOutlineTrendingUp,
  MdOutlineSecurity,
  MdOutlineSettingsBackupRestore,
  MdArrowForward,
} from "react-icons/md";

// tone controls the icon circle colour. Only brand colours are used: blue | green.
// `to` is where "Explore" goes. These routes are best guesses from your Navbar's
// Services menu: change them to the pages you want for each challenge.
const CHALLENGES = [
  {
    icon: MdOutlineSettingsSuggest,
    tone: "blue",
    title: "Manual & Inefficient Processes",
    text: "Automate and streamline operations",
    to: "/services/erp-crm",
  },
  {
    icon: MdOutlineApartment,
    tone: "green",
    title: "Need Scalable Technology",
    text: "Build future-ready applications",
    to: "/services/software-development",
  },
  {
    icon: MdOutlineAutoAwesome,
    tone: "blue",
    title: "Want to Leverage AI & Automation",
    text: "Unlock intelligence and reduce costs",
    to: "/services/software-development",
  },
  {
    icon: MdOutlineTrendingUp,
    tone: "green",
    title: "Not Getting Enough Leads & Visibility",
    text: "Grow your digital presence & leads",
    to: "/services/digital-marketing",
  },
  {
    icon: MdOutlineSecurity,
    tone: "blue",
    title: "Security & Compliance Concerns",
    text: "Secure, monitor and stay compliant",
    to: "/services/domain-hosting",
  },
  {
    icon: MdOutlineSettingsBackupRestore,
    tone: "green",
    title: "Need to Modernize Legacy Systems",
    text: "Migrate, integrate and innovate",
    to: "/services/software-development",
  },
];

function Challenges() {
  return (
    <section className="challenges" aria-labelledby="challenges-heading">
      <div className="challenges__inner">
        <p className="challenges__eyebrow">Business challenges we solve</p>
        <h2 id="challenges-heading" className="challenges__title">
          Every <span className="challenges__blue">Challenge</span>. Every{" "}
          <span className="challenges__blue">Industry</span>. Every{" "}
          <span className="challenges__green">Step of Growth</span>.
        </h2>

        <ul className="challenges__grid" role="list">
          {CHALLENGES.map(({ icon: Icon, tone, title, text, to }) => (
            <li className="challenges__card" key={title}>
              <div className="challenges__top">
                <span className={`challenges__icon challenges__icon--${tone}`}>
                  <Icon aria-hidden="true" />
                </span>
                <div className="challenges__body">
                  <h3 className="challenges__card-title">{title}</h3>
                  <p className="challenges__card-text">{text}</p>
                </div>
              </div>

              {/* The link's ::after stretches over the whole card, so the entire card is
                  clickable. The hidden title makes each "Explore" unique for screen readers. */}
              <Link to={to} className="challenges__link">
                <span>
                  Explore
                  <span className="challenges__sr-only"> {title}</span>
                </span>
                <MdArrowForward className="challenges__link-icon" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Challenges;
