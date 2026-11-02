import { useEffect, useRef } from "react";
import "./GoogleReviews.css";

const WIDGET_SRC =
  "https://cdn.trustindex.io/loader.js?da40457849aa85128246773b46c";

export default function GoogleReviews() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.defer = true;
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <section className="reviews-section">
      <div className="reviews-head">
        <span className="reviews-eyebrow">CLIENT TESTIMONIALS</span>
        <h2 className="reviews-title">
          What Our <span className="reviews-blue">Clients</span>{" "}
          <span className="reviews-green">Say</span>
        </h2>
      </div>

      <div className="reviews-widget" ref={ref} />
    </section>
  );
}