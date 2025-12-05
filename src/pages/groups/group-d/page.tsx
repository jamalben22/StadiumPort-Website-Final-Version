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
  Car, 
  CreditCard, 
  AlertTriangle, 
  ExternalLink,
  Sun,
  CloudRain,
  Camera
} from 'lucide-react';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors pr-8 tracking-tight">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-amber-500 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-amber-500/10 group-hover:text-amber-600'}`}>
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

export default function GroupDPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/2026-world-cup-group-d-travel-guide';
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
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] font-sans text-slate-900 dark:text-slate-100 selection:bg-amber-500/30">
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
                "name": "Group D Guide",
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
              }
            ]
          }
        ]}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-[#FAFAFA] to-[#FAFAFA] dark:from-amber-900/20 dark:via-[#0A0A0A] dark:to-[#0A0A0A]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] dark:from-[#0A0A0A] to-transparent" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm text-amber-700 dark:text-amber-400 text-xs font-bold tracking-[0.15em] uppercase mb-8 animate-fade-in">
                <MapPin className="w-3 h-3" />
                Ultimate Travel Guide
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-slate-900 dark:text-white animate-fade-up">
                World Cup 2026 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-300">Group D Strategy</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal mb-10 animate-fade-up delay-100">
                Tech giants, Hollywood dreams, and the Pacific Ocean. Group D connects the three cultural capitals of the American West into one cinematic journey.
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
                  <Calendar className="w-4 h-4 text-amber-500" /> 
                  Updated: June 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500" /> 
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
            <ChevronDown className="w-5 h-5 text-amber-500" />
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
                          : 'border-transparent text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                
                <div className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Planning a Trip?</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Get our free checklist for Group D travel.</p>
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
                    Group D is the "Bucket List" group. It offers the most beautiful landscapes and the most modern stadiums, but it punishes the unprepared traveler with brutal traffic and deceptive distances.
                  </p>
                  <p className="text-lg leading-loose text-slate-600 dark:text-slate-300 mb-10">
                    The route covers the <Link to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" className="text-amber-600 hover:text-amber-500 font-semibold underline decoration-amber-200 dark:decoration-amber-800 underline-offset-4 decoration-2">Pacific Northwest (Seattle)</Link>, the <Link to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" className="text-amber-600 hover:text-amber-500 font-semibold underline decoration-amber-200 dark:decoration-amber-800 underline-offset-4 decoration-2">Bay Area (SF/Santa Clara)</Link>, and <Link to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" className="text-amber-600 hover:text-amber-500 font-semibold underline decoration-amber-200 dark:decoration-amber-800 underline-offset-4 decoration-2">Southern California (Los Angeles)</Link>. These regions operate like separate countries with unique climates, transit systems, and vibes.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 mt-12">
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
                  
                  <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 dark:border-slate-800">
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
                  <div className="mt-12 p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                          <Plane className="w-5 h-5 text-amber-500" />
                          Secure Your West Coast Flights
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Flight prices for June 2026 are expected to surge by 40%.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a href="https://skyscanner.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1 text-sm">
                        Check Skyscanner Deals <ArrowRight className="w-4 h-4" />
                      </a>
                      <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-500 text-slate-700 dark:text-slate-200 font-bold py-4 px-6 rounded-xl transition-all hover:bg-white dark:hover:bg-slate-700 text-sm">
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
                  <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">02</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Accommodation Strategy</h2>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose max-w-3xl">
                  Group D cities are notoriously expensive. Location is everything—staying in the wrong neighborhood can mean a 2-hour commute to the match.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Seattle */}
                  <div className="group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Seattle</h3>
                      <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Most Walkable</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 6 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                        <span><strong>Best Area:</strong> Pioneer Square / Downtown (Walk to Lumen Field)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                        <span><strong>Budget Alt:</strong> SeaTac Airport Area (Link Light Rail takes you direct to stadium)</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs hover:text-amber-700 transition-all group-hover:translate-x-2 uppercase tracking-widest">
                      Search Seattle Hotels <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Bay Area */}
                  <div className="group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">SF Bay Area</h3>
                      <span className="px-3 py-1 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Logistics Trap</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Strategy Required</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                        <span><strong>The Split:</strong> Stadium is in Santa Clara (Silicon Valley), not San Francisco.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                        <span><strong>Recommendation:</strong> Stay in San Jose/Santa Clara for match days. Stay in SF for tourism days.</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs hover:text-amber-700 transition-all group-hover:translate-x-2 uppercase tracking-widest">
                      Search Bay Area Hotels <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Los Angeles */}
                  <div className="group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Los Angeles</h3>
                      <span className="px-3 py-1 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Extreme Traffic</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book 10 Months Out</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                        <span><strong>Best Area:</strong> Culver City / Marina Del Rey (Close to SoFi Stadium)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                        <span><strong>Avoid:</strong> Staying in Downtown LA (DTLA) if you want beach vibes. It's far from the ocean.</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs hover:text-amber-700 transition-all group-hover:translate-x-2 uppercase tracking-widest">
                      Search LA Hotels <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Section 3: Budget Breakdown */}
              <section id="budget" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">03</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group D Budget Breakdown</h2>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose">
                  Estimates are per person for a 12-day trip covering 3 group matches. Does not include international arrival flights.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {/* Economy */}
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Economy Strategy</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$3,800</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Hostels, public transit only (no Ubers), street food, cheapest match tickets.</p>
                  </div>
                  
                  {/* Mid-Range */}
                  <div className="p-8 rounded-3xl border border-amber-100 dark:border-amber-900 bg-amber-50 dark:bg-amber-900/10 relative overflow-hidden transform md:-translate-y-4 shadow-xl shadow-amber-900/5">
                    <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-widest">Recommended</div>
                    <div className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-4">Mid-Range Strategy</div>
                    <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-4 tracking-tighter">$6,200</div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">3-star hotels, mix of Uber/Transit, domestic flights, Cat 2 tickets.</p>
                  </div>
                  
                  {/* Premium */}
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Premium Experience</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$11,000+</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Santa Monica beachfront, VIP stadium access, rental convertible, fine dining.</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
                    <CreditCard className="w-6 h-6 text-amber-500" />
                    Money-Saving Hacks for Group D
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-xs flex-shrink-0">1</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">Burbank (BUR) over LAX:</strong> Flights into Burbank are often cheaper and save you $50+ in Uber fares because it's closer to the action.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-xs flex-shrink-0">2</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">In-N-Out Burger:</strong> The West Coast's legendary burger chain is not just delicious; it's incredibly cheap ($5 for a meal). A budget savior.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-xs flex-shrink-0">3</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">Caltrain in SF:</strong> Taking an Uber from SF to Levi's Stadium can cost $150+ on game day. Caltrain is $10.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4: Visa & Entry Requirements */}
              <section id="visas" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">04</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Visa & Entry Requirements</h2>
                </div>
                
                <div className="grid md:grid-cols-1 gap-8">
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                    <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <img src="https://flagcdn.com/us.svg" className="w-8 h-auto object-cover rounded shadow-sm" alt="USA" />
                      Entering USA
                    </h3>
                    <ul className="space-y-6">
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-slate-900 dark:text-white mb-1 font-bold">ESTA</strong>
                        Required for Visa Waiver Program countries. Apply at least 72 hours in advance.
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-slate-900 dark:text-white mb-1 font-bold">Strict Customs</strong>
                        California has strict agriculture laws. Do not bring fresh fruit, meat, or seeds into the state, even from other parts of the US.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5: Insider Tips */}
              <section id="insider" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">05</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Insider Knowledge</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-xl mb-6">🌫️</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">June Gloom is Real</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Los Angeles in June is often cloudy and cool in the mornings ("June Gloom"). Don't expect perfect beach weather until the afternoon.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-xl mb-6">☀️</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The Levi's Stadium Sun</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Levi's Stadium has a notorious design flaw: the East side gets blasted by intense sun. Bring a hat and sunglasses, or pay extra for the shaded West side.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-xl mb-6">☕</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Seattle Coffee Culture</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Skip the big chains. Seattle has the best independent coffee in America. Look for "roasteries" in Capitol Hill or Pioneer Square.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-xl mb-6">🚗</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">The 405 Freeway</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      In LA, "10 miles" can take 90 minutes. Always check Google Maps/Waze before leaving. Traffic is a geological force here.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Essential Gear */}
              <section id="packing" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">06</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group D Packing Essentials</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧥</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Light Jacket</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">SF summers are cold.</p>
                    <a href="#" className="text-amber-600 text-[10px] font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🕶️</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Sunglasses</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Essential for CA.</p>
                    <a href="#" className="text-amber-600 text-[10px] font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔋</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Power Bank</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Long travel days.</p>
                    <a href="#" className="text-amber-600 text-[10px] font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧴</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Sunscreen</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Burn time: 15 mins.</p>
                    <a href="#" className="text-amber-600 text-[10px] font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">Shop Now</a>
                  </div>
                </div>
              </section>

              {/* Section 7: FAQ */}
              <section id="faq" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  <AccordionItem 
                    question="Can I take a train from Seattle to LA?"
                    answer={<>Technically yes, the Amtrak Coast Starlight exists. But it takes <strong>35 hours</strong>. Unless you are a train enthusiast, fly.</>}
                    isOpen={openFaqIndex === 0}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  />
                  <AccordionItem 
                    question="Is San Francisco safe?"
                    answer={<>Like any major city, it has issues. Avoid the Tenderloin neighborhood and parts of SoMa late at night. Tourist areas like Fisherman's Wharf and Union Square are heavily patrolled, but stay alert.</>}
                    isOpen={openFaqIndex === 1}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  />
                  <AccordionItem 
                    question="Do I need a car in Seattle?"
                    answer={<>No. The Link Light Rail connects the airport, downtown, and the stadium perfectly. Parking in Seattle is expensive and unnecessary.</>}
                    isOpen={openFaqIndex === 2}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  />
                  <AccordionItem 
                    question="What is the 'Golden Gate' weather rule?"
                    answer={<>"The coldest winter I ever spent was a summer in San Francisco." Mark Twain might not have said it, but it's true. It can be 55°F (12°C) and foggy in August. Bring layers.</>}
                    isOpen={openFaqIndex === 3}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                  />
                </div>
              </section>

              {/* Final CTA */}
              <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 text-white p-12 md:p-20 text-center shadow-2xl shadow-slate-900/20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-slate-900 to-slate-900"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready for the West Coast?</h2>
                  <p className="text-slate-300 mb-12 text-lg leading-relaxed font-light">
                    From the Space Needle to the Hollywood Sign, Group D is a movie waiting to happen. Don't get stuck in traffic—plan ahead.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/world-cup-2026-host-cities" className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:scale-105 shadow-lg hover:shadow-amber-500/30 text-base">
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
