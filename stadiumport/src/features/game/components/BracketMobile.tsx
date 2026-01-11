import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BracketMatchCard } from './BracketMatchCard';
import { Match } from '../lib/bracket-logic';
import { getTeamForMatchSlot } from '../lib/bracket-utils';
import { TEAMS } from '../lib/wc26-data';

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
      type: "spring" as const,
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
      ease: "easeInOut" as const
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

  const currentRoundId = ROUND_ORDER[currentRoundIndex] || 'R32';
  const theme = ROUND_THEME[currentRoundId] || { color: '#ffffff' };
  const roundMatches = matches.filter(m => m.id.startsWith(currentRoundId));
  const progress = ((currentRoundIndex + 1) / ROUND_ORDER.length) * 100;

  return (
    <div className="flex flex-col w-full min-h-[50vh] relative z-20 text-white overflow-x-hidden">
      {/* Carbon Fiber Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay z-0" />

      {/* Liquid Gold Progress Header */}
      <div className="flex-none px-6 pt-6 pb-2 z-10 border-b border-white/5 relative">
        <div className="text-center space-y-6 mb-3">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0A0A0C]/40 border border-white/10 backdrop-blur-xl shadow-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
            <span className="text-[11px] font-bold text-white uppercase tracking-[0.22em] font-['Rajdhani']">Step 3 of 5: Predict All Knockout Rounds</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-['Teko'] font-bold text-white uppercase tracking-tight drop-shadow-sm">Knockout Stage</h2>
          <p className="text-slate-400 font-['Rajdhani'] text-xs uppercase tracking-widest font-bold">Predict every knockout match winner from the Round of 32 through the Final on July 19, 2026.</p>
          <p
            className="font-['Rajdhani'] text-xs uppercase tracking-[0.3em] drop-shadow-sm text-slate-300 font-bold"
          >
            Tournament Bracket Progress:
          </p>
        </div>
        <div className="flex justify-between items-end mb-2">
            <h2
              className="text-2xl font-['Teko'] font-bold uppercase tracking-wider text-white"
            >
              {ROUND_NAMES[currentRoundId]}
            </h2>
            <div className="text-amber-500 font-['Rajdhani'] text-xs font-bold tracking-widest mb-1">
                STAGE {currentRoundIndex + 1}/{ROUND_ORDER.length}
            </div>
        </div>
        
        {/* Progress Bar Container */}
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative border border-white/5">
            {/* Liquid Gold Bar */}
            <div 
                className="absolute top-0 left-0 h-full transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                style={{ width: `${progress}%`, backgroundColor: '#f59e0b' }}
            >
                <div
                  className="w-full h-full animate-pulse bg-gradient-to-r from-transparent via-white/40 to-transparent"
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
              {ROUND_ORDER[currentRoundIndex] === 'F' && (() => {
                const sf1t1 = getTeamForMatchSlot('SF-01', 1, matches, knockoutPicks);
                const sf1t2 = getTeamForMatchSlot('SF-01', 2, matches, knockoutPicks);
                const sf2t1 = getTeamForMatchSlot('SF-02', 1, matches, knockoutPicks);
                const sf2t2 = getTeamForMatchSlot('SF-02', 2, matches, knockoutPicks);
                const sf1Winner = knockoutPicks['SF-01'];
                const sf2Winner = knockoutPicks['SF-02'];
                const tpTeam1 = sf1Winner && sf1t1 && sf1t2 ? (sf1Winner === sf1t1 ? sf1t2 : sf1t1) : null;
                const tpTeam2 = sf2Winner && sf2t1 && sf2t2 ? (sf2Winner === sf2t1 ? sf2t2 : sf2t1) : null;
                const pick = knockoutPicks['TP-01'];
                const team1 = tpTeam1 ? TEAMS.find(t => t.id === tpTeam1) : undefined;
                const team2 = tpTeam2 ? TEAMS.find(t => t.id === tpTeam2) : undefined;
                return (
                  <div className="mt-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-['Rajdhani'] font-bold uppercase tracking-widest text-slate-400">Third Place Play-off</span>
                      {!pick && (!tpTeam1 || !tpTeam2) && <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Decided after Semi-Finals</span>}
                      {!pick && tpTeam1 && tpTeam2 && <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest animate-pulse">Pick your winner</span>}
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <button
                        type="button"
                        onClick={() => tpTeam1 && onPickWinner('TP-01', tpTeam1)}
                        disabled={!tpTeam1}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${pick === tpTeam1 ? 'bg-amber-500 text-[#0A0A0C] font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]' : 'bg-[#0A0A0C]/40 border border-white/10 text-white hover:bg-white/10'} ${!tpTeam1 ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          {team1?.flagUrl && (
                            <div className="relative w-8 h-5 flex-shrink-0">
                              <Image 
                                src={team1.flagUrl} 
                                alt={team1.name} 
                                fill
                                className={`rounded shadow-sm object-cover ${pick === tpTeam1 ? 'ring-1 ring-white/30' : 'ring-1 ring-white/10'}`} 
                              />
                            </div>
                          )}
                          <span className={`font-['Teko'] text-xl uppercase tracking-wide ${pick === tpTeam1 ? 'text-[#0A0A0C]' : 'text-white'}`}>{team1?.name || 'TBD'}</span>
                        </div>
                        {pick === tpTeam1 && <span className="text-[10px] font-black bg-[#0A0A0C] text-amber-500 px-2.5 py-1 rounded-full uppercase tracking-wider">Winner</span>}
                      </button>
                      <button
                        type="button"
                        onClick={() => tpTeam2 && onPickWinner('TP-01', tpTeam2)}
                        disabled={!tpTeam2}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${pick === tpTeam2 ? 'bg-amber-500 text-[#0A0A0C] font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]' : 'bg-[#0A0A0C]/40 border border-white/10 text-white hover:bg-white/10'} ${!tpTeam2 ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          {team2?.flagUrl && (
                            <div className="relative w-8 h-5 flex-shrink-0">
                              <Image 
                                src={team2.flagUrl} 
                                alt={team2.name} 
                                fill
                                className={`rounded shadow-sm object-cover ${pick === tpTeam2 ? 'ring-1 ring-white/30' : 'ring-1 ring-white/10'}`} 
                              />
                            </div>
                          )}
                          <span className={`font-['Teko'] text-xl uppercase tracking-wide ${pick === tpTeam2 ? 'text-[#0A0A0C]' : 'text-white'}`}>{team2?.name || 'TBD'}</span>
                        </div>
                        {pick === tpTeam2 && <span className="text-[10px] font-black bg-[#0A0A0C] text-amber-500 px-2.5 py-1 rounded-full uppercase tracking-wider">Winner</span>}
                      </button>
                    </div>
                    <div className="mt-8 mb-2 flex items-center justify-center">
                       <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border border-white/10 bg-amber-500/5 text-[10px] font-['Rajdhani'] font-extrabold uppercase tracking-widest text-amber-500">World Cup Final</span>
                    </div>
                  </div>
                );
              })()}
              {ROUND_ORDER[currentRoundIndex] === 'F' && (
                <div className="hidden">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border border-white/10 bg-amber-500/5 text-[10px] font-['Rajdhani'] font-extrabold uppercase tracking-widest text-amber-500">Final</span>
                </div>
              )}
              {roundMatches.map(match => {
                const team1Id = getTeamForMatchSlot(match.id, 1, matches, knockoutPicks);
                const team2Id = getTeamForMatchSlot(match.id, 2, matches, knockoutPicks);
                const winnerId = knockoutPicks[match.id];

                return (
                  <div key={match.id} style={{ contentVisibility: 'auto', containIntrinsicSize: '100px' }}>
                    <BracketMatchCard
                      matchId={match.id}
                      team1Id={team1Id}
                      team2Id={team2Id}
                      winnerId={winnerId}
                      onPickWinner={onPickWinner}
                      className="py-2"
                      showCode={false}
                  />
                  </div>
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

