"use client";

import Link from 'next/link';

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const Hero = ({ title, description, ctaText, ctaLink }: HeroProps) => {
  // Helper to get Tailwind CSS theme values for dynamic styles
  // This is a workaround for using theme() in style attributes directly
  const getTailwindColor = (path: string): string => {
    const colors: { [key: string]: string } = {
      'colors.accent': '#0F62FE',
      'colors.accent-2': '#7A5AF8',
    };
    return colors[path] || '';
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[70vh] flex items-center justify-center text-center bg-paper py-20 px-4 md:py-24 lg:py-32">
      {/* Abstract background animation - subtle, inspired by dynamic website backgrounds */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          background: `radial-gradient(circle at top left, ${getTailwindColor('colors.accent')} 0%, transparent 40%),
                       radial-gradient(circle at bottom right, ${getTailwindColor('colors.accent-2')} 0%, transparent 40%)`,
          backgroundSize: '150% 150%', // Make gradients larger to spread out
          animation: 'moveGradient 15s ease infinite alternate', // Subtle animation
        }}
      ></div>

      {/* Define the animation for the gradient */}
      <style jsx>{`
        @keyframes moveGradient {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
      `}</style>


      <div className="relative z-10 max-w-5xl space-y-8 lg:space-y-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-inter-tight font-extrabold text-ink leading-tight tracking-tighter">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-graphite font-inter max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        <Link
          href={ctaLink}
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-work-sans font-semibold text-paper bg-accent rounded-full hover:bg-accent-2 transition-all duration-300 ease-in-out shadow-lg transform hover:-translate-y-1"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
};