'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ChevronDown, Clock, Calendar, MapPin, ArrowRight, Plane, Car, CreditCard, AlertTriangle, ExternalLink, Sun, CloudRain, Camera } from 'lucide-react';

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

export default function GroupDClientPage() {
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
            <Breadcrumb items={[{ label: 'Groups', href: '/world-cup-2026-groups' }, { label: 'Group D', href: '/world-cup-2026-groups/group-d' }]} />

            <div className="max-w-4xl">
 <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-slate-900 dark:text-white animate-fade-up">
 World Cup 2026 <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-300">Group D Strategy</span>
 </h1>
 
 <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal mb-10 animate-fade-up delay-100">
 Tech giants, Hollywood dreams, and the Pacific Ocean. Group D connects the three cultural capitals of the American West into one cinematic journey.
 </p>
 
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-200">
              <button onClick={() => scrollToSection('strategy')} className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-transparent border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm tracking-wide hover:border-amber-500 transition-colors">
                Explore Strategy
              </button>
            </div>
 
 <div className="flex flex-wrap items-center gap-8 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800 pt-8 animate-fade-up delay-300">
 <div className="flex items-center gap-2">
 <Calendar className="w-4 h-4 text-amber-500" /> 
 Updated: June 2025
 </div>
 <div className="flex items-center gap-2">
 <Clock className="w-4 h-4 text-amber-500" /> 
 15 min read
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
 { id: 'strategy', label: 'West Coast Logistics' },
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
 Group D is the "Bucket List" group. It offers the most beautiful landscapes and the most modern stadiums, but it punishes the unprepared traveler with brutal traffic and deceptive distances.
 </p>
 <p className="text-lg leading-loose text-slate-600 dark:text-slate-300 mb-10">
 The route covers the Pacific Northwest (Seattle), the Bay Area (SF/Santa Clara), and Southern California (Los Angeles). These regions operate like separate countries with unique climates, transit systems, and vibes.
 </p>
 </div>
 
 <div className=" p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-200 dark:border-slate-800 mt-12">
 <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-6 flex items-center gap-3 tracking-tight uppercase">
 <Plane className="w-5 h-5" />
 The Group D "Golden Strategy"
 </h3>
 <p className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
 Fly the Gap, Drive the Coast.
 </p>
 <p className="text-base text-slate-500 dark:text-slate-400">
 Do <strong className="text-slate-900 dark:text-white">NOT</strong> attempt to drive Seattle to SF for a match (13+ hours). Fly between cities. Only rent a car for the SF-to-LA leg via Highway 1 if you have 3+ spare days to enjoy the views.
 </p>
 </div>
 </section>

 {/* Section 1: Multi-City Travel Strategy */}
 <section id="strategy" className="scroll-mt-32">
 <div className="flex items-baseline gap-4 mb-12">
 <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">01</span>
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">West Coast Logistics</h2>
 </div>
 
 <p className="text-lg text-slate-600 dark:text-slate-300 leading-loose mb-12 max-w-3xl">
 The West Coast is massive. European fans often underestimate the scale. Seattle to Los Angeles is the same distance as London to Rome.
 </p>
 
 <div className="mb-16">
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">The Air Corridor (Primary Mode)</h3>
 <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
 This is one of the busiest air corridors in the world. Flights are frequent, reliable, and relatively short.
 </p>
 
 <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-200 dark:border-slate-800 shadow-sm ">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="border-b border-slate-100 dark:border-slate-200 dark:border-slate-800">
 <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Route</th>
 <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Flight Time</th>
 <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Best Airport</th>
 <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Est. Price</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
 <tr>
 <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Seattle (SEA) → Bay Area</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">2h 05m</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">SJC (San Jose)</td>
 <td className="p-6 font-bold text-amber-600 dark:text-amber-400 text-base">$120 - $200</td>
 </tr>
 <tr>
 <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Bay Area → Los Angeles</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">1h 20m</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">BUR (Burbank)</td>
 <td className="p-6 font-bold text-amber-600 dark:text-amber-400 text-base">$80 - $150</td>
 </tr>
 <tr>
 <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Seattle (SEA) → Los Angeles</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">2h 45m</td>
 <td className="p-6 text-slate-500 hidden md:table-cell text-sm">LAX or SNA</td>
 <td className="p-6 font-bold text-amber-600 dark:text-amber-400 text-base">$150 - $250</td>
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
 Secure Your West Coast Flights
 </h4>
 <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
 Prices for SEA-LAX routes will spike 6 months before kickoff. Book early to save.
 </p>
 </div>
              <AffiliateButton 
                href="https://expedia.com/affiliates/flight-search-stadiumport" 
                text="Find Flights" 
                icon={ExternalLink}
                variant="primary"
              />
 </div>
 </div>
 </div>

 {/* Section 2: Accommodation */}
 <section id="accommodation" className="scroll-mt-32 mb-24">
 <div className="flex items-baseline gap-4 mb-12">
 <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">02</span>
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Accommodation Strategy</h2>
 </div>
 <p className="text-lg text-slate-600 dark:text-slate-300 leading-loose mb-12 max-w-3xl">
 Where you stay is critical in Group D. The distances between city centers and stadiums can be vast, especially in the Bay Area and LA.
 </p>
 
 <div className="grid md:grid-cols-2 gap-8">
 <div className="p-8 rounded-3xl border border-slate-100 dark:border-white/5 hover:border-amber-200 dark:hover:border-amber-800 transition-colors">
 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Bay Area (Levi's Stadium)</h4>
 <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
 Levi's Stadium is in Santa Clara, <span className="font-bold text-amber-600">45 miles south of SF</span>. Staying in San Francisco means a 90-minute commute each way.
 </p>
 <ul className="space-y-3 mb-8">
 <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
 <span className="font-bold text-slate-900 dark:text-white">Pro Tip:</span> Stay in San Jose or Santa Clara for match days.
 </li>
 <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
 San Jose is cheaper and closer to the stadium (15 mins).
 </li>
 </ul>
              <AffiliateButton 
                href="https://expedia.com/affiliates/hotel-search-santa-clara" 
                text="Check Santa Clara Hotels" 
                variant="outline"
              />
            </div>

            <div className="p-8 rounded-3xl border border-slate-100 dark:border-white/5 hover:border-amber-200 dark:hover:border-amber-800 transition-colors">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Los Angeles (SoFi Stadium)</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                LA is decentralized. SoFi Stadium is in Inglewood, near LAX. It is not near Hollywood or the beach.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span className="font-bold text-slate-900 dark:text-white">Pro Tip:</span> Stay near LAX/Inglewood for convenience.
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  Santa Monica is great for vibes but expensive and far (45+ mins traffic).
                </li>
              </ul>
              <AffiliateButton 
                href="https://expedia.com/affiliates/hotel-search-inglewood" 
                text="Check Inglewood Hotels" 
                variant="outline"
              />
            </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section id="faq" className="scroll-mt-32">
 <div className="flex items-baseline gap-4 mb-12">
 <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">FAQ</span>
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Common Questions</h2>
 </div>
 
 <div className="space-y-4">
 <AccordionItem 
 question="What is the best way to travel between Seattle, SF, and LA?"
 answer="Flying is the only practical option for match-to-match travel. Seattle to LA is a 2.5-hour flight or a 17+ hour drive. Only drive the Pacific Coast Highway if you have 3+ spare days between matches."
 isOpen={openFaqIndex === 0}
 onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
 />
 <AccordionItem 
 question="Where should I stay for matches at Levi's Stadium?"
 answer="Stay in San Jose or Santa Clara for match days. San Francisco is 45 miles (60-90 mins) away. The commute from SF to the stadium on a weeknight is brutal."
 isOpen={openFaqIndex === 1}
 onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
 />
 <AccordionItem 
 question="Is public transport good in Group D cities?"
 answer="Seattle has excellent light rail. The Bay Area has BART/Caltrain (decent but complex). Los Angeles public transport is improving but still limited; expect to use Uber/Lyft often."
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
 Ready for the West Coast?
 </h2>
 <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 dark:text-slate-600 mb-10 leading-relaxed">
 Get our complete Group D travel checklist, including stadium maps, best photo spots, and hidden food gems.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link href="/planner" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 dark:text-white font-bold text-sm tracking-wide transition-all shadow-xl shadow-amber-500/20">
 Get Free Checklist
 </Link>
 <Link href="/world-cup-2026-groups" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-transparent border border-slate-700 dark:border-slate-200 text-white dark:text-slate-900 font-bold text-sm tracking-wide hover:/10 dark:hover:/5 transition-colors">
 View Other Groups
 </Link>
 </div>
 </div>
 
 {/* Decorative Gradients */}
 <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
 <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full bg-amber-500/20 blur-[100px]" />
 <div className="absolute -bottom-[50%] -right-[20%] w-[80%] h-[80%] rounded-full bg-indigo-500/20 blur-[100px]" />
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












