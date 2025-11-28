import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { useGame } from '../context/GameContext';
import { generateBracketMatches, Match } from '../lib/bracket-logic';
import { BracketMobile } from './BracketMobile';
import { BracketDesktop } from './BracketDesktop';

const CHAMPION_MATCH_ID = 'F-01';

// --- Helper Hook ---
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
};

// --- Main Component ---
interface BracketViewProps {
  bracketRoundIndex?: number;
  setBracketRoundIndex?: React.Dispatch<React.SetStateAction<number>>;
}

export const BracketView = ({ bracketRoundIndex = 0, setBracketRoundIndex }: BracketViewProps) => {
  const { groupStandings, thirdPlacePicks, knockoutPicks, setKnockoutPick, currentStep, setCurrentStep } = useGame();
  const [matches, setMatches] = useState<Match[]>([]);
  const isMobile = useMediaQuery('(max-width: 768px)');

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
    <div className="w-full min-h-screen flex flex-col bg-transparent relative">
        {/* Render appropriate view based on device */}
        <div className="relative z-10 w-full flex-1">
            {isMobile ? (
                <BracketMobile 
                    matches={matches}
                    knockoutPicks={knockoutPicks}
                    onPickWinner={handlePickWinner}
                    getTeamForMatchSlot={getTeamForMatchSlot}
                    onComplete={() => setCurrentStep(3)}
                    currentRoundIndex={bracketRoundIndex}
                />
            ) : (
                <BracketDesktop
                    matches={matches}
                    knockoutPicks={knockoutPicks}
                    onPickWinner={handlePickWinner}
                    getTeamForMatchSlot={getTeamForMatchSlot}
                />
            )}
        </div>
    </div>
  );
};

export default BracketView;
