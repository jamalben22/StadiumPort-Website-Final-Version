import React, { useMemo } from 'react';
import Image from 'next/image';
import { TEAM_MAP } from '../lib/wc26-data';

interface BracketMatchCardProps {
  matchId: string;
  team1Id: string | null;
  team2Id: string | null;
  winnerId?: string;
  onPickWinner: (matchId: string, winnerId: string) => void;
  className?: string;
  showCode?: boolean;
  compact?: boolean;
}

interface TeamRowProps {
  team: { id: string; name: string; fifaCode: string; flagUrl: string } | undefined;
  isTop: boolean;
  isWinner: boolean;
  isLoser: boolean;
  matchId: string;
  onPick: (matchId: string, teamId: string) => void;
  compact: boolean;
  showCode: boolean;
}

const TeamRow = React.memo(({ 
  team, 
  isTop, 
  isWinner, 
  isLoser, 
  matchId, 
  onPick, 
  compact, 
  showCode 
}: TeamRowProps) => {
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (team) onPick(matchId, team.id);
  };

  const containerClasses = `
    group relative flex items-center gap-4 w-full transition-all duration-300
    overflow-hidden flex-1
    ${compact ? 'py-1 px-3' : 'px-4 py-2'}
    ${isTop ? 'border-b border-white/10' : ''}
    ${isWinner 
      ? 'bg-gradient-to-r from-amber-500 to-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.4)] z-10' 
      : isLoser 
        ? 'opacity-40 grayscale hover:opacity-80 hover:grayscale-0' 
        : 'hover:bg-white/5'
    }
    ${!team ? 'cursor-default' : 'cursor-pointer'}
  `;

  return (
    <button
      onClick={handleClick}
      disabled={!team}
      className={containerClasses}
      style={{ style: { willChange: 'transform, opacity' } } as any}
    >
      {/* Active State Effects (Winner) */}
      {isWinner && (
         <>
           {/* Shine Effect */}
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-[-100%] animate-shimmer" />
           {/* Noise Texture */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" />
         </>
      )}

      {team ? (
        <>
           {/* Flag */}
           {['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team.id) ? (
             <div className={`
                 rounded-full flex-shrink-0 bg-white/10 flex items-center justify-center text-[8px] font-bold text-white
                 ${compact ? 'w-6 h-6' : 'w-8 h-8'}
             `}>FIFA</div>
           ) : (
             <div className={`relative flex-shrink-0 ${compact ? 'w-6 h-6' : 'w-8 h-8'}`}>
               <Image 
                 src={team.flagUrl} 
                 alt={team.name} 
                 fill
                 className="rounded-full object-cover shadow-sm ring-1 ring-white/20"
               />
             </div>
           )}
            
            {/* Name & Code */}
            <div className={`flex items-center flex-1 min-w-0 z-10 relative ${compact ? 'gap-2' : 'gap-3'}`}>
                {showCode && (
                    <span className={`
                      font-['Teko'] leading-none uppercase tracking-wide transition-all duration-300 flex-shrink-0
                      ${compact ? 'text-base' : 'text-xl'}
                      ${isWinner 
                          ? 'text-black font-bold drop-shadow-sm' 
                          : 'text-white group-hover:text-amber-400 font-semibold'
                      }
                    `}>
                      {team.fifaCode}
                    </span>
                )}
                <span className={`
                  font-['Teko'] uppercase truncate text-left transition-colors duration-300 tracking-wide
                  ${compact ? 'text-sm' : 'text-lg'}
                  ${isWinner ? 'text-black font-semibold' : 'text-slate-200 group-hover:text-white font-medium'}
                `}>
                  {team.name}
                </span>
            </div>

          {/* Winner Indicator */}
          {isWinner && (
            <div className={`
                z-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm
                ${compact ? 'w-4 h-4' : 'w-6 h-6'}
            `}>
                <i className={`ri-check-line text-black font-bold ${compact ? 'text-[10px]' : 'text-sm'}`}></i>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-8 flex items-center justify-center relative overflow-hidden rounded bg-white/5 border border-dashed border-white/10 group-hover:border-white/20 transition-colors">
          {/* Subtle Pulse Background */}
          <div className="absolute inset-0 bg-white/5 animate-pulse" />
          
          {/* HUD Scan Line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[50%] -skew-x-12 translate-x-[-150%] animate-[shimmer_3s_infinite]" />

          <span className={`
                  relative z-10 font-['Teko'] tracking-[0.15em] uppercase text-white/40 font-bold
                  flex items-center gap-2
                  ${compact ? 'text-xs' : 'text-sm'}
                `}>
                  <i className="ri-loader-4-line animate-spin text-[10px]"></i>
                  Waiting...
                </span>
        </div>
      )}
    </button>
  );
});

export const BracketMatchCard = React.memo(({
  matchId,
  team1Id,
  team2Id,
  winnerId,
  onPickWinner,
  className = '',
  showCode = true,
  compact = false
}: BracketMatchCardProps) => {
  const team1 = useMemo(() => team1Id ? TEAM_MAP.get(team1Id) : undefined, [team1Id]);
  const team2 = useMemo(() => team2Id ? TEAM_MAP.get(team2Id) : undefined, [team2Id]);
  const isCompleted = !!winnerId;

  return (
    <div 
      className={`
        relative flex flex-col w-full rounded-lg overflow-hidden
        bg-[#0A0A0C] border border-white/10
        backdrop-blur-xl shadow-2xl
        transition-all duration-500
        ${winnerId ? 'ring-2 ring-amber-500/50' : 'hover:scale-[1.01] hover:shadow-2xl hover:border-white/20'}
        ${className}
      `}
      style={{ willChange: 'transform, box-shadow' }}
    >
        {/* PREMIUM BACKGROUND LAYERS */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b] -z-10" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay -z-10" />
        
        {/* Top Gloss Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
        
        <TeamRow 
          team={team1} 
          isTop={true} 
          isWinner={winnerId === team1?.id}
          isLoser={isCompleted && winnerId !== team1?.id}
          matchId={matchId}
          onPick={onPickWinner}
          compact={compact}
          showCode={showCode}
        />
        <TeamRow 
          team={team2} 
          isTop={false} 
          isWinner={winnerId === team2?.id}
          isLoser={isCompleted && winnerId !== team2?.id}
          matchId={matchId}
          onPick={onPickWinner}
          compact={compact}
          showCode={showCode}
        />
    </div>
  );
});

