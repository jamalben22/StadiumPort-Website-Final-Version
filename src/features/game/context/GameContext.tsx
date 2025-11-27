import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GROUPS } from '../lib/wc26-data';

// Define the shape of the state
interface GameState {
  groupStandings: Record<string, string[]>; // Group ID -> Array of Team IDs (ordered)
  thirdPlacePicks: string[]; // Array of Team IDs selected as best 3rd place
  knockoutPicks: Record<string, string>; // Match ID -> Winner Team ID
  currentStep: number; // 0 = Groups, 1 = 3rd Place, 2 = Bracket, 3 = Result
}

// Define the shape of the context (State + Actions)
interface GameContextType extends GameState {
  updateGroupStandings: (groupId: string, teams: string[]) => void;
  setThirdPlacePicks: (teamIds: string[]) => void;
  setKnockoutPick: (matchId: string, winnerId: string) => void;
  setCurrentStep: (step: number) => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  // Initialize group standings with the default groups
  const [groupStandings, setGroupStandingsState] = useState<Record<string, string[]>>(GROUPS);
  const [thirdPlacePicks, setThirdPlacePicksState] = useState<string[]>([]);
  const [knockoutPicks, setKnockoutPicksState] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState<number>(0);

  const updateGroupStandings = (groupId: string, teams: string[]) => {
    setGroupStandingsState((prev) => ({
      ...prev,
      [groupId]: teams,
    }));
  };

  const setThirdPlacePicks = (teamIds: string[]) => {
    setThirdPlacePicksState(teamIds);
  };

  const setKnockoutPick = (matchId: string, winnerId: string) => {
    setKnockoutPicksState((prev) => ({
      ...prev,
      [matchId]: winnerId,
    }));
  };

  const resetGame = () => {
    setGroupStandingsState(GROUPS);
    setThirdPlacePicksState([]);
    setKnockoutPicksState({});
    setCurrentStep(0);
  };

  const value: GameContextType = {
    groupStandings,
    thirdPlacePicks,
    knockoutPicks,
    currentStep,
    updateGroupStandings,
    setThirdPlacePicks,
    setKnockoutPick,
    setCurrentStep,
    resetGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
