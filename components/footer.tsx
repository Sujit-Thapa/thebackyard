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
  >
    <p style={{ margin: 0 }}>
      &copy; {new Date().getFullYear()}{" "}
      <span style={{ color: "#fbbf24", fontWeight: 600 }}>
        The Backyard Cafe
      </span>
    </p>
  </footer>
);

export default Footer;
