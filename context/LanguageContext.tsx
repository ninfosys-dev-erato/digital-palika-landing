"use client";

import { createContext, useState, useContext, ReactNode } from 'react';

// --- 1. Define Shared Types and Interfaces ---
export type Language = 'en' | 'ne';

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

// NEW: Add a type for the stats on the about page
export interface StatItem {
    value: string;
    label: LocalizedString;
}

// This interface now includes a new 'aboutPage' section
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
    // NEW: Add the structure for the about page content
    aboutPage?: {
        title: LocalizedString;
        subtitle: LocalizedString;
        paragraphs: LocalizedString[];
        stats: StatItem[];
    };
    // We will add other page content types here later
}


// --- 2. Language Context Definition ---
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (text: LocalizedString) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// --- 3. Custom Hook to Access the Context ---
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// --- 4. Language Provider Component ---
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Initialize language from localStorage or default to 'ne' (Nepali)
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('appLang') as Language;
      return storedLang || 'ne'; // Default to Nepali
    }
    return 'ne'; // Default for server-side render
  });

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