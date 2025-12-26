import React, { useMemo } from 'react';
import { BracketMatchCard } from './BracketMatchCard';
import { Match } from '../lib/bracket-logic';
import { getTeamForMatchSlot } from '../lib/bracket-utils';
import { TEAMS } from '../lib/wc26-data';

interface BracketDesktopProps {
  matches: Match[];
  knockoutPicks: Record<string, string>;
  onPickWinner: (matchId: string, winnerId: string) => void;
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

export const BracketDesktop = React.memo(({
  matches,
  knockoutPicks,
  onPickWinner
}: BracketDesktopProps) => {
  
  // Group matches by round and sort by index
  const matchesByRound = useMemo(() => {
    const grouped: Record<string, Match[]> = {};
    ROUNDS.forEach(r => grouped[r] = []);
    
    matches.forEach(m => {
      const round = ROUNDS.find(r => m.id.startsWith(r));
      if (round) {
        grouped[round]?.push(m);
      }
    });

    // Sort by ID index (e.g. R16-01, R16-02)
    Object.keys(grouped).forEach(key => {
      grouped[key]?.sort((a, b) => a.id.localeCompare(b.id));
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
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/95 border border-white/40 backdrop-blur-xl shadow-sm">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#01b47d] shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
          <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.22em] font-['Rajdhani']">Step 3 of 5: Predict All Knockout Rounds</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 uppercase tracking-tighter drop-shadow-sm">Knockout Stage: From Round of 32 to World Cup Champion</h2>
        <p className="text-slate-700 font-mono text-sm uppercase tracking-widest">Predict every knockout match winner from the Round of 32 through the Final on July 19, 2026.</p>
        <p
          className="font-mono text-sm uppercase tracking-[0.3em] drop-shadow-sm text-slate-800"
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
          will-change: stroke-dashoffset;
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
              const theme = ROUND_THEME[roundId] || { color: '#ffffff' };
              return (
                <div
                  key={`title-${roundId}`}
                  className="flex items-end justify-center"
                  style={{ left: `${rIndex * 20}%`, width: '20%', position: 'absolute', height: '100%' }}
                >
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
                    style={{
                      border: `1px solid ${withAlpha(theme.color, '44')}`,
                      background: `linear-gradient(90deg, ${withAlpha(theme.color, '22')}, rgba(255,255,255,0.02))`,
                      boxShadow: `0 0 24px ${withAlpha(theme.color, '22')}`
                    }}
                  >
                    <span
                      className="text-[11px] font-['Rajdhani'] font-bold uppercase tracking-[0.2em]"
                      style={{ color: withAlpha(theme.color, 'EE') }}
                    >
                      {ROUND_LABELS[roundId]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-px w-full bg-white/40" />
        </div>

        {/* SVG Connectors Layer */}
        <BracketConnections 
          matchesByRound={matchesByRound}
          positions={positions}
          knockoutPicks={knockoutPicks}
          totalHeight={totalHeight}
        />

        {/* Columns */}
        <div className="absolute inset-0 w-full h-full">
            {ROUNDS.map((roundId, rIndex) => {
            const roundMatches = matchesByRound[roundId] || [];

            return (
                <div key={roundId} className="absolute top-0 bottom-0" style={{ left: `${rIndex * 20}%`, width: '20%' }}>
                {roundId !== 'F' && roundMatches.map((match) => {
                    const team1Id = getTeamForMatchSlot(match.id, 1, matches, knockoutPicks);
                    const team2Id = getTeamForMatchSlot(match.id, 2, matches, knockoutPicks);
                    const winnerId = knockoutPicks[match.id];
                    const topY = positions[match.id] || 0;

                    return (
                    <div
                        key={match.id}
                        className="absolute w-full px-2 flex items-center justify-center transition-all duration-500"
                        style={{
                            top: `${topY + 70}px`,
                            height: `${MATCH_HEIGHT}px`,
                            contentVisibility: 'auto',
                            containIntrinsicSize: `${MATCH_HEIGHT}px`,
                        }}
                    >
                        <BracketMatchCard
                            matchId={match.id}
                            team1Id={team1Id}
                            team2Id={team2Id}
                            winnerId={winnerId}
                            onPickWinner={onPickWinner}
                            compact={false}
                            showCode={true}
                            className="w-full shadow-lg h-full"
                        />
                    </div>
                    );
                })}
                {roundId === 'F' && (
                  (() => {
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

                    const finalTop = positions['F-01'] || 0;
                    const anchorTop = Math.max(finalTop - (MATCH_HEIGHT + GAP_Y), 0);
                    const finalTeam1Id = getTeamForMatchSlot('F-01', 1, matches, knockoutPicks);
                    const finalTeam2Id = getTeamForMatchSlot('F-01', 2, matches, knockoutPicks);
                    const finalWinnerId = knockoutPicks['F-01'];

                    const disabled1 = !tpTeam1;
                    const disabled2 = !tpTeam2;

                    return (
                      <div
                        className="absolute w-full px-2"
                        style={{ top: `${anchorTop + 70}px` }}
                      >
                        <div className="w-full flex items-center justify-center mb-1">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border border-white/40 bg-white/80 text-[10px] font-['Rajdhani'] font-bold uppercase tracking-widest text-slate-500">Third Place</span>
                        </div>
                        {/* Third Place - match-sized card */}
                        <div
                          className="w-full flex items-center justify-center transition-all duration-500 mb-3"
                          style={{ height: `${MATCH_HEIGHT}px` }}
                        >
                          {team1 && team2 ? (
                            <BracketMatchCard
                              matchId={'TP-01'}
                              team1Id={tpTeam1}
                              team2Id={tpTeam2}
                              winnerId={pick}
                              onPickWinner={onPickWinner}
                              compact={false}
                              showCode={true}
                              className="w-full shadow-lg h-full"
                            />
                          ) : (
                            <div className="relative flex w-full rounded-lg overflow-hidden bg-white/95 backdrop-blur-xl ring-1 ring-white/40 shadow-md h-full items-center justify-between px-3">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-6 rounded bg-slate-200 flex items-center justify-center"><span className="text-[8px] font-bold text-slate-400">TBD</span></div>
                                <span className="font-['Teko'] text-lg uppercase text-slate-500">Locked until Semi-Finals</span>
                              </div>
                              <span className="text-[10px] font-bold text-slate-400">Third Place</span>
                            </div>
                          )}
                        </div>

                        <div className="w-full flex items-center justify-center mb-1">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border border-white/40 bg-amber-500/10 text-[10px] font-['Rajdhani'] font-extrabold uppercase tracking-widest" style={{ color: '#FBBF24' }}>Final</span>
                        </div>

                        {/* Final - enlarged, premium emphasis */}
                        <div
                          className="w-full px-2 flex items-center justify-center transition-all duration-500"
                          style={{ height: `${Math.round(MATCH_HEIGHT * 1.6)}px` }}
                        >
                          <BracketMatchCard
                            matchId={'F-01'}
                            team1Id={finalTeam1Id}
                            team2Id={finalTeam2Id}
                            winnerId={finalWinnerId}
                            onPickWinner={onPickWinner}
                            compact={false}
                            showCode={true}
                            className="w-full shadow-2xl h-full ring-2 ring-[#FBBF24]/50"
                          />
                        </div>
                      </div>
                    );
                  })()
                )}
                </div>
            );
            })}
        </div>
      </div>
    </div>
  );
});

const BracketConnections = React.memo(({ matchesByRound, positions, knockoutPicks, totalHeight }: any) => {
  
  // 1. Static Paths (Layout only) - Memoized on [matchesByRound, positions]
  // This layer NEVER re-renders when picks change, saving huge performance
  const staticPaths = useMemo(() => {
    const paths: React.ReactElement[] = [];
    
    ROUNDS.slice(0, 4).forEach((roundId, rIndex) => {
        const currentMatches = matchesByRound[roundId] || [];
        
        currentMatches.forEach((match: Match) => {
            const nextMatchId = match.nextMatchId;
            if (!nextMatchId) return;
            
            const startY = (positions[match.id] || 0) + (MATCH_HEIGHT / 2) + 50;
            const endY = (positions[nextMatchId] || 0) + (MATCH_HEIGHT / 2) + 50;

            const startX = (rIndex * 20) + 19; 
            const endX = ((rIndex + 1) * 20) + 1;
            
            const cp1X = startX + (endX - startX) * 0.5;
            const cp2X = endX - (endX - startX) * 0.5;

            const pathData = `M ${startX} ${startY} C ${cp1X} ${startY}, ${cp2X} ${endY}, ${endX} ${endY}`;
            
            paths.push(
              <path
                  key={`static-${match.id}`}
                  d={pathData}
                  fill="none"
                  stroke="currentColor"
                  className="text-white/40"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
              />
            );
        });
    });
    return paths;
  }, [matchesByRound, positions]);

  // 2. Active Paths (Picks) - Memoized on [knockoutPicks, matchesByRound, positions]
  // This layer only updates when picks change
  const activePaths = useMemo(() => {
    const paths: React.ReactElement[] = [];

    ROUNDS.slice(0, 4).forEach((roundId, rIndex) => {
        const currentMatches = matchesByRound[roundId] || [];
        
        currentMatches.forEach((match: Match) => {
            if (!knockoutPicks[match.id]) return;

            const nextMatchId = match.nextMatchId;
            if (!nextMatchId) return;
            
            const startY = (positions[match.id] || 0) + (MATCH_HEIGHT / 2) + 50;
            const endY = (positions[nextMatchId] || 0) + (MATCH_HEIGHT / 2) + 50;

            const startX = (rIndex * 20) + 19; 
            const endX = ((rIndex + 1) * 20) + 1;
            
            const cp1X = startX + (endX - startX) * 0.5;
            const cp2X = endX - (endX - startX) * 0.5;

            const pathData = `M ${startX} ${startY} C ${cp1X} ${startY}, ${cp2X} ${endY}, ${endX} ${endY}`;
            
            paths.push(
                <path
                    key={`active-${match.id}`}
                    d={pathData}
                    fill="none"
                    stroke="#FBBF24" 
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    className="beam-active"
                    style={{ filter: 'url(#neon-glow)' }}
                />
            );
        });
    });
    return paths;
  }, [matchesByRound, positions, knockoutPicks]);

  return (
    <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
        viewBox={`0 0 100 ${Math.max(totalHeight + 100, 800)}`}
        preserveAspectRatio="none"
        style={{ willChange: 'transform' }}
    >
        <defs>
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {staticPaths}
        {activePaths}
    </svg>
  );
});
