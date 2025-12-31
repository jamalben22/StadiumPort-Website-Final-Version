"use client";

import { motion } from 'framer-motion';
import { Calendar, Globe, Users, Trophy } from 'lucide-react';

export const TournamentOverview = () => {
  const stats = [
    {
      icon: Calendar,
      label: "Dates",
      value: "June 11 – July 19, 2026",
      subtext: "39 Days of Football"
    },
    {
      icon: Globe,
      label: "Host Countries",
      value: "USA, Mexico, Canada",
      subtext: "16 Host Cities"
    },
    {
      icon: Users,
      label: "Teams",
      value: "48 Nations",
      subtext: "Expanded Format"
    },
    {
      icon: Trophy,
      label: "Matches",
      value: "104 Games",
      subtext: "Largest World Cup Ever"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F7] dark:bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Tournament Overview
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            The 2026 FIFA World Cup will be the biggest sporting event in history, uniting three nations and the entire world.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-emerald-500/30 transition-colors group shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={24} strokeWidth={2} />
              </div>
              <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                {stat.label}
              </h3>
              <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-slate-500 dark:text-slate-500 font-medium">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
