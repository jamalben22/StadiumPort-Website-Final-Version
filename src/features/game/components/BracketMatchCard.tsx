import React from 'react';
import { TEAMS } from '../lib/wc26-data';

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

export const BracketMatchCard = ({
  matchId,
  team1Id,
  team2Id,
  winnerId,
  onPickWinner,
  className = '',
  showCode = true,
  compact = false
}: BracketMatchCardProps) => {
  const team1 = TEAMS.find(t => t.id === team1Id);
  const team2 = TEAMS.find(t => t.id === team2Id);
  const isCompleted = !!winnerId;

  const TeamRow = ({ team, isTop }: { team: typeof team1, isTop: boolean }) => {
    const isWinner = winnerId === team?.id;
    const isLoser = isCompleted && !isWinner;

    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (team) onPickWinner(matchId, team.id);
        }}
        disabled={!team || isCompleted}
        className={`
          group relative flex items-center gap-4 w-full transition-all duration-300
          overflow-hidden flex-1
          ${compact ? 'py-1 px-3' : 'px-4 py-2'}
          ${isTop ? 'border-b border-white/5' : ''}
          ${isWinner 
            ? 'bg-gradient-to-r from-amber-500/80 to-amber-600/80 shadow-[0_0_20px_rgba(245,158,11,0.4)] z-10' 
            : isLoser 
              ? 'opacity-40 grayscale' 
              : 'hover:bg-white/5'
          }
          ${!team ? 'cursor-default' : 'cursor-pointer'}
        `}
      >
        {/* Active State Effects (Winner) */}
        {isWinner && (
           <>
             {/* Shine Effect */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-100%] animate-shimmer" />
             {/* Noise Texture */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
           </>
        )}

        {team ? (
          <>
             {/* Flag */}
             <img 
               src={team.flagUrl} 
               alt={team.name} 
               className={`
                   rounded-full flex-shrink-0 object-cover shadow-sm ring-1 ring-white/30
                   ${compact ? 'w-6 h-6' : 'w-8 h-8'}
               `} 
             />
              
              {/* Name & Code */}
              <div className={`flex items-center flex-1 min-w-0 z-10 relative ${compact ? 'gap-2' : 'gap-3'}`}>
                  {showCode && (
                      <span className={`
                        font-['Teko'] leading-none uppercase tracking-wide transition-all duration-300 flex-shrink-0
                        ${compact ? 'text-base' : 'text-xl'}
                        ${isWinner 
                            ? 'text-black font-bold drop-shadow-sm' 
                            : 'text-slate-400 group-hover:text-slate-300'
                        }
                      `}>
                        {team.fifaCode}
                      </span>
                  )}
                  <span className={`
                    font-['Teko'] uppercase truncate text-left transition-colors duration-300 tracking-wide
                    ${compact ? 'text-sm' : 'text-lg'}
                    ${isWinner ? 'text-black font-semibold' : 'text-slate-300 group-hover:text-white'}
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
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-[50%] -skew-x-12 translate-x-[-150%] animate-[shimmer_3s_infinite]" />

            <span className={`
              relative z-10 font-['Teko'] tracking-[0.15em] uppercase text-white/30 
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
  };

  return (
    <div 
      className={`
        relative flex flex-col w-full rounded-lg overflow-hidden
        bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl
        ring-1 ring-white/10 shadow-xl shadow-black/40
        transition-all duration-500
        ${winnerId ? 'ring-amber-500/50' : 'hover:scale-[1.01] hover:shadow-2xl hover:ring-white/20'}
        ${className}
      `}
    >
        {/* Top Gloss Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
        
        {/* Card Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
        
        <TeamRow team={team1} isTop={true} />
        <TeamRow team={team2} isTop={false} />
    </div>
  );
};
