"use client";

import { Fragment } from 'react';
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

  return (
    <Fragment>
      {/* Sticky Header */}
      <Header
        navItems={[
          { label: { en: 'Home', ne: 'गृह पृष्ठ' }, href: '/' },
          { label: { en: 'About Us', ne: 'हाम्रो बारेमा' }, href: '/about' },
          { label: { en: 'Our Clients', ne: 'हाम्रो ग्राहकहरु' }, href: '/clients' },
          { label: { en: 'Specialties', ne: 'विशेषताहरु' }, href: '/specialties' },
          { label: { en: 'Contact', ne: 'सम्पर्क' }, href: '/contact' },
        ]}
        currentLang={lang}
        onSearchClick={() => {}}
        className="sticky top-0 z-50 bg-white shadow"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              {t({ en: 'Digital Municipality (ERP Software)', ne: 'डिजिटल पालिका (ERP Software)' })}
            </h1>
            <p className="text-lg md:text-xl mb-6 font-medium text-justify">
              {t({
                en: "Digital Municipality is a system designed to save time and make citizens’ tasks easier. It empowers every local body with information and modern technology, aiming to transform them into technology-enabled and technology-friendly digital municipalities.",
                ne: "समयको बचत र जनताको काम सहज रूपमा सम्पन्न गर्नको लागि र हरेक स्थानीय निकायलाई सूचना तथा आधुनिक प्रविधिको माध्यमबाट सशक्त बनाउँदै प्रविधि युक्त, प्रविधि मैत्री डिजिटल पालिकाको रूपमा रूपान्तरण गर्न परिकल्पना गरिएको एक प्रणाली डिजिटल पालिका हो।"
              })}
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
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
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Stat Card */}
            <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-white p-8 hover:scale-105 transition">
              <span className="bg-blue-100 text-blue-700 p-4 mb-4">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13h10M7 17h10M7 9h10M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2z"/></svg>
              </span>
              <div className="text-3xl font-bold text-blue-900 mb-2">
                {lang === 'ne' ? '७० +' : '70 +'}
              </div>
              <div className="text-gray-600 text-center">
                {lang === 'ne' ? 'सेवा प्रवाह स्थानीय तह' : 'Service-providing Local Levels'}
              </div>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-white p-8 hover:scale-105 transition">
              <span className="bg-blue-100 text-blue-700 p-4 mb-4">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 110-8 4 4 0 010 8zm6 8v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </span>
              <div className="text-3xl font-bold text-blue-900 mb-2">
                {lang === 'ne' ? '८,००,००० +' : '800,000 +'}
              </div>
              <div className="text-gray-600 text-center">
                {lang === 'ne' ? 'लाभान्वित नागरिक' : 'Beneficiary Citizens'}
              </div>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-white p-8 hover:scale-105 transition">
              <span className="bg-blue-100 text-blue-700 p-4 mb-4">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 17v-2a4 4 0 018 0v2M16 11a4 4 0 110-8 4 4 0 010 8z"/></svg>
              </span>
              <div className="text-3xl font-bold text-blue-900 mb-2">
                {lang === 'ne' ? '२५०० +' : '2500 +'}
              </div>
              <div className="text-gray-600 text-center">
                {lang === 'ne' ? 'लाभान्वित प्रतिनिधिहरु' : 'Beneficiary Representatives'}
              </div>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-white p-8 hover:scale-105 transition">
              <span className="bg-blue-100 text-blue-700 p-4 mb-4">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4a5 5 0 100-10 5 5 0 000 10z"/></svg>
              </span>
              <div className="text-3xl font-bold text-blue-900 mb-2">
                {lang === 'ne' ? '३०० +' : '300 +'}
              </div>
              <div className="text-gray-600 text-center">
                {lang === 'ne' ? 'खुसी सेवाग्राहीहरु' : 'Happy Service Recipients'}
              </div>
            </div>
          </div>

          {/* Features Section as a Card */}
          <section className="w-full py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="bg-blue-50/60 border border-blue-100 w-full max-w-6xl mx-auto p-8 md:p-12" style={{ borderRadius: 0 }}>
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
                    {lang === 'ne' ? 'विशेषताहरु' : 'Features'}
                  </h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    {lang === 'ne'
                      ? 'डिजिटल पालिका नागरिक, स्थानीय तह र प्रतिनिधिहरुलाई एकीकृत प्रणाली मार्फत छिटो र प्रभावकारी रुपमा नियम, व्यवस्थापन र डेलिभर गर्न सकिने प्रणाली हो।'
                      : 'Digital Municipality is a system for citizens, local levels, and representatives to deliver rules, management, and services quickly and effectively through an integrated platform.'}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Feature Card */}
                  <div className="flex items-start bg-white border border-blue-100 p-4" style={{ borderRadius: 0 }}>
                    <span className="bg-blue-50 text-blue-700 p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                    </span>
                    <span className="text-gray-800 text-justify ml-4">
                      {lang === 'ne'
                        ? 'एकीकृत मोबाइल र वेबमा आधारित प्रणाली'
                        : 'Integrated mobile and web-based system'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-blue-100 p-4" style={{ borderRadius: 0 }}>
                    <span className="bg-blue-50 text-blue-700 p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 12l6-6 6 6"/></svg>
                    </span>
                    <span className="text-gray-800 text-justify ml-4">
                      {lang === 'ne'
                        ? 'नागरिकका सेवा र जानकारीको अनलाइनमा पहुँच'
                        : 'Online access to citizen services and information'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-blue-100 p-4" style={{ borderRadius: 0 }}>
                    <span className="bg-blue-50 text-blue-700 p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                    </span>
                    <span className="text-gray-800 text-justify ml-4">
                      {lang === 'ne'
                        ? 'पालिकाले प्रवाह गर्ने सेवाहरुलाई अनलाइनमार्फत आवेदन लिने, दर्ता गर्ने र प्रमाणपत्र प्रदान'
                        : 'Online application, registration, and certificate issuance for municipal services'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-blue-100 p-4" style={{ borderRadius: 0 }}>
                    <span className="bg-blue-50 text-blue-700 p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 9h8M8 13h8"/></svg>
                    </span>
                    <span className="text-gray-800 text-justify ml-4">
                      {lang === 'ne'
                        ? 'व्यक्तिगत, व्यवसाय र संस्थागत जानकारी'
                        : 'Personal, business, and institutional information'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-blue-100 p-4" style={{ borderRadius: 0 }}>
                    <span className="bg-blue-50 text-blue-700 p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 12l6-6 6 6"/></svg>
                    </span>
                    <span className="text-gray-800 text-justify ml-4">
                      {lang === 'ne'
                        ? 'पालिकाको दैनिक गतिविधिहरुमा नागरिकको सक्रिय संलग्नता'
                        : 'Active citizen participation in daily municipal activities'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-blue-100 p-4" style={{ borderRadius: 0 }}>
                    <span className="bg-blue-50 text-blue-700 p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                    </span>
                    <span className="text-gray-800 text-justify ml-4">
                      {lang === 'ne'
                        ? 'सेवाग्राहीलाई अडियो, भिडियो मार्फत जानकारी'
                        : 'Information for service recipients via audio and video'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-blue-100 p-4" style={{ borderRadius: 0 }}>
                    <span className="bg-blue-50 text-blue-700 p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                    </span>
                    <span className="text-gray-800 text-justify ml-4">
                      {lang === 'ne'
                        ? 'पालिकाको जनप्रतिनिधि, कर्मचारी र सेवाग्राहीको समयको बचत'
                        : 'Time-saving for representatives, staff, and service recipients'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-blue-100 p-4" style={{ borderRadius: 0 }}>
                    <span className="bg-blue-50 text-blue-700 p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 9h8M8 13h8"/></svg>
                    </span>
                    <span className="text-gray-800 text-justify ml-4">
                      {lang === 'ne'
                        ? 'पालिकालाई एकीकृत सफ्टवेयरमा आबद्ध गरी सूचना, तथ्यांक, सेवाप्रवाहमा सजज'
                        : 'Integrated software for easy access to information, data, and service delivery'}
                    </span>
                  </div>
                  <div className="flex items-start bg-white border border-blue-100 p-4" style={{ borderRadius: 0 }}>
                    <span className="bg-blue-50 text-blue-700 p-3 flex items-center justify-center mt-1">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <text x="12" y="16" textAnchor="middle" fontSize="14" fill="currentColor">i</text>
                      </svg>
                    </span>
                    <span className="text-gray-800 text-justify ml-4">
                      {lang === 'ne'
                        ? 'पालिकाको दैनिक कार्यसम्पादन गर्न सहयोग'
                        : 'Support for daily municipal operations'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
    </Fragment>
  );
};