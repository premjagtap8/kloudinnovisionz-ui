import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import "./TopBar.css";

// Edit the text and link here
const MESSAGE = "Never Miss the Opportunity to Transform Your Business";
const LINK_LABEL = "Learn More";
const LINK_TO = "/contact-us";

export default function TopBar() {
  return (
    <div className="topbar" role="region" aria-label="Announcement">
      <p className="topbar__text">{MESSAGE}</p>
      <Link to={LINK_TO} className="topbar__link">
        <span>{LINK_LABEL}</span>
        {/* "1.15em" makes the arrow scale with the link's font size */}
        <ChevronRight size="1.15em" className="topbar__icon" aria-hidden="true" />
      </Link>
    </div>
  );
}
