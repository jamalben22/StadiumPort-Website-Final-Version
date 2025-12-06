import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPin, Calendar, ArrowRight, Train, Plane, Utensils, Ticket, 
  Music, Sun, Car, Flame, Shield, Smartphone, Briefcase, 
  Globe, CreditCard, AlertTriangle, CheckCircle2, CloudRain, Camera, Thermometer,
  Wind, ChevronDown, ChevronUp, Clock, User, Droplets
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
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors pr-8">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-fuchsia-500 border-fuchsia-500 text-white' : 'group-hover:border-fuchsia-500 text-slate-400'}`}>
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

export default function GroupHPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/2026-world-cup-group-h-travel-guide';
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
    <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-white selection:bg-fuchsia-500/30">
      <Helmet>
        <title>Group H World Cup 2026 Travel Guide: Miami, Atlanta, Houston & Guadalajara</title>
        <meta name="description" content="The definitive travel guide for World Cup 2026 Group H. Master the 'Southern Heat' circuit: Miami, Atlanta, Houston, and Guadalajara. Flight strategies, stadium cooling tips, and visa logistics." />
        <meta name="keywords" content="Group H World Cup 2026, Miami World Cup travel, Atlanta World Cup guide, Houston World Cup logistics, Guadalajara World Cup, Mercedes-Benz Stadium guide, Hard Rock Stadium travel, NRG Stadium AC" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
      </Helmet>

      <SchemaOrg 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group H World Cup 2026 Travel Guide: The Southern Heat",
            "description": "Complete logistics guide for World Cup Group H fans. Covers Atlanta, Miami, Houston, and Guadalajara with a focus on flight connections and managing the summer heat.",
            "author": { "@type": "Organization", "name": "StadiumPort" },
            "publisher": { 
              "@type": "Organization", 
              "name": "StadiumPort",
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
                "name": "How do I travel between Group H cities?",
                "acceptedAnswer": { "@type": "Answer", "text": "You must fly. The distances between Atlanta, Miami, Houston, and Guadalajara are too great for driving (10-20+ hours). All four cities have major international airports with frequent connections." }
              },
              {
                "@type": "Question",
                "name": "Is it safe to drive from Houston to Guadalajara?",
                "acceptedAnswer": { "@type": "Answer", "text": "We strongly recommend against driving across the border for match travel. The drive is extremely long (16+ hours) and passes through areas with travel advisories. Flying from IAH to GDL is safe, fast (2.5 hours), and affordable." }
              },
              {
                "@type": "Question",
                "name": "Will the stadiums be air-conditioned?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes and No. Atlanta (Mercedes-Benz) and Houston (NRG) have retractable roofs and powerful AC. Miami (Hard Rock) is open-air but has a shade canopy (it will still be hot/humid). Guadalajara (Akron) is open-air and warm." }
              },
              {
                "@type": "Question",
                "name": "Do I need a visa for Mexico if I have a US Visa?",
                "acceptedAnswer": { "@type": "Answer", "text": "Generally, if you have a valid US Visa or permanent residence, you can enter Mexico for tourism without a separate Mexican visa. However, you still need to complete an FMM (immigration form). Always verify with your consulate." }
              },
              {
                "@type": "Question",
                "name": "Which city is the most expensive in Group H?",
                "acceptedAnswer": { "@type": "Answer", "text": "Miami is significantly more expensive for hotels and dining than the others. Atlanta and Houston are mid-range, while Guadalajara offers the best value for budget travelers." }
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
                "name": "Group H",
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535498730771-e735b998cddb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-900/40 via-orange-900/20 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                <Flame className="w-3 h-3 animate-pulse" />
                The Southern Heat
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                Rhythm, Heat & <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-orange-500">Latin Soul</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                From the neon glamour of Miami to the trap beats of Atlanta and the mariachi heart of Guadalajara. This is the tournament's most culturally vibrant—and humid—group.
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-fuchsia-500" />
                  <span>Updated: June 2025</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-fuchsia-500" />
                  <span>12 min read</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-fuchsia-500" />
                  <span>By Stadiumport Strategy Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="sticky top-[72px] z-40 h-1 bg-slate-100 dark:bg-slate-800 w-full">
          <div 
            className="h-full bg-gradient-to-r from-fuchsia-500 to-orange-500 transition-all duration-150"
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
                      { id: 'strategy', label: 'Air Bridge Strategy' },
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
                            ? 'border-fuchsia-500 text-fuchsia-600 dark:text-fuchsia-400 font-bold' 
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
                      <span className="text-sm font-bold text-slate-900 dark:text-white">2,450 mi</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Flight Time</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">2-3 hrs avg</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Transport</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">Flights Only</span>
                    </div>
                  </div>
                </div>

                {/* Heat Survival Widget */}
                <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-navy-700">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                    <Briefcase className="w-5 h-5 text-fuchsia-500" /> Heat Survival Kit
                  </h3>
                  <div className="space-y-4">
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-fuchsia-50 dark:group-hover:bg-fuchsia-900/20 transition-colors">
                          <Wind className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-fuchsia-500" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-slate-900 dark:text-white">Portable Neck Fan</p>
                          <p className="text-xs text-slate-500">Life-saver for Miami queues</p>
                        </div>
                      </div>
                    </a>
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="bg-slate-100 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-fuchsia-50 dark:group-hover:bg-fuchsia-900/20 transition-colors">
                          <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-fuchsia-500" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-slate-900 dark:text-white">SPF 50+ Sport Sunscreen</p>
                          <p className="text-xs text-slate-500">Sweat-resistant protection</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-navy-700">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Planning Timeline</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">1</div>
                        <span className="text-slate-600 dark:text-slate-400 text-xs">Book Flights (Groups are spread out!)</span>
                      </li>
                      <li className="flex gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">2</div>
                        <span className="text-slate-600 dark:text-slate-400 text-xs">Secure Hotels with AC</span>
                      </li>
                      <li className="flex gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">3</div>
                        <span className="text-slate-600 dark:text-slate-400 text-xs">Check Visa Reqs (US & Mexico)</span>
                      </li>
                    </ul>
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
                    Group H is an endurance test disguised as a party. You have four major metropolises spread across thousands of miles: <strong>Atlanta</strong>, <strong>Miami</strong>, <strong>Houston</strong>, and <strong>Guadalajara</strong>.
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    The good news? You'll be visiting some of the most modern stadiums in the world, with incredible nightlife and food scenes. The challenge? The summer heat is oppressive, and the distances require a solid flight strategy. Pack linen, drink water, and get ready to fly.
                  </p>
                </div>
              </section>

              {/* 2. Matrix */}
              <section id="matrix" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
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
                          <th className="px-8 py-6">Stadium Status</th>
                          <th className="px-8 py-6">Climate Impact</th>
                          <th className="px-8 py-6">Est. Daily Cost</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-navy-700">
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="px-8 py-6 font-bold text-slate-900 dark:text-white">Miami, USA</td>
                          <td className="px-8 py-6 text-slate-600 dark:text-slate-300">Hard Rock (Shade Canopy)</td>
                          <td className="px-8 py-6 text-red-500 font-bold flex items-center gap-2"><Droplets className="w-4 h-4" /> Extreme Humidity</td>
                          <td className="px-8 py-6 text-red-500 font-bold">$$$$ (High)</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="px-8 py-6 font-bold text-slate-900 dark:text-white">Atlanta, USA</td>
                          <td className="px-8 py-6 text-slate-600 dark:text-slate-300">Mercedes-Benz (Roof/AC)</td>
                          <td className="px-8 py-6 text-emerald-500 font-bold">Controlled (Indoors)</td>
                          <td className="px-8 py-6 text-slate-600 dark:text-slate-300">$$$ (Mid)</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="px-8 py-6 font-bold text-slate-900 dark:text-white">Houston, USA</td>
                          <td className="px-8 py-6 text-slate-600 dark:text-slate-300">NRG Stadium (Roof/AC)</td>
                          <td className="px-8 py-6 text-emerald-500 font-bold">Controlled (Indoors)</td>
                          <td className="px-8 py-6 text-slate-600 dark:text-slate-300">$$$ (Mid)</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="px-8 py-6 font-bold text-slate-900 dark:text-white">Guadalajara, MEX</td>
                          <td className="px-8 py-6 text-slate-600 dark:text-slate-300">Estadio Akron (Open)</td>
                          <td className="px-8 py-6 text-orange-500 font-bold">Hot / Rainy</td>
                          <td className="px-8 py-6 text-emerald-500 font-bold">$$ (Low)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 3. Strategy */}
              <section id="strategy" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
                    <Plane className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Air Bridge Strategy</h2>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-50 to-orange-50 dark:from-fuchsia-900/20 dark:to-orange-900/20 p-8 rounded-3xl border border-fuchsia-100 dark:border-fuchsia-800/50 mb-12">
                  <h3 className="text-xl font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-fuchsia-500" />
                    Hub-Hopping is Mandatory
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    Unlike the Northeast or West Coast groups, trains and cars are useless here. You are relying on three massive hubs: <strong>ATL (Atlanta)</strong>, <strong>MIA (Miami)</strong>, and <strong>IAH (Houston)</strong>.
                  </p>
                  <div className="bg-white/50 dark:bg-black/20 p-4 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800/30 mb-6">
                    <p className="text-sm font-bold text-fuchsia-800 dark:text-fuchsia-200">
                      Pro Tip: Atlanta (Delta hub) and Houston (United hub) have the most flight options. Use them as your base if you are following a team across the group.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a href="https://skyscanner.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700 transition-colors">
                      Compare Multi-City Flights <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Key Flight Routes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-navy-800/50 font-bold text-slate-900 dark:text-white">
                      <tr>
                        <th className="p-4 border-b border-slate-200 dark:border-navy-700 rounded-tl-lg">Route</th>
                        <th className="p-4 border-b border-slate-200 dark:border-navy-700">Flight Time</th>
                        <th className="p-4 border-b border-slate-200 dark:border-navy-700">Frequency</th>
                        <th className="p-4 border-b border-slate-200 dark:border-navy-700 rounded-tr-lg">Car Alternative</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 dark:border-navy-700">
                        <td className="p-4 font-medium">Miami ↔ Atlanta</td>
                        <td className="p-4 font-bold text-emerald-600">2 Hours</td>
                        <td className="p-4">Very High (20+ daily)</td>
                        <td className="p-4 text-red-500">10+ Hours (Avoid)</td>
                      </tr>
                      <tr className="border-b border-slate-100 dark:border-navy-700">
                        <td className="p-4 font-medium">Houston ↔ Atlanta</td>
                        <td className="p-4 font-bold text-emerald-600">2 Hours</td>
                        <td className="p-4">High (15+ daily)</td>
                        <td className="p-4 text-red-500">12+ Hours (Avoid)</td>
                      </tr>
                      <tr className="border-b border-slate-100 dark:border-navy-700">
                        <td className="p-4 font-medium">Houston ↔ Guadalajara</td>
                        <td className="p-4 font-bold text-emerald-600">2.5 Hours</td>
                        <td className="p-4">Medium (5+ daily)</td>
                        <td className="p-4 text-red-500 font-bold">DO NOT DRIVE</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 4. City Guides & Accommodation */}
              <section id="cities" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">City-by-City Essentials</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {/* Miami */}
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 hover:border-fuchsia-500 dark:hover:border-fuchsia-500 transition-colors group shadow-sm hover:shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">Miami</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                      Hard Rock is far north. Stay in <strong>Brickell</strong> or <strong>South Beach</strong> for the vibe, but take the <strong>Brightline</strong> train to Aventura + shuttle to stadium.
                    </p>
                    <div className="flex gap-4 text-sm font-bold">
                      <Link to="/cities/miami" className="text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 flex items-center gap-1">City Guide <ArrowRight className="w-3 h-3" /></Link>
                      <Link to="/world-cup-2026-stadiums/hard-rock-stadium-guide" className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200">Stadium Guide</Link>
                    </div>
                  </div>

                  {/* Atlanta */}
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 hover:border-fuchsia-500 dark:hover:border-fuchsia-500 transition-colors group shadow-sm hover:shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">Atlanta</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                      The stadium is downtown. Stay in <strong>Midtown</strong> or <strong>Downtown</strong>. You can walk or take the MARTA train directly to the gate.
                    </p>
                    <div className="flex gap-4 text-sm font-bold">
                      <Link to="/cities/atlanta" className="text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 flex items-center gap-1">City Guide <ArrowRight className="w-3 h-3" /></Link>
                      <Link to="/world-cup-2026-stadiums/mercedes-benz-stadium-guide" className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200">Stadium Guide</Link>
                    </div>
                  </div>

                  {/* Houston */}
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 hover:border-fuchsia-500 dark:hover:border-fuchsia-500 transition-colors group shadow-sm hover:shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">Houston</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                      NRG is south of the city. Stay near the <strong>Medical Center</strong> for proximity or <strong>Downtown</strong> for nightlife (connected by METRORail).
                    </p>
                    <div className="flex gap-4 text-sm font-bold">
                      <Link to="/cities/houston" className="text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 flex items-center gap-1">City Guide <ArrowRight className="w-3 h-3" /></Link>
                      <Link to="/world-cup-2026-stadiums/nrg-stadium-guide" className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200">Stadium Guide</Link>
                    </div>
                  </div>

                  {/* Guadalajara */}
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 hover:border-fuchsia-500 dark:hover:border-fuchsia-500 transition-colors group shadow-sm hover:shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">Guadalajara</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                      Akron is on the outskirts. Stay in <strong>Zapopan</strong> for luxury or <strong>Centro Histórico</strong> for culture. Rely on Uber/Didi.
                    </p>
                    <div className="flex gap-4 text-sm font-bold">
                      <Link to="/cities/guadalajara" className="text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 flex items-center gap-1">City Guide <ArrowRight className="w-3 h-3" /></Link>
                      <Link to="/world-cup-2026-stadiums/estadio-akron-guide" className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200">Stadium Guide</Link>
                    </div>
                  </div>
                </div>

                {/* Affiliate: Hotels */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                        <Wind className="w-5 h-5" /> Book Air-Conditioned Stays Early
                      </h4>
                      <p className="text-sm text-blue-800 dark:text-blue-200 max-w-2xl">
                        June/July heat in the South is dangerous. Ensure your booking has reliable AC.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                      <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
                        Check Hotel Rates
                      </a>
                      <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-navy-600 px-6 py-3 rounded-lg font-bold text-sm hover:border-blue-500 transition-colors">
                        Compare Flights & Stays
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. Visa & Border */}
              <section id="visa" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Visa & Entry Rules</h2>
                </div>

                <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border-l-4 border-orange-500 shadow-sm">
                  <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">The Mexico-US Crossing</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-base mb-6 leading-relaxed">
                    Flying between Houston/Atlanta and Guadalajara means crossing an international border.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start p-4 bg-slate-50 dark:bg-navy-900/50 rounded-xl">
                      <Globe className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                      <div>
                        <strong className="block text-slate-900 dark:text-white mb-1">Mexico Entry:</strong>
                        <span className="text-slate-600 dark:text-slate-400 text-sm">US Citizens/Residents do not need a visa but must complete an FMM (Forma Migratoria Múltiple).</span>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-4 bg-slate-50 dark:bg-navy-900/50 rounded-xl">
                      <Globe className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                      <div>
                        <strong className="block text-slate-900 dark:text-white mb-1">US Re-Entry:</strong>
                        <span className="text-slate-600 dark:text-slate-400 text-sm">Standard ESTA or Visa rules apply. Global Entry is highly recommended at MIA and IAH to skip lines.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 6. Insider Tips */}
              <section id="insider" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                    <Ticket className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Insider Knowledge</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-navy-800 p-6 rounded-2xl border border-red-100 dark:border-red-900/30">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
                      <Thermometer className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Respect the Humidity</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Miami and Houston humidity is suffocating. Plan outdoor activities for early morning or late evening. Drink 2x your normal water intake.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-fuchsia-50 to-white dark:from-fuchsia-900/20 dark:to-navy-800 p-6 rounded-2xl border border-fuchsia-100 dark:border-fuchsia-900/30">
                    <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-xl flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 mb-4">
                      <Train className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Brightline is a Game Changer</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      In Miami, the high-speed Brightline train connects Downtown Miami, Aventura (for stadium shuttles), Fort Lauderdale, and Orlando. It's expensive but worth it to avoid I-95 traffic.
                    </p>
                  </div>
                </div>
              </section>

              {/* 7. FAQ */}
              <section id="faq" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Which stadium has the best air conditioning?",
                      a: "Mercedes-Benz Stadium (Atlanta) and NRG Stadium (Houston) are fully enclosed and climate-controlled. You will be comfortable regardless of the outside heat."
                    },
                    {
                      q: "How far is Hard Rock Stadium from South Beach?",
                      a: "It is far (15+ miles). With matchday traffic, an Uber can take 60-90 minutes and cost $100+. Plan your transport in advance."
                    },
                    {
                      q: "Can I use Uber in Guadalajara?",
                      a: "Yes, Uber and Didi work well in Guadalajara and are generally safe and affordable. Avoid hailing random taxis on the street."
                    },
                    {
                      q: "What is the 'Heat Rule' for matches?",
                      a: "FIFA may implement cooling breaks (pause in play) if the Wet Bulb Globe Temperature exceeds 32°C (89.6°F). This is likely for day games in Miami or Guadalajara."
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

            </div>

          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
