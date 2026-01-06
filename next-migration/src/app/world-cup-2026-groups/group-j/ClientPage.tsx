'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
  ChevronDown, 
  Clock, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Plane, 
  Train, 
  CreditCard, 
  ExternalLink,
  Car
} from 'lucide-react';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
 return (
 <div className="border-b border-slate-200 dark:border-slate-200 dark:border-slate-800 last:border-0">
 <button 
 onClick={onClick} 
 className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
 >
 <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors pr-8 tracking-tight">
 {question}
 </span>
 <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-amber-500 text-slate-900 dark:text-white rotate-180' : ' text-slate-500 group-hover:bg-amber-500/10 group-hover:text-amber-600'}`}>
 <ChevronDown className="w-4 h-4" />
 </div>
 </button>
 <div 
 className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
 >
 <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg max-w-3xl">
 {answer}
 </div>
 </div>
 </div>
 );
}

export default function GroupJClientPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState('intro');

  const AffiliateButton = ({ href, text, icon: Icon = ArrowRight, variant = 'primary' }: { href: string, text: string, icon?: any, variant?: 'primary' | 'secondary' | 'outline' }) => {
    const baseClasses = "group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden";
    const variants = {
      primary: "bg-amber-600 text-slate-900 dark:text-white hover:bg-amber-500 shadow-[0_10px_40px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.6)]",
      secondary: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xl",
      outline: "border-2 border-slate-200 dark:border-white/10 hover:border-amber-500 dark:hover:border-amber-500 text-slate-900 dark:text-white bg-transparent"
    };

    return (
      <Link href={href} target="_blank" className={`${baseClasses} ${variants[variant]}`}>
        <span className="relative z-10 flex items-center gap-2">
          {text}
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        )}
      </Link>
    );
  };

 const scrollToSection = (id: string) => {
 const element = document.getElementById(id);
 if (element) {
 const offset = 120;
 const elementPosition = element.getBoundingClientRect().top;
 const offsetPosition = elementPosition + window.pageYOffset - offset;
 window.scrollTo({
 top: offsetPosition,
 behavior: 'smooth'
 });
 }
 };

 useEffect(() => {
 const handleScroll = () => {
 const sections = ['intro', 'strategy', 'accommodation', 'budget', 'visas', 'insider', 'packing', 'faq'];
 const scrollPosition = window.scrollY + 300;

 for (const section of sections) {
 const element = document.getElementById(section);
 if (element && element.offsetTop <= scrollPosition) {
 setActiveSection(section);
 }
 }
 };

 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] font-sans text-slate-900 dark:text-slate-100 selection:bg-amber-500/30">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-[#F5F5F7] to-[#F5F5F7] dark:from-amber-900/20 dark:via-[#0A0A0A] dark:to-[#0A0A0A]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F7] dark:from-[#0A0A0A] to-transparent" />

 <div className="container mx-auto max-w-7xl relative z-10">
           <Breadcrumb items={[{ label: 'Groups', href: '/world-cup-2026-groups' }, { label: 'Group J', href: '/world-cup-2026-groups/group-j' }]} />

           <div className="max-w-4xl">
             <div className="flex items-center gap-4 mb-6 animate-fade-up">
               <span className="px-3 py-1 rounded-full border border-slate-300 dark:border-white/30 text-slate-600 dark:text-white/90 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
                 Last Updated: January 2, 2026
               </span>
               <span className="px-3 py-1 rounded-full border border-white/30 text-white/90 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
                 Group Strategy
               </span>
             </div>

             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-slate-900 dark:text-white animate-fade-up">
 World Cup 2026 <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-300">Group J Strategy</span>
 </h1>

 <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal mb-10 animate-fade-up delay-100">
Three titans. Half a continent. From the deafening roar of Kansas City to the tech-driven innovation of San Francisco, Group J is the tournament&apos;s most expansive logistical challenge.
</p>

<div className="flex flex-wrap items-center gap-8 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800 pt-8 animate-fade-up delay-300">
  <div className="flex items-center gap-2">
    <Clock className="w-4 h-4 text-amber-500" /> 
    12 min read
  </div>
 <div className="flex items-center gap-2">
 <div className="w-5 h-5 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-[10px] text-white dark:text-slate-900 font-bold">S</div>
 By stadiumport Strategy Team
 </div>
 </div>
 </div>
 </div>

 {/* Scroll Indicator */}
 <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 cursor-pointer z-20" onClick={() => scrollToSection('strategy')}>
 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Explore</span>
 <ChevronDown className="w-5 h-5 text-amber-500" />
 </div>
 </section>

 <div className="container mx-auto max-w-7xl px-6 pb-32">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">

 {/* Minimalist Sticky Sidebar */}
 <aside className="hidden lg:block lg:col-span-3 relative">
 <div className="sticky top-32">
 <nav className="space-y-1 border-l border-slate-200 dark:border-slate-200 dark:border-slate-800 ml-2">
 {[
 { id: 'intro', label: 'Introduction' },
 { id: 'strategy', label: 'Travel Strategy' },
 { id: 'accommodation', label: 'Accommodation' },
 { id: 'budget', label: 'Budget Breakdown' },
 { id: 'visas', label: 'Visa Requirements' },
 { id: 'insider', label: 'Insider Tips' },
 { id: 'packing', label: 'Packing Essentials' },
 { id: 'faq', label: 'FAQ' }
 ].map((item) => (
 <button
 key={item.id}
 onClick={() => scrollToSection(item.id)}
 className={`group flex items-center w-full pl-6 py-2.5 text-sm font-medium transition-all duration-300 border-l-2 -ml-[2px] ${
 activeSection === item.id 
 ? 'border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400' 
 : 'border-transparent text-slate-400 hover:text-slate-900 dark:hover:text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-700'
 }`}
 >
 {item.label}
 </button>
 ))}
 </nav>
 </div>
 </aside>

 {/* Main Content */}
 <div className="lg:col-span-9 space-y-24">

 {/* Introduction */}
 <section id="intro" className="max-w-3xl">
 <div className="prose prose-xl dark:prose-invert max-w-none">
 <p className="text-2xl md:text-3xl leading-relaxed font-light text-slate-900 dark:text-white mb-10">
 Group J defines the American philosophy: <strong className="text-amber-600 dark:text-amber-400">Go big or go home.</strong>
 </p>
 <p className="text-lg leading-loose text-slate-600 dark:text-slate-300 mb-10">
 This is the &quot;Frontier Group.&quot; You will experience the extremes of the host nation here: the raw, passionate energy of the Midwest, the sheer opulence of Texas, and the sophisticated tech-hub of the West Coast.
 </p>
 </div>

 <div className=" p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-200 dark:border-slate-800 mt-12">
 <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-6 flex items-center gap-3 tracking-tight uppercase">
 <Plane className="w-5 h-5" />
 The Group J &quot;Frontier Route&quot;
 </h3>
 <p className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
 Kansas City ✈️ Dallas ✈️ San Francisco
 </p>
 <p className="text-base text-slate-500 dark:text-slate-400">
 Forget the trains. This group spans 1,500 miles. You will need multi-city flight bookings and rental cars to conquer these three massive host regions.
 </p>
 </div>
 </section>

 {/* Section 1: Multi-City Travel Strategy */}
 <section id="strategy" className="scroll-mt-32">
 <div className="flex items-baseline gap-4 mb-12">
 <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">01</span>
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Multi-City Travel Strategy</h2>
 </div>

 <p className="text-lg text-slate-600 dark:text-slate-300 leading-loose mb-12 max-w-3xl">
 Group J has the largest geographical footprint of any group. Public transit is limited in KC and Dallas, making rental cars an absolute necessity.
 </p>

 <div className="mb-16">
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">The &quot;Midwest & Texas&quot; Hubs (Car Supremacy)</h3>
 <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
 Both Arrowhead Stadium (KC) and AT&T Stadium (Dallas) are located far from their respective city centers. Ride-share prices will surge—renting is better.
 </p>

 <div className="grid md:grid-cols-3 gap-6">
 <div className=" p-8 rounded-3xl border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
 <Car className="w-8 h-8 text-amber-500 mb-6" />
 <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Rental Cars</h4>
 <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Essential for KC and Dallas. Book SUVs with high-power AC.</p>
 <span className="inline-block px-3 py-1 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-full">$60-120 USD / Day</span>
 </div>
 <div className=" p-8 rounded-3xl border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
 <Plane className="w-8 h-8 text-amber-500 mb-6" />
 <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Multi-City Flights</h4>
 <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Book as a single itinerary to save on baggage fees.</p>
 <span className="inline-block px-3 py-1 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-full">$400-700 Total</span>
 </div>
 <div className=" p-8 rounded-3xl border border-transparent dark:border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100 transition-opacity duration-300">
 <div className="w-8 h-8 text-slate-400 mb-6 flex items-center justify-center font-bold border-2 border-slate-300 rounded-full text-[10px]">RAIL</div>
 <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Caltrain (SF Only)</h4>
 <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">The only reliable rail in the group. Connects SF to Levi&apos;s Stadium.</p>
 <span className="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full">$10-20 USD</span>
 </div>
 </div>
 </div>

 <div className="mb-16">
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">The &quot;Trans-Continental&quot; Jumps</h3>
 <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
 These cities are not driveable in a single day. You must fly to stay fresh for match days.
 </p>

 <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-200 dark:border-slate-800 shadow-sm ">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="border-b border-slate-100 dark:border-slate-200 dark:border-slate-800">
 <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Route</th>
 <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Flight Time</th>
 <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Booking Window</th>
 <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Est. Price</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
 <tr>
 <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Kansas City (MCI) → Dallas (DFW)</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">1h 35m</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">4 Months Out</td>
 <td className="p-6 font-bold text-amber-600 dark:text-amber-400 text-base">$110 - $220</td>
 </tr>
 <tr>
 <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Dallas (DFW) → San Francisco (SFO)</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">3h 55m</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">3 Months Out</td>
 <td className="p-6 font-bold text-amber-600 dark:text-amber-400 text-base">$180 - $350</td>
 </tr>
 <tr>
 <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Kansas City (MCI) → San Francisco (SFO)</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">4h 10m</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">4 Months Out</td>
 <td className="p-6 font-bold text-amber-600 dark:text-amber-400 text-base">$200 - $400</td>
 </tr>
 </tbody>
 </table>
 </div>

 {/* Affiliate Block: Flights */}
 <div className="mt-12 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
 <div>
 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
 <Plane className="w-5 h-5 text-amber-500" />
 Book Your Frontier Flights
 </h4>
 <p className="text-slate-500 dark:text-slate-400 text-sm">Direct flights between these cities are limited. Secure your seats early.</p>
 </div>
 </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AffiliateButton 
                  href="https://skyscanner.com" 
                  text="Search Frontier Routes" 
                  icon={ArrowRight}
                  variant="primary"
                />
                <AffiliateButton 
                  href="https://expedia.com" 
                  text="Compare Car Rentals" 
                  icon={Car}
                  variant="outline"
                />
              </div>
 <p className="text-[10px] text-slate-400 mt-4 text-center uppercase tracking-widest font-medium">We may earn a commission on bookings made through these links.</p>
 </div>
 </div>
 </section>

 {/* Section 2: Accommodation Strategy */}
 <section id="accommodation" className="scroll-mt-32">
 <div className="flex items-baseline gap-4 mb-12">
 <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">02</span>
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Accommodation Strategy</h2>
 </div>

 <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose max-w-3xl">
 Group J requires a split approach. San Francisco is the budget killer, while Dallas and Kansas City offer sprawling options that require a car for access.
 </p>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {/* Dallas */}
 <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
 <div className="flex justify-between items-start mb-6">
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Dallas / Arlington</h3>
 <span className="px-3 py-1 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Texas Scale</span>
 </div>
 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 9 Months Out</p>
 <ul className="space-y-4 mb-8">
 <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
 <span><strong>Best Area:</strong> Uptown Dallas (For nightlife and dining)</span>
 </li>
 <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
 <span><strong>Stadium Access:</strong> Arlington (Stay here ONLY if you want to walk to the stadium)</span>
 </li>
 <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
 <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
 <span><strong>Warning:</strong> Dallas is huge. Traffic on I-30 can double your travel time.</span>
 </li>
 </ul>
              <AffiliateButton 
                href="https://booking.com" 
                text="Search Dallas Hotels" 
                variant="outline"
              />
            </div>

            {/* San Francisco */}
            <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">SF / Santa Clara</h3>
                <span className="px-3 py-1 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">High Cost</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 10 Months Out</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <span><strong>Best Area:</strong> Union Square (Tourism) or Palo Alto (Closer to stadium)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <span><strong>Stadium Access:</strong> Levi&apos;s Stadium is in Santa Clara, not SF. Use Caltrain.</span>
                </li>
              </ul>
              <AffiliateButton 
                href="https://booking.com" 
                text="Search Bay Area Hotels" 
                variant="outline"
              />
            </div>

 {/* Kansas City */}
 <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
 <div className="flex justify-between items-start mb-6">
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Kansas City</h3>
 <span className="px-3 py-1 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Best Value</span>
 </div>
 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 7 Months Out</p>
 <ul className="space-y-4 mb-8">
 <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
 <span><strong>Best Area:</strong> Power & Light District (Fan fest atmosphere)</span>
 </li>
 <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
 <span><strong>Stadium Access:</strong> Rental car is the only way to Arrowhead efficiently.</span>
 </li>
 </ul>
              <AffiliateButton 
                href="https://booking.com" 
                text="Search KC Hotels" 
                variant="outline"
              />
            </div>

            {/* The Secret Spot */}
            <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">San Jose</h3>
                <span className="px-3 py-1 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Pro Move</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">The Silicon Valley Secret</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <span><strong>Why:</strong> San Jose is much closer to Levi&apos;s Stadium than San Francisco is.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <span><strong>Access:</strong> VTA Light Rail goes straight to the stadium gates.</span>
                </li>
              </ul>
              <AffiliateButton 
                href="https://booking.com" 
                text="Search San Jose Hotels" 
                variant="outline"
              />
            </div>
 </div>
 </section>

 {/* Section 3: Budget Breakdown */}
 <section id="budget" className="scroll-mt-32">
 <div className="flex items-baseline gap-4 mb-12">
 <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">03</span>
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group J Budget Breakdown</h2>
 </div>

 <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose">
 Estimates are per person for a 12-day trip covering 3 group matches. Higher than Group C due to required air travel and car rentals.
 </p>

 <div className="grid md:grid-cols-3 gap-6 mb-16">
 {/* Economy */}
 <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:scale-[1.02] transition-transform duration-300">
 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Economy Strategy</div>
 <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$3,800</div>
 <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Shared Airbnbs, economy flights, grocery BBQ, rental car split 4 ways.</p>
 </div>

 {/* Mid-Range */}
 <div className="p-8 rounded-3xl border border-amber-100 dark:border-amber-900 dark:bg-amber-900/10 relative overflow-hidden transform md:-translate-y-4 shadow-xl shadow-amber-900/5">
 <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 dark:text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-widest">Recommended</div>
 <div className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-4">Mid-Range Strategy</div>
 <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-4 tracking-tighter">$6,200</div>
 <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">3-star hotels, direct flights, daily BBQ/dining, Cat 2 tickets, mid-size rental car.</p>
 </div>

 {/* Premium */}
 <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:scale-[1.02] transition-transform duration-300">
 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Premium Experience</div>
 <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$11,000+</div>
 <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Palo Alto/Uptown Dallas hotels, First Class jumps, VIP hospitality, luxury SUV rental.</p>
 </div>
 </div>

 <div className=" rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
 <CreditCard className="w-6 h-6 text-amber-500" />
 Money-Saving Hacks for Group J
 </h3>
 <ul className="space-y-6">
 <li className="flex items-start gap-4">
 <div className="w-8 h-8 rounded-full dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-xs flex-shrink-0">1</div>
 <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
 <strong className="text-slate-900 dark:text-white font-bold">Base in San Jose:</strong> Avoid the 1-hour commute and $400/night hotels in San Francisco. San Jose is closer to Levi&apos;s and more affordable.
 </p>
 </li>
 <li className="flex items-start gap-4">
 <div className="w-8 h-8 rounded-full dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-xs flex-shrink-0">2</div>
 <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
 <strong className="text-slate-900 dark:text-white font-bold">Rental Car Pooling:</strong> In KC and Dallas, Uber prices will hit $100+ on match days. Split a rental car with other fans to save hundreds.
 </p>
 </li>
 <li className="flex items-start gap-4">
 <div className="w-8 h-8 rounded-full dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-xs flex-shrink-0">3</div>
 <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
 <strong className="text-slate-900 dark:text-white font-bold">BBQ is the Budget King:</strong> You are in the BBQ capitals. Massive, high-quality meals in KC and Dallas are cheaper than a standard sit-down dinner in NYC.
 </p>
 </li>
 </ul>

 {/* eSIM Affiliate */}
 <div className="mt-10 flex items-center gap-6 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
 <div className="w-12 h-12 rounded-xl dark:bg-slate-700 flex items-center justify-center text-2xl shadow-sm">📱</div>
 <div className="flex-1">
 <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">Stay Connected</h4>
 <p className="text-xs text-slate-500 dark:text-slate-400">Get an Airalo eSIM for instant data across the USA.</p>
 </div>
 <a href="#" className="flex-shrink-0 text-amber-600 font-bold text-xs hover:text-amber-500 transition-colors uppercase tracking-widest">View Plans &rarr;</a>
 </div>
 </div>
 </section>

 {/* Section 4: Visa & Entry Requirements */}
 <section id="visas" className="scroll-mt-32">
 <div className="flex items-baseline gap-4 mb-12">
 <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">04</span>
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Visa & Entry Requirements</h2>
 </div>

 <div className="grid md:grid-cols-1 gap-8">
 <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
 <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-200 dark:border-slate-800">
 <OptimizedImage 
 src="https://flagcdn.com/us.svg" 
 width={32} 
 height={24} 
 alt="USA" 
 imgClassName="w-8 h-auto object-cover rounded shadow-sm"
 unoptimized
 />
 Entering USA
 </h3>
 <ul className="space-y-6">
 <li className="text-sm text-slate-600 dark:text-slate-300">
 <strong className="block text-slate-900 dark:text-white mb-1 font-bold">ESTA</strong>
 Required for Visa Waiver Program countries (UK, EU, Australia, etc.). Cost: $21 USD. Approval: Up to 72 hours. Valid for 2 years.
 </li>
 <li className="text-sm text-slate-600 dark:text-slate-300">
 <strong className="block text-slate-900 dark:text-white mb-1 font-bold">B1/B2 Visa</strong>
 Required if not ESTA eligible. Wait times for interviews can be 6+ months in some countries. Apply immediately if you need one.
 </li>
 <li className="text-sm text-slate-600 dark:text-slate-300">
 <strong className="block text-red-600 dark:text-red-400 mb-1 font-bold">Important</strong>
 Even if you are just visiting, ensure your passport is valid for at least 6 months beyond your planned departure date.
 </li>
 </ul>
 </div>
 </div>
 </section>

 {/* Section 5: Insider Tips */}
 <section id="insider" className="scroll-mt-32">
 <div className="flex items-baseline gap-4 mb-12">
 <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">05</span>
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Insider Knowledge</h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
 <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-xl mb-6">📢</div>
 <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Arrowhead is LOUD</h3>
 <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 Kansas City holds the Guinness World Record for crowd noise (142.2 decibels). It is deafening. If you have sensitive hearing, bring high-fidelity earplugs.
 </p>
 </div>

 <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
 <div className="w-10 h-10 rounded-xl dark:bg-blue-500/10 flex items-center justify-center text-xl mb-6">🌉</div>
 <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The Levi&apos;s Location</h3>
 <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 Levi&apos;s Stadium is in Santa Clara, 45 miles south of San Francisco. It can take 2 hours in traffic. Stay in San Jose or Palo Alto for match days.
 </p>
 </div>

 <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
 <div className="w-10 h-10 rounded-xl dark:bg-orange-500/10 flex items-center justify-center text-xl mb-6">🔥</div>
 <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The Texas Heat</h3>
 <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 Dallas will be 40°C (104°F) in July. AT&T Stadium is air-conditioned, but the walk from parking lots is brutal. Hydrate 24 hours before match day.
 </p>
 </div>

 <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
 <div className="w-10 h-10 rounded-xl dark:bg-amber-500/10 flex items-center justify-center text-xl mb-6">🥩</div>
 <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">BBQ Etiquette</h3>
 <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
 In KC, it&apos;s all about Burnt Ends. In Dallas, it&apos;s Brisket. Don&apos;t ask for sauce in Texas—the meat is supposed to speak for itself.
 </p>
 </div>
 </div>
 </section>

 {/* Section 6: Essential Gear */}
 <section id="packing" className="scroll-mt-32">
 <div className="flex items-baseline gap-4 mb-12">
 <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">06</span>
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group J Packing Essentials</h2>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 <div className="group text-center p-6 border border-slate-100 dark:border-slate-200 dark:border-slate-800 rounded-[2rem] hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
 <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🎧</div>
 <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Ear Protection</h4>
 <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Required for KC noise levels.</p>
 <a href="#" className="text-amber-600 text-[10px] font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">Shop Now</a>
 </div>
 <div className="group text-center p-6 border border-slate-100 dark:border-slate-200 dark:border-slate-800 rounded-[2rem] hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
 <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧴</div>
 <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">High-SPF Sunscreen</h4>
 <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Texas sun is unforgiving.</p>
 <a href="#" className="text-amber-600 text-[10px] font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">Shop Now</a>
 </div>
 <div className="group text-center p-6 border border-slate-100 dark:border-slate-200 dark:border-slate-800 rounded-[2rem] hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
 <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧥</div>
 <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Light Layers</h4>
 <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">SF fog can be chilly in July.</p>
 <a href="#" className="text-amber-600 text-[10px] font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">Shop Now</a>
 </div>
 <div className="group text-center p-6 border border-slate-100 dark:border-slate-200 dark:border-slate-800 rounded-[2rem] hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
 <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔋</div>
 <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Power Bank</h4>
 <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Long travel days between hubs.</p>
 <a href="#" className="text-amber-600 text-[10px] font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">Shop Now</a>
 </div>
 </div>
 </section>

 {/* Section 7: FAQ */}
 <section id="faq" className="scroll-mt-32">
 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight">Frequently Asked Questions</h2>
 <div className="space-y-2">
 <AccordionItem 
 question="Do I really need a car for Group J?"
 answer={<>For <strong>Kansas City and Dallas</strong>, yes. The stadiums are isolated and public transit is not designed for massive crowds. For <strong>San Francisco</strong>, you can rely on Caltrain to reach the stadium in Santa Clara, but a car is still helpful for exploring the Bay Area.</>}
 isOpen={openFaqIndex === 0}
 onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
 />
 <AccordionItem 
 question="Which city is the best base for the group stage?"
 answer={<><strong>Dallas</strong> is the most central and offers the most flight connections. However, <strong>San Jose</strong> is the most convenient base for matches at Levi&apos;s Stadium, saving you hours of travel time compared to staying in San Francisco.</>}
 isOpen={openFaqIndex === 1}
 onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
 />
 <AccordionItem 
 question="How do I handle the summer heat?"
 answer={<>Dallas and KC reach 100°F+. AT&T Stadium is indoor/AC, but Arrowhead is open-air. Drink double the water you think you need, wear light-colored clothing, and avoid heavy activity during the afternoon sun.</>}
 isOpen={openFaqIndex === 2}
 onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
 />
 <AccordionItem 
 question="Is it safe to drive between these cities?"
 answer={<>It is safe, but <strong>extremely long</strong>. Dallas to SF is a 24-hour drive across deserts. We strongly recommend flying between hubs to save time and energy for the matches.</>}
 isOpen={openFaqIndex === 3}
 onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
 />
 </div>
 </section>

 {/* Final CTA */}
 <div className="relative overflow-hidden rounded-[3rem] text-slate-900 dark:text-white p-12 md:p-20 text-center shadow-2xl shadow-slate-900/20">
 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-slate-900 to-slate-900"></div>
 <div className="relative z-10 max-w-3xl mx-auto">
 <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready for the American Frontier?</h2>
 <p className="text-slate-600 dark:text-slate-300 mb-12 text-lg leading-relaxed font-light">
 From the heartland roar to the Pacific coast innovation, Group J is a journey across the soul of America. Secure your logistics today.
 </p>
 </div>
 </div>

 </div>
 </div>
 </div>
 </main>
 </div>
 );
}



