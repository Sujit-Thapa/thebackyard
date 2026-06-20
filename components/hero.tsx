import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({


    
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
