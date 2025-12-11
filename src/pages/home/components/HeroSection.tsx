import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// New Countdown Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: June 11, 2026 (World Cup 2026 Opening Match)
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
    { label: 'Hrs', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
             <div className="relative w-full aspect-square flex items-center justify-center bg-navy-950/5 dark:bg-white/5 rounded-xl border border-navy-950/10 dark:border-white/10 backdrop-blur-sm">
                <span className="text-lg sm:text-xl md:text-2xl font-space font-bold text-navy-950 dark:text-white tabular-nums tracking-tighter">
                  {unit.value.toString().padStart(2, '0')}
                </span>
             </div>
             <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1 md:mt-2">
               {unit.label}
             </span>
          </div>
        ))}
      </div>
      <div className="mt-3 md:mt-4 flex justify-center">
         <div className="px-3 py-1 rounded-full bg-[#01b47d]/10 dark:bg-[#01b47d]/20 border border-[#01b47d]/20 dark:border-[#01b47d]/30 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#01b47d] animate-pulse" />
            <span className="text-[#01b47d] text-[9px] md:text-[10px] font-bold tracking-widest uppercase">Opening Match Countdown</span>
         </div>
      </div>
    </div>
  );
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
    <section ref={containerRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-[#F5F5F7] dark:bg-[#0A0A0A] text-navy-950 dark:text-white transition-colors duration-500 flex items-center justify-center">
       
       {/* Content Container */}
       <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center pt-24 pb-32 md:py-0">
          
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 md:mb-16">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm mb-6 md:mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#01b47d] shadow-[0_0_8px_#01b47d]" />
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase text-slate-600 dark:text-slate-300">THE OFFICIAL 2026 WORLD CUP RESOURCE</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-space text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-navy-950 dark:text-white mb-4 md:mb-8"
            >
              2026 World Cup Travel Guide: <br className="hidden md:block" />
              <span className="text-[#01b47d] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-slate-200 dark:to-slate-400">
                USA, Canada & Mexico
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-inter text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light px-4 md:px-0"
            >
              Complete travel planning for all 16 host cities. Tickets, hotels, match schedules, and insider tips for the biggest World Cup in history.
            </motion.p>

            {/* Single Premium CTA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 md:mt-10 w-full px-4 md:w-auto md:px-0"
            >
               <Link to="/world-cup-2026-groups" className="block w-full md:w-auto">
                  <button className="relative w-full md:w-auto px-8 md:px-12 py-4 md:py-5 bg-[#01b47d] text-white font-space font-medium text-lg tracking-wide rounded-full overflow-hidden shadow-[0_10px_40px_-10px_rgba(1,180,125,0.4)] hover:shadow-[0_20px_60px_-10px_rgba(1,180,125,0.5)] hover:scale-105 active:scale-95 transition-all duration-500 group">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Find Your Team
                      <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  </button>
               </Link>
            </motion.div>
          </div>

          {/* Visual Showcase / Countdown Card - Centered & Responsive */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md md:max-w-2xl lg:max-w-3xl px-2 sm:px-0"
          >
             <div className="relative bg-white/80 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-2xl rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-2xl dark:shadow-none overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#01b47d]/10 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                   
                   {/* Left: Stats */}
                   <div className="flex-1 w-full grid grid-cols-2 gap-4 md:gap-8 text-center md:text-left">
                      <div className="space-y-1">
                         <div className="text-3xl sm:text-4xl md:text-5xl font-space font-bold text-navy-950 dark:text-white tracking-tighter">48</div>
                         <div className="text-[9px] md:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium">Teams</div>
                      </div>
                      <div className="space-y-1">
                         <div className="text-3xl sm:text-4xl md:text-5xl font-space font-bold text-navy-950 dark:text-white tracking-tighter">104</div>
                         <div className="text-[9px] md:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium">Matches</div>
                      </div>
                      <div className="col-span-2 h-px w-full bg-gradient-to-r from-transparent via-navy-950/10 dark:via-white/10 to-transparent md:hidden" />
                      <div className="col-span-2 flex items-center justify-center md:justify-start gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#01b47d]/10 flex items-center justify-center text-[#01b47d]">
                             <i className="ri-map-pin-2-line text-lg md:text-xl" />
                          </div>
                          <div className="text-left">
                             <div className="text-navy-950 dark:text-white font-space text-base md:text-lg font-bold">3 Nations</div>
                             <div className="text-slate-500 dark:text-slate-400 text-[10px] md:text-xs">USA • Mexico • Canada</div>
                          </div>
                      </div>
                   </div>

                   {/* Divider */}
                   <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-navy-950/10 dark:via-white/10 to-transparent" />

                   {/* Right: Countdown */}
                   <div className="flex-1 w-full">
                      <CountdownTimer />
                   </div>
                </div>
             </div>
          </motion.div>

       </div>

       {/* Scroll Indicator */}
       <motion.div 
         className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-navy-900/30 dark:text-white/30 pointer-events-none"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2, duration: 1 }}
       >
         <span className="text-[9px] uppercase tracking-[0.3em] font-mono">Scroll</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-navy-950/20 dark:via-white/20 to-transparent overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-1/2 bg-navy-950/50 dark:bg-white/50 animate-shimmer" style={{ animationDuration: '2s' }} />
         </div>
       </motion.div>
    </section>
  );
};
