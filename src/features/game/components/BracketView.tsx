import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { generateBracketMatches, Match } from '../lib/bracket-logic';
import { getTeamForMatchSlot } from '../lib/bracket-utils';
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
  
  // Keep a ref to picks for the event handler to avoid re-creating it
  const picksRef = useRef(knockoutPicks);
  useEffect(() => {
    picksRef.current = knockoutPicks;
  }, [knockoutPicks]);

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

  const handlePickWinner = useCallback((matchId: string, winnerId: string) => {
    // Access latest picks via ref
    const currentPicks = picksRef.current;
    
    // If pick hasn't changed, do nothing
    if (currentPicks[matchId] === winnerId) return;

    // Identify downstream matches to clear
    const matchesToClear: Record<string, string> = {};
    
    // We need to find the match in the matches array. 
    // Since matches state is local and stable (only set once), we can use it from closure 
    // OR we can use a ref for matches if we want to be super safe, but matches don't change after init.
    // However, `matches` is in the dependency list of the effect that sets it.
    // To be safe, let's assume we can access `matches` from closure, but we need to ensure `matches` 
    // is included in useCallback dependencies if we use it. 
    // BUT `matches` changes only on init.
    
    // Wait, we can't access `matches` inside useCallback if it's not in dependencies.
    // And if we add it, handlePickWinner changes when matches changes (which is once).
    // So that's fine.
    
    // Wait, `matches` state is initialized empty, then populated. 
    // So handlePickWinner will update once when matches are populated.
    
    // To traverse, we need the match object.
    // We can find it in the `matches` array.
    // We can also optimize by creating a map of ID -> Match, but array find is fast enough for 64 items.
    
    // We need to find the match object from the array in the closure scope.
    // Let's use a functional update or just access the state variable.
    // Since we are inside the component, we can access `matches`.
    
    // Re-implement logic using current `matches` state
    let currentMatch = matches.find(m => m.id === matchId);
    
    while (currentMatch && currentMatch.nextMatchId) {
      const nextId = currentMatch.nextMatchId;
      // Only clear if it currently has a value
      if (currentPicks[nextId]) {
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
  }, [matches, updateKnockoutPicks]); // matches is stable after init, updateKnockoutPicks is stable (now)

  if (matches.length === 0) return null;

  const runnerUpId = showSummary ? (getTeamForMatchSlot('F-01', 1, matches, knockoutPicks) === showSummary ? getTeamForMatchSlot('F-01', 2, matches, knockoutPicks) : getTeamForMatchSlot('F-01', 1, matches, knockoutPicks)) : '';

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
                    onComplete={() => setCurrentStep(3)}
                    currentRoundIndex={bracketRoundIndex}
                />
            ) : (
                <BracketDesktop
                    matches={matches}
                    knockoutPicks={knockoutPicks}
                    onPickWinner={handlePickWinner}
                />
            )}
        </div>
    </div>
    </>
  );
};

export default BracketView;
