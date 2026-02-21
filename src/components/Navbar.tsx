"use client";

import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useRef, useEffect } from "react";
import { Language } from "@/translations";

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
        setIsLangOpen(false);
    };

    return (
        <header className="w-full relative z-10 py-8 px-8 lg:px-16 flex items-center justify-between bg-white">
            <div className="flex-1">
                <Link href="/" className="text-3xl font-semibold text-ai-gold tracking-tight lowercase first-letter:uppercase inline-flex">
                    <span className="first-letter:uppercase">AI</span>
                    <span className="first-letter:capitalize">1</span>
                    <span className="first-letter:capitalize">Business</span>
                </Link>
            </div>

            <nav className="flex items-center gap-8">
                <Link
                    href="#case-studies"
                    className="text-ai-text hover:text-ai-gold transition-colors font-medium text-[15px]"
                >
                    {t.nav.caseStudies}
                </Link>
                <Link
                    href="#about"
                    className="text-ai-text hover:text-ai-gold transition-colors font-medium text-[15px]"
                >
                    {t.nav.about}
                </Link>
                <div className="flex items-center gap-4 ml-2">
                    <Link
                        href="#contact"
                        className="bg-ai-gold text-white px-5 py-2.5 rounded-full flex items-center gap-2 font-medium text-[15px] hover:bg-opacity-90 transition-all"
                    >
                        {t.nav.letsTalk}
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center justify-center p-2.5 rounded-full border border-gray-200 text-ai-text hover:border-ai-gold hover:text-ai-gold transition-colors bg-white shadow-sm"
                            aria-label="Select language"
                        >
                            <Globe className="w-4 h-4" />
                        </button>

                        {isLangOpen && (
                            <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col py-1 z-50">
                                <button
                                    onClick={() => handleLanguageChange('en')}
                                    className={`text-left px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors ${language === 'en' ? 'text-ai-gold' : 'text-ai-text'}`}
                                >
                                    Inglês
                                </button>
                                <button
                                    onClick={() => handleLanguageChange('pt')}
                                    className={`text-left px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors ${language === 'pt' ? 'text-ai-gold' : 'text-ai-text'}`}
                                >
                                    Português
                                </button>
                                <button
                                    onClick={() => handleLanguageChange('es')}
                                    className={`text-left px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors ${language === 'es' ? 'text-ai-gold' : 'text-ai-text'}`}
                                >
                                    Espanhol
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
