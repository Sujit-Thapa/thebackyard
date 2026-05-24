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
    className={`relative w-full py-24 px-6 flex flex-col items-center justify-center text-center ${
      backgroundImage ? "bg-cover bg-center" : "bg-gradient-to-b from-gray-50 to-white"
    }`}
    style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
  >
    {backgroundImage && (
      <div className="absolute inset-0 bg-black/30" />
    )}
    
    <div className="relative max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-6">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-600 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);

export default Hero;
