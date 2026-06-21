import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  cta?: React.ReactNode;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  cta,
  children,
}) => {
  const titleId = React.useId();

  return (
    <section
      role="region"
      aria-labelledby={titleId}
      className="relative w-full py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" aria-hidden="true" />
      )}

      <div className="relative max-w-3xl mx-auto fadeIn">
        <h1
          id={titleId}
          className={`text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight md:tracking-wide ${
            backgroundImage ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`text-lg font-light leading-relaxed ${
              backgroundImage ? "text-gray-200" : "text-gray-600"
            }`}
          >
            {subtitle}
          </p>
        )}

        {(cta || children) && (
          <div className="mt-8">
            {cta}
            {!cta && children}
            {cta && children && <div className="mt-4">{children}</div>}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fadeIn { animation: fadeIn 700ms ease-out both; }
      `}</style>
    </section>
  );
};

export default Hero;
