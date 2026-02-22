import Link from "next/link";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FinalCTA() {
    const { t } = useLanguage();

    return (
        <div className="w-full bg-[#f5f5ed] pt-24 lg:pt-32">
            <section className="relative w-full bg-[#a8824f]">
                {/* Subtle dot pattern background overlay */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)`,
                        backgroundSize: '40px 40px',
                    }}
                ></div>

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 py-20 lg:px-16 lg:py-28 flex flex-col lg:flex-row items-center justify-between gap-12 text-white">

                    {/* Content Container */}
                    <div className="flex flex-col gap-4 w-full lg:w-3/5 text-center lg:text-left">
                        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight">
                            {t.finalCta.title}
                        </h2>
                        <p className="text-lg md:text-xl font-medium text-white/80 max-w-2xl mx-auto lg:mx-0">
                            {t.finalCta.subtitle}
                        </p>
                    </div>

                    {/* Action Button */}
                    <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
                        <Link
                            href="/book"
                            className="group bg-white text-[#a8824f] px-8 py-4 sm:px-10 sm:py-5 rounded-full flex items-center gap-3 font-semibold text-lg hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            <span>{t.finalCta.button}</span>
                            <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
}
