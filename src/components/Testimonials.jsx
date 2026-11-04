import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
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
// Direction of the automatic scrolling.
//  1 = the row slides to the left, so the next testimonial in the list comes in
//      from the right (you read the list left to right).
// -1 = the row slides to the right, so the previous testimonial comes in from the left.
const AUTOPLAY_STEP = 1;
const SLIDE_MS = 550; // slide duration (kept in sync with the CSS through --tm-slide)
const SLIDE_MS_REDUCED = 300; // calmer slide for people who prefer reduced motion
const SWIPE_MIN_PX = 40; // horizontal distance that counts as a swipe

// Always returns 0..m-1, even for negative numbers
const mod = (n, m) => ((n % m) + m) % m;

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
//
// Endless loop without ever rewinding: the track holds the real cards plus a copy
// of the last `perView` cards in front and the first `perView` cards behind.
// Moving past either end slides onto a copy, then (after the slide finishes) the
// track jumps, with no animation, to the identical real card. The jump is invisible.
//
// `pos` is the logical index of the first visible card. It is normally 0..total-1
// and is only -1 or `total` for a moment while the slide lands on a copy.
// -----------------------------------------------------------------------------

export default function Testimonials() {
  const [perView, setPerView] = useState(3);
  // One state object so "new position" and "skip the animation" always change together
  const [view, setView] = useState({ pos: 0, instant: false });
  const [hovered, setHovered] = useState(false); // mouse over the carousel
  const [focused, setFocused] = useState(false); // keyboard focus inside it
  const [userPaused, setUserPaused] = useState(false); // pause button
  const [reduceMotion, setReduceMotion] = useState(false);
  const [inView, setInView] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const touchStart = useRef(null);

  const { pos, instant } = view;
  const total = TESTIMONIALS.length;
  const loops = total > perView; // with fewer cards than slots there is nothing to scroll
  const clones = loops ? perView : 0;
  const active = mod(pos, total); // which dot is lit
  const paused = hovered || focused;
  const slideMs = reduceMotion ? SLIDE_MS_REDUCED : SLIDE_MS;

  // Jump to the matching real card without an animation
  const snap = useCallback(
    () => setView((v) => ({ pos: mod(v.pos, total), instant: true })),
    [total]
  );

  // Cards per view: measure the carousel and re-measure when it resizes
  useIsoLayoutEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const update = () => {
      const next = perViewFor(node.clientWidth);
      setPerView((prev) => (prev === next ? prev : next));
    };
    update();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }

    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // When the number of cards per view changes, re-seat the track with no animation
  useIsoLayoutEffect(() => {
    snap();
  }, [perView, snap]);

  // Turn the transition back on after an instant jump. Reading offsetWidth forces
  // the browser to apply the "no transition" state first, so the jump is not animated.
  useIsoLayoutEffect(() => {
    if (!instant) return;
    void trackRef.current?.offsetWidth;
    setView((v) => ({ ...v, instant: false }));
  }, [instant]);

  // Landed on a copy (pos = -1 or total)? Once the slide has finished, jump to the real card.
  useEffect(() => {
    if (pos >= 0 && pos < total) return;
    const id = setTimeout(snap, slideMs + 60);
    return () => clearTimeout(id);
  }, [pos, total, slideMs, snap]);

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

  // Move one card. While the track is still settling on a copy (about half a second
  // at an end of the list) extra requests are ignored, so it can never run past the copies.
  const step = useCallback(
    (dir) => {
      if (total <= perView) return;
      setView((v) =>
        v.pos < 0 || v.pos >= total ? v : { pos: v.pos + dir, instant: false }
      );
    },
    [total, perView]
  );

  const next = useCallback(() => step(1), [step]);
  const prev = useCallback(() => step(-1), [step]);

  const goTo = useCallback(
    (i) =>
      setView((v) =>
        v.pos < 0 || v.pos >= total ? v : { pos: i, instant: false }
      ),
    [total]
  );

  // Autoplay: only while the section is on screen, never with reduced motion,
  // and not while hovered / keyboard-focused / paused with the button.
  // A timeout per slide restarts the 5 seconds after every manual change.
  // It watches `active` (not `pos`), so the silent jump back from a copy does not restart it.
  const canAutoplay = !reduceMotion && inView && !paused && !userPaused && loops;

  useEffect(() => {
    if (!canAutoplay) return;
    const id = setTimeout(() => step(AUTOPLAY_STEP), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [canAutoplay, active, step]);

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

  // Real cards plus the copies at both ends
  const slides = useMemo(
    () =>
      Array.from({ length: total + clones * 2 }, (_, e) => ({
        t: TESTIMONIALS[mod(e - clones, total)],
        e,
      })),
    [total, clones]
  );

  const lastVisible = mod(active + perView - 1, total) + 1;
  const statusText =
    perView === 1
      ? `Showing testimonial ${active + 1} of ${total}`
      : `Showing testimonials ${active + 1} to ${lastVisible} of ${total}`;

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
            {canAutoplay ? "" : statusText}
          </p>

          <div
            className="tm__viewport"
            ref={viewportRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
          >
            <div
              ref={trackRef}
              className={`tm__track${instant ? " tm__track--instant" : ""}`}
              style={{
                "--pv": perView,
                "--i": pos + clones, // clones in front shift every real card by `clones` places
                "--tm-slide": `${slideMs}ms`,
              }}
            >
              {slides.map(({ t, e }) => {
                const logical = mod(e - clones, total);
                const first = pos + clones;
                const isVisible = e >= first && e < first + perView;
                return (
                  <div
                    className="tm__slide"
                    key={`${t.name}-${e}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${logical + 1} of ${total}`}
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

          {/* Controls: arrows, dots and pause. Dots drop to their own row on narrow screens */}
          <div className="tm__controls">
            <button
              type="button"
              className="tm__arrow"
              aria-label="Previous testimonial"
              onClick={prev}
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>

            <div
              className="tm__dots"
              role="group"
              aria-label="Choose testimonial"
              data-autoplay={canAutoplay ? "on" : "off"}
              style={{ "--tm-autoplay": `${AUTOPLAY_MS}ms` }}
            >
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-current={i === active ? "true" : undefined}
                  aria-label={`Show testimonial ${i + 1} of ${total}`}
                  className={`tm__dot ${i === active ? "tm__dot--active" : ""}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            <button
              type="button"
              className="tm__arrow"
              aria-label="Next testimonial"
              onClick={next}
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>

            {/* Pause / play: lets people stop moving content (WCAG 2.2.2) */}
            {loops && !reduceMotion && (
              <button
                type="button"
                className="tm__arrow tm__pause"
                aria-label={userPaused ? "Start automatic scrolling" : "Pause automatic scrolling"}
                onClick={() => setUserPaused((p) => !p)}
              >
                {userPaused ? (
                  <Play size={18} fill="currentColor" aria-hidden="true" />
                ) : (
                  <Pause size={18} fill="currentColor" aria-hidden="true" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}