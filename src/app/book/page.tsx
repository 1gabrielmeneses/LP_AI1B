"use client";

import { useState } from "react";
import { Link2, Clock, Globe, Video, ChevronLeft, ChevronRight, User, Calendar, Info, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookPage() {
    const [selectedDate, setSelectedDate] = useState<number | null>(24);
    const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h");
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);

    // Hardcode Feb 2026 for now as requested
    const daysInMonth = 28;
    // Feb 1 2026 is a Sunday
    const startingDayOfWeek = 0;

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const blanks = Array.from({ length: startingDayOfWeek }, (_, i) => i);

    const timeSlots12 = ["4:00pm", "4:30pm", "5:00pm", "5:30pm", "6:00pm"];
    const timeSlots24 = ["16:00", "16:30", "17:00", "17:30", "18:00"];

    const timeSlots = timeFormat === "12h" ? timeSlots12 : timeSlots24;

    return (
        <main className="min-h-screen font-inter w-full">

            <div className="pt-24 pb-12 px-4 md:px-8 flex flex-col items-center justify-center gap-6">
                <AnimatePresence mode="wait">
                    {showForm ? (
                        <motion.div
                            key="form-view"
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="w-full max-w-[900px] flex flex-col gap-6"
                        >
                            <button
                                onClick={() => setShowForm(false)}
                                className="self-start flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm border border-gray-200 bg-white px-4 py-2 rounded-full cursor-pointer shadow-sm"
                            >
                                <ChevronLeft className="w-4 h-4" /> Back to Time Selection
                            </button>

                            {/* Top Card */}
                            <div className="bg-white rounded-[12px] shadow-sm border-l-4 border-l-[#af8852] border-y border-y-gray-200 border-r border-r-gray-200 p-6 md:p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="space-y-1">
                                        <div className="text-xs font-bold text-gray-500 tracking-wide uppercase">
                                            Confirmed Time
                                        </div>
                                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                                            Growth Mapping Call
                                        </h1>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm z-10 bg-gray-100 flex items-center justify-center text-gray-500">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-[#af8852] flex items-center justify-center text-white font-medium -ml-4 z-0 text-sm">
                                            AI
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] font-medium text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-[#af8852]" />
                                        <span>Thursday, February 26, 2026</span>
                                    </div>
                                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-[#af8852]" />
                                        <span>2:00pm - 2:30pm</span>
                                    </div>
                                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                    <div className="flex items-center gap-2">
                                        <Video className="w-5 h-5 text-[#af8852]" />
                                        <span>Google Meet</span>
                                    </div>
                                </div>
                            </div>

                            {/* Form Card */}
                            <div className="bg-white rounded-[12px] shadow-sm border border-gray-200 p-6 md:p-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Enter Details</h2>
                                <p className="text-gray-500 text-[15px] mb-6">Please answer a few questions to help us prepare for our call.</p>

                                <hr className="border-gray-200 mb-8" />

                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Left Column */}
                                    <div className="flex-1 space-y-6">
                                        <div className="flex gap-4">
                                            <div className="flex-1 space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">First name *</label>
                                                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#af8852]/20 focus:border-[#af8852] transition-all" />
                                            </div>
                                            <div className="flex-1 space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">Last name</label>
                                                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#af8852]/20 focus:border-[#af8852] transition-all" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">Email address *</label>
                                            <input type="email" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#af8852]/20 focus:border-[#af8852] transition-all" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                                                Phone number
                                                <Info className="w-4 h-4 text-gray-500" />
                                            </label>
                                            <div className="flex">
                                                <div className="flex items-center gap-2 px-3 py-2.5 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50">
                                                    <span>🇧🇷</span>
                                                    <ChevronRight className="w-3 h-3 text-gray-500 rotate-90" />
                                                </div>
                                                <input type="tel" defaultValue="+55 " className="flex-1 px-4 py-2.5 rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#af8852]/20 focus:border-[#af8852] transition-all" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">Business Website *</label>
                                            <input type="url" placeholder="https://" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#af8852]/20 focus:border-[#af8852] transition-all" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">What's your current monthly rev (USD)? *</label>
                                            <div className="relative">
                                                <select defaultValue="" className="appearance-none w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#af8852]/20 focus:border-[#af8852] transition-all bg-white font-medium text-gray-700">
                                                    <option value="" disabled>Select an option...</option>
                                                    <option value="0-10k">$0 - $10k</option>
                                                    <option value="10k-50k">$10k - $50k</option>
                                                    <option value="50k-100k">$50k - $100k</option>
                                                    <option value="100k+">$100k+</option>
                                                </select>
                                                <ChevronRight className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="flex-1 space-y-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">What does your business do &amp; for how much? *</label>
                                            <textarea
                                                placeholder="For instance, &quot;we run a marketing agency that helps dentists get more patients using FB ads; we price between $2K to $5K per month&quot;."
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#af8852]/20 focus:border-[#af8852] transition-all h-[120px] resize-none text-[15px] placeholder:text-gray-400"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">What made you want to contact us? *</label>
                                            <textarea
                                                placeholder="For instance, &quot;we want to improve our speed-to-lead; we came across Nick's videos and think automations can help&quot;."
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#af8852]/20 focus:border-[#af8852] transition-all h-[120px] resize-none text-[15px] placeholder:text-gray-400"
                                            />
                                        </div>

                                        <div>
                                            <button className="flex items-center gap-2 text-[#af8852] font-semibold text-[15px] hover:text-[#916b3b] transition-colors">
                                                <Users className="w-5 h-5" />
                                                Add guests
                                            </button>
                                        </div>

                                        <div className="flex items-start gap-3 pt-2">
                                            <div className="relative flex items-start pt-1">
                                                <input type="radio" className="w-4 h-4 mt-0.5 rounded-full border-gray-400 text-transparent focus:ring-0 appearance-none inline-block border bg-white cursor-pointer" />
                                            </div>
                                            <p className="text-[14px] text-gray-600 leading-relaxed">
                                                If this is a sponsorship or partnership request, email <a href="mailto:menezes@ai1business.com" className="text-[#af8852] hover:underline">menezes@ai1business.com</a> instead. Confirm before proceeding.
                                            </p>
                                        </div>

                                        <div className="pt-2 flex flex-col items-center sm:block">
                                            <button className="px-6 py-3 bg-[#af8852] hover:bg-[#916b3b] text-white font-semibold rounded-lg transition-colors w-full sm:w-[220px]">
                                                Schedule Event
                                            </button>
                                            <p className="text-[12px] text-gray-500 mt-4 text-center sm:text-left">
                                                By proceeding, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="calendar-view"
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="bg-white rounded-[16px] shadow-sm border border-gray-200 w-full max-w-[1050px] flex flex-col md:flex-row overflow-hidden"
                        >

                            {/* Left Panel */}
                            <div className="md:w-[35%] p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm z-10 bg-gray-100 flex items-center justify-center text-gray-500">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-[#f3efe8] flex items-center justify-center text-ai-gold font-medium -ml-4 z-0 text-sm">
                                        AI
                                    </div>
                                </div>

                                <div className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-1">
                                    LeftClick Team
                                </div>
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                                    Growth Mapping Call
                                </h1>

                                <div className="space-y-6 flex-1">
                                    <div className="flex gap-3 text-gray-600">
                                        <Video className="w-5 h-5 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-[15px] leading-relaxed">
                                                30min video chat with the LeftClick team. Includes:
                                            </p>
                                            <ul className="list-disc pl-5 mt-3 text-[15px] space-y-1.5 text-gray-600">
                                                <li>Needs analysis (to gauge fit).</li>
                                                <li>Process audit (to map funnel & identify improvements).</li>
                                                <li>Our suggested next steps.</li>
                                            </ul>
                                            <p className="text-[13px] italic text-gray-400 mt-4 leading-relaxed">
                                                Agency inquiries only. Looking for fast-moving B2B companies.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-4 text-[15px] font-medium text-gray-600">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-gray-500" />
                                        <span>30m</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Link2 className="w-5 h-5 text-gray-500" />
                                        <span>Google Meet</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Globe className="w-5 h-5 text-gray-500" />
                                        <span>America/Sao Paulo</span>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Panel - Calendar */}
                            <div className="md:w-[40%] p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">February 2026</h2>
                                    <div className="flex gap-2">
                                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-7 gap-1 text-center mb-4">
                                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                                        <div key={day} className="text-xs font-semibold text-gray-400 mb-2">
                                            {day}
                                        </div>
                                    ))}

                                    {blanks.map(b => (
                                        <div key={`blank-${b}`} className="w-10 h-10 flex items-center justify-center m-auto"></div>
                                    ))}

                                    {days.map(day => {
                                        const isSelected = selectedDate === day;
                                        const hasAvailability = day === 19; // Just visualizing a dot

                                        return (
                                            <button
                                                key={day}
                                                onClick={() => setSelectedDate(day)}
                                                className={`relative w-10 h-10 flex items-center justify-center m-auto rounded-full text-[15px] font-medium transition-all
                                            ${isSelected
                                                        ? 'bg-ai-gold text-white shadow-md'
                                                        : 'text-ai-text hover:bg-gray-100'
                                                    }
                                        `}
                                            >
                                                {day}
                                                {hasAvailability && !isSelected && (
                                                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-ai-gold"></span>
                                                )}
                                                {hasAvailability && isSelected && (
                                                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-white"></span>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="mt-12 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                    Time zone: America/Sao Paulo (17:35)
                                </div>
                            </div>

                            {/* Right Panel - Time Slots */}
                            <div className="md:w-[25%] p-6 md:p-8 bg-[#fafafa]">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-lg font-bold text-gray-900 tracking-tight">Tue 24</h3>
                                    <div className="flex bg-gray-200 rounded-lg p-1">
                                        <button
                                            onClick={() => setTimeFormat("12h")}
                                            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${timeFormat === '12h' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            12h
                                        </button>
                                        <button
                                            onClick={() => setTimeFormat("24h")}
                                            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${timeFormat === '24h' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            24h
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {timeSlots.map((time, idx) => {
                                        const isSelected = selectedTime === time;
                                        const isFirstTwo = idx < 2;

                                        return (
                                            <button
                                                key={time}
                                                onClick={() => { setSelectedTime(time); setShowForm(true); }}
                                                className={`w-full py-3.5 px-4 rounded-xl border text-[15px] font-semibold transition-all transition-colors duration-200
                                            ${isSelected
                                                        ? 'border-ai-gold text-ai-gold bg-ai-gold/5 ring-1 ring-ai-gold outline-none'
                                                        : isFirstTwo && !selectedTime
                                                            ? 'border-ai-gold/60 text-ai-gold hover:border-ai-gold hover:bg-ai-gold/5'
                                                            : 'border-gray-200 text-gray-600 hover:border-ai-gold hover:text-ai-gold bg-white'
                                                    }
                                        `}
                                            >
                                                {time}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main >
    );
}
