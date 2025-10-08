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
}) => {
  return (
    <section
      style={{
        background: backgroundImage
          ? `url(${backgroundImage}) center/cover no-repeat`
          : "#f5f5f5",
        padding: "4rem 2rem",
        color: "#222",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          background: backgroundImage ? "rgba(0,0,0,0.4)" : "transparent",
          padding: "2rem",
          borderRadius: "8px",
          display: "inline-block",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: 0, color: "#fff" }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: "1.25rem", color: "#eee", marginTop: "1rem" }}>
            {subtitle}
          </p>
        )}
        {children && <div style={{ marginTop: "2rem" }}>{children}</div>}
      </div>
    </section>
  );
};

export default Hero;
