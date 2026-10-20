import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef,
} from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";
import "./Testimonials.css";

// -----------------------------------------------------------------------------
// Data (edit testimonials here)
// -----------------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: "Mr. Ahmad Al Aboudi",
    role: "General Manager - Digi ID Project, Saudi Arabia",
    text: "KlouD InnoVisionZ is very responsive. They used the time difference between us to their advantage and created a very interactive working relationship. Besides, the solution and the development of our mobile app for Android and iOS is upto the mark. It was indeed a pleasure to work with the team and we look forward working with them for our next project.",
  },
  {
    name: "Mr. Amir Shamsi",
    role: "Owner – Gadgets Oman",
    text: "KlouD team surpassed my expectations on all levels in terms of making my business more effective and building an in-house software for RMA, Gadgets Oman. Your professionalism, ease in working together on the project, and genuine interest in what my unique wishes have always been appreciated.",
  },
  {
    name: "Mr. Jitendra Gupta",
    role: "Owner, Mera Veg - Mumbai",
    text: "Great Team to work with, really attentive and react to request immediately. Excellent work and I'm really pleased with the results they obtained for my website & Digital marketing in converting leads and making my online business boost. Thanks KlouD team.",
  },
  {
    name: "Mr. Akhlaque Ahmed",
    role: "Managing Director – QRS",
    text: "They are indeed a high level design agency that we will be working with closely in the years to come. We worked with the team on re-organizing our training systems, website revamps and digital marketing strategies from the US and Europe. Working remotely was smooth and reliable. We can always vouch for the KlouD team.",
  },
  {
    name: "Mr. Razzak Firfirey",
    role: "Founder – Netlink India, Mumbai",
    text: "KlouD InnoVisionZ were able to deliver cutting-edge modern designs for our website development and designs that added elegance to our solutions. Flexibility, responsiveness, and quality are the hallmarks of KlouD InnoVisionZ.",
  },
  {
    name: "Mr. Tarik Siddiqui",
    role: "Founder, Desi Videsi - Mumbai",
    text: "KlouD InnoVisionZ were able to provide the most amazing aspect of e-commerce is its ability to impact sales and boost our online sales with digital strategies.",
  },
  {
    name: "Ms Rubina Patel",
    role: "Business Development Manager, GN Hearing/Resound - US and India",
    text: "KlouD InnoVisionZ were able to supply the best graphic services without any hurdles. The designs made by them are quiet innovative.",
  },
];

const AUTOPLAY_MS = 5000;
const SWIPE_MIN_PX = 40; // horizontal distance that counts as a swipe

// Initials for the avatar (ignores Mr. / Ms / Mrs. prefixes)
const getInitials = (name) =>
  name
    .replace(/^(Mr|Ms|Mrs|Dr)\.?\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

// Cards per view, chosen from the width of the carousel itself (not the window):
// 3 when there is room for three readable cards, 2 for tablets, 1 for phones.
const perViewFor = (width) => {
  if (width >= 900) return 3;
  if (width >= 580) return 2;
  return 1;
};

// True only for keyboard-style focus. A tap or click also focuses a button, and
// that must NOT freeze the autoplay (on touch screens there is no "mouse leave"
// to un-freeze it again).
const isKeyboardFocus = (el) => {
  try {
    return el.matches(":focus-visible");
  } catch {
    return true; // very old browsers: stay on the accessible side
  }
};

// useLayoutEffect warns when rendered on a server; fall back to useEffect there
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// -----------------------------------------------------------------------------
// Component (Default Export)
// -----------------------------------------------------------------------------

export default function Testimonials() {
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false); // mouse over the carousel
  const [focused, setFocused] = useState(false); // keyboard focus inside it
  const [reduceMotion, setReduceMotion] = useState(false);
  const [inView, setInView] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const touchStart = useRef(null);

  const total = TESTIMONIALS.length;
  const maxIndex = Math.max(0, total - perView);
  const paused = hovered || focused;

  // Cards per view: measure the carousel and re-measure when it resizes
  useIsoLayoutEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const update = () => setPerView(perViewFor(node.clientWidth));
    update();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }

    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Keep the index valid when perView changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // Respect "reduce motion" (also if the setting changes while the page is open)
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Entrance animation (once) + "is the section on screen" (for autoplay)
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setHasEntered(true);
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const next = useCallback(
    () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [maxIndex]
  );
  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? maxIndex : i - 1)),
    [maxIndex]
  );

  // Autoplay: only while the section is on screen, never with reduced motion,
  // and not while hovered / keyboard-focused.
  // A timeout per slide restarts the 5 seconds after every manual change.
  const canAutoplay = !reduceMotion && inView && !paused && maxIndex > 0;

  useEffect(() => {
    if (!canAutoplay) return;
    const id = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [canAutoplay, index, next]);

  // Touch swipe: left = next, right = previous. Mostly-vertical gestures are
  // page scrolls and are ignored.
  const handleTouchStart = (event) => {
    const t = event.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (event) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = event.changedTouches[0];
    const deltaX = t.clientX - start.x;
    const deltaY = t.clientY - start.y;
    if (Math.abs(deltaX) < SWIPE_MIN_PX) return;
    if (Math.abs(deltaX) < Math.abs(deltaY) * 1.5) return;
    if (deltaX < 0) next();
    else prev();
  };

  const handleTouchCancel = () => {
    touchStart.current = null;
  };

  // Keyboard: left / right arrows move the carousel from anywhere inside it
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  const lastVisible = Math.min(index + perView, total);

  return (
    <section
      className={`tm ${hasEntered ? "tm--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="tm-heading"
    >
      <div className="tm__container">
        {/* Header */}
        <div className="tm__head">
          <div>
            <p className="tm__eyebrow">Client Testimonials</p>
            <h2 className="tm__title" id="tm-heading">
              What Our <span className="tm__title-blue">Clients</span>{" "}
              <span className="tm__title-green">Say</span>
            </h2>
          </div>
          <div className="tm__intro">
            <p>
              Our customer stories are not just reflections of today’s success
              but a source of inspiration for tomorrow’s triumphs. Explore the
              digital evolution that has paved the way for unparalleled business
              growth.
            </p>
            <Link to="/case-studies" className="tm__more">
              <span>View Case Studies</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="tm__carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
          onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
          onFocus={(e) => setFocused(isKeyboardFocus(e.target))}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
          }}
          onKeyDown={handleKeyDown}
        >
          {/* Screen-reader status: only spoken when the person (not autoplay) moves the slides */}
          <p className="tm__sr" aria-live="polite" aria-atomic="true">
            {canAutoplay
              ? ""
              : `Showing testimonials ${index + 1} to ${lastVisible} of ${total}`}
          </p>

          <div
            className="tm__viewport"
            ref={viewportRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
          >
            <div
              className="tm__track"
              style={{ "--pv": perView, "--i": index }}
            >
              {TESTIMONIALS.map((t, slideIndex) => {
                const isVisible = slideIndex >= index && slideIndex < index + perView;
                return (
                  <div
                    className="tm__slide"
                    key={t.name}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${slideIndex + 1} of ${total}`}
                    aria-hidden={isVisible ? undefined : "true"}
                  >
                    <article className="tm__card">
                      <div className="tm__stars" role="img" aria-label="5 out of 5 stars">
                        {[0, 1, 2, 3, 4].map((s) => (
                          <Star key={s} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                        ))}
                      </div>

                      <div className="tm__avatar" aria-hidden="true">
                        {getInitials(t.name)}
                      </div>

                      <div className="tm__body">
                        <Quote className="tm__quote tm__quote--open" size={22} aria-hidden="true" />
                        <h3 className="tm__name">{t.name}</h3>
                        <p className="tm__role">{t.role}</p>
                        <p className="tm__text">{t.text}</p>
                        <Quote className="tm__quote tm__quote--close" size={22} aria-hidden="true" />
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls: arrows and dots. Dots drop to their own row on narrow screens */}
          <div className="tm__controls">
            <button
              type="button"
              className="tm__arrow"
              aria-label="Previous testimonials"
              onClick={prev}
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>

            <div
              className="tm__dots"
              role="group"
              aria-label="Choose testimonial position"
              data-autoplay={canAutoplay ? "on" : "off"}
              style={{ "--tm-autoplay": `${AUTOPLAY_MS}ms` }}
            >
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-current={i === index ? "true" : undefined}
                  aria-label={`Show testimonials ${i + 1} to ${Math.min(i + perView, total)}`}
                  className={`tm__dot ${i === index ? "tm__dot--active" : ""}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>

            <button
              type="button"
              className="tm__arrow"
              aria-label="Next testimonials"
              onClick={next}
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
