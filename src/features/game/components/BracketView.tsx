import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { generateBracketMatches, Match } from '../lib/bracket-logic';
import { BracketMobile } from './BracketMobile';
import { BracketDesktop } from './BracketDesktop';
import { PredictionSummaryPopup } from './PredictionSummaryPopup';
import { TEAMS } from '../lib/wc26-data';
import { SEO } from '../../../components/common/SEO';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';

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
  const { groupStandings, thirdPlacePicks, knockoutPicks, setKnockoutPick, updateKnockoutPicks, currentStep, setCurrentStep } = useGame();
  const [matches, setMatches] = useState<Match[]>([]);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [showSummary, setShowSummary] = useState<string | null>(null);

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
    // If pick hasn't changed, do nothing
    if (knockoutPicks[matchId] === winnerId) return;

    // Identify downstream matches to clear
    const matchesToClear: Record<string, string> = {};
    let currentMatch = matches.find(m => m.id === matchId);
    
    while (currentMatch && currentMatch.nextMatchId) {
      const nextId = currentMatch.nextMatchId;
      // Only clear if it currently has a value
      if (knockoutPicks[nextId]) {
        matchesToClear[nextId] = "";
      }
      currentMatch = matches.find(m => m.id === nextId);
    }

    // Batch update: Set new winner, clear downstream
    updateKnockoutPicks({
      [matchId]: winnerId,
      ...matchesToClear
    });

    if (matchId === CHAMPION_MATCH_ID) {
      setShowSummary(winnerId);
    }
  };

  if (matches.length === 0) return null;

  const runnerUpId = showSummary ? (getTeamForMatchSlot('F-01', 1) === showSummary ? getTeamForMatchSlot('F-01', 2) : getTeamForMatchSlot('F-01', 1)) : '';

  return (
    <>
      <SEO 
        title="World Cup 2026 Knockout Bracket | Predict Every Match"
        description="Predict the entire World Cup 2026 knockout stage! From the Round of 32 to the Final, pick the winners and crown your champion."
        keywords={["World Cup 2026 knockout bracket", "bracket predictor", "round of 32", "world cup final prediction", "soccer bracket game"]}
        url="/world-cup-2026-prediction-game/knockout-bracket"
      />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "World Cup 2026 Knockout Bracket",
        "description": "Interactive knockout stage bracket for World Cup 2026.",
        "url": "https://stadiumport.com/world-cup-2026-prediction-game/knockout-bracket",
        "isPartOf": {
          "@type": "SportsEvent",
          "name": "World Cup 2026 Prediction Game"
        }
      }} />
    <div className="w-full min-h-screen flex flex-col bg-transparent relative">
        <AnimatePresence>
          {showSummary && runnerUpId && (
            <PredictionSummaryPopup 
              winnerId={showSummary}
              runnerUpId={runnerUpId}
              onConfirm={() => {
                setShowSummary(null);
                setCurrentStep(3);
              }}
              onCancel={() => setShowSummary(null)}
            />
          )}
        </AnimatePresence>

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
    </>
  );
};

export default BracketView;
