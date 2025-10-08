import React from "react";

const Footer: React.FC = () => (
  <footer
    style={{
      width: "100%",
      padding: "1rem 0",
      background: "#222",
      color: "#fff",
      textAlign: "center",
      marginTop: "auto",
    }}
  >
    <p>
      &copy; {new Date().getFullYear()} The Backyard Cafe. All rights reserved.
    </p>
  </footer>
);

export default Footer;
