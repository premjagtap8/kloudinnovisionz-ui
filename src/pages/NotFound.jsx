import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./NotFound.css";

export default function NotFound() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Page Not Found | KlouD InnoVisionZ";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="nf">
      <span className="nf__bg" aria-hidden="true">
        404
      </span>

      <div className="nf__content">
        <h1 className="nf__title">NOT FOUND</h1>
        <p className="nf__text">
          Unfortunately the page you are looking for has been moved or deleted
        </p>
        <Link to="/" className="nf__btn">
          <span>GO TO HOMEPAGE</span>
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}