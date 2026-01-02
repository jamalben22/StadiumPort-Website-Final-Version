"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TPFlightWidget } from '../widgets/TPFlightWidget';
import { TPFlightSearchWidget } from '../widgets/TPFlightSearchWidget';
import { TPFlightCalendarWidget } from '../widgets/TPFlightCalendarWidget';
import { TPDestinationWidget } from '../widgets/TPDestinationWidget';
import { TPDestinationMapWidget } from '../widgets/TPDestinationMapWidget';
import { TPHotelSearchWidget } from '../widgets/TPHotelSearchWidget';
import { TPGuideWidget } from '../widgets/TPGuideWidget';
import { TPAttractionsWidget } from '../widgets/TPAttractionsWidget';
import { TPESimWidget } from '../widgets/TPESimWidget';
import { TPTransportWidget } from '../widgets/TPTransportWidget';
import { TPRentalWidget } from '../widgets/TPRentalWidget';

export const PlanningHub = () => {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'guides' | 'essentials'>('flights');

  const tabs = [
    { id: 'flights', label: 'Flights', icon: 'ri-plane-fill' },
    { id: 'hotels', label: 'Hotels', icon: 'ri-hotel-fill' },
    { id: 'guides', label: 'Experiences', icon: 'ri-compass-3-fill' },
    { id: 'essentials', label: 'Essentials', icon: 'ri-briefcase-4-fill' }
  ];

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[#F5F5F7] dark:bg-[#0A0A0A] relative overflow-hidden">
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20 md:mb-32">
           <motion.span 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#0A0A0A] backdrop-blur-md text-sm font-medium text-slate-900 dark:text-white"
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
            <div className="inline-flex bg-slate-200/50 dark:bg-[#0A0A0A] p-1.5 rounded-full backdrop-blur-md whitespace-nowrap">
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
            className="bg-white/40 dark:bg-[#0A0A0A] backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-slate-200/20 dark:shadow-black/40 border border-white/40 dark:border-white/10 p-2 md:p-3"
          >
             <div className="bg-white/60 dark:bg-[#0A0A0A]/50 rounded-[2.2rem] relative flex flex-col overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" as const }}
                        className="w-full"
                    >
                        <div className="px-4 md:px-8">
                          {activeTab === 'flights' && (
                            <div className="flex flex-col gap-5">
                              <TPFlightWidget />
                              <TPFlightSearchWidget />
                              <TPFlightCalendarWidget />
                            </div>
                          )}
                          {activeTab === 'hotels' && (
                            <div className="flex flex-col gap-5">
                              <TPDestinationWidget />
                              <TPDestinationMapWidget />
                              <TPHotelSearchWidget />
                            </div>
                          )}
                          {activeTab === 'guides' && (
                            <div className="flex flex-col gap-5">
                              <TPGuideWidget />
                              <TPAttractionsWidget />
                            </div>
                          )}
                          {activeTab === 'essentials' && (
                            <div className="flex flex-col gap-5">
                              <TPESimWidget />
                              <TPTransportWidget />
                              <TPRentalWidget />
                            </div>
                          )}
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
