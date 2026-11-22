"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const reviews = [
  { name: "Maya L.", role: "Date night regular", text: "The ribeye is the best I've had in the city, and sitting under the string lights makes it feel like a getaway." },
  { name: "Daniel K.", role: "Booked a birthday", text: "They hosted 20 of us without missing a beat. The hot honey pizza disappeared in minutes." },
  { name: "Priya S.", role: "Brunch on Sundays", text: "Cozy, warm and the staff remember my order. The burnt Basque cake is non-negotiable." },
  { name: "Tom R.", role: "Food blogger", text: "Real fire cooking you can taste. The smoked Old Fashioned is pure theatre." },
  { name: "Aisha B.", role: "First visit", text: "Walked in on a Friday, stayed for the live music. Already planning my next trip." },
  { name: "Leo M.", role: "Pasta devotee", text: "That hand-cut tagliatelle with ragù tastes like someone's nonna made it." },
];

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);
  const count = reviews.length;
  const angle = 360 / count;
  const active = ((index % count) + count) % count;

  const go = useCallback((step: number) => setIndex((i) => i + step), []);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current) return;
    const timer = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, go]);

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <div className="section-head section-head-center" data-reveal>
          <span className="eyebrow">Guest stories</span>
          <h2 className="section-title">Loved around the fire.</h2>
          <p className="section-sub">4.9 average from over 1,200 reviews.</p>
        </div>

        <div
          className="carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Guest reviews"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          data-reveal
        >
          <div className="carousel-stage">
            <div className="carousel-ring" style={{ "--rot": `${-index * angle}deg` } as CSSProperties}>
              {reviews.map((review, i) => (
                <figure
                  key={review.name}
                  className={`review-card ${i === active ? "is-active" : ""}`}
                  style={{ "--a": `${i * angle}deg` } as CSSProperties}
                  aria-hidden={i !== active}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}`}
                >
                  <span className="stars" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <FiStar key={s} fill="currentColor" aria-hidden="true" />
                    ))}
                  </span>
                  <blockquote>&ldquo;{review.text}&rdquo;</blockquote>
                  <figcaption>
                    <span className="avatar" aria-hidden="true">
                      {review.name[0]}
                    </span>
                    <span>
                      <strong>{review.name}</strong>
                      {review.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button type="button" className="carousel-btn" onClick={() => go(-1)} aria-label="Previous review">
              <FiChevronLeft />
            </button>
            <div className="carousel-dots">
              {reviews.map((review, i) => (
                <button
                  key={review.name}
                  type="button"
                  className={i === active ? "is-active" : ""}
                  aria-label={`Show review ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => go(i - active)}
                />
              ))}
            </div>
            <button type="button" className="carousel-btn" onClick={() => go(1)} aria-label="Next review">
              <FiChevronRight />
            </button>
          </div>
          <p className="sr-only" aria-live="polite">
            Review {active + 1} of {count}: {reviews[active].name}
          </p>
        </div>
      </div>
    </section>
  );
}
