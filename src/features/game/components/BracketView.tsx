import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useGame } from '../context/GameContext';
import { TEAMS } from '../lib/wc26-data';
import { generateBracketMatches, Match } from '../lib/bracket-logic';

// --- Types & Constants ---
const ROUNDS = [
  { id: 'R32', name: 'Round of 32', count: 16 },
  { id: 'R16', name: 'Round of 16', count: 8 },
  { id: 'QF', name: 'Quarter-Finals', count: 4 },
  { id: 'SF', name: 'Semi-Finals', count: 2 },
  { id: 'F', name: 'Final', count: 1 },
];

const CHAMPION_MATCH_ID = 'F-01';

// --- Match Ticket Component ---
interface MatchTicketProps {
  matchId: string;
  team1Id: string | null;
  team2Id: string | null;
  winnerId?: string;
  onPickWinner: (matchId: string, winnerId: string) => void;
  isFinal?: boolean;
}

const MatchTicket = ({ matchId, team1Id, team2Id, winnerId, onPickWinner, isFinal }: MatchTicketProps) => {
  const team1 = TEAMS.find(t => t.id === team1Id);
  const team2 = TEAMS.find(t => t.id === team2Id);
  
  const isCompleted = !!winnerId;

  return (
    <div 
      id={`match-${matchId}`}
      className={`
        relative z-10 flex flex-col items-center justify-center my-4
        ${isFinal ? 'scale-110' : ''}
      `}
    >
      <div className={`
        relative flex items-center bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300
        ${isCompleted ? 'border-slate-600' : 'hover:border-slate-500 hover:shadow-xl'}
        ${isFinal ? 'bg-black border-[#FBBF24]/30 shadow-[#FBBF24]/20' : ''}
      `}>
        {/* Left Side: Team 1 */}
        <button
          onClick={() => team1 && onPickWinner(matchId, team1.id)}
          disabled={!team1 || isCompleted}
          className={`
            flex flex-col items-center justify-center w-24 h-20 p-2 transition-all active:scale-95
            ${winnerId === team1Id ? 'bg-green-900/30' : 'hover:bg-white/5'}
            ${!team1 ? 'opacity-30 cursor-default' : 'cursor-pointer'}
          `}
        >
          {team1 ? (
            <>
              <img src={team1.flagUrl} alt={team1.name} className="w-8 h-8 rounded-full object-cover mb-1 shadow-sm" />
              <span className={`font-display font-bold text-lg ${winnerId === team1Id ? 'text-[#FBBF24]' : 'text-white'}`}>
                {team1.code.toUpperCase()}
              </span>
            </>
          ) : (
             <span className="text-slate-600 font-mono text-xs">TBD</span>
          )}
        </button>

        {/* Center: VS / Divider */}
        <div className="relative w-8 h-full flex items-center justify-center bg-slate-950 border-x border-slate-800">
           <div className="absolute inset-y-0 left-[-4px] w-2 bg-[radial-gradient(circle,transparent_2px,#0f172a_2px)] bg-[length:4px_8px] bg-repeat-y"></div>
           <div className="absolute inset-y-0 right-[-4px] w-2 bg-[radial-gradient(circle,transparent_2px,#0f172a_2px)] bg-[length:4px_8px] bg-repeat-y"></div>
           <span className="text-xs font-bold text-slate-600 -rotate-90">VS</span>
        </div>

        {/* Right Side: Team 2 */}
        <button
          onClick={() => team2 && onPickWinner(matchId, team2.id)}
          disabled={!team2 || isCompleted}
          className={`
            flex flex-col items-center justify-center w-24 h-20 p-2 transition-all active:scale-95
            ${winnerId === team2Id ? 'bg-green-900/30' : 'hover:bg-white/5'}
            ${!team2 ? 'opacity-30 cursor-default' : 'cursor-pointer'}
          `}
        >
          {team2 ? (
            <>
              <img src={team2.flagUrl} alt={team2.name} className="w-8 h-8 rounded-full object-cover mb-1 shadow-sm" />
              <span className={`font-display font-bold text-lg ${winnerId === team2Id ? 'text-[#FBBF24]' : 'text-white'}`}>
                {team2.code.toUpperCase()}
              </span>
            </>
          ) : (
             <span className="text-slate-600 font-mono text-xs">TBD</span>
          )}
        </button>

        {/* Winner Indicator Overlay */}
        {winnerId && (
            <div className={`absolute top-0 bottom-0 w-1 bg-[#FBBF24] ${winnerId === team1Id ? 'left-0' : 'right-0'}`} />
        )}
      </div>
      
      {/* Final Trophy Icon */}
      {isFinal && isCompleted && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -top-6 text-[#FBBF24] text-4xl drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
          >
              <i className="ri-trophy-fill"></i>
          </motion.div>
      )}
    </div>
  );
};

// --- SVG Connectors ---
const BracketConnectors = ({ matches }: { matches: Match[] }) => {
    const [paths, setPaths] = useState<{ d: string, id: string }[]>([]);

    useLayoutEffect(() => {
        const calculatePaths = () => {
            const newPaths: { d: string, id: string }[] = [];
            const container = document.getElementById('bracket-container');
            if (!container) return;

            const containerRect = container.getBoundingClientRect();

            matches.forEach(match => {
                if (!match.nextMatchId) return;

                const currentEl = document.getElementById(`match-${match.id}`);
                const nextEl = document.getElementById(`match-${match.nextMatchId}`);

                if (currentEl && nextEl) {
                    const currentRect = currentEl.getBoundingClientRect();
                    const nextRect = nextEl.getBoundingClientRect();

                    // Calculate positions relative to the scroll container
                    // Note: We need to account for scrollLeft if we want absolute positioning inside the container
                    // BUT, the SVG will be absolute inside the scrollable area, so it moves with content.
                    // We need coordinates relative to the content's top-left corner (including scroll).
                    
                    // Actually, if SVG is child of 'bracket-content' (the width-expanding div), 
                    // we can use offsetLeft/Top logic.
                    
                    const startX = currentRect.right - containerRect.left + container.scrollLeft;
                    const startY = currentRect.top + currentRect.height / 2 - containerRect.top;
                    
                    const endX = nextRect.left - containerRect.left + container.scrollLeft;
                    const endY = nextRect.top + nextRect.height / 2 - containerRect.top;

                    // Elbow / S-Curve Logic
                    const midX = (startX + endX) / 2;
                    
                    // "Sleek Metal Pipe" - Simple Bezier S-curve
                    const d = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
                    
                    newPaths.push({ d, id: `${match.id}-${match.nextMatchId}` });
                }
            });
            setPaths(newPaths);
        };

        calculatePaths();
        window.addEventListener('resize', calculatePaths);
        // Recalculate after a short delay to ensure layout is stable
        const timeout = setTimeout(calculatePaths, 100);
        return () => {
            window.removeEventListener('resize', calculatePaths);
            clearTimeout(timeout);
        };
    }, [matches]);

    return (
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible z-0">
            <defs>
                <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="50%" stopColor="#94a3b8" />
                    <stop offset="100%" stopColor="#334155" />
                </linearGradient>
            </defs>
            {paths.map(path => (
                <path
                    key={path.id}
                    d={path.d}
                    stroke="url(#pipeGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    className="opacity-50"
                />
            ))}
        </svg>
    );
};

// --- Main Component ---
export const BracketView = () => {
  const { groupStandings, thirdPlacePicks, knockoutPicks, setKnockoutPick, currentStep, setCurrentStep } = useGame();
  const [matches, setMatches] = useState<Match[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Bracket Data
  useEffect(() => {
    if (currentStep >= 2 && matches.length === 0) {
      const { roundOf32 } = generateBracketMatches(groupStandings, thirdPlacePicks);
      
      const fullMatches = [...roundOf32];
      
      // R16
      const r16Matches: Match[] = [];
      for (let i = 1; i <= 8; i++) {
        const id = `R16-${i.toString().padStart(2, '0')}`;
        const nextId = `QF-${Math.ceil(i / 2).toString().padStart(2, '0')}`;
        r16Matches.push({ id, team1Id: null, team2Id: null, nextMatchId: nextId });
      }

      // QF
      const qfMatches: Match[] = [];
      for (let i = 1; i <= 4; i++) {
        const id = `QF-${i.toString().padStart(2, '0')}`;
        const nextId = `SF-${Math.ceil(i / 2).toString().padStart(2, '0')}`;
        qfMatches.push({ id, team1Id: null, team2Id: null, nextMatchId: nextId });
      }

      // SF
      const sfMatches: Match[] = [];
      for (let i = 1; i <= 2; i++) {
        const id = `SF-${i.toString().padStart(2, '0')}`;
        const nextId = `F-01`;
        sfMatches.push({ id, team1Id: null, team2Id: null, nextMatchId: nextId });
      }

      // Final
      const fMatches: Match[] = [
        { id: 'F-01', team1Id: null, team2Id: null }
      ];

      setMatches([...fullMatches, ...r16Matches, ...qfMatches, ...sfMatches, ...fMatches]);
    }
  }, [currentStep, groupStandings, thirdPlacePicks]);

  // Helper to resolve teams dynamically
  const getTeamForMatchSlot = (matchId: string, slot: 1 | 2): string | null => {
    const match = matches.find(m => m.id === matchId);
    if (!match) return null;

    if (matchId.startsWith('R32')) {
      return slot === 1 ? match.team1Id : match.team2Id;
    }

    const feedingMatches = matches.filter(m => m.nextMatchId === matchId);
    feedingMatches.sort((a, b) => a.id.localeCompare(b.id));

    if (feedingMatches.length < 2) return null;

    const sourceMatch = slot === 1 ? feedingMatches[0] : feedingMatches[1];
    return knockoutPicks[sourceMatch.id] || null;
  };

  const handlePickWinner = (matchId: string, winnerId: string) => {
    setKnockoutPick(matchId, winnerId);

    // Auto-scroll logic
    if (scrollContainerRef.current) {
        const currentScroll = scrollContainerRef.current.scrollLeft;
        const width = scrollContainerRef.current.clientWidth;
        // Scroll slightly to the right (e.g. 200px) to hint at progress
        scrollContainerRef.current.scrollTo({
            left: currentScroll + 100,
            behavior: 'smooth'
        });
    }

    if (matchId === CHAMPION_MATCH_ID) {
      confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 },
        colors: ['#FBBF24', '#3B82F6'],
        scalar: 1.2,
        zIndex: 2000
      });
    }
  };

  if (matches.length === 0) return null;

  return (
    <div className="w-full h-[100dvh] flex flex-col bg-slate-950 relative">
        {/* Header */}
        <div className="absolute top-4 left-0 right-0 z-30 pointer-events-none text-center">
            <h2 className="text-4xl font-display font-bold text-white drop-shadow-md">OFFICIAL BRACKET</h2>
            <p className="text-slate-400 text-sm mt-1">Scroll horizontal to see finals</p>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
            id="bracket-container"
            ref={scrollContainerRef}
            className="flex-1 w-full overflow-x-auto overflow-y-hidden scrollbar-hide relative cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: 'smooth' }}
        >
            <div className="flex flex-row min-w-max h-full p-8 pt-20 relative">
                
                {/* Connector Layer */}
                <BracketConnectors matches={matches} />

                {/* Columns */}
                {ROUNDS.map((round, roundIdx) => {
                    const roundMatches = matches
                        .filter(m => m.id.startsWith(round.id))
                        .sort((a, b) => a.id.localeCompare(b.id));
                    
                    return (
                        <div 
                            key={round.id} 
                            className={`
                                flex flex-col h-full relative z-10
                                ${roundIdx === 0 ? 'ml-8' : ''}
                                ${roundIdx === ROUNDS.length - 1 ? 'mr-32' : 'mr-16 md:mr-24'}
                            `}
                            style={{ minWidth: '280px' }}
                        >
                            {/* Sticky Header */}
                            <div className="sticky top-0 z-20 text-center mb-8 bg-slate-950/80 backdrop-blur py-2 border-b border-white/10">
                                <span className="font-display font-bold text-xl text-[#FBBF24] uppercase tracking-widest">
                                    {round.name}
                                </span>
                            </div>

                            {/* Match List - Distributed vertically */}
                            <div className="flex flex-col justify-around flex-1 py-4">
                                {roundMatches.map(match => {
                                    const team1Id = getTeamForMatchSlot(match.id, 1);
                                    const team2Id = getTeamForMatchSlot(match.id, 2);
                                    const winnerId = knockoutPicks[match.id];

                                    return (
                                        <MatchTicket
                                            key={match.id}
                                            matchId={match.id}
                                            team1Id={team1Id}
                                            team2Id={team2Id}
                                            winnerId={winnerId}
                                            onPickWinner={handlePickWinner}
                                            isFinal={round.id === 'F'}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        
        {/* Spacer */}
        <div className="h-24"></div>
    </div>
  );
};

export default BracketView;

