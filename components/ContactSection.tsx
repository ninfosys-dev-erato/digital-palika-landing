"use client";

import React from 'react';
import Link from 'next/link';
import { ContactDetails, ContactFormLabels, LocalizedString } from '@/context/LanguageContext';

// Define the icons using lucide-react names for better reusability
const Icon = ({ name, className = "" }: { name: string, className?: string }) => {
    const defaultClasses = `w-6 h-6 ${className}`;
    switch (name) {
        case 'Phone':
            return <svg className={defaultClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72c.15.9.15 2.14-.02 3.12a2 2 0 0 1-1.25 1.58L6.4 10.4a15 15 0 0 0 6.7 6.7l1.4-1.63a2 2 0 0 1 1.58-1.25c.98-.17 2.22-.17 3.12-.02a2 2 0 0 1 1.72 2z"/></svg>;
        case 'Mail':
            return <svg className={defaultClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
        case 'MapPin':
            return <svg className={defaultClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/><circle cx="12" cy="10" r="3"/></svg>;
        case 'User':
            return <svg className={defaultClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
        case 'Hash':
            return <svg className={defaultClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>;
        default:
            return null;
    }
};

interface ContactSectionProps {
    title: string;
    breadcrumb: string;
    details: ContactDetails;
    formLabels: ContactFormLabels;
    t: (text: LocalizedString) => string; // The translator function
}

export const ContactSection = ({ title, breadcrumb, details, formLabels, t }: ContactSectionProps) => {

    // Simple handler for form submission (replace with actual logic later)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Form submitted! (In a real application, this would send data to a server)');
    };

    return (
        <section className="bg-paper py-16 md:py-24 px-4">
            <div className="container mx-auto max-w-6xl">

                {/* Breadcrumb */}
                <div className="text-center mb-10">
                    <p className="text-sm text-slate font-inter">
                        {breadcrumb}
                    </p>
                </div>
                
                {/* Section Title */}
                <h1 className="text-4xl md:text-5xl font-work-sans font-bold text-ink text-center mb-16">
                    {title}
                </h1>

                {/* Contact Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20">
                    
                    {/* Phone */}
                    <div className="flex flex-col items-center">
                        <div className="text-accent mb-4">
                            <Icon name="Phone" className="w-8 h-8"/>
                        </div>
                        <h2 className="text-lg font-work-sans font-semibold text-ink mb-2">
                            {t({ en: 'Phone', ne: 'फोन' })}
                        </h2>
                        {details.phoneNumbers.map((phone, index) => (
                            <a key={index} href={`tel:${phone}`} className="text-graphite hover:text-accent font-inter transition-colors text-sm">
                                नेपालभित्र: {phone}
                            </a>
                        ))}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center">
                        <div className="text-accent mb-4">
                            <Icon name="Mail" className="w-8 h-8"/>
                        </div>
                        <h2 className="text-lg font-work-sans font-semibold text-ink mb-2">
                            {t({ en: 'Email', ne: 'इमेल' })}
                        </h2>
                        <a href={`mailto:${details.email}`} className="text-graphite hover:text-accent font-inter transition-colors">
                            {details.email}
                        </a>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col items-center">
                        <div className="text-accent mb-4">
                            <Icon name="MapPin" className="w-8 h-8"/>
                        </div>
                        <h2 className="text-lg font-work-sans font-semibold text-ink mb-2">
                            {t({ en: 'Address', ne: 'ठेगाना' })}
                        </h2>
                        <p className="text-graphite font-inter max-w-xs">
                            {t(details.address)} 
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-3xl mx-auto border border-slate/10 p-8 md:p-12 rounded-lg shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-ink mb-2">
                                    {t(formLabels.fullName)} *
                                </label>
                                <div className="relative">
                                    <Icon name="User" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        id="fullName"
                                        placeholder={t(formLabels.fullName)}
                                        required
                                        className="w-full pl-10 pr-4 py-2 border border-slate/20 rounded-md focus:ring-accent focus:border-accent font-inter"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                                    {t(formLabels.email)} *
                                </label>
                                <div className="relative">
                                    <Icon name="Mail" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder={t(formLabels.email)}
                                        required
                                        className="w-full pl-10 pr-4 py-2 border border-slate/20 rounded-md focus:ring-accent focus:border-accent font-inter"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Reason and Topic Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Contact Reason (as seen in image) */}
                            <div>
                                <label htmlFor="contactReason" className="block text-sm font-medium text-ink mb-2">
                                    {t(formLabels.contactReason)} *
                                </label>
                                <div className="relative">
                                    <Icon name="Phone" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        type="text" // Or change to <select> for real app
                                        id="contactReason"
                                        placeholder={t(formLabels.contactReason)}
                                        required
                                        className="w-full pl-10 pr-4 py-2 border border-slate/20 rounded-md focus:ring-accent focus:border-accent font-inter"
                                    />
                                </div>
                            </div>

                            {/* Topic (as seen in image) */}
                            <div>
                                <label htmlFor="topic" className="block text-sm font-medium text-ink mb-2">
                                    {t(formLabels.topic)} *
                                </label>
                                <div className="relative">
                                    <Icon name="Hash" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        id="topic"
                                        placeholder={t(formLabels.topic)}
                                        required
                                        className="w-full pl-10 pr-4 py-2 border border-slate/20 rounded-md focus:ring-accent focus:border-accent font-inter"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Comments/Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                                {t(formLabels.message)} *
                            </label>
                            <div className="relative">
                                <Icon name="Hash" className="absolute left-3 top-4 text-slate-400 w-5 h-5" />
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder={t(formLabels.message)}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-slate/20 rounded-md focus:ring-accent focus:border-accent font-inter"
                                ></textarea>
                            </div>
                        </div>
                        
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-work-sans font-semibold text-paper bg-accent rounded-md hover:bg-accent-2 transition-all duration-300 ease-in-out shadow-lg transform hover:-translate-y-0.5"
                        >
                            {t(formLabels.button)}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};