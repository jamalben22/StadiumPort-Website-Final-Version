import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/base/Button';

export const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp"
          alt="World Cup 2026 Stadium"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-navy-950/60 to-navy-950/90" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-[#01b47d] animate-pulse"></span>
            <span className="text-white/80 text-xs font-mono tracking-[0.2em] uppercase">Official Travel Guide</span>
          </motion.div>

          <h1 className="font-space font-bold text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl">
            The World Is<br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] via-emerald-300 to-[#01b47d] animate-gradient-x">
                Coming Home
              </span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-[#01b47d]/20 via-emerald-300/20 to-[#01b47d]/20 blur-3xl animate-pulse-soft"></span>
            </span>
          </h1>

          <p className="font-inter text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide opacity-90 mix-blend-plus-lighter">
            The ultimate guide to the biggest sporting event in history. 
            Experience 16 host cities across the USA, Canada, and Mexico.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link to="/world-cup-2026-host-cities">
              <Button 
                variant="primary" 
                size="xl" 
                className="rounded-full px-10 py-6 text-lg font-space tracking-wide shadow-glow hover:shadow-glow-lg transition-all duration-500 hover:scale-105 bg-[#01b47d] hover:bg-[#009f6e] border-none ring-0"
              >
                Explore Host Cities
              </Button>
            </Link>
            <Link to="/travel-guides">
              <button className="group relative px-10 py-6 rounded-full overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md text-white font-space text-lg tracking-wide hover:border-white/30 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative flex items-center gap-2">
                  Plan Your Trip
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Scroll to Explore</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/0 via-white/30 to-white/0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white/80 animate-shimmer" style={{ animationDuration: '2s' }}></div>
        </div>
      </motion.div>
    </section>
  );
};
