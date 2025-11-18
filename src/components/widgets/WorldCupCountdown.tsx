import { useState, useEffect, useRef } from 'react';
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
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-slate-200 dark:border-white/20 p-6 md:p-8 shadow-2xl">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 via-gold-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-sm"></div>
      
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
  startValue?: number;
  enableGlow?: boolean;
}> = ({ value, duration = 2.5, startValue, enableGlow = true }) => {
  const [displayValue, setDisplayValue] = useState(startValue || Math.max(0, value - Math.floor(value * 0.1)));
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const previousValueRef = useRef(startValue || Math.max(0, value - Math.floor(value * 0.1)));

  // Premium counting animation - starts from near current value
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const startVal = startValue || Math.max(0, value - Math.floor(value * 0.1));
          const endValue = value;
          const difference = endValue - startVal;
          
          // Trigger subtle glow effect on initial animation
          if (enableGlow && difference > 0) {
            setShowGlow(true);
            setTimeout(() => setShowGlow(false), 800);
          }
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            
            // Premium easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(easeOutQuart * difference + startVal);
            
            setDisplayValue(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(endValue);
            }
          };
          
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3, rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated, startValue, enableGlow]);

  // Real-time updates without animation after initial load
  useEffect(() => {
    let glowTimeout: ReturnType<typeof setTimeout> | undefined;
    if (hasAnimated && value !== previousValueRef.current) {
      // Update immediately without animation for real-time changes
      setDisplayValue(value);
      
      // Subtle glow effect for live updates
      if (enableGlow && value > previousValueRef.current) {
        setShowGlow(true);
        glowTimeout = setTimeout(() => setShowGlow(false), 400);
      }
      
      previousValueRef.current = value;
    }
    return () => {
      if (glowTimeout) clearTimeout(glowTimeout);
    };
  }, [value, hasAnimated, enableGlow]);

  return (
    <span 
      ref={ref} 
      className={`inline-block transition-all duration-300 ${
        showGlow ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] scale-105' : ''
      }`}
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

  // Simulate real-time updates after initial animation
  useEffect(() => {
    if (hasStartedLiveUpdates) return;
    
    const startLiveUpdates = () => {
      setHasStartedLiveUpdates(true);
      
      // Simulate live updates every 5-8 seconds
      const travelerInterval = setInterval(() => {
        setLiveTravelerCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      }, 5000 + Math.random() * 3000);
      
      const dealInterval = setInterval(() => {
        setLiveDealCount(prev => prev + Math.floor(Math.random() * 2) + 1);
      }, 6000 + Math.random() * 4000);
      
      intervalsRef.current = [travelerInterval, dealInterval];
    };
    
    // Start live updates after 3 seconds (after initial animations complete)
    const timeout = setTimeout(startLiveUpdates, 3000);
    
    return () => {
      clearTimeout(timeout);
      intervalsRef.current.forEach(interval => clearInterval(interval));
    };
  }, [hasStartedLiveUpdates]);

  const stats = [
    {
      id: 'travelers',
      icon: 'ri-group-line',
      value: liveTravelerCount,
      label: 'Travelers Planning Trips',
      color: 'emerald',
      gradient: 'from-emerald-400 to-teal-400',
      delay: 0,
      enableAnimation: true,
      startValue: Math.max(0, travelerCount - Math.floor(travelerCount * 0.15))
    },
    {
      id: 'deals',
      icon: 'ri-price-tag-3-line',
      value: liveDealCount,
      label: 'Live Travel Deals',
      color: 'gold',
      gradient: 'from-amber-400 to-orange-400',
      delay: 0.15,
      enableAnimation: true,
      startValue: Math.max(0, dealCount - Math.floor(dealCount * 0.2))
    },
    {
      id: 'cities',
      icon: 'ri-map-pin-line',
      value: 16,
      label: 'Host City Guides',
      color: 'blue',
      gradient: 'from-blue-400 to-cyan-400',
      delay: 0.3,
      enableAnimation: false
    },
    {
      id: 'stadiums',
      icon: 'ri-football-line',
      value: 16,
      label: 'Stadium Guides',
      color: 'purple',
      gradient: 'from-purple-400 to-pink-400',
      delay: 0.45,
      enableAnimation: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="mb-8 md:mb-12"
    >
      {/* Premium horizontal stats row */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: stat.delay, type: "spring", stiffness: 100 }}
            className="group relative text-center min-w-[180px] lg:min-w-[200px]"
          >
            {/* Perfectly centered icon with subtle glow */}
            <motion.div 
              className="relative mb-8 flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className={`absolute inset-0 ${stat.id === 'travelers' ? 'bg-emerald-500/15' : stat.id === 'deals' ? 'bg-amber-500/15' : stat.id === 'cities' ? 'bg-blue-500/15' : 'bg-purple-500/15'} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                <i className={`${stat.icon} text-2xl md:text-3xl leading-none`}></i>
              </div>
            </motion.div>

            {/* Premium number with animated counter */}
            <motion.div 
              className="mb-8 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Subtle glow background for animated numbers */}
              {stat.enableAnimation && (
                <motion.div 
                  className={`absolute inset-0 ${stat.id === 'travelers' ? 'bg-emerald-500/5' : 'bg-amber-500/5'} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              )}
              <span className={`relative text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-space tracking-tight`}>
                {stat.enableAnimation ? (
                  <AnimatedCounter 
                    value={stat.value} 
                    startValue={stat.startValue}
                    duration={2.5}
                    enableGlow={true}
                  />
                ) : (
                  stat.value.toLocaleString()
                )}
                {stat.id === 'travelers' && '+'}
              </span>
            </motion.div>

            {/* Premium label with consistent bold styling */}
            <div className="space-y-3">
              <h3 className={`text-xl md:text-2xl font-bold ${stat.id === 'travelers' ? 'text-emerald-300' : stat.id === 'deals' ? 'text-amber-300' : stat.id === 'cities' ? 'text-blue-300' : 'text-purple-300'} font-inter tracking-wide leading-tight`}>
                {stat.label}
              </h3>
              <p className="text-slate-400 font-inter text-sm md:text-base font-bold uppercase tracking-widest">
                {stat.id === 'travelers' ? '' : 
                 stat.id === 'deals' ? '' : 
                 stat.id === 'cities' ? '' : 
                 ''}
              </p>
            </div>

            {/* Elegant divider (except last item) */}
            {index < stats.length - 1 && (
              <>
                {/* Desktop divider */}
                <div className="hidden lg:block absolute -right-10 top-1/2 w-px h-24 bg-gradient-to-b from-transparent via-slate-300/40 dark:via-white/25 to-transparent transform -translate-y-1/2"></div>
                {/* Mobile divider */}
                <div className="lg:hidden w-32 h-px bg-gradient-to-r from-transparent via-slate-300/40 dark:via-white/25 to-transparent mt-10 mb-6 mx-auto"></div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};



export const WorldCupCountdown: React.FC<LiveStatsProps> = ({ travelerCount, dealCount }) => {
  const [countdown, setCountdown] = useState<CountdownState | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const targetDate = new Date('2026-06-11T23:25:00-04:00'); // America/New_York timezone
    
    const calculateCountdown = () => {
      const now = new Date();
      const timeLeft = targetDate.getTime() - now.getTime();
      
      if (timeLeft <= 0) {
        setCountdown({
          days: { value: 0, label: 'Days', singular: 'Day' },
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
        days: { value: days, label: 'Days', singular: 'Day' },
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

  if (!isMounted || !countdown) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-slate-600 dark:text-white/60">Loading countdown...</div>
      </div>
    );
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-navy-900">

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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-gold-400 to-blue-400 mt-2">
              World Cup 2026 Guide
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The 2026 FIFA World Cup kicks off across the United States, Canada, and Mexico. Get expert guides for every stadium, host city, and travel essential—from MetLife Stadium's Final to Estadio Azteca's legendary atmosphere.
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl text-navy-900 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-inter mt-4 font-bold tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            COUNTDOWN TO KICKOFF:
          </motion.p>
        </motion.div>

        {/* Countdown Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          <CountdownUnit unit={countdown.days} index={0} />
          <CountdownUnit unit={countdown.hours} index={1} />
          <CountdownUnit unit={countdown.minutes} index={2} />
          <CountdownUnit unit={countdown.seconds} index={3} />
        </div>

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
              href="https://hotel-affiliate-link.com"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              data-affiliate-type="accommodation"
              className="affiliate-btn group relative overflow-hidden rounded-3xl block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/40"
            >
              {/* Subtle aura glow */}
              <div className="absolute -top-8 -left-8 w-44 h-44 bg-emerald-500/12 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative rounded-3xl p-10 sm:p-10 md:p-11 lg:p-12 bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-slate-200 dark:border-white/10 ring-1 ring-slate-200/50 dark:ring-white/5 transition-all duration-500 shadow-premium hover:shadow-premium-lg hover:bg-slate-50 dark:hover:bg-white/10 hover:-translate-y-1 transform-gpu h-full flex flex-col">
                {/* Centered content: icon + text */}
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 w-28 h-28 bg-emerald-500/12 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-100 dark:bg-white/10 ring-1 ring-slate-300 dark:ring-white/20 flex items-center justify-center text-navy-900 dark:text-white shadow-premium-sm transition-all duration-600 group-hover:bg-slate-200 dark:group-hover:bg-white/15 group-hover:ring-emerald-400/50">
                      <i className="ri-hotel-line text-2xl sm:text-3xl"></i>
                    </div>
                  </div>
                  <h3 className="font-space font-medium text-navy-900 dark:text-white text-2xl md:text-3xl tracking-normal leading-tight">
                    Accommodation
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 font-inter text-base sm:text-lg leading-relaxed max-w-[50ch] sm:max-w-[52ch] md:max-w-[54ch] mx-auto">
                    From luxury hotels and design-forward stays to premium serviced apartments, curated for comfort near venues and city highlights.
                  </p>
                </div>

                <div className="mt-auto mx-auto inline-flex h-10 sm:h-11 md:h-12 items-center justify-center gap-3 text-emerald-500 hover:text-emerald-400 transition-colors duration-600 transform-gpu transition-transform group-hover:translate-x-1">
                  <span className="font-medium tracking-tight leading-none text-base sm:text-lg md:text-xl">Find Your Stay</span>
                  <i className="ri-arrow-right-line text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </div>
            </a>

            {/* Flights Widget */}
            <a
              href="https://flight-affiliate-link.com"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              data-affiliate-type="flights"
              className="affiliate-btn group relative overflow-hidden rounded-3xl block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/40"
            >
              {/* Subtle aura glow */}
              <div className="absolute -top-8 -left-8 w-44 h-44 bg-blue-500/12 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative rounded-3xl p-10 sm:p-10 md:p-11 lg:p-12 bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-slate-200 dark:border-white/10 ring-1 ring-slate-200/50 dark:ring-white/5 transition-all duration-500 shadow-premium hover:shadow-premium-lg hover:bg-slate-50 dark:hover:bg-white/10 hover:-translate-y-1 transform-gpu h-full flex flex-col">
                {/* Centered content: icon + text */}
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 w-28 h-28 bg-blue-500/12 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-100 dark:bg-white/10 ring-1 ring-slate-300 dark:ring-white/20 flex items-center justify-center text-navy-900 dark:text-white shadow-premium-sm transition-all duration-600 group-hover:bg-slate-200 dark:group-hover:bg-white/15 group-hover:ring-blue-400/50">
                      <i className="ri-flight-takeoff-line text-2xl sm:text-3xl"></i>
                    </div>
                  </div>
                  <h3 className="font-space font-medium text-navy-900 dark:text-white text-2xl md:text-3xl tracking-normal leading-tight">
                    Flights
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 font-inter text-base sm:text-lg leading-relaxed max-w-[50ch] sm:max-w-[52ch] md:max-w-[54ch] mx-auto">
                    Premium flight search with flexible dates, multi-city itineraries, and trusted carriers — optimized for match schedules and city hops.
                  </p>
                </div>

                <div className="mt-auto mx-auto inline-flex h-10 sm:h-11 md:h-12 items-center justify-center gap-3 text-blue-500 hover:text-blue-400 transition-colors duration-600 transform-gpu transition-transform group-hover:translate-x-1">
                  <span className="font-medium tracking-tight leading-none text-base sm:text-lg md:text-xl">Search Flights</span>
                  <i className="ri-arrow-right-line text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </div>
            </a>

            {/* Experiences Widget */}
            <a
              href="https://tour-affiliate-link.com"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              data-affiliate-type="experiences"
              className="affiliate-btn group relative overflow-hidden rounded-3xl block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/40"
            >
              {/* Subtle aura glow */}
              <div className="absolute -top-8 -left-8 w-44 h-44 bg-amber-500/12 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative rounded-3xl p-10 sm:p-10 md:p-11 lg:p-12 bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-slate-200 dark:border-white/10 ring-1 ring-slate-200/50 dark:ring-white/5 transition-all duration-500 shadow-premium hover:shadow-premium-lg hover:bg-slate-50 dark:hover:bg-white/10 hover:-translate-y-1 transform-gpu h-full flex flex-col">
                {/* Centered content: icon + text */}
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 w-28 h-28 bg-amber-500/12 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-100 dark:bg-white/10 ring-1 ring-slate-300 dark:ring-white/20 flex items-center justify-center text-navy-900 dark:text-white shadow-premium-sm transition-all duration-600 group-hover:bg-slate-200 dark:group-hover:bg-white/15 group-hover:ring-amber-400/50">
                      <i className="ri-map-2-line text-2xl sm:text-3xl"></i>
                    </div>
                  </div>
                  <h3 className="font-space font-medium text-navy-900 dark:text-white text-2xl md:text-3xl tracking-normal leading-tight">
                    Experiences
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 font-inter text-base sm:text-lg leading-relaxed max-w-[50ch] sm:max-w-[52ch] md:max-w-[54ch] mx-auto">
                    Curated tours, premium fan events, and immersive activities — discover the city beyond matchday with elevated experiences.
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