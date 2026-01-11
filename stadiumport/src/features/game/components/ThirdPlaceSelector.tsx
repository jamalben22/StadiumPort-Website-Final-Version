import React, { useMemo, useCallback } from 'react';
import Image from 'next/image';
import { useGame } from '../context/GameContext';
import { TEAMS, TEAM_MAP } from '../lib/wc26-data';
import { motion } from 'framer-motion';
import { SEO } from '../../../components/common/SEO';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';

interface ThirdPlaceCardProps {
  groupId: string;
  team: typeof TEAMS[0];
  isSelected: boolean;
  isLockedOut: boolean;
  onToggle: (teamId: string) => void;
}

const ThirdPlaceCard = React.memo(({ groupId, team, isSelected, isLockedOut, onToggle }: ThirdPlaceCardProps) => {
  return (
    <motion.div
      layout
      onClick={() => !isLockedOut && onToggle(team.id)}
      whileHover={!isLockedOut ? { scale: isSelected ? 1.08 : 0.98 } : {}}
      whileTap={!isLockedOut ? { scale: 0.95 } : {}}
      className={`
        relative cursor-pointer group h-64 md:h-80 rounded-xl overflow-hidden transition-all duration-300 ease-out min-h-[44px] min-w-[44px]
        ${isSelected 
          ? 'z-10 ring-2 ring-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.4)] grayscale-0 brightness-110 scale-105' 
          : isLockedOut
            ? 'grayscale opacity-30 scale-90 cursor-not-allowed'
            : 'grayscale brightness-100 scale-95 hover:brightness-110 hover:scale-100 border border-white/10'
        }
      `}
    >
      {/* Background Image/Flag */}
      <div className="absolute inset-0 bg-[#0A0A0C]">
          {/* Large faded flag background */}
          {['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team.id) ? (
             <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-10">
                <span className="text-6xl font-black text-white/20">FIFA</span>
             </div>
          ) : (
             <Image 
               src={team.flagUrl} 
               alt={team.name} 
               fill
               className="object-cover opacity-20 mix-blend-overlay"
               sizes="(max-width: 768px) 50vw, 33vw"
             />
          )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent opacity-80" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
      </div>

      {/* Card Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        {/* Top: Group Badge */}
        <div className="flex justify-between items-start">
          <div className={`
            px-2 py-1 text-[10px] font-bold font-mono rounded border uppercase tracking-widest
            ${isSelected 
              ? 'bg-amber-500 text-black border-amber-400' 
              : 'bg-white/5 text-slate-300 border-white/10 backdrop-blur-md'}
          `}>
            GROUP {groupId}
          </div>
          
          {isSelected && (
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }}
              className="bg-amber-500 text-black rounded-full p-1 shadow-lg"
            >
              <i className="ri-check-line font-bold"></i>
            </motion.div>
          )}
        </div>

        {/* Center: Team Flag (Clean) */}
        <div className="self-center transform transition-transform duration-500 group-hover:scale-110">
            {['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team.id) ? (
               <div className={`
                 w-20 h-20 rounded-full flex items-center justify-center bg-slate-800 shadow-2xl border-4
                 ${isSelected ? 'border-amber-400' : 'border-slate-700'}
               `}>
                  <span className="text-xs font-bold text-slate-100">FIFA</span>
               </div>
            ) : (
                <Image 
                src={team.flagUrl} 
                alt={team.name} 
                width={80}
                height={80}
                className={`
                  rounded-full object-cover shadow-2xl border-4 
                  ${isSelected ? 'border-amber-400' : 'border-white/20'}
                `}
              />
            )}
        </div>

        {/* Bottom: Team Name */}
        <div className="text-center space-y-1">
          <h4 className={`
            font-['Teko'] text-2xl uppercase tracking-wider leading-none transition-colors
            ${isSelected ? 'text-amber-400' : 'text-white'}
          `}>
            {team.name}
          </h4>
          <p className="text-[10px] font-bold font-['Rajdhani'] text-slate-400 uppercase tracking-[0.2em]">
            {team.fifaCode || team.region}
          </p>
        </div>
      </div>
      
      {/* Scanline effect for unselected */}
      {!isSelected && (
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMSAxSDJWMkgxVjFabTEgMUgyVjNIMlYyIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-10 pointer-events-none" />
      )}
    </motion.div>
  );
});

export const ThirdPlaceSelector = React.memo(() => {
  const { groupStandings, thirdPlacePicks, setThirdPlacePicks } = useGame();
  
  // 1. Identify the 12 teams in 3rd position
  const thirdPlaceTeams = useMemo(() => Object.entries(groupStandings).map(([groupId, teamIds]) => {
    const teamId = teamIds[2]; // 3rd team (index 2)
    const team = teamId ? TEAM_MAP.get(teamId) : undefined;
    return { groupId, team };
  }).filter(item => item.team !== undefined) as { groupId: string, team: typeof TEAMS[0] }[], [groupStandings]);

  const selectedCount = thirdPlacePicks.length;
  const isComplete = selectedCount === 8;

  // Sound Optimization: Reuse AudioContext
  const audioCtxRef = React.useRef<AudioContext | null>(null);

  const playClickSound = useCallback(() => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      
      const ctx = audioCtxRef.current;
      // Resume if suspended (browser policy)
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

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
    } catch (_) {
      // Audio autoplay might be blocked or not supported
    }
  }, []);

  const toggleSelection = useCallback((teamId: string) => {
    if (thirdPlacePicks.includes(teamId)) {
      // Deselect
      playClickSound();
      setThirdPlacePicks(thirdPlacePicks.filter((id: string) => id !== teamId));
    } else {
      // Select (only if under limit)
      if (selectedCount < 8) {
        playClickSound();
        setThirdPlacePicks([...thirdPlacePicks, teamId]);
      }
    }
  }, [thirdPlacePicks, selectedCount, setThirdPlacePicks, playClickSound]);

  return (
    <>
      <SEO 
        title="Select Best Third Place Teams | World Cup 2026 Prediction"
        description="Choose the 8 best third-place teams to advance to the knockout rounds. The new 2026 World Cup format makes every match count!"
        keywords={["third place qualifiers", "world cup 2026 format", "bracket challenge rules", "FIFA 2026 prediction"]}
        url="/world-cup-2026-prediction-game/third-place-qualifiers"
      />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Select Best Third Place Teams",
        "description": "Interactive selection tool for World Cup 2026 third-place qualifiers.",
        "url": "https://stadiumport.com/world-cup-2026-prediction-game/third-place-qualifiers",
        "isPartOf": {
          "@type": "SportsEvent",
          "name": "World Cup 2026 Prediction Game"
        }
      }} />
    <div className="w-full px-4 py-8 space-y-8 pb-8">
      <div className="max-w-7xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-[0.22em] font-['Rajdhani']">
            Step 2 of 5: Select Best Third-Place Qualifiers
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter drop-shadow-sm">
          Third-Place Qualifiers: Pick the 8 Teams Advancing to Round of 32
        </h2>
        
        {/* Progress Bar Counter */}
        <div className="flex items-center justify-center gap-2 md:gap-3">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`
                h-4 w-8 md:w-12 skew-x-[-20deg] border border-white/10 transition-all duration-300
                ${i < selectedCount 
                  ? 'bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)] border-yellow-200' 
                  : 'bg-white/5 backdrop-blur-sm'
                }
              `}
            />
          ))}
        </div>
        
        <p className="text-slate-200 font-mono text-sm uppercase tracking-widest font-bold">
          {selectedCount} / 8 Third-Place Teams Selected
        </p>
      </div>

      {/* Character Select Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {thirdPlaceTeams.map(({ groupId, team }) => {
          const isSelected = thirdPlacePicks.includes(team.id);
          // If not selected and we have 8 picks, dim it out but keep it interactive-ish (maybe showing it's disabled)
          const isLockedOut = !isSelected && selectedCount >= 8;

          return (
            <ThirdPlaceCard
              key={team.id}
              groupId={groupId}
              team={team}
              isSelected={isSelected}
              isLockedOut={isLockedOut}
              onToggle={toggleSelection}
            />
          );
        })}
      </div>

      </div>

      {/* Spacer */}
      <div className="h-32"></div>
    </div>
    </>
  );
});

export default ThirdPlaceSelector;
