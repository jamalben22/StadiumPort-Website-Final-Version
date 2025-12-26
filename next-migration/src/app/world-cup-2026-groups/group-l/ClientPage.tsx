'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
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
  Shield,
  Briefcase,
  AlertTriangle
} from 'lucide-react';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors pr-8 tracking-tight">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-sky-500 text-white rotate-180' : ' text-slate-500 group-hover:bg-sky-500/10 group-hover:text-sky-600'}`}>
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

export default function GroupLClientPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState('intro');

  const AffiliateButton = ({ href, text, icon: Icon = ArrowRight, variant = 'primary' }: { href: string, text: string, icon?: any, variant?: 'primary' | 'secondary' | 'outline' }) => {
    const baseClasses = "group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden";
    const variants = {
      primary: "bg-sky-600 text-white hover:bg-sky-500 shadow-[0_10px_40px_-10px_rgba(14,165,233,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.6)]",
      secondary: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xl",
      outline: "border-2 border-slate-200 dark:border-white/10 hover:border-sky-500 dark:hover:border-sky-500 text-slate-900 dark:text-white bg-transparent"
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
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] font-sans text-slate-900 dark:text-slate-100 selection:bg-sky-500/30">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-500/10 via-[#F5F5F7] to-[#F5F5F7] dark:from-sky-900/20 dark:via-[#0A0A0A] dark:to-[#0A0A0A]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F7] dark:from-[#0A0A0A] to-transparent" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm text-sky-700 dark:text-sky-400 text-xs font-bold tracking-[0.15em] uppercase mb-8 animate-fade-in">
                <MapPin className="w-3 h-3" />
                Ultimate Travel Guide
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-slate-900 dark:text-white animate-fade-up">
                World Cup 2026 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500 dark:from-sky-400 dark:to-blue-300">Group L Strategy</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal mb-10 animate-fade-up delay-100">
                Five massive metros. Two countries. From the skyscrapers of Toronto to the bright lights of Dallas, Group L is the tournament's urban heavyweight.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-200">
                <AffiliateButton 
                  href="/planner" 
                  text="Start Your Journey" 
                  variant="primary"
                />
                <button onClick={() => scrollToSection('strategy')} className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-transparent border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm tracking-wide hover:border-sky-500 transition-colors">
                  Explore Strategy
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-8 animate-fade-up delay-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-500" /> 
                  Updated: June 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-500" /> 
                  15 min read
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
            <ChevronDown className="w-5 h-5 text-sky-500" />
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
                          ? 'border-sky-600 dark:border-sky-400 text-sky-600 dark:text-sky-400' 
                          : 'border-transparent text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                
                <div className="mt-12 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Planning a Trip?</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Get our free checklist for Group L travel.</p>
                  <AffiliateButton 
                    href="/planner" 
                    text="Start Planner" 
                    variant="secondary"
                  />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-24">
              
              {/* Introduction */}
              <section id="intro" className="max-w-3xl">
                <div className="prose prose-xl dark:prose-invert max-w-none">
                  <p className="text-2xl md:text-3xl leading-relaxed font-light text-slate-900 dark:text-white mb-10">
                    Group L is the heavyweight division of the tournament—covering the financial capitals and historic hearts of North America.
                  </p>
                  <p className="text-lg leading-loose text-slate-600 dark:text-slate-300 mb-10">
                    The group moves through the <strong className="text-slate-900 dark:text-white">"Northeast Corridor"</strong> (Boston, NY/NJ, Philadelphia), hops the border to <strong className="text-slate-900 dark:text-white">Toronto</strong>, and makes a massive jump to <strong className="text-slate-900 dark:text-white">Dallas</strong>.
                  </p>
                </div>
                
                <div className=" p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 mt-12">
                  <h3 className="text-lg font-bold text-sky-600 dark:text-sky-400 mb-6 flex items-center gap-3 tracking-tight uppercase">
                    <Train className="w-5 h-5" />
                    The Group L "Giant Loop"
                  </h3>
                  <p className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                    Toronto ✈️ Boston 🚄 NYC 🚄 Philly ✈️ Dallas
                  </p>
                  <p className="text-base text-slate-500 dark:text-slate-400">
                    Fly between the international hubs of Toronto and Dallas, but master the Amtrak Acela for the high-density cities in between.
                  </p>
                </div>
              </section>

              {/* Section 1: Multi-City Travel Strategy */}
              <section id="strategy" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-sky-500 font-mono text-sm font-bold tracking-widest uppercase">01</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Multi-City Travel Strategy</h2>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-loose mb-12 max-w-3xl">
                  Group L requires a mix of high-speed rail and transcontinental flights. You will be dealing with the busiest airspace in the world and the US-Canada border.
                </p>
                
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">The "Northeast Cluster" (Rail is King)</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
                    For the matches in Boston, NYC, and Philadelphia, do not fly. The time spent at security and traveling from airports (JFK, EWR, Logan) far exceeds the train time.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className=" p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                      <Train className="w-8 h-8 text-sky-500 mb-6" />
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Amtrak Acela</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">The only high-speed rail in the US. NYC to Philly in 1h 10m.</p>
                      <span className="inline-block px-3 py-1 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 text-xs font-bold rounded-full">$120-220 USD</span>
                    </div>
                    <div className=" p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                      <Train className="w-8 h-8 text-sky-500 mb-6" />
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Northeast Regional</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Standard service. Reliable and frequent. Book early.</p>
                      <span className="inline-block px-3 py-1 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 text-xs font-bold rounded-full">$40-90 USD</span>
                    </div>
                    <div className=" p-8 rounded-3xl border border-transparent dark:border-slate-800 opacity-70 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 text-slate-400 mb-6 flex items-center justify-center font-bold border-2 border-slate-300 rounded-full text-[10px]">UP</div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Toronto UP Express</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Dedicated airport-to-city rail. Pearson to Union in 25 mins.</p>
                      <span className="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full">$12 CAD</span>
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">The "Texas Jump" (Long Haul Flights)</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
                    Dallas is the outlier. Driving from Philadelphia to Dallas takes 22+ hours. You must fly to/from DFW or Love Field.
                  </p>
                  
                  <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm ">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 dark:border-slate-800">
                          <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Route</th>
                          <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Flight Time</th>
                          <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Carrier Hubs</th>
                          <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Est. Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Toronto (YYZ) → NYC (JFK/LGA)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">1h 45m</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">Air Canada / Delta</td>
                          <td className="p-6 font-bold text-sky-600 dark:text-sky-400 text-base">$180 - $350</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">NYC (EWR/LGA) → Dallas (DFW)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">3h 50m</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">American / United</td>
                          <td className="p-6 font-bold text-sky-600 dark:text-sky-400 text-base">$250 - $450</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Philadelphia (PHL) → Dallas (DFW)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">3h 25m</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">American</td>
                          <td className="p-6 font-bold text-sky-600 dark:text-sky-400 text-base">$220 - $400</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Affiliate Block: Flights */}
                  <div className="mt-12 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                          <Plane className="w-5 h-5 text-sky-500" />
                          Secure Your Group L Flights
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Toronto to Dallas is a high-demand route. Book as soon as the bracket is set.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <AffiliateButton 
                        href="https://skyscanner.com" 
                        text="Check Skyscanner Deals" 
                        icon={ArrowRight}
                        variant="primary"
                      />
                      <AffiliateButton 
                        href="https://expedia.com" 
                        text="Compare on Expedia" 
                        icon={ExternalLink}
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
                  <span className="text-sky-500 font-mono text-sm font-bold tracking-widest uppercase">02</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Accommodation Strategy</h2>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose max-w-3xl">
                  Toronto and NYC are the price leaders. Dallas requires positioning for AT&T Stadium. Boston and Philly offer historic charm at a premium.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* NYC */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-sky-500/30 dark:hover:border-sky-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-sky-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">New York / NJ</h3>
                      <span className="px-3 py-1 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Extreme Cost</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 10 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                        <span><strong>Best Area:</strong> Midtown Manhattan (Central transit hub)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                        <span><strong>Stadium Access:</strong> Secaucus Junction (Train to MetLife)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                        <span><strong>Warning:</strong> Manhattan hotel prices will spike to $500+ during match weeks.</span>
                      </li>
                    </ul>
                    <AffiliateButton 
                      href="https://booking.com" 
                      text="Search NYC Hotels" 
                      variant="outline"
                    />
                  </div>

                  {/* Toronto */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-sky-500/30 dark:hover:border-sky-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-sky-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Toronto</h3>
                      <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Safe & Diverse</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 8 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                        <span><strong>Best Area:</strong> Entertainment District (Walk to BMO Field)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                        <span><strong>Vibe:</strong> Yorkville for luxury; West Queen West for trend.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                        <span><strong>Note:</strong> Toronto is extremely safe but traffic is among the worst in North America. Stick to the TTC.</span>
                      </li>
                    </ul>
                    <AffiliateButton 
                      href="https://booking.com" 
                      text="Search Toronto Hotels" 
                      variant="outline"
                    />
                  </div>

                  {/* Dallas */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-sky-500/30 dark:hover:border-sky-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-sky-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Dallas / Arlington</h3>
                      <span className="px-3 py-1 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Sprawl Titan</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 9 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                        <span><strong>Best Area:</strong> Uptown Dallas (Nightlife and fans)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                        <span><strong>Stadium Access:</strong> Arlington (Stay here if you only care about the match)</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-sky-600 font-bold text-xs hover:text-sky-700 transition-all group-hover:translate-x-2 uppercase tracking-widest">
                      Search Dallas Hotels <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Boston / Philly */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-sky-500/30 dark:hover:border-sky-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-sky-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Boston & Philly</h3>
                      <span className="px-3 py-1 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Historic Hubs</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Walkable & Classic</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                        <span><strong>Philly:</strong> Stay in Center City for the best food and subway access.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                        <span><strong>Boston:</strong> Stay in Back Bay; take the Patriot Train to Foxborough.</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-sky-600 font-bold text-xs hover:text-sky-700 transition-all group-hover:translate-x-2 uppercase tracking-widest">
                      Compare Northeast Hotels <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Section 3: Budget Breakdown */}
              <section id="budget" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-sky-500 font-mono text-sm font-bold tracking-widest uppercase">03</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group L Budget Breakdown</h2>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose">
                  Estimates are per person for a 14-day trip covering 3-4 matches. Group L is a high-cost route due to Toronto and NYC dominance.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {/* Economy */}
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:scale-[1.02] transition-transform duration-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Economy Strategy</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$3,800</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Hostels in NYC/Toronto, Megabus between US cities, shared Airbnb in Dallas.</p>
                  </div>
                  
                  {/* Mid-Range */}
                  <div className="p-8 rounded-3xl border border-sky-100 dark:border-sky-900 dark:bg-sky-900/10 relative overflow-hidden transform md:-translate-y-4 shadow-xl shadow-sky-900/5">
                    <div className="absolute top-0 right-0 bg-sky-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-widest">Recommended</div>
                    <div className="text-[10px] font-bold text-sky-700 dark:text-sky-400 uppercase tracking-widest mb-4">Mid-Range Strategy</div>
                    <div className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-4 tracking-tighter">$6,500</div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">Standard 3-star hotels, Amtrak Acela, mid-tier flights to Dallas, dining out.</p>
                  </div>
                  
                  {/* Premium */}
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:scale-[1.02] transition-transform duration-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Premium Experience</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$11,000+</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Luxury stays in Yorkville & Manhattan, Business Class flights, VIP match hospitality.</p>
                  </div>
                </div>

                <div className=" rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
                    <CreditCard className="w-6 h-6 text-sky-500" />
                    Money-Saving Hacks for Group L
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold text-xs flex-shrink-0">1</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">The UP Express Secret:</strong> Don't Uber from Toronto Pearson (YYZ). The UP Express train is $12, takes 25 minutes, and avoids the 401 highway gridlock.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold text-xs flex-shrink-0">2</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">Book Amtrak Saver Fares:</strong> Amtrak tickets for the Northeast Corridor open 11 months out. Booking early can save you $100 per leg compared to walk-up rates.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold text-xs flex-shrink-0">3</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">Philly's Value:</strong> Philadelphia is significantly cheaper than NYC for food and hotels. Use it as a base for a few days to offset the Manhattan costs.
                      </p>
                    </li>
                  </ul>
                  
                  {/* eSIM Affiliate */}
                  <div className="mt-10 flex items-center gap-6 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <div className="w-12 h-12 rounded-xl dark:bg-slate-700 flex items-center justify-center text-2xl shadow-sm">📱</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">North America Data</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Get an Airalo regional eSIM for seamless data in USA & Canada.</p>
                    </div>
                    <a href="#" className="flex-shrink-0 text-sky-600 font-bold text-xs hover:text-sky-500 transition-colors uppercase tracking-widest">View Plans &rarr;</a>
                  </div>
                </div>
              </section>

              {/* Section 4: Visa & Entry Requirements */}
              <section id="visas" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-sky-500 font-mono text-sm font-bold tracking-widest uppercase">04</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Visa & Entry Requirements</h2>
                </div>
                
                <div className="grid md:grid-cols-1 gap-8">
                  <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                    <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <Shield className="w-6 h-6 text-sky-500" />
                      The Dual-Country Border
                    </h3>
                    <div className="grid md:grid-cols-2 gap-12">
                      <ul className="space-y-6">
                        <li className="text-sm text-slate-600 dark:text-slate-300">
                          <strong className="block text-slate-900 dark:text-white mb-1 font-bold">🇺🇸 USA: ESTA / B1 Visa</strong>
                          Required for all international visitors. ESTA is for Visa Waiver countries ($21). B1/B2 requires an embassy interview.
                        </li>
                        <li className="text-sm text-slate-600 dark:text-slate-300">
                          <strong className="block text-red-600 dark:text-red-400 mb-1 font-bold">Critical</strong>
                          Passport must be valid for 6 months beyond stay.
                        </li>
                      </ul>
                      <ul className="space-y-6">
                        <li className="text-sm text-slate-600 dark:text-slate-300">
                          <strong className="block text-slate-900 dark:text-white mb-1 font-bold">🇨🇦 CANADA: eTA / Visa</strong>
                          Required for Toronto. eTA is $7 CAD for most flyers. If arriving by train/bus from the US, rules differ. Check your eligibility.
                        </li>
                        <li className="text-sm text-slate-600 dark:text-slate-300 flex gap-3 items-start p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-900/30">
                          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                          <span className="text-xs text-amber-800 dark:text-amber-200 font-medium leading-relaxed">Canada has strict entry rules regarding past criminal records (including minor DUIs). Research this early.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Insider Tips */}
              <section id="insider" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-sky-500 font-mono text-sm font-bold tracking-widest uppercase">05</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Insider Knowledge</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-xl mb-6">🍁</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Toronto is Cashless</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      You almost never need physical Canadian dollars in Toronto. Tap-to-pay is universal, even on the TTC (subway/streetcars). Use a no-FX fee credit card.
                    </p>
                  </div>
                  
                  <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-xl mb-6">☀️</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The Dallas Heat Shield</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Dallas in June is punishingly hot (38°C+). AT&T Stadium is indoors and cool, but the walk from parking lots is long. Hydrate 24 hours before match day.
                    </p>
                  </div>
                  
                  <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl dark:bg-sky-500/10 flex items-center justify-center text-xl mb-6">🚆</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The "Patriot Train"</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Gillette Stadium (Boston) is not in Boston. It's in Foxborough. Do not Uber (it will cost $150+). Buy a $20 round-trip ticket for the dedicated event train from South Station.
                    </p>
                  </div>
                  
                  <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl dark:bg-amber-500/10 flex items-center justify-center text-xl mb-6">🏟️</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Philly's Sports Complex</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Philadelphia's stadium is part of a massive complex with three other arenas. The tailgating culture here is intense. Arrive 4 hours early to experience it.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Essential Gear */}
              <section id="packing" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-sky-500 font-mono text-sm font-bold tracking-widest uppercase">06</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group L Packing Essentials</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:border-sky-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-sky-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">👟</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Walking Shoes</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">You will walk 10+ miles in NYC.</p>
                    <a href="#" className="text-sky-600 text-[10px] font-bold uppercase tracking-widest hover:text-sky-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:border-sky-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-sky-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧥</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Light Jacket</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">For the Toronto lake breeze.</p>
                    <a href="#" className="text-sky-600 text-[10px] font-bold uppercase tracking-widest hover:text-sky-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:border-sky-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-sky-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🛂</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Passport Wallet</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Essential for border crossings.</p>
                    <a href="#" className="text-sky-600 text-[10px] font-bold uppercase tracking-widest hover:text-sky-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:border-sky-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-sky-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔋</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Power Bank</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Crucial for long Amtrak days.</p>
                    <a href="#" className="text-sky-600 text-[10px] font-bold uppercase tracking-widest hover:text-sky-500 transition-colors">Shop Now</a>
                  </div>
                </div>
              </section>

              {/* Section 7: FAQ */}
              <section id="faq" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  <AccordionItem 
                    question="How long does it take to cross the border?"
                    answer={<>If flying from Toronto to NYC, you will go through <strong>US Pre-clearance</strong> at Toronto Pearson. This means you clear US customs <em>before</em> you fly. Arrive 3 hours early. If taking a bus/train, it can take 1-2 hours at the land border.</>}
                    isOpen={openFaqIndex === 0}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  />
                  <AccordionItem 
                    question="Which Group L city is the best for fans?"
                    answer={<><strong>Philadelphia</strong> and <strong>Dallas</strong> offer the most cohesive fan experiences. Philly's sports complex is a giant party, while Dallas's AT&T Stadium is the most impressive venue in the world. Toronto's downtown energy will also be unmatched.</>}
                    isOpen={openFaqIndex === 1}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  />
                  <AccordionItem 
                    question="Is it possible to drive the whole route?"
                    answer={<>Technically yes, but <strong>highly discouraged</strong>. Toronto to Dallas is a 20-hour drive through the Midwest. Toronto to NYC is 8-10 hours. Your time is better spent in the cities than on the I-95 or I-40 highways.</>}
                    isOpen={openFaqIndex === 2}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  />
                  <AccordionItem 
                    question="What is the weather like in June?"
                    answer={<>Variable. <strong>Toronto and Boston</strong> will be pleasant (22-26°C), <strong>NYC and Philly</strong> will be humid (28-32°C), and <strong>Dallas</strong> will be extremely hot (35-40°C). Pack for all three climates.</>}
                    isOpen={openFaqIndex === 3}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                  />
                </div>
              </section>

              {/* Final CTA */}
              <div className="relative overflow-hidden rounded-[3rem] text-white p-12 md:p-20 text-center shadow-2xl shadow-slate-900/20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-500/20 via-slate-900 to-slate-900"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready for the Urban Challenge?</h2>
                  <p className="text-slate-300 mb-12 text-lg leading-relaxed font-light">
                    From the Great North to the Heart of Texas, Group L is a journey across the giants of North America. Secure your logistics today.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/planner" className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:scale-105 text-base">
                      Start My Trip Plan
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
