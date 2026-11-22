"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

/** Scroll-triggered reveals for [data-reveal] elements, plus a back-to-top button. */
export default function ScrollEffects() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      root.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <a href="#top" className={`to-top ${showTop ? "is-shown" : ""}`} aria-label="Back to top" tabIndex={showTop ? 0 : -1}>
      <FiArrowUp aria-hidden="true" />
    </a>
  );
}
