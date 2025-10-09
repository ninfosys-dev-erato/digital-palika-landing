"use client"; // Header also needs to be a client component because it uses useLanguage hook

import Link from 'next/link';
import { useLanguage, LocalizedString, Language, NavItem } from '../app/page'; // Import from app/page.tsx
// For icons, we're sticking to direct SVG as discussed.
// Removed: import { Menu, Search } from 'lucide-react';

interface HeaderProps {
  navItems: NavItem[]; // navItems are now LocalizedString
  currentLang: Language; // To know which button to highlight
}

export const Header = ({ navItems, currentLang }: HeaderProps) => {
  const { t, setLang } = useLanguage(); // Get the translate function and setLang from context

  return (
    <header className="sticky top-0 z-40 w-full bg-paper/90 backdrop-blur-sm border-b border-slate/10 py-4 lg:py-5">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo/Site Title */}
        <Link href="/" className="text-2xl font-work-sans font-semibold text-ink tracking-tight hover:text-accent transition-colors">
          Digital Palika
        </Link>

        {/* Main Navigation (Hidden on small screens, shown on large) */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href === '/' ? '/' + currentLang : item.href} // Add language prefix for home link if needed for routing later, otherwise just item.href
                  className="text-graphite hover:text-accent font-inter text-base font-medium transition-colors relative group"
                >
                  {t(item.label)} {/* Translate the label here */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right-aligned utility section (Search, Language Toggle, Mobile Menu) */}
        <div className="flex items-center space-x-6">
          {/* Language Toggle (EN/NE buttons) */}
          <div className="flex items-center border border-slate/20 rounded-lg p-1 space-x-1">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-sm font-inter rounded-md transition-colors duration-200 ${
                currentLang === 'en' ? 'bg-accent text-paper font-semibold' : 'text-graphite hover:bg-slate/10'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLang('ne')}
              className={`px-3 py-1 text-sm font-inter rounded-md transition-colors duration-200 ${
                currentLang === 'ne' ? 'bg-accent text-paper font-semibold' : 'text-graphite hover:bg-slate/10'
              }`}
              aria-label="Switch to Nepali"
            >
              NE
            </button>
          </div>

          {/* Search Icon */}
          <button
            aria-label="Search"
            className="p-2 text-graphite hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
            // onClick={() => openSearchOverlay()}
          >
            {/* SVG for Search icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          {/* Mobile Menu Toggle (Visible only on small screens) */}
          <button
            aria-label="Open mobile menu"
            className="lg:hidden p-2 text-graphite hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
            // onClick={() => openMobileMenu()}
          >
            {/* SVG for Menu (Hamburger) icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
