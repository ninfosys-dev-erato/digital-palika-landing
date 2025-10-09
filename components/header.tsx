"use client";

import Link from 'next/link';
// Import the core data structure (FullSiteContent) and the actual data (siteData)
import { siteData } from '@/lib/siteData'; 
// Import the language hook and types
import { useLanguage, Language } from '@/context/LanguageContext';
import { Menu, Search } from 'lucide-react'; // Directly import needed icons

/**
 * The Header component for the website.
 * It is responsible for navigation and language switching.
 */
export const Header = () => {
    // 1. Hook into the language context to get the current language state and translation function
    const { lang, setLang, t } = useLanguage();

    // Determine the data needed from the centralized siteData
    const navItems = siteData.header.navItems;
    // NOTE: The 'signInText' variable and corresponding button have been removed.
    
    // Placeholder function for opening a search modal (to be implemented later)
    const handleSearchClick = () => {
        console.log("Search functionality triggered.");
        // In a real app, this would open a search modal or navigate to a search page
    };

    // Placeholder for mobile menu state (to be implemented later)
    const handleMobileMenuClick = () => {
        console.log("Mobile menu toggle triggered.");
    };

    return (
        // Use fixed width container for responsiveness and sticky top for smooth scrolling
        <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm shadow-md transition-shadow">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                
                {/* Logo/Site Title: Uses the title from siteData */}
                <Link href="/" className="text-2xl font-extrabold text-indigo-700 tracking-tight transition-colors hover:text-indigo-900">
                    {t(siteData.hero.title)}
                </Link>

                {/* Main Navigation (Hidden on small screens, shown on large) */}
                <nav className="hidden lg:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {/* Ensure all nav items from siteData are displayed, including Contact */}
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-gray-700 text-sm font-medium transition-colors hover:text-indigo-600 relative group py-2"
                                >
                                    {t(item.label)} {/* Translate the label */}
                                    {/* Underline effect */}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right-aligned utility section: Search, Language Toggle, Mobile Menu */}
                <div className="flex items-center space-x-4 sm:space-x-6">

                    {/* Search Icon Button */}
                    <button
                        aria-label="Search"
                        className="p-2 text-gray-500 hover:text-indigo-600 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onClick={handleSearchClick}
                    >
                        <Search size={20} />
                    </button>
                    
                    {/* Language Toggle */}
                    <div className="flex items-center border border-gray-300 rounded-lg p-0.5 space-x-0.5 shadow-sm">
                        <button
                            onClick={() => setLang('en' as Language)}
                            className={`px-2 py-1 text-xs font-semibold rounded-md transition-all duration-200 ${
                                lang === 'en' 
                                    ? 'bg-indigo-600 text-white shadow-md' 
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            aria-label="Switch to English"
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLang('ne' as Language)}
                            className={`px-2 py-1 text-xs font-semibold rounded-md transition-all duration-200 ${
                                lang === 'ne' 
                                    ? 'bg-indigo-600 text-white shadow-md' 
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            aria-label="Switch to Nepali"
                        >
                            NP
                        </button>
                    </div>

                    {/* Mobile Menu Toggle (Only visible on small screens) */}
                    <button
                        aria-label="Open mobile menu"
                        className="lg:hidden p-2 text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full"
                        onClick={handleMobileMenuClick}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};
