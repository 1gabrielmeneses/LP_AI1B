'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfUse() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-[#F4F4F0] flex flex-col font-jakarta">
            <Navbar />
            <div className="flex-grow max-w-[800px] mx-auto px-8 py-24 md:py-32 w-full">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-[#2b2a26] mb-8">
                    {t.termsOfUse.title}
                </h1>
                <p className="text-[#5A554E] mb-12 italic text-sm">
                    {t.termsOfUse.lastUpdated}
                </p>

                <div className="space-y-10">
                    {t.termsOfUse.sections.map((section, index) => (
                        <section key={index}>
                            <h2 className="text-xl font-semibold text-[#2b2a26] mb-4">
                                {section.title}
                            </h2>
                            <p className="text-[#5A554E] leading-relaxed">
                                {section.content}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
