import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPin, Calendar, ArrowRight, Train, Plane, Utensils, Ticket, 
  Music, Sun, Car, Flame, Shield, Smartphone, Briefcase, 
  Globe, CreditCard, AlertTriangle, CheckCircle2, CloudRain, Camera,
  ChevronDown, ChevronUp, Clock, User
} from 'lucide-react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';

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

export default function GroupGPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/2026-world-cup-group-g-travel-guide';
  const [activeSection, setActiveSection] = useState('intro');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'matrix', 'strategy', 'cities', 'visa', 'insider', 'faq'];
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
    <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-white selection:bg-emerald-500/30">
      <Helmet>
        <title>Group G World Cup 2026 Travel Guide: Vancouver, Seattle & Los Angeles | stadiumport</title>
        <meta name="description" content="The definitive travel guide for World Cup 2026 Group G. Master the 'Cascadia Corridor' (Vancouver-Seattle) and the jump to Los Angeles. Amtrak tips, border crossings, and budget strategies." />
        <meta name="keywords" content="Group G World Cup 2026, Vancouver World Cup travel, Seattle World Cup guide, Los Angeles World Cup, Amtrak Cascades World Cup, West Coast World Cup itinerary" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
      </Helmet>

      <SchemaOrg 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group G World Cup 2026 Travel Guide: The Pacific Coast Route",
            "description": "Complete logistics guide for World Cup Group G fans traveling between Vancouver, Seattle, and Los Angeles. Focuses on the Amtrak Cascades route and LA flight strategy.",
            "author": { "@type": "Organization", "name": "stadiumport" },
            "publisher": { 
              "@type": "Organization", 
              "name": "stadiumport",
              "logo": { "@type": "ImageObject", "url": `${siteUrl}/images/Logos/stadiumport-logo.png` }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": `${siteUrl}${pageUrl}` }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best way to travel between Vancouver and Seattle?",
                "acceptedAnswer": { "@type": "Answer", "text": "The Amtrak Cascades train is the best option. It's scenic, comfortable, and drops you in the city centers (King Street Station in Seattle, Pacific Central in Vancouver). Driving can involve unpredictable 2-4 hour border wait times." }
              },
              {
                "@type": "Question",
                "name": "Do I need a car in Los Angeles?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, generally. While SoFi Stadium has shuttle options, LA is vast. However, if you stay in Santa Monica or Downtown LA (DTLA), you can use the Metro Rail to reach specific hubs, but rideshare/rental is often faster." }
              },
              {
                "@type": "Question",
                "name": "How far is Los Angeles from Seattle?",
                "acceptedAnswer": { "@type": "Answer", "text": "It is a 2.5-hour flight. Driving takes 17+ hours. Do not attempt to drive between Seattle and LA unless you are turning it into a multi-day road trip vacation." }
              },
              {
                "@type": "Question",
                "name": "Do I need a visa for both Canada and the USA?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most international travelers need an eTA for Canada and an ESTA (or Visa) for the USA. You will cross the border when traveling between Vancouver and Seattle." }
              },
              {
                "@type": "Question",
                "name": "What is the weather like in Group G cities?",
                "acceptedAnswer": { "@type": "Answer", "text": "Vancouver and Seattle will be mild (65-75°F / 18-24°C) and potentially rainy. Los Angeles will be sunny and warm (75-85°F / 24-29°C). Pack layers." }
              }
            ]
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
                "name": "Group G",
                "item": `${siteUrl}${pageUrl}`
              }
            ]
          }
        ]}
      />

      <Header />

      <main className="relative">
        {/* Hero Section */}
        <div className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                <CloudRain className="w-3 h-3 animate-pulse" />
                The Pacific Coast Route
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                World Cup 2026 Group G: <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Cascadia & Angels</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                Vancouver. Seattle. Los Angeles. Two distinct worlds separated by a 2.5-hour flight. The lush, passionate soccer culture of the North meets the global spectacle of Hollywood.
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
                  <span>15 min read</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-emerald-500" />
                  <span>By stadiumport Strategy Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="sticky top-[72px] z-40 h-1 bg-slate-100 dark:bg-slate-800 w-full">
          <div 
            className="h-full bg-emerald-500 transition-all duration-150"
            style={{ width: `${['intro', 'matrix', 'strategy', 'cities', 'visa', 'insider', 'faq'].indexOf(activeSection) / 6 * 100}%` }}
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
                      { id: 'matrix', label: 'Host City Matrix' },
                      { id: 'strategy', label: 'Travel Strategy' },
                      { id: 'cities', label: 'City Essentials' },
                      { id: 'visa', label: 'Visa & Border' },
                      { id: 'insider', label: 'Insider Knowledge' },
                      { id: 'faq', label: 'FAQ' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left pl-6 py-2 text-sm transition-all duration-200 border-l-2 -ml-[1px] ${
                          activeSection === item.id 
                            ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold' 
                            : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Mini Widgets */}
                <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-2xl border border-slate-100 dark:border-navy-700">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Stats</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Total Distance</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">1,130 mi</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Flight Time</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">2.5 hrs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Train Route</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">Cascades</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-24">
              
              {/* 1. Intro */}
              <section id="intro" className="scroll-mt-32">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="lead text-2xl md:text-3xl leading-relaxed font-light text-slate-600 dark:text-slate-300 mb-8">
                    Group G is the most scenic group in the tournament. You start in "Cascadia"—the bi-national region of Vancouver and Seattle, famous for coffee, mountains, and the fiercest soccer rivalry in North America. Then, you fly south to Los Angeles, the entertainment capital of the world.
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    The logistics here are cleaner than other groups. You have two neighbors linked by a stunning train ride, and one major flight. But don't underestimate the costs—Vancouver and LA are among the most expensive cities in the World Cup.
                  </p>
                </div>
              </section>

              {/* 2. Matrix */}
              <section id="matrix" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Host City Matrix</h2>
                </div>

                <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-navy-700 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 dark:bg-navy-900/50 text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                        <tr>
                          <th className="px-8 py-6">City</th>
                          <th className="px-8 py-6">Stadium</th>
                          <th className="px-8 py-6">Vibe</th>
                          <th className="px-8 py-6">Est. Daily Cost</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-navy-700">
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="px-8 py-6 font-bold text-slate-900 dark:text-white">Vancouver, CAN</td>
                          <td className="px-8 py-6 text-slate-600 dark:text-slate-300">BC Place</td>
                          <td className="px-8 py-6 text-slate-600 dark:text-slate-300">Urban, Scenic, Walkable</td>
                          <td className="px-8 py-6 text-red-500 font-bold">$$$$ (Very High)</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="px-8 py-6 font-bold text-slate-900 dark:text-white">Seattle, USA</td>
                          <td className="px-8 py-6 text-slate-600 dark:text-slate-300">Lumen Field</td>
                          <td className="px-8 py-6 text-slate-600 dark:text-slate-300">Loud, Passionate, Indie</td>
                          <td className="px-8 py-6 text-orange-500 font-bold">$$$ (High)</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="px-8 py-6 font-bold text-slate-900 dark:text-white">Los Angeles, USA</td>
                          <td className="px-8 py-6 text-slate-600 dark:text-slate-300">SoFi Stadium</td>
                          <td className="px-8 py-6 text-slate-600 dark:text-slate-300">Glamorous, Sprawling</td>
                          <td className="px-8 py-6 text-red-500 font-bold">$$$$ (Very High)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 3. Strategy */}
              <section id="strategy" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Train className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Cascadia Strategy</h2>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 mb-12">
                  <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    The "Train & Plane" Plan
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-navy-800 flex items-center justify-center font-bold text-emerald-600 shadow-sm shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Vancouver ↔ Seattle</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          Take the <strong>Amtrak Cascades</strong> train. It takes 4 hours, offers stunning coastal views, and avoids unpredictable border traffic jams.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-navy-800 flex items-center justify-center font-bold text-blue-600 shadow-sm shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Seattle ↔ Los Angeles</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          Fly. It's a 2.5-hour flight. Driving is 17+ hours. Do not attempt the drive unless you have 3+ days for a leisurely road trip.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="https://www.amtrak.com/cascades-train" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors">
                      Book Amtrak Cascades <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="https://skyscanner.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-navy-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-navy-600 font-bold hover:border-emerald-500 transition-colors">
                      Check SEA-LAX Flights
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Transit & Border Details</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-navy-800 p-6 rounded-xl border border-slate-100 dark:border-navy-700">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Vancouver → Seattle</div>
                    <div className="text-lg font-bold text-emerald-600 mb-2">Amtrak Train</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">4 Hours. Sit on the <strong>West side</strong> (right side going south) for ocean views.</p>
                  </div>
                  <div className="bg-white dark:bg-navy-800 p-6 rounded-xl border border-slate-100 dark:border-navy-700">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Seattle → Vancouver</div>
                    <div className="text-lg font-bold text-blue-600 mb-2">Bus / Drive</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">3-5 Hours. Border wait times can be 2+ hours on match days.</p>
                  </div>
                  <div className="bg-white dark:bg-navy-800 p-6 rounded-xl border border-slate-100 dark:border-navy-700">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Seattle → LA</div>
                    <div className="text-lg font-bold text-blue-600 mb-2">Fly (AS/Delta)</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">2.5 Hours. Fly into LAX or Burbank (BUR) for easier access.</p>
                  </div>
                </div>
              </section>

              {/* 4. Cities */}
              <section id="cities" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">City Essentials</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Vancouver */}
                  <div className="group bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-100 dark:border-navy-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">Vancouver</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed relative z-10">
                      Compact and walkable. Stay in <strong>Yaletown</strong> or <strong>Gastown</strong> to walk to BC Place.
                    </p>
                  </div>

                  {/* Seattle */}
                  <div className="group bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-100 dark:border-navy-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">Seattle</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed relative z-10">
                      Lumen Field is downtown. Stay in <strong>Pioneer Square</strong> (loud) or near <strong>Westlake</strong> (transit).
                    </p>
                  </div>

                  {/* Los Angeles */}
                  <div className="group bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-100 dark:border-navy-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">Los Angeles</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed relative z-10">
                      SoFi is in Inglewood. Stay in <strong>Santa Monica</strong> (beach) or near <strong>LAX</strong> (convenience).
                    </p>
                  </div>
                </div>

                {/* Affiliate: Hotels */}
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">Beat the West Coast Price Surge</h4>
                    <p className="text-blue-800 dark:text-blue-200">Vancouver and LA hotels will sell out fast. Book refundable rates now.</p>
                  </div>
                  <div className="flex flex-wrap gap-3 shrink-0">
                    <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors shadow-lg shadow-blue-500/20">
                      Find Hotels
                    </a>
                    <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-navy-600 rounded-xl font-bold hover:border-blue-500 transition-colors">
                      Compare Rates
                    </a>
                  </div>
                </div>
              </section>

              {/* 5. Visa */}
              <section id="visa" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Visa & Entry Rules</h2>
                </div>

                <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border-l-4 border-red-500 shadow-sm">
                  <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">The "Double Visa" Trap</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Because you are moving between Canada and the USA, you likely need TWO travel authorizations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 dark:bg-navy-900 p-4 rounded-xl border border-slate-100 dark:border-navy-700">
                      <div className="flex items-center gap-3 mb-2">
                        <Globe className="w-5 h-5 text-red-500" />
                        <span className="font-bold text-slate-900 dark:text-white">Canada Entry (eTA)</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Required for most air travelers. Cost is ~$7 CAD. Apply online.</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-navy-900 p-4 rounded-xl border border-slate-100 dark:border-navy-700">
                      <div className="flex items-center gap-3 mb-2">
                        <Globe className="w-5 h-5 text-blue-500" />
                        <span className="font-bold text-slate-900 dark:text-white">USA Entry (ESTA/Visa)</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Required for entering Seattle/LA. ESTA is ~$21 USD. Check if your country is VWP eligible.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 6. Insider */}
              <section id="insider" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Insider Knowledge</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl border border-slate-100 dark:border-navy-700 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                      <Train className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Book Amtrak Early</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      The Cascades train sells out months in advance for summer weekends. Book 3+ months out.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl border border-slate-100 dark:border-navy-700 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4">
                      <Car className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">LA Traffic is Real</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      "10 miles" in Los Angeles can take 60 minutes. Always buffer 1 hour of extra travel time for SoFi Stadium.
                    </p>
                  </div>
                </div>
              </section>

              {/* 7. FAQ */}
              <section id="faq" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                    <Ticket className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                  {[
                    { q: "Can I take a day trip from Seattle to Vancouver?", a: "Yes, but it's a long day (4 hours each way). It's better to stay overnight." },
                    { q: "Is SoFi Stadium air conditioned?", a: "It has a roof but is open-air on the sides. It uses a passive cooling system and is generally comfortable, but can get warm." },
                    { q: "Which city is best for budget travelers?", a: "Seattle has slightly more mid-range options than Vancouver or LA, but all three are expensive. Book hostels early." },
                    { q: "Do I need cash?", a: "Rarely. All three stadiums and cities are predominantly cashless. Bring credit cards." }
                  ].map((item, i) => (
                    <AccordionItem
                      key={i}
                      question={item.q}
                      answer={item.a}
                      isOpen={openFaqIndex === i}
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    />
                  ))}
                </div>
              </section>

            </div>
            
            {/* Sidebar Widgets (Mobile Bottom / Desktop Sticky) */}
            <div className="lg:col-span-3 space-y-8 lg:hidden">
               {/* Affiliate: Gear */}
               <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-navy-700">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-500" /> West Coast Essentials
                </h3>
                <div className="space-y-4">
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 transition-colors">
                        <CloudRain className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">Compact Rain Jacket</p>
                        <p className="text-xs text-slate-500">Essential for Van/Seattle</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 transition-colors">
                        <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">Premium Sunscreen</p>
                        <p className="text-xs text-slate-500">Mandatory for LA days</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 transition-colors">
                        <Smartphone className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">High-Cap Power Bank</p>
                        <p className="text-xs text-slate-500">For long train/plane travel</p>
                      </div>
                    </div>
                  </a>
                  <div className="pt-4 border-t border-slate-100 dark:border-navy-700">
                    <Link to="/planning/packing-list" className="block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
                      Full Packing List
                    </Link>
                  </div>
                </div>
              </div>

              {/* Timeline Checklist */}
              <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-6 rounded-xl text-white shadow-lg">
                <h3 className="text-lg font-bold mb-4">Planning Timeline</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <div className="font-bold opacity-70 w-16">12 Mos</div>
                    <div>Book Vancouver Hotels (Limited Inventory)</div>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-bold opacity-70 w-16">9 Mos</div>
                    <div>Apply for Canada eTA + US ESTA</div>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-bold opacity-70 w-16">6 Mos</div>
                    <div>Book Seattle-LA Flights</div>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-bold opacity-70 w-16">3 Mos</div>
                    <div>Book Amtrak Cascades Tickets</div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
