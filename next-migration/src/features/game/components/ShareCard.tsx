'use client';

import React, { forwardRef } from 'react';
import { Team } from '../lib/wc26-data';
import { Trophy } from 'lucide-react';

interface ShareCardProps {
  champion: Team;
  runnerUp?: Team;
  userName: string;
  userCountry?: string;
  uniqueId?: string;
  stats?: {
    topScorer: string;
    bestPlayer: string;
  };
  className?: string;
}

const ShareCardInner = (
  { champion, runnerUp, userName = 'You', userCountry, uniqueId, stats, className = '' }: ShareCardProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  // Use state for client-only random value to avoid hydration mismatch
  const [cardNum, setCardNum] = React.useState<string>('NO. 0000 / 2026');

  React.useEffect(() => {
    setCardNum(`NO. ${Math.floor(Math.random() * 9000) + 1000} / 2026`);
  }, []);

  if (!champion) {
    return null;
  }

  const displayId = uniqueId || cardNum;

  const hiResFlag = (url?: string) => url ? url.replace(/\/w\d+\//, '/w640/') : '';
  const mediumFlag = (url?: string) => url ? url.replace(/\/w\d+\//, '/w320/') : '';

  return (
    <div 
      ref={ref}
      // 9:16 Aspect Ratio (360x640)
      className={`relative w-[360px] h-[640px] bg-white text-slate-900 overflow-hidden font-sans flex flex-col ${className}`}
    >
      {/* --- PREMIUM BACKGROUND LAYERS --- */}
      
      {/* 1. Base Gradient (Light Gold/White) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-amber-50" />
      
      {/* 2. Metallic Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
      
      {/* 3. Gold Dust/Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent opacity-40" />

      {/* --- GOLD FRAME (FUT STYLE) --- */}
      <div className="absolute inset-3 border-[3px] border-amber-600/30 rounded-xl z-20 shadow-[0_0_15px_rgba(180,83,9,0.1)]" 
           style={{ 
             background: 'linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.4))',
             borderColor: '#b4530933' // Fallback
           }}
      >
         {/* Inner hairline border */}
         <div className="absolute inset-1 border border-[#fcd34d]/30 rounded-lg" />
         
         {/* Corner Accents */}
         <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#fcd34d] rounded-tl-lg" />
         <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#fcd34d] rounded-tr-lg" />
         <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#fcd34d] rounded-bl-lg" />
         <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#fcd34d] rounded-br-lg" />
      </div>

      {/* --- HEADER: AUTHENTICITY --- */}
      <div className="relative z-30 pt-8 px-8 flex justify-center items-end mb-4">
        <div className="flex flex-col items-center">
            <span className="font-['Teko'] text-[#c0a062] text-xl leading-none tracking-widest">FIFA WORLD CUP 26™</span>
            <span className="font-['Rajdhani'] text-slate-900/70 text-[10px] tracking-[0.32em] uppercase">OFFICIAL PREDICTION</span>
            <span
              className="mt-2 font-['Rajdhani'] font-bold text-[10px] uppercase tracking-[0.38em]"
              style={{ background: 'linear-gradient(90deg,#FCD34D,#FFF4C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              POWERED BY STADIUMPORT
            </span>
        </div>
      </div>

      {/* --- MAIN HERO: CHAMPION --- */}
      <div className="relative z-30 flex-1 flex flex-col items-center">
         
         {/* The "Shield" Container */}
         <div className="relative w-56 h-56 mb-3 flex items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#fbbf24]/10 blur-3xl rounded-full" />
            
            {/* Champion Flag/Crest - Large & Center */}
            <div className="relative z-10 w-44 h-44 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-700">
               {['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(champion.id) ? (
                  <div className="w-full h-full bg-slate-800/80 rounded-2xl border border-[#c0a062]/30 flex items-center justify-center backdrop-blur-sm">
                     <span className="text-4xl font-bold text-[#c0a062]/50">FIFA</span>
                  </div>
               ) : champion.flagUrl ? (
                  <img 
                    src={hiResFlag(champion.flagUrl)}
                    srcSet={`${mediumFlag(champion.flagUrl)} 2x, ${hiResFlag(champion.flagUrl)} 3x`}
                    sizes="(max-width: 360px) 176px, 176px"
                    alt={champion.name}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                    style={{ imageRendering: 'auto' }}
                  />
               ) : null}
            </div>

            {/* "CHAMPION" Gold Banner Overlay */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[115%] h-10 bg-gradient-to-r from-transparent via-[#c0a062] to-transparent flex items-center justify-center">
               <div className="w-full h-[1px] bg-white/50 absolute top-0" />
               <div className="w-full h-[1px] bg-white/50 absolute bottom-0" />
               <span className="font-['Teko'] font-bold text-[#0f172a] text-3xl tracking-[0.2em] uppercase drop-shadow-md">
                  CHAMPION
               </span>
            </div>
         </div>

         {/* Champion Name Text */}
         <div className="text-center mb-4 relative">
            <h1 className="text-5xl font-['Teko'] font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-[#fcd34d] to-[#b45309] drop-shadow-sm">
               {champion.name}
            </h1>
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#c0a062] to-transparent mx-auto mt-2" />
         </div>

         {/* Matchup Context (Runner Up) */}
         <div className="flex items-center gap-4 bg-[#0f172a]/80 border border-[#c0a062]/30 px-5 py-2 rounded-full backdrop-blur-md mb-6 shadow-lg">
             <span className="text-[#c0a062] font-['Rajdhani'] font-bold text-xs tracking-widest uppercase">DEFEATED</span>
             <div className="w-[1px] h-4 bg-white/10" />
             <div className="flex items-center gap-2">
                 {runnerUp && runnerUp.flagUrl && !['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(runnerUp.id) && (
                     <img 
                       src={hiResFlag(runnerUp.flagUrl)}
                       srcSet={`${mediumFlag(runnerUp.flagUrl)} 2x, ${hiResFlag(runnerUp.flagUrl)} 3x`}
                       sizes="20px"
                       alt={`${runnerUp.name} Flag`}
                       loading="eager"
                       className="w-5 h-5 object-contain opacity-90"
                       style={{ imageRendering: 'auto' }}
                     />
                 )}
                 <span className="text-slate-900 font-['Teko'] text-xl tracking-wide uppercase leading-none mt-0.5">
                    {runnerUp?.name || "TBD"}
                 </span>
             </div>
         </div>

         {/* --- USER / MANAGER SECTION --- */}
         <div className="w-full px-8 mb-auto">
            <div className="flex justify-between items-end border-b border-[#c0a062]/30 pb-2">
               <div>
                  <div className="text-[#c0a062]/70 font-['Rajdhani'] text-[9px] uppercase tracking-[0.2em] mb-0.5">
                     TEAM MANAGER
                  </div>
                  <div className="text-xs font-mono text-slate-900/90 tracking-[0.12em] leading-tight whitespace-nowrap">
                     {userName}
                  </div>
               </div>
               <div className="text-right">
                   <div className="text-[#c0a062]/70 font-['Rajdhani'] text-[9px] uppercase tracking-[0.2em] mb-0.5">
                     Entry ID
                  </div>
                  <div className="text-xs font-mono text-slate-900/90 tracking-[0.12em] leading-tight whitespace-nowrap">
                     {displayId}
                  </div>
               </div>
            </div>
         </div>

      </div>

      {/* --- FOOTER: HIGH STAKES PRIZE --- */}
      <div className="relative z-30 pb-8 px-6">
         <div className="relative bg-gradient-to-r from-slate-100 via-white to-slate-100 rounded-lg p-[1px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-amber-400/20 to-amber-600/20 rounded-lg opacity-30 blur-sm" />
            <div className="relative bg-white rounded-lg p-3 flex items-center justify-between overflow-hidden">
               {/* Shine effect */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]" />
               
               <div className="flex flex-col z-10">
                  <span className="text-amber-800 font-['Rajdhani'] font-bold text-[9px] uppercase tracking-[0.2em]">
                     TOURNAMENT PRIZE POOL
                  </span>
                  <span
                    className="font-['Teko'] text-2xl uppercase tracking-widest leading-none text-transparent bg-clip-text drop-shadow-[0_2px_8px_rgba(180,83,9,0.1)]"
                    style={{ backgroundImage: 'linear-gradient(90deg,#0f172a 0%, #b45309 35%, #d97706 60%, #0f172a 100%)' }}
                  >
                    $1,000 + OFFICIAL GEAR
                  </span>
               </div>
               
                <div className="z-10 bg-amber-600 text-slate-950 p-1.5 rounded flex items-center justify-center">
                  <Trophy className="w-4 h-4" fill="currentColor" />
               </div>
            </div>
         </div>
         
         
      </div>

      <div className="absolute bottom-3 left-0 right-0 z-30 text-center">
         <span className="text-slate-900/40 font-['Rajdhani'] font-bold text-[9px] tracking-[0.35em] uppercase">STADIUMPORT.COM</span>
      </div>

    </div>
  );
};

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(ShareCardInner);

ShareCard.displayName = 'ShareCard';

