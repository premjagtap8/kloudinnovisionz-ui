import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import "./TopBar.css";

// Edit the text and link here
const MESSAGE = "Never Miss the Opportunity to Transform Your Business";
const LINK_LABEL = "Learn More";
const LINK_TO = "/contact-us";

// Become a Partner -> opens WhatsApp chat with the lead
// Number format: country code + 10 digits, no "+", spaces or dashes
const PARTNER_LABEL = "Become a Partner";
const PARTNER_PHONE = "919594865555";
const PARTNER_MESSAGE =
  "Hi, I'm interested in becoming a partner with KlouD InnoVisionZ. Please share the details.";
const PARTNER_URL = `https://wa.me/${PARTNER_PHONE}?text=${encodeURIComponent(
  PARTNER_MESSAGE
)}`;

export default function TopBar() {
  return (
    <div className="topbar" role="region" aria-label="Announcement">
      <p className="topbar__text">{MESSAGE}</p>

      <div className="topbar__actions">
        <Link to={LINK_TO} className="topbar__link">
          <span>{LINK_LABEL}</span>
          {/* "1.15em" makes the arrow scale with the link's font size */}
          <ChevronRight size="1.15em" className="topbar__icon" aria-hidden="true" />
        </Link>

        {/* External link: plain <a>, not <Link>, because it leaves the site */}
        <a
          href={PARTNER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="topbar__link topbar__link--partner"
          aria-label={`${PARTNER_LABEL} (opens WhatsApp in a new tab)`}
        >
          <span>{PARTNER_LABEL}</span>
          <ChevronRight size="1.15em" className="topbar__icon" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
