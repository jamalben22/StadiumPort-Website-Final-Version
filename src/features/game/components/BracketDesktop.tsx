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
    // Outer Container: No internal scroll, let body scroll. Added padding for breathing room.
    <div className="w-full relative bg-transparent py-20">
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
                            top: `${topY + 50}px`, // +50 top padding
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
