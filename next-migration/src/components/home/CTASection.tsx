"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
      <div className="absolute inset-0 bg-[#F5F5F7] dark:bg-[#000000]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-space font-extrabold text-4xl md:text-6xl lg:text-7xl text-[#0A0A0A] dark:text-white tracking-tight mb-8 leading-tight max-w-6xl mx-auto"
        >
          Your World Cup 2026 Journey
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-space font-semibold text-xs md:text-sm text-[#01b47d] uppercase tracking-[0.6em] mb-12"
        >
          Begins Today
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-inter text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-12 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed"
        >
          From flights and hotels to match tickets and local experiences—plan your complete World Cup 2026 adventure across USA, Canada, and Mexico with expert guides, real-time deals, and insider tips.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/groups">
             <button className="group relative px-10 py-5 rounded-full bg-[#0A0A0A] text-white dark:bg-white dark:text-black font-space font-bold text-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 hover:scale-105 active:scale-95">
               <span className="relative z-10">Start Planning Now</span>
             </button>
          </Link>
           <Link href="/travel-tips">
             <button className="px-10 py-5 rounded-full border border-black/20 text-black dark:border-white/20 dark:text-white font-space font-semibold text-lg hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all backdrop-blur-sm hover:scale-105 active:scale-95">
               Explore Planning Hub
             </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
