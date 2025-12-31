'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, AlertCircle, Globe } from 'lucide-react';
import { TEAMS, GROUPS, TEAM_MAP } from '@/data/teams';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

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

export default function ClientPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30 bg-[#F5F5F7] dark:bg-[#0A0A0A]">
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <OptimizedImage
            src="/images/hub-pages/ultra-high-resolution_cinematic_background_image_for_a_World_Cup_2026_Host_cities.webp"
            alt="World Cup 2026 Host Cities"
            fill
            imgClassName="object-cover"
          />
        </div>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-[#F5F5F7] dark:to-[#0A0A0A] pointer-events-none" />
        
        <div className="relative max-w-[1440px] mx-auto pt-32 pb-24 px-6 md:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 py-2 px-6 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-8 backdrop-blur-md"
          >
            <Trophy size={16} /> Official Tournament Hub
          </motion.div>
     
     <motion.h1 
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.1 }}
       className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white leading-[1.1]"
     >
       FIFA World Cup 2026 <br />
       <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Groups, Teams & Match Schedule</span>
     </motion.h1> 
     
     <motion.p 
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.2 }}
       className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto mb-12"
     >
       The definitive guide to the expanded 48-team tournament. Explore all 12 groups, follow your national team's path, and prepare for the historic event hosted by USA, Mexico, and Canada.
     </motion.p>

     <div className="flex flex-wrap justify-center gap-4">
       <Link href="/world-cup-2026-prediction-game" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2">
         Predictor Game <Trophy size={18} />
       </Link>
     </div>
   </div>
 </section>

 <main className="max-w-[1440px] mx-auto px-6 md:px-12 -mt-12 relative z-10 pb-24">
   
   {/* Info Banner */}
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="bg-white dark:bg-slate-900/50 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-white/10 mb-16 relative overflow-hidden"
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
       whileInView="show"
       viewport={{ once: true, margin: "-50px" }}
       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
     >
       {Object.entries(GROUPS).map(([groupLetter, teamIds]) => (
        <motion.div 
          key={groupLetter}
          variants={itemVariants}
          className="group bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 flex justify-between items-center bg-slate-50/50 dark:bg-white/5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Group {groupLetter}</h3>
            <Link href={`/world-cup-2026-groups/group-${groupLetter.toLowerCase()}`} className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 uppercase tracking-wider flex items-center gap-1">
              Analysis <ArrowRight size={12} />
            </Link>
          </div>
          <div className="p-4 space-y-3">
            {teamIds.map((teamId, idx) => {
              const teamData = TEAM_MAP.get(teamId);
              if (!teamData) return null;
              
              const isPlaceholder = teamData.name.startsWith('PO');

              return (
                <div key={idx} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-12 h-8 rounded shadow-sm overflow-hidden flex items-center justify-center relative bg-slate-100 dark:bg-white/5">
                     {isPlaceholder ? (
                       <span className="text-[10px] font-bold text-slate-400">{teamData.code}</span>
                     ) : teamData.flagUrl ? (
                       <OptimizedImage 
                         src={teamData.flagUrl} 
                         alt={`${teamData.name} Flag`} 
                         fill
                         imgClassName="object-cover"
                       />
                     ) : (
                       <span className="text-[10px] font-bold text-slate-400">{teamData.code}</span>
                     )}
                   </div>
                   <div className="flex-1">
                     <div className="font-semibold text-slate-900 dark:text-slate-200 leading-tight">
                       {teamData.name}
                     </div>
                     {!isPlaceholder && (
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
     
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       {faqs.map((faq, index) => (
         <div key={index} className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
           <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{faq.question}</h3>
           <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
         </div>
       ))}
     </div>
   </section>

 </main>
</div>
 );
}








