'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Car,
  Sun,
  Wind
} from 'lucide-react';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors pr-8 tracking-tight">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-emerald-500 text-slate-900 dark:text-white rotate-180' : ' text-slate-500 group-hover:bg-emerald-500/10 group-hover:text-emerald-600'}`}>
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

export default function GroupIClientPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState('intro');

  const AffiliateButton = ({ href, text, icon: Icon = ArrowRight, variant = 'primary' }: { href: string, text: string, icon?: any, variant?: 'primary' | 'secondary' | 'outline' }) => {
    const baseClasses = "group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden";
    const variants = {
      primary: "bg-emerald-600 text-slate-900 dark:text-white hover:bg-emerald-500 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.6)]",
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
           <Breadcrumb items={[{ label: 'Groups', href: '/world-cup-2026-groups' }, { label: 'Group I', href: '/world-cup-2026-groups/group-i' }]} />

           <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-slate-900 dark:text-white animate-fade-up">
                World Cup 2026 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Group I Strategy</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal mb-10 animate-fade-up delay-100">
                Two icons. One state. From the tech-hills of San Francisco to the cinematic sprawl of Los Angeles, Group I is California's ultimate football showcase.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-200">
                <button onClick={() => scrollToSection('strategy')} className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-transparent border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm tracking-wide hover:border-emerald-500 transition-colors">
                  Explore Strategy
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800 pt-8 animate-fade-up delay-300">
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
                          ? 'border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400' 
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
                    Group I is the California showcase, requiring a balance between high-tech logistics in the North and sprawling celebrity culture in the South.
                  </p>
                  <p className="text-lg leading-loose text-slate-600 dark:text-slate-300 mb-10">
                    The group is anchored by <strong className="text-slate-900 dark:text-white">Levi's Stadium</strong> in the San Francisco Bay Area and <strong className="text-slate-900 dark:text-white">SoFi Stadium</strong> in Los Angeles.
                  </p>
                </div>

                <div className=" p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-200 dark:border-slate-800 mt-12">
                  <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-3 tracking-tight uppercase">
                    <Car className="w-5 h-5" />
                    The California Corridor
                  </h3>
                  <p className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                    San Francisco ✈️ San Jose 🚗 Los Angeles
                  </p>
                  <p className="text-base text-slate-500 dark:text-slate-400">
                    Fly between the Bay Area and LA for speed. If you have 48 hours to spare, drive the Pacific Coast Highway for the tournament's best road trip.
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
                  California is vast. Group I requires moving between Northern and Southern California, two regions separated by 400 miles of diverse terrain.
                </p>
                
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Inter-City Logistics (SF to LA)</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
                    Do not underestimate the distance. A "quick drive" from San Francisco to Los Angeles takes 6 hours via the boring I-5 or 10 hours via the scenic coast.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className=" p-8 rounded-3xl border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                      <Plane className="w-8 h-8 text-emerald-500 mb-6" />
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Shuttle Flights</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">SFO/SJC to LAX/BUR. 1h 15m air time. Multiple carriers.</p>
                      <span className="inline-block px-3 py-1 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full">$80-150 USD</span>
                    </div>
                    <div className=" p-8 rounded-3xl border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                      <Car className="w-8 h-8 text-emerald-500 mb-6" />
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Rental Car (PCH)</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">The scenic route. Hwy 1. Best with a 2-day itinerary.</p>
                      <span className="inline-block px-3 py-1 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full">$60-120/day</span>
                    </div>
                    <div className=" p-8 rounded-3xl border border-transparent dark:border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100 transition-opacity duration-300">
                      <Train className="w-8 h-8 text-slate-400 mb-6" />
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Coast Starlight</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Incredible views, but notoriously slow. 12+ hours.</p>
                      <span className="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full">$50-90 USD</span>
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">California Flight Grid</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
                    With three airports in the Bay Area and five in Greater LA, choosing the right hub saves hours of ground traffic.
                  </p>
                  
                  <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-200 dark:border-slate-800 shadow-sm ">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 dark:border-slate-200 dark:border-slate-800">
                          <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Route</th>
                          <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Best Hub</th>
                          <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Transit to Stadium</th>
                          <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Est. Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">To Levi's Stadium</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">San Jose (SJC)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">15 min Uber</td>
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">$90 - $180</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">To SoFi Stadium</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">LAX</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">20 min Shuttle</td>
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">$80 - $150</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Scenic Entry</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">San Francisco (SFO)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">60 min Caltrain</td>
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">$120 - $220</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Affiliate Block: Flights */}
                  <div className="mt-12 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                          <Plane className="w-5 h-5 text-emerald-500" />
                          Book Your Cali Corridor Flights
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">West Coast shuttles are high-frequency but fill up fast during match weeks.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <AffiliateButton 
                        href="https://skyscanner.com" 
                        text="Check West Coast Deals" 
                        icon={ArrowRight}
                        variant="primary"
                      />
                      <AffiliateButton 
                        href="https://expedia.com" 
                        text="Compare Flight Hubs" 
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
                  San Francisco is compact and hilly. Los Angeles is a series of suburbs connected by gridlock. Positioning is the difference between a 20-minute trip and a 2-hour nightmare.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* SF / Bay Area */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">SF / Bay Area</h3>
                      <span className="px-3 py-1 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Premium Cost</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 9 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Best Area:</strong> Santa Clara or San Jose (Direct stadium access)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Stadium Access:</strong> Walkable from Great America hotels</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                        <span><strong>Warning:</strong> Staying in SF Proper means a 1-hour train ride to the match.</span>
                      </li>
                    </ul>
                    <AffiliateButton 
                      href="https://booking.com" 
                      text="Search Bay Area Hotels" 
                      variant="outline"
                    />
                  </div>

                  {/* Los Angeles */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Los Angeles</h3>
                      <span className="px-3 py-1 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">High Traffic</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 7 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Best Area:</strong> Santa Monica or El Segundo (Near beach/airport)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Stadium Access:</strong> Inglewood (Uber or Stadium Shuttle)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                        <span><strong>Warning:</strong> Hollywood is 90 mins from the stadium in match-day traffic.</span>
                      </li>
                    </ul>
                    <AffiliateButton 
                      href="https://booking.com" 
                      text="Search LA Hotels" 
                      variant="outline"
                    />
                  </div>
                </div>
              </section>

              {/* Section 3: Budget Breakdown */}
              <section id="budget" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">03</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Budget Breakdown</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">$350</div>
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Daily "Elite"</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Luxury hotels in SF/Santa Monica, fine dining, and private transfers.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">$180</div>
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Daily "Fan"</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Mid-range hotels in San Jose/Inglewood, local eats, and stadium shuttles.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">$95</div>
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Daily "Ultra"</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Hostels or shared Airbnbs, food trucks (In-N-Out), and public transit.</p>
                  </div>
                </div>

                <div className="mt-12 p-8 rounded-3xl bg-slate-100 dark:bg-white/5 border border-transparent dark:border-white/10">
                  <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold mb-4">
                    <CreditCard className="w-5 h-5 text-emerald-500" />
                    Hidden Cost: The "California Tax"
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    California has the highest fuel prices in the US. If renting a car, budget an extra $15/day for gas. Sales tax is ~9-10% in major cities.
                  </p>
                </div>
              </section>

              {/* Section 4: Visa Requirements */}
              <section id="visas" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">04</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Visa Requirements</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Entering the United States</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-loose">
                      The US has strict entry requirements. Depending on your passport, you will need either an ESTA (Visa Waiver) or a B1/B2 Visitor Visa.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-sm font-medium text-slate-900 dark:text-white">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        </div>
                        ESTA: For 41 countries (UK, EU, Japan, etc.)
                      </li>
                      <li className="flex items-center gap-3 text-sm font-medium text-slate-900 dark:text-white">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        </div>
                        B1/B2: For all other countries (Requires interview)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-emerald-600 rounded-[2rem] p-10 text-slate-900 dark:text-white shadow-xl shadow-emerald-900/20">
                    <h3 className="text-xl font-bold mb-4">The "6-Month Rule"</h3>
                    <p className="text-emerald-50/80 text-sm leading-loose mb-8">
                      Your passport must be valid for at least 6 months beyond your period of stay in the US. Check your expiry date now.
                    </p>
                    <AffiliateButton 
                      href="https://esta.cbp.dhs.gov/" 
                      text="Official ESTA Site" 
                      variant="secondary"
                    />
                  </div>
                </div>
              </section>

              {/* Section 5: Insider Tips */}
              <section id="insider" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">05</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Insider Tips</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">The "Fog" Factor</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-loose mb-6">
                      San Francisco is famously chilly, even in June. The "Marine Layer" brings fog that can drop temperatures by 15°F in minutes. Levi's Stadium is in Santa Clara, which is much warmer, but SF proper is cold.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                      <Wind className="w-4 h-4" /> Wear Layers
                    </div>
                  </div>
                  <div className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">SoFi Public Transit</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-loose mb-6">
                      LA's SoFi Stadium is a marvel, but public transit is lacking. The best secret is the Metro to Hawthorne/Lennox station, then taking the dedicated Stadium Express shuttle.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                      <Train className="w-4 h-4" /> Use the Shuttle
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Packing Essentials */}
              <section id="packing" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">06</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Packing Essentials</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Sun, label: "Sunscreen", desc: "LA UV is high" },
                    { icon: Wind, label: "Light Jacket", desc: "For SF nights" },
                    { icon: CreditCard, label: "Cashless Pay", desc: "Stadiums are 100% digital" },
                    { icon: MapPin, label: "Walking Shoes", desc: "For SF hills" }
                  ].map((item, i) => (
                    <div key={i} className="text-center p-6 rounded-3xl border border-slate-100 dark:border-slate-200 dark:border-slate-800">
                      <item.icon className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
                      <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">{item.label}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-tighter">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-32 pb-24">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">07</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Frequently Asked Questions</h2>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-200 dark:border-slate-800">
                  <AccordionItem 
                    question="Which Group I stadium is better for fans?"
                    answer="Both are elite. SoFi Stadium is the most expensive stadium ever built and offers an indoor-outdoor feel with a massive screen. Levi's Stadium is more traditional but features incredible food and high-tech amenities. SoFi is better for 'wow' factor; Levi's is better for ease of tech."
                    isOpen={openFaqIndex === 0}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  />
                  <AccordionItem 
                    question="Is it safe to walk to the stadiums?"
                    answer="Levi's Stadium in Santa Clara is in a corporate/commercial area and is safe to walk to from nearby hotels. SoFi Stadium in Inglewood is improving, but we recommend staying in groups and using dedicated shuttles or ride-shares rather than walking long distances at night."
                    isOpen={openFaqIndex === 1}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  />
                  <AccordionItem 
                    question="What is the best food to try in Group I?"
                    answer="In SF/Santa Clara, try the Garlic Fries and Dungeness Crab. In LA, you cannot miss 'Street Tacos' from a local truck or the iconic 'French Dip' sandwich."
                    isOpen={openFaqIndex === 2}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


