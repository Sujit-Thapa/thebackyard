import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  children,
}) => (
  <section
    style={{
      background: backgroundImage
        ? `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${backgroundImage}) center/cover`
        : "#fafbfc",
      padding: "5rem 1rem",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "40vh",
      textAlign: "center",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", fontWeight: 700, margin: 0 }}>{title}</h1>
    {subtitle && (
      <p style={{ fontSize: "1.2rem", fontWeight: 400, margin: "1rem 0 0" }}>
        {subtitle}
      </p>
    )}
    {children && <div style={{ marginTop: "2rem" }}>{children}</div>}
  </section>
);

export default Hero;
