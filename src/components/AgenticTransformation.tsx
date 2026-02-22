"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AgenticTransformation() {
    const { t } = useLanguage();

    return (
        <section className="w-full bg-[#f5f5ed] px-8 lg:px-16 py-20 lg:py-32 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 items-center justify-between">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    <h2 className="text-[#644927] text-5xl md:text-6xl font-bold tracking-[-0.02em] leading-[1.1] mb-6">
                        {t.agentic.title}
                    </h2>

                    <p className="text-[#3b3a37] text-lg md:text-xl md:leading-relaxed mb-12 max-w-[90%]">
                        {t.agentic.description}
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-6 mb-16">
                        {/* Step 01 */}
                        <div className="flex-1">
                            <span className="text-[#A68048] font-medium text-lg block mb-2">01</span>
                            <h3 className="text-[#644927] font-bold text-xl mb-3">{t.agentic.step1.title}</h3>
                            <p className="text-[#3b3a37] text-base leading-snug">{t.agentic.step1.description}</p>
                        </div>

                        {/* Step 02 */}
                        <div className="flex-1">
                            <span className="text-[#A68048] font-medium text-lg block mb-2">02</span>
                            <h3 className="text-[#644927] font-bold text-xl mb-3">{t.agentic.step2.title}</h3>
                            <p className="text-[#3b3a37] text-base leading-snug">{t.agentic.step2.description}</p>
                        </div>

                        {/* Step 03 */}
                        <div className="flex-1">
                            <span className="text-[#A68048] font-medium text-lg block mb-2">03</span>
                            <h3 className="text-[#644927] font-bold text-xl mb-3">{t.agentic.step3.title}</h3>
                            <p className="text-[#3b3a37] text-base leading-snug">{t.agentic.step3.description}</p>
                        </div>
                    </div>

                    <Link href="/book" className="bg-[#3A2912] text-white px-7 py-3.5 rounded-full flex items-center gap-2 font-medium text-lg hover:bg-opacity-90 transition-all w-fit">
                        {t.agentic.cta}
                        <ArrowRight className="w-5 h-5 ml-1" />
                    </Link>
                </div>

                {/* Right Content - Venn Diagram Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="relative w-[340px] md:w-[500px] h-[340px] md:h-[500px] flex items-center justify-center">
                        <Image
                            src="/media/venn.png"
                            alt="Transformação Agêntica Venn Diagram"
                            width={500}
                            height={500}
                            className="w-full h-auto object-contain"
                            priority
                            unoptimized
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
