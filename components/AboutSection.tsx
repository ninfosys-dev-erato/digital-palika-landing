"use client";

import Image from 'next/image'; // Assuming you use Next.js Image component
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutPageSection, StatisticItem } from '@/lib/siteData'; // Import types

// --- TYPES ---
interface AboutSectionProps {
    sections: AboutPageSection[];
    stats: StatisticItem[];
}

// --- UTILITY HOOKS & COMPONENTS (Keeping your Animation logic) ---

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

const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
    // Safely parse the number, removing non-numeric characters (like ' +')
    const cleanedValue = value.replace(/[^\d]/g, ''); 
    const numValue = parseInt(cleanedValue, 10);
    const count = useCountUp(isNaN(numValue) ? 0 : numValue);

    return (
        <div className="text-center">
            <p className="text-5xl md:text-6xl font-inter-tight font-bold text-accent">
                {count}{value.includes('+') ? '+' : ''}
            </p>
            <p className="text-slate font-inter mt-2">{label}</p>
        </div>
    );
};


// --- MAIN ABOUT SECTION COMPONENT ---

const SectionRenderer = ({ section }: { section: AboutPageSection }) => {
    const { t } = useLanguage();
    const isList = !Array.isArray(section.content);
    const imageOnRight = section.imagePosition === 'right';

    // Tailwind classes for alternating layout
    const layoutClasses = imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row';
    const textOrder = imageOnRight ? 'order-1' : 'order-2';
    const imageOrder = imageOnRight ? 'order-2' : 'order-1';

    return (
        <div 
            className={`flex flex-col ${layoutClasses} gap-12 lg:gap-20 py-16 md:py-24 border-b border-slate-100 last:border-b-0`}
            id={section.id}
        >
            {/* Text and Content Block */}
            <div className={`w-full md:w-1/2 ${textOrder}`}>
                <h2 className="text-3xl md:text-4xl font-work-sans font-extrabold text-primary mb-6">
                    {t(section.title)}
                </h2>

                {/* Render Paragraphs */}
                {!isList && Array.isArray(section.content) && section.content.map((p, index) => (
                    <p key={index} className="text-lg text-slate font-inter leading-relaxed mb-4">
                        {t(p)}
                    </p>
                ))}

                {/* Render Bulleted List (Objectives) */}
                {isList && !Array.isArray(section.content) && section.content.type === 'list' && (
                    <ul className="text-lg text-slate font-inter space-y-4 list-disc list-inside ml-4">
                        {section.content.items.map((item, index) => (
                            <li key={index} className="text-graphite">
                                {t(item)}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Image Block (Only if image path exists) */}
            {section.image && (
                <div className={`w-full md:w-1/2 flex justify-center items-start ${imageOrder}`}>
                    <div className="w-full h-auto max-w-lg overflow-hidden rounded-xl shadow-2xl">
                        {/* Placeholder Image Component - Replace with actual Image setup */}
                        <Image
                            src={section.image} 
                            alt={t(section.title)} 
                            width={600} 
                            height={400} 
                            style={{ width: '100%', height: 'auto' }}
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export const AboutSection = ({ sections, stats }: AboutSectionProps) => {
    const { t } = useLanguage();

    // Stats title is derived from the section content, but can be central here
    const statsTitle = t({ en: 'Digital Palika Impact', ne: 'डिजिटल पालिका प्रभाव' });
    const statsSubtitle = t({ en: 'Measurable results driving local governance forward.', ne: 'स्थानीय शासनलाई अगाडि बढाउने मापनयोग्य नतिजाहरू।' });

    return (
        <section className="bg-paper px-4">
            <div className="container mx-auto max-w-7xl">
                
                {/* Render all content sections (Introduction, Objectives, etc.) */}
                {sections.map(section => (
                    <SectionRenderer key={section.id} section={section} />
                ))}


                {/* Animated Stats Section (Placed below content sections) */}
                <div className="py-20 md:py-28">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-work-sans font-bold text-ink mb-2">
                            {statsTitle}
                        </h2>
                        <p className="text-lg text-graphite font-inter">
                            {statsSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 max-w-6xl mx-auto">
                        {stats.map(stat => (
                            <AnimatedStat 
                                key={stat.id} 
                                value={t(stat.value)} 
                                label={t(stat.label)} 
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};