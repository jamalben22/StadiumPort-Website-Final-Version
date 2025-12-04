import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';
import { 
  Clock, Calendar, User, ChevronDown, ChevronUp, MapPin, 
  Plane, Car, DollarSign, Sun, Umbrella, 
  ShoppingBag, Info, AlertTriangle, CheckCircle, ArrowRight,
  Lightbulb, Battery, Glasses, Shirt
} from 'lucide-react';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors pr-8">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-amber-500 border-amber-500 text-white' : 'group-hover:border-amber-500 text-slate-400'}`}>
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

export default function GroupDPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/groups/group-d';
  const [activeSection, setActiveSection] = useState('intro');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'strategy', 'accommodation', 'budget', 'insider', 'packing', 'faq'];
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
        <title>World Cup 2026 Group D Travel Guide: Seattle, San Francisco & Los Angeles | Stadiumport</title>
        <meta name="description" content="The ultimate Group D travel guide. Master the West Coast route: Seattle, SF Bay Area, and Los Angeles. Pacific Coast Highway tips, budget strategy, and stadium logistics." />
        <meta name="keywords" content="World Cup 2026 Group D Travel Guide, Seattle World Cup, San Francisco World Cup, Los Angeles World Cup, West Coast World Cup itinerary, SoFi Stadium guide, Levi's Stadium guide, Lumen Field guide" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
      </Helmet>

      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "World Cup 2026 Group D Travel Guide: The Golden Coast Strategy",
            "description": "The definitive guide for following Group D in World Cup 2026. Complete travel strategy for Seattle, San Francisco Bay Area, and Los Angeles.",
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
                "name": "What is the best way to travel between Seattle, SF, and LA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Flying is the only practical option for match-to-match travel. Seattle to LA is a 2.5-hour flight or a 17+ hour drive. Only drive the Pacific Coast Highway if you have 3+ spare days between matches."
                }
              },
              {
                "@type": "Question",
                "name": "Where should I stay for matches at Levi's Stadium?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Stay in San Jose or Santa Clara for match days. San Francisco is 45 miles (60-90 mins) away. The commute from SF to the stadium on a weeknight is brutal."
                }
              },
              {
                "@type": "Question",
                "name": "Is Group D expensive?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Seattle, SF, and LA are three of the most expensive cities in the US. Expect hotels to average $350-$500/night during the tournament. Early booking is mandatory."
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/40 via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                Ultimate Travel Guide
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                World Cup 2026 Group D: <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">The Golden Coast</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                Tech giants, Hollywood dreams, and the Pacific Ocean. Group D connects the three cultural capitals of the American West into one cinematic journey.
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <span>Updated: June 2025</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>15 min read</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-500" />
                  <span>By Stadiumport Strategy Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="sticky top-[72px] z-40 h-1 bg-slate-100 dark:bg-slate-800 w-full">
          <div 
            className="h-full bg-amber-500 transition-all duration-150"
            style={{ width: `${['intro', 'strategy', 'accommodation', 'budget', 'insider', 'packing', 'faq'].indexOf(activeSection) / 6 * 100}%` }}
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
                      { id: 'strategy', label: 'West Coast Logistics' },
                      { id: 'accommodation', label: 'Accommodation' },
                      { id: 'budget', label: 'Budget Breakdown' },
                      { id: 'insider', label: 'Insider Secrets' },
                      { id: 'packing', label: 'Packing Essentials' },
                      { id: 'faq', label: 'FAQ' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left pl-6 py-2 text-sm transition-all relative ${
                          activeSection === item.id 
                            ? 'text-amber-600 dark:text-amber-400 font-bold' 
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                        }`}
                      >
                        {activeSection === item.id && (
                          <span className="absolute left-[-1px] top-0 bottom-0 w-0.5 bg-amber-600 dark:bg-amber-400"></span>
                        )}
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
                
                {/* Sidebar Ad / CTA */}
                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-navy-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Need a Car?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Driving Highway 1? Get a convertible for the full experience.</p>
                  <a href="https://rentalcars.com" target="_blank" rel="noopener noreferrer" className="block w-full py-2 px-4 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-600 rounded-lg text-center text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-amber-500 transition-colors">
                    Check Rentals
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              
              {/* Introduction */}
              <div id="intro" className="prose prose-lg dark:prose-invert max-w-none mb-20">
                <p className="lead text-2xl md:text-3xl font-medium text-slate-900 dark:text-white leading-relaxed mb-8">
                  Group D is the "Bucket List" group. It offers the most beautiful landscapes and the most modern stadiums, but it punishes the unprepared traveler with brutal traffic and deceptive distances.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-8 mb-8">
                  The route covers the <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="text-amber-600 hover:text-amber-500 font-semibold decoration-2 hover:underline underline-offset-4">Pacific Northwest (Seattle)</Link>, the <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="text-amber-600 hover:text-amber-500 font-semibold decoration-2 hover:underline underline-offset-4">Bay Area (SF/Santa Clara)</Link>, and <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="text-amber-600 hover:text-amber-500 font-semibold decoration-2 hover:underline underline-offset-4">Southern California (Los Angeles)</Link>. These regions operate like separate countries with unique climates, transit systems, and vibes.
                </p>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-2xl border-l-4 border-amber-500 shadow-sm">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-4 mt-0">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400">🚀</span>
                    The Group D "Golden Strategy"
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-0 text-lg">
                    <strong className="text-slate-900 dark:text-white">Fly the Gap, Drive the Coast.</strong><br/>
                    Do <strong className="text-red-600 dark:text-red-400">NOT</strong> attempt to drive Seattle to SF for a match (13 hours). Fly between cities (Alaska Airlines is king here). Only rent a car for the SF-to-LA leg via Highway 1 if you have 3+ spare days to enjoy the views.
                  </p>
                </div>
              </div>

              {/* Section 1: Multi-City Travel Strategy */}
              <section id="strategy" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400 text-xl font-bold">1</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">West Coast Logistics</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-8 mb-10">
                    The West Coast is massive. European fans often underestimate the scale. Seattle to Los Angeles is the same distance as London to Rome.
                  </p>
                  
                  <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-navy-700 mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                      <Plane className="w-6 h-6 text-amber-500" />
                      The Air Corridor (Primary Mode)
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      This is one of the busiest air corridors in the world. Flights are frequent, reliable, and relatively short.
                    </p>
                    
                    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-navy-700 mb-8 shadow-sm">
                      <table className="min-w-full text-sm text-left">
                        <thead className="bg-slate-50 dark:bg-navy-900/50 text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs">
                          <tr>
                            <th className="p-5 border-b dark:border-navy-700">Route</th>
                            <th className="p-5 border-b dark:border-navy-700">Flight Time</th>
                            <th className="p-5 border-b dark:border-navy-700">Best Airport</th>
                            <th className="p-5 border-b dark:border-navy-700">Est. Price</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-navy-800 divide-y divide-slate-100 dark:divide-navy-700">
                          <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                            <td className="p-5 font-medium text-slate-900 dark:text-white">Seattle (SEA) → San Francisco</td>
                            <td className="p-5 text-slate-600 dark:text-slate-400">2h 05m</td>
                            <td className="p-5 text-slate-600 dark:text-slate-400">SFO or SJC (San Jose)</td>
                            <td className="p-5 font-bold text-amber-600 dark:text-amber-400">$120 - $200</td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                            <td className="p-5 font-medium text-slate-900 dark:text-white">San Francisco → Los Angeles</td>
                            <td className="p-5 text-slate-600 dark:text-slate-400">1h 20m</td>
                            <td className="p-5 text-slate-600 dark:text-slate-400">BUR (Burbank) or LAX</td>
                            <td className="p-5 font-bold text-amber-600 dark:text-amber-400">$80 - $150</td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                            <td className="p-5 font-medium text-slate-900 dark:text-white">Seattle (SEA) → Los Angeles</td>
                            <td className="p-5 text-slate-600 dark:text-slate-400">2h 45m</td>
                            <td className="p-5 text-slate-600 dark:text-slate-400">LAX or SNA (Orange Co)</td>
                            <td className="p-5 font-bold text-amber-600 dark:text-amber-400">$150 - $250</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 p-6 rounded-xl mb-10">
                    <h4 className="font-bold text-amber-800 dark:text-amber-400 mt-0 mb-3 flex items-center gap-2 text-lg">
                      <Lightbulb className="w-5 h-5" /> Pro Tip: The Airport Cheat Codes
                    </h4>
                    <ul className="text-sm text-amber-900/80 dark:text-amber-100/80 mb-0 leading-relaxed space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                        <span><strong className="text-amber-900 dark:text-amber-200">In LA:</strong> Fly into <strong>Burbank (BUR)</strong> instead of LAX. It's closer to Hollywood/Downtown, has zero lines, and you'll be curbside in 5 minutes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                        <span><strong className="text-amber-900 dark:text-amber-200">In Bay Area:</strong> Fly into <strong>San Jose (SJC)</strong> if you are going straight to the match. Levi's Stadium is minutes away. SFO is for tourists staying in the city.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Affiliate Block: Transport */}
                  <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-navy-800 dark:to-navy-900 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">✈️ Lock In Your West Coast Flights</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">Prices for SEA-LAX routes spike 3 weeks before travel. Book now.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a href="https://skyscanner.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
                        Compare Flights (Skyscanner) <Plane className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                      </a>
                      <a href="https://rentalcars.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-600 hover:border-amber-500 text-slate-700 dark:text-slate-200 font-bold py-4 px-6 rounded-xl transition-all hover:shadow-md">
                        Rent a Convertible for Hwy 1 <Car className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 mt-4 text-center">We may earn a commission on bookings made through these links.</p>
                  </div>
                </div>
              </section>

              {/* Section 2: Accommodation Strategy */}
              <section id="accommodation" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400 text-xl font-bold">2</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Accommodation Strategy</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-8">
                    Group D features the "Tech Tax." San Francisco and Seattle have high baseline hotel costs. LA is spread out, so location is everything.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Seattle */}
                  <div className="group bg-white dark:bg-navy-800 rounded-2xl p-8 border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-amber-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-500">Seattle</h3>
                      <MapPin className="w-6 h-6 text-amber-500" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                      High Cost • Book 6 Months Out
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Best Area:</strong> Pioneer Square / SoDo (Walk to Lumen Field)
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Budget Alt:</strong> SeaTac Airport Zone (Light rail directly to stadium)
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Warning:</strong> Downtown Seattle has steep hills. Check if your hotel is uphill from the train station if you have heavy bags.
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center text-amber-600 dark:text-amber-400 font-bold text-sm hover:underline decoration-2 underline-offset-4">
                      Search Seattle Hotels <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>

                  {/* Bay Area */}
                  <div className="group bg-white dark:bg-navy-800 rounded-2xl p-8 border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-amber-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-500">SF Bay Area</h3>
                      <MapPin className="w-6 h-6 text-amber-500" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-6">
                      Very High Cost • Strategic Choice
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Best Area:</strong> San Jose / Santa Clara (Near Levi's Stadium)
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Tourist Pick:</strong> Union Square / Fisherman's Wharf (SF City)
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">Warning:</strong> If you stay in SF, you face a 90-minute commute to the stadium. Decide: Tourism or Football convenience?
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center text-amber-600 dark:text-amber-400 font-bold text-sm hover:underline decoration-2 underline-offset-4">
                      Search Bay Area Hotels <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>

                  {/* Los Angeles */}
                  <div className="group bg-white dark:bg-navy-800 rounded-2xl p-8 border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-amber-500/30 transition-all duration-300 md:col-span-2">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-500">Los Angeles</h3>
                      <MapPin className="w-6 h-6 text-amber-500" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
                      Varies • Traffic is Key
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="space-y-4">
                        <li className="text-sm text-slate-600 dark:text-slate-300">
                          <strong className="text-slate-900 dark:text-white block mb-1">Best Area:</strong> Culver City or South Bay (Manhattan Beach) - Close to SoFi.
                        </li>
                        <li className="text-sm text-slate-600 dark:text-slate-300">
                          <strong className="text-slate-900 dark:text-white block mb-1">Tourist Pick:</strong> West Hollywood / Santa Monica.
                        </li>
                      </ul>
                      <ul className="space-y-4">
                        <li className="text-sm text-slate-600 dark:text-slate-300">
                          <strong className="text-slate-900 dark:text-white block mb-1">Warning:</strong> Do NOT stay in "Downtown LA" thinking it's central. It's far from the beach and traffic to SoFi can be heavy. Also, avoid staying <em>at</em> LAX unless flying out early.
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8">
                      <a href="https://booking.com" className="inline-flex items-center text-amber-600 dark:text-amber-400 font-bold text-sm hover:underline decoration-2 underline-offset-4">
                        Search LA Hotels <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Budget Breakdown */}
              <section id="budget" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400 text-xl font-bold">3</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Group D Budget Breakdown</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-8">
                    Estimates are per person for a 12-day trip covering 3 group matches.
                  </p>
                </div>
                
                <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700 mb-12 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-navy-700">
                    {/* Economy */}
                    <div className="bg-white dark:bg-navy-800 p-8 text-center">
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Economy Strategy</div>
                      <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">$3,800</div>
                      <p className="text-sm text-slate-500 mb-0 px-4">Hostels/Motels, public transit only, street tacos, Cat 3 tickets.</p>
                    </div>
                    
                    {/* Mid-Range */}
                    <div className="bg-amber-50/50 dark:bg-amber-900/10 p-8 text-center relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
                      <div className="text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-4">Mid-Range Strategy</div>
                      <div className="text-4xl font-extrabold text-amber-600 dark:text-amber-400 mb-2">$6,500</div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-0 px-4">3-star hotels, Uber/Lyft mix, casual dining, Cat 2 tickets.</p>
                    </div>
                    
                    {/* Premium */}
                    <div className="bg-white dark:bg-navy-800 p-8 text-center">
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Premium Experience</div>
                      <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">$12,000+</div>
                      <p className="text-sm text-slate-500 mb-0 px-4">Beachfront hotels, rental car, fine dining (Nobu/Providence), VIP hospitality.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 border border-slate-200 dark:border-navy-700 mb-10">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-amber-500" />
                    Money-Saving Hacks for Group D
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white">The "CalTrain" Trick (SF):</strong> Instead of a $100 Uber to Levi's Stadium, take the CalTrain from SF to Mountain View, then the VTA Light Rail. It costs ~$15.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white">Eat Asian Food:</strong> Seattle and the Bay Area have the best Asian food in the hemisphere. Dim Sum, Ramen, and Pho are often cheaper and better than "New American" bistros.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white">Free Views:</strong> Skip the Space Needle ($35+). Go to Kerry Park for the iconic skyline view for free. Skip the Hollywood Sign tour. Hike to it for free.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4: Insider Tips */}
              <section id="insider" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400 text-xl font-bold">4</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Insider Knowledge: West Coast Secrets</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center mb-4 text-xl">❄️</div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">The "Mark Twain" Rule</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      "The coldest winter I ever spent was a summer in San Francisco." Do not pack just shorts. SF in June/July is foggy and cold (15°C/60°F) due to "Karl the Fog." Bring a hoodie.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center mb-4 text-xl">☀️</div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">The Levi's Sun Trap</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Levi's Stadium (Santa Clara) has a design flaw: the east side gets blasted by direct sun. It can be 35°C (95°F). Bring a hat, sunglasses, and sunscreen if you are not in a suite.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center mb-4 text-xl">🚗</div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">The "405" Reality</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      In LA, distance is measured in time, not miles. "10 miles" can mean 1 hour. Always pad your travel time by 50% on match days.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center mb-4 text-xl">🚢</div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">The Seattle Ferry Commute</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      For a magical experience, stay in Bainbridge Island or Bremerton and take the ferry to downtown Seattle for the match. The stadium is a short walk from the ferry terminal.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Essential Gear */}
              <section id="packing" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400 text-xl font-bold">5</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Group D Packing Essentials</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">🧥</div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Windbreaker</h4>
                    <p className="text-xs text-slate-500 mb-4">Mandatory for SF & Seattle nights.</p>
                    <a href="#" className="text-amber-600 text-xs font-bold uppercase tracking-wider hover:text-amber-500">Shop Now</a>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">🕶️</div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Polarized Shades</h4>
                    <p className="text-xs text-slate-500 mb-4">The California sun glare is real.</p>
                    <a href="#" className="text-amber-600 text-xs font-bold uppercase tracking-wider hover:text-amber-500">Shop Now</a>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">🔋</div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Power Bank</h4>
                    <p className="text-xs text-slate-500 mb-4">Long travel days drain batteries.</p>
                    <a href="#" className="text-amber-600 text-xs font-bold uppercase tracking-wider hover:text-amber-500">Shop Now</a>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">🧴</div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Sunscreen</h4>
                    <p className="text-xs text-slate-500 mb-4">Levi's Stadium offers zero shade.</p>
                    <a href="#" className="text-amber-600 text-xs font-bold uppercase tracking-wider hover:text-amber-500">Shop Now</a>
                  </div>
                </div>
              </section>

              {/* Section 6: FAQ */}
              <section id="faq" className="mb-24 scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10">Frequently Asked Questions</h2>
                <div className="space-y-1">
                  <AccordionItem 
                    question="Is it better to drive or fly between cities?"
                    answer={<span><strong className="text-slate-900 dark:text-white">Fly.</strong> Driving from Seattle to SF takes 13+ hours. SF to LA takes 6-7 hours on the boring I-5, or 10+ hours on the scenic Hwy 1. Unless you are making a road trip vacation out of it, fly.</span>}
                    isOpen={openFaqIndex === 0}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  />
                  <AccordionItem 
                    question="Is public transport safe in these cities?"
                    answer="Yes, but with caveats. Seattle's Light Rail is generally safe and clean. SF's BART is efficient but can be gritty; stay alert. LA's Metro is improving but ride-share is often preferred at night."
                    isOpen={openFaqIndex === 1}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  />
                  <AccordionItem 
                    question="Can I visit Vancouver while in Seattle?"
                    answer="Absolutely. Vancouver (Canada) is a 3-hour drive or a beautiful 4-hour train ride (Amtrak Cascades) from Seattle. Remember you will need your passport to cross the border."
                    isOpen={openFaqIndex === 2}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  />
                  <AccordionItem 
                    question="What is the dress code for LA nightlife?"
                    answer='LA is "upscale casual." You can wear designer sneakers to almost any club, but shorts are usually a no-go for men at night.'
                    isOpen={openFaqIndex === 3}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                  />
                </div>
              </section>

              {/* Final CTA */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready for the Golden Coast?</h2>
                <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed relative z-10">
                  From the Space Needle to the Hollywood Sign, Group D is the adventure of a lifetime. Secure your logistics now.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                  <Link to="/world-cup-2026-host-cities" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/25">
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
