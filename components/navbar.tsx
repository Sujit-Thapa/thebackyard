"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GiCampCookingPot } from "react-icons/gi";

const links = [
  { name: "Home", href: "#top" },
  { name: "Menu", href: "#menu" },
  { name: "Experience", href: "#experience" },
  { name: "Specials", href: "#specials" },
  { name: "Reviews", href: "#reviews" },
  { name: "Reserve", href: "#reserve" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="The Backyard home">
          <span className="brand-mark" aria-hidden="true">
            <GiCampCookingPot />
          </span>
          The Backyard
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={active === link.href ? "is-active" : undefined}
              aria-current={active === link.href ? "location" : undefined}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#reserve" className="btn btn-primary nav-cta">
          Book a table
        </a>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={active === link.href ? "is-active" : undefined}
              aria-current={active === link.href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
