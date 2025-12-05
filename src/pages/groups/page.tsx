import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { motion } from 'framer-motion';
import { MapPin, Trophy, ArrowRight, AlertCircle, Info, Globe } from 'lucide-react';
import { TEAMS } from '../../features/game/lib/wc26-data';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

// Full 48-team group data including placeholders
const groupData: Record<string, { name: string; code: string; isWinner?: boolean }[]> = {
  'A': [
    { name: 'Mexico', code: 'MEX' },
    { name: 'South Africa', code: 'RSA' },
    { name: 'South Korea', code: 'KOR' },
    { name: 'PO D', code: 'POD', isWinner: true }
  ],
  'B': [
    { name: 'Canada', code: 'CAN' },
    { name: 'PO A', code: 'POA', isWinner: true },
    { name: 'Qatar', code: 'QAT' },
    { name: 'Switzerland', code: 'SUI' }
  ],
  'C': [
    { name: 'Brazil', code: 'BRA' },
    { name: 'Morocco', code: 'MAR' },
    { name: 'Haiti', code: 'HAI' },
    { name: 'Scotland', code: 'SCO' }
  ],
  'D': [
    { name: 'USA', code: 'USA' },
    { name: 'Paraguay', code: 'PAR' },
    { name: 'Australia', code: 'AUS' },
    { name: 'PO C', code: 'POC', isWinner: true }
  ],
  'E': [
    { name: 'Germany', code: 'GER' },
    { name: 'Curaçao', code: 'CUW' },
    { name: 'Ivory Coast', code: 'CIV' },
    { name: 'Ecuador', code: 'ECU' }
  ],
  'F': [
    { name: 'Netherlands', code: 'NED' },
    { name: 'Japan', code: 'JPN' },
    { name: 'PO B', code: 'POB', isWinner: true },
    { name: 'Tunisia', code: 'TUN' }
  ],
  'G': [
    { name: 'Belgium', code: 'BEL' },
    { name: 'Egypt', code: 'EGY' },
    { name: 'Iran', code: 'IRN' },
    { name: 'New Zealand', code: 'NZL' }
  ],
  'H': [
    { name: 'Spain', code: 'ESP' },
    { name: 'Cape Verde', code: 'CPV' },
    { name: 'Saudi Arabia', code: 'KSA' },
    { name: 'Uruguay', code: 'URU' }
  ],
  'I': [
    { name: 'France', code: 'FRA' },
    { name: 'Senegal', code: 'SEN' },
    { name: 'PO 2', code: 'PO2', isWinner: true },
    { name: 'Norway', code: 'NOR' }
  ],
  'J': [
    { name: 'Argentina', code: 'ARG' },
    { name: 'Algeria', code: 'ALG' },
    { name: 'Austria', code: 'AUT' },
    { name: 'Jordan', code: 'JOR' }
  ],
  'K': [
    { name: 'Portugal', code: 'POR' },
    { name: 'PO 1', code: 'PO1', isWinner: true },
    { name: 'Uzbekistan', code: 'UZB' },
    { name: 'Colombia', code: 'COL' }
  ],
  'L': [
    { name: 'England', code: 'ENG' },
    { name: 'Croatia', code: 'CRO' },
    { name: 'Ghana', code: 'GHA' },
    { name: 'Panama', code: 'PAN' }
  ]
};

const cityLinks = [
  { name: 'Mexico City', url: '/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide' },
  { name: 'Guadalajara', url: '/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide' },
  { name: 'Monterrey', url: '/world-cup-2026-host-cities/monterrey-world-cup-2026-guide' },
  { name: 'Atlanta', url: '/world-cup-2026-host-cities/atlanta-world-cup-2026-guide' },
  { name: 'Vancouver', url: '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide' },
  { name: 'Seattle', url: '/world-cup-2026-host-cities/seattle-world-cup-2026-guide' },
  { name: 'San Francisco', url: '/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide' },
  { name: 'Toronto', url: '/world-cup-2026-host-cities/toronto-world-cup-2026-guide' },
  { name: 'Boston', url: '/world-cup-2026-host-cities/boston-world-cup-2026-guide' },
  { name: 'New York/New Jersey', url: '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide' },
  { name: 'Miami', url: '/world-cup-2026-host-cities/miami-world-cup-2026-guide' },
  { name: 'Los Angeles', url: '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide' },
  { name: 'Houston', url: '/world-cup-2026-host-cities/houston-world-cup-2026-guide' },
  { name: 'Dallas', url: '/world-cup-2026-host-cities/dallas-world-cup-2026-guide' },
  { name: 'Kansas City', url: '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide' },
  { name: 'Philadelphia', url: '/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide' }
];

const stadiumLinks = [
  { name: 'Estadio Azteca', url: '/world-cup-2026-stadiums/estadio-azteca-guide' },
  { name: 'Estadio Akron', url: '/world-cup-2026-stadiums/estadio-akron-guide' },
  { name: 'Estadio BBVA', url: '/world-cup-2026-stadiums/estadio-bbva-guide' },
  { name: 'Mercedes-Benz Stadium', url: '/world-cup-2026-stadiums/mercedes-benz-stadium-guide' },
  { name: 'BC Place', url: '/world-cup-2026-stadiums/bc-place-stadium-guide' },
  { name: 'Lumen Field', url: '/world-cup-2026-stadiums/lumen-field-guide' },
  { name: "Levi's Stadium", url: '/world-cup-2026-stadiums/levis-stadium-guide' },
  { name: 'BMO Field', url: '/world-cup-2026-stadiums/bmo-field-guide' },
  { name: 'Gillette Stadium', url: '/world-cup-2026-stadiums/gillette-stadium-guide' },
  { name: 'MetLife Stadium', url: '/world-cup-2026-stadiums/metlife-stadium-guide' },
  { name: 'Hard Rock Stadium', url: '/world-cup-2026-stadiums/hard-rock-stadium-guide' },
  { name: 'SoFi Stadium', url: '/world-cup-2026-stadiums/sofi-stadium-guide' },
  { name: 'NRG Stadium', url: '/world-cup-2026-stadiums/nrg-stadium-guide' },
  { name: 'AT&T Stadium', url: '/world-cup-2026-stadiums/att-stadium-guide' },
  { name: 'Arrowhead Stadium', url: '/world-cup-2026-stadiums/arrowhead-stadium-guide' },
  { name: 'Lincoln Financial Field', url: '/world-cup-2026-stadiums/lincoln-financial-field-guide' }
];

const faqs = [
  {
    question: "How many groups are in the 2026 World Cup?",
    answer: "The 2026 World Cup will feature 12 groups of 4 teams each, totaling 48 participating nations. This is an expansion from the previous 32-team format."
  },
  {
    question: "Who advances from the group stage in 2026?",
    answer: "The top two teams from each of the 12 groups, plus the 8 best third-place teams, will advance to the Round of 32 knockout stage."
  },
  {
    question: "When will the 2026 World Cup group draw take place?",
    answer: "The official group draw for the FIFA World Cup 2026 is expected to take place in late 2025, once all qualifying matches have concluded."
  },
  {
    question: "Where will the 2026 World Cup group stage matches be played?",
    answer: "Group stage matches will be hosted across 16 cities in three countries: USA (11 cities), Mexico (3 cities), and Canada (2 cities)."
  }
];

export default function GroupsSchedulePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "FIFA World Cup 2026",
    "description": "The 23rd FIFA World Cup, a quadrennial international football tournament contested by the men's national teams of the member associations of FIFA.",
    "startDate": "2026-06-11",
    "endDate": "2026-07-19",
    "location": {
      "@type": "Place",
      "name": "North America",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": ["US", "MX", "CA"]
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "FIFA",
      "url": "https://www.fifa.com"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>FIFA World Cup 2026 Groups: Official 48-Team Draw & Match Schedule</title>
        <meta name="description" content="Complete guide to the 2026 FIFA World Cup groups. Track all 48 teams across Groups A-L, view match fixtures, and explore host cities in USA, Mexico, and Canada." />
        <meta name="keywords" content="World Cup 2026 groups, FIFA World Cup 2026 schedule, 48 teams format, group draw results, USA Mexico Canada 2026, match fixtures, Group A teams, Group L teams" />
        <link rel="canonical" href="https://stadiumport.com/world-cup-2026-groups" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FIFA World Cup 2026 Groups: Official 48-Team Draw & Match Schedule" />
        <meta property="og:description" content="See the full 48-team breakdown for the 2026 World Cup. Detailed analysis of Groups A-L, team guides, and match schedules for the biggest tournament in history." />
        <meta property="og:url" content="https://stadiumport.com/world-cup-2026-groups" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://stadiumport.com/assets/wc26-groups-og.jpg" />
        
        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <div className="min-h-screen bg-slate-50 dark:bg-navy-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-500/30">
        
        {/* Hero Section */}
        <section className="relative w-full bg-[#0f172a] dark:bg-black overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6,transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
            </div>

            <div className="relative max-w-[1440px] mx-auto pt-32 pb-24 px-6 md:px-12 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/5 border border-white/10 text-blue-400 font-bold text-sm uppercase tracking-widest mb-8 backdrop-blur-md"
                >
                    <Trophy size={16} /> Official Tournament Hub
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-white leading-[1.1]"
                >
                    FIFA World Cup 2026 <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Groups, Teams & Match Schedule</span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto mb-12"
                >
                    The definitive guide to the expanded 48-team tournament. Explore all 12 groups, follow your national team's path, and prepare for the historic event hosted by USA, Mexico, and Canada.
                </motion.p>

                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#groups-grid" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2">
                    View All Groups <ArrowRight size={18} />
                  </a>
                  <a href="#faq-section" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-all backdrop-blur-md border border-white/10">
                    Tournament FAQs
                  </a>
                </div>
            </div>
        </section>

        <main className="max-w-[1440px] mx-auto px-6 md:px-12 -mt-12 relative z-10 pb-24">
          
          {/* Info Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-blue-900/20 border border-slate-100 dark:border-slate-800 mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
            <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 mt-1">
                    <AlertCircle size={28} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Official Draw Updates
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        The groups displayed below reflect the latest projections and official slot allocations. This page updates in real-time. Bookmark this page to stay ahead of the official FIFA World Cup 2026™ Draw.
                    </p>
                </div>
            </div>
          </motion.div>

          {/* Groups Grid */}
          <section id="groups-grid" className="mb-24">
             <div className="flex items-center gap-3 mb-12">
                <div className="h-10 w-2 bg-blue-600 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  Tournament Groups (A-L)
                </h2>
             </div>

             <motion.div 
               variants={containerVariants}
               initial="hidden"
               animate="show"
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
             >
               {Object.entries(groupData).map(([groupLetter, teams]) => (
                 <motion.div 
                   key={groupLetter}
                   variants={itemVariants}
                   className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
                 >
                   <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white">Group {groupLetter}</h3>
                     <Link to={`/groups/group-${groupLetter.toLowerCase()}`} className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 uppercase tracking-wider flex items-center gap-1">
                       Analysis <ArrowRight size={12} />
                     </Link>
                   </div>
                   <div className="p-4 space-y-3">
                     {teams.map((teamInfo, idx) => {
                        const teamData = TEAMS.find(t => t.fifaCode === teamInfo.code || t.name === teamInfo.name);
                        
                        return (
                          <div key={idx} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                             <div className="w-12 h-8 rounded shadow-sm overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative">
                                {teamInfo.isWinner ? (
                                  <span className="text-lg font-bold text-slate-400">?</span>
                                ) : teamData?.flagUrl ? (
                                  <img 
                                    src={teamData.flagUrl} 
                                    alt={`${teamInfo.name} Flag`} 
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                ) : (
                                  <span className="text-[10px] font-bold text-slate-400">{teamInfo.code}</span>
                                )}
                             </div>
                             <div className="flex-1">
                               <div className="font-semibold text-slate-900 dark:text-slate-200 leading-tight">
                                 {teamInfo.name}
                               </div>
                               {!teamInfo.isWinner && teamData && (
                                 <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                   {teamData.region} • Rank {teamData.rating}
                                 </div>
                               )}
                             </div>
                          </div>
                        );
                     })}
                   </div>
                 </motion.div>
               ))}
             </motion.div>
          </section>

          {/* Host Cities & Stadiums - SEO Internal Linking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
             <section>
                <div className="flex items-center gap-2 mb-8">
                   <MapPin className="text-blue-500" size={24} />
                   <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Host City Guides</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cityLinks.map((city, i) => (
                      <li key={i}>
                        <Link 
                          to={city.url}
                          className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-500 transition-colors" />
                          {city.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
             </section>

             <section>
                <div className="flex items-center gap-2 mb-8">
                   <Globe className="text-emerald-500" size={24} />
                   <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Stadium Guides</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stadiumLinks.map((stadium, i) => (
                      <li key={i}>
                        <Link 
                          to={stadium.url}
                          className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-emerald-500 transition-colors" />
                          {stadium.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
             </section>
          </div>

          {/* FAQ Section */}
          <section id="faq-section" className="max-w-4xl mx-auto">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Everything you need to know about the World Cup 2026 format and groups.
                </p>
             </div>
             
             <div className="space-y-4">
               {faqs.map((faq, idx) => (
                 <div key={idx} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:border-blue-500/30 transition-colors">
                   <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-3">
                     <span className="text-blue-500 mt-1"><Info size={18} /></span>
                     {faq.question}
                   </h3>
                   <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-8">
                     {faq.answer}
                   </p>
                 </div>
               ))}
             </div>
          </section>

        </main>
        
        <Footer />
      </div>
    </>
  );
}
