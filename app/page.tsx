"use client";

import { Fragment, useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

const HomeContent = () => {
  const { t, lang } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to handle smooth scrolling down to stats
  const handleScrollToStats = () => {
    const statsSection = document.getElementById('stats');
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle smooth scrolling back to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      // Show button when user scrolls down 400px
      if (!showScrollTop && window.scrollY > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.scrollY <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  const modules = [
    { en: 'Digital Citizen', ne: 'डिजिटल नागरिक', icon: '📋' },
    { en: 'Office Automation', ne: 'अफिस अटोमेसन', icon: '💼' },
    { en: 'Public Transportation System', ne: 'सार्वजनिक यातायात प्रणाली', icon: '🚍' },
    { en: 'Grievance Portal', ne: 'गुनासो पोर्टल', icon: '📩' },
    { en: 'Bank Taxation', ne: 'बैंक ट्याक्सेसन', icon: '🏦' },
    { en: 'Digital Sign (EPS)', ne: 'डिजिटल साइन (EPS)', icon: '✍️' },
    { en: 'Government / Public Registration System', ne: 'सरकारी / सार्वजनिक दर्ता प्रणाली', icon: '📝' },
    { en: 'Recommendation System', ne: 'सिफारिस प्रणाली', icon: '✅' },
    { en: 'Digital Card System', ne: 'डिजिटल कार्ड प्रणाली', icon: '💳' },
    { en: 'Lining and Register System', ne: 'लाइनिङ तथा रजिष्टर प्रणाली', icon: '📑' },
    { en: 'License (Renewal) System', ne: 'इजाजत (नवीकरण) प्रणाली', icon: '🔑' },
    { en: 'Project Management System', ne: 'योजना व्यवस्थापन प्रणाली', icon: '📊' },
    { en: 'Subsidy Management System', ne: 'अनुदान व्यवस्थापन प्रणाली', icon: '💰' },
    { en: 'Inventory System', ne: 'इन्भेन्ट्री प्रणाली', icon: '📦' },
    { en: 'Digital Palika GIS', ne: 'डिजिटल पालिका जीआईएस', icon: '🗺️' },
    { en: 'Digital IVR Call System', ne: 'डिजिटल IVR कल सिस्टम', icon: '📞' },
    { en: 'Monitoring and Evaluation System', ne: 'अनुगमन तथा मूल्यांकन प्रणाली', icon: '🔍' },
    { en: 'Municipality Information Portal', ne: 'पालिका सूचना पोर्टल', icon: '🌐' },
    { en: 'Municipality Accounting Portal', ne: 'पालिका लेखा पोर्टल', icon: '💵' },
    { en: 'Integrated Mobile Application', ne: 'एकीकृत मोबाइल एप्लिकेसन', icon: '📱' },
  ];

  return (
    <Fragment>
      {/* Sticky Header */}
      <Header
        navItems={[
          { label: { en: 'Home', ne: 'गृह पृष्ठ' }, href: '/' },
          { label: { en: 'About Us', ne: 'हाम्रो बारेमा' }, href: '/about' },
          { label: { en: 'Our Clients', ne: 'हाम्रो ग्राहकहरु' }, href: '/clients' },
          { label: { en: 'Features', ne: 'विशेषताहरु' }, href: '/features' },
          { label: { en: 'Contact', ne: 'सम्पर्क' }, href: '/contact' },
        ]}
        currentLang={lang}
        onSearchClick={() => {}}
        className="sticky top-0 z-50 bg-white shadow"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001841] via-[#001841] to-[#001841] text-white min-h-screen flex items-center relative opacity-95 transition-opacity duration-500">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight" style={{ marginLeft: "110px" }}>
              {t({ en: 'Digital Municipality (ERP Software)', ne: 'डिजिटल पालिका (ERP Software)' })}
            </h1>
            <p className="text-lg md:text-xl mb-6 font-medium text-justify" style={{ marginLeft: "110px" }}>
              {t({
                en: "Digital Municipality is a system designed to save time and make citizens’ tasks easier. It empowers every local body with information and modern technology, aiming to transform them into technology-enabled and technology-friendly digital municipalities.",
                ne: "समयको बचत र जनताको काम सहज रूपमा सम्पन्न गर्नको लागि र हरेक स्थानीय निकायलाई सूचना तथा आधुनिक प्रविधिको माध्यमबाट सशक्त बनाउँदै प्रविधि युक्त, प्रविधि मैत्री डिजिटल पालिकाको रूपमा रूपान्तरण गर्न परिकल्पना गरिएको एक प्रणाली डिजिटल पालिका हो।"
              })}
            </p>
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-[#001841] font-semibold px-6 py-3 rounded-lg shadow transition" style={{ marginLeft: "100px" }}
            >
              {t({ en: 'Book Demo', ne: 'डेमो बुक गर्नुहोस्' })}
            </a>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/ERPDemo.png"
              alt="ERP Demo"
              className="rounded-xl w-full max-w-lg h-auto object-contain"
              style={{ minHeight: "320px", maxHeight: "400px" }}
            />
          </div>
        </div>

        {/* --- SCROLL DOWN ARROW --- */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
          <button
            onClick={handleScrollToStats}
            className="p-3 text-white bg-white/20 rounded-full animate-bounce focus:outline-none hover:bg-white/30 transition-colors"
            aria-label="Scroll down"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* --- INVISIBLE ANCHOR FOR SMOOTHER SCROLLING --- */}
      <div id="stats" style={{ position: 'relative', top: '-80px' }}></div>

      {/* Stats Section */}
      <section className="bg-white pt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Stat Card */}
            <div className="flex flex-col items-center bg-gradient-to-br from-[#001841]/10 to-white p-8 hover:scale-105 transition">
              <span className="bg-[#001841]/10 text-[#001841] p-4 mb-4">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13h10M7 17h10M7 9h10M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2z"/></svg>
              </span>
              <div className="text-3xl font-bold text-[#001841] mb-2">
                {lang === 'ne' ? '७० +' : '70 +'}
              </div>
              <div className="text-gray-600 text-center">
                {lang === 'ne' ? 'सेवा प्रवाह स्थानीय तह' : 'Service-providing Local Levels'}
              </div>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-br from-[#001841]/10 to-white p-8 hover:scale-105 transition">
              <span className="bg-[#001841]/10 text-[#001841] p-4 mb-4">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 110-8 4 4 0 010 8zm6 8v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </span>
              <div className="text-3xl font-bold text-[#001841] mb-2">
                {lang === 'ne' ? '८,००,००० +' : '800,000 +'}
              </div>
              <div className="text-gray-600 text-center">
                {lang === 'ne' ? 'लाभान्वित नागरिक' : 'Beneficiary Citizens'}
              </div>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-br from-[#001841]/10 to-white p-8 hover:scale-105 transition">
              <span className="bg-[#001841]/10 text-[#001841] p-4 mb-4">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 17v-2a4 4 0 018 0v2M16 11a4 4 0 110-8 4 4 0 010 8z"/></svg>
              </span>
              <div className="text-3xl font-bold text-[#001841] mb-2">
                {lang === 'ne' ? '२५०० +' : '2500 +'}
              </div>
              <div className="text-gray-600 text-center">
                {lang === 'ne' ? 'लाभान्वित प्रतिनिधिहरु' : 'Beneficiary Representatives'}
              </div>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-br from-[#001841]/10 to-white p-8 hover:scale-105 transition">
              <span className="bg-[#001841]/10 text-[#001841] p-4 mb-4">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4a5 5 0 100-10 5 5 0 000 10z"/></svg>
              </span>
              <div className="text-3xl font-bold text-[#001841] mb-2">
                {lang === 'ne' ? '३०० +' : '300 +'}
              </div>
              <div className="text-gray-600 text-center">
                {lang === 'ne' ? 'खुसी सेवाग्राहीहरु' : 'Happy Service Recipients'}
              </div>
            </div>
          </div>

          {/* Features Section as a Card */}
          <section className="w-full pb-12">
            <div className="container mx-auto px-4">
              <div className="bg-[#001841]/5 border border-[#001841]/10 w-full max-w-6xl mx-auto p-8 md:p-12" style={{ borderRadius: 0 }}>
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#001841] mb-2 hover:scale-105 transition-transform duration-300">
                    {lang === 'ne' ? 'विशेषताहरु' : 'Features'}
                  </h2>
                  <p className="text-[#000000] max-w-2xl mx-auto">
                    {lang === 'ne'
                      ? 'डिजिटल पालिका नागरिक, स्थानीय तह र प्रतिनिधिहरुलाई एकीकृत प्रणाली मार्फत छिटो र प्रभावकारी रुपमा नियम, व्यवस्थापन र डेलिभर गर्न सकिने प्रणाली हो।'
                      : 'Digital Municipality is a system for citizens, local levels, and representatives to deliver rules, management, and services quickly and effectively through an integrated platform.'}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Feature Card */}
                  <div className="flex items-start bg-white border border-[#001841]/10 p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                    <span className="bg-[#001841]/5 text-[#001841] p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                    </span>
                    <span className="text-[#000000] text-justify ml-4">
                      {lang === 'ne'
                        ? 'एकीकृत मोबाइल र वेबमा आधारित प्रणाली'
                        : 'Integrated mobile and web-based system'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-[#001841]/10 p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                    <span className="bg-[#001841]/5 text-[#001841] p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 12l6-6 6 6"/></svg>
                    </span>
                    <span className="text-[#000000] text-justify ml-4">
                      {lang === 'ne'
                        ? 'नागरिकका सेवा र जानकारीको अनलाइनमा पहुँच'
                        : 'Online access to citizen services and information'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-[#001841]/10 p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                    <span className="bg-[#001841]/5 text-[#001841] p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                    </span>
                    <span className="text-[#000000] text-justify ml-4">
                      {lang === 'ne'
                        ? 'पालिकाले प्रवाह गर्ने सेवाहरुलाई अनलाइनमार्फत आवेदन लिने, दर्ता गर्ने र प्रमाणपत्र प्रदान'
                        : 'Online application, registration, and certificate issuance for municipal services'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-[#001841]/10 p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                    <span className="bg-[#001841]/5 text-[#001841] p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 9h8M8 13h8"/></svg>
                    </span>
                    <span className="text-[#000000] text-justify ml-4">
                      {lang === 'ne'
                        ? 'व्यक्तिगत, व्यवसाय र संस्थागत जानकारी'
                        : 'Personal, business, and institutional information'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-[#001841]/10 p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                    <span className="bg-[#001841]/5 text-[#001841] p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 12l6-6 6 6"/></svg>
                    </span>
                    <span className="text-[#000000] text-justify ml-4">
                      {lang === 'ne'
                        ? 'पालिकाको दैनिक गतिविधिहरुमा नागरिकको सक्रिय संलग्नता'
                        : 'Active citizen participation in daily municipal activities'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-[#001841]/10 p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                    <span className="bg-[#001841]/5 text-[#001841] p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                    </span>
                    <span className="text-[#000000] text-justify ml-4">
                      {lang === 'ne'
                        ? 'सेवाग्राहीलाई अडियो, भिडियो मार्फत जानकारी'
                        : 'Information for service recipients via audio and video'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-[#001841]/10 p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                    <span className="bg-[#001841]/5 text-[#001841] p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                    </span>
                    <span className="text-[#000000] text-justify ml-4">
                      {lang === 'ne'
                        ? 'पालिकाको जनप्रतिनिधि, कर्मचारी र सेवाग्राहीको समयको बचत'
                        : 'Time-saving for representatives, staff, and service recipients'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-[#001841]/10 p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                    <span className="bg-[#001841]/5 text-[#001841] p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 9h8M8 13h8"/></svg>
                    </span>
                    <span className="text-[#000000] text-justify ml-4">
                      {lang === 'ne'
                        ? 'पालिकालाई एकीकृत सफ्टवेयरमा आबद्ध गरी सूचना, तथ्यांक, सेवाप्रवाहमा सजज'
                        : 'Integrated software for easy access to information, data, and service delivery'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-[#001841]/10 p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                    <span className="bg-[#001841]/5 text-[#001841] p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <text x="12" y="16" textAnchor="middle" fontSize="14" fill="currentColor">i</text>
                      </svg>
                    </span>
                    <span className="text-[#000000] text-justify ml-4">
                      {lang === 'ne'
                        ? 'पालिकाको दैनिक कार्यसम्पादन गर्न सहयोग'
                        : 'Support for daily municipal operations'}
                    </span>
                  </div>
                </div>

                <div className="text-center mt-8">
                    <a
                      href="/features"
                      className="inline-block bg-[#001841] hover:bg-[#001841]/90 text-white font-semibold px-6 py-3 shadow transition"
                    >
                      {t({ en: 'See More Details', ne: 'थप विवरण हेर्नुहोस्' })}
                    </a>
                </div>
                
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Modules Section */}
      <section className="bg-[#001841] py-12 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            {lang === 'ne' ? 'डिजिटल पालिकामा रहेका प्रणालीहरु' : 'Modules in Digital Palika'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md flex flex-col items-center shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-[#001841]/20 text-[#001841] p-3 rounded-full mb-2">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16z" />
                  </svg>
                </div>
                <p className="text-[#001841] font-semibold text-center">
                  {lang === 'ne' ? module.ne : module.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        copyright={t({
          en: `© ${new Date().getFullYear()} Ninja Infosys. All rights reserved.`,
          ne: `© ${new Date().getFullYear()} निन्जा इन्फोसिस्। सबै अधिकार सुरक्षित।`
        })}
        links={[
          { label: t({ en: 'Privacy Policy', ne: 'गोपनीयता नीति' }), href: '/privacy' },
          { label: t({ en: 'Terms of Use', ne: 'प्रयोगका सर्तहरू' }), href: '/terms' },
        ]}
        onOfficesClick={() => {}}
      />

      {/* --- NEW SCROLL TO TOP BUTTON --- */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-10 right-10 p-3 rounded-full bg-white text-[#001841] shadow-lg hover:bg-gray-100 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </Fragment>
  );
};