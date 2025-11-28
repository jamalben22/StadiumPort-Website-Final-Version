import React, { useMemo } from 'react';
import { BracketMatchCard } from './BracketMatchCard';
import { Match } from '../lib/bracket-logic';

interface BracketDesktopProps {
  matches: Match[];
  knockoutPicks: Record<string, string>;
  onPickWinner: (matchId: string, winnerId: string) => void;
  getTeamForMatchSlot: (matchId: string, slot: 1 | 2) => string | null;
}

const ROUNDS = ['R32', 'R16', 'QF', 'SF', 'F'];
const ROUND_LABELS: Record<string, string> = {
  R32: 'Round of 32',
  R16: 'Round of 16',
  QF: 'Quarter-Finals',
  SF: 'Semi-Finals',
  F: 'FINAL'
};

const ROUND_THEME: Record<string, { color: string }> = {
  R32: { color: '#9CA3AF' },
  R16: { color: '#A78BFA' },
  QF: { color: '#22D3EE' },
  SF: { color: '#F472B6' },
  F:  { color: '#FBBF24' }
};

const withAlpha = (hex: string, alphaHex: string) => (hex.length === 7 ? hex + alphaHex : hex);
const MATCH_HEIGHT = 80; // Fixed height in px
const GAP_Y = 24; // Vertical gap in px

export const BracketDesktop = ({
  matches,
  knockoutPicks,
  onPickWinner,
  getTeamForMatchSlot
}: BracketDesktopProps) => {
  
  // Group matches by round and sort by index
  const matchesByRound = useMemo(() => {
    const grouped: Record<string, Match[]> = {};
    ROUNDS.forEach(r => grouped[r] = []);
    
    matches.forEach(m => {
      const round = ROUNDS.find(r => m.id.startsWith(r));
      if (round) {
        grouped[round].push(m);
      }
    });

    // Sort by ID index (e.g. R16-01, R16-02)
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => a.id.localeCompare(b.id));
    });

    return grouped;
  }, [matches]);

  // Calculate positions for all matches
  const { positions, totalHeight } = useMemo(() => {
    const pos: Record<string, number> = {};
    
    // 1. Position R32 (Base Round)
    const r32Matches = matchesByRound['R32'] || [];
    r32Matches.forEach((match, index) => {
      pos[match.id] = index * (MATCH_HEIGHT + GAP_Y);
    });

    // 2. Position subsequent rounds recursively
    // We can just iterate through ROUNDS since they are ordered R32 -> F
    ROUNDS.slice(1).forEach((roundId) => {
      const currentMatches = matchesByRound[roundId] || [];
      currentMatches.forEach(match => {
        // Find the matches from the previous round that feed into this one
        // A match feeds into 'match' if its nextMatchId === match.id
        const feeders = matches.filter(m => m.nextMatchId === match.id);
        
        if (feeders.length > 0) {
          // Average the Y positions of the feeders
          const sumY = feeders.reduce((sum, feeder) => sum + (pos[feeder.id] || 0), 0);
          pos[match.id] = sumY / feeders.length;
        } else {
          // Fallback (shouldn't happen in valid bracket)
          pos[match.id] = 0;
        }
      });
    });

    // Calculate total height based on R32
    const height = (r32Matches.length * (MATCH_HEIGHT + GAP_Y)) - GAP_Y;

    return { positions: pos, totalHeight: height };
  }, [matches, matchesByRound]);

  return (
    <div className="w-full relative bg-transparent py-20">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/8 border border-white/20 backdrop-blur-xl shadow-[0_8px_30px_rgba(255,255,255,0.08)]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
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
      <style>{`
        @keyframes beam-flow {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        .beam-active {
          stroke-dasharray: 12 12;
          animation: beam-flow 1s linear infinite;
        }
      `}</style>
      
      {/* Inner Container: Fixed Width Layout Logic */}
      <div 
        className="relative w-full mx-auto"
        style={{ height: Math.max(totalHeight + 100, 800) }} // Ensure min height, add padding
      >
      
        {/* Round Titles Layer */}
        <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
          <div className="relative w-full h-12 flex">
            {ROUNDS.map((roundId, rIndex) => {
              const theme = ROUND_THEME[roundId];
              return (
                <div
                  key={`title-${roundId}`}
                  className="flex items-end justify-center"
                  style={{ left: `${rIndex * 20}%`, width: '20%', position: 'absolute', height: '100%' }}
                >
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
                    style={{
                      border: `1px solid ${withAlpha(theme.color, '33')}`,
                      background: `linear-gradient(90deg, ${withAlpha(theme.color, '1A')}, rgba(255,255,255,0.02))`,
                      boxShadow: `0 0 24px ${withAlpha(theme.color, '22')}`
                    }}
                  >
                    <span
                      className="text-[11px] font-['Rajdhani'] font-bold uppercase tracking-[0.2em]"
                      style={{ color: withAlpha(theme.color, 'CC') }}
                    >
                      {ROUND_LABELS[roundId]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* SVG Connectors Layer */}
        <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox={`0 0 100 ${Math.max(totalHeight + 100, 800)}`}
            preserveAspectRatio="none"
        >
            <defs>
              {/* Neon Glow Filter */}
              <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Live Gradient: Gold to Transparent */}
              <linearGradient id="gold-beam" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
                <stop offset="50%" stopColor="#D97706" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
              </linearGradient>
            </defs>

            {ROUNDS.slice(0, 4).map((roundId, rIndex) => {
            const currentMatches = matchesByRound[roundId] || [];
            
            return currentMatches.map((match) => {
                const nextMatchId = match.nextMatchId;
                if (!nextMatchId) return null;
                
                // Get positions
                const startY = (positions[match.id] || 0) + (MATCH_HEIGHT / 2) + 50; // +50 for top padding
                const endY = (positions[nextMatchId] || 0) + (MATCH_HEIGHT / 2) + 50;

                // X Coordinates (0-100 scale)
                const startX = (rIndex * 20) + 19; 
                const endX = ((rIndex + 1) * 20) + 1;
                
                // Control Points for Bezier
                const cp1X = startX + (endX - startX) * 0.5;
                const cp2X = endX - (endX - startX) * 0.5;

                const pathData = `M ${startX} ${startY} C ${cp1X} ${startY}, ${cp2X} ${endY}, ${endX} ${endY}`;
                
                const isCompleted = !!knockoutPicks[match.id];
                
                return (
                  <g key={`path-group-${match.id}`}>
                    {/* 1. Base Track (Always visible, faint) */}
                    <path
                        d={pathData}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.05)"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                    />

                    {/* 2. Active Holographic Beam */}
                    {isCompleted && (
                      <path
                          d={pathData}
                          fill="none"
                          stroke="#FBBF24" 
                          strokeWidth="2"
                          vectorEffect="non-scaling-stroke"
                          className="beam-active"
                          style={{ filter: 'url(#neon-glow)' }}
                      />
                    )}
                  </g>
                );
            });
            })}
        </svg>

        {/* Columns */}
        <div className="absolute inset-0 w-full h-full">
            {ROUNDS.map((roundId, rIndex) => {
            const roundMatches = matchesByRound[roundId] || [];

            return (
                <div key={roundId} className="absolute top-0 bottom-0" style={{ left: `${rIndex * 20}%`, width: '20%' }}>
                {roundMatches.map((match) => {
                    const team1Id = getTeamForMatchSlot(match.id, 1);
                    const team2Id = getTeamForMatchSlot(match.id, 2);
                    const winnerId = knockoutPicks[match.id];
                    const topY = positions[match.id] || 0;

                    return (
                    <div
                        key={match.id}
                        className="absolute w-full px-2 flex items-center justify-center transition-all duration-500"
                        style={{
                            top: `${topY + 70}px`, // +50 top padding + 20 for titles
                            height: `${MATCH_HEIGHT}px`
                        }}
                    >
                        <BracketMatchCard
                            matchId={match.id}
                            team1Id={team1Id}
                            team2Id={team2Id}
                            winnerId={winnerId}
                            onPickWinner={onPickWinner}
                            compact={false} // Force standard size
                            showCode={true}
                            className="w-full shadow-lg h-full"
                        />
                    </div>
                    );
                })}
                </div>
            );
            })}
        </div>
      </div>
    </div>
  );
};
