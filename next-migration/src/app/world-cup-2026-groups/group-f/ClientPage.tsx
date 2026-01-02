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
  Car, 
  CreditCard, 
  ExternalLink
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

export default function GroupFClientPage() {
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
           <Breadcrumb items={[{ label: 'Groups', href: '/world-cup-2026-groups' }, { label: 'Group F', href: '/world-cup-2026-groups/group-f' }]} />

           <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-slate-900 dark:text-white animate-fade-up">
                World Cup 2026 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Group F Strategy</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal mb-10 animate-fade-up delay-100">
                Four giants. One corridor. From the high-tech heart of Dallas to the mountain peaks of Monterrey, Group F is the tournament's most intense geographic challenge.
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
                    Group F is defined by two things: massive stadiums and massive heat. Success here requires a "Climate Strategy" as much as a travel one.
                  </p>
                  <p className="text-lg leading-loose text-slate-600 dark:text-slate-300 mb-10">
                    The group centers on the <strong className="text-slate-900 dark:text-white">"Central Corridor"</strong> spanning from Kansas City down through Texas (Dallas, Houston) and across the border to <strong className="text-slate-900 dark:text-white">Monterrey, Mexico</strong>.
                  </p>
                </div>

                <div className=" p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-200 dark:border-slate-800 mt-12">
                  <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-3 tracking-tight uppercase">
                    <Car className="w-5 h-5" />
                    The Group F "Heat Route"
                  </h3>
                  <p className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                    Kansas City ✈️ Dallas 🚗 Houston ✈️ Monterrey
                  </p>
                  <p className="text-base text-slate-500 dark:text-slate-400">
                    Fly into KC, then jump to Dallas. The Dallas-Houston leg is a classic Texas road trip. For Monterrey, flying is non-negotiable for safety and speed.
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
                  Unlike the East Coast, Group F cities are built for the car. Public transit is limited, and distances between host cities are vast.
                </p>

                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">The "Texas Triangle" (Road Trip Territory)</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
                    Dallas and Houston are 240 miles apart. Driving is the most flexible option, allowing you to visit world-class BBQ spots along the way.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className=" p-8 rounded-3xl border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                      <Car className="w-8 h-8 text-emerald-500 mb-6" />
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Rental Car</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Essential for Texas. Book an SUV with high-output AC.</p>
                      <span className="inline-block px-3 py-1 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full">$70-120 / day</span>
                    </div>
                    <div className=" p-8 rounded-3xl border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                      <Plane className="w-8 h-8 text-emerald-500 mb-6" />
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Intra-Texas Flights</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">DFW to IAH is a 50-minute hop. Multiple flights hourly.</p>
                      <span className="inline-block px-3 py-1 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full">$90-150 USD</span>
                    </div>
                    <div className=" p-8 rounded-3xl border border-transparent dark:border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 text-slate-400 mb-6 flex items-center justify-center font-bold border-2 border-slate-300 rounded-full text-[10px]">BUS</div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Vonlane Bus</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Luxury coach with WiFi and snacks. The "Private Jet on Wheels."</p>
                      <span className="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full">$100-130 USD</span>
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">The "Long Jumps" (Kansas City & Monterrey)</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
                    Kansas City is 500 miles north of Dallas; Monterrey is 500 miles south of Houston. Flying is the only logical choice for fans.
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
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Dallas (DFW) → Kansas City (MCI)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">1h 35m</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">4 Months Out</td>
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">$140 - $280</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Houston (IAH) → Monterrey (MTY)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">1h 20m</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">3 Months Out</td>
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">$180 - $350</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Kansas City (MCI) → Monterrey (MTY)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">4h 15m (1 stop)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">5 Months Out</td>
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">$300 - $550</td>
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
                          Secure Your Central Corridor Flights
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Flights between the US and Mexico will be in extreme demand.</p>
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
                  Texas cities are spread out. Kansas City is more compact but has fewer hotels. Monterrey offers luxury at a relative discount. Here is where to book.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Dallas */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Dallas / Arlington</h3>
                      <span className="px-3 py-1 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">High Traffic</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 9 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Best Area:</strong> Uptown Dallas (For food, nightlife, and vibe)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Stadium Access:</strong> Arlington (Stay near Texas Live! to walk to AT&T Stadium)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                        <span><strong>Warning:</strong> Dallas is huge. Staying in "Dallas" could mean a 45-min drive to the match.</span>
                      </li>
                    </ul>
                    <AffiliateButton 
                      href="https://booking.com" 
                      text="Search Dallas Hotels" 
                      variant="outline"
                    />
                  </div>

                  {/* Houston */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Houston</h3>
                      <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Good Layout</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 7 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Best Area:</strong> Museum District / Medical Center (Upscale and near light rail)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Stadium Access:</strong> METRORail Red Line goes directly to NRG Stadium.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                        <span><strong>Note:</strong> Humidity in Houston is extreme. Stay near the rail to avoid long walks.</span>
                      </li>
                    </ul>
                    <AffiliateButton 
                      href="https://booking.com" 
                      text="Search Houston Hotels" 
                      variant="outline"
                    />
                  </div>

                  {/* Kansas City */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Kansas City</h3>
                      <span className="px-3 py-1 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Limited Supply</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 10 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Best Area:</strong> Power & Light District (The fan hub) or Country Club Plaza.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Stadium Access:</strong> Arrowhead is isolated. Shuttle buses or Uber are required.</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs hover:text-emerald-700 transition-all group-hover:translate-x-2 uppercase tracking-widest">
                      Search KC Hotels <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Monterrey */}
                  <div className="group p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Monterrey</h3>
                      <span className="px-3 py-1 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Luxury Value</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Safety Strategy</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Best Area:</strong> San Pedro Garza García (Safest, most modern, best dining).</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Stadium Access:</strong> Estadio BBVA is in Guadalupe. Use official taxi apps only.</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs hover:text-emerald-700 transition-all group-hover:translate-x-2 uppercase tracking-widest">
                      Search Monterrey Hotels <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Section 3: Budget Breakdown */}
              <section id="budget" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">03</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group F Budget Breakdown</h2>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose">
                  Estimates are per person for a 12-day trip covering 3 group matches across the corridor.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {/* Economy */}
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:scale-[1.02] transition-transform duration-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Economy Strategy</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$2,800</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Shared Airbnbs, driving between Texas cities, BBQ joints, Cat 3 tickets.</p>
                  </div>

                  {/* Mid-Range */}
                  <div className="p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900 dark:bg-emerald-900/10 relative overflow-hidden transform md:-translate-y-4 shadow-xl shadow-emerald-900/5">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-slate-900 dark:text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-widest">Recommended</div>
                    <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-4">Mid-Range Strategy</div>
                    <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 tracking-tighter">$4,800</div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">Business hotels, short-haul flights, rental car, Cat 2 tickets.</p>
                  </div>

                  {/* Premium */}
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-200 dark:border-slate-800 hover:scale-[1.02] transition-transform duration-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Premium Experience</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$8,500+</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">San Pedro/Uptown luxury hotels, private transfers, Cat 1 suites.</p>
                  </div>
                </div>

                <div className=" rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
                    <CreditCard className="w-6 h-6 text-emerald-500" />
                    Money-Saving Hacks for Group F
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs flex-shrink-0">1</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">The Arlington Hack:</strong> Hotels in Dallas/Fort Worth are cheaper than Arlington. Use a dedicated rideshare or hotel shuttle to avoid $60+ game day parking at AT&T Stadium.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs flex-shrink-0">2</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">Eat the BBQ:</strong> In Dallas, Houston, and KC, the best food in the city (BBQ) is often the most affordable. Skip the fancy sit-down spots and hit the legendary pits.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs flex-shrink-0">3</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">Monterrey Currency:</strong> Pay in Pesos (MXN) in Monterrey using a no-foreign-transaction-fee card. US Dollars are accepted in some places but at terrible exchange rates.
                      </p>
                    </li>
                  </ul>

                  {/* eSIM Affiliate */}
                  <div className="mt-10 flex items-center gap-6 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <div className="w-12 h-12 rounded-xl dark:bg-slate-700 flex items-center justify-center text-2xl shadow-sm">📱</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">Stay Connected</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Get an Airalo North America eSIM for data in both USA and Mexico.</p>
                    </div>
                    <AffiliateButton 
                      href="https://airalo.com" 
                      text="Get eSIM" 
                      variant="outline"
                    />
                  </div>
                </div>
              </section>

              {/* Section 4: Visa Requirements */}
              <section id="visas" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">04</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Visa & Entry Requirements</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      Following Group F means crossing the US-Mexico border. This is the most complex logistics part of the group.
                    </p>
                    <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                      <h4 className="text-amber-700 dark:text-amber-400 font-bold mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> The Border Rule
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        Do not attempt to drive a rental car from Texas to Monterrey. Most US rental agencies strictly prohibit this. Fly instead.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-200 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4">Entry Checklist</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                          USA: Valid Passport + ESTA/Visa
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                          Mexico: FMM Form (Digital or Paper)
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                          Proof of Match Tickets (Recommended)
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                          Return Flight Confirmation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Insider Tips */}
              <section id="insider" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">05</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Insider Strategy Tips</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">01</div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Heat Survival</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      June in Texas and Monterrey is brutal. Both Texas stadiums are AC-cooled, but the walk from parking is not. Hydrate 24 hours before kick-off.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">02</div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">The Arrowhead Roar</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Kansas City's Arrowhead is the loudest stadium in the world. Bring high-fidelity earplugs if you have sensitive hearing—the decibel levels are genuine.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">03</div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Monterrey Safety</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Monterrey is a safe business hub, but stay within the San Pedro district. Use Uber or "Didi" for all transport—never hail a taxi on the street.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Packing Essentials */}
              <section id="packing" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">06</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Packing Essentials</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { item: 'Electrolyte Tabs', reason: 'Combat Texas heat' },
                    { item: 'Light Linens', reason: 'Breathable fabrics only' },
                    { item: 'Power Bank', reason: 'Long travel days' },
                    { item: 'Sunscreen 50+', reason: 'High UV index' },
                    { item: 'Ear Plugs', reason: 'For Arrowhead matches' },
                    { item: 'Comfortable Shoes', reason: 'Massive stadium lots' },
                    { item: 'Clear Bag', reason: 'Stadium security policy' },
                    { item: 'Digital Wallet', reason: 'Card-only stadiums' }
                  ].map((entry, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-slate-100 dark:border-slate-200 dark:border-slate-800 text-center">
                      <div className="text-slate-900 dark:text-white font-bold text-sm mb-1">{entry.item}</div>
                      <div className="text-slate-400 text-[10px] uppercase tracking-widest">{entry.reason}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7: FAQ */}
              <section id="faq" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">07</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Frequently Asked Questions</h2>
                </div>

                <div className="max-w-3xl">
                  {[
                    {
                      q: "Is driving from Texas to Monterrey safe?",
                      a: "While the highway is generally okay, we strongly advise flying. Border wait times can be 4-6 hours, and rental car insurance often voids once you cross. Flights from DFW or IAH are 80 minutes."
                    },
                    {
                      q: "Will the stadiums in Group F be air-conditioned?",
                      a: "AT&T Stadium (Dallas) and NRG Stadium (Houston) are fully climate-controlled domes. Arrowhead (KC) and Estadio BBVA (Monterrey) are open-air. Be prepared for high heat at the open-air venues."
                    },
                    {
                      q: "What is the best way to get to Arrowhead Stadium?",
                      a: "KC lacks robust rail. The city will run 'World Cup Shuttles' from downtown Power & Light. Booking these in advance is your best option to avoid $100+ Uber surge pricing."
                    },
                    {
                      q: "Can I use US Dollars in Monterrey?",
                      a: "In major hotels, yes. But for match-day food, taxis, and local shops, you need Mexican Pesos. We recommend using a Revolut or Wise card for the best rates."
                    }
                  ].map((faq, i) => (
                    <AccordionItem 
                      key={i}
                      question={faq.q}
                      answer={faq.a}
                      isOpen={openFaqIndex === i}
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    />
                  ))}
                </div>
              </section>

              {/* Final CTA */}
              <div className="relative overflow-hidden rounded-[3rem] text-slate-900 dark:text-white p-12 md:p-20 text-center shadow-2xl shadow-slate-900/20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-slate-900 to-slate-900"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready for the Heat Corridor?</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-12 text-lg leading-relaxed font-light">
                    From the BBQ pits of KC to the peaks of San Pedro, Group F is a journey of extremes. Start your logistics planning today.
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


