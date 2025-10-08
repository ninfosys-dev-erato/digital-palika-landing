"use client"; // REQUIRED for using React hooks like createContext, useState, useContext

import { Fragment, createContext, useState, useContext, ReactNode } from 'react';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { Footer } from '../components/footer';

// --- 1. Define Language and Content Structures ---
export type Language = 'en' | 'ne'; // Exporting for use in other components

export interface LocalizedString {
  en: string;
  ne: string;
}

export interface NavItem {
  label: LocalizedString;
  href: string;
}

export interface FooterLink {
  label: LocalizedString;
  href: string;
}

export interface SiteContent {
  header: {
    navItems: NavItem[];
  };
  hero: {
    title: LocalizedString;
    description: LocalizedString;
    ctaText: LocalizedString;
    ctaLink: string;
  };
  footer: {
    copyright: LocalizedString;
    links: FooterLink[];
  };
  // ... other sections will be added here
}

// --- 2. Localized Site Content (with new nav items) ---
export const siteContent: SiteContent = { // Exporting so other files could potentially import it if needed
  header: {
    navItems: [
      // Updated navigation items based on Digital Palika
      { label: { en: 'Home', ne: 'गृह पृष्ठ' }, href: '/' }, // Changed to '/' for home page
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
    copyright: { en: '© 2024 Ninja Infosys. All rights reserved.', ne: '© २०२४ निन्जा इन्फोसिस्। सबै अधिकार सुरक्षित।' },
    links: [
      { label: { en: 'Privacy Policy', ne: 'गोपनीयता नीति' }, href: '/privacy' },
      { label: { en: 'Terms of Use', ne: 'प्रयोगका सर्तहरू' }, href: '/terms' },
    ],
  },
};

// --- 3. Language Context ---
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (text: LocalizedString) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Initialize language from localStorage or default to 'en'
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') { // Check if we are on the client side
      const storedLang = localStorage.getItem('appLang') as Language;
      return storedLang || 'en';
    }
    return 'en'; // Default for server-side render
  });

  // Update localStorage when language changes
  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('appLang', newLang);
    }
  };

  const t = (text: LocalizedString) => text[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// --- 4. Main Home Page Component ---
export default function Home() {
  // The content script tag now injects the full localized content
  return (
    <Fragment>
      {/* Inject content JSON into the DOM for potential client-side access or SEO if needed */}
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

// --- 5. Component to render the page content using the LanguageContext ---
const HomeContent = () => {
  const { t, lang } = useLanguage(); // Get current lang from context

  return (
    <Fragment>
      <Header
        navItems={siteContent.header.navItems} // Pass original navItems
        currentLang={lang} // Pass current language for styling the active button
      />

      <main id="main-content">
        <Hero
          title={t(siteContent.hero.title)}
          description={t(siteContent.hero.description)}
          ctaText={t(siteContent.hero.ctaText)}
          ctaLink={siteContent.hero.ctaLink}
        />
        {/* Other content sections will be added here */}
      </main>

      <Footer
  copyright={t(siteContent.footer.copyright)}
  links={siteContent.footer.links.map(link => ({
    ...link,
    label: t(link.label)
  }))}
/>
    </Fragment>
  );
};