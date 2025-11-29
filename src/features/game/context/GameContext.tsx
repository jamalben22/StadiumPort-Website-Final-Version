import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GROUPS } from '../lib/wc26-data';

// Define the shape of the state
interface GameState {
  groupStandings: Record<string, string[]>; // Group ID -> Array of Team IDs (ordered)
  thirdPlacePicks: string[]; // Array of Team IDs selected as best 3rd place
  knockoutPicks: Record<string, string>; // Match ID -> Winner Team ID
  currentStep: number; // 0 = Groups, 1 = 3rd Place, 2 = Bracket, 3 = Result
  completedGroupIds: string[]; // List of completed group IDs
}

// Define the shape of the context (State + Actions)
interface GameContextType extends GameState {
  updateGroupStandings: (groupId: string, teams: string[]) => void;
  setThirdPlacePicks: (teamIds: string[]) => void;
  setKnockoutPick: (matchId: string, winnerId: string) => void;
  updateKnockoutPicks: (updates: Record<string, string>) => void; // New: Batch update
  setCurrentStep: (step: number) => void;
  markGroupCompleted: (groupId: string) => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  // Initialize group standings with the default groups
  const [groupStandings, setGroupStandingsState] = useState<Record<string, string[]>>(GROUPS);
  const [thirdPlacePicks, setThirdPlacePicksState] = useState<string[]>([]);
  const [knockoutPicks, setKnockoutPicksState] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [completedGroupIds, setCompletedGroupIds] = useState<string[]>([]);

  const updateGroupStandings = React.useCallback((groupId: string, teams: string[]) => {
    setGroupStandingsState((prev) => ({
      ...prev,
      [groupId]: teams,
    }));
  }, []);

  const setThirdPlacePicks = React.useCallback((teamIds: string[]) => {
    setThirdPlacePicksState(teamIds);
  }, []);

  const setKnockoutPick = React.useCallback((matchId: string, winnerId: string) => {
    setKnockoutPicksState((prev) => ({
      ...prev,
      [matchId]: winnerId,
    }));
  }, []);

  const updateKnockoutPicks = React.useCallback((updates: Record<string, string>) => {
    setKnockoutPicksState((prev) => {
      // Merge updates. If value is empty string, we can interpret as delete?
      // For now, simple merge is fine, but if we need to delete, we might need a different signal.
      // Let's assume we overwrite. If we need to clear, we can pass null?
      // But state is Record<string, string>.
      // Let's say if value is empty string "", we delete the key.
      
      const next = { ...prev };
      Object.entries(updates).forEach(([key, value]) => {
        if (value === "") {
          delete next[key];
        } else {
          next[key] = value;
        }
      });
      return next;
    });
  }, []);

  const markGroupCompleted = React.useCallback((groupId: string) => {
    setCompletedGroupIds((prev) => {
      if (prev.includes(groupId)) return prev;
      return [...prev, groupId];
    });
  }, []);

  const resetGame = React.useCallback(() => {
    setGroupStandingsState(GROUPS);
    setThirdPlacePicksState([]);
    setKnockoutPicksState({});
    setCurrentStep(0);
    setCompletedGroupIds([]);
  }, []);

  const value: GameContextType = React.useMemo(() => ({
    groupStandings,
    thirdPlacePicks,
    knockoutPicks,
    currentStep,
    completedGroupIds,
    updateGroupStandings,
    setThirdPlacePicks,
    setKnockoutPick,
    updateKnockoutPicks,
    setCurrentStep,
    markGroupCompleted,
    resetGame,
  }), [
    groupStandings,
    thirdPlacePicks,
    knockoutPicks,
    currentStep,
    completedGroupIds
  ]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
