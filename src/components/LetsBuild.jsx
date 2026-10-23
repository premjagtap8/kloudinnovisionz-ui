import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./LetsBuild.css";

// -----------------------------------------------------------------------------
// LetsBuild Component (Default Export) - closing call-to-action banner
// Sits directly on top of the Footer: inset from its side edges, rounded top
// corners, square bottom so it rests flush on the Footer.
// -----------------------------------------------------------------------------

// Where the button goes. Change this to your real contact / booking route.
const CONTACT_PATH = "/contact-us";

export default function LetsBuild() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger the entrance animation when the banner scrolls into view
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="lets-build"
      className={`lb ${isVisible ? "lb--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="lb-heading"
    >
      <div className="lb__banner">
        {/* Left: eyebrow + supporting line */}
        <div className="lb__lead">
          <p className="lb__eyebrow">Let’s Build What’s Next</p>
          <p className="lb__lead-text">
            Every business has a vision.
            <br />
            Technology should never stand in its way.
          </p>
        </div>

        {/* Center: headline */}
        <h2 className="lb__title" id="lb-heading">
          Let’s build your next chapter—together.
        </h2>

        {/* Right: action */}
        <div className="lb__action">
          <Link to={CONTACT_PATH} className="lb__btn">
            <span>Schedule a Strategy Session</span>
            <ArrowRight size={15} className="lb__btn-icon" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
