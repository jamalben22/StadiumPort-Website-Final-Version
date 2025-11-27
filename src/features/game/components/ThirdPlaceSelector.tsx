import React from 'react';
import { useGame } from '../context/GameContext';
import { TEAMS } from '../lib/wc26-data';
import { motion, AnimatePresence } from 'framer-motion';

export const ThirdPlaceSelector = () => {
  const { groupStandings, thirdPlacePicks, setThirdPlacePicks, setCurrentStep } = useGame();
  
  // 1. Identify the 12 teams in 3rd position
  const thirdPlaceTeams = Object.entries(groupStandings).map(([groupId, teamIds]) => {
    const teamId = teamIds[2]; // 3rd team (index 2)
    const team = TEAMS.find(t => t.id === teamId);
    return { groupId, team };
  }).filter(item => item.team !== undefined) as { groupId: string, team: typeof TEAMS[0] }[];

  const selectedCount = thirdPlacePicks.length;
  const isComplete = selectedCount === 8;

  const playClickSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      // High-pitch "digital" blip
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);
      
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Audio autoplay might be blocked or not supported
    }
  };

  const toggleSelection = (teamId: string) => {
    if (thirdPlacePicks.includes(teamId)) {
      // Deselect
      playClickSound();
      setThirdPlacePicks(thirdPlacePicks.filter(id => id !== teamId));
    } else {
      // Select (only if under limit)
      if (selectedCount < 8) {
        playClickSound();
        setThirdPlacePicks([...thirdPlacePicks, teamId]);
      }
    }
  };

  const handleNext = () => {
    if (isComplete) {
      playClickSound();
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-[100dvh] overflow-y-auto px-4 py-8 space-y-8 pb-32 scrollbar-hide">
      <div className="max-w-7xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Select Squad
        </h2>
        
        {/* Progress Bar Counter */}
        <div className="flex items-center justify-center gap-2 md:gap-3">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`
                h-4 w-8 md:w-12 skew-x-[-20deg] border border-white/20 transition-all duration-300
                ${i < selectedCount 
                  ? 'bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)] border-yellow-200' 
                  : 'bg-black/40 backdrop-blur-sm'
                }
              `}
            />
          ))}
        </div>
        
        <p className="text-slate-400 font-mono text-sm uppercase tracking-widest">
          {selectedCount} / 8 Candidates Selected
        </p>
      </div>

      {/* Character Select Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {thirdPlaceTeams.map(({ groupId, team }) => {
          const isSelected = thirdPlacePicks.includes(team.id);
          // If not selected and we have 8 picks, dim it out but keep it interactive-ish (maybe showing it's disabled)
          const isLockedOut = !isSelected && selectedCount >= 8;

          return (
            <motion.div
              key={team.id}
              layout
              onClick={() => !isLockedOut && toggleSelection(team.id)}
              whileHover={!isLockedOut ? { scale: isSelected ? 1.08 : 0.98 } : {}}
              whileTap={!isLockedOut ? { scale: 0.95 } : {}}
              className={`
                relative cursor-pointer group h-64 md:h-80 rounded-xl overflow-hidden transition-all duration-300 ease-out
                ${isSelected 
                  ? 'z-10 ring-2 ring-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.3)] grayscale-0 brightness-110 scale-105' 
                  : isLockedOut
                    ? 'grayscale opacity-30 scale-90 cursor-not-allowed'
                    : 'grayscale brightness-50 scale-95 hover:brightness-75 hover:scale-100 border border-white/10'
                }
              `}
            >
              {/* Background Image/Flag */}
              <div className="absolute inset-0 bg-slate-900">
                 {/* Large faded flag background */}
                 <img 
                  src={team.flagUrl} 
                  alt={team.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                {/* Top: Group Badge */}
                <div className="flex justify-between items-start">
                  <div className={`
                    px-2 py-1 text-xs font-bold font-mono rounded border
                    ${isSelected 
                      ? 'bg-yellow-500 text-black border-yellow-400' 
                      : 'bg-black/60 text-slate-400 border-white/10'}
                  `}>
                    GRP {groupId}
                  </div>
                  
                  {isSelected && (
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }}
                      className="bg-yellow-500 text-black rounded-full p-1 shadow-lg"
                    >
                      <i className="ri-check-line font-bold"></i>
                    </motion.div>
                  )}
                </div>

                {/* Center: Team Flag (Clean) */}
                <div className="self-center transform transition-transform duration-500 group-hover:scale-110">
                   <img 
                    src={team.flagUrl} 
                    alt={team.name} 
                    className={`
                      w-20 h-20 rounded-full object-cover shadow-2xl border-4 
                      ${isSelected ? 'border-yellow-400' : 'border-slate-700'}
                    `}
                  />
                </div>

                {/* Bottom: Name */}
                <div className="text-center">
                  <h3 className={`
                    font-display font-bold text-2xl uppercase tracking-tighter leading-none mb-1
                    ${isSelected ? 'text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]' : 'text-slate-300'}
                  `}>
                    {team.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wide">
                    {team.region}
                  </p>
                </div>
              </div>
              
              {/* Scanline effect for unselected */}
              {!isSelected && (
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMSAxSDJWMkgxVjFabTEgMUgyVjNIMlYyIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-30 pointer-events-none" />
              )}
            </motion.div>
          );
        })}
      </div>

      </div>
      
      {/* Spacer */}
      <div className="h-32"></div>
    </div>
  );
};

export default ThirdPlaceSelector;

