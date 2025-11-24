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
);
export default Page;
const Page: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <main style={{ flex: 1 }}>{/* Page content goes here */}</main>
    <Footer />
  </div>
);
export default Footer;
