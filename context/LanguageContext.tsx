"use client";

import { createContext, useState, useContext, ReactNode } from 'react';

// Core types for the language state
export type Language = 'en' | 'ne';
export interface LocalizedString {
    en: string;
    ne: string;
}

export interface NavItem {
    label: LocalizedString;
    href: string;
}
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

// Translation logic: safely selects the string based on the current 'lang'
const t = (text: LocalizedString) => text[lang];
return (
<LanguageContext.Provider value={{ lang, setLang, t }}>
    {children}
    </LanguageContext.Provider>
    );
};