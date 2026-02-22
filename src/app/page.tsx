"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import AgenticTransformation from "@/components/AgenticTransformation";
import FinancialImpact from "@/components/FinancialImpact";
import FinalCTA from "@/components/FinalCTA";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col font-jakarta relative z-10 selection:bg-ai-gold selection:text-white">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 flex flex-col justify-end px-8 lg:px-16 pb-12 lg:pb-20 overflow-hidden">
          <div className="w-full md:max-w-[70%] lg:max-w-[65%] mt-auto">
            <h1 className="text-[#a8824f] text-[clamp(2.5rem,6vw,76px)] md:text-[clamp(1.5rem,4.5vw,76px)] flex flex-col items-start w-full font-bold leading-[1.05] tracking-[-0.02em] mb-12">
              <span className="whitespace-normal md:whitespace-nowrap">{t.hero.headlinePart1}</span>
              <span className="whitespace-normal md:whitespace-nowrap">{t.hero.headlinePart2}</span>
            </h1>

            <Link href="/book" className="bg-[#a8824f] text-white px-7 py-3.5 rounded-full flex items-center gap-2 font-medium text-lg hover:bg-opacity-90 transition-all w-fit">
              {t.hero.letsTalk}
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </main>
      </div>

      <AgenticTransformation />
      <FinancialImpact />
      <FinalCTA />
      <AboutSection />
      <Footer />
    </div>
  );
}
