import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BracketMatchCard } from './BracketMatchCard';
import { Match } from '../lib/bracket-logic';

interface BracketMobileProps {
  matches: Match[];
  knockoutPicks: Record<string, string>;
  onPickWinner: (matchId: string, winnerId: string) => void;
  getTeamForMatchSlot: (matchId: string, slot: 1 | 2) => string | null;
  onComplete?: () => void;
  currentRoundIndex: number;
}

const ROUND_ORDER = ['R32', 'R16', 'QF', 'SF', 'F'];
const ROUND_NAMES: Record<string, string> = {
  'R32': 'Round of 32',
  'R16': 'Round of 16',
  'QF': 'Quarter-Finals',
  'SF': 'Semi-Finals',
  'F': 'Grand Final'
};

export const BracketMobile = ({
  matches,
  knockoutPicks,
  onPickWinner,
  getTeamForMatchSlot,
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
  const roundMatches = matches.filter(m => m.id.startsWith(currentRoundId));
  const progress = ((currentRoundIndex + 1) / ROUND_ORDER.length) * 100;

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

  return (
    <div className="flex flex-col w-full min-h-[50vh] relative z-20 text-white overflow-x-hidden">
      {/* Liquid Gold Progress Header */}
      <div className="flex-none px-6 pt-6 pb-2 z-10 border-b border-white/5">
        <div className="flex justify-between items-end mb-2">
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider">
            {ROUND_NAMES[currentRoundId]}
            </h2>
            <div className="text-amber-500/80 font-mono text-xs font-bold tracking-widest mb-1">
                LEVEL {currentRoundIndex + 1}/{ROUND_ORDER.length}
            </div>
        </div>
        
        {/* Progress Bar Container */}
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative">
            {/* Liquid Gold Bar */}
            <div 
                className="absolute top-0 left-0 h-full transition-all duration-700 ease-out rounded-full"
                style={{ width: `${progress}%` }}
            >
                <div className="w-full h-full bg-gradient-to-r from-amber-600 via-amber-300 to-amber-500 animate-pulse"></div>
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
                const team1Id = getTeamForMatchSlot(match.id, 1);
                const team2Id = getTeamForMatchSlot(match.id, 2);
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
};
