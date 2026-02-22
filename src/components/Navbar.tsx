"use client";

import { ArrowRight, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useRef, useEffect } from "react";
import { Language } from "@/translations";

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        <header className="w-full relative z-40 py-6 px-6 md:py-8 md:px-8 lg:px-16 flex items-center justify-between bg-white">
            <div className="flex-1 z-50">
                <Link href="/" className="inline-flex items-center">
                    <Image src="/media/businesslogo.png" alt="AI1Business Logo" width={160} height={40} className="h-6 md:h-8 lg:h-10 w-auto object-contain" priority />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                <Link
                    href="#case-studies"
                    className="text-ai-text hover:text-ai-gold transition-colors font-medium text-[15px] hover-underline-animation"
                >
                    {t.nav.caseStudies}
                </Link>
                <Link
                    href="#about"
                    className="text-ai-text hover:text-ai-gold transition-colors font-medium text-[15px] hover-underline-animation"
                >
                    {t.nav.about}
                </Link>
                <div className="flex items-center gap-4 ml-2">
                    <Link
                        href="/book"
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
                                {(["en", "pt", "es"] as Language[]).map((lang, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleLanguageChange(lang)}
                                        className={`text-left px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors ${language === lang ? 'text-ai-gold' : 'text-ai-text'}`}
                                    >
                                        {lang === 'en' ? 'Inglês' : lang === 'pt' ? 'Português' : 'Espanhol'}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation controls */}
            <div className="flex md:hidden items-center gap-3 z-50">
                <div className="relative">
                    <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="flex items-center justify-center p-2 rounded-full border border-gray-200 text-ai-text hover:text-ai-gold transition-colors bg-white shadow-sm"
                        aria-label="Select language"
                    >
                        <Globe className="w-4 h-4" />
                    </button>

                    {isLangOpen && (
                        <div className="absolute top-full right-0 mt-2 w-36 bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col py-1 z-50">
                            {(["en", "pt", "es"] as Language[]).map((lang, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleLanguageChange(lang)}
                                    className={`text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors ${language === lang ? 'text-ai-gold' : 'text-ai-text'}`}
                                >
                                    {lang === 'en' ? 'Inglês' : lang === 'pt' ? 'Português' : 'Espanhol'}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="flex justify-center items-center p-2 text-ai-text hover:text-ai-gold transition-colors"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-0 left-0 w-full h-full bg-white z-40 flex flex-col pt-24 px-6 md:hidden">
                    <nav className="flex flex-col gap-6">
                        <Link
                            href="#case-studies"
                            className="text-2xl font-semibold text-ai-text hover:text-ai-gold transition-colors hover-underline-animation"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t.nav.caseStudies}
                        </Link>
                        <Link
                            href="#about"
                            className="text-2xl font-semibold text-ai-text hover:text-ai-gold transition-colors hover-underline-animation"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t.nav.about}
                        </Link>
                        <Link
                            href="/book"
                            className="bg-ai-gold text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 font-medium text-lg hover:bg-opacity-90 transition-all mt-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t.nav.letsTalk}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
