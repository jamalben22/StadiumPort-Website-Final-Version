import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useGame } from '../context/GameContext';
import { TEAMS } from '../lib/wc26-data';
import { motion, AnimatePresence } from 'framer-motion';

// Fake Ticker Data
const TICKER_ITEMS = [
  "User293 just predicted Argentina...",
  "User402 just predicted Spain...",
  "Sarah_K predicts Brazil to win it all!",
  "Mike99 picked France vs England Final",
  "User882 just joined from New York",
  "Alex_P predicts USA reaching Semis!",
  "User101 just predicted Germany...",
  "SoccerFan26 picked Mexico to upset!",
];

const LiveTicker = () => {
  return (
    <div className="w-full bg-white/90 backdrop-blur-md border-t border-black/10 overflow-hidden py-3 relative z-20">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="text-xs text-slate-900 font-mono font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse shadow-[0_0_8px_rgba(22,163,74,0.6)]" />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

interface AffiliateResultProps {
  userName?: string;
}

export const AffiliateResult = ({ userName }: AffiliateResultProps) => {
  const { knockoutPicks } = useGame();
  const [showFlash, setShowFlash] = useState(true);

  // Champion is winner of Match F-01
  const championId = knockoutPicks['F-01'];
  const champion = TEAMS.find((t) => t.id === championId);

  useEffect(() => {
    // Hide flash after animation
    const timer = setTimeout(() => setShowFlash(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!champion) return null;

  const colors = champion.colors || ['#000000', '#FFFFFF'];
  
  // Hardcoded for WC26 Final: MetLife Stadium (New York/New Jersey)
  const FINAL_CITY = 'New York';
  const FINAL_CITY_QUERY = 'New York'; // For search URLs
  const FINAL_DATE_START = '2026-07-18'; // Approx Final Date
  const FINAL_DATE_END = '2026-07-20';

  // Booking.com Affiliate Link Construction
  const bookingUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(FINAL_CITY_QUERY)}&checkin=${FINAL_DATE_START}&checkout=${FINAL_DATE_END}`;
  
  // Skyscanner Affiliate Link Construction
  const skyscannerUrl = `https://www.skyscanner.net/transport/flights/everywhere/${encodeURIComponent(FINAL_CITY_QUERY)}/${FINAL_DATE_START.replace(/-/g, '').slice(2)}/`;

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-8 perspective-1000">
       {/* White Flash Overlay */}
       <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="absolute inset-0 bg-white z-50 pointer-events-none rounded-3xl"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 1.5, opacity: 0, rotateX: 20 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="relative overflow-hidden rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[6px] border-white bg-white"
      >
        {/* Dynamic Gradient Background */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`
          }}
        />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
        
        {/* Cinematic Glow/Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent pointer-events-none"></div>

        <div className="relative z-10 pt-10 pb-0 flex flex-col items-center text-center">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 backdrop-blur-md border border-black/10 mb-8 shadow-sm">
                <i className="ri-trophy-fill text-yellow-600"></i>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em]">Official Prediction</span>
            </div>

            {/* Champion Flag */}
            <motion.div 
                initial={{ y: 30, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="w-40 h-40 md:w-56 md:h-56 rounded-full border-8 border-black/5 shadow-xl overflow-hidden mb-8 bg-white relative group"
            >
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] z-10 rounded-full"></div>
                {champion.flagUrl && (
                    <Image 
                      src={champion.flagUrl} 
                      alt={champion.name} 
                      fill
                      className="object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700" 
                    />
                )}
            </motion.div>

            {/* Champion Name */}
            <motion.h2 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-5xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter drop-shadow-sm italic leading-none mb-2"
            >
                {champion.name}
            </motion.h2>
            
            <p className="text-slate-900/80 font-bold text-lg md:text-xl tracking-wide mb-12">World Cup 2026 Champions</p>

            {/* User Name - Metallic 3D Effect */}
            <div className="w-full bg-gradient-to-t from-black/5 to-transparent pt-12 pb-8 px-6 mt-auto border-t border-black/5 backdrop-blur-[2px]">
                <p className="text-slate-900/60 text-xs font-bold uppercase tracking-[0.3em] mb-3">Predicted By</p>
                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-3xl md:text-5xl font-black uppercase tracking-wide break-words"
                    style={{
                        background: 'linear-gradient(to bottom, #000000 0%, #333333 50%, #111111 51%, #222222 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
                    }}
                >
                    {userName || 'FUTURE LEGEND'}
                </motion.h1>
            </div>
        </div>

        {/* Live Ticker */}
        <LiveTicker />
      </motion.div>

      {/* Action Buttons / Affiliate Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <motion.a 
          whileTap={{ scale: 0.95 }}
          href={bookingUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 bg-white/90 backdrop-blur-sm hover:bg-slate-100 border border-black/10 rounded-xl transition-all hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-black/5 rounded-lg text-slate-900 transition-colors">
              <i className="ri-hotel-bed-line text-2xl"></i>
            </div>
            <div>
              <div className="font-bold text-slate-900">Book Hotels in NY</div>
              <div className="text-xs text-slate-900 font-medium">Best rates on Booking.com</div>
            </div>
          </div>
          <i className="ri-arrow-right-line text-slate-900 group-hover:translate-x-1 transition-transform"></i>
        </motion.a>

        <motion.a 
          whileTap={{ scale: 0.95 }}
          href={skyscannerUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 bg-white/90 backdrop-blur-sm hover:bg-slate-100 border border-black/10 rounded-xl transition-all hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-black/5 rounded-lg text-slate-900 transition-colors">
              <i className="ri-plane-line text-2xl"></i>
            </div>
            <div>
              <div className="font-bold text-slate-900">Find Flight Deals</div>
              <div className="text-xs text-slate-900 font-medium">Compare prices on Skyscanner</div>
            </div>
          </div>
          <i className="ri-arrow-right-line text-slate-900 group-hover:translate-x-1 transition-transform"></i>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default AffiliateResult;

