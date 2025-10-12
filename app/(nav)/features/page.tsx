// app/(nav)/features/page.tsx

"use client";

import { Fragment } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FeatureSection } from '@/components/FeatureSection'; // NEW Component
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import { siteData, FullSiteContent } from '@/lib/siteData';


export default function FeaturesPage() {
    return (
        <LanguageProvider>
            <FeaturesContent />
        </LanguageProvider>
    );
}

function FeaturesContent() {
    const { lang } = useLanguage();
    const content: FullSiteContent = siteData;

    const { header, featuresPage, footer } = content;

    return (
        <Fragment>
            <Header navItems={header.navItems} currentLang={lang} />
            <main>
                <FeatureSection
                    title={featuresPage.title}
                    subtitle={featuresPage.subtitle}
                    features={featuresPage.items}
                />
            </main>
            <Footer
                copyright={footer.copyright}
                links={footer.quickLinks.links.map(link => ({ ...link, label: link.label }))}
                onOfficesClick={() => { /* Functionality to be added later */ }}
            />
        </Fragment>
    );
}