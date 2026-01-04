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
  Bus,
  CreditCard, 
  AlertTriangle, 
  ExternalLink,
  Sun,
  Thermometer,
  Droplets
} from 'lucide-react';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors pr-8 tracking-tight">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-emerald-500/10 group-hover:text-emerald-600'}`}>
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

export default function GroupAPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/2026-world-cup-group-a-travel-guide';
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
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] font-sans text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30">
      <Helmet>
        <title>World Cup 2026 Group A Travel Guide: Mexico City, Guadalajara & Monterrey | stadiumport</title>
        <meta name="description" content="The ultimate Group A travel guide. Master the logistics of Mexico City, Guadalajara, and Monterrey. Luxury bus strategies, altitude tips, and safety protocols." />
        <meta name="keywords" content="World Cup 2026 Group A Travel Guide, Mexico City World Cup, Guadalajara World Cup, Monterrey World Cup, Mexico travel safety, Estadio Azteca guide, Estadio Akron guide, Estadio BBVA guide" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
      </Helmet>

      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "World Cup 2026 Group A Travel Guide: The Aztec Heart",
            "description": "The definitive guide for following Group A in World Cup 2026. Complete travel strategy for Mexico City, Guadalajara, and Monterrey.",
            "author": {
              "@type": "Organization",
              "name": "stadiumport"
            },
            "publisher": {
              "@type": "Organization",
              "name": "stadiumport",
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
                "name": "Group A Guide",
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
                "name": "Is it safe to travel between Group A cities by bus?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but only if you use 'Executive' or 'Luxury' class lines like ETN or Primera Plus. These run on direct toll roads and are very safe. Avoid second-class buses and night travel on secondary roads."
                }
              },
              {
                "@type": "Question",
                "name": "How does the altitude in Mexico City affect fans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mexico City is at 7,350 ft (2,240m). You may experience shortness of breath and faster intoxication. Arrive 2 days early to acclimate and drink twice your normal water intake."
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-[#FAFAFA] to-[#FAFAFA] dark:from-emerald-900/20 dark:via-[#0A0A0A] dark:to-[#0A0A0A]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] dark:from-[#0A0A0A] to-transparent" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-slate-900 dark:text-white animate-fade-up">
                World Cup 2026 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Group A Strategy</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal mb-10 animate-fade-up delay-100">
                The tournament's spiritual home. From the high-altitude intensity of Estadio Azteca to the modern marvels of Monterrey and Guadalajara. This is football passion in its purest form.
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
                  <Calendar className="w-4 h-4 text-emerald-500" /> 
                  Updated: June 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-500" /> 
                  12 min read
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-[10px] text-white dark:text-slate-900 font-bold">S</div>
                  By stadiumport Strategy Team
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
                          ? 'border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400' 
                          : 'border-transparent text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                
                <div className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Planning a Trip?</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Get our free checklist for Group A travel.</p>
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
                    Group A is the "Bucket List" group for cultural travelers. It connects the three great metropolises of Mexico: the historic capital, the tech-forward north, and the cultural heartland of the west.
                  </p>
                  <p className="text-lg leading-loose text-slate-600 dark:text-slate-300 mb-10">
                    The route covers Mexico City, Guadalajara, and Monterrey. These cities offer incredible value, world-class food, and electric atmospheres, but require careful planning around safety and altitude.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 mt-12">
                  <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-3 tracking-tight uppercase">
                    <Plane className="w-5 h-5" />
                    The Group A "Golden Triangle" Strategy
                  </h3>
                  <p className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                    Mix Flights with Luxury Buses.
                  </p>
                  <p className="text-base text-slate-500 dark:text-slate-400">
                    Fly for the long leg between Mexico City and Monterrey (1.5 hrs). For the shorter leg (Mexico City to Guadalajara), consider the <strong className="text-slate-900 dark:text-white">luxury executive buses</strong> (ETN/Primera Plus) which offer lie-flat seats and are often more comfortable than flying.
                  </p>
                </div>
              </section>

              {/* Section 1: Multi-City Travel Strategy */}
              <section id="strategy" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">01</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Mexico Logistics</h2>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-loose mb-12 max-w-3xl">
                  Mexico's domestic travel infrastructure is excellent. Flights are frequent and affordable, and the luxury bus network is superior to anything in the US or Europe.
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
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Mexico City → Monterrey</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">Plane (Aeromexico/Viva)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">1h 40m</td>
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">$80 - $150</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Mexico City → Guadalajara</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">Luxury Bus (ETN)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">6h 30m</td>
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">$40 - $60</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-semibold text-slate-900 dark:text-white text-base">Guadalajara → Monterrey</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">Plane (VivaAerobus)</td>
                          <td className="p-6 text-slate-500 hidden md:table-cell text-sm">1h 25m</td>
                          <td className="p-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">$60 - $120</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Affiliate Block: Flights */}
                  <div className="mt-12 p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                          <Plane className="w-5 h-5 text-emerald-500" />
                          Secure Your Flights Early
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Domestic flights in Mexico fill up fast during holidays.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a href="https://skyscanner.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 text-sm">
                        Check Skyscanner Deals <ArrowRight className="w-4 h-4" />
                      </a>
                      <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-200 font-bold py-4 px-6 rounded-xl transition-all hover:bg-white dark:hover:bg-slate-700 text-sm">
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
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">02</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Accommodation Strategy</h2>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose max-w-3xl">
                  Safety and location are your priorities. In Mexico, it pays to stay in the "right" neighborhoods, even if it costs a bit more.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mexico City */}
                  <div className="group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Mexico City</h3>
                      <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Best Value</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Stay Central</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Best Areas:</strong> Roma Norte, Condesa, Polanco (Safest & Trendy).</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Transit:</strong> Use Uber to get to Estadio Azteca (South). Public transit is crowded.</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs hover:text-emerald-700 transition-all group-hover:translate-x-2 uppercase tracking-widest">
                      Search CDMX Hotels <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Guadalajara */}
                  <div className="group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Guadalajara</h3>
                      <span className="px-3 py-1 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">Cultural Hub</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Book Early</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Best Areas:</strong> Americana, Providencia, or Zapopan (near stadium).</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                        <span><strong>Note:</strong> Estadio Akron is on the outskirts. Staying in Zapopan saves travel time.</span>
                      </li>
                    </ul>
                    <a href="https://booking.com" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs hover:text-emerald-700 transition-all group-hover:translate-x-2 uppercase tracking-widest">
                      Search Guadalajara Hotels <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Section 3: Budget Breakdown */}
              <section id="budget" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">03</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group A Budget Breakdown</h2>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-loose">
                  Estimates are per person for a 12-day trip covering 3 group matches. Does not include international arrival flights.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {/* Economy */}
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Economy Strategy</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$1,800</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Hostels, street tacos ($1-2), metro transit, cheapest match tickets.</p>
                  </div>
                  
                  {/* Mid-Range */}
                  <div className="p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-900/10 relative overflow-hidden transform md:-translate-y-4 shadow-xl shadow-emerald-900/5">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-widest">Recommended</div>
                    <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-4">Mid-Range Strategy</div>
                    <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 tracking-tighter">$3,200</div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">Boutique hotels, Ubers everywhere, nice dinners, domestic flights.</p>
                  </div>
                  
                  {/* Premium */}
                  <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Premium Experience</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">$6,500+</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">5-star Polanco hotels, private drivers, VIP hospitality, fine dining (Pujol/Quintonil).</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
                    <CreditCard className="w-6 h-6 text-emerald-500" />
                    Money-Saving Hacks for Group A
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs flex-shrink-0">1</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">Use Uber, Not Taxis:</strong> Uber is often cheaper than street taxis for tourists (no "gringo tax") and significantly safer.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs flex-shrink-0">2</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">Eat Like a Local:</strong> Skip the tourist traps. A delicious order of 5 tacos al pastor costs about $4-5 USD at a busy, reputable street stand.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs flex-shrink-0">3</div>
                      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">Museum Sundays:</strong> Many museums in Mexico City are free on Sundays (though crowded).
                      </p>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4: Visa & Entry Requirements */}
              <section id="visas" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">04</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Visa & Entry Requirements</h2>
                </div>
                
                <div className="grid md:grid-cols-1 gap-8">
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none">
                    <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <img src="https://flagcdn.com/mx.svg" className="w-8 h-auto object-cover rounded shadow-sm" alt="Mexico" />
                      Entering Mexico
                    </h3>
                    <ul className="space-y-6">
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-slate-900 dark:text-white mb-1 font-bold">FMM Form</strong>
                        You will need to complete a "Forma Migratoria Múltiple" (FMM). Most airlines provide this, or you can do it online. Keep the exit portion safe—you need it to leave!
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-300">
                        <strong className="block text-slate-900 dark:text-white mb-1 font-bold">Passport Validity</strong>
                        Must be valid for the duration of your stay. No 6-month rule for many Western countries, but check your specific nationality.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5: Insider Tips */}
              <section id="insider" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">05</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Insider Knowledge</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-xl mb-6">💧</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Water Safety</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <strong>Do not drink the tap water.</strong> Not even for brushing teeth. Ice in reputable hotels is usually safe (purified), but when in doubt, stick to sealed bottles.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-xl mb-6">⛰️</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Respect the Altitude</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      CDMX is at 7,350 ft. You will get drunk faster and tired quicker. One beer here equals two at sea level. Hydrate aggressively.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-xl mb-6">🌶️</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Salsa Warning</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      If a waiter says a salsa is "poquito picante" (a little spicy), <strong>do not believe them.</strong> Test a tiny drop first.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-xl mb-6">🚌</div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">Sunday Traffic</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      On Sundays, Paseo de la Reforma in CDMX closes to cars for cyclists. It's beautiful, but it makes getting around by Uber complicated. Plan ahead.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Essential Gear */}
              <section id="packing" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">06</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Group A Packing Essentials</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💊</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Pepto-Bismol</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Essential backup.</p>
                    <a href="#" className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧥</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Light Layers</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">CDMX gets chilly at night.</p>
                    <a href="#" className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔌</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Power Bank</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Long stadium days.</p>
                    <a href="#" className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">☀️</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Sunscreen</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">High UV at altitude.</p>
                    <a href="#" className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors">Shop Now</a>
                  </div>
                </div>
              </section>

              {/* Section 7: FAQ */}
              <section id="faq" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  <AccordionItem 
                    question="Is Mexico City safe for tourists?"
                    answer={<>Yes, if you stay in the right zones. <strong>Roma, Condesa, Polanco, and Reforma</strong> are very safe and heavily policed. Avoid walking alone late at night in unlit areas and use Uber instead of hailing street taxis.</>}
                    isOpen={openFaqIndex === 0}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  />
                  <AccordionItem 
                    question="Can I use US Dollars in Mexico?"
                    answer={<>While some tourist spots accept them, the exchange rate will be terrible. Always use <strong>Mexican Pesos (MXN)</strong>. Withdraw from ATMs inside banks (not on the street) for the best rates.</>}
                    isOpen={openFaqIndex === 1}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  />
                  <AccordionItem 
                    question="How do I get tickets for the Opening Match?"
                    answer={<>Tickets for the Opening Match at Estadio Azteca will be the most in-demand of the entire Group Stage. Apply through the official FIFA lottery as soon as it opens. Secondary market prices will be astronomical.</>}
                    isOpen={openFaqIndex === 2}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  />
                  <AccordionItem 
                    question="Do I need to speak Spanish?"
                    answer={<>In the main tourist areas of CDMX, Monterrey, and Guadalajara, many people speak English. However, learning basic phrases ("Gracias", "Por favor", "La cuenta") goes a long way in earning respect from locals.</>}
                    isOpen={openFaqIndex === 3}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                  />
                  <AccordionItem 
                    question="What is the weather like in June?"
                    answer={<><strong>Mexico City:</strong> Warm days (75°F/24°C) but rainy evenings. <strong>Monterrey:</strong> Very hot (95°F+/35°C+). <strong>Guadalajara:</strong> Warm and pleasant, chance of rain.</>}
                    isOpen={openFaqIndex === 4}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 4 ? null : 4)}
                  />
                </div>
              </section>

              {/* Final CTA */}
              <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 text-white p-12 md:p-20 text-center shadow-2xl shadow-slate-900/20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-slate-900 to-slate-900"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Experience the Passion?</h2>
                  <p className="text-slate-300 mb-12 text-lg leading-relaxed font-light">
                    The 2026 World Cup begins here. Don't just watch it on TV—be part of the history in the Aztec capital.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/planner" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:scale-105 shadow-lg hover:shadow-emerald-500/30 text-base">
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
