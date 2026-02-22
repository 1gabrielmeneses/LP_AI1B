import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
    const { t } = useLanguage();

    return (
        <section className="w-full bg-[#f5f5ed] py-20 lg:py-28">
            <div className="w-full max-w-[1200px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">

                {/* Left Column - Image & Name */}
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start pt-4 lg:pt-0">
                    <div className="relative mb-6 w-full max-w-[240px] ml-0 lg:ml-4" style={{ aspectRatio: '4/5' }}>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#b58757] -mt-5 -mr-5 z-0" />
                        <div className="absolute bottom-0 left-0 w-20 h-24 bg-[#4a3b2c] -mb-5 -ml-5 z-0" />

                        <div className="relative z-10 w-full h-full shadow-lg">
                            <Image
                                src="/media/gabrielmeneses.png"
                                alt={t.about.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 300px"
                            />
                        </div>
                    </div>

                    <div className="text-center w-full max-w-[240px] ml-0 lg:ml-4">
                        <h3 className="text-[#b58757] font-bold text-[22px] mb-1">{t.about.name}</h3>
                        <p className="text-[#b58757]/60 text-sm uppercase tracking-wider">{t.about.role}</p>
                    </div>
                </div>

                {/* Right Column - Text Content */}
                <div className="w-full md:w-2/3 flex flex-col gap-6 text-[#525252] relative pb-12 mt-4 md:mt-0 lg:pr-12">
                    <h2 className="text-[#b58757] text-2xl md:text-[28px] font-bold font-jakarta mb-1">
                        {t.about.greeting}
                    </h2>

                    <p className="text-[16px] md:text-[17px] leading-[1.8] font-jakarta">
                        {t.about.paragraph1}
                    </p>

                    <p className="text-[16px] md:text-[17px] leading-[1.8] font-jakarta">
                        {t.about.paragraph2}
                    </p>


                </div>

            </div>
        </section>
    );
}
