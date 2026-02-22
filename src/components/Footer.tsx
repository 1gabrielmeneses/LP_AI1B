import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-white w-full z-10 relative font-jakarta text-[#5A554E] pt-20 lg:pt-32">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

                {/* Main Links Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 pb-20 border-b border-black/10">

                    {/* Support */}
                    <div className="flex flex-col">
                        <h4 className="font-bold text-[#0a0f16] uppercase tracking-widest text-xs mb-8">
                            {t.footer.support}
                        </h4>
                        <a
                            href={`mailto:${t.footer.email}`}
                            className="text-[#5A554E] hover:text-[#a8824f] transition-all duration-300 text-[15px] hover-underline-animation"
                        >
                            {t.footer.email}
                        </a>
                    </div>

                    {/* About */}
                    <div className="flex flex-col">
                        <h4 className="font-bold text-[#0a0f16] uppercase tracking-widest text-xs mb-8">
                            {t.footer.about}
                        </h4>
                        <ul className="flex flex-col gap-5">
                            <li>
                                <Link href="#" className="text-[#5A554E] hover:text-[#a8824f] transition-all duration-300 text-[15px] hover-underline-animation">
                                    {t.footer.product}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-[#5A554E] hover:text-[#a8824f] transition-all duration-300 text-[15px] hover-underline-animation">
                                    {t.footer.contact}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-[#5A554E] hover:text-[#a8824f] transition-all duration-300 text-[15px] hover-underline-animation">
                                    {t.footer.aboutUs}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col">
                        <h4 className="font-bold text-[#0a0f16] uppercase tracking-widest text-xs mb-8">
                            {t.footer.social}
                        </h4>
                        <ul className="flex flex-col gap-5">
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#5A554E] hover:text-[#a8824f] transition-all duration-300 text-[15px] hover-underline-animation">
                                    {t.footer.linkedin}
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#5A554E] hover:text-[#a8824f] transition-all duration-300 text-[15px] hover-underline-animation">
                                    {t.footer.youtube}
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#5A554E] hover:text-[#a8824f] transition-all duration-300 text-[15px] hover-underline-animation">
                                    {t.footer.spotify}
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#5A554E] hover:text-[#a8824f] transition-all duration-300 text-[15px] hover-underline-animation">
                                    {t.footer.instagram}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col">
                        <h4 className="font-bold text-[#0a0f16] uppercase tracking-widest text-xs mb-8">
                            {t.footer.legal}
                        </h4>
                        <ul className="flex flex-col gap-5">
                            <li>
                                <Link href="/privacy-policy" className="text-[#5A554E] hover:text-[#a8824f] transition-all duration-300 text-[15px] hover-underline-animation">
                                    {t.footer.privacy}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-use" className="text-[#5A554E] hover:text-[#a8824f] transition-all duration-300 text-[15px] hover-underline-animation">
                                    {t.footer.terms}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Logo & Copyright */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between py-8 gap-6">
                    <div className="flex items-center">
                        <Link href="/" className="w-10 h-10 bg-[#0a0f16] hover:bg-[#a8824f] transition-colors duration-300 flex items-center justify-center group overflow-hidden" aria-label="Home">
                            <span className="text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                                D
                            </span>
                        </Link>
                    </div>

                    <p className="text-[#5A554E] text-sm text-center md:text-right font-medium">
                        {t.footer.copyright}
                    </p>
                </div>

            </div>
        </footer>
    );
}
