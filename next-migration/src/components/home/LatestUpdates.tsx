"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

const updates = [
  {
    category: "Safety",
    title: "Stadium Safety at World Cup 2026: Security Rules & What to Expect",
    date: "Dec 28, 2025",
    link: "/world-cup-2026-stadium-safety",
    image: "/images/safety-guide/A_realistic_high-detail_photo_of_a_modern_football_stadium_entrance_during_World_cup_2026-640.webp",
    summary: "Complete guide to clear bag policy, prohibited items, and emergency procedures for all 16 host venues."
  },
  {
    category: "Protection",
    title: "World Cup 2026 Scams: How to Avoid Ticket & Travel Fraud",
    date: "Dec 29, 2025",
    link: "/world-cup-2026-scams-avoid-fraud",
    image: "/images/safety-guide/A_realistic_photo-style_image_showing_a_worried_football_fan_reviewing_suspiciou-640.webp",
    summary: "Protect yourself from fake tickets and accommodation scams. Essential guide for safe booking."
  },
  {
    category: "Lodging",
    title: "World Cup 2026 Accommodation Guide: Hotels & Hostels",
    date: "Dec 30, 2025",
    link: "/world-cup-2026-accommodation-guide",
    image: "/images/safety-guide/Accommodation Security_Safe Stays.webp",
    summary: "Where to stay for World Cup 2026. Complete guide to hotels, hostels, and rentals in all 16 host cities."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
      mass: 1,
    },
  },
};

export const LatestUpdates = () => {
  return (
    <section className="py-24 bg-[#F5F5F7] dark:bg-[#0A0A0A] border-t border-slate-100 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 opacity-0"
        >
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
               Latest Updates
             </h2>
             <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
               Stay ahead of the game with the latest news, travel alerts, and ticketing information.
             </p>
          </div>
          <Link 
            href="/world-cup-2026-travel-tips"
            className="hidden md:flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 transition-colors"
          >
            View all updates <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0"
        >
          {updates.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" as const }
              }}
              className="group relative flex flex-col h-full bg-white dark:bg-[#0A0A0A] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 shadow-sm hover:shadow-xl transition-[border-color,box-shadow] duration-300"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                    <Calendar size={12} /> {item.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  <Link href={item.link} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {item.title}
                  </Link>
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {item.summary}
                </p>
                
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-bold text-sm mt-auto">
                  Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-8 md:hidden">
            <Link 
            href="/world-cup-2026-travel-tips"
            className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 transition-colors w-full py-3 bg-white dark:bg-[#0A0A0A] rounded-xl border border-slate-200 dark:border-white/10"
          >
            View all updates <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
