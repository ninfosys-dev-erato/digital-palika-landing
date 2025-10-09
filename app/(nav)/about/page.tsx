"use client";

import { Fragment } from 'react';
import { Header } from '@/components/header'; 
import { Footer } from '@/components/footer'; 
import { AboutSection } from '@/components/AboutSection';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext'; 
import type { SiteContent, StatItem, FooterLink } from '@/context/LanguageContext';

// --- Content for the About Page ---
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
  hero: { title: {en:'', ne:''}, description: {en:'', ne:''}, ctaText: {en:'', ne:''}, ctaLink: '' }, 
  aboutPage: {
    title: { en: 'Our Mission', ne: 'हाम्रो मिशन' },
    subtitle: {
        en: 'Empowering local governments with modern technology to build a prosperous, technology-friendly Digital Nepal.',
        ne: 'समृद्ध, प्रविधि-मैत्री डिजिटल नेपाल निर्माण गर्न आधुनिक प्रविधिको साथ स्थानीय सरकारहरूलाई सशक्त बनाउने।'
    },
    paragraphs: [
        {
            en: 'Digital Palika was born from a simple idea: to bridge the gap between citizens and local government through user-friendly technology. We are a team of passionate developers, public policy experts, and strategists dedicated to making governance more transparent, efficient, and accessible for everyone.',
            ne: 'डिजिटल पालिका एक साधारण विचारबाट जन्मिएको हो: प्रयोगकर्ता-मैत्री प्रविधिको माध्यमबाट नागरिक र स्थानीय सरकार बीचको दूरीलाई कम गर्ने। हामी शासनलाई सबैका लागि थप पारदर्शी, कुशल र पहुँचयोग्य बनाउन समर्पित उत्साही विकासकर्ता, सार्वजनिक नीति विशेषज्ञ र रणनीतिकारहरूको टोली हौं।'
        },
        {
            en: 'Our integrated ERP system is more than just software; it is a complete ecosystem designed to streamline administrative tasks, improve service delivery, and foster a culture of data-driven decision-making. We believe that by empowering local bodies, we contribute to the larger vision of a digitally transformed Nepal.',
            ne: 'हाम्रो एकीकृत ईआरपी प्रणाली सफ्टवेयर मात्र होइन; यो प्रशासनिक कार्यहरूलाई सुव्यवस्थित गर्न, सेवा प्रवाहमा सुधार गर्न र तथ्याङ्कमा आधारित निर्णय लिने संस्कृतिको विकास गर्न डिजाइन गरिएको एक पूर्ण पारिस्थितिक प्रणाली हो। हामी विश्वास गर्छौं कि स्थानीय निकायहरूलाई सशक्त बनाएर, हामी डिजिटल रूपमा रूपान्तरित नेपालको बृहत् दृष्टिकोणमा योगदान पुर्याउँछौं।'
        },
    ],
    stats: [
        { value: '750+', label: { en: 'Local Bodies Served', ne: 'सेवा प्रदान गरिएका स्थानीय निकायहरू' } },
        { value: '1M+', label: { en: 'Citizens Reached', ne: 'नागरिक पहुँच' } },
        { value: '50+', label: { en: 'Dedicated Experts', ne: 'समर्पित विशेषज्ञहरू' } },
    ]
  },
  footer: {
    copyright: { en: `© ${new Date().getFullYear()} Ninja Infosys. All rights reserved.`, ne: `© ${new Date().getFullYear()} निन्जा इन्फोसिस्। सबै अधिकार सुरक्षित।` },
    links: [
      { label: { en: 'Privacy Policy', ne: 'गोपनीयता नीति' }, href: '/privacy' },
      { label: { en: 'Terms of Use', ne: 'प्रयोगका सर्तहरू' }, href: '/terms' },
    ],
  },
};

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
  const { t, lang } = useLanguage();
  const aboutContent = siteContent.aboutPage!;

  return (
    <Fragment>
      <Header
        navItems={siteContent.header.navItems}
        currentLang={lang}
        onSearchClick={() => { /* Functionality to be added later */ }}
      />
      <main id="main-content">
        <AboutSection
            title={t(aboutContent.title)}
            subtitle={t(aboutContent.subtitle)}
            paragraphs={aboutContent.paragraphs.map(p => t(p))}
            stats={aboutContent.stats.map((stat: StatItem) => ({
                value: stat.value,
                label: t(stat.label)
            }))}
        />
      </main>
      <Footer
        copyright={t(siteContent.footer.copyright)}
        links={siteContent.footer.links.map((link: FooterLink) => ({ ...link, label: t(link.label) }))}
        onOfficesClick={() => { /* Functionality to be added later */ }}
      />
    </Fragment>
  );
};