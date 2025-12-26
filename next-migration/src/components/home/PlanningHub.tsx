"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TPFlightWidget } from '../widgets/TPFlightWidget';
import { TPDestinationWidget } from '../widgets/TPDestinationWidget';
import { TPGuideWidget } from '../widgets/TPGuideWidget';
import { TPESimWidget } from '../widgets/TPESimWidget';

export const PlanningHub = () => {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'guides' | 'esims'>('flights');

  const tabs = [
    { id: 'flights', label: 'Flights', icon: 'ri-plane-fill' },
    { id: 'hotels', label: 'Hotels', icon: 'ri-hotel-fill' },
    { id: 'guides', label: 'Guides', icon: 'ri-guide-fill' },
    { id: 'esims', label: 'eSIMs', icon: 'ri-rfid-fill' }
  ];

  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20 md:mb-32">
           <motion.span 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-sm font-medium text-slate-900 dark:text-white"
           >
             Plan Your Journey
           </motion.span>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="font-space font-bold text-5xl md:text-7xl text-slate-900 dark:text-white tracking-tight mb-8"
           >
             Everything you need.<br />
             <span className="text-slate-400 dark:text-slate-600">All in one place.</span>
           </motion.h2>
        </div>

        {/* Tab Navigation - Apple-style Segmented Control */}
        <div className="flex justify-center mb-12 md:mb-16 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            <div className="inline-flex bg-slate-200/50 dark:bg-white/10 p-1.5 rounded-full backdrop-blur-md whitespace-nowrap">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`
                            relative px-6 md:px-8 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300
                            ${activeTab === tab.id ? 'text-slate-900 dark:text-black' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}
                        `}
                    >
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white shadow-sm rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            <i className={tab.icon}></i>
                            {tab.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>

        {/* Tab Content Container */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            layout
            className="bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-slate-200/20 dark:shadow-black/40 border border-white/40 dark:border-white/10 p-2 md:p-3"
          >
             <div className="bg-white/60 dark:bg-black/40 rounded-[2.2rem] relative flex flex-col overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="w-full"
                    >
                        <div className="px-4 md:px-8">
                          {activeTab === 'flights' && <TPFlightWidget />}
                          {activeTab === 'hotels' && <TPDestinationWidget />}
                          {activeTab === 'guides' && <TPGuideWidget />}
                          {activeTab === 'esims' && <TPESimWidget />}
                        </div>
                    </motion.div>
                  </AnimatePresence>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
