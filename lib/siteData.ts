import { LocalizedString, NavItem } from '../context/LanguageContext';

export interface StatisticItem {
    id: number;
    value: LocalizedString; // e.g., '७० +' / '70 +'
    label: LocalizedString; // e.g., 'सेवा प्रवाह स्थानीय तह' / 'Service-providing Local Levels'
}

export interface ModuleItem {
    id: number;
    label: LocalizedString;
    iconName: string; // Used to pick the icon SVG (e.g., 'clipboardCheck')
    colorClass: string; // Tailwind color class for card background/accent
    description?: LocalizedString; // Optional description
}

export interface FooterLinkGroup {
    title: LocalizedString;
    links: { label: LocalizedString; href: string }[];
}

export interface ContactDetail {
    label: LocalizedString;
    value: LocalizedString;
}

export interface FullSiteContent {
    header: {
        navItems: NavItem[];
        
    };
    hero: {
        title: LocalizedString;
        subtitle: LocalizedString; 
        description: LocalizedString;
        ctaText: LocalizedString;
        ctaLink: string;
    };
    statistics: StatisticItem[];
    modules: {
        title: LocalizedString;
        description: LocalizedString;
        items: ModuleItem[];
    };
    demoCta: {
        title: LocalizedString;
        description: LocalizedString;
        ctaText: LocalizedString;
    }
    footer: {
        companyName: LocalizedString;
        companyMoto: LocalizedString;
        quickLinks: FooterLinkGroup;
        userSupport: FooterLinkGroup;
        contactInfo: {
            title: LocalizedString;
            details: ContactDetail[];
            note: LocalizedString; // QR code description
        };
        copyright: LocalizedString;
        isoText: LocalizedString;
    };
}

export const siteData: FullSiteContent = {
    header: {
        navItems: [

            { label: { en: 'Home', ne: 'गृह पृष्ठ' }, href: '/' },
            { label: { en: 'About Us', ne: 'हाम्रो बारेमा' }, href: '/about' },
            { label: { en: 'Our Clients', ne: 'हाम्रो ग्राहकहरु' }, href: '/clients' },
            { label: { en: 'Features', ne: 'विशेषताहरु' }, href: '/features' },
            { label: { en: 'Contact', ne: 'सम्पर्क' }, href: '/contact' },
        ],
    },
    hero: {
        title: { en: 'Digital Palika', ne: 'डिजिटल पालिका' },
        subtitle: { en: 'for #01 ERP', ne: 'उत्कृष्ट ERP को लागी' },
        description: { 
            en: 'Transforming local government management with digital efficiency for municipalities in Nepal.', 
            ne: 'स्थानीय तहको कार्यसंचालनलाई डिजिटल दक्षताका साथ रूपान्तरण गर्दै नेपालका पालिकाहरूको लागि।' 
        },
        ctaText: { en: 'Explore More', ne: 'थप अन्वेषण गर्नुहोस्' },
        ctaLink: '/explore',
    },
    statistics: [
        { id: 1, value: { en: '70 +', ne: '७० +' }, label: { en: 'Service-providing Local Levels', ne: 'सेवा प्रवाह स्थानीय तह' } },
        { id: 2, value: { en: '8,00,000 +', ne: '८,००,००० +' }, label: { en: 'Beneficiaries', ne: 'लाभान्वित नागरिक' } },
        { id: 3, value: { en: '2,500 +', ne: '२,५०० +' }, label: { en: 'Active Professionals', ne: 'लाभान्वित प्रतिनिधिहरु' } },
        { id: 4, value: { en: '300 +', ne: '३०० +' }, label: { en: 'Exclusive Features', ne: 'खुसी सेवाग्राहीहरु' } },
    ],
    modules: {
        title: { en: 'Digital Municipality Modules', ne: 'डिजिटल पालिका मोड्युल' },
        description: { en: 'A comprehensive system designed to streamline local government operations, as seen in the video.', ne: 'पालिका भित्रको सम्पूर्ण कार्यहरूलाई व्यवस्थित गर्न तयार पारिएको एक व्यापक प्रणाली, भिडियोमा देखाइए अनुसार।' },
        items: [
            // Icon names map to Lucide icons
            { id: 1, label: { en: 'Digital Citizen Register', ne: 'डिजिटल नागरिक वडापत्र' }, iconName: 'clipboardCheck', colorClass: 'bg-indigo-700/80 text-white' },
            { id: 2, label: { en: 'Office Automation', ne: 'अफिस अटोमेसन' }, iconName: 'box', colorClass: 'bg-yellow-400/80 text-gray-900' },
            { id: 3, label: { en: 'Vehicle Service Management', ne: 'सवारी सेवा व्यवस्थापन' }, iconName: 'car', colorClass: 'bg-purple-400/80 text-gray-900' },
            { id: 4, label: { en: 'Complaint Portal', ne: 'गुनासो पोर्टल' }, iconName: 'messageSquare', colorClass: 'bg-red-400/80 text-gray-900' },
            { id: 5, label: { en: 'Meeting Management', ne: 'बैठक व्यवस्थापन' }, iconName: 'users', colorClass: 'bg-green-400/80 text-gray-900' },
            { id: 6, label: { en: 'Electricity/Water/Tax (EBPS)', ne: 'विद्युतीय कर नक्सा पास (EBPS)' }, iconName: 'zap', colorClass: 'bg-pink-400/80 text-gray-900' },
            { id: 7, label: { en: 'Institution/Business Registration', ne: 'संस्था/व्यवसाय दर्ता' }, iconName: 'building', colorClass: 'bg-blue-400/80 text-gray-900' },
            { id: 8, label: { en: 'Recommendation', ne: 'सिफारिस' }, iconName: 'fileText', colorClass: 'bg-teal-400/80 text-gray-900' },
            { id: 9, label: { en: 'Research & Evaluation', ne: 'अनुसन्धान र मूल्यांकन' }, iconName: 'barChart', colorClass: 'bg-orange-400/80 text-gray-900' },
            { id: 10, label: { en: 'Estimate System', ne: 'Estimate प्रणाली' }, iconName: 'calculator', colorClass: 'bg-lime-400/80 text-gray-900' },
            { id: 11, label: { en: 'Digital GL Profile', ne: 'डिजिटल जी.एल प्रोफाइल' }, iconName: 'globe', colorClass: 'bg-amber-400/80 text-gray-900' },
            { id: 12, label: { en: 'Integrated Mobile App', ne: 'Integrated Mobile Application' }, iconName: 'smartphone', colorClass: 'bg-cyan-400/80 text-gray-900' },
        ],
    },
    demoCta: {
        title: { 
            en: 'Ready to see a demo?', 
            ne: 'डेमो हेर्न चाहनुहुन्छ?' 
        },
        description: { 
            en: 'Explore the full capabilities of Digital ePalika, tailored to meet the needs of Nepal\'s local governments.', 
            ne: 'नेपालका स्थानीय सरकारको आवश्यकता पूरा गर्नको लागि डिजाइन गरिएको डिजिटल ePalika को पूर्ण क्षमताहरू अन्वेषण गर्नुहोस्।' 
        },
        ctaText: { en: 'Book a Demo', ne: 'डेमो बुक गर्नुहोस्' }
    },
    footer: {
        companyName: { en: 'Digital Palika', ne: 'डिजिटल पालिका' },
        companyMoto: { 
            en: 'A comprehensive system transforming local governance.', 
            ne: 'स्थानीय शासनलाई रूपान्तरण गर्ने एक व्यापक प्रणाली।' 
        },
        quickLinks: {
            title: { en: 'Quick Links', ne: 'द्रुत लिंकहरू' },
            links: [
                { label: { en: 'Home', ne: 'गृह पृष्ठ' }, href: '/' },
                { label: { en: 'About Us', ne: 'हाम्रो बारेमा' }, href: '/about' },
                { label: { en: 'Products', ne: 'उत्पादनहरू' }, href: '/products' },
                { label: { en: 'Features', ne: 'विशेषताहरू' }, href: '/features' },
            ],
        },
        userSupport: {
            title: { en: 'User Support', ne: 'उपयोगकर्ता सहयोग' },
            links: [
                { label: { en: 'Service Information', ne: 'सेवाहरू' }, href: '/services' },
                { label: { en: 'Privacy Policy', ne: 'गोपनीयता नीति' }, href: '/privacy' },
                { label: { en: 'Career', ne: 'करियर' }, href: '/career' },
                { label: { en: 'FAQs', ne: 'बारम्बार सोधिने प्रश्नहरू' }, href: '/faq' },
            ],
        },
        contactInfo: {
            title: { en: 'Get in Touch', ne: 'सम्पर्कमा रहनुहोस्' },
            details: [
                { label: { en: 'Office', ne: 'प्रधान कार्यालय' }, value: { en: 'Ninja Infosys Pvt. Ltd., Kathmandu', ne: 'निन्जा इन्फोसिस् प्रा. लि., काठमाडौं' } },
                { label: { en: 'Corporate Office', ne: 'कर्पोरेट कार्यालय' }, value: { en: 'Anamnagar-29, Kathmandu', ne: 'अनामनगर-२९, काठमाडौं' } },
                { label: { en: 'Phone', ne: 'फोन' }, value: { en: '01-5934348', ne: '०१-५९३४३४८' } },
                { label: { en: 'Mobile', ne: 'सम्पर्क नम्बर' }, value: { en: '9854334348', ne: '९८५४३३४३४८' } },
            ],
            note: { en: 'Scan QR for quick contact.', ne: 'छिटो सम्पर्कको लागि QR स्क्यान गर्नुहोस्।' }
        },
        copyright: { en: `© ${new Date().getFullYear()} Ninja Infosys. All rights reserved.`, ne: `© ${new Date().getFullYear()} निन्जा इन्फोसिस्। सबै अधिकार सुरक्षित।` },
        isoText: { en: 'ISO Certified', ne: 'ISO प्रमाणित' }
    },
};
