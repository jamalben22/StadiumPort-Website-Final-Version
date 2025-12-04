
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
  Building, Globe, Wallet
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

export default function GroupCPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/groups/group-c';
  const [activeSection, setActiveSection] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'strategy', 'accommodation', 'budget', 'visas', 'insider', 'packing', 'faq'];
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
        <title>World Cup 2026 Group C Travel Guide: Boston, NYC, Philly, Atlanta & Miami | Stadiumport</title>
        <meta name="description" content="The definitive guide for following Group C in World Cup 2026. Master the Atlantic Corridor (Boston-NYC-Philly) and the Southern Leg (Atlanta-Miami). Trains, flights, and budget strategy." />
        <meta name="keywords" content="World Cup 2026 Group C Travel Guide, Group C matches, Boston NYC Philadelphia Atlanta Miami World Cup, Amtrak Acela World Cup travel, East Coast World Cup itinerary" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
      </Helmet>

      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "World Cup 2026 Group C Travel Guide: The Atlantic Corridor Strategy",
            "description": "The definitive guide for following Group C in World Cup 2026. Complete travel strategy for Boston, New York, Philadelphia, Atlanta, and Miami.",
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
                "name": "What is the best way to travel between Group C cities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For the northern cities (Boston, NYC, Philadelphia), the Amtrak Acela train is superior to flying. For the southern leg (Atlanta, Miami), you must fly. The strategy is 'Train North, Plane South'."
                }
              },
              {
                "@type": "Question",
                "name": "Which Group C city is the most expensive?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "New York City is the most expensive for accommodation, averaging $450+ per night. Boston follows closely. Atlanta and Philadelphia offer better value for mid-range travelers."
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Ultimate Travel Guide
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                World Cup 2026 Group C: <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">The Atlantic Corridor</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                Five powerhouses. One coast. From the history of Boston to the nightlife of Miami, Group C is the tournament's most diverse cultural journey.
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-500" />
                  <span>Updated: June 2025</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span>14 min read</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-emerald-500" />
                  <span>By Stadiumport Strategy Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="sticky top-[72px] z-40 h-1 bg-slate-100 dark:bg-slate-800 w-full">
          <div 
            className="h-full bg-emerald-500 transition-all duration-150"
            style={{ width: `${['intro', 'strategy', 'accommodation', 'budget', 'visas', 'insider', 'packing', 'faq'].indexOf(activeSection) / 7 * 100}%` }}
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
                      { id: 'strategy', label: 'Travel Strategy' },
                      { id: 'accommodation', label: 'Accommodation' },
                      { id: 'budget', label: 'Budget Breakdown' },
                      { id: 'visas', label: 'Entry Requirements' },
                      { id: 'insider', label: 'Insider Secrets' },
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
                
                {/* Sidebar Ad / CTA */}
                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-navy-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Need a Flight?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Check Skyscanner for the best deals between East Coast cities.</p>
                  <a href="https://skyscanner.com" target="_blank" rel="noopener noreferrer" className="block w-full py-2 px-4 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-600 rounded-lg text-center text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-emerald-500 transition-colors">
                    Check Flights
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              
              {/* Introduction */}
              <div id="intro" className="prose prose-lg dark:prose-invert max-w-none mb-20">
                <p className="lead text-2xl md:text-3xl font-medium text-slate-900 dark:text-white leading-relaxed mb-8">
                  Group C offers the highest density of world-class stadiums and the easiest regional travel in the tournament—if you stay North.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-8 mb-8">
                  The group is split into two distinct zones: the <strong className="text-slate-900 dark:text-white">"Northeast Corridor"</strong> (<Link to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" className="text-emerald-600 hover:text-emerald-500 font-semibold decoration-2 hover:underline underline-offset-4">Boston</Link>, <Link to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" className="text-emerald-600 hover:text-emerald-500 font-semibold decoration-2 hover:underline underline-offset-4">NY/NJ</Link>, <Link to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" className="text-emerald-600 hover:text-emerald-500 font-semibold decoration-2 hover:underline underline-offset-4">Philadelphia</Link>) and the <strong className="text-slate-900 dark:text-white">"Southern Heat"</strong> (<Link to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" className="text-emerald-600 hover:text-emerald-500 font-semibold decoration-2 hover:underline underline-offset-4">Atlanta</Link>, <Link to="/world-cup-2026-host-cities/miami-world-cup-2026-guide" className="text-emerald-600 hover:text-emerald-500 font-semibold decoration-2 hover:underline underline-offset-4">Miami</Link>). Your experience depends entirely on how you bridge this gap.
                </p>
                
                <div className="bg-gradient-to-r from-slate-50 to-white dark:from-navy-800 dark:to-navy-900 p-8 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-4 mt-0">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400">🚀</span>
                    The Group C "Power Route"
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-0 text-lg">
                    <strong className="text-slate-900 dark:text-white">Boston 🚄 NYC 🚄 Philadelphia ✈️ Atlanta ✈️ Miami</strong><br/>
                    Use the Amtrak Acela for the first three cities. It's faster than flying downtown-to-downtown. Then, fly from PHL to ATL to switch climates.
                  </p>
                </div>
              </div>

              {/* Section 1: Multi-City Travel Strategy */}
              <section id="strategy" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400 text-xl font-bold">1</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Multi-City Travel Strategy</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-8 mb-10">
                    Group C has the best public transit infrastructure in the US (Northeast) mixed with cities where a car is almost mandatory (Atlanta, Miami).
                  </p>
                  
                  <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-navy-700 mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                      <Train className="w-6 h-6 text-emerald-500" />
                      The "Northeast Corridor" (Train Supremacy)
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      Do not fly between Boston, NYC, and Philadelphia. The airports (Logan, JFK/LGA, PHL) are congested and far from the stadiums.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                        <div>
                          <strong className="text-slate-900 dark:text-white">Amtrak Acela/Regional:</strong> Connects South Station (Boston), Moynihan Hall (NYC), and 30th St Station (Philly).
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="bg-slate-50 dark:bg-navy-900/50 p-3 rounded-lg border border-slate-100 dark:border-navy-700 text-sm">
                              <span className="block font-bold text-slate-700 dark:text-slate-300">Boston to NYC</span>
                              <span className="text-emerald-600 dark:text-emerald-400">3h 45m ($50-$150)</span>
                            </div>
                            <div className="bg-slate-50 dark:bg-navy-900/50 p-3 rounded-lg border border-slate-100 dark:border-navy-700 text-sm">
                              <span className="block font-bold text-slate-700 dark:text-slate-300">NYC to Philadelphia</span>
                              <span className="text-emerald-600 dark:text-emerald-400">1h 20m ($30-$100)</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                        <span className="text-slate-600 dark:text-slate-300">
                          <strong className="text-slate-900 dark:text-white">Bus (Megabus/Bolt):</strong> Extremely cheap ($15-$30) but stuck in I-95 traffic. Only for tight budgets.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                    <Plane className="w-6 h-6 text-emerald-500" />
                    The "Southern Jump"
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-8">
                    Once you leave Philly, distances explode.
                  </p>
                  
                  <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-navy-700 mb-8 shadow-sm">
                    <table className="min-w-full text-sm text-left">
                      <thead className="bg-slate-50 dark:bg-navy-900/50 text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs">
                        <tr>
                          <th className="p-5 border-b dark:border-navy-700">Route</th>
                          <th className="p-5 border-b dark:border-navy-700">Mode</th>
                          <th className="p-5 border-b dark:border-navy-700">Time</th>
                          <th className="p-5 border-b dark:border-navy-700">Est. Price</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-navy-800 divide-y divide-slate-100 dark:divide-navy-700">
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="p-5 font-medium text-slate-900 dark:text-white">Philadelphia (PHL) → Atlanta (ATL)</td>
                          <td className="p-5 text-slate-600 dark:text-slate-400">Flight</td>
                          <td className="p-5 text-slate-600 dark:text-slate-400">2h 15m</td>
                          <td className="p-5 font-bold text-emerald-600 dark:text-emerald-400">$120 - $250</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="p-5 font-medium text-slate-900 dark:text-white">Atlanta (ATL) → Miami (MIA)</td>
                          <td className="p-5 text-slate-600 dark:text-slate-400">Flight</td>
                          <td className="p-5 text-slate-600 dark:text-slate-400">1h 55m</td>
                          <td className="p-5 font-bold text-emerald-600 dark:text-emerald-400">$100 - $200</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="p-5 font-medium text-slate-900 dark:text-white">NYC (JFK) → Miami (MIA)</td>
                          <td className="p-5 text-slate-600 dark:text-slate-400">Flight</td>
                          <td className="p-5 text-slate-600 dark:text-slate-400">3h 10m</td>
                          <td className="p-5 font-bold text-emerald-600 dark:text-emerald-400">$180 - $350</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 p-6 rounded-xl mb-10">
                    <h4 className="font-bold text-amber-800 dark:text-amber-400 mt-0 mb-3 flex items-center gap-2 text-lg">
                      <AlertTriangle className="w-5 h-5" /> Traffic Warning
                    </h4>
                    <p className="text-sm text-amber-900/80 dark:text-amber-100/80 mb-0 leading-relaxed">
                      Atlanta and Miami have some of the worst traffic in the US. In Atlanta, use the <strong>MARTA train</strong> to get to Mercedes-Benz Stadium. In Miami, the stadium is far from South Beach—plan for 60+ minute Uber rides.
                    </p>
                  </div>

                  {/* Affiliate Block: Transport */}
                  <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-navy-800 dark:to-navy-900 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">🚆 Book Your Northeast Corridor Tickets</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">Amtrak prices rise as seats fill up. Book your Boston-NYC-Philly legs early.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a href="https://amtrak.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
                        Search Amtrak Schedules <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a href="https://skyscanner.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-600 hover:border-emerald-500 text-slate-700 dark:text-slate-200 font-bold py-4 px-6 rounded-xl transition-all hover:shadow-md">
                        Find Flights to Miami <Plane className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 mt-4 text-center">We may earn a commission on bookings made through these links.</p>
                  </div>
                </div>
              </section>

              {/* Section 2: Accommodation Strategy */}
              <section id="accommodation" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400 text-xl font-bold">2</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Accommodation Strategy</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-8">
                    Group C contains the two most expensive hotel markets in the US (NYC and Boston). You need a strategy to avoid bankruptcy.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* NYC/NJ */}
                  <div className="group bg-white dark:bg-navy-800 rounded-2xl p-8 border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">New York / NJ</h3>
                      <MapPin className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-6">
                      Highest Cost • Book 9 Months Out
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Best Area:</strong> Midtown Manhattan (Train access to stadium)
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Budget Alt:</strong> Long Island City (Queens) or Secaucus (NJ)
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Warning:</strong> Staying near the stadium (East Rutherford) is boring. Stay in the city and commute.
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:underline decoration-2 underline-offset-4">
                      Search NYC Hotels <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>

                  {/* Boston */}
                  <div className="group bg-white dark:bg-navy-800 rounded-2xl p-8 border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Boston</h3>
                      <MapPin className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                      Very High Cost • Book 8 Months Out
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Best Area:</strong> Back Bay or Seaport
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Budget Alt:</strong> Cambridge (Red Line access)
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Warning:</strong> Gillette Stadium is 45 mins from Boston. The "Event Train" from South Station is the only sane way to get there.
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:underline decoration-2 underline-offset-4">
                      Search Boston Hotels <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>

                  {/* Philadelphia */}
                  <div className="group bg-white dark:bg-navy-800 rounded-2xl p-8 border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Philadelphia</h3>
                      <MapPin className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                      Moderate Cost • Best Value
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Best Area:</strong> Center City (Broad St Line to stadium)
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Budget Alt:</strong> University City
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Warning:</strong> Do not stay near the airport; it's isolated. Center City is vibrant and walkable.
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:underline decoration-2 underline-offset-4">
                      Search Philly Hotels <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>

                  {/* Atlanta */}
                  <div className="group bg-white dark:bg-navy-800 rounded-2xl p-8 border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Atlanta</h3>
                      <MapPin className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                      Moderate Cost • Book 6 Months Out
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Best Area:</strong> Downtown/Midtown (Walkable to stadium)
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Budget Alt:</strong> Buckhead (MARTA access)
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Warning:</strong> Avoid driving to the stadium. Parking is expensive and traffic is gridlock.
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:underline decoration-2 underline-offset-4">
                      Search Atlanta Hotels <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Section 3: Budget Breakdown */}
              <section id="budget" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400 text-xl font-bold">3</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Group C Budget Breakdown</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-8">
                    Estimates are per person for a 12-day trip covering 3 group matches. Does not include international arrival flights.
                  </p>
                </div>
                
                <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700 mb-12 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-navy-700">
                    {/* Economy */}
                    <div className="bg-white dark:bg-navy-800 p-8 text-center">
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Economy Strategy</div>
                      <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">$3,200</div>
                      <p className="text-sm text-slate-500 mb-0 px-4">Hostels in Queens/Philly, bus travel, street food, Cat 3 tickets.</p>
                    </div>
                    
                    {/* Mid-Range */}
                    <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-8 text-center relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
                      <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4">Mid-Range Strategy</div>
                      <div className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-2">$5,800</div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-0 px-4">3-star hotels (NJ/Cambridge), Amtrak Regional, pub dining, Cat 2 tickets.</p>
                    </div>
                    
                    {/* Premium */}
                    <div className="bg-white dark:bg-navy-800 p-8 text-center">
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Premium Experience</div>
                      <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">$10,500+</div>
                      <p className="text-sm text-slate-500 mb-0 px-4">Manhattan/Seaport hotels, Acela First Class, VIP hospitality.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 border border-slate-200 dark:border-navy-700 mb-10">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-emerald-500" />
                    Money-Saving Hacks for Group C
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white">The "Jersey" Trick:</strong> Staying in Secaucus or Hoboken (NJ) is 40% cheaper than Manhattan but only a 15-minute train ride away.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white">Eat in Philly:</strong> Philadelphia has the best food-to-price ratio on the East Coast. Save your fine dining budget for here, not NYC.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white">Avoid Miami South Beach Hotels:</strong> Stay on the mainland (Brickell or Downtown) to save money and be closer to the airport/stadium routes.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Affiliate: eSIM */}
                <div className="flex items-center gap-6 bg-slate-50 dark:bg-navy-800 p-6 rounded-2xl border border-slate-200 dark:border-navy-700 hover:border-emerald-500 transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-navy-900 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">📱</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">US Data Connectivity</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Don't rely on spotty stadium WiFi. Get a US eSIM for $4.50.</p>
                    <a href="#" className="inline-flex items-center text-emerald-600 font-bold text-sm hover:underline">
                      View Airalo Plans <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Section 4: Visa & Entry Requirements */}
              <section id="visas" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400 text-xl font-bold">4</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">US Entry Requirements</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-8">
                    Group C takes place entirely within the United States.
                  </p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 p-8 rounded-2xl">
                  <h3 className="flex items-center gap-3 text-2xl font-bold text-blue-900 dark:text-blue-400 mt-0 mb-6">
                    <img src="https://flagcdn.com/us.svg" className="w-8 h-6 object-cover rounded shadow-sm" alt="USA" />
                    Standard US Entry Rules
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">
                        <strong className="text-blue-900 dark:text-blue-300">ESTA (Visa Waiver):</strong> Citizens of 41 countries (UK, EU, Japan, Aus, etc.) must apply for an ESTA at least 72 hours before flight. Cost: $21. Validity: 2 years.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">
                        <strong className="text-blue-900 dark:text-blue-300">B1/B2 Visa:</strong> If you are not from a VWP country, you need a physical visa. <strong className="text-red-600 dark:text-red-400">APPLY NOW.</strong> Interview wait times in countries like Colombia, India, and Mexico can exceed 300 days.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">
                        <strong className="text-blue-900 dark:text-blue-300">Social Media Check:</strong> US Customs may ask for your social media handles. Be prepared.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5: Insider Tips */}
              <section id="insider" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400 text-xl font-bold">5</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Insider Knowledge: Group C Secrets</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center mb-4 text-xl">🚇</div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">The "MetLife Miracle"</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Getting out of MetLife Stadium after a match is a nightmare. <strong className="text-slate-900 dark:text-white">Tip:</strong> Do not wait for the train immediately. Walk to the "Rideshare Lot" but don't order an Uber there. Walk further out to the redding center to escape the surge pricing zone.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center mb-4 text-xl">☔</div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">Miami Roof Warning</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Hard Rock Stadium has a roof, but it only covers 90% of seats. The lower rows can still get soaked in a tropical downpour. Check your seat view before buying.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center mb-4 text-xl">🧀</div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">The Philly Cheesesteak Rule</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Geno's and Pat's are tourist traps. For a real Philly cheesesteak, go to <strong className="text-slate-900 dark:text-white">Angelo's Pizzeria</strong> or <strong className="text-slate-900 dark:text-white">John's Roast Pork</strong>. Trust us.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center mb-4 text-xl">🌡️</div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">The Climate Shock</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Flying from Boston (18°C/65°F) to Miami (32°C/90°F) in June is a shock to the system. Hydrate on the plane. The humidity in Miami and Atlanta is oppressive.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Essential Gear */}
              <section id="packing" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400 text-xl font-bold">6</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Group C Packing Essentials</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">👟</div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Walking Shoes</h4>
                    <p className="text-xs text-slate-500 mb-4">NYC/Boston = 20k steps/day.</p>
                    <a href="#" className="text-emerald-600 text-xs font-bold uppercase tracking-wider hover:text-emerald-500">Shop Now</a>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">❄️</div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Cooling Towel</h4>
                    <p className="text-xs text-slate-500 mb-4">Lifesaver in Atlanta/Miami.</p>
                    <a href="#" className="text-emerald-600 text-xs font-bold uppercase tracking-wider hover:text-emerald-500">Shop Now</a>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">👜</div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Anti-Theft Bag</h4>
                    <p className="text-xs text-slate-500 mb-4">Pickpockets love NYC subways.</p>
                    <a href="#" className="text-emerald-600 text-xs font-bold uppercase tracking-wider hover:text-emerald-500">Shop Now</a>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">🧢</div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Sun Hat</h4>
                    <p className="text-xs text-slate-500 mb-4">Hard Rock Stadium sun is intense.</p>
                    <a href="#" className="text-emerald-600 text-xs font-bold uppercase tracking-wider hover:text-emerald-500">Shop Now</a>
                  </div>
                </div>
              </section>

              {/* Section 7: FAQ */}
              <section id="faq" className="mb-24 scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10">Frequently Asked Questions</h2>
                <div className="space-y-1">
                  <AccordionItem 
                    question="How far is MetLife Stadium from New York City?"
                    answer="It is about 8 miles, but traffic can make it a 60-minute drive. The train from Penn Station (via Secaucus) takes about 35-45 minutes and is the most reliable option."
                    isOpen={openFaqIndex === 0}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  />
                  <AccordionItem 
                    question="Is it safe to take the subway in NYC and Philly?"
                    answer="Generally, yes, especially during match days when thousands of fans are traveling. Stay alert, keep valuables hidden, and avoid empty train cars late at night."
                    isOpen={openFaqIndex === 1}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  />
                  <AccordionItem 
                    question="Can I do Boston, NYC, and Philly by car?"
                    answer={<span>You <em>can</em>, but you shouldn't. Parking in these cities costs $40-$60 per night. The I-95 corridor is notoriously congested. The train is faster, stress-free, and drops you in the city center.</span>}
                    isOpen={openFaqIndex === 2}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  />
                  <AccordionItem 
                    question="What is the dress code for hospitality areas?"
                    answer="In Miami and NYC, VIP suites often have a 'smart casual' dress code. Jerseys are usually fine, but avoid flip-flops or beachwear in premium sections."
                    isOpen={openFaqIndex === 3}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                  />
                </div>
              </section>

              {/* Final CTA */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Conquer the East Coast?</h2>
                <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed relative z-10">
                  From the Liberty Bell to South Beach, Group C is an unforgettable road trip. Secure your logistics now.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                  <Link to="/world-cup-2026-host-cities" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
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
