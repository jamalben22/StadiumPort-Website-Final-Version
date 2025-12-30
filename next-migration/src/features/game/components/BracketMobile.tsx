import React, { useState } from 'react';
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
      {/* Liquid Gold Progress Header */}
      <div className="flex-none px-6 pt-6 pb-2 z-10 border-b border-white/5">
        <div className="text-center space-y-6 mb-3">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/95 border border-white/40 backdrop-blur-xl shadow-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#01b47d] shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
            <span className="text-[11px] font-bold text-slate-800 uppercase tracking-[0.22em] font-['Rajdhani']">Step 3 of 5: Predict All Knockout Rounds</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter drop-shadow-sm">Knockout Stage: From Round of 32 to World Cup Champion</h2>
          <p className="text-white font-mono text-sm uppercase tracking-widest">Predict every knockout match winner from the Round of 32 through the Final on July 19, 2026.</p>
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
                      <span className="text-[10px] font-['Rajdhani'] font-bold uppercase tracking-widest text-white/70">Third Place</span>
                      {!pick && (!tpTeam1 || !tpTeam2) && <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Locked until Semi-Finals are decided</span>}
                      {!pick && tpTeam1 && tpTeam2 && <span className="text-[10px] text-[#01b47d] font-bold uppercase tracking-widest">Select Winner</span>}
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <button
                        type="button"
                        onClick={() => tpTeam1 && onPickWinner('TP-01', tpTeam1)}
                        disabled={!tpTeam1}
                        className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors ${pick === tpTeam1 ? 'bg-[#01b47d]/10 ring-1 ring-[#01b47d]/20' : 'bg-white/5'} ${!tpTeam1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          {team1?.flagUrl && <img src={team1.flagUrl} className="w-6 h-4 rounded shadow-sm" />}
                          <span className="font-['Teko'] text-lg uppercase text-white">{team1?.name || 'TBD'}</span>
                        </div>
                        {pick === tpTeam1 && <span className="text-[10px] font-bold bg-[#01b47d] text-white px-2 py-0.5 rounded">WIN</span>}
                      </button>
                      <button
                        type="button"
                        onClick={() => tpTeam2 && onPickWinner('TP-01', tpTeam2)}
                        disabled={!tpTeam2}
                        className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors ${pick === tpTeam2 ? 'bg-[#01b47d]/10 ring-1 ring-[#01b47d]/20' : 'bg-white/5'} ${!tpTeam2 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          {team2?.flagUrl && <img src={team2.flagUrl} className="w-6 h-4 rounded shadow-sm" />}
                          <span className="font-['Teko'] text-lg uppercase text-white">{team2?.name || 'TBD'}</span>
                        </div>
                        {pick === tpTeam2 && <span className="text-[10px] font-bold bg-[#01b47d] text-white px-2 py-0.5 rounded">WIN</span>}
                      </button>
                    </div>
                  </div>
                );
              })()}
              {ROUND_ORDER[currentRoundIndex] === 'F' && (
                <div className="flex items-center justify-center mb-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border border-white/10 bg-amber-500/10 text-[10px] font-['Rajdhani'] font-extrabold uppercase tracking-widest" style={{ color: '#FBBF24' }}>Final</span>
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
