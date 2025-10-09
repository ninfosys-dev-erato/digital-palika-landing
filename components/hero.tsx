"use client";

import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const Hero = ({ title, description, ctaText, ctaLink }: HeroProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-paper py-20 px-4 md:py-24 lg:py-32">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="z-10 text-center lg:text-left">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-work-sans font-bold text-ink leading-tight tracking-tight animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            {title}
          </h1>
          <p 
            className="mt-6 text-lg md:text-xl text-graphite font-inter max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            {description}
          </p>
          <a
            href={ctaLink}
            className="inline-block mt-8 px-8 py-4 text-lg font-work-sans font-semibold text-paper bg-accent rounded-md hover:bg-accent-2 transition-all duration-300 ease-in-out shadow-lg transform hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            {ctaText}
          </a>
        </div>

        {/* Right Column: Image */}
        <div className="relative z-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <img
            src="https://placehold.co/800x600/E2E8F0/4A5568?text=Dashboard+UI"
            alt="Digital Palika Dashboards"
            className="rounded-lg shadow-2xl w-full h-auto"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/E2E8F0/4A5568?text=Image+Not+Found'; }}
          />
        </div>
      </div>
       {/* Simple keyframe animations for content fade-in */}
       <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};
