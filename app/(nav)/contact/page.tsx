"use client";
import { Fragment } from 'react';
import { Header } from '@/components/header'; // CHANGED
import { Footer } from '@/components/footer'; // CHANGED
import { ContactSection } from '@/components/ContactSection'; // CHANGED
import { LanguageProvider, useLanguage } from '@/context/LanguageContext'; // CHANGED
import type { SiteContent, ContactDetails, ContactFormLabels, FooterLink, NavItem } from '@/context/LanguageContext'; // CHANGED

// --- Content for the Contact Page ---
export const siteContent: SiteContent = {
    // Re-use navigation from other pages
    header: {
        navItems: [
            { label: { en: 'Home', ne: 'गृह पृष्ठ' }, href: '/' },
            { label: { en: 'About Us', ne: 'हाम्रो बारेमा' }, href: '/about' },
            { label: { en: 'Our Clients', ne: 'हाम्रो ग्राहकहरु' }, href: '/clients' },
            { label: { en: 'Specialties', ne: 'विशेषताहरु' }, href: '/specialties' },
            { label: { en: 'Contact', ne: 'सम्पर्क' }, href: '/contact' },
        ],
    },
    // Hero is not strictly needed for a contact page, keep it minimal
    hero: { title: {en:'', ne:''}, description: {en:'', ne:''}, ctaText: {en:'', ne:''}, ctaLink: '' }, 
    
    // NEW: Contact Page Content
    contactPage: {
        title: { en: 'Contact Us', ne: 'सम्पर्क' },
        breadcrumb: { en: 'Home / Contact', ne: 'गृह पृष्ठ / सम्पर्क' },
        details: {
            phoneNumbers: ['०८९ ५२०३६९', '०१-५९१९२३४'], // From the image (Nepali text)
            email: 'sale@digitalpalika.com', // From the image
            address: {
                en: 'Head Office: Ninja Infosys Bire-Kapokorit Office, Anamnagar-२९, Kathmandu',
                ne: 'प्रधान कार्यालय: नेपालगञ्ज बीरे-कपोकरिट कार्यालय, अनामनगर-२९, काठमाडौं',
            },
        },
        form: {
            fullName: { en: 'Full Name', ne: 'पुरा नाम' },
            email: { en: 'Email', ne: 'इमेल' },
            contactReason: { en: 'Contact Reason', ne: 'सम्पर्क' },
            topic: { en: 'Topic', ne: 'विषय' },
            message: { en: 'Comments', ne: 'टिप्पणीहरु' },
            button: { en: 'Send Request', ne: 'अनुरोध पठाउने' },
            subject: { en: 'Subject', ne: 'विषय' }, // Use this if 'Topic' is a select field and 'Subject' is a text input. Sticking to Topic/Message for simplicity for now.
        }
    },

    // Re-use footer content
    footer: {
        copyright: { en: `© ${new Date().getFullYear()} Ninja Infosys. All rights reserved.`, ne: `© ${new Date().getFullYear()} निन्जा इन्फोसिस्। सबै अधिकार सुरक्षित।` },
        links: [
            { label: { en: 'Privacy Policy', ne: 'गोपनीयता नीति' }, href: '/privacy' },
            { label: { en: 'Terms of Use', ne: 'प्रयोगका सर्तहरू' }, href: '/terms' },
        ],
    },
};

// --- Main Contact Page Component ---
export default function ContactPage() {
    return (
        <LanguageProvider>
            <ContactContent />
        </LanguageProvider>
    );
}

// --- Component to render the page content ---
const ContactContent = () => {
    const { t, lang } = useLanguage();
    const contactContent = siteContent.contactPage!;

    return (
        <Fragment>
            <Header
                navItems={siteContent.header.navItems as NavItem[]}
                currentLang={lang}
                onSearchClick={() => { /* Functionality to be added later */ }}
            />
            <main id="main-content">
                <ContactSection
                    title={t(contactContent.title)}
                    breadcrumb={t(contactContent.breadcrumb)}
                    details={contactContent.details}
                    formLabels={contactContent.form}
                    t={t} // Pass the translator function to the child component
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