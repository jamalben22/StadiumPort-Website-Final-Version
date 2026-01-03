import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';
import { 
  MapPin, Calendar, ArrowRight, Plane, Utensils, 
  Sun, Flame, Shield, 
  Globe, AlertTriangle, CheckCircle2, ThermometerSun, Droplets,
  ChevronDown, Clock, User
} from 'lucide-react';

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors pr-8 tracking-tight">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-orange-500 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-orange-500/10 group-hover:text-orange-600'}`}>
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

export default function GroupFPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/2026-world-cup-group-f-travel-guide';
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
      const sections = ['intro', 'matrix', 'strategy', 'accommodation', 'budget', 'visa', 'insider', 'packing', 'faq'];
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
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] font-sans text-slate-900 dark:text-slate-100 selection:bg-orange-500/30">
      <Helmet>
        <title>Group F World Cup 2026 Travel Guide: Dallas, Houston, KC & Monterrey | Stadiumport</title>
        <meta name="description" content="The definitive travel guide for World Cup 2026 Group F. Navigate the 'Tex-Mex Corridor' (Dallas, Houston, Monterrey, Kansas City) safely. Heat survival, I-35 road trip strategy, and border crossing tips." />
        <meta name="keywords" content="Group F World Cup 2026, Dallas World Cup travel, Houston World Cup guide, Monterrey World Cup safety, Kansas City World Cup, I-35 road trip World Cup" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
      </Helmet>

      <SchemaOrg 
        schema={[
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
                "name": "Group F Guide",
                "item": `${siteUrl}${pageUrl}`
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group F World Cup 2026 Travel Guide: The Heat Wave Corridor",
            "description": "Complete logistics guide for World Cup Group F fans traveling between Dallas, Houston, Kansas City, and Monterrey. Focuses on heat safety and cross-border travel.",
            "author": { "@type": "Organization", "name": "Stadiumport" },
            "publisher": { 
              "@type": "Organization", 
              "name": "Stadiumport",
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
                "name": "Is it safe to drive from Texas to Monterrey for the World Cup?",
                "acceptedAnswer": { "@type": "Answer", "text": "We strongly recommend flying. While the drive via Laredo is physically possible, US rental car agencies typically prohibit cross-border travel, and the border region (Tamaulipas) often has travel advisories. Direct flights from Dallas (DFW) or Houston (IAH) are safer and faster." }
              },
              {
                "@type": "Question",
                "name": "How hot will Group F cities be in June/July?",
                "acceptedAnswer": { "@type": "Answer", "text": "Expect dangerous heat. Dallas and Houston often exceed 95°F (35°C) with high humidity. Monterrey is similar. Kansas City can be 90°F+ (32°C). AT&T Stadium (Dallas) and NRG Stadium (Houston) have AC, but tailgating will be scorching." }
              },
              {
                "@type": "Question",
                "name": "What is the best way to travel between Dallas and Houston?",
                "acceptedAnswer": { "@type": "Answer", "text": "Driving (approx. 4 hours on I-45) or flying (45 mins). The 'Texas Bullet Train' is not expected to be operational by 2026. Luxury bus lines like Vonlane are an excellent alternative." }
              },
              {
                "@type": "Question",
                "name": "Do I need a visa for Mexico if I have a US Visa?",
                "acceptedAnswer": { "@type": "Answer", "text": "Generally, if you hold a valid US visa, you can enter Mexico for tourism without a separate Mexican visa, but you must complete an FMM (immigration form). Always verify with your specific consulate." }
              },
              {
                "@type": "Question",
                "name": "Which Group F stadium is the loudest?",
                "acceptedAnswer": { "@type": "Answer", "text": "Arrowhead Stadium (Kansas City) holds the Guinness World Record for loudest stadium roar (142.2 dB). Expect an deafening atmosphere." }
              }
            ]
          }
        ]}
      />

      <Header />

      <main className="relative">
        {/* Hero Section */}
        <div className="relative bg-[#0A0A0A] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/90 to-[#0A0A0A]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/40 via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm animate-fade-in">
                <Flame className="w-4 h-4 animate-pulse" />
                The Tex-Mex Corridor
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight animate-fade-in-up">
                World Cup 2026 Group F: <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">The Heat Wave</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Dallas. Houston. Kansas City. Monterrey. A high-stakes road trip through the heart of North America. Extreme heat, passionate fans, and the logistics of crossing the Rio Grande.
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 border-t border-white/10 pt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span>Updated: June 2025</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>14 min read</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-orange-500" />
                  <span>By Stadiumport Strategy Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
            
            {/* Minimalist Sticky Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 relative">
              <div className="sticky top-32">
                <nav className="space-y-1 border-l border-slate-200 dark:border-slate-800 ml-2">
                  {[
                    { id: 'intro', label: 'Introduction' },
                    { id: 'matrix', label: 'Host City Matrix' },
                    { id: 'strategy', label: 'Travel Strategy' },
                    { id: 'accommodation', label: 'Accommodation' },
                    { id: 'budget', label: 'Budget Breakdown' },
                    { id: 'visa', label: 'Visa & Border' },
                    { id: 'insider', label: 'Insider Knowledge' },
                    { id: 'packing', label: 'Packing Essentials' },
                    { id: 'faq', label: 'FAQ' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left pl-6 py-3 text-sm transition-all duration-300 border-l-2 -ml-[1px] ${
                        activeSection === item.id 
                          ? 'border-orange-500 text-orange-600 dark:text-orange-400 font-bold' 
                          : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Sidebar Widgets */}
                <div className="mt-12 space-y-8">
                  {/* Heat Survival Widget */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Flame className="w-3 h-3 text-orange-500" /> Heat Survival Kit
                    </h3>
                    <div className="space-y-4">
                      <a href="#" className="block group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-900/40 transition-colors">
                            <Droplets className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors">Hydration Pack</p>
                            <p className="text-xs text-slate-500">Mandatory gear</p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="block group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-900/40 transition-colors">
                            <ThermometerSun className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors">Cooling Towels</p>
                            <p className="text-xs text-slate-500">Instant relief</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Timeline Widget */}
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl text-white shadow-lg shadow-orange-500/20">
                    <h3 className="text-sm font-bold mb-4 opacity-90">Planning Timeline</h3>
                    <ul className="space-y-3 text-xs">
                      <li className="flex gap-3 items-center">
                        <span className="font-mono font-bold opacity-70 w-12">12 MO</span>
                        <span>Book Rental Cars</span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <span className="font-mono font-bold opacity-70 w-12">9 MO</span>
                        <span>Passport Check</span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <span className="font-mono font-bold opacity-70 w-12">6 MO</span>
                        <span>Book Flights</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-24">
              
              {/* Section 1: Introduction */}
              <section id="intro" className="scroll-mt-32">
                <p className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white leading-relaxed mb-8">
                  Group F is a test of endurance. Geographically, it's the most coherent group—strung along the I-35/I-45 corridor. Culturally, it bridges the American Midwest, the Texas megaplex, and Northern Mexico.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  But the real opponent here isn't just the rival team—it's the elements. With matches played in the peak of summer, you are entering the "Heat Dome." While three of the four stadiums have roofs (a lifesaver), the street festivals, fan zones, and transit hubs will be scorching. This guide focuses on <strong>strategic mobility</strong> and <strong>thermal survival</strong>.
                </p>
              </section>

              {/* Section 2: Host City Matrix */}
              <section id="matrix" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-orange-500 font-mono text-sm font-bold tracking-widest uppercase">01</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Host City Matrix</h2>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold text-xs">
                      <tr>
                        <th className="p-6">City</th>
                        <th className="p-6 hidden md:table-cell">Stadium</th>
                        <th className="p-6">Climate Control</th>
                        <th className="p-6 hidden md:table-cell">Vibe</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-[#0A0A0A]">
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                        <td className="p-6 font-bold text-slate-900 dark:text-white">Dallas, USA</td>
                        <td className="p-6 hidden md:table-cell text-slate-600 dark:text-slate-400">AT&T Stadium</td>
                        <td className="p-6 font-bold text-emerald-600">Retractable Roof (AC)</td>
                        <td className="p-6 hidden md:table-cell text-slate-600 dark:text-slate-400">Corporate, Massive, Flashy</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                        <td className="p-6 font-bold text-slate-900 dark:text-white">Houston, USA</td>
                        <td className="p-6 hidden md:table-cell text-slate-600 dark:text-slate-400">NRG Stadium</td>
                        <td className="p-6 font-bold text-emerald-600">Retractable Roof (AC)</td>
                        <td className="p-6 hidden md:table-cell text-slate-600 dark:text-slate-400">Diverse, Urban, Humid</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                        <td className="p-6 font-bold text-slate-900 dark:text-white">Monterrey, MX</td>
                        <td className="p-6 hidden md:table-cell text-slate-600 dark:text-slate-400">Estadio BBVA</td>
                        <td className="p-6 font-bold text-orange-500">Open Air (Partial Roof)</td>
                        <td className="p-6 hidden md:table-cell text-slate-600 dark:text-slate-400">Passionate, Scenic, Intense</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                        <td className="p-6 font-bold text-slate-900 dark:text-white">Kansas City, USA</td>
                        <td className="p-6 hidden md:table-cell text-slate-600 dark:text-slate-400">Arrowhead Stadium</td>
                        <td className="p-6 font-bold text-red-500">Open Air (No Roof)</td>
                        <td className="p-6 hidden md:table-cell text-slate-600 dark:text-slate-400">Loudest in World, BBQ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Travel Strategy */}
              <section id="strategy" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-orange-500 font-mono text-sm font-bold tracking-widest uppercase">02</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">The I-35 Corridor Strategy</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 transition-all hover:shadow-xl hover:shadow-orange-900/5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Texas Triangle</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      Driving between <strong>Dallas</strong> and <strong>Houston</strong> is easy (approx 4 hours on I-45). Renting a car gives you essential AC and flexibility in these sprawling cities.
                    </p>
                    <a href="#" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                      Compare Rental Rates <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>

                  <div className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/50 transition-all hover:shadow-xl hover:shadow-red-900/5">
                    <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Border Warning</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      <strong>Do not drive</strong> your US rental car into Mexico. Insurance is invalid, and the border route (Nuevo Laredo) can be risky. <strong>Fly</strong> from DFW/IAH to Monterrey (MTY) instead.
                    </p>
                    <a href="#" className="inline-flex items-center text-red-600 dark:text-red-400 font-bold hover:underline">
                      Check Flights <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Transport Table */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 mb-8">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-bold uppercase text-xs">
                      <tr>
                        <th className="p-4">Route</th>
                        <th className="p-4">Mode</th>
                        <th className="p-4 hidden sm:table-cell">Time</th>
                        <th className="p-4 hidden sm:table-cell">Note</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-[#0A0A0A]">
                      <tr>
                        <td className="p-4 font-bold dark:text-white">Dallas ↔ Houston</td>
                        <td className="p-4 text-emerald-600 font-bold">Drive / Bus</td>
                        <td className="p-4 hidden sm:table-cell dark:text-slate-300">4 Hours</td>
                        <td className="p-4 hidden sm:table-cell dark:text-slate-400">Vonlane bus is excellent.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold dark:text-white">KC ↔ Dallas</td>
                        <td className="p-4 text-blue-500 font-bold">Fly</td>
                        <td className="p-4 hidden sm:table-cell dark:text-slate-300">1.5 Hours</td>
                        <td className="p-4 hidden sm:table-cell dark:text-slate-400">Driving is 8+ hours (boring).</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold dark:text-white">Dallas ↔ Monterrey</td>
                        <td className="p-4 text-blue-500 font-bold">Fly</td>
                        <td className="p-4 hidden sm:table-cell dark:text-slate-300">1.5 Hours</td>
                        <td className="p-4 hidden sm:table-cell dark:text-slate-400">Direct flights available.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Accommodation */}
              <section id="accommodation" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-orange-500 font-mono text-sm font-bold tracking-widest uppercase">03</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Where to Stay</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Dallas</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Arlington vs Uptown</p>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Stay in <strong>Arlington</strong> for match ease, or <strong>Uptown Dallas</strong> for nightlife. The stadium is isolated from the city center.
                    </p>

                  </div>

                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Houston</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Rail Corridor</p>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Stay near the <strong>METRORail Red Line</strong> (Downtown/Midtown) to reach NRG Stadium without parking headaches.
                    </p>

                  </div>
                  
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Monterrey</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">San Pedro</p>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      San Pedro Garza García is the safest, most upscale district. Avoid outskirts at night.
                    </p>

                  </div>

                  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Kansas City</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Power & Light</p>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Stay in <strong>Power & Light District</strong>. You MUST drive or shuttle to Arrowhead (no train).
                    </p>

                  </div>
                </div>

                {/* Affiliate Block */}
                <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-8 md:p-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Need AC?</h3>
                      <p className="text-slate-300 max-w-md">Hotel prices in Texas will surge. Ensure your booking has a functional pool.</p>
                    </div>
                    <div className="flex gap-4">
                      <a href="https://www.booking.com" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                        Booking.com
                      </a>
                      <a href="https://www.expedia.com" target="_blank" rel="noreferrer" className="px-6 py-3 bg-transparent border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                        Expedia
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Budget */}
              <section id="budget" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-orange-500 font-mono text-sm font-bold tracking-widest uppercase">04</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Budget Breakdown</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-2">Accommodation</div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">$250-350</div>
                    <div className="text-xs text-slate-500">per night (US Cities)</div>
                    <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">Monterrey is cheaper ($150-250), but secure hotels carry a premium.</div>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-2">Daily Food</div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">$60-90</div>
                    <div className="text-xs text-slate-500">per person</div>
                    <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">Texas BBQ is pricey ($30+ a plate). Tacos in Monterrey are a bargain ($10).</div>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-2">Transport</div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">$80</div>
                    <div className="text-xs text-slate-500">per day</div>
                    <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">Car rental is essential in Texas. Uber/Lyft surge pricing will be extreme.</div>
                  </div>
                </div>
              </section>

              {/* Section 6: Visa */}
              <section id="visa" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-orange-500 font-mono text-sm font-bold tracking-widest uppercase">05</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Visa & Entry</h2>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border-l-4 border-blue-500 shadow-sm">
                  <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-6">The Two-Country Shuffle</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                        <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">US Entry</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Standard ESTA or Visa required. Dallas/Houston/KC are domestic travel (no checks).</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Mexico Entry</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">If you have a valid US Visa, you generally do NOT need a Mexican visa for tourism. You just need to fill out the FMM form upon arrival.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                        <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Re-Entry to USA</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Border lines at airports (DFW/IAH) can be long. Use <strong>Mobile Passport Control (MPC)</strong> app to skip the line (free).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Insider */}
              <section id="insider" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-orange-500 font-mono text-sm font-bold tracking-widest uppercase">06</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Insider Knowledge</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6">
                      <ThermometerSun className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">Respect the Sun</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      In Kansas City (open stadium) and outside ANY stadium, the UV index is 10+. Wear a hat, SPF 50, and bring a cooling towel. Heat stroke is the #1 medical issue for tourists here.
                    </p>
                  </div>
                  
                  <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                      <Utensils className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">Eat Local</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      KC: Burnt Ends BBQ. Houston: Viet-Cajun Crawfish. Dallas: Steak. Monterrey: Cabrito (Roast Goat). This group is a culinary world tour.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Packing */}
              <section id="packing" className="scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-orange-500 font-mono text-sm font-bold tracking-widest uppercase">07</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Heat Survival Gear</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-orange-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💧</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Hydration Pack</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Don't rely on bottles.</p>
                    <a href="#" className="text-orange-600 text-[10px] font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-orange-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧢</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Cooling Hat</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Wet it to stay cool.</p>
                    <a href="#" className="text-orange-600 text-[10px] font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-orange-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔋</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Portable Fan</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Neck fans are great.</p>
                    <a href="#" className="text-orange-600 text-[10px] font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Shop Now</a>
                  </div>
                  <div className="group text-center p-6 border border-slate-100 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-900 hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-orange-900/5">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧴</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">SPF 50+</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Apply every 2 hours.</p>
                    <a href="#" className="text-orange-600 text-[10px] font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Shop Now</a>
                  </div>
                </div>
              </section>

              {/* Section 9: FAQ */}
              <section id="faq" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  <AccordionItem 
                    question="Is it safe to drive from Texas to Monterrey?"
                    answer={<>We <strong>strongly recommend flying</strong>. While the drive via Laredo is physically possible, US rental car agencies typically prohibit cross-border travel, and the border region (Tamaulipas) often has travel advisories. Direct flights from Dallas (DFW) or Houston (IAH) are safer and faster.</>}
                    isOpen={openFaqIndex === 0}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  />
                  <AccordionItem 
                    question="Do I need a car in Dallas/Houston?"
                    answer={<>Yes. These are sprawling driving cities. Public transit exists but often doesn't connect where you stay to where you play efficiently.</>}
                    isOpen={openFaqIndex === 1}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  />
                  <AccordionItem 
                    question="Can I drink tap water in Monterrey?"
                    answer={<>Generally, stick to <strong>bottled water</strong> to be safe, although Monterrey has some of the best water in Mexico. In US cities, tap water is safe.</>}
                    isOpen={openFaqIndex === 2}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  />
                  <AccordionItem 
                    question="How far is Kansas City from Dallas?"
                    answer={<>It's an 8-hour drive or a 90-minute flight. If you have time, the drive through Oklahoma is easy but flat.</>}
                    isOpen={openFaqIndex === 3}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                  />
                  <AccordionItem 
                    question="Which Group F stadium is the loudest?"
                    answer={<><strong>Arrowhead Stadium (Kansas City)</strong> holds the Guinness World Record for loudest stadium roar (142.2 dB). Expect a deafening atmosphere.</>}
                    isOpen={openFaqIndex === 4}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 4 ? null : 4)}
                  />
                </div>
              </section>

              {/* Final CTA */}
              <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 text-white p-12 md:p-20 text-center shadow-2xl shadow-slate-900/20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-slate-900 to-slate-900"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Brave the Heat?</h2>
                  <p className="text-slate-300 mb-12 text-lg leading-relaxed font-light">
                    Group F offers some of the most intense atmospheres in the tournament. Prepare for the heat, and you'll have the time of your life.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
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
