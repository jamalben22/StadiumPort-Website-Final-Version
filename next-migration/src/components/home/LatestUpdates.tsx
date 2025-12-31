"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const updates = [
  {
    category: "Safety",
    title: "Stadium Safety at World Cup 2026: Security Rules & What to Expect",
    date: "Dec 28, 2025",
    link: "/world-cup-2026-stadium-safety",
    summary: "Complete guide to clear bag policy, prohibited items, and emergency procedures for all 16 host venues."
  },
  {
    category: "Protection",
    title: "World Cup 2026 Scams: How to Avoid Ticket & Travel Fraud",
    date: "Dec 29, 2025",
    link: "/world-cup-2026-scams-avoid-fraud",
    summary: "Protect yourself from fake tickets and accommodation scams. Essential guide for safe booking."
  },
  {
    category: "Lodging",
    title: "World Cup 2026 Accommodation Guide: Hotels & Hostels",
    date: "Dec 30, 2025",
    link: "/world-cup-2026-accommodation-guide",
    summary: "Where to stay for World Cup 2026. Complete guide to hotels, hostels, and rentals in all 16 host cities."
  }
];

export const LatestUpdates = () => {
  return (
    <section className="py-24 bg-[#F5F5F7] dark:bg-[#0A0A0A] border-t border-slate-100 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
               Latest Updates
             </h2>
             <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
               Stay ahead of the game with the latest news, travel alerts, and ticketing information.
             </p>
          </div>
          <Link 
            href="/travel-tips"
            className="hidden md:flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 transition-colors"
          >
            View all updates <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col h-full bg-white dark:bg-white/5 rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  {item.category}
                </span>
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
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
            <Link 
            href="/travel-tips"
            className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 transition-colors w-full py-3 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10"
          >
            View all updates <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
