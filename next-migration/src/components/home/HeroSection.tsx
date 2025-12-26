"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Users, Trophy } from 'lucide-react';

// Enhanced Countdown Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-06-11T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative">
            <span className="text-3xl md:text-5xl font-space font-bold text-[#0A0A0A] dark:text-white tabular-nums tracking-tighter leading-none">
              {unit.value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-black/50 dark:text-white/50 mt-2">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
       
       {/* Cinematic Background */}
       <div className="absolute inset-0 z-0">
       </div>

       {/* Main Content */}
       <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col h-full justify-center">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-20">
            
            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md mb-8"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01b47d] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#01b47d]"></span>
                </span>
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-black/70 dark:text-white/70">
                  The Official 2026 Resource
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-space text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter text-[#0A0A0A] dark:text-white mb-8"
              >
                World Cup <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-black/50 dark:from-white dark:via-white dark:to-white/50">
                  2026 Guide
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-inter text-lg md:text-xl text-black/60 dark:text-white/60 max-w-xl leading-relaxed font-light mb-12"
              >
                Your essential companion for the biggest sporting event in history. 
                Hosting across USA, Mexico, and Canada.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                 <Link href="/world-cup-2026-groups" className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#01b47d] to-blue-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative px-8 py-4 bg-[#0A0A0A] text-white dark:bg-white dark:text-black rounded-full font-space font-bold text-lg flex items-center justify-center gap-2 transition-transform duration-200 active:scale-95">
                      Explore Groups
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                 </Link>
                 
                 <Link href="/world-cup-2026-host-cities" className="px-8 py-4 rounded-full border border-black/20 text-black dark:border-white/20 dark:text-white font-space font-medium text-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center">
                    Host Cities
                 </Link>
              </motion.div>
            </div>

            {/* Visual/Countdown Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
               {/* Glass Card */}
               <div className="relative bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 overflow-hidden group hover:border-black/20 dark:hover:border-white/20 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Countdown Header */}
                  <div className="flex items-center gap-3 mb-12">
                    <Calendar className="w-5 h-5 text-[#01b47d]" />
                    <span className="text-sm font-mono tracking-widest uppercase text-black/60 dark:text-white/60">Kickoff Countdown</span>
                  </div>

                  {/* Timer */}
                  <div className="mb-12">
                    <CountdownTimer />
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/10 dark:border-white/10">
                    <div>
                      <div className="flex items-center gap-2 text-black/40 dark:text-white/40 mb-2">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-mono uppercase tracking-wider">Teams</span>
                      </div>
                      <div className="text-3xl font-space font-bold text-[#0A0A0A] dark:text-white">48</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-black/40 dark:text-white/40 mb-2">
                        <Trophy className="w-4 h-4" />
                        <span className="text-xs font-mono uppercase tracking-wider">Matches</span>
                      </div>
                      <div className="text-3xl font-space font-bold text-[#0A0A0A] dark:text-white">104</div>
                    </div>
                  </div>
               </div>
            </motion.div>
            
          </div>
       </div>

       {/* Scroll Indicator */}
       <motion.div 
         className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2, duration: 1 }}
       >
         <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/70">Scroll to Explore</span>
         <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
       </motion.div>
    </section>
  );
};
