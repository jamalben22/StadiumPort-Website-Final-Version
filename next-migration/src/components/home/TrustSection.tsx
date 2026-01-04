"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, Star, UserCheck } from 'lucide-react';

export const TrustSection = () => {
  const trustIndicators = [
    { 
      icon: ShieldCheck, 
      text: 'Verified Partners', 
      description: 'Secure global booking through industry-leading travel platforms' 
    },
    { 
      icon: BookOpen, 
      text: 'Dedicated Support', 
      description: '24/7 assistance and expert resources for your tournament journey' 
    },
    { 
      icon: Star, 
      text: 'Curated Selection', 
      description: 'Hand-picked accommodations and experiences for every fan' 
    },
    { 
      icon: UserCheck, 
      text: 'Veteran Insights', 
      description: 'Exclusive on-the-ground expertise from seasoned travelers' 
    }
  ];

  const brands = [
    { 
      name: 'Travel Weekly', 
      logo: (
        <svg viewBox="0 0 200 40" className="h-6 md:h-8 w-auto fill-current">
          <text x="0" y="30" className="font-serif font-black text-2xl tracking-tighter">TRAVEL WEEKLY</text>
        </svg>
      )
    },
    { 
      name: 'Lonely Planet', 
      logo: (
        <svg viewBox="0 0 200 40" className="h-6 md:h-8 w-auto fill-current">
          <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="4" />
          <text x="45" y="30" className="font-sans font-bold text-2xl tracking-tight">lonely planet</text>
        </svg>
      )
    },
    { 
      name: 'Forbes', 
      logo: (
        <svg viewBox="0 0 120 40" className="h-7 md:h-9 w-auto fill-current">
          <text x="0" y="30" className="font-serif font-black text-3xl italic tracking-tighter">Forbes</text>
        </svg>
      )
    },
    { 
      name: 'CNN', 
      logo: (
        <svg viewBox="0 0 80 40" className="h-6 md:h-8 w-auto fill-current">
          <path d="M0 10h20v20h-20z M30 10h20v20h-20z M60 10h20v20h-20z" fill="none" stroke="currentColor" strokeWidth="6" />
          <text x="5" y="31" className="font-sans font-black text-2xl">CNN</text>
        </svg>
      )
    },
    { 
      name: 'Travel + Leisure', 
      logo: (
        <svg viewBox="0 0 240 40" className="h-5 md:h-7 w-auto fill-current">
          <text x="0" y="30" className="font-serif font-light text-2xl tracking-[0.1em]">TRAVEL + LEISURE</text>
        </svg>
      )
    },
    { 
      name: 'The Points Guy', 
      logo: (
        <svg viewBox="0 0 200 40" className="h-6 md:h-8 w-auto fill-current">
          <text x="0" y="30" className="font-sans font-extrabold text-2xl tracking-tighter italic">THE POINTS GUY</text>
        </svg>
      )
    },
    { 
      name: 'ESPN', 
      logo: (
        <svg viewBox="0 0 100 40" className="h-6 md:h-8 w-auto fill-current">
          <text x="0" y="30" className="font-sans font-black text-3xl italic tracking-tighter">ESPN</text>
          <rect x="0" y="15" width="100" height="3" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative pt-16 pb-32 md:pt-24 md:pb-48 bg-[#F5F5F7] dark:bg-[#0A0A0A] border-t border-slate-100 dark:border-white/5 overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter"
          >
            Why stadiumport is Your <span className="text-emerald-600 dark:text-emerald-500">#1 Companion</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            We don't just list stadiums. We build complete experiences for the traveling fan.
          </motion.p>
        </div>

        {/* Trust Grid - Apple & Nike Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 md:gap-12 mb-32 md:mb-48 items-stretch">
        {trustIndicators.map((item, idx) => (
            <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center group h-full relative"
            >
              <div className="relative mb-12 shrink-0">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-emerald-500/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="w-28 h-28 rounded-[2.75rem] bg-slate-50 dark:bg-[#0A0A0A] flex items-center justify-center group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-none overflow-hidden relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <item.icon strokeWidth={1.5} className="w-12 h-12 md:w-13 md:h-13 relative z-10 text-emerald-600 dark:text-emerald-500" />
                </div>
              </div>
              
              <div className="min-h-[4rem] flex items-start justify-center mb-6 w-full">
                <h3 className="font-space font-black text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight leading-tight">
                  {item.text}
                </h3>
              </div>

              <div className="w-12 h-[3px] bg-slate-200 dark:bg-white/10 mb-8 overflow-hidden rounded-full">
                <div className="w-full h-full bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
              </div>
              
              <div className="flex-grow flex items-start justify-center w-full">
                <p className="font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-[280px] font-medium group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Brand Bar - Premium Infinite Marquee */}
        <div className="relative pt-24 border-t border-slate-200 dark:border-white/10">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-[11px] font-black tracking-[0.5em] text-slate-400 dark:text-slate-500 uppercase mb-20"
            >
                AS FEATURED AND TRUSTED BY
            </motion.p>
            
            <div className="relative flex overflow-hidden group/marquee">
              {/* Gradient Masks */}
              <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#F5F5F7] dark:from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#F5F5F7] dark:from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
              
              <motion.div 
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex whitespace-nowrap gap-32 md:gap-48 items-center px-16"
              >
                {/* Double the brands for seamless loop */}
                {[...brands, ...brands].map((brand, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-center text-slate-300 dark:text-slate-700 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:text-slate-900 dark:hover:text-white transition-all duration-700 cursor-pointer"
                  >
                    {brand.logo}
                  </div>
                ))}
              </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};
