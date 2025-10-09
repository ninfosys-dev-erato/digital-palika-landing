"use client";

import { useState, useEffect } from 'react';

interface Stat {
    value: string;
    label: string;
}

interface AboutSectionProps {
  title: string;
  subtitle: string;
  paragraphs: string[];
  stats: Stat[];
}

// A custom hook for the number counting animation
const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        const animationFrame = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animationFrame);
            }
        };
        requestAnimationFrame(animationFrame);
    }, [end, duration]);

    return count;
};

const AnimatedStat = ({ value, label }: Stat) => {
    // Safely parse the number, removing the '+' sign if it exists
    const numValue = parseInt(value.replace('+', ''), 10);
    const count = useCountUp(isNaN(numValue) ? 0 : numValue);

    return (
        <div className="text-center">
            <p className="text-5xl md:text-6xl font-inter-tight font-bold text-accent">
                {count}+
            </p>
            <p className="text-slate font-inter mt-2">{label}</p>
        </div>
    );
};


export const AboutSection = ({ title, subtitle, paragraphs, stats }: AboutSectionProps) => {
  return (
    <section className="bg-paper py-20 md:py-28 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-work-sans font-bold text-ink mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-graphite font-inter leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Main Content Body */}
        <div className="max-w-prose mx-auto text-lg text-slate font-inter space-y-6 mb-20">
          {paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>

        {/* Animated Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto pt-12 border-t border-slate-200">
            {stats.map(stat => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
        </div>
      </div>
    </section>
  );
};