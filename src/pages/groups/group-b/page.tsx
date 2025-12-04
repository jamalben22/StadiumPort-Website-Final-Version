import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Plane, 
  Train, 
  CreditCard, 
  Info, 
  AlertTriangle, 
  ExternalLink,
  Smartphone,
  Shield,
  Zap,
  Coffee
} from 'lucide-react';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors pr-8">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-emerald-500 border-emerald-500 text-white' : 'group-hover:border-emerald-500 text-slate-400'}`}>
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

export default function GroupBPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/groups/group-b';
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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
      const scrollPosition = window.scrollY + 200;

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
    <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-slate-100 selection:bg-emerald-100 dark:selection:bg-emerald-900/30">
      <Helmet>
        <title>World Cup 2026 Group B Travel Guide: Toronto, Vancouver, Seattle & SF | Stadiumport</title>
        <meta name="description" content="The definitive guide for following Group B in World Cup 2026. Complete travel strategy for Toronto, Vancouver, Seattle, and San Francisco. Flights, hotels, and budget." />
        <meta name="keywords" content="World Cup 2026 Group B Travel Guide, Group B matches, Toronto Vancouver Seattle San Francisco World Cup, following your team World Cup 2026, multi-city World Cup travel" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
      </Helmet>

      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "World Cup 2026 Group B Travel Guide: The Complete Strategy",
            "description": "The definitive guide for following Group B in World Cup 2026. Complete travel strategy for Toronto, Vancouver, Seattle, and San Francisco.",
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
                "name": "What is the best order to visit Group B cities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Due to geography, the most efficient route is starting in Toronto (East Coast) and then flying West to Vancouver, taking the train to Seattle, and finishing in San Francisco. This minimizes backtracking and maximizes time zones."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need separate visas for the US and Canada?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Most international travelers will need both an eTA for Canada and an ESTA (or B1/B2 visa) for the United States. Apply for both at least 72 hours before travel."
                }
              }
            ]
          }
        ]}
      />

      <Header />

      <main className="relative pt-32 pb-24">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8">
              <MapPin className="w-3 h-3" />
              Ultimate Travel Guide
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900 dark:text-white">
              World Cup 2026 Group B: <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">The Cross-Continental Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 font-light">
              Four cities. Two countries. One epic itinerary. Following your team from Toronto to the Pacific Coast requires precision planning. Here is your blueprint.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-navy-800 pt-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-500" /> 
                Updated: June 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-500" /> 
                12 min read
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">S</div>
                By Stadiumport Strategy Team
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            
            {/* Sticky Sidebar */}
            <div className="hidden lg:block lg:col-span-3 relative">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Contents</h4>
                  <nav className="space-y-1 relative border-l border-slate-200 dark:border-slate-800 ml-3">
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
                        className={`block w-full text-left pl-6 py-2 text-sm transition-all relative ${
                          activeSection === item.id 
                            ? 'text-emerald-600 dark:text-emerald-400 font-bold' 
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                        }`}
                      >
                        {activeSection === item.id && (
                          <span className="absolute left-[-1px] top-0 bottom-0 w-0.5 bg-emerald-600 dark:bg-emerald-400"></span>
                        )}
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
                
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-800 border border-slate-100 dark:border-navy-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Planning a Trip?</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Get our free checklist for Group B travel.</p>
                  <Link to="/planner" className="block w-full py-2.5 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-center text-sm font-bold rounded-lg hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors">
                    Start Planner
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-24">
              
              {/* Introduction */}
              <section id="intro" className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead text-2xl font-medium text-slate-900 dark:text-white leading-relaxed">
                  Group B represents the ultimate logistical challenge and reward of World Cup 2026. Unlike the compact Texas or East Coast clusters, Group B demands a cross-continental strategy that spans the cultural divide of North America.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  You aren't just watching football; you are embarking on a 2,500-mile odyssey. You will start (or end) in the cosmopolitan bustle of <Link to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" className="text-emerald-600 hover:text-emerald-500 font-semibold underline decoration-emerald-200 dark:decoration-emerald-800 underline-offset-4">Toronto</Link>, cross the Rockies to the stunning waterfronts of <Link to="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide" className="text-emerald-600 hover:text-emerald-500 font-semibold underline decoration-emerald-200 dark:decoration-emerald-800 underline-offset-4">Vancouver</Link> and <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="text-emerald-600 hover:text-emerald-500 font-semibold underline decoration-emerald-200 dark:decoration-emerald-800 underline-offset-4">Seattle</Link>, and conclude in the tech capital of the world, the <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="text-emerald-600 hover:text-emerald-500 font-semibold underline decoration-emerald-200 dark:decoration-emerald-800 underline-offset-4">San Francisco Bay Area</Link>.
                </p>
                
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 my-12 not-prose">
                  <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-400 mb-3 flex items-center gap-2">
                    <Plane className="w-5 h-5" />
                    The Group B "Golden Route"
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-0 text-lg">
                    <strong className="text-slate-900 dark:text-white">Toronto ✈️ Vancouver 🚂 Seattle ✈️ San Francisco</strong>
                    <br/>
                    <span className="text-base opacity-80 mt-2 block">This route minimizes backtracking. Start East, fly long-haul once, then enjoy short hops down the Pacific Coast.</span>
                  </p>
                </div>
              </section>

              {/* Section 1: Multi-City Travel Strategy */}
              <section id="strategy" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-900 dark:text-white font-bold text-xl shadow-sm border border-slate-200 dark:border-navy-700">1</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Multi-City Travel Strategy</h2>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-600 dark:text-slate-300">
                    The distance between Toronto and Vancouver is roughly the same as London to Moscow. Do not underestimate the scale. Here is how to bridge the gap efficiently.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">The "Pacific Hop" (Vancouver to Seattle)</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    This is the easiest leg of your trip. Forget flying. The distance is short, and the airports are far from the city centers.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
                    <div className="bg-white dark:bg-navy-800 p-6 rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                      <Train className="w-8 h-8 text-emerald-500 mb-4" />
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">Amtrak Cascades</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">The scenic coastal route takes 4 hours. Book 3 months in advance.</p>
                      <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full">$40-60 USD</span>
                    </div>
                    <div className="bg-white dark:bg-navy-800 p-6 rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 text-emerald-500 mb-4 flex items-center justify-center font-bold border-2 border-emerald-500 rounded-full text-xs">BUS</div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">Bus (FlixBus)</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Reliable, cheap, and city-center to city-center.</p>
                      <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full">$25-40 USD</span>
                    </div>
                    <div className="bg-white dark:bg-navy-800 p-6 rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow opacity-75">
                      <div className="w-8 h-8 text-slate-400 mb-4 flex items-center justify-center font-bold border-2 border-slate-300 rounded-full text-xs">CAR</div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">Driving</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Border wait times can exceed 2 hours. Not recommended without Nexus.</p>
                      <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full">3+ Hours</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">The "Continental Jump" (Toronto to West Coast)</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    This is your major expense. You will need a domestic flight (within Canada if going to Vancouver, or international if to Seattle/SF).
                  </p>
                  
                  <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm not-prose my-8">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-slate-50 dark:bg-navy-800">
                        <tr>
                          <th className="p-4 md:p-6 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 dark:border-navy-700">Route</th>
                          <th className="p-4 md:p-6 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 dark:border-navy-700 hidden md:table-cell">Flight Time</th>
                          <th className="p-4 md:p-6 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 dark:border-navy-700 hidden md:table-cell">Booking Window</th>
                          <th className="p-4 md:p-6 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 dark:border-navy-700">Est. Price (One-Way)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-navy-700 bg-white dark:bg-navy-900">
                        <tr>
                          <td className="p-4 md:p-6 font-medium text-slate-900 dark:text-white">Toronto (YYZ) → Vancouver (YVR)</td>
                          <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 hidden md:table-cell">5h 15m</td>
                          <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 hidden md:table-cell">4-6 Months Out</td>
                          <td className="p-4 md:p-6 font-bold text-emerald-600 dark:text-emerald-400">$250 - $450 CAD</td>
                        </tr>
                        <tr>
                          <td className="p-4 md:p-6 font-medium text-slate-900 dark:text-white">Toronto (YYZ) → San Francisco (SFO)</td>
                          <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 hidden md:table-cell">5h 45m</td>
                          <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 hidden md:table-cell">3-5 Months Out</td>
                          <td className="p-4 md:p-6 font-bold text-emerald-600 dark:text-emerald-400">$300 - $500 USD</td>
                        </tr>
                        <tr>
                          <td className="p-4 md:p-6 font-medium text-slate-900 dark:text-white">Seattle (SEA) → San Francisco (SFO)</td>
                          <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 hidden md:table-cell">2h 10m</td>
                          <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 hidden md:table-cell">2-3 Months Out</td>
                          <td className="p-4 md:p-6 font-bold text-emerald-600 dark:text-emerald-400">$120 - $200 USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 p-6 rounded-xl my-8 flex gap-4 items-start not-prose">
                    <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-900 dark:text-amber-400 mb-2">Time Zone Warning</h4>
                      <p className="text-amber-800/80 dark:text-amber-200/80 text-sm leading-relaxed">
                        Toronto is <strong>Eastern Time (ET)</strong>. Vancouver, Seattle, and SF are <strong>Pacific Time (PT)</strong>. There is a 3-hour difference. A 9:00 PM match in Toronto finishes at 6:00 PM in Vancouver. Factor this jet lag into your arrival schedule—flying West is easier on the body than flying East.
                      </p>
                    </div>
                  </div>

                  {/* Affiliate Block: Flights */}
                  <div className="mt-12 p-8 bg-slate-50 dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 not-prose">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                          <Plane className="w-5 h-5 text-emerald-500" />
                          Secure Your Cross-Continental Flights
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Flight prices for June 2026 are expected to surge by 40% once the final draw is made.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a href="https://skyscanner.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                        Check Skyscanner Deals <ArrowRight className="w-4 h-4" />
                      </a>
                      <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-600 hover:border-emerald-500 text-slate-700 dark:text-slate-200 font-bold py-4 px-6 rounded-xl transition-all hover:shadow-md">
                        Compare on Expedia <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-4 text-center uppercase tracking-wider">We may earn a commission on bookings made through these links.</p>
                  </div>
                </div>
              </section>

              {/* Section 2: Accommodation Strategy */}
              <section id="accommodation" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-900 dark:text-white font-bold text-xl shadow-sm border border-slate-200 dark:border-navy-700">2</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Accommodation Strategy</h2>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                  Each city presents a unique lodging puzzle. Toronto hotels are expensive but central. The Bay Area requires strategic positioning to avoid 2-hour commutes to <Link to="/world-cup-2026-stadiums/levis-stadium-guide" className="text-emerald-600 font-medium hover:underline">Levi's Stadium</Link>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Toronto */}
                  <div className="group p-8 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all hover:shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Toronto</h3>
                      <span className="px-2 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider rounded">High Demand</span>
                    </div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-6">Book 8 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span><strong>Best Area:</strong> Entertainment District (Walkable to <Link to="/world-cup-2026-stadiums/bmo-field-guide" className="text-emerald-600 hover:underline">BMO Field</Link>)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span><strong>Budget Alt:</strong> North York (Subway Line 1 access)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                        <span><strong>Warning:</strong> Avoid hotels near Pearson Airport unless flying out early; traffic to downtown is brutal.</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors group-hover:translate-x-1 duration-300">
                      Search Toronto Hotels <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Vancouver */}
                  <div className="group p-8 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all hover:shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Vancouver</h3>
                      <span className="px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-wider rounded">Extreme Cost</span>
                    </div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-6">Book 10 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span><strong>Best Area:</strong> Yaletown or Gastown (Walkable to <Link to="/world-cup-2026-stadiums/bc-place-stadium-guide" className="text-emerald-600 hover:underline">BC Place</Link>)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span><strong>Budget Alt:</strong> Burnaby (SkyTrain Expo Line access)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                        <span><strong>Warning:</strong> Downtown Vancouver is an island; bridges clog up. Stay near the SkyTrain.</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors group-hover:translate-x-1 duration-300">
                      Search Vancouver Hotels <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Seattle */}
                  <div className="group p-8 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all hover:shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Seattle</h3>
                      <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded">Moderate Demand</span>
                    </div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-6">Book 6 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span><strong>Best Area:</strong> Pioneer Square (Adjacent to <Link to="/world-cup-2026-stadiums/lumen-field-guide" className="text-emerald-600 hover:underline">Lumen Field</Link>)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span><strong>Budget Alt:</strong> SeaTac Airport Zone (Light Rail direct to stadium)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                        <span><strong>Warning:</strong> Pioneer Square can be gritty at night. Stick to main streets.</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors group-hover:translate-x-1 duration-300">
                      Search Seattle Hotels <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* SF Bay Area */}
                  <div className="group p-8 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all hover:shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">SF Bay Area</h3>
                      <span className="px-2 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-wider rounded">Logistics Trap</span>
                    </div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-6">Strategy Required</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span><strong>Best Area:</strong> San Jose / Santa Clara (Near Stadium)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span><strong>Tourist Alt:</strong> San Francisco (Union Square) - 60+ min commute</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2"></div>
                        <span><strong>Warning:</strong> Do not stay in SF if you want quick stadium access. The stadium is 40 miles south.</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors group-hover:translate-x-1 duration-300">
                      Search Bay Area Hotels <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Section 3: Budget Breakdown */}
              <section id="budget" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-900 dark:text-white font-bold text-xl shadow-sm border border-slate-200 dark:border-navy-700">3</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Group B Budget Breakdown</h2>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  Estimates are per person for a 12-day trip covering 3 group matches. Does not include international arrival flights.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-12">
                  {/* Economy */}
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800">
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Economy Strategy</div>
                    <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">$2,800</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Hostels, public transit, grocery meals, cheapest match tickets.</p>
                  </div>
                  
                  {/* Mid-Range */}
                  <div className="p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-900/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Recommended</div>
                    <div className="text-sm font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2">Mid-Range Strategy</div>
                    <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-4">$4,500</div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">3-star hotels, mix of Uber/Transit, pub meals, Cat 2 tickets.</p>
                  </div>
                  
                  {/* Premium */}
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800">
                    <div className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Premium Experience</div>
                    <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">$8,500+</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Downtown 4-star hotels, direct flights, Cat 1 tickets, fine dining.</p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-8 border border-slate-100 dark:border-navy-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-emerald-500" />
                    Money-Saving Hacks for Group B
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm flex-shrink-0">1</div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        <strong className="text-slate-900 dark:text-white">Currency Arbitrage:</strong> The USD is strong against the CAD. Your money goes 30% further in Toronto and Vancouver. Splurge in Canada, save in the US.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm flex-shrink-0">2</div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        <strong className="text-slate-900 dark:text-white">The "Red-Eye" Savings:</strong> Flights from Toronto to the West Coast are significantly cheaper if you fly overnight (departing 10 PM, arriving 1 AM PT).
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm flex-shrink-0">3</div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        <strong className="text-slate-900 dark:text-white">Data Roaming:</strong> Do not pay your home carrier $10/day. Get an eSIM that covers both US and Canada.
                      </p>
                    </li>
                  </ul>
                  
                  {/* eSIM Affiliate */}
                  <div className="mt-8 flex items-center gap-5 p-5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-2xl">📱</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Stay Connected Across Borders</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Get an Airalo North America eSIM for instant data in both countries.</p>
                    </div>
                    <a href="#" className="flex-shrink-0 text-emerald-600 font-bold text-sm hover:underline whitespace-nowrap">View eSIM Plans &rarr;</a>
                  </div>
                </div>
              </section>

              {/* Section 4: Visa & Entry Requirements */}
              <section id="visas" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-900 dark:text-white font-bold text-xl shadow-sm border border-slate-200 dark:border-navy-700">4</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Visa & Entry Requirements</h2>
                </div>
                
                <div className="p-6 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-xl mb-10">
                  <p className="text-red-800 dark:text-red-200 font-medium m-0">
                    <strong>Critical:</strong> You are visiting two sovereign nations. A visa for one does NOT grant entry to the other.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700">
                    <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-navy-700">
                      <img src="https://flagcdn.com/ca.svg" className="w-8 h-5 object-cover rounded shadow-sm" alt="Canada" />
                      Entering Canada
                    </h3>
                    <ul className="space-y-4">
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-slate-900 dark:text-white mb-1">eTA (Electronic Travel Authorization)</strong>
                        Required for visa-exempt nationals (UK, EU, Australia, etc.). Cost: $7 CAD. Approval: Minutes.
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-slate-900 dark:text-white mb-1">Visitor Visa</strong>
                        Required for many other nationalities. Processing time: 30+ days.
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-red-600 dark:text-red-400 mb-1">DUI Rules</strong>
                        Canada has strict inadmissibility rules. A past DUI may bar you from entry. Check legal requirements immediately.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700">
                    <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-navy-700">
                      <img src="https://flagcdn.com/us.svg" className="w-8 h-5 object-cover rounded shadow-sm" alt="USA" />
                      Entering USA
                    </h3>
                    <ul className="space-y-4">
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-slate-900 dark:text-white mb-1">ESTA</strong>
                        Required for Visa Waiver Program countries. Cost: $21 USD. Approval: Up to 72 hours.
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-slate-900 dark:text-white mb-1">B1/B2 Visa</strong>
                        Required if not ESTA eligible. Wait times for interviews can be 6+ months. Apply NOW.
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-slate-900 dark:text-white mb-1">Land Border</strong>
                        If taking the train from Vancouver to Seattle, you clear US immigration <strong>in Vancouver</strong> before boarding.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5: Insider Tips */}
              <section id="insider" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-900 dark:text-white font-bold text-xl shadow-sm border border-slate-200 dark:border-navy-700">5</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Insider Knowledge: What Veterans Know</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 mb-4">🚫</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The "False Economy" of Hostels</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      In Vancouver and San Francisco, a bed in a dormitory can cost $80-$100/night during peak summer. Often, a budget hotel room split between two friends is the same price and safer. Check both.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">🌧️</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The Pacific "June Gloom"</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Don't pack just shorts. Seattle and Vancouver can be chilly (15°C/60°F) and rainy in June. San Francisco summers are notoriously foggy and cold. Pack layers and a light rain jacket.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">🚆</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The Pre-Clearance Advantage</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Flying from Toronto (Terminal 1) or Vancouver to the US involves clearing US Customs <strong>before</strong> you board. Arrive 3 hours early. When you land in the US, you walk out like a domestic passenger.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">🌮</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The Food Scene Winner</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      While SF has Michelin stars, Toronto's diverse food scene is the best value. Use your Toronto days to eat globally (Scarborough for Asian, Kensington Market for Latin) before hitting pricier US cities.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Essential Gear */}
              <section id="packing" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-900 dark:text-white font-bold text-xl shadow-sm border border-slate-200 dark:border-navy-700">6</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Group B Packing Essentials</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="group text-center p-6 border border-slate-200 dark:border-navy-700 rounded-2xl bg-white dark:bg-navy-800 hover:border-emerald-500 transition-all hover:shadow-lg">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">🔌</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Universal Adapter</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">US/Canada use Type A/B.</p>
                    <a href="#" className="text-emerald-600 text-xs font-bold uppercase tracking-widest hover:text-emerald-700">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-200 dark:border-navy-700 rounded-2xl bg-white dark:bg-navy-800 hover:border-emerald-500 transition-all hover:shadow-lg">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">🧥</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Ultralight Rain Shell</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Essential for PNW & SF.</p>
                    <a href="#" className="text-emerald-600 text-xs font-bold uppercase tracking-widest hover:text-emerald-700">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-200 dark:border-navy-700 rounded-2xl bg-white dark:bg-navy-800 hover:border-emerald-500 transition-all hover:shadow-lg">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">🔋</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">20,000mAh Power Bank</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Long match days = dead batteries.</p>
                    <a href="#" className="text-emerald-600 text-xs font-bold uppercase tracking-widest hover:text-emerald-700">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-200 dark:border-navy-700 rounded-2xl bg-white dark:bg-navy-800 hover:border-emerald-500 transition-all hover:shadow-lg">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">🎒</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Clear Stadium Bag</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Mandatory for NFL stadiums.</p>
                    <a href="#" className="text-emerald-600 text-xs font-bold uppercase tracking-widest hover:text-emerald-700">Shop Now</a>
                  </div>
                </div>
              </section>

              {/* Section 7: FAQ */}
              <section id="faq" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <AccordionItem 
                    question="How much budget do I need to follow Group B?"
                    answer={<>For a comfortable mid-range experience covering 3 matches across these expensive cities, budget <strong>$4,500 USD per person</strong> (excluding international arrival). This covers regional flights, decent hotels, and food.</>}
                    isOpen={openFaqIndex === 0}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  />
                  <AccordionItem 
                    question="Can I drive from Vancouver to Seattle?"
                    answer={<>Yes, it's a beautiful 2.5 to 3-hour drive down I-5. However, <strong>border wait times</strong> during the World Cup could spike to 3-4 hours. The <a href="https://www.amtrak.com/cascades-train" target="_blank" rel="noreferrer" className="text-emerald-600 underline hover:text-emerald-700">Amtrak Cascades train</a> is a stress-free alternative that offers stunning coastal views.</>}
                    isOpen={openFaqIndex === 1}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  />
                  <AccordionItem 
                    question="Which Group B city is the most expensive?"
                    answer={<><strong>San Francisco/Bay Area</strong> generally commands the highest hotel rates, followed closely by downtown <strong>Vancouver</strong>. Toronto offers more budget flexibility if you stay further out, but city center prices are still high.</>}
                    isOpen={openFaqIndex === 2}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  />
                  <AccordionItem 
                    question="Where should I stay in the Bay Area?"
                    answer={<>If you are here strictly for football, stay in <strong>Santa Clara</strong> or <strong>San Jose</strong>. Staying in San Francisco city proper means a 60-90 minute commute to Levi's Stadium on match day via Caltrain + VTA Light Rail.</>}
                    isOpen={openFaqIndex === 3}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                  />
                  <AccordionItem 
                    question="How early should I book flights?"
                    answer={<>For the Toronto to Vancouver/West Coast leg, book <strong>4-6 months in advance</strong>. Domestic routes within the West Coast (Seattle to SF) are more frequent, but prices will rise 2 months out.</>}
                    isOpen={openFaqIndex === 4}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 4 ? null : 4)}
                  />
                </div>
              </section>

              {/* Final CTA */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-12 text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-slate-900"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Group B Adventure?</h2>
                  <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                    The journey of a lifetime starts with a single booking. Don't let logistics defeat you before the kickoff.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/world-cup-2026-host-cities" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-emerald-900/20">
                      Explore All Host Cities
                    </Link>
                    <Link to="/planner" className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105">
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
