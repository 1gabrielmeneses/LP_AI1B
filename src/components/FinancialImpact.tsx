"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { TrendingUp } from "lucide-react";

export default function FinancialImpact() {
    const { t } = useLanguage();

    return (
        <section className="w-full bg-[#f5f5ed] px-8 lg:px-16 pb-20 lg:pb-32 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto bg-white rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100/50">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col p-10 lg:p-16 lg:pr-14 relative">

                    {/* Tag */}
                    <div className="mb-6">
                        <span className="inline-flex items-center px-4 py-1.5 bg-[#f5f5ed] text-[#A68048] text-[11px] font-bold tracking-widest rounded-full uppercase">
                            {t.financial.tag}
                        </span>
                    </div>

                    <h2 className="text-[#A68048] text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.02em] leading-[1.05] mb-5">
                        {t.financial.title}
                    </h2>

                    <p className="text-[#3b3a37] text-lg lg:text-[1.15rem] leading-[1.6] mb-10 max-w-[98%]">
                        {t.financial.description}
                    </p>

                    <div className="w-full h-[1px] bg-[#E8E8E3] mb-10" />

                    <div className="flex flex-col md:flex-row gap-8 md:gap-6 mt-auto">
                        {/* Step 01 */}
                        <div className="flex-1">
                            <span className="text-[#A68048] font-bold text-lg block mb-1">01</span>
                            <h3 className="text-[#3b3a37] font-bold text-[15px] mb-1.5">{t.financial.step1.title}</h3>
                            <p className="text-[#6B6A65] text-[13px] leading-relaxed">{t.financial.step1.description}</p>
                        </div>

                        {/* Step 02 */}
                        <div className="flex-1">
                            <span className="text-[#A68048] font-bold text-lg block mb-1">02</span>
                            <h3 className="text-[#3b3a37] font-bold text-[15px] mb-1.5">{t.financial.step2.title}</h3>
                            <p className="text-[#6B6A65] text-[13px] leading-relaxed">{t.financial.step2.description}</p>
                        </div>

                        {/* Step 03 */}
                        <div className="flex-1">
                            <span className="text-[#A68048] font-bold text-lg block mb-1">03</span>
                            <h3 className="text-[#3b3a37] font-bold text-[15px] mb-1.5">{t.financial.step3.title}</h3>
                            <p className="text-[#6B6A65] text-[13px] leading-relaxed">{t.financial.step3.description}</p>
                        </div>
                    </div>
                </div>

                {/* Vertical Divider (Desktop) */}
                <div className="hidden lg:block w-[1px] bg-[#E8E8E3] my-12" />
                <div className="lg:hidden w-full h-[1px] bg-[#E8E8E3] mx-10 w-[calc(100%-5rem)]" />

                {/* Right Content */}
                <div className="w-full lg:w-1/2 flex flex-col p-10 lg:p-16 lg:pl-16 bg-[#FAFAFA] lg:bg-white justify-center">

                    {/* Card 1: Reduction */}
                    <div className="bg-white border border-[#E8E8E3] rounded-2xl p-8 mb-6 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
                        <h3 className="text-[11px] font-bold tracking-widest text-[#8C8A85] mb-5 uppercase">
                            {t.financial.card1.title}
                        </h3>

                        <div className="w-full h-[1px] bg-[#E8E8E3] mb-6" />

                        {/* Before */}
                        <div className="mb-7">
                            <div className="flex justify-between items-center mb-2.5">
                                <span className="text-[15px] font-medium text-[#3b3a37]">{t.financial.card1.beforeLabel}</span>
                                <span className="font-bold text-[#8c3b3b]">{t.financial.card1.beforeValue}</span>
                            </div>
                            <div className="w-full bg-[#8c3b3b] border border-[#7a3333] h-[34px] rounded-full" />
                        </div>

                        {/* After */}
                        <div>
                            <div className="flex justify-between items-center mb-2.5">
                                <span className="text-[15px] font-medium text-[#3b3a37]">{t.financial.card1.afterLabel}</span>
                                <span className="font-bold text-[#A68048]">{t.financial.card1.afterValue}</span>
                            </div>
                            <div className="w-full bg-[#EAEAEA] h-[28px] rounded-full relative flex items-center overflow-hidden border border-[#DDDDDD]">
                                <div className="h-full bg-[#A68048] w-[2.5%] rounded-l-full" />
                                <span className="text-[12px] text-[#6B6A65] font-medium ml-3 z-10">{t.financial.card1.reductionLabel}</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Impact */}
                    <div className="bg-[#FAF9F5] border border-[#ECE7DD] rounded-2xl p-6 px-7 flex flex-row items-center gap-5 shadow-[0_2px_12px_rgba(166,128,72,0.06)]">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#A68048] flex items-center justify-center shrink-0 shadow-md">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[13px] font-medium text-[#8C8A85] mb-0.5">{t.financial.card2.title}</span>
                            <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="text-[#A68048] font-bold text-[24px] tracking-tight">{t.financial.card2.value}</span>
                                <span className="text-[14px] text-[#3b3a37] font-semibold">{t.financial.card2.subtext}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
