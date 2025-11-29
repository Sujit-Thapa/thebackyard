import React from "react";

const Footer: React.FC = () => (
  <footer
    style={{
      width: "100%",
      padding: "1.5rem 0",
      background: "#18181b",
      color: "#a1a1aa",
      textAlign: "center",
      marginTop: "auto",
      borderTop: "1px solid #27272a",
      fontSize: "1rem",
      letterSpacing: "0.02em",
      fontFamily: "Inter, sans-serif",
    }}
  ></footer>

  <footer
    style={{
      width: "100%",
      padding: "1.5rem 0",
      background: "#18181b",
      color: "#a1a1aa",
      textAlign: "center",
      marginTop: "auto",
      borderTop: "1px solid #27272a",
      fontSize: "0.875rem",
      letterSpacing: "0.02em",
      fontFamily: "Inter, sans-serif",
    }}
  >
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
      <p style={{ margin: "0.5rem 0" }}>
        © {new Date().getFullYear()} The Backyard. All rights reserved.
      </p>
      <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
        <a href="#privacy" style={{ color: "#a1a1aa", textDecoration: "none" }}>
          Privacy
        </a>
        <a href="#terms" style={{ color: "#a1a1aa", textDecoration: "none" }}>
          Terms
        </a>
        <a href="#contact" style={{ color: "#a1a1aa", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;
