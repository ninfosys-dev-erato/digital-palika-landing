"use client";

import { useLanguage, LocalizedString } from '@/context/LanguageContext';
import { FeatureItem } from '@/lib/siteData';
import React from 'react';

interface FeatureSectionProps {
    title: LocalizedString;
    subtitle: LocalizedString;
    features: FeatureItem[];
}

// Simple Placeholder for Icon Component
const FeatureIcon = ({ icon }: { icon: string }) => (
    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6" title={`Icon: ${icon}`}>
        {/* Placeholder SVG/Icon - Use a standard icon library in a real app */}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="12" x="3" y="8" rx="2" ry="2"/>
            <path d="M10 4h4"/>
        </svg>
    </div>
);


export const FeatureSection = ({ title, subtitle, features }: FeatureSectionProps) => {
    const { t } = useLanguage();

    return (
        <section className="bg-paper py-20 md:py-28 px-4">
            <div className="container mx-auto max-w-7xl">
                
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-3xl md:text-4xl font-work-sans font-bold text-blue-900 mb-4">
                        {t(title)}
                    </h1>
                    <p className="text-lg md:text-xl text-black font-inter leading-relaxed">
                        {t(subtitle)}
                    </p>
                </div>

                {/* Features Grid (Matches the 3-column layout in Image 1) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                    {features.map((feature) => (
                        <div 
                            key={feature.id} 
                            className="bg-secondary p-8 rounded-xl transition duration-300 transform hover:-translate-y-1 border border-slate-200"
                        >
                            <FeatureIcon icon={feature.icon} />

                            <h3 className="text-xl font-work-sans font-semibold text-black mb-2">
                                {t(feature.title)}
                            </h3>
                            
                            {/* Feature Description (Subtitle style) */}
                            <p className="text-base text-black font-inter">
                                {t(feature.description)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};