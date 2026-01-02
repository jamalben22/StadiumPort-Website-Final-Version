'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ChevronDown, Clock, Calendar, MapPin, ArrowRight, Plane, Train, CreditCard, AlertTriangle, ExternalLink, Building, Thermometer } from 'lucide-react';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 dark:border-white/10 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors pr-8 tracking-tight">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-teal-500 text-white rotate-180' : ' text-slate-500 group-hover:bg-teal-500/10 group-hover:text-teal-600'}`}>
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

const AffiliateButton = ({ href, text, icon: Icon = ArrowRight, variant = 'primary' }: { href: string, text: string, icon?: any, variant?: 'primary' | 'secondary' | 'outline' }) => {
  const variants = {
    primary: "bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20",
    secondary: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors",
    outline: "bg-transparent border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
  };

  return (
    <Link 
      href={href}
      target="_blank"
      className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 relative overflow-hidden ${variants[variant]}`}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      )}
      <span className="relative z-10">{text}</span>
      <Icon className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
};

export default function GroupEClientPage() {
 const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
 const [activeSection, setActiveSection] = useState('intro');

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
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] font-sans text-slate-900 dark:text-slate-100 selection:bg-teal-500/30">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-[#F5F5F7] to-[#F5F5F7] dark:from-teal-900/20 dark:via-[#0A0A0A] dark:to-[#0A0A0A]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F7] dark:from-[#0A0A0A] to-transparent" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
           <Breadcrumb items={[{ label: 'Groups', href: '/world-cup-2026-groups' }, { label: 'Group E', href: '/world-cup-2026-groups/group-e' }]} />

           <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm text-teal-700 dark:text-teal-400 text-xs font-bold tracking-[0.15em] uppercase mb-8 animate-fade-in">
                <MapPin className="w-3 h-3" />
                The Continental Odyssey
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-slate-900 dark:text-white animate-fade-up">
                World Cup 2026 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-300">Group E Strategy</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal mb-10 animate-fade-up delay-100">
                From the Birthplace of America to the Heartland of BBQ. A logistical puzzle spanning two countries and three distinct cultural regions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-200">
                <button onClick={() => scrollToSection('strategy')} className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-transparent border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm tracking-wide hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  Explore Strategy
                </button>
              </div>
 
 <div className="flex flex-wrap items-center gap-8 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-8 animate-fade-up delay-300">
 <div className="flex items-center gap-2">
 <Calendar className="w-4 h-4 text-teal-500" /> 
 Updated: June 2025
 </div>
 <div className="flex items-center gap-2">
 <Clock className="w-4 h-4 text-teal-500" /> 
 16 min read
 </div>
 <div className="flex items-center gap-2">
 <div className="w-5 h-5 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-[10px] text-white dark:text-slate-900 font-bold">S</div>
 By Stadiumport Strategy Team
 </div>
 </div>
 </div>
 </div>
 
 {/* Scroll Indicator */}
 <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 cursor-pointer z-20" onClick={() => scrollToSection('strategy')}>
 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Explore</span>
 <ChevronDown className="w-5 h-5 text-teal-500" />
 </div>
 </section>

 <div className="container mx-auto max-w-7xl px-6 pb-32">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
 
 {/* Minimalist Sticky Sidebar */}
 <aside className="hidden lg:block lg:col-span-3 relative">
 <div className="sticky top-32">
 <nav className="space-y-1 border-l border-slate-200 dark:border-slate-800 ml-2">
 {[
 { id: 'intro', label: 'Introduction' },
 { id: 'strategy', label: 'Transport Strategy' },
 { id: 'accommodation', label: 'Accommodation' },
 { id: 'budget', label: 'Budget Breakdown' },
 { id: 'visas', label: 'Visa & Entry' },
 { id: 'insider', label: 'Insider Tips' },
 { id: 'packing', label: 'Packing Essentials' },
 { id: 'faq', label: 'FAQ' }
 ].map((item) => (
 <button
 key={item.id}
 onClick={() => scrollToSection(item.id)}
 className={`group flex items-center w-full pl-6 py-2.5 text-sm font-medium transition-all duration-300 border-l-2 -ml-[2px] ${
 activeSection === item.id 
 ? 'border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400' 
 : 'border-transparent text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
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
 Group E is a true "Continental Odyssey." It connects the historic Northeast Corridor of the USA with the industrial heartland of the Midwest and the diverse metropolis of Toronto.
 </p>
 <p className="text-lg leading-loose text-slate-600 dark:text-slate-300 mb-10">
 The route covers Philadelphia, Houston, Kansas City, and Toronto.
 </p>
 </div>
 
 <div className=" p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 mt-12">
 <h3 className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-6 flex items-center gap-3 tracking-tight uppercase">
 <Plane className="w-5 h-5" />
 The Group E "Split Strategy"
 </h3>
 <p className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
 Rail North, Fly South.
 </p>
 <p className="text-base text-slate-500 dark:text-slate-400">
 Use <strong className="text-slate-900 dark:text-white">Amtrak</strong> for the Northeast leg (Philadelphia, NY/NJ). You <strong className="text-slate-900 dark:text-white">MUST fly</strong> for the Central leg (Houston, Kansas City) and to reach Toronto. Do not attempt to drive the full route.
 </p>
 </div>
 </section>

 {/* Section 1: Multi-City Travel Strategy */}
 <section id="strategy" className="scroll-mt-32">
 <div className="flex items-baseline gap-4 mb-12">
 <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">01</span>
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Logistics & Transport</h2>
 </div>
 
 <p className="text-lg text-slate-600 dark:text-slate-300 leading-loose mb-12 max-w-3xl">
 This group covers thousands of miles. Your best friend is the "Open-Jaw" flight ticket—flying into one city and out of another.
 </p>
 
 <div className="mb-16">
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Primary Connections</h3>
 
 <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm ">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="border-b border-slate-100 dark:border-slate-800">
 <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Route</th>
 <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Mode</th>
 <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Time</th>
 <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Est. Price</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
 <tr>
 <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Philadelphia → New York</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">Amtrak Train</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">1h 15m</td>
 <td className="p-6 font-bold text-teal-600 dark:text-teal-400 text-base">$30 - $150</td>
 </tr>
 <tr>
 <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Philadelphia → Houston</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">Flight</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">3h 45m</td>
 <td className="p-6 font-bold text-teal-600 dark:text-teal-400 text-base">$200 - $400</td>
 </tr>
 <tr>
 <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Houston → Kansas City</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">Flight</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">1h 50m</td>
 <td className="p-6 font-bold text-teal-600 dark:text-teal-400 text-base">$150 - $300</td>
 </tr>
 </tbody>
 </table>
 </div>

 {/* Affiliate Block: Flights */}
 <div className="mt-12 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
 <div>
 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
 <Plane className="w-5 h-5 text-teal-500" />
 Book Multi-City Flights
 </h4>
 <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
 Use the "Multi-City" search option to book all your legs on one itinerary.
 </p>
 </div>
 <Link href="https://expedia.com/affiliates/flight-search-stadiumport" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-teal-600/20">
 Search Flights <ExternalLink className="w-4 h-4" />
 </Link>
 </div>
 </div>
 </div>

 {/* Section 2: Accommodation */}
 <section id="accommodation" className="scroll-mt-32 mb-24">
 <div className="flex items-baseline gap-4 mb-12">
 <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">02</span>
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Where to Stay</h2>
 </div>
 <p className="text-lg text-slate-600 dark:text-slate-300 leading-loose mb-12 max-w-3xl">
 Each city has a unique layout. Philadelphia is compact and walkable. Houston and Kansas City are sprawling.
 </p>
 
 <div className="grid md:grid-cols-2 gap-8">
 <div className="p-8 rounded-3xl border border-slate-100 dark:border-white/5 hover:border-teal-200 dark:hover:border-teal-800 transition-colors">
 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Philadelphia (Lincoln Financial Field)</h4>
 <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
 The stadium is in the South Philadelphia Sports Complex. It is accessible by the Broad Street Line subway.
 </p>
 <ul className="space-y-3 mb-8">
 <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
 <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
 <span className="font-bold text-slate-900 dark:text-white">Pro Tip:</span> Stay in Center City (Downtown).
 </li>
 <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
 <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
 Take the subway south to the match. Do not stay near the airport unless necessary.
 </li>
 </ul>
 <Link href="https://expedia.com/affiliates/hotel-search-philadelphia" target="_blank" className="inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-700">
 Check Philly Hotels <ArrowRight className="w-4 h-4 ml-1" />
 </Link>
 </div>

 <div className="p-8 rounded-3xl border border-slate-100 dark:border-white/5 hover:border-teal-200 dark:hover:border-teal-800 transition-colors">
 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Kansas City (Arrowhead Stadium)</h4>
 <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
 Arrowhead is isolated. There is very little public transport to the stadium.
 </p>
 <ul className="space-y-3 mb-8">
 <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
 <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
 <span className="font-bold text-slate-900 dark:text-white">Pro Tip:</span> Stay downtown or near the Power & Light District.
 </li>
 <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
 <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
 Book the official shuttle or rent a car (parking is expensive).
 </li>
 </ul>
 <Link href="https://expedia.com/affiliates/hotel-search-kansas-city" target="_blank" className="inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-700">
 Check KC Hotels <ArrowRight className="w-4 h-4 ml-1" />
 </Link>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section id="faq" className="scroll-mt-32">
 <div className="flex items-baseline gap-4 mb-12">
 <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">FAQ</span>
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Common Questions</h2>
 </div>
 
 <div className="space-y-4">
 <AccordionItem 
 question="What is the best way to travel between Group E cities?"
 answer="Split your travel: Use Amtrak for the Northeast leg (Philadelphia, NY/NJ). You MUST fly for the Central leg (Houston, Kansas City) and to reach Toronto. Driving between these regions is not feasible."
 isOpen={openFaqIndex === 0}
 onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
 />
 <AccordionItem 
 question="Is Philadelphia expensive during the World Cup?"
 answer="Moderate to High. While cheaper than NYC, Philadelphia hotel rates will surge. Look for hotels in University City or near the Airport for better value, but Center City offers the best fan experience."
 isOpen={openFaqIndex === 1}
 onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
 />
 <AccordionItem 
 question="Do I need a visa for Group E?"
 answer="Yes. You need a US Visa (or ESTA) for Philly/Houston/KC/NY and a Canadian ETA/Visa for Toronto. Ensure you have multi-entry permissions if moving back and forth."
 isOpen={openFaqIndex === 2}
 onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
 />
 </div>
 </section>

        {/* CTA Section */}
        <section className="mt-24 mb-12">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 dark:bg-white px-8 py-16 md:px-16 md:py-24 text-center">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white dark:text-slate-900 mb-6 tracking-tight">
                Start Your Odyssey
              </h2>
              <p className="text-lg md:text-xl text-slate-300 dark:text-slate-600 mb-10 leading-relaxed">
                Download our Group E planner with train schedules, stadium maps, and visa checklists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/world-cup-2026-groups" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-transparent border border-slate-700 dark:border-slate-200 text-white dark:text-slate-900 font-bold text-sm tracking-wide hover:bg-white/10 dark:hover:bg-slate-900/5 transition-colors">
                  View Other Groups
                </Link>
              </div>
            </div>
 
 {/* Decorative Gradients */}
 <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
 <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full bg-teal-500/20 blur-[100px]" />
 <div className="absolute -bottom-[50%] -right-[20%] w-[80%] h-[80%] rounded-full bg-blue-500/20 blur-[100px]" />
 </div>
 </div>
 </section>
 </section>
 </div>
 </div>
 </div>
 </main>
 </div>
 );
}









