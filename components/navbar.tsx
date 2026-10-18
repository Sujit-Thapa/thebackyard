"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GiCampCookingPot } from "react-icons/gi";

const links = [
  { name: "Home", href: "#top" },
  { name: "Menu", href: "#menu" },
  { name: "Experience", href: "#experience" },
  { name: "Specials", href: "#specials" },
  { name: "Reserve", href: "#reserve" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            <a key={link.name} href={link.href}>
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
            <a key={link.name} href={link.href} onClick={() => setOpen(false)}>
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
