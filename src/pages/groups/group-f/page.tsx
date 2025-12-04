import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPin, Calendar, ArrowRight, Train, Plane, Utensils, Ticket, 
  Music, Sun, Car, Flame, Shield, Smartphone, Briefcase, 
  Globe, CreditCard, AlertTriangle, CheckCircle2, ThermometerSun, Droplets,
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
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors pr-8">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-orange-500 border-orange-500 text-white' : 'group-hover:border-orange-500 text-slate-400'}`}>
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

export default function GroupFPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/groups/group-f';
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
    <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-slate-900 dark:text-white selection:bg-orange-500/30">
      <Helmet>
        <title>Group F World Cup 2026 Travel Guide: Dallas, Houston, KC & Monterrey | StadiumPort</title>
        <meta name="description" content="The definitive travel guide for World Cup 2026 Group F. Navigate the 'Tex-Mex Corridor' (Dallas, Houston, Monterrey, Kansas City) safely. Heat survival, I-35 road trip strategy, and border crossing tips." />
        <meta name="keywords" content="Group F World Cup 2026, Dallas World Cup travel, Houston World Cup guide, Monterrey World Cup safety, Kansas City World Cup, I-35 road trip World Cup" />
        <link rel="canonical" href={`${siteUrl}${pageUrl}`} />
      </Helmet>

      <SchemaOrg 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Group F World Cup 2026 Travel Guide: The Heat Wave Corridor",
            "description": "Complete logistics guide for World Cup Group F fans traveling between Dallas, Houston, Kansas City, and Monterrey. Focuses on heat safety and cross-border travel.",
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
        <div className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/40 via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                <Flame className="w-3 h-3 animate-pulse" />
                The Tex-Mex Corridor
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                World Cup 2026 Group F: <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">The Heat Wave</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                Dallas. Houston. Kansas City. Monterrey. A high-stakes road trip through the heart of North America. Extreme heat, passionate fans, and the logistics of crossing the Rio Grande.
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-8">
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

        {/* Progress Bar */}
        <div className="sticky top-[72px] z-40 h-1 bg-slate-100 dark:bg-slate-800 w-full">
          <div 
            className="h-full bg-orange-500 transition-all duration-150"
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
                        className={`block w-full text-left pl-6 py-2 text-sm transition-all relative ${
                          activeSection === item.id 
                            ? 'text-orange-600 dark:text-orange-400 font-bold' 
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                        }`}
                      >
                        {activeSection === item.id && (
                          <span className="absolute left-[-1px] top-0 bottom-0 w-0.5 bg-orange-600 dark:bg-orange-400"></span>
                        )}
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Sidebar Widgets */}
                <div className="bg-white dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-navy-700 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-500" /> Heat Survival Kit
                  </h3>
                  <div className="space-y-4">
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="bg-slate-50 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 transition-colors">
                          <Droplets className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        </div>
                        <div>
                          <p className="font-bold text-xs text-slate-900 dark:text-white">Hydration Backpack</p>
                          <p className="text-[10px] text-slate-500">Stay hydrated</p>
                        </div>
                      </div>
                    </a>
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block group">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="bg-slate-50 dark:bg-navy-900 p-2 rounded-lg group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 transition-colors">
                          <ThermometerSun className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        </div>
                        <div>
                          <p className="font-bold text-xs text-slate-900 dark:text-white">Cooling Towels</p>
                          <p className="text-[10px] text-slate-500">Instant relief</p>
                        </div>
                      </div>
                    </a>
                    <div className="pt-3 border-t border-slate-100 dark:border-navy-700">
                      <Link to="/planning/packing-list" className="block w-full text-center text-xs font-bold text-orange-600 hover:text-orange-500 uppercase tracking-wider">
                        View Full List
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl text-white shadow-lg">
                  <h3 className="text-sm font-bold mb-4">Planning Timeline</h3>
                  <ul className="space-y-3 text-xs">
                    <li className="flex gap-3">
                      <div className="font-bold opacity-70 w-12">12 Mos</div>
                      <div>Book Rental Cars</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold opacity-70 w-12">9 Mos</div>
                      <div>Passport Check</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold opacity-70 w-12">6 Mos</div>
                      <div>Book Flights</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold opacity-70 w-12">3 Mos</div>
                      <div>Buy Heat Gear</div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              
              {/* Introduction */}
              <div id="intro" className="prose prose-lg dark:prose-invert max-w-none mb-20">
                <p className="lead text-2xl md:text-3xl font-medium text-slate-900 dark:text-white leading-relaxed mb-8">
                  Group F is a test of endurance. Geographically, it's the most coherent group—strung along the I-35/I-45 corridor. Culturally, it bridges the American Midwest, the Texas megaplex, and Northern Mexico.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-8 mb-8">
                  But the real opponent here isn't just the rival team—it's the elements. With matches played in the peak of summer, you are entering the "Heat Dome." While three of the four stadiums have roofs (a lifesaver), the street festivals, fan zones, and transit hubs will be scorching. This guide focuses on <strong>strategic mobility</strong> and <strong>thermal survival</strong>.
                </p>
              </div>

              {/* Section: Host City Matrix */}
              <section id="matrix" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400 text-xl font-bold">1</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Host City Matrix</h2>
                </div>

                <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-sm border border-slate-200 dark:border-navy-700 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 dark:bg-navy-900 text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold text-xs">
                        <tr>
                          <th className="px-6 py-5">City</th>
                          <th className="px-6 py-5">Stadium</th>
                          <th className="px-6 py-5">Climate Control</th>
                          <th className="px-6 py-5">Vibe</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-navy-700">
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="px-6 py-5 font-bold text-slate-900 dark:text-white">Dallas, USA</td>
                          <td className="px-6 py-5 text-slate-600 dark:text-slate-300">AT&T Stadium</td>
                          <td className="px-6 py-5 text-green-600 font-bold">Retractable Roof (AC)</td>
                          <td className="px-6 py-5 text-slate-600 dark:text-slate-300">Corporate, Massive, flashy</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="px-6 py-5 font-bold text-slate-900 dark:text-white">Houston, USA</td>
                          <td className="px-6 py-5 text-slate-600 dark:text-slate-300">NRG Stadium</td>
                          <td className="px-6 py-5 text-green-600 font-bold">Retractable Roof (AC)</td>
                          <td className="px-6 py-5 text-slate-600 dark:text-slate-300">Diverse, Urban, Humid</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="px-6 py-5 font-bold text-slate-900 dark:text-white">Monterrey, MX</td>
                          <td className="px-6 py-5 text-slate-600 dark:text-slate-300">Estadio BBVA</td>
                          <td className="px-6 py-5 text-orange-500 font-bold">Open Air (Partial Roof)</td>
                          <td className="px-6 py-5 text-slate-600 dark:text-slate-300">Passionate, Scenic, Intense</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                          <td className="px-6 py-5 font-bold text-slate-900 dark:text-white">Kansas City, USA</td>
                          <td className="px-6 py-5 text-slate-600 dark:text-slate-300">Arrowhead Stadium</td>
                          <td className="px-6 py-5 text-red-500 font-bold">Open Air (No Roof)</td>
                          <td className="px-6 py-5 text-slate-600 dark:text-slate-300">Loudest in World, BBQ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section: Travel Strategy */}
              <section id="strategy" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400 text-xl font-bold">2</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">The I-35 Corridor Strategy</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-orange-50 dark:bg-orange-900/10 p-8 rounded-2xl border border-orange-100 dark:border-orange-800/30">
                    <h3 className="font-bold text-xl text-orange-800 dark:text-orange-200 mb-4 flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6" /> The Texas Triangle (Do Drive)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                      Driving between <strong>Dallas</strong> and <strong>Houston</strong> is easy (approx 4 hours on I-45). Renting a car gives you essential AC and flexibility in these sprawling cities.
                    </p>
                    <a href="https://rentalcars.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-600 dark:text-orange-400 font-bold hover:underline">
                      Compare Texas Rental Rates <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-800/30">
                    <h3 className="font-bold text-xl text-red-800 dark:text-red-200 mb-4 flex items-center gap-3">
                      <AlertTriangle className="w-6 h-6" /> The Border Crossing (Don't Drive)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                      <strong>Do not drive</strong> your US rental car into Mexico. Insurance is invalid, and the border route (Nuevo Laredo) can be risky. <strong>Fly</strong> from DFW/IAH to Monterrey (MTY) instead.
                    </p>
                    <a href="https://skyscanner.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-red-600 dark:text-red-400 font-bold hover:underline">
                      Check DFW to MTY Flights <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Inter-City Transit Table</h3>
                <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-navy-700 mb-8 shadow-sm">
                  <table className="min-w-full text-sm text-left">
                    <thead className="bg-slate-50 dark:bg-navy-900/50 text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs">
                      <tr>
                        <th className="p-5 border-b dark:border-navy-700">Route</th>
                        <th className="p-5 border-b dark:border-navy-700">Recommended Mode</th>
                        <th className="p-5 border-b dark:border-navy-700">Time</th>
                        <th className="p-5 border-b dark:border-navy-700">Note</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-navy-800 divide-y divide-slate-100 dark:divide-navy-700">
                      <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                        <td className="p-5 font-medium text-slate-900 dark:text-white">Dallas ↔ Houston</td>
                        <td className="p-5 font-bold text-teal-600 dark:text-teal-400">Drive / Bus</td>
                        <td className="p-5 text-slate-600 dark:text-slate-400">3.5 - 4.5 Hours</td>
                        <td className="p-5 text-slate-600 dark:text-slate-400">Vonlane (Luxury Bus) is excellent.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                        <td className="p-5 font-medium text-slate-900 dark:text-white">Kansas City ↔ Dallas</td>
                        <td className="p-5 font-bold text-blue-600 dark:text-blue-400">Fly</td>
                        <td className="p-5 text-slate-600 dark:text-slate-400">1.5 Hour Flight</td>
                        <td className="p-5 text-slate-600 dark:text-slate-400">Drive is 8+ hours (boring).</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
                        <td className="p-5 font-medium text-slate-900 dark:text-white">Dallas ↔ Monterrey</td>
                        <td className="p-5 font-bold text-blue-600 dark:text-blue-400">Fly</td>
                        <td className="p-5 text-slate-600 dark:text-slate-400">1.5 Hour Flight</td>
                        <td className="p-5 text-slate-600 dark:text-slate-400">Direct flights available.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section: City Essentials */}
              <section id="cities" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400 text-xl font-bold">3</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">City-by-City Essentials</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {/* Dallas */}
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-orange-500/30 transition-all duration-300 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-500">Dallas</h3>
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                      The central hub. Stay in <strong>Arlington</strong> for match ease, or <strong>Uptown Dallas</strong> for nightlife.
                    </p>
                    <div className="flex gap-4 text-sm font-bold pt-4 border-t border-slate-100 dark:border-navy-700">
                      <Link to="/cities/dallas" className="text-orange-600 dark:text-orange-400 hover:text-orange-500">City Guide</Link>
                      <Link to="/world-cup-2026-stadiums/att-stadium-guide" className="text-blue-600 dark:text-blue-400 hover:text-blue-500">Stadium Guide</Link>
                    </div>
                  </div>

                  {/* Houston */}
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-orange-500/30 transition-all duration-300 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-500">Houston</h3>
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                      Stay near the <strong>METRORail Red Line</strong> (Downtown/Midtown) to reach NRG Stadium without parking headaches.
                    </p>
                    <div className="flex gap-4 text-sm font-bold pt-4 border-t border-slate-100 dark:border-navy-700">
                      <Link to="/cities/houston" className="text-orange-600 dark:text-orange-400 hover:text-orange-500">City Guide</Link>
                      <Link to="/world-cup-2026-stadiums/nrg-stadium-guide" className="text-blue-600 dark:text-blue-400 hover:text-blue-500">Stadium Guide</Link>
                    </div>
                  </div>

                  {/* Monterrey */}
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-orange-500/30 transition-all duration-300 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-500">Monterrey</h3>
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                      San Pedro Garza García is the safest, most upscale district for tourists. Avoid outskirts at night.
                    </p>
                    <div className="flex gap-4 text-sm font-bold pt-4 border-t border-slate-100 dark:border-navy-700">
                      <Link to="/world-cup-2026-stadiums/estadio-bbva-guide" className="text-blue-600 dark:text-blue-400 hover:text-blue-500">Stadium Guide</Link>
                    </div>
                  </div>

                  {/* Kansas City */}
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 hover:shadow-xl hover:border-orange-500/30 transition-all duration-300 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-500">Kansas City</h3>
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                      Stay in <strong>Power & Light District</strong>. You MUST drive or shuttle to Arrowhead (no train).
                    </p>
                    <div className="flex gap-4 text-sm font-bold pt-4 border-t border-slate-100 dark:border-navy-700">
                      <Link to="/cities/kansas-city" className="text-orange-600 dark:text-orange-400 hover:text-orange-500">City Guide</Link>
                      <Link to="/world-cup-2026-stadiums/arrowhead-stadium-guide" className="text-blue-600 dark:text-blue-400 hover:text-blue-500">Stadium Guide</Link>
                    </div>
                  </div>
                </div>

                {/* Affiliate Block: Hotels */}
                <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10 rounded-2xl border border-orange-200 dark:border-orange-800/30 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-orange-900 dark:text-white mb-2">🏨 Book Air-Conditioned Havens</h4>
                      <p className="text-orange-800 dark:text-orange-200 text-sm">Hotel prices in Dallas/Houston will surge. Ensure your booking has a functional pool.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
                      Find Hotels on Booking.com <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                    </a>
                    <a href="https://expedia.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-600 hover:border-orange-500 text-slate-700 dark:text-slate-200 font-bold py-4 px-6 rounded-xl transition-all hover:shadow-md">
                      Compare on Expedia <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Section: Visa & Border */}
              <section id="visa" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400 text-xl font-bold">4</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Visa & Entry Rules</h2>
                </div>

                <div className="bg-slate-50 dark:bg-navy-800 p-8 rounded-2xl border-l-4 border-blue-500 shadow-sm">
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
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                        <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
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

              {/* Section: Insider Knowledge */}
              <section id="insider" className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400 text-xl font-bold">5</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Insider Knowledge</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6">
                      <ThermometerSun className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">Respect the Sun</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      In Kansas City (open stadium) and outside ANY stadium, the UV index is 10+. Wear a hat, SPF 50, and bring a cooling towel. Heat stroke is the #1 medical issue for tourists here.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                      <Utensils className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">Eat Local</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      KC: Burnt Ends BBQ. Houston: Viet-Cajun Crawfish. Dallas: Steak. Monterrey: Cabrito (Roast Goat). This group is a culinary world tour.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: FAQ */}
              <section id="faq" className="mb-24 scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10">Frequently Asked Questions</h2>
                <div className="space-y-1">
                  <AccordionItem 
                    question="Is it safe to drive from Texas to Monterrey for the World Cup?"
                    answer="We strongly recommend flying. While the drive via Laredo is physically possible, US rental car agencies typically prohibit cross-border travel, and the border region (Tamaulipas) often has travel advisories. Direct flights from Dallas (DFW) or Houston (IAH) are safer and faster."
                    isOpen={openFaqIndex === 0}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  />
                  <AccordionItem 
                    question="Do I need a car in Dallas/Houston?"
                    answer="Yes. These are sprawling driving cities. Public transit exists but often doesn't connect where you stay to where you play efficiently."
                    isOpen={openFaqIndex === 1}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  />
                  <AccordionItem 
                    question="Can I drink tap water in Monterrey?"
                    answer="Generally, stick to bottled water to be safe, although Monterrey has some of the best water in Mexico. In US cities, tap water is safe."
                    isOpen={openFaqIndex === 2}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  />
                  <AccordionItem 
                    question="How far is Kansas City from Dallas?"
                    answer="It's an 8-hour drive or a 90-minute flight. If you have time, the drive through Oklahoma is easy but flat."
                    isOpen={openFaqIndex === 3}
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                  />
                </div>
              </section>

              {/* Final CTA */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Survive the Heat Wave</h2>
                <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed relative z-10">
                  Group F is a journey through the Tex-Mex heartland. Master the I-35 corridor and book your travel early.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                  <Link to="/world-cup-2026-host-cities" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
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
