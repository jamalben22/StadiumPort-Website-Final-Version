import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';
import { 
  ChevronDown, 
  Clock, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Plane, 
  Train, 
  CreditCard, 
  AlertTriangle, 
  ExternalLink,
  Building,
  Thermometer
} from 'lucide-react';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors pr-8 tracking-tight">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-teal-500 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-teal-500/10 group-hover:text-teal-600'}`}>
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

export default function GroupEPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/2026-world-cup-group-e-travel-guide';
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
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] font-sans text-slate-900 dark:text-slate-100 selection:bg-teal-500/30">
      <Helmet>
        <title>World Cup 2026 Group E Travel Guide: Philadelphia, Houston & KC | Stadiumport</title>
        <meta name="description" content="The ultimate Group E travel guide. Master the route: Philadelphia, Houston, Kansas City, Toronto, and NY/NJ. Budget tips, Amtrak strategy, and stadium logistics." />
        <meta name="keywords" content="World Cup 2026 Group E Travel Guide, Philadelphia World Cup, Houston World Cup, Kansas City World Cup, Toronto World Cup, Lincoln Financial Field guide, NRG Stadium guide, Arrowhead Stadium guide" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
      </Helmet>

      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "World Cup 2026 Group E Travel Guide: The Continental Odyssey",
            "description": "The definitive guide for following Group E in World Cup 2026. Complete travel strategy for Philadelphia, Houston, Kansas City, Toronto, and NY/NJ.",
            "author": {
              "@type": "Organization",
              "name": "Stadiumport"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Stadiumport",
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/images/Logos/stadiumport-logo.png`
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${siteUrl}${pageUrl}`
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Groups",
                "item": `${siteUrl}/world-cup-2026-groups`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Group E Guide",
                "item": `${siteUrl}${pageUrl}`
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best way to travel between Group E cities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Split your travel: Use Amtrak for the Northeast leg (Philadelphia, NY/NJ). You MUST fly for the Central leg (Houston, Kansas City) and to reach Toronto. Driving between these regions is not feasible."
                }
              },
              {
                "@type": "Question",
                "name": "Is Philadelphia expensive during the World Cup?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Moderate to High. While cheaper than NYC, Philadelphia hotel rates will surge. Look for hotels in University City or near the Airport for better value, but Center City offers the best fan experience."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a visa for Group E?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. You need a US Visa (or ESTA) for Philly/Houston/KC/NY and a Canadian ETA/Visa for Toronto. Ensure you have multi-entry permissions if moving back and forth."
                }
              }
            ]
          }
        ]}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-[#FAFAFA] to-[#FAFAFA] dark:from-teal-900/20 dark:via-[#0A0A0A] dark:to-[#0A0A0A]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] dark:from-[#0A0A0A] to-transparent" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm text-teal-700 dark:text-teal-400 text-xs font-bold tracking-[0.15em] uppercase mb-8 animate-fade-in">
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
                <Link to="/planner" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm tracking-wide hover:scale-105 transition-transform shadow-xl shadow-slate-900/10">
                  Start Your Journey
                </Link>
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
                
                <div className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Planning a Trip?</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Get our free checklist for Group E travel.</p>
                  <Link to="/planner" className="flex items-center justify-center w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-slate-900/10">
                    Start Planner
                  </Link>
                </div>
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
                    The route covers <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="text-teal-600 hover:text-teal-500 font-semibold underline decoration-teal-200 dark:decoration-teal-800 underline-offset-4 decoration-2">Philadelphia</Link>, <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-teal-600 hover:text-teal-500 font-semibold underline decoration-teal-200 dark:decoration-teal-800 underline-offset-4 decoration-2">Houston</Link>, <Link to="/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide" className="text-teal-600 hover:text-teal-500 font-semibold underline decoration-teal-200 dark:decoration-teal-800 underline-offset-4 decoration-2">Kansas City</Link>, and <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="text-teal-600 hover:text-teal-500 font-semibold underline decoration-teal-200 dark:decoration-teal-800 underline-offset-4 decoration-2">Toronto</Link>.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 mt-12">
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
                  
                  <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
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
                  <div className="mt-12 p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                          <Plane className="w-5 h-5 text-teal-500" />
                          Secure Your Flights Early
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Flights between Houston and KC will sell out.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a href="https://skyscanner.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 text-sm">
                        Check Skyscanner Deals <ArrowRight className="w-4 h-4" />
                      </a>
                      <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-teal-500 text-slate-700 dark:text-slate-200 font-bold py-4 px-6 rounded-xl transition-all hover:bg-white dark:hover:bg-slate-700 text-sm">
                        Compare on Expedia <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-4 text-center uppercase tracking-widest font-medium">We may earn a commission on bookings made through these links.</p>
                  </div>
                </div>
              </section>

              {/* Section 2: Accommodation Strategy */}
              <section id="accommodation" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">02</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Accommodation Strategy</h2>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose max-w-3xl">
                  You are balancing the high costs of the Northeast with the sprawl of Texas. Location strategy is key to saving money and time.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Philadelphia */}
                  <div className="group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-teal-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Philadelphia</h3>
                      <span className="px-3 py-1 bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Historic Hub</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Center City vs Stadium</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                        <span><strong>Best Areas:</strong> Center City or Old City. Take the Broad Street Line subway to the stadium.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                        <span><strong>Value Pick:</strong> University City (UPenn area).</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-teal-600 font-bold text-xs hover:text-teal-700 transition-all group-hover:translate-x-2 uppercase tracking-widest">
                      Search Philly Hotels <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Houston */}
                  <div className="group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-teal-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Houston</h3>
                      <span className="px-3 py-1 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Urban Sprawl</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Car Essential</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                        <span><strong>Best Areas:</strong> The Galleria or Downtown (near light rail to NRG Stadium).</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                        <span><strong>Note:</strong> Houston is massive. Stay near your primary interest points.</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-teal-600 font-bold text-xs hover:text-teal-700 transition-all group-hover:translate-x-2 uppercase tracking-widest">
                      Search Houston Hotels <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Section 3: Budget Breakdown */}
              <section id="budget" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">03</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group E Budget Breakdown</h2>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose">
                  Estimates are per person for a 12-day trip covering 3 group matches.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {/* Economy */}
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Economy Strategy</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$2,500</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Hostels in Philly, budget motels in Texas, Amtrak coach class.</p>
                  </div>
                  
                  {/* Mid-Range */}
                  <div className="p-8 rounded-3xl border border-teal-100 dark:border-teal-900 bg-teal-50 dark:bg-teal-900/10 relative overflow-hidden transform md:-translate-y-4 shadow-xl shadow-teal-900/5">
                    <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-widest">Recommended</div>
                    <div className="text-[10px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-4">Mid-Range Strategy</div>
                    <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-4 tracking-tighter">$4,500</div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">Center City hotels, domestic flights, good BBQ dinners, car rental in Texas.</p>
                  </div>
                  
                  {/* Premium */}
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Premium Experience</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$8,500+</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Rittenhouse Square hotels, Acela First Class, VIP hospitality.</p>
                  </div>
                </div>
              </section>

              {/* Section 4: Visa & Entry Requirements */}
              <section id="visas" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">04</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Visa & Entry Requirements</h2>
                </div>
                
                <div className="grid md:grid-cols-1 gap-8">
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                    <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <Building className="w-5 h-5" />
                      Two-Country Entry
                    </h3>
                    <ul className="space-y-6">
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-slate-900 dark:text-white mb-1 font-bold">US Entry</strong>
                        Standard ESTA or Visa required. Internal flights (Houston to KC) are domestic and require no immigration checks.
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-slate-900 dark:text-white mb-1 font-bold">Canada Entry (Toronto)</strong>
                        You will need an ETA (Electronic Travel Authorization) or Visa to enter Canada for the Toronto matches. Ensure you have multi-entry permissions if you plan to return to the US.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5: Insider Tips */}
              <section id="insider" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">05</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Insider Knowledge</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-xl mb-6">🥩</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Philly Cheesesteaks</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Skip Pat's and Geno's. Go to <strong>Angelo's Pizzeria</strong> or <strong>John's Roast Pork</strong> for the authentic experience.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-xl mb-6">🤠</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Texas Heat</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Houston is humid; KC is dry heat. Both will be 90°F+ (32°C+). Hydrate constantly.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Essential Gear */}
              <section id="packing" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-teal-500 font-mono text-sm font-bold tracking-widest uppercase">06</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group E Packing Essentials</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-teal-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-teal-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔌</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Universal Adapter</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">US/Canada Type A/B.</p>
                    <a href="#" className="text-teal-600 text-[10px] font-bold uppercase tracking-widest hover:text-teal-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-teal-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-teal-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧴</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Sunscreen</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Essential for Texas.</p>
                    <a href="#" className="text-teal-600 text-[10px] font-bold uppercase tracking-widest hover:text-teal-500 transition-colors">Shop Now</a>
                  </div>
                </div>
              </section>

              {/* Section 7: FAQ */}
              <section id="faq" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  <AccordionItem 
                    question="What is the best way to travel between Group E cities?"
                    answer={<>Split your travel: Use <strong>Amtrak</strong> for the Northeast leg (Philadelphia, NY/NJ). You <strong>MUST fly</strong> for the Central leg (Houston, Kansas City) and to reach Toronto. Driving between these regions is not feasible.</>}
                    isOpen={openFaqIndex === 0}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  />
                  <AccordionItem 
                    question="Is Philadelphia expensive during the World Cup?"
                    answer={<>Moderate to High. While cheaper than NYC, Philadelphia hotel rates will surge. Look for hotels in <strong>University City</strong> or near the Airport for better value, but Center City offers the best fan experience.</>}
                    isOpen={openFaqIndex === 1}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  />
                  <AccordionItem 
                    question="Do I need a visa for Group E?"
                    answer={<>Yes. You need a US Visa (or ESTA) for Philly/Houston/KC/NY and a Canadian ETA/Visa for Toronto. Ensure you have <strong>multi-entry permissions</strong> if moving back and forth.</>}
                    isOpen={openFaqIndex === 2}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  />
                </div>
              </section>

              {/* Final CTA */}
              <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 text-white p-12 md:p-20 text-center shadow-2xl shadow-slate-900/20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-slate-900 to-slate-900"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Plan Your Group E Adventure?</h2>
                  <p className="text-slate-300 mb-12 text-lg leading-relaxed font-light">
                    The journey of a lifetime starts with a single booking. Don't let logistics defeat you before the kickoff.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/world-cup-2026-host-cities" className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:scale-105 shadow-lg hover:shadow-teal-500/30 text-base">
                      Explore All Host Cities
                    </Link>
                    <Link to="/planner" className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-2xl transition-all hover:scale-105 text-base">
                      Start My Trip Plan
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}