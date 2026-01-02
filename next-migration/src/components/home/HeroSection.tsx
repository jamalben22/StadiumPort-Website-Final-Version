"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Users, Trophy } from 'lucide-react';

// Enhanced Countdown Component
const CountdownTimer = () => {
  // Initialize with correct values immediately
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-06-11T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);

  const animate = (time: number) => {
    if (time - previousTimeRef.current >= 1000) {
      setTimeLeft(calculateTimeLeft());
      previousTimeRef.current = time;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  if (!mounted) {
      return (
        <div className="flex gap-3 sm:gap-4 md:gap-8 justify-between sm:justify-start w-full opacity-0">
          {[0, 1, 2, 3].map((_, index) => (
            <div key={index} className="flex flex-col items-center min-w-[60px] sm:min-w-[70px]">
              <div className="relative overflow-hidden h-[36px] sm:h-[48px] md:h-[60px]">
                <span className="block text-2xl sm:text-3xl md:text-5xl font-space font-bold text-[#0A0A0A] dark:text-white tabular-nums tracking-tighter leading-none">
                  00
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-black/50 dark:text-white/50 mt-2">
                {['Days', 'Hours', 'Minutes', 'Seconds'][index]}
              </span>
            </div>
          ))}
        </div>
      );
  }

  return (
    <div className="flex gap-3 sm:gap-4 md:gap-8 justify-between sm:justify-start w-full opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDuration: '0.3s' }}>
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center min-w-[60px] sm:min-w-[70px]">
          <div className="relative overflow-hidden h-[36px] sm:h-[48px] md:h-[60px]">
             {/* Use key to trigger animation on value change if desired, or keep it static for performance */}
            <span className="block text-2xl sm:text-3xl md:text-5xl font-space font-bold text-[#0A0A0A] dark:text-white tabular-nums tracking-tighter leading-none">
              {unit.value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-black/50 dark:text-white/50 mt-2">
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
    <section ref={containerRef} className="relative min-h-[100dvh] md:min-h-[700px] md:h-[90vh] lg:h-screen w-full overflow-hidden flex items-center justify-center pt-24 pb-12 md:pt-0 md:pb-0">
       
       {/* Cinematic Background */}
       <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[#F5F5F7]/90 dark:bg-[#0A0A0A]/90 z-10" />
         {/* Placeholder for Hero Image - User to replace src */}
         {/* <Image src="/images/hero-bg.jpg" alt="World Cup 2026 Stadium Atmosphere" fill className="object-cover" priority /> */}
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
       </div>

       {/* Main Content */}
       <div className="relative z-20 w-full max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 flex flex-col h-full justify-center">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mt-0 md:mt-20">
            
            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md mb-6 sm:mb-8"
              >
                <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01b47d] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#01b47d]"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-black/70 dark:text-white/70">
                  #1 World Cup 2026 Travel Guide
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-space font-bold text-[2.75rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-[#0A0A0A] dark:text-white mb-4 sm:mb-6 md:mb-8 leading-[1.05] sm:leading-[0.9]"
              >
                World Cup 2026 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#008f63]">
                  Travel Guide
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-inter text-base sm:text-lg md:text-xl text-black/60 dark:text-white/60 max-w-xl leading-relaxed font-light mb-8 sm:mb-12"
              >
                Plan your trip to USA, Mexico & Canada. The ultimate resource for 16 host cities, 48 teams, and 104 matches.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col w-full sm:w-auto sm:flex-row gap-3 sm:gap-4"
              >
                 <Link href="/world-cup-2026-groups" className="group relative w-full sm:w-auto">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#01b47d] to-blue-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500 hidden sm:block"></div>
                    <div className="relative w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#0A0A0A] text-white dark:bg-white dark:text-black rounded-full font-space font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-transform duration-200 active:scale-95">
                      Explore Groups
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                 </Link>
                 
                 <Link href="/world-cup-2026-host-cities-guide" className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full border border-black/20 text-black dark:border-white/20 dark:text-white font-space font-medium text-base sm:text-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center">
                    Host Cities
                 </Link>
              </motion.div>
            </div>

            {/* Visual/Countdown Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative w-full"
            >
               {/* Glass Card */}
               <div className="relative bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-12 overflow-hidden group hover:border-black/20 dark:hover:border-white/20 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Countdown Header */}
                  <div className="flex items-center gap-3 mb-8 sm:mb-12">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#01b47d]" />
                    <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-black/60 dark:text-white/60">Kickoff Countdown</span>
                  </div>

                  {/* Timer */}
                  <div className="mb-8 sm:mb-12 w-full">
                    <CountdownTimer />
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-black/10 dark:border-white/10">
                    <div>
                      <div className="flex items-center gap-2 text-black/40 dark:text-white/40 mb-1 sm:mb-2">
                        <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider">Teams</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-space font-bold text-[#0A0A0A] dark:text-white">48</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-black/40 dark:text-white/40 mb-1 sm:mb-2">
                        <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider">Matches</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-space font-bold text-[#0A0A0A] dark:text-white">104</div>
                    </div>
                  </div>
               </div>

               {/* Mobile Scroll Indicator */}
               <motion.div 
                 className="flex md:hidden flex-col items-center gap-2 mt-8 opacity-50"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 2, duration: 1 }}
               >
                 <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-black/50 dark:text-white/70">Scroll to Explore</span>
                 <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-black/20 dark:via-white/50 to-transparent" />
               </motion.div>
            </motion.div>
            
          </div>
       </div>

       {/* Scroll Indicator */}
       <motion.div 
         className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 md:gap-4 opacity-50 hidden md:flex"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2, duration: 1 }}
       >
         <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-black/50 dark:text-white/70">Scroll to Explore</span>
         <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-transparent via-black/20 dark:via-white/50 to-transparent" />
       </motion.div>
    </section>
  );
};

