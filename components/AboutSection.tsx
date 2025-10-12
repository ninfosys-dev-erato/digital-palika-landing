"use client";

import Image from 'next/image';
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

    // Detect section type
    const isIntroduction = section.id === 'introduction';
    const isObjectives = section.id === 'objectives';

    // Layout logic
    const imageOnRight = isIntroduction ? false : section.imagePosition === 'right';
    const layoutClasses = isIntroduction ? 'md:flex-row' : (imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row');
    const textOrder = 'order-1';
    const imageOrder = 'order-2';

    // Set image source based on section
    let imageSrc = '';
    if (isIntroduction) imageSrc = '/Introduction.png';
    if (isObjectives) imageSrc = '/Objectives.png';

    return (
        <div 
            className={`flex flex-col ${layoutClasses} gap-8 lg:gap-12 py-12 md:py-16 border-b border-slate-100 last:border-b-0`}
            id={section.id}
        >
            {/* Text Block */}
            <div className={`w-full md:w-1/2 ${textOrder}`}>
                <h2 className={`text-xl md:text-2xl font-work-sans font-extrabold mb-4 ${(isIntroduction || isObjectives) ? 'text-blue-700' : 'text-primary'}`}>
                    {t(section.title)}
                </h2>
                {/* Paragraphs */}
                {!isList && Array.isArray(section.content) && section.content.map((p, index) => (
                    <p key={index} className={`text-sm md:text-base font-inter leading-relaxed mb-3 text-justify ${(isIntroduction || isObjectives) ? 'text-black' : 'text-slate'}`}>
                        {t(p)}
                    </p>
                ))}
                {/* Objectives List */}
                {isList && !Array.isArray(section.content) && section.content.type === 'list' && (
                    <ul className="text-sm md:text-base text-black font-inter space-y-3 list-disc list-inside ml-4 text-justify">
                        {section.content.items.map((item, index) => (
                            <li key={index} className="text-black text-justify">
                                {t(item)}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {/* Image Block */}
            {(isIntroduction || isObjectives) && (
                <div className={`w-full md:w-1/2 ${imageOrder} flex justify-center items-center`}>
                    <div className="w-full h-auto max-w-lg overflow-hidden">
                        <Image
                            src={imageSrc}
                            alt={t(section.title)}
                            width={600}
                            height={400}
                            style={{ width: '100%', height: 'auto' }}
                            priority
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export const AboutSection = ({ sections, stats }: AboutSectionProps) => {
    const { t } = useLanguage();

    return (
        <section className="bg-paper px-4">
            <div className="container mx-auto max-w-7xl">
                
                {/* Render all content sections (Introduction, Objectives, etc.) */}
                {sections.map(section => (
                    <SectionRenderer key={section.id} section={section} />
                ))}

                {/* Removed the Animated Stats Section */}
            </div>
        </section>
    );
};

const aboutSections: AboutPageSection[] = [
    {
        id: 'introduction',
        title: 'परिचय',
        content: [
            'डिजिटल प्रविधिले धेरै ठूलो फड्को मारेको ...',
            'यो सँगै, जिम्मेवारीलाई वहन गर्दै ...',
            // more paragraphs
        ],
        imagePosition: 'right'
    },
    // other sections
];