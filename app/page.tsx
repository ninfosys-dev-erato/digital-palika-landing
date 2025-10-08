"use client";

import { Fragment } from 'react';
// --- Import only the core components ---
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { Footer } from '../components/footer';

// --- Import from the new Language Context file ---
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import type { SiteContent } from '../context/LanguageContext';

// --- Simplified Localized Site Content ---
export const siteContent: SiteContent = {
  header: {
    navItems: [
        { label: { en: 'Home', ne: 'गृह पृष्ठ' }, href: '/' },
        { label: { en: 'About Us', ne: 'हाम्रो बारेमा' }, href: '/about' },
        { label: { en: 'Our Clients', ne: 'हाम्रो ग्राहकहरु' }, href: '/clients' },
        { label: { en: 'Specialties', ne: 'विशेषताहरु' }, href: '/specialties' },
        { label: { en: 'Contact', ne: 'सम्पर्क' }, href: '/contact' },
    ],
  },
  hero: {
    title: { en: 'Unlocking Potential, Driving Growth', ne: 'सम्भावना खोल्दै, वृद्धि गर्दै' },
    description: { en: 'Ninja Infosys partners with leading organizations to solve their toughest challenges and seize their greatest opportunities.', ne: 'निन्जा इन्फोसिस् प्रमुख संगठनहरूसँग साझेदारी गरी उनीहरूको सबैभन्दा कठिन चुनौतीहरू समाधान गर्दछ र ठूला अवसरहरू प्राप्त गर्दछ।' },
    ctaText: { en: 'Explore Our Work', ne: 'हाम्रो काम हेर्नुहोस्' },
    ctaLink: '/work',
  },
  footer: {
    copyright: { en: `© ${new Date().getFullYear()} Ninja Infosys. All rights reserved.`, ne: `© ${new Date().getFullYear()} निन्जा इन्फोसिस्। सबै अधिकार सुरक्षित।` },
    links: [
      { label: { en: 'Privacy Policy', ne: 'गोपनीयता नीति' }, href: '/privacy' },
      { label: { en: 'Terms of Use', ne: 'प्रयोगका सर्तहरू' }, href: '/terms' },
    ],
  },
};

// --- Main Home Page Component ---
export default function Home() {
  return (
    <Fragment>
      {/* Inject content JSON into the DOM */}
      <script
        id="ni-content"
        type="application/json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteContent) }}
      />
      <LanguageProvider>
        <HomeContent />
      </LanguageProvider>
    </Fragment>
  );
}

// --- Component to render the page content ---
const HomeContent = () => {
  const { t, lang } = useLanguage();

  // State for modals can be added back here when needed
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const [isOfficesOpen, setIsOfficesOpen] = useState(false);

  return (
    <Fragment>
      <Header
        navItems={siteContent.header.navItems}
        currentLang={lang}
        onSearchClick={() => { /* Functionality to be added later */ }}
      />
      <main id="main-content">
        <Hero
          title={t(siteContent.hero.title)}
          description={t(siteContent.hero.description)}
          ctaText={t(siteContent.hero.ctaText)}
          ctaLink={siteContent.hero.ctaLink}
        />
      </main>
      <Footer
        copyright={t(siteContent.footer.copyright)}
        links={siteContent.footer.links.map(link => ({ ...link, label: t(link.label) }))}
        onOfficesClick={() => { /* Functionality to be added later */ }}
      />
    </Fragment>
  );
};

