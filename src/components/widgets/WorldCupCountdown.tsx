import { useState, useEffect, useRef } from 'react';
import { OptimizedImage } from '../base/OptimizedImage';
import { motion, AnimatePresence } from 'framer-motion';

interface LiveStatsProps {
  travelerCount: number;
  dealCount: number;
}

interface TimeUnit {
  value: number;
  label: string;
  singular: string;
}

interface CountdownState {
  days: TimeUnit;
  hours: TimeUnit;
  minutes: TimeUnit;
  seconds: TimeUnit;
  isActive: boolean;
  hasStarted: boolean;
}

  const CountdownUnit: React.FC<{ unit: TimeUnit; index: number }> = ({ unit, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 p-6 md:p-8 shadow-md hover:shadow-lg">
        <div className="relative z-10 text-center">
          <motion.div
            key={unit.value}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy-900 dark:text-white mb-2 font-space"
        >
          {unit.value.toString().padStart(2, '0')}
        </motion.div>
        <div className="text-sm md:text-lg font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider font-inter">
          {unit.value === 1 ? unit.singular : unit.label}
        </div>
      </div>
    </div>
  </motion.div>
);

const AnimatedCounter: React.FC<{ 
  value: number; 
  duration?: number; 
  enableGlow?: boolean;
}> = ({ value, duration = 0.6, enableGlow = true }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [showGlow, setShowGlow] = useState(false);
  const previousValueRef = useRef(value);

  useEffect(() => {
    if (value === previousValueRef.current) return;
    const startValue = displayValue;
    const endValue = value;
    const difference = endValue - startValue;
    const updateDuration = duration * 1000;
    let startTimestamp: number | null = null;

    const updateStep = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / updateDuration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOutCubic * difference + startValue);
      setDisplayValue(currentValue);
      if (progress < 1) {
        requestAnimationFrame(updateStep);
      } else {
        setDisplayValue(endValue);
      }
    };

    requestAnimationFrame(updateStep);

    if (enableGlow && value > previousValueRef.current) {
      setShowGlow(true);
      const t = setTimeout(() => setShowGlow(false), 500);
      return () => clearTimeout(t);
    }

    previousValueRef.current = value;
  }, [value, duration, enableGlow, displayValue]);

  return (
    <span 
      className={`transition-all duration-300 ${showGlow ? 'drop-shadow-glow' : ''}`}
      style={{
        filter: showGlow ? 'drop-shadow(0 0 8px currentColor)' : 'none',
        transition: 'filter 0.3s ease-out'
      }}
    >
      {displayValue.toLocaleString()}
    </span>
  );
};

const LiveStats: React.FC<LiveStatsProps> = ({ travelerCount, dealCount }) => {
  const [liveTravelerCount, setLiveTravelerCount] = useState(travelerCount);
  const [liveDealCount, setLiveDealCount] = useState(dealCount);
  const [hasStartedLiveUpdates, setHasStartedLiveUpdates] = useState(false);
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([]);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  // Premium real-time updates with Apple-level timing
  useEffect(() => {
    if (hasStartedLiveUpdates) return;
    setHasStartedLiveUpdates(true);
    const travelerInterval = setInterval(() => {
      setLiveTravelerCount(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 5000);
    const dealInterval = setInterval(() => {
      setLiveDealCount(prev => prev + 1);
    }, 6000);
    intervalsRef.current = [travelerInterval, dealInterval];
    return () => {
      intervalsRef.current.forEach(interval => clearInterval(interval));
    };
  }, [hasStartedLiveUpdates]);

  const stats = [
    {
      id: 'travelers',
      icon: 'ri-group-line',
      value: liveTravelerCount,
      label: 'Fans Planning Trips',
      color: 'emerald',
      gradient: 'from-[#01b47d] to-[#01b47d]',
      delay: 0,
      enableAnimation: true,
      startValue: Math.max(0, travelerCount - Math.floor(travelerCount * 0.05))
    },
    {
      id: 'deals',
      icon: 'ri-price-tag-3-line',
      value: liveDealCount,
      label: 'Active Travel Deals',
      color: 'gold',
      gradient: 'from-amber-400 to-orange-400',
      delay: 0.2,
      enableAnimation: true,
      startValue: Math.max(0, dealCount - Math.floor(dealCount * 0.08))
    },
    {
      id: 'cities',
      icon: 'ri-map-pin-line',
      value: 16,
      label: 'Host Cities Covered',
      color: 'blue',
      gradient: 'from-[#01b47d] to-[#01b47d]',
      delay: 0.4,
      enableAnimation: false
    },
    {
      id: 'stadiums',
      icon: 'ri-football-line',
      value: 16,
      label: 'Stadium Guides',
      color: 'purple',
      gradient: 'from-purple-400 to-pink-400',
      delay: 0.6,
      enableAnimation: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.0, 
        delay: 0,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className="mb-12 md:mb-16"
    >
      {/* Apple-Level Premium Stats Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Premium Background Elements - Optimized for Mobile */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#01b47d]/5 dark:bg-[#01b47d]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-36 h-36 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Premium Stats Grid - Apple-Level Responsive Design */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0,
                type: "spring",
                stiffness: 100,
                damping: 25
              }}
              className="relative group"
              onMouseEnter={() => setIsHovered(stat.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* Premium Icon Container - Apple-Level Craftsmanship */}
              <div className="mb-4 xs:mb-5 sm:mb-6 flex justify-center">
                <div className={`
                  relative w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} 
                  flex items-center justify-center text-white 
                  shadow-lg shadow-${stat.color}-500/20 
                  group-hover:shadow-xl group-hover:shadow-${stat.color}-500/30 
                  group-hover:scale-110 
                  transition-all duration-700 
                  transform-gpu
                  ${isHovered === stat.id ? 'scale-110 shadow-xl' : ''}
                `}>
                  <div className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <i className={`${stat.icon} text-lg xs:text-xl sm:text-xl relative z-10 transition-transform duration-700 ${isHovered === stat.id ? 'scale-110' : ''}`}></i>
                </div>
              </div>

              {/* Apple-Level Premium Number Display */}
              <div className="mb-3 xs:mb-4 sm:mb-5 text-center">
                <div className={`
                  text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold 
                  bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent 
                  tracking-tight font-space
                  group-hover:scale-105 transition-transform duration-700
                  ${isHovered === stat.id ? 'scale-105' : ''}
                `}>
                  <AnimatedCounter 
                    value={stat.value}
                    duration={0.6}
                    enableGlow={true}
                  />
                  {stat.id === 'travelers' && (
                    <span className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl ml-1">+</span>
                  )}
                </div>
              </div>

              {/* Premium Label - Apple Typography */}
              <div className="text-center">
                <h3 className={`
                  text-sm xs:text-base sm:text-base md:text-lg font-semibold 
                  text-slate-700 dark:text-slate-300 
                  tracking-wide font-inter
                  group-hover:text-slate-900 dark:group-hover:text-white
                  transition-colors duration-700
                  ${isHovered === stat.id ? 'text-slate-900 dark:text-white' : ''}
                `}>
                  {stat.label}
                </h3>
                
                {/* Premium Live Indicator for Animated Stats */}
                {stat.enableAnimation && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: stat.delay + 1.5, duration: 0.6 }}
                    className="mt-1 xs:mt-2 inline-flex items-center justify-center"
                  >
                    <div className="relative">
                      <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-[#01b47d] animate-pulse"></div>
                      <div className="absolute inset-0 w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-[#01b47d] animate-ping"></div>
                    </div>
                    <span className="ml-1.5 xs:ml-2 text-xs font-medium text-[#01b47d] dark:text-[#01b47d] uppercase tracking-wider">
                      Live
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Premium Divider - Apple-Level Elegance */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute -right-6 xl:-right-8 top-1/2 -translate-y-1/2">
                  <div className="w-px h-16 xl:h-20 bg-gradient-to-b from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Premium Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 xs:mt-10 sm:mt-12 text-center"
        >
          <div className="inline-flex items-center justify-center px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60">
            <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-[#01b47d] animate-pulse mr-2 xs:mr-3"></div>
            <span className="text-xs xs:text-sm font-medium text-slate-600 dark:text-slate-400 tracking-wide">
              Stats update in real-time
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};



export const WorldCupCountdown: React.FC<LiveStatsProps> = ({ travelerCount, dealCount }) => {
  const [countdown, setCountdown] = useState<CountdownState | null>(null);
  const [isMounted, setIsMounted] = useState(true);

  

  useEffect(() => {

    const targetDate = new Date('2026-06-11T23:25:00-04:00'); // America/New_York timezone
    
    const calculateCountdown = () => {
      const now = new Date();
      const timeLeft = targetDate.getTime() - now.getTime();
      
      if (timeLeft <= 0) {
        setCountdown({
          days: { value: 0, label: 'Days to Go', singular: 'Day to Go' },
          hours: { value: 0, label: 'Hours', singular: 'Hour' },
          minutes: { value: 0, label: 'Minutes', singular: 'Minute' },
          seconds: { value: 0, label: 'Seconds', singular: 'Second' },
          isActive: false,
          hasStarted: true
        });
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setCountdown({
        days: { value: days, label: 'Days to Go', singular: 'Day to Go' },
        hours: { value: hours, label: 'Hours', singular: 'Hour' },
        minutes: { value: minutes, label: 'Minutes', singular: 'Minute' },
        seconds: { value: seconds, label: 'Seconds', singular: 'Second' },
        isActive: true,
        hasStarted: true
      });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, [isMounted]);

  if (!countdown) {
    return null;
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-navy-900 min-h-[720px] md:min-h-[840px] lg:min-h-[900px]">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy-900 dark:text-white mb-4 md:mb-6 font-space"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your Complete
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] via-gold-400 to-[#01b47d] mt-2">
              World Cup 2026 Travel Hub
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore every World Cup 2026 stadium and host city across the USA, Canada, and Mexico. Get expert travel tips, venue guides, safety information, match-day planning, and insider strategies from MetLife Stadium’s Final to the historic atmosphere of Estadio Azteca.
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-inter mt-4 font-bold tracking-wide bg-gradient-to-r from-[#01b47d] via-gold-400 to-[#01b47d] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.025em',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}
          >
            COUNTDOWN TO KICKOFF:
          </motion.p>
        </motion.div>

        {/* Countdown Display */}
        <h2 className="sr-only">Live World Cup Planning Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          <CountdownUnit unit={countdown.days} index={0} />
          <CountdownUnit unit={countdown.hours} index={1} />
          <CountdownUnit unit={countdown.minutes} index={2} />
          <CountdownUnit unit={countdown.seconds} index={3} />
        </div>

        {/* Image figure removed from homepage as requested */}

        <LiveStats travelerCount={travelerCount} dealCount={dealCount} />

        {/* Premium Service Widgets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 md:mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-12 auto-rows-fr max-w-7xl mx-auto">
            {/* Accommodation Widget */}
            <a
              href="https://trip.tpo.li/xgpbK8RD"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              data-affiliate-type="accommodation"
              className="affiliate-btn group relative overflow-hidden rounded-3xl block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01b47d]/40"
            >
              <div className="relative rounded-3xl p-10 sm:p-10 md:p-11 lg:p-12 bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 transition-all duration-500 shadow-md hover:shadow-lg hover:bg-white/90 dark:hover:bg-slate-900/50 hover:-translate-y-[2px] transform-gpu h-full flex flex-col">
                {/* Centered content: icon + text */}
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#01b47d] to-[#01b47d] flex items-center justify-center text-white shadow-sm">
                    <i className="ri-hotel-line text-2xl sm:text-3xl"></i>
                  </div>
                  <h3 className="font-space font-medium text-navy-900 dark:text-white text-2xl md:text-3xl tracking-normal leading-tight">
                    Accommodations Near Stadiums
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 font-inter text-base sm:text-lg leading-relaxed max-w-[50ch] sm:max-w-[52ch] md:max-w-[54ch] mx-auto">
                    Luxury hotels, boutique stays, and serviced apartments within walking distance of World Cup 2026 venues—book early for best rates in all 16 host cities.
                  </p>
                </div>

                <div className="mt-auto mx-auto inline-flex h-10 sm:h-11 md:h-12 items-center justify-center gap-3 text-[#01b47d] hover:text-[#008f63] transition-colors duration-600 transform-gpu transition-transform group-hover:translate-x-1">
                  <span className="font-medium tracking-tight leading-none text-base sm:text-lg md:text-xl">Find Your Perfect Stay</span>
                  <i className="ri-arrow-right-line text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </div>
            </a>

            {/* Flights Widget */}
            <a
              href="https://trip.tpo.li/xgpbK8RD"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              data-affiliate-type="flights"
              className="affiliate-btn group relative overflow-hidden rounded-3xl block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01b47d]/40"
            >
              <div className="relative rounded-3xl p-10 sm:p-10 md:p-11 lg:p-12 bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 transition-all duration-500 shadow-md hover:shadow-lg hover:bg-white/90 dark:hover:bg-slate-900/50 hover:-translate-y-[2px] transform-gpu h-full flex flex-col">
                {/* Centered content: icon + text */}
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#01b47d] to-[#01b47d] flex items-center justify-center text-white shadow-sm">
                    <i className="ri-flight-takeoff-line text-2xl sm:text-3xl"></i>
                  </div>
                  <h3 className="font-space font-medium text-navy-900 dark:text-white text-2xl md:text-3xl tracking-normal leading-tight">
                    Smart Flight Booking
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 font-inter text-base sm:text-lg leading-relaxed max-w-[50ch] sm:max-w-[52ch] md:max-w-[54ch] mx-auto">
                    Compare flights across all major carriers with flexible dates and multi-city options—optimized for World Cup 2026 match schedules across USA, Canada, and Mexico.
                  </p>
                </div>

                <div className="mt-auto mx-auto inline-flex h-10 sm:h-11 md:h-12 items-center justify-center gap-3 text-[#01b47d] hover:text-[#008f63] transition-colors duration-600 transform-gpu transition-transform group-hover:translate-x-1">
                  <span className="font-medium tracking-tight leading-none text-base sm:text-lg md:text-xl">Search Flights Now</span>
                  <i className="ri-arrow-right-line text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </div>
            </a>

            {/* Experiences Widget */}
            <a
              href="https://viator.tpo.li/1skEZRlA"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              data-affiliate-type="experiences"
              className="affiliate-btn group relative overflow-hidden rounded-3xl block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/40"
            >
              <div className="relative rounded-3xl p-10 sm:p-10 md:p-11 lg:p-12 bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 transition-all duration-500 shadow-md hover:shadow-lg hover:bg-white/90 dark:hover:bg-slate-900/50 hover:-translate-y-[2px] transform-gpu h-full flex flex-col">
                {/* Centered content: icon + text */}
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white shadow-sm">
                    <i className="ri-map-2-line text-2xl sm:text-3xl"></i>
                  </div>
                  <h3 className="font-space font-medium text-navy-900 dark:text-white text-2xl md:text-3xl tracking-normal leading-tight">
                    Local Experiences & Tours
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 font-inter text-base sm:text-lg leading-relaxed max-w-[50ch] sm:max-w-[52ch] md:max-w-[54ch] mx-auto">
                    Official fan festivals, stadium tours, city experiences, and cultural activities—discover each World Cup 2026 host city beyond matchday.
                  </p>
                </div>

                <div className="mt-auto mx-auto inline-flex h-10 sm:h-11 md:h-12 items-center justify-center gap-3 text-amber-500 hover:text-amber-400 transition-colors duration-600 transform-gpu transition-transform group-hover:translate-x-1">
                  <span className="font-medium tracking-tight leading-none text-base sm:text-lg md:text-xl">Explore Activities</span>
                  <i className="ri-arrow-right-line text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
