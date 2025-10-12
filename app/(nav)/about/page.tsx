"use client";

import { Fragment } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AboutSection } from '@/components/AboutSection';
import { LanguageProvider, useLanguage, NavItem } from '@/context/LanguageContext';
// NEW: Import the full site data object
import { siteData, FullSiteContent, StatisticItem } from '@/lib/siteData';
// REMOVE: The redundant StatItem, FooterLink, and SiteContent interfaces defined here.


// --- Main About Page Component ---
export default function AboutPage() {
    return (
        <LanguageProvider>
            <AboutContent />
        </LanguageProvider>
    );
}

// --- Component to render the page content ---
const AboutContent = () => {
    const { lang } = useLanguage();
    // Use the imported global data
    const content: FullSiteContent = siteData;

    // The AboutSection now takes the entire array of sections
    const aboutSections = content.aboutPage.sections;
    const stats = content.statistics;

    return (
        <Fragment>
            <Header
                navItems={content.header.navItems}
                currentLang={lang}
                onSearchClick={() => { /* Functionality to be added later */ }}
            />
            <main id="main-content">
                <AboutSection
                    sections={aboutSections}
                    stats={stats}
                />
            </main>
            <Footer
                // Use the Footer content from the global data
                copyright={content.footer.copyright}
                links={content.footer.quickLinks.links.map(link => ({ ...link, label: link.label }))}
                onOfficesClick={() => { /* Functionality to be added later */ }}
            />
        </Fragment>
    );
};