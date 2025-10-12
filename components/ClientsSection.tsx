"use client";

import { useLanguage } from '@/context/LanguageContext';

export function ClientsSection() {
    const { t } = useLanguage();

    // Localized titles
    const title = t({ 
        en: 'Our Esteemed Clients and Partners', 
        ne: 'हाम्रा आदरणीय ग्राहक र साझेदारहरू' 
    });
    const subtitle = t({ 
        en: 'Trusted by local bodies across Nepal for digital transformation.', 
        ne: 'डिजिटल रूपान्तरणका लागि नेपालभरका स्थानीय निकायहरूद्वारा विश्वास गरिएको।' 
    });

    return (
        <section className="py-20 bg-paper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Title and Subtitle */}
                <h2 className="text-4xl font-work-sans font-extrabold text-primary mb-4">
                    {title}
                </h2>
                <p className="text-xl text-ink max-w-3xl mx-auto mb-16">
                    {subtitle}
                </p>

                {/* Placeholder Grid for Client Logos/Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {/* Map through your actual client data here */}
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div 
                            key={index} 
                            className="p-4 flex items-center justify-center h-24 bg-white shadow-lg rounded-lg border border-slate-200"
                        >
                            <span className="text-graphite font-inter text-sm">
                                Client {index + 1} Logo
                            </span>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}