"use client";
import React from 'react';

interface FeaturesProps {
    title: string;
    description: string;
    items: {
        icon: string;
        title: string;
        description: string;
    }[];
}

// A simple component to render SVG icons based on a string name
const FeatureIcon = ({ name }: { name: string }) => {
    switch (name) {
        case 'info':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            );
        case 'support':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5H9.5a2.5 2.5 0 0 0 0 5H12"/><path d="M12 14v1a2 2 0 0 1-2 2H8.5a2.5 2.5 0 0 1 0-5H12"/><path d="M15 5h2.5a2.5 2.5 0 0 1 0 5H15"/><path d="M15 14v1a2 2 0 0 0 2 2h1.5a2.5 2.5 0 0 0 0-5H15"/></svg>
            );
        case 'time':
             return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            );
        default:
            return null;
    }
}


export const Features = ({ title, description, items }: FeaturesProps) => {
    return (
        <section className="bg-slate-50 py-20 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-work-sans font-bold text-ink mb-4">{title}</h2>
                <p className="text-lg text-graphite max-w-3xl mx-auto mb-12">{description}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {items.map((item, index) => (
                        <div key={index} className="bg-paper p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-paper mb-6">
                               <FeatureIcon name={item.icon} />
                            </div>
                            <h3 className="text-xl font-work-sans font-semibold text-ink mb-2">{item.title}</h3>
                            <p className="text-slate font-inter">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

