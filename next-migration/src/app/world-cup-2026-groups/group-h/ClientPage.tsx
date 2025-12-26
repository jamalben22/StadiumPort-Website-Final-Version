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
  ShieldCheck
} from 'lucide-react';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors pr-8 tracking-tight">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-emerald-500 text-white rotate-180' : ' text-slate-500 group-hover:bg-emerald-500/10 group-hover:text-emerald-600'}`}>
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

export default function GroupHClientPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState('intro');

  const AffiliateButton = ({ href, text, icon: Icon = ArrowRight, variant = 'primary' }: { href: string, text: string, icon?: any, variant?: 'primary' | 'secondary' | 'outline' }) => {
    const baseClasses = "group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden";
    const variants = {
      primary: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.6)]",
      secondary: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xl",
      outline: "border-2 border-slate-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 text-slate-900 dark:text-white bg-transparent"
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
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] font-sans text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-[#F5F5F7] to-[#F5F5F7] dark:from-emerald-900/20 dark:via-[#0A0A0A] dark:to-[#0A0A0A]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F7] dark:from-[#0A0A0A] to-transparent" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-[0.15em] uppercase mb-8 animate-fade-in">
                <MapPin className="w-3 h-3" />
                Ultimate Travel Guide
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-slate-900 dark:text-white animate-fade-up">
                World Cup 2026 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Group H Strategy</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal mb-10 animate-fade-up delay-100">
                Three massive hubs. One relentless climate. From the neon pulse of Miami to the Southern heart of Atlanta and the Texan scale of Houston.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-200">
                <AffiliateButton 
                  href="/planner" 
                  text="Start Your Journey" 
                  variant="primary"
                />
                <button onClick={() => scrollToSection('strategy')} className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-transparent border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm tracking-wide hover:border-emerald-500 transition-colors">
                  Explore Strategy
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-8 animate-fade-up delay-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-500" /> 
                  Updated: June 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-500" /> 
                  12 min read
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
            <ChevronDown className="w-5 h-5 text-emerald-500" />
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
                          ? 'border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400' 
                          : 'border-transparent text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-12 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Planning a Trip?</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Get our free checklist for Group H travel.</p>
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
                    Group H is a test of endurance spread across the most humid regions of the United States.
                  </p>
                  <p className="text-lg leading-loose text-slate-600 dark:text-slate-300 mb-10">
                    This group is defined by the <strong className="text-slate-900 dark:text-white">"Southern Triangle"</strong>: Miami, Houston, and Atlanta. These cities are too far to drive and too humid to ignore.
                  </p>
                </div>

                <div className=" p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 mt-12">
                  <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-3 tracking-tight uppercase">
                    <Plane className="w-5 h-5" />
                    The Group H "Southern Triangle"
                  </h3>
                  <p className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                    Miami ✈️ Houston ✈️ Atlanta
                  </p>
                  <p className="text-base text-slate-500 dark:text-slate-400">
                    You are essentially flying between the hubs of American (MIA), United (IAH), and Delta (ATL). Book early or prepare for massive surges.
                  </p>
                </div>
              </section>

              {/* Section 1: Multi-City Travel Strategy */}
              <section id="strategy" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">01</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Multi-City Travel Strategy</h2>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-300 leading-loose mb-12 max-w-3xl">
                  Group H logistics are simple but expensive: you must fly. There is no viable train or bus alternative for these distances.
                </p>

                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">The Air Bridge (Hub-to-Hub)</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
                    Because these cities are major airline hubs, you have infinite options, but prices will spike the moment the draw is announced.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className=" p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                      <Plane className="w-8 h-8 text-emerald-500 mb-6" />
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">MIA to ATL</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">The busiest route in the South. 1h 55m flight time.</p>
                      <span className="inline-block px-3 py-1 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full">$120-250 USD</span>
                    </div>
                    <div className=" p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                      <Plane className="w-8 h-8 text-emerald-500 mb-6" />
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">IAH to ATL</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Connecting the Gulf to the South. 2h flight time.</p>
                      <span className="inline-block px-3 py-1 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full">$150-300 USD</span>
                    </div>
                    <div className=" p-8 rounded-3xl border border-transparent dark:border-slate-800 opacity-70 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 text-slate-400 mb-6 flex items-center justify-center font-bold border-2 border-slate-300 rounded-full text-[10px]">DRIVE</div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Rental Car</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Only for the brave. 10-15 hours through swamp and forest.</p>
                      <span className="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full">$80/day + Gas</span>
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">The Southern Schedule</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
                    The Southern Triangle cities are year-round destinations. Summer is "low season" for Miami but "peak season" for World Cup travel.
                  </p>

                  <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm ">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 dark:border-slate-800">
                          <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Route</th>
                          <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Flight Time</th>
                          <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Booking Window</th>
                          <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Est. Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Miami (MIA) → Houston (IAH)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">2h 35m</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">4 Months Out</td>
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">$180 - $350</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Atlanta (ATL) → Miami (MIA)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">1h 55m</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">3 Months Out</td>
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">$130 - $280</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Houston (IAH) → Atlanta (ATL)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">2h 05m</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">3 Months Out</td>
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">$160 - $320</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Affiliate Block: Flights */}
                  <div className="mt-12 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                          <Plane className="w-5 h-5 text-emerald-500" />
                          Secure Your Southern Flights
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Flight prices for June 2026 are expected to surge by 40%.</p>
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
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">02</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Accommodation Strategy</h2>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose max-w-3xl">
                  In the South, proximity to the stadium isn't always proximity to the fun. Here is where to base yourself in each city.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Miami */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Miami</h3>
                      <span className="px-3 py-1 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">High Cost</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Strategy: The Hollywood Bypass</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Stay:</strong> Hollywood or Fort Lauderdale for better value and easier stadium access via I-95.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Avoid:</strong> South Beach if you have a morning match. Traffic is brutal.</span>
                      </li>
                    </ul>
                    <AffiliateButton 
                      href="https://booking.com" 
                      text="Search Miami Hotels" 
                      variant="outline"
                    />
                  </div>

                  {/* Houston */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Houston</h3>
                      <span className="px-3 py-1 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Good Value</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Strategy: The Rail Line</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Stay:</strong> Near the METRORail Red Line (Medical Center or Museum District) for direct stadium access.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Pro Tip:</strong> Downtown hotels are plentiful but quiet on weekends.</span>
                      </li>
                    </ul>
                    <AffiliateButton 
                      href="https://booking.com" 
                      text="Search Houston Hotels" 
                      variant="outline"
                    />
                  </div>

                  {/* Atlanta */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Atlanta</h3>
                      <span className="px-3 py-1 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Mid-Range</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Strategy: Midtown Pulse</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Stay:</strong> Midtown for the best food and nightlife, connected via MARTA.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Stadium:</strong> Mercedes-Benz is walkable from Downtown hotels.</span>
                      </li>
                    </ul>
                    <AffiliateButton 
                      href="https://booking.com" 
                      text="Search Atlanta Hotels" 
                      variant="outline"
                    />
                  </div>
                </div>
              </section>

              {/* Section 3: Budget Breakdown */}
              <section id="budget" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">03</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group H Budget Breakdown</h2>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose">
                  Estimates are per person for a 12-day trip covering 3 group matches. The South is cheaper than the Northeast, but flight costs are mandatory.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {/* Economy */}
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:scale-[1.02] transition-transform duration-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Economy Strategy</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$3,200</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Suburban hotels, low-cost carriers (Spirit/Frontier), grocery meals, Cat 3 tickets.</p>
                  </div>

                  {/* Mid-Range */}
                  <div className="p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900 dark:bg-emerald-900/10 relative overflow-hidden transform md:-translate-y-4 shadow-xl shadow-emerald-900/5">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-widest">Recommended</div>
                    <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-4">Mid-Range Strategy</div>
                    <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 tracking-tighter">$5,500</div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">Downtown/Midtown hotels, major airlines (Delta/United), BBQ & Tacos, Cat 2 tickets.</p>
                  </div>

                  {/* Premium */}
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:scale-[1.02] transition-transform duration-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Premium Experience</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$9,500+</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Luxury suites in Brickell & Buckhead, First Class flights, private transport, Cat 1 hospitality.</p>
                  </div>
                </div>

                <div className=" rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
                    <CreditCard className="w-6 h-6 text-emerald-500" />
                    Money-Saving Hacks for Group H
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs flex-shrink-0">1</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">MARTA is your Friend:</strong> In Atlanta, the train from the airport to downtown is $2.50. An Uber will be $50+ and take twice as long.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs flex-shrink-0">2</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">Houston Tunnel System:</strong> Use the 6-mile underground tunnel system in Downtown Houston to move between hotels and food without hitting the 100°F heat.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs flex-shrink-0">3</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">Tri-Rail / Brightline:</strong> In Miami, don't Uber from the airport to the stadium area. Use the Tri-Rail or Brightline trains to save $60+.
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
                    <a href="#" className="flex-shrink-0 text-emerald-600 font-bold text-xs hover:text-emerald-500 transition-colors uppercase tracking-widest">View Plans &rarr;</a>
                  </div>
                </div>
              </section>

              {/* Section 4: Visa & Entry Requirements */}
              <section id="visas" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">04</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Visa & Entry Requirements</h2>
                </div>

                <div className="grid md:grid-cols-1 gap-8">
                  <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                    <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
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
                        Required for all Group H cities. Cost: $21 USD. Apply at least 72 hours before your first flight to Miami, Houston, or Atlanta.
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-slate-900 dark:text-white mb-1 font-bold">B1/B2 Visa</strong>
                        Required if not ESTA eligible. Apply immediately as interview wait times in South America and Europe can be extensive.
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-red-600 dark:text-red-400 mb-1 font-bold">Important</strong>
                        MIA and ATL have some of the longest customs wait times in the US. Allow at least 3 hours for any international-to-domestic connections.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5: Insider Tips */}
              <section id="insider" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">05</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Insider Knowledge</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-xl mb-6">❄️</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The AC Paradox</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      While it's 100°F outside, US stadiums (especially NRG and Mercedes-Benz) are kept at a frigid 68°F. You will actually need a light hoodie for the stadium, even if you're sweating in the parking lot.
                    </p>
                  </div>

                  <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-xl mb-6">🚗</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The "Spaghetti Junction"</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Atlanta's traffic is legendary. If you are staying in Buckhead and the match is at 7 PM, leave by 3:30 PM. The I-75/85 connector can come to a full stop for no reason at any time.
                    </p>
                  </div>

                  <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-xl mb-6">🍖</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The Culinary Divide</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Miami = Cuban/Caribbean. Houston = Tex-Mex & BBQ. Atlanta = Southern/Trap. Eat like a local to save money and enjoy the culture.
                    </p>
                  </div>

                  <div className=" p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-xl mb-6">⚡</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Afternoon Storms</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      In Miami and Houston, a massive thunderstorm occurs almost every afternoon at 4 PM for exactly 30 minutes. Do not panic; it will pass, but it will make the humidity even worse.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Essential Gear */}
              <section id="packing" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">06</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group H Packing Essentials</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">👕</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Linen Everything</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Cotton will soak through in minutes.</p>
                    <a href="#" className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧴</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">SPF 50+</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">The Southern sun is direct and brutal.</p>
                    <a href="#" className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔋</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Power Bank</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">High heat drains batteries faster.</p>
                    <a href="#" className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🥤</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Hydration Tabs</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Electrolytes are mandatory in the humidity.</p>
                    <a href="#" className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors">Shop Now</a>
                  </div>
                </div>
              </section>

              {/* Section 7: FAQ */}
              <section id="faq" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  <AccordionItem 
                    question="Which Group H stadium is the best?"
                    answer="Mercedes-Benz Stadium in Atlanta is widely considered the finest stadium in the US. Its retractable roof, 360-degree halo board, and fan-first pricing ($2 hot dogs!) make it the group's crown jewel."
                    isOpen={openFaqIndex === 0}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  />
                  <AccordionItem 
                    question="Can I drive between Miami and Atlanta?"
                    answer="It's a 10-hour drive through very repetitive scenery. Unless you are a group of four sharing the cost, the price of gas and a one-way rental drop-off fee will be more expensive than a flight."
                    isOpen={openFaqIndex === 1}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  />
                  <AccordionItem 
                    question="Is it safe to walk in Houston and Atlanta?"
                    answer="Both cities are very car-centric. While 'Downtown' areas are walkable, moving between neighborhoods (like Downtown to Midtown in ATL) is best done via MARTA or Uber. Do not wander into non-tourist areas at night."
                    isOpen={openFaqIndex === 2}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  />
                  <AccordionItem 
                    question="What should I wear to the matches?"
                    answer="Light-colored, moisture-wicking fabrics. For Miami (Hard Rock), a hat is essential as the sun is fierce until it sets. For Houston and Atlanta, remember the stadium will be cold inside despite the heat outside."
                    isOpen={openFaqIndex === 3}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                  />
                </div>
              </section>

              {/* Final CTA */}
              <div className="relative overflow-hidden rounded-[3rem] text-white p-12 md:p-20 text-center shadow-2xl shadow-slate-900/20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-slate-900 to-slate-900"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Master the South?</h2>
                  <p className="text-slate-300 mb-12 text-lg leading-relaxed font-light">
                    From the neon pulse of Miami to the Texan scale of Houston, Group H is a test of endurance. Start planning your logistics now.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/planner" className="inline-flex items-center justify-center bg-white text-slate-900 font-bold py-4 px-8 rounded-2xl transition-all hover:scale-105 text-base">
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
