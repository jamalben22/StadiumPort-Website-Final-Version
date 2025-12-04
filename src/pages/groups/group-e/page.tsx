import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';
import { 
  Clock, Calendar, User, ChevronDown, ChevronUp, MapPin, 
  Train, Plane, DollarSign, Shield, Sun, Umbrella, 
  ShoppingBag, Info, AlertTriangle, CheckCircle, ArrowRight,
  Building, Globe, Wallet, Ticket
} from 'lucide-react';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors pr-8">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-teal-500 border-teal-500 text-white' : 'group-hover:border-teal-500 text-slate-400'}`}>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
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
  const pageUrl = '/groups/group-e';
  const [activeSection, setActiveSection] = useState('intro');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'logistics', 'accommodation', 'budget', 'insider', 'gear', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-slate-100">
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

      <main className="relative">
        {/* Hero Section */}
        <div className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                Ultimate Travel Guide
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                World Cup 2026 Group E: <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">The Continental Odyssey</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                From the Birthplace of America to the Heartland of BBQ. Group E is a logistical puzzle that rewards the prepared traveler with the most diverse cultural mix of the tournament.
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-teal-500" />
                  <span>Updated: June 2025</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-500" />
                  <span>16 min read</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-teal-500" />
                  <span>By Stadiumport Strategy Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="sticky top-[72px] z-40 h-1 bg-slate-100 dark:bg-slate-800 w-full">
          <div 
            className="h-full bg-teal-500 transition-all duration-150"
            style={{ width: `${['intro', 'logistics', 'accommodation', 'budget', 'insider', 'gear', 'faq'].indexOf(activeSection) / 6 * 100}%` }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Navigation */}
            <div className="hidden lg:block lg:col-span-3 relative">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Contents</h4>
                  <nav className="space-y-1 relative border-l border-slate-200 dark:border-slate-800 ml-3">
                    {[
                      { id: 'intro', label: 'Introduction' },
                      { id: 'logistics', label: 'Logistics Strategy' },
                      { id: 'accommodation', label: 'Where to Stay' },
                      { id: 'budget', label: 'Cost Breakdown' },
                      { id: 'insider', label: 'Insider Tips' },
                      { id: 'gear', label: 'Packing Essentials' },
                      { id: 'faq', label: 'FAQ' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left pl-6 py-2 text-sm transition-all relative ${
                          activeSection === item.id 
                            ? 'text-teal-600 dark:text-teal-400 font-bold' 
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                        }`}
                      >
                        {activeSection === item.id && (
                          <span className="absolute left-[-1px] top-0 bottom-0 w-0.5 bg-teal-600 dark:bg-teal-400"></span>
                        )}
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
                
                {/* Sidebar Ad / CTA */}
                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-navy-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Need Amtrak Tix?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Book early for the Northeast Corridor. Prices triple near match day.</p>
                  <a href="https://amtrak.com" target="_blank" rel="noopener noreferrer" className="block w-full py-2 px-4 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-600 rounded-lg text-center text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-teal-500 transition-colors">
                    Check Schedules
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              
              {/* Introduction */}
              <div id="intro" className="prose prose-lg dark:prose-invert max-w-none mb-20">
                <p className="lead text-2xl md:text-3xl font-medium text-slate-900 dark:text-white leading-relaxed mb-8">
                  Group E is not for the faint of heart. It spans two countries and three distinct regions: The Northeast Corridor, The Great Lakes, and The South.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-8 mb-8">
                  The route anchors in <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="text-teal-600 hover:text-teal-500 font-semibold decoration-2 hover:underline underline-offset-4">Philadelphia</Link>, but stretches to <Link to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" className="text-teal-600 hover:text-teal-500 font-semibold decoration-2 hover:underline underline-offset-4">Houston</Link>, <Link to="/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide" className="text-teal-600 hover:text-teal-500 font-semibold decoration-2 hover:underline underline-offset-4">Kansas City</Link>, <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="text-teal-600 hover:text-teal-500 font-semibold decoration-2 hover:underline underline-offset-4">Toronto</Link>, and <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="text-teal-600 hover:text-teal-500 font-semibold decoration-2 hover:underline underline-offset-4">New York/NJ</Link>. This group requires a "Split Strategy" to manage costs and fatigue.
                </p>
                
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border-l-4 border-teal-500 shadow-sm">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-4 mt-0">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400">🚀</span>
                    The Group E "Split Strategy"
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-0 text-lg">
                    <strong className="text-slate-900 dark:text-white">Rail North, Fly South.</strong><br/>
                    Use <strong className="text-teal-600 dark:text-teal-400">Amtrak</strong> for all travel between Philadelphia, New York, and Toronto (via connection). You <strong className="text-red-600 dark:text-red-400">MUST fly</strong> for Houston and Kansas City. Do not attempt to drive from Philly to Houston (24+ hours).
                  </p>
                </div>
              </div>

              {/* Section 1: Multi-City Travel Strategy */}
              <section id="logistics" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400 text-xl font-bold">1</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Logistics: Taming the Distance</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-8 mb-10">
                    This group covers thousands of miles. Your best friend is the "Open-Jaw" flight ticket—flying into one city and out of another.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">The Northeast Corridor (Rail Zone)</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-8">
                    Between Philadelphia and New York/NJ, the train is superior to flying or driving.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-all group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Train className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white">Amtrak Acela / Regional</h4>
                          <p className="text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-wider">Recommended</p>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                        1h 15m from Philly (30th St Station) to NYC (Moynihan Hall). Fast, reliable, center-to-center.
                      </p>
                      <div className="flex items-center justify-between text-sm border-t border-slate-100 dark:border-navy-700 pt-4">
                        <span className="text-slate-500">Cost</span>
                        <span className="font-bold text-slate-900 dark:text-white">$30-$150</span>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-all group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-navy-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-6 h-6 text-slate-400">🚌</div>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white">Megabus / BoltBus</h4>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Budget Option</p>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                        Cheap option ($15-$30). Takes 2 hours. Warning: Traffic on I-95 is unpredictable. Train is safer for match days.
                      </p>
                      <div className="flex items-center justify-between text-sm border-t border-slate-100 dark:border-navy-700 pt-4">
                        <span className="text-slate-500">Cost</span>
                        <span className="font-bold text-slate-900 dark:text-white">$15-$30</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Heartland Hop (Flight Zone)</h3>
                  
                  <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-navy-700 mb-8 shadow-sm">
                    <table className="min-w-full text-sm text-left">
                      <thead className="bg-slate-50 dark:bg-navy-900/50 text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs">
                        <tr>
                          <th className="p-5 border-b dark:border-navy-700">Route</th>
                          <th className="p-5 border-b dark:border-navy-700">Flight Time</th>
                          <th className="p-5 border-b dark:border-navy-700">Est. Price</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-navy-800 divide-y divide-slate-100 dark:divide-navy-700">
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="p-5 font-medium text-slate-900 dark:text-white">PHL/EWR → Houston (IAH/HOU)</td>
                          <td className="p-5 text-slate-600 dark:text-slate-400">3h 45m</td>
                          <td className="p-5 font-bold text-teal-600 dark:text-teal-400">$200 - $400</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="p-5 font-medium text-slate-900 dark:text-white">Houston → Kansas City (MCI)</td>
                          <td className="p-5 text-slate-600 dark:text-slate-400">1h 50m</td>
                          <td className="p-5 font-bold text-teal-600 dark:text-teal-400">$150 - $300</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="p-5 font-medium text-slate-900 dark:text-white">Toronto (YYZ) → Philadelphia</td>
                          <td className="p-5 text-slate-600 dark:text-slate-400">1h 30m</td>
                          <td className="p-5 font-bold text-teal-600 dark:text-teal-400">$180 - $350</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Affiliate Block: Transport */}
                  <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-navy-800 dark:to-navy-900 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">✈️ Book Your "Heartland Hop" Now</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">Flights to Houston and KC will sell out fast due to limited direct routes compared to coastal hubs.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a href="https://skyscanner.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
                        Check Flight Prices <Plane className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                      </a>
                      <a href="https://amtrak.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-600 hover:border-teal-500 text-slate-700 dark:text-slate-200 font-bold py-4 px-6 rounded-xl transition-all hover:shadow-md">
                        Book Amtrak Tickets <Train className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 mt-4 text-center">We may earn a commission on bookings made through these links.</p>
                  </div>
                </div>
              </section>

              {/* Section 2: Accommodation Strategy */}
              <section id="accommodation" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400 text-xl font-bold">2</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Where to Stay: City by City</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  
                  {/* Philadelphia */}
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-500">Philadelphia</h3>
                      <MapPin className="w-6 h-6 text-teal-500" />
                    </div>
                    <div className="inline-block self-start px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-6">
                      Hub City
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Center City is the vibe. The Broad Street Line subway takes you straight to the stadium complex in 15 mins.
                    </p>
                    <div className="mt-auto space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500">✅</span>
                        <span className="text-slate-600 dark:text-slate-300"><strong>Target:</strong> Center City / Old City</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-500">💰</span>
                        <span className="text-slate-600 dark:text-slate-300"><strong>Budget:</strong> University City</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-500">⚠️</span>
                        <span className="text-slate-600 dark:text-slate-300"><strong>Avoid:</strong> Staying near the stadium (nothing to do at night).</span>
                      </div>
                    </div>
                  </div>

                  {/* Houston */}
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-500">Houston</h3>
                      <MapPin className="w-6 h-6 text-teal-500" />
                    </div>
                    <div className="inline-block self-start px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-6">
                      Car Essential
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      A massive driving city. Stay near the METRORail Red Line if you don't rent a car.
                    </p>
                    <div className="mt-auto space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500">✅</span>
                        <span className="text-slate-600 dark:text-slate-300"><strong>Target:</strong> Downtown / Midtown</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-500">💰</span>
                        <span className="text-slate-600 dark:text-slate-300"><strong>Budget:</strong> Medical Center area</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-500">⚠️</span>
                        <span className="text-slate-600 dark:text-slate-300"><strong>Avoid:</strong> The Galleria (unless you have a car).</span>
                      </div>
                    </div>
                  </div>

                  {/* Kansas City */}
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-500">Kansas City</h3>
                      <MapPin className="w-6 h-6 text-teal-500" />
                    </div>
                    <div className="inline-block self-start px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-6">
                      Fan Central
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Arrowhead is isolated. You need a plan. The Power & Light District is the fan hub.
                    </p>
                    <div className="mt-auto space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500">✅</span>
                        <span className="text-slate-600 dark:text-slate-300"><strong>Target:</strong> Downtown / Power & Light</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-500">💰</span>
                        <span className="text-slate-600 dark:text-slate-300"><strong>Budget:</strong> Westport</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-500">⚠️</span>
                        <span className="text-slate-600 dark:text-slate-300"><strong>Warning:</strong> Very limited public transit.</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Affiliate Block: Accommodation */}
                <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-navy-800 dark:to-navy-900 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">🏨 Secure Your Base Camp</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">Hotel inventory in Philadelphia and Kansas City is already tightening. We recommend booking refundable rates now.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
                      Find Hotels on Booking.com <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                    </a>
                    <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-600 hover:border-teal-500 text-slate-700 dark:text-slate-200 font-bold py-4 px-6 rounded-xl transition-all hover:shadow-md">
                      Compare Rates on Expedia <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 text-center">We may earn a commission on bookings made through these links.</p>
                </div>
              </section>

              {/* Section 3: Budget Breakdown */}
              <section id="budget" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400 text-xl font-bold">3</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">The Cost of Group E</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-8">
                    Group E offers a mix of high-cost (NY/Philly) and moderate-cost (Houston/KC) cities. You can save significantly by eating local street food instead of sit-down dining.
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700 mb-12 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-navy-700">
                    {/* Economy */}
                    <div className="bg-white dark:bg-navy-800 p-8 text-center">
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Budget Fan</div>
                      <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">$220</div>
                      <div className="text-xs text-slate-500 mb-6">per day</div>
                      <ul className="text-sm text-left space-y-3 text-slate-600 dark:text-slate-400">
                        <li className="flex items-start gap-2"><span className="text-slate-400">•</span> Hostels / Shared AirBnB</li>
                        <li className="flex items-start gap-2"><span className="text-slate-400">•</span> Public Transit / Walking</li>
                        <li className="flex items-start gap-2"><span className="text-slate-400">•</span> Street Food / Grocery</li>
                        <li className="flex items-start gap-2"><span className="text-slate-400">•</span> No Match Tickets</li>
                      </ul>
                    </div>
                    
                    {/* Mid-Range */}
                    <div className="bg-teal-50/50 dark:bg-teal-900/10 p-8 text-center relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
                      <div className="text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-4">Standard Fan</div>
                      <div className="text-4xl font-extrabold text-teal-600 dark:text-teal-400 mb-2">$450</div>
                      <div className="text-xs text-slate-500 mb-6">per day</div>
                      <ul className="text-sm text-left space-y-3 text-slate-600 dark:text-slate-400">
                        <li className="flex items-start gap-2"><span className="text-teal-500">•</span> 3-Star Hotels</li>
                        <li className="flex items-start gap-2"><span className="text-teal-500">•</span> Uber/Lyft Mix</li>
                        <li className="flex items-start gap-2"><span className="text-teal-500">•</span> Casual Dining</li>
                        <li className="flex items-start gap-2"><span className="text-teal-500">•</span> 1 Group Stage Match</li>
                      </ul>
                    </div>
                    
                    {/* Premium */}
                    <div className="bg-white dark:bg-navy-800 p-8 text-center">
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Elite Fan</div>
                      <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">$800+</div>
                      <div className="text-xs text-slate-500 mb-6">per day</div>
                      <ul className="text-sm text-left space-y-3 text-slate-600 dark:text-slate-400">
                        <li className="flex items-start gap-2"><span className="text-slate-400">•</span> Downtown Hotels</li>
                        <li className="flex items-start gap-2"><span className="text-slate-400">•</span> Rental Car / Black Car</li>
                        <li className="flex items-start gap-2"><span className="text-slate-400">•</span> Premium Dining</li>
                        <li className="flex items-start gap-2"><span className="text-slate-400">•</span> Hospitality Tickets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Insider Tips */}
              <section id="insider" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400 text-xl font-bold">4</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">What FIFA Won't Tell You</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center mb-4 text-xl">🌡️</div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">The Houston Humidity</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Houston in June is oppressive. 95°F (35°C) with 90% humidity. Do not plan outdoor activities between 12pm-5pm. Use the underground tunnel system in Downtown Houston to walk between buildings in AC.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center mb-4 text-xl">🥪</div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">The Philly Cheesesteak Protocol</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Don't just go to Pat's or Geno's (tourist traps). Locals go to <strong>Angelo's Pizzeria</strong> or <strong>John's Roast Pork</strong>. Order "Whiz Wit" (Cheez Whiz with onions) to sound like a local.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center mb-4 text-xl">📢</div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">Arrowhead Noise Levels</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Kansas City's stadium holds the world record for noise (142.2 dB). Bring ear protection if you are sensitive to sound. The tailgate culture here is the best in the USA—arrive 4 hours early.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center mb-4 text-xl">🛂</div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">The Border Crossing</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      If traveling to Toronto, remember: DUI convictions (even old ones) can make you inadmissible to Canada. Check your status months in advance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Essential Gear */}
              <section id="gear" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400 text-xl font-bold">5</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Group E Packing Essentials</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">🔌</div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Universal Adapter</h4>
                    <p className="text-xs text-slate-500 mb-4">US & Canada plugs.</p>
                    <a href="#" className="text-teal-600 text-xs font-bold uppercase tracking-wider hover:text-teal-500">Shop Now</a>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">💧</div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Insulated Bottle</h4>
                    <p className="text-xs text-slate-500 mb-4">Critical for Houston heat.</p>
                    <a href="#" className="text-teal-600 text-xs font-bold uppercase tracking-wider hover:text-teal-500">Shop Now</a>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">🔋</div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Power Bank</h4>
                    <p className="text-xs text-slate-500 mb-4">20,000mAh for travel days.</p>
                    <a href="#" className="text-teal-600 text-xs font-bold uppercase tracking-wider hover:text-teal-500">Shop Now</a>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">🧥</div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Light Rain Jacket</h4>
                    <p className="text-xs text-slate-500 mb-4">Philly/Toronto rain ready.</p>
                    <a href="#" className="text-teal-600 text-xs font-bold uppercase tracking-wider hover:text-teal-500">Shop Now</a>
                  </div>
                </div>
              </section>

              {/* Section 7: FAQ */}
              <section id="faq" className="mb-24 scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10">Frequently Asked Questions</h2>
                <div className="space-y-1">
                  <AccordionItem 
                    question="Is public transport safe in these cities?"
                    answer="Generally yes. Philadelphia's SEPTA and NYC's Subway are safe during the day and match times, but stay alert at night. Houston and KC have limited public transit, so you'll likely use Uber/Lyft, which are very safe."
                    isOpen={openFaqIndex === 0}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  />
                  <AccordionItem 
                    question="Can I see NYC while staying in Philadelphia?"
                    answer="Absolutely. It's a 75-minute train ride. Many fans base themselves in Philly (cheaper) and do day trips to NYC."
                    isOpen={openFaqIndex === 1}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  />
                  <AccordionItem 
                    question="What is the best ticket package for Group E?"
                    answer='The "Follow Your Team" series is best if you support a specific nation. Otherwise, buy the "Philadelphia Venue Series" to see 3+ matches with zero travel hassle.'
                    isOpen={openFaqIndex === 2}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  />
                </div>
              </section>

              {/* Final CTA */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready for the Odyssey?</h2>
                <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed relative z-10">
                  Group E is a journey through the heart of North America. Don't let the logistics overwhelm you. Start booking your "Split Strategy" today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                  <Link to="/world-cup-2026-host-cities" className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-teal-500/25">
                    Explore Host Cities <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/planner" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl transition-all border border-white/20">
                    Start My Trip Plan
                  </Link>
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
