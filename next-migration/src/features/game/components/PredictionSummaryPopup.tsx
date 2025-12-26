import React from 'react';
import { motion } from 'framer-motion';
import { TEAMS } from '../lib/wc26-data';
import { useGame } from '../context/GameContext';

interface PredictionSummaryPopupProps {
  winnerId: string;
  runnerUpId: string;
  onConfirm: () => void;
  onCancel?: () => void; // Optional if we want to allow going back to edit
}

export const PredictionSummaryPopup = ({
  winnerId,
  runnerUpId,
  onConfirm,
  onCancel
}: PredictionSummaryPopupProps) => {
  const { groupStandings, thirdPlacePicks, knockoutPicks } = useGame();

  const winner = TEAMS.find(t => t.id === winnerId);
  const runnerUp = TEAMS.find(t => t.id === runnerUpId);

  if (!winner || !runnerUp) return null;

  // Get Semi-Finalists (Losers of SF matches)
  // SF matches are usually SF-01 and SF-02.
  // We need to find the matches that lead to the final.
  // But simpler: The semi-finalists are the 4 teams in the SF round.
  // We can deduce them or just look at the SF match IDs if we had the structure handy.
  // Alternatively, just skip specific SF display if it's too complex to derive here, 
  // but the user asked for "Summary".
  // Let's focus on Groups and 3rd Place as requested, and the Final.

  const sortedGroupIds = Object.keys(groupStandings).sort();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-start md:items-center p-4 md:p-8 bg-transparent backdrop-blur-sm md:backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        className="w-full max-w-[95vw] md:max-w-5xl bg-[#1c1c1e] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-6 md:my-0"
      >
        {/* Header */}
        <div className="flex-none px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent flex justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-['Teko'] font-bold uppercase tracking-wide text-white">
              Prediction Summary
            </h2>
            <p className="text-white/40 text-xs sm:text-sm font-['Rajdhani'] font-medium uppercase tracking-widest">
              Review your tournament journey
            </p>
          </div>
          {onCancel && (
            <button 
              onClick={onCancel}
              className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              Edit Predictions
            </button>
          )}
        </div>

        <div className="flex-1 p-4 sm:p-6 md:p-8 custom-scrollbar overflow-visible">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            
            {/* 1. The Final (Hero) */}
            <div className="relative bg-gradient-to-b from-white/5 to-transparent rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 text-center overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-[#FBBF24]/5 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-block mb-4 sm:mb-5 md:mb-6 px-3 sm:px-4 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/20">
                  <span className="text-[#FBBF24] text-xs font-bold font-['Rajdhani'] uppercase tracking-[0.2em]">
                    World Cup 2026 Champion
                  </span>
                </div>

                <div className="flex items-center justify-center gap-6 md:gap-16">
                  {/* Winner */}
                  <div className="flex flex-col items-center group">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 mb-3 sm:mb-4 shadow-[0_0_30px_rgba(251,191,36,0.3)] rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-[#FBBF24] transform transition-transform group-hover:scale-105">
                      {winner?.flagUrl && <img src={winner.flagUrl} alt={winner.name} className="w-full h-full object-cover" />}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-black font-['Teko'] text-white uppercase tracking-wide">
                      {winner.name}
                    </h3>
                  </div>

                  <div className="flex flex-col items-center opacity-50">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-['Teko'] text-white/20 font-bold">VS</span>
                  </div>

                  {/* Runner Up */}
                  <div className="flex flex-col items-center opacity-80 scale-90">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 mb-3 sm:mb-4 shadow-lg rounded-full overflow-hidden border-2 border-white/20 grayscale-[50%]">
                      {runnerUp?.flagUrl && <img src={runnerUp.flagUrl} alt={runnerUp.name} className="w-full h-full object-cover" />}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-3xl font-bold font-['Teko'] text-white/60 uppercase tracking-wide">
                      {runnerUp.name}
                    </h3>
                    <span className="text-[10px] sm:text-xs font-['Rajdhani'] font-bold uppercase tracking-widest text-white/30 mt-1">
                      Runner-Up
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Group Stage Summary */}
            <div>
              <h4 className="text-base sm:text-lg font-['Rajdhani'] font-bold uppercase tracking-widest text-white/60 mb-3 sm:mb-4 border-b border-white/10 pb-2">
                Group Stage Qualifiers
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                {sortedGroupIds.map(groupId => {
                  const groupTeams = groupStandings[groupId] || [];
                  const first = TEAMS.find(t => t.id === groupTeams[0]);
                  const second = TEAMS.find(t => t.id === groupTeams[1]);
                  
                  if (!first || !second) return null;

                  return (
                    <div key={groupId} className="bg-white/5 rounded-xl p-2 sm:p-3 border border-white/5 flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs font-bold text-white/30 w-4">
                        {groupId}
                      </span>
                      <div className="flex items-center gap-2">
                         {first?.flagUrl && <img src={first.flagUrl} alt={`1st Place: ${first.name}`} className="w-5 h-3 sm:w-6 sm:h-4 object-cover rounded shadow-sm" title={`1st: ${first.name}`} />}
                         {second?.flagUrl && <img src={second.flagUrl} alt={`2nd Place: ${second.name}`} className="w-5 h-3 sm:w-6 sm:h-4 object-cover rounded shadow-sm opacity-70" title={`2nd: ${second.name}`} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Third Place Qualifiers */}
            <div>
              <h4 className="text-base sm:text-lg font-['Rajdhani'] font-bold uppercase tracking-widest text-white/60 mb-3 sm:mb-4 border-b border-white/10 pb-2">
                Third Place Qualifiers (Best 3rd Place)
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {thirdPlacePicks.map(teamId => {
                  const team = TEAMS.find(t => t.id === teamId);
                  if (!team) return null;
                  return (
                    <div key={teamId} className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                      {team.flagUrl && <img src={team.flagUrl} alt={`${team.name} Flag`} className="w-4 h-3 sm:w-5 sm:h-3 object-cover rounded" />}
                      <span className="text-[10px] sm:text-xs font-bold text-amber-200/80 uppercase tracking-wider">
                        {team.fifaCode}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        
      </motion.div>
    </motion.div>
  );
};
