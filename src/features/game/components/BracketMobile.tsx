import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BracketMatchCard } from './BracketMatchCard';
import { Match } from '../lib/bracket-logic';
import { getTeamForMatchSlot } from '../lib/bracket-utils';

interface BracketMobileProps {
  matches: Match[];
  knockoutPicks: Record<string, string>;
  onPickWinner: (matchId: string, winnerId: string) => void;
  onComplete?: () => void;
  currentRoundIndex: number;
}

const ROUND_ORDER = ['R32', 'R16', 'QF', 'SF', 'F'];
const ROUND_NAMES: Record<string, string> = {
  'R32': 'Round of 32',
  'R16': 'Round of 16',
  'QF': 'Quarter-Finals',
  'SF': 'Semi-Finals',
  'F': 'FINAL'
};

const ROUND_THEME: Record<string, { color: string }> = {
  'R32': { color: '#9CA3AF' },
  'R16': { color: '#A78BFA' },
  'QF': { color: '#22D3EE' },
  'SF': { color: '#F472B6' },
  'F': { color: '#FBBF24' }
};

const withAlpha = (hex: string, alphaHex: string) => (hex.length === 7 ? hex + alphaHex : hex);

const containerVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
    position: 'absolute' as const,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'relative' as const,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 1
    }
  },
  exit: (dir: number) => ({
    x: dir < 0 ? '100%' : '-100%',
    opacity: 0,
    position: 'absolute' as const,
    transition: {
      duration: 0.25,
      ease: "easeInOut"
    }
  })
};

export const BracketMobile = React.memo(({
  matches,
  knockoutPicks,
  onPickWinner,
  onComplete,
  currentRoundIndex
}: BracketMobileProps) => {
  // Removed internal state for round index
  // const [direction, setDirection] = useState(0); // We might need direction for animation, but let's see. 
  // Ideally direction should be passed or derived, but for now let's keep it simple or remove slide animation if difficult.
  // Or we can keep direction state locally but update it when prop changes.
  
  const [direction, setDirection] = useState(0);
  const prevRoundRef = React.useRef(currentRoundIndex);
  
  React.useEffect(() => {
     if (currentRoundIndex > prevRoundRef.current) setDirection(1);
     else if (currentRoundIndex < prevRoundRef.current) setDirection(-1);
     prevRoundRef.current = currentRoundIndex;
  }, [currentRoundIndex]);

  const currentRoundId = ROUND_ORDER[currentRoundIndex];
  const theme = ROUND_THEME[currentRoundId];
  const roundMatches = matches.filter(m => m.id.startsWith(currentRoundId));
  const progress = ((currentRoundIndex + 1) / ROUND_ORDER.length) * 100;

  return (
    <div className="flex flex-col w-full min-h-[50vh] relative z-20 text-white overflow-x-hidden">
      {/* Liquid Gold Progress Header */}
      <div className="flex-none px-6 pt-6 pb-2 z-10 border-b border-white/5">
        <div className="text-center space-y-6 mb-3">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/8 border border-white/20 backdrop-blur-xl shadow-[0_8px_30px_rgba(255,255,255,0.08)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#01b47d] shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
            <span className="text-[11px] font-bold text-white/85 uppercase tracking-[0.22em] font-['Rajdhani']">Step 3 of 5: Predict All Knockout Rounds</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Knockout Stage: From Round of 32 to World Cup Champion</h2>
          <p className="text-slate-400 font-mono text-sm uppercase tracking-widest">Predict every knockout match winner from the Round of 32 through the Final on July 19, 2026.</p>
          <p
            className="font-mono text-sm uppercase tracking-[0.3em] drop-shadow-[0_0_12px_rgba(251,191,36,0.35)]"
            style={{
              background: 'linear-gradient(90deg, #FBBF24, #F59E0B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Tournament Bracket Progress:
          </p>
        </div>
        <div className="flex justify-between items-end mb-2">
            <h2
              className="text-2xl font-display font-bold uppercase tracking-wider"
              style={{ color: withAlpha(theme.color, 'CC') }}
            >
              {ROUND_NAMES[currentRoundId]}
            </h2>
            <div className="text-amber-500/80 font-mono text-xs font-bold tracking-widest mb-1">
                STAGE {currentRoundIndex + 1}/{ROUND_ORDER.length}
            </div>
        </div>
        
        {/* Progress Bar Container */}
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative">
            {/* Liquid Gold Bar */}
            <div 
                className="absolute top-0 left-0 h-full transition-all duration-700 ease-out rounded-full"
                style={{ width: `${progress}%` }}
            >
                <div
                  className="w-full h-full animate-pulse"
                  style={{
                    background: `linear-gradient(90deg, ${withAlpha(theme.color, '80')}, ${withAlpha(theme.color, '60')}, ${withAlpha(theme.color, '99')})`
                  }}
                ></div>
            </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative w-full min-h-0 flex-1 overflow-x-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentRoundIndex}
            custom={direction}
            variants={containerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full px-4 pb-40 pt-6 flex flex-col gap-4"
          >
            <div className="space-y-4 max-w-md mx-auto w-full">
              {roundMatches.map(match => {
                const team1Id = getTeamForMatchSlot(match.id, 1, matches, knockoutPicks);
                const team2Id = getTeamForMatchSlot(match.id, 2, matches, knockoutPicks);
                const winnerId = knockoutPicks[match.id];

                return (
                  <BracketMatchCard
                      key={match.id}
                      matchId={match.id}
                      team1Id={team1Id}
                      team2Id={team2Id}
                      winnerId={winnerId}
                      onPickWinner={onPickWinner}
                      className="py-2"
                      showCode={false}
                  />
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Global Styles for Shimmer */}
      <style>{`
        @keyframes shimmer {
            0% { transform: translateX(-150%) skewX(-12deg); }
            100% { transform: translateX(250%) skewX(-12deg); }
        }
      `}</style>
    </div>
  );
});
