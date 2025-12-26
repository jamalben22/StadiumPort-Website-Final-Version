"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, Star, UserCheck } from 'lucide-react';

export const TrustSection = () => {
  const trustIndicators = [
    { 
      icon: ShieldCheck, 
      text: 'Secure Booking Partners', 
      description: 'Industry-standard encryption through trusted platforms' 
    },
    { 
      icon: BookOpen, 
      text: 'Comprehensive Support Resources', 
      description: 'Expert travel guides and planning assistance' 
    },
    { 
      icon: Star, 
      text: 'Curated Travel Options', 
      description: 'Hand-picked accommodations and experiences' 
    },
    { 
      icon: UserCheck, 
      text: 'Expert Travel Guides', 
      description: 'Detailed insights from experienced travelers' 
    }
  ];

  const brands = [
    'Travel Weekly', 
    'Lonely Planet', 
    'Forbes Travel', 
    'CNN Travel', 
    'Travel + Leisure', 
    'The Points Guy', 
    'ESPN'
  ];

  return (
    <section className="relative py-32 md:py-48 border-t border-slate-100 dark:border-white/5 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Trust Grid - Apple & Nike Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20 md:gap-16 mb-40 md:mb-64 items-stretch">
          {trustIndicators.map((item, idx) => (
            <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center group h-full"
            >
              <div className="relative mb-10 shrink-0">
                <div className="w-24 h-24 rounded-[2.5rem] bg-white dark:bg-white/[0.03] flex items-center justify-center group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border border-slate-200/50 dark:border-white/10 text-slate-900 dark:text-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-none overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <item.icon strokeWidth={1} className="w-10 h-10 md:w-11 md:h-11 relative z-10" />
                </div>
              </div>
              
              {/* Fixed height title container for perfect alignment */}
              <div className="min-h-[4rem] md:min-h-[5rem] flex items-start justify-center mb-4 w-full">
                <h3 className="font-space font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight leading-tight max-w-[280px]">
                  {item.text}
                </h3>
              </div>

              <div className="w-8 h-[2px] bg-primary mb-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shrink-0" />
              
              {/* Fixed height description container for perfect alignment */}
              <div className="flex-grow flex items-start justify-center w-full">
                <p className="font-inter text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-[280px] font-medium opacity-80">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Brand Bar - Apple Minimalist Single Line */}
        <div className="relative pt-24 border-t border-slate-100 dark:border-white/5">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              viewport={{ once: true }}
              className="text-center text-[10px] font-semibold tracking-[0.4em] text-slate-900 dark:text-white uppercase mb-16"
            >
                TRUSTED BY READERS OF
            </motion.p>
            
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-x-20 opacity-30 dark:opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
               {brands.map((brand, i) => (
                 <motion.span 
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                   className="text-base md:text-lg font-space font-bold tracking-tighter text-slate-900 dark:text-white whitespace-nowrap select-none hover:opacity-100 transition-opacity duration-300"
                 >
                   {brand.toUpperCase()}
                 </motion.span>
               ))}
            </div>
        </div>
      </div>
    </section>
  );
};
