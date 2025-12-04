import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPin, Calendar, Users, Trophy, Plane, Sun, Mountain, Info, 
  ArrowRight, Star, Clock, Wallet, Heart, Camera, Bus, Car, 
  ShieldCheck, Droplets, Utensils, AlertTriangle, Zap, Globe, 
  DollarSign, Thermometer, Umbrella, Coffee, Ticket, Building2,
  ChevronDown, ChevronUp, Menu, Share2, Printer, Bookmark, ChevronRight
} from 'lucide-react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';

// --- Utility Components ---

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-16 md:py-24">
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
      <div className="mx-4 text-slate-300 dark:text-slate-700">❖</div>
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
    </div>
  );
}

function SectionHeading({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 md:mb-12 flex items-center gap-4 tracking-tight">
      {Icon && <Icon className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 dark:text-emerald-500" strokeWidth={1.5} />}
      <span className="relative">
        {children}
        <span className="absolute -left-6 top-0 bottom-0 w-1 bg-emerald-500 rounded-full hidden md:block opacity-0 group-hover:opacity-100 transition-opacity" />
      </span>
    </h2>
  );
}

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors pr-8">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-emerald-500 border-emerald-500 text-white' : 'group-hover:border-emerald-500'}`}>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function GroupAPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/groups/group-a';
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState('');

  // Scroll spy for Table of Contents
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-100 dark:selection:bg-emerald-900/30">
      <Helmet>
        <title>Group A World Cup 2026 Travel Guide: Mexico City, Guadalajara & Monterrey | Stadiumport</title>
        <meta name="description" content="The definitive travel guide for Group A (The Opening Ceremony Group). Master the logistics of Mexico City, Guadalajara, and Monterrey. Altitude tips, safety, and transport strategy." />
        <meta name="keywords" content="World Cup 2026 Group A, Mexico City Opening Match, Estadio Azteca guide, Guadalajara World Cup travel, Monterrey World Cup travel, Mexico World Cup safety" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
      </Helmet>

      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "World Cup 2026 Group A Travel Guide: The Aztec Opening",
            "description": "The definitive travel guide for Group A. Master the logistics of Mexico City, Guadalajara, and Monterrey.",
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
                "name": "Is it safe to travel between Group A cities by bus?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but choose 'Executive' or 'Luxury' class lines like ETN or Primera Plus. The route between Mexico City and Guadalajara is generally safe on these direct toll-road buses. Avoid night buses and secondary roads."
                }
              },
              {
                "@type": "Question",
                "name": "How does the altitude in Mexico City affect fans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mexico City sits at 7,350 ft (2,240m). You will feel short of breath faster. Alcohol hits harder. Hydration is critical. We recommend arriving 2 days before the match to acclimate."
                }
              },
              {
                "@type": "Question",
                "name": "Can I drink the tap water in Group A cities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Stick to bottled or purified water for drinking and brushing teeth in all three host cities. Ice in reputable hotels/restaurants is usually safe (made from purified water), but ask to be sure."
                }
              }
            ]
          }
        ]}
      />

      <Header />

      <main className="relative pt-20 md:pt-24">
        
        {/* 1. PAGE HEADER TRANSFORMATION */}
        {/* Hero Section - Premium & Minimalist */}
        <div className="relative bg-[#0A0A0A] text-white overflow-hidden">
          {/* Abstract Geometric Background */}
          <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-900/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
          </div>
          
          {/* Content Container */}
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              
              <div className="flex-1 text-center md:text-left">
                {/* Meta / Badge */}
                <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-emerald-300 font-medium text-sm tracking-wide mb-8">
                  <Star className="w-3.5 h-3.5 fill-emerald-300" />
                  <span className="uppercase tracking-wider text-xs">The Opening Ceremony Group</span>
                </div>
                
                {/* Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1]">
                  Group A: <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                    The Aztec Heart
                  </span>
                </h1>
                
                {/* Subtitle/Description */}
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10">
                  History will be made here. On June 11, 2026, the world turns its eyes to Mexico City. This is your guide to the passionate, high-altitude birthplace of the tournament.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <button onClick={() => scrollToSection('strategy')} className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                    Start Planning <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => scrollToSection('booking')} className="w-full sm:w-auto bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                    Book Your Trip <Plane className="w-5 h-5" />
                  </button>
                </div>

                {/* Stats Row */}
                <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                   <div>
                      <div className="text-3xl font-bold text-white tracking-tight">7,350 ft</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Avg. Altitude</div>
                   </div>
                   <div>
                      <div className="text-3xl font-bold text-white tracking-tight">87,523</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Capacity</div>
                   </div>
                   <div>
                      <div className="text-3xl font-bold text-white tracking-tight">82°F</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Avg. High</div>
                   </div>
                   <div>
                      <div className="text-3xl font-bold text-white tracking-tight">#1</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Food Scene</div>
                   </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="flex-1 w-full max-w-[600px] relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1518659526383-a1811f63bbc5?q=80&w=2070&auto=format&fit=crop" 
                    alt="Estadio Azteca Atmosphere" 
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 3. LAYOUT ARCHITECTURE - Centered with Sidebar */}
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Sidebar - Table of Contents & Tools */}
          <div className="hidden lg:block lg:col-span-3 relative">
             <div className="sticky top-32 space-y-12">
                {/* Table of Contents */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Contents</h4>
                  <nav className="space-y-1 relative border-l border-slate-200 dark:border-slate-800 ml-3">
                    {[
                      { id: 'intro', label: 'Introduction' },
                      { id: 'strategy', label: 'Strategic Overview' },
                      { id: 'cities', label: 'Host City Matrix' },
                      { id: 'booking', label: 'Planning Toolkit' },
                      { id: 'insider', label: 'Insider Tips' },
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

                {/* Social / Actions */}
                <div className="flex gap-4">
                   <button className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Share2 className="w-5 h-5" /></button>
                   <button className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Bookmark className="w-5 h-5" /></button>
                </div>
             </div>
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-6">
            
            {/* Intro Text */}
            <section id="intro" className="mb-20">
              <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900 first-letter:dark:text-white first-letter:mr-3 first-letter:float-left leading-relaxed text-slate-600 dark:text-slate-300 text-xl md:text-2xl font-light mb-8">
                  Group A holds a special distinction in 2026: <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">it is where the magic begins.</strong> When the whistle blows at Estadio Azteca, the three-nation tournament officially launches in its spiritual home.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  Traveling Group A means navigating "The Golden Triangle" of Mexico: the capital, the pearl of the west (Guadalajara), and the industrial titan of the north (Monterrey). It is a journey of intense flavors, high altitudes, and football passion unmatched anywhere else in North America.
                </p>
              </div>
            </section>

            <SectionDivider />

            {/* Strategic Overview Table - Transformed */}
            <section id="strategy" className="mb-20 scroll-mt-24">
              <SectionHeading icon={Info}>Strategic Overview</SectionHeading>
              
              <div className="space-y-8">
                {/* Advantages Block */}
                <div className="bg-emerald-50/50 dark:bg-emerald-900/10 rounded-2xl p-8 md:p-10 border border-emerald-100 dark:border-emerald-900/30">
                   <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-6 flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6" /> The Advantages
                   </h3>
                   <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                         <div className="w-8 h-8 rounded-full bg-emerald-200/50 dark:bg-emerald-800/30 flex items-center justify-center flex-shrink-0 mt-1 text-emerald-700 dark:text-emerald-300">
                            <DollarSign className="w-4 h-4" />
                         </div>
                         <div>
                            <span className="block text-slate-800 dark:text-slate-200 font-medium text-lg mb-1">Affordability</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">Your dollar goes 2-3x further here than in US/Canada groups for food and transport.</span>
                         </div>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="w-8 h-8 rounded-full bg-emerald-200/50 dark:bg-emerald-800/30 flex items-center justify-center flex-shrink-0 mt-1 text-emerald-700 dark:text-emerald-300">
                            <Utensils className="w-4 h-4" />
                         </div>
                         <div>
                            <span className="block text-slate-800 dark:text-slate-200 font-medium text-lg mb-1">Culinary Elite</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">You are visiting three of the world's best food cities. Street food is safe if you follow crowds.</span>
                         </div>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="w-8 h-8 rounded-full bg-emerald-200/50 dark:bg-emerald-800/30 flex items-center justify-center flex-shrink-0 mt-1 text-emerald-700 dark:text-emerald-300">
                            <MapPin className="w-4 h-4" />
                         </div>
                         <div>
                            <span className="block text-slate-800 dark:text-slate-200 font-medium text-lg mb-1">Compact Route</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">Frequent flights connect these cities in under 90 minutes.</span>
                         </div>
                      </li>
                   </ul>
                </div>

                {/* Challenges Block */}
                <div className="bg-rose-50/50 dark:bg-rose-900/10 rounded-2xl p-8 md:p-10 border border-rose-100 dark:border-rose-900/30">
                   <h3 className="text-xl font-bold text-rose-800 dark:text-rose-400 mb-6 flex items-center gap-3">
                      <AlertTriangle className="w-6 h-6" /> The Challenges
                   </h3>
                   <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                         <div className="w-8 h-8 rounded-full bg-rose-200/50 dark:bg-rose-800/30 flex items-center justify-center flex-shrink-0 mt-1 text-rose-700 dark:text-rose-300">
                            <Mountain className="w-4 h-4" />
                         </div>
                         <div>
                            <span className="block text-slate-800 dark:text-slate-200 font-medium text-lg mb-1">Altitude</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">Mexico City (7,300ft) requires acclimation. Expect fatigue on day 1.</span>
                         </div>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="w-8 h-8 rounded-full bg-rose-200/50 dark:bg-rose-800/30 flex items-center justify-center flex-shrink-0 mt-1 text-rose-700 dark:text-rose-300">
                            <Car className="w-4 h-4" />
                         </div>
                         <div>
                            <span className="block text-slate-800 dark:text-slate-200 font-medium text-lg mb-1">Traffic</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">CDMX traffic is legendary. A 10km trip can take 90 minutes. Use the Metro.</span>
                         </div>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="w-8 h-8 rounded-full bg-rose-200/50 dark:bg-rose-800/30 flex items-center justify-center flex-shrink-0 mt-1 text-rose-700 dark:text-rose-300">
                            <Droplets className="w-4 h-4" />
                         </div>
                         <div>
                            <span className="block text-slate-800 dark:text-slate-200 font-medium text-lg mb-1">Water Safety</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">Tap water is not potable. Strict adherence to bottled water is required.</span>
                         </div>
                      </li>
                   </ul>
                </div>
              </div>
            </section>

            <SectionDivider />

            {/* Host City Matrix - Visual Redesign */}
            <section id="cities" className="mb-20 scroll-mt-24">
              <SectionHeading icon={MapPin}>Host City Matrix</SectionHeading>
              
              <div className="space-y-12">
                
                {/* Mexico City - Featured Large */}
                <div className="group relative overflow-hidden rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none">
                  <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1585464231875-d9cae94126b1?q=80&w=800&auto=format&fit=crop" alt="Mexico City" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90"></div>
                  </div>
                  <div className="relative p-8 md:p-12 flex flex-col h-full justify-end">
                     <div className="mb-auto">
                       <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide">OPENING MATCH</span>
                     </div>
                     <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Mexico City (CDMX)</h3>
                     <p className="text-slate-300 text-lg mb-6 max-w-xl leading-relaxed">
                        The cultural sun of the solar system. Massive, chaotic, and beautiful. Home to the legendary Estadio Azteca.
                     </p>
                     <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-slate-300">
                        <span className="flex items-center gap-2"><Home className="w-4 h-4 text-emerald-400" /> Polanco / Roma Nte</span>
                        <span className="flex items-center gap-2"><Plane className="w-4 h-4 text-emerald-400" /> MEX (Benito Juárez)</span>
                     </div>
                     <div className="flex flex-wrap gap-4">
                        <Link to="/cities/mexico-city" className="bg-white text-slate-900 px-6 py-3 rounded-lg font-bold text-sm hover:bg-emerald-50 transition-colors flex items-center gap-2">
                           Full Guide <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg font-bold text-sm hover:bg-white/20 transition-colors flex items-center gap-2">
                           Book Hotels <Building2 className="w-4 h-4" />
                        </a>
                     </div>
                  </div>
                </div>

                {/* Guadalajara & Monterrey - Side by Side */}
                <div className="grid md:grid-cols-2 gap-8">
                   {/* Guadalajara */}
                   <div className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="h-48 overflow-hidden relative">
                         <img src="https://images.unsplash.com/photo-1598896623455-89c8407c7149?q=80&w=800&auto=format&fit=crop" alt="Guadalajara" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         <div className="absolute top-4 left-4">
                            <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full">CULTURAL HUB</span>
                         </div>
                      </div>
                      <div className="p-8">
                         <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Guadalajara</h3>
                         <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                            The home of tequila and mariachi. More relaxed than CDMX, with a modern stadium (Akron) set against green hills.
                         </p>
                         <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                               <Home className="w-3.5 h-3.5" /> Zapopan / Providencia
                            </div>
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                               <Plane className="w-3.5 h-3.5" /> GDL (Miguel Hidalgo)
                            </div>
                         </div>
                         <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                            <Link to="/cities/guadalajara" className="text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 font-bold text-sm flex items-center gap-1">
                               Full Guide <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                               <Building2 className="w-5 h-5" />
                            </a>
                         </div>
                      </div>
                   </div>

                   {/* Monterrey */}
                   <div className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="h-48 overflow-hidden relative">
                         <img src="https://images.unsplash.com/photo-1569532372048-a76478833b1b?q=80&w=800&auto=format&fit=crop" alt="Monterrey" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         <div className="absolute top-4 left-4">
                            <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full">MODERNITY</span>
                         </div>
                      </div>
                      <div className="p-8">
                         <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Monterrey</h3>
                         <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                            The wealthy industrial north. Stunning mountain backdrops and the most modern stadium in Mexico (BBVA).
                         </p>
                         <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                               <Home className="w-3.5 h-3.5" /> San Pedro / Centro
                            </div>
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                               <Plane className="w-3.5 h-3.5" /> MTY (General Mariano)
                            </div>
                         </div>
                         <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                            <Link to="/cities/monterrey" className="text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 font-bold text-sm flex items-center gap-1">
                               Full Guide <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                               <Building2 className="w-5 h-5" />
                            </a>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </section>

            <SectionDivider />

            {/* Trip Planning Toolkit - Cards */}
            <section id="booking" className="mb-20 scroll-mt-24">
              <SectionHeading icon={Ticket}>Trip Planning Toolkit</SectionHeading>
              
              <div className="grid gap-6">
                {/* Flights */}
                <a href="https://expedia.com/flights" target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row items-center bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all">
                   <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 md:mb-0 md:mr-6 group-hover:scale-110 transition-transform">
                      <Plane className="w-8 h-8" />
                   </div>
                   <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Book Flights</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Flights between CDMX, Guadalajara, and Monterrey are frequent. Book 3+ months out.</p>
                   </div>
                   <div className="mt-4 md:mt-0 md:ml-6">
                      <span className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-bold text-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                         Check Prices <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                   </div>
                </a>

                {/* Hotels */}
                <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row items-center bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all">
                   <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 md:mb-0 md:mr-6 group-hover:scale-110 transition-transform">
                      <Building2 className="w-8 h-8" />
                   </div>
                   <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Find Hotels</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Secure accommodation in Polanco (CDMX) or Providencia (GDL) early. Rates will surge.</p>
                   </div>
                   <div className="mt-4 md:mt-0 md:ml-6">
                      <span className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-bold text-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                         Search Deals <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                   </div>
                </a>

                {/* Insurance */}
                <a href="https://safetywing.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row items-center bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all">
                   <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 md:mb-0 md:mr-6 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-8 h-8" />
                   </div>
                   <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Travel Insurance</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Essential for Mexico. Covers altitude sickness and flight cancellations.</p>
                   </div>
                   <div className="mt-4 md:mt-0 md:ml-6">
                      <span className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-bold text-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                         Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                   </div>
                </a>
              </div>
            </section>

            {/* Insider Knowledge - Premium Box */}
            <section id="insider" className="mb-20 scroll-mt-24">
              <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                 {/* Decorative Background */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
                 <ShieldCheck className="absolute top-8 right-8 w-24 h-24 text-white/5" />

                 <h3 className="text-2xl md:text-3xl font-bold mb-10 relative z-10 flex items-center gap-3">
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" /> 
                    Insider Tips: What FIFA Won't Tell You
                 </h3>

                 <div className="space-y-8 relative z-10">
                    <div className="flex gap-6">
                       <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">1</span>
                       <div>
                          <h4 className="text-lg font-bold mb-2 text-white">Uber is King</h4>
                          <p className="text-slate-300 leading-relaxed">Do not hail street taxis (Pink/White CDMX taxis) at night. Uber is extremely cheap, safe, and reliable in all three cities. It is the gold standard for tourist transport.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">2</span>
                       <div>
                          <h4 className="text-lg font-bold mb-2 text-white">The "Comida Corrida" Hack</h4>
                          <p className="text-slate-300 leading-relaxed">For lunch (1pm-4pm), look for "Comida Corrida" signs. These are set menus (soup, rice, main, drink) for $4-6 USD. It's how locals eat—cheap, fast, and delicious.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">3</span>
                       <div>
                          <h4 className="text-lg font-bold mb-2 text-white">Sunday is Museum Day</h4>
                          <p className="text-slate-300 leading-relaxed">Most museums in CDMX are free for residents on Sundays, meaning they are CROWDED. Go on Tuesday or Wednesday for a better experience.</p>
                       </div>
                    </div>
                 </div>
              </div>
            </section>

            {/* FAQ Section - Accordion */}
            <section id="faq" className="mb-20 scroll-mt-24">
               <SectionHeading>Group A FAQ</SectionHeading>
               <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm">
                 <AccordionItem 
                   question="Do I need a visa for Mexico?" 
                   answer="Many nationalities (USA, Canada, UK, EU, Japan) do not need a visa for stays under 180 days. However, you must complete the FMM (Multiple Migratory Form) upon entry. Keep the paper part safe; you need it to leave."
                   isOpen={openFaq === 0}
                   onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                 />
                 <AccordionItem 
                   question="Can I use US Dollars?" 
                   answer="Not really. While some tourist traps accept them at bad rates, you need Mexican Pesos (MXN). Use ATMs inside bank branches (Santander, BBVA, Citibanamex) for the best rates."
                   isOpen={openFaq === 1}
                   onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                 />
               </div>
            </section>

          </div>

          {/* Right Sidebar - Essentials & Quick Links */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Quick Booking - Sticky */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-lg lg:sticky lg:top-32">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Quick Booking
               </h3>
               <div className="space-y-3">
                  <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="block group p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-900/30 transition-all">
                     <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-900 dark:text-white">Hotels</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                     </div>
                     <p className="text-xs text-slate-500">Best rates for CDMX & GDL</p>
                  </a>
                  <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="block group p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-900/30 transition-all">
                     <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-900 dark:text-white">Flights</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                     </div>
                     <p className="text-xs text-slate-500">Compare AeroMexico & Volaris</p>
                  </a>
               </div>
            </div>

            {/* Mexico Essentials Kit */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-lg">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Mexico Travel Kit
               </h3>
               <div className="space-y-4">
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                     <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 group-hover:text-emerald-600 transition-colors">
                        <Droplets className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 transition-colors">LifeStraw Bottle</p>
                        <p className="text-xs text-slate-500">Essential for safe drinking</p>
                     </div>
                  </a>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                     <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 group-hover:text-emerald-600 transition-colors">
                        <Zap className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 transition-colors">Type A/B Adapter</p>
                        <p className="text-xs text-slate-500">US Plug Standard (Same as USA)</p>
                     </div>
                  </a>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                     <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 group-hover:text-emerald-600 transition-colors">
                        <ShieldCheck className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 transition-colors">Anti-Theft Sling</p>
                        <p className="text-xs text-slate-500">Metro-safe carrying</p>
                     </div>
                  </a>
               </div>

               <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-100 dark:border-emerald-900/30">
                     <p className="text-xs font-bold text-emerald-800 dark:text-emerald-400 mb-2 uppercase tracking-wide flex items-center gap-2">
                        <Star className="w-3 h-3 fill-emerald-800 dark:fill-emerald-400" /> Pro Tip
                     </p>
                     <p className="text-xs leading-relaxed text-emerald-900 dark:text-emerald-200">
                        Download offline maps for CDMX before you arrive. Data can be spotty in the Centro Historico stone buildings.
                     </p>
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

function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function Home(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }

function Briefcase(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
}
