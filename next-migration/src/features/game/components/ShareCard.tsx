'use client';

import React, { forwardRef } from 'react';
import Image from 'next/image';
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
      className={`relative w-[360px] h-[640px] bg-[#0A0A0C] text-white overflow-hidden font-sans flex flex-col ${className}`}
    >
      {/* --- PREMIUM BACKGROUND LAYERS --- */}
      
      {/* 1. Base Gradient (Deep Slate/Black) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b]" />
      
      {/* 2. Metallic Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
      
      {/* 3. Gold Dust/Particles Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60" />

      {/* --- GOLD FRAME (PREMIUM DARK STYLE) --- */}
      <div className="absolute inset-3 border-[2px] border-amber-500/20 rounded-xl z-20 shadow-[0_0_30px_rgba(0,0,0,0.5)]" 
           style={{ 
             background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
             backdropFilter: 'blur(10px)'
           }}
      >
         {/* Inner hairline border */}
         <div className="absolute inset-1 border border-amber-400/10 rounded-lg" />
         
         {/* Corner Accents - Solid Gold */}
         <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-400/60 rounded-tl-lg" />
         <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-400/60 rounded-tr-lg" />
         <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-400/60 rounded-bl-lg" />
         <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-400/60 rounded-br-lg" />
      </div>

      {/* --- HEADER: AUTHENTICITY --- */}
      <div className="relative z-30 pt-8 px-8 flex justify-center items-end mb-4">
        <div className="flex flex-col items-center">
            <span className="font-['Teko'] text-amber-400 text-xl leading-none tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">FIFA WORLD CUP 26™</span>
            <span className="font-['Rajdhani'] text-slate-200 text-[10px] tracking-[0.32em] uppercase font-bold">OFFICIAL PREDICTION</span>
            <span
              className="mt-2 font-['Rajdhani'] font-bold text-[10px] uppercase tracking-[0.38em]"
              style={{ background: 'linear-gradient(90deg,#FCD34D,#FFF4C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              POWERED BY stadiumport
            </span>
        </div>
      </div>

      {/* --- MAIN HERO: CHAMPION --- */}
      <div className="relative z-30 flex-1 flex flex-col items-center">
         
         {/* The "Shield" Container */}
         <div className="relative w-56 h-56 mb-3 flex items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-amber-500/20 blur-[60px] rounded-full animate-pulse" />
            
            {/* Champion Flag/Crest - Large & Center */}
            <div className="relative z-10 w-44 h-44 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-transform duration-700">
               {['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(champion.id) ? (
                  <div className="w-full h-full bg-slate-800/80 rounded-2xl border border-amber-400/30 flex items-center justify-center backdrop-blur-sm">
                     <span className="text-4xl font-bold text-amber-400/50">FIFA</span>
                  </div>
               ) : champion.flagUrl ? (
                  <div className="relative w-full h-full group">
                    <div className="absolute inset-0 bg-white/5 rounded-full blur-sm group-hover:bg-white/10 transition-colors" />
                    <Image 
                      src={hiResFlag(champion.flagUrl)}
                      alt={champion.name}
                      fill
                      priority
                      sizes="(max-width: 360px) 176px, 176px"
                      className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
               ) : null}
            </div>

            {/* "CHAMPION" Gold Banner Overlay */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[115%] h-10 bg-gradient-to-r from-transparent via-amber-500 to-transparent flex items-center justify-center shadow-[0_4px_20px_rgba(245,158,11,0.3)]">
               <div className="w-full h-[1px] bg-white/40 absolute top-0" />
               <div className="w-full h-[1px] bg-white/40 absolute bottom-0" />
               <span className="font-['Teko'] font-bold text-slate-950 text-3xl tracking-[0.2em] uppercase drop-shadow-md">
                  CHAMPION
               </span>
            </div>
         </div>

         {/* Champion Name Text */}
         <div className="text-center mb-4 relative">
            <h1 className="text-5xl font-['Teko'] font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-200 to-amber-500 drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]">
               {champion.name}
            </h1>
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mt-2" />
      </div>

      {/* Matchup Context (Runner Up) */}
      <div className="flex items-center gap-4 bg-slate-900/90 border border-amber-400/20 px-5 py-2 rounded-full backdrop-blur-md mb-6 shadow-2xl">
          <span className="text-amber-400 font-['Rajdhani'] font-bold text-xs tracking-widest uppercase">DEFEATED</span>
          <div className="w-[1px] h-4 bg-black" />
             <div className="flex items-center gap-2">
                 {runnerUp && runnerUp.flagUrl && !['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(runnerUp.id) && (
                     <div className="relative w-5 h-5 flex-shrink-0">
                       <Image 
                         src={hiResFlag(runnerUp.flagUrl)}
                         alt={`${runnerUp.name} Flag`}
                         fill
                         sizes="20px"
                         priority
                         className="object-contain opacity-90 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                         style={{ imageRendering: 'auto' }}
                       />
                     </div>
                 )}
                 <span className="text-white font-['Teko'] text-xl tracking-wide uppercase leading-none mt-0.5">
                    {runnerUp?.name || "TBD"}
                 </span>
             </div>
         </div>

         {/* --- USER / MANAGER SECTION --- */}
         <div className="w-full px-8 mb-auto">
            <div className="flex justify-between items-end border-b border-amber-400/20 pb-2">
               <div>
                  <div className="text-amber-400 font-['Rajdhani'] text-[9px] uppercase tracking-[0.2em] mb-0.5 font-bold">
                     TEAM MANAGER
                  </div>
                  <div className="text-xs font-mono text-white tracking-[0.12em] leading-tight whitespace-nowrap font-bold">
                     {userName}
                  </div>
               </div>
               <div className="text-right">
                   <div className="text-amber-400 font-['Rajdhani'] text-[9px] uppercase tracking-[0.2em] mb-0.5 font-bold">
                     Entry ID
                  </div>
                  <div className="text-xs font-mono text-white tracking-[0.12em] leading-tight whitespace-nowrap font-bold">
                     {displayId}
                  </div>
               </div>
            </div>
         </div>

      </div>

      {/* --- FOOTER: HIGH STAKES PRIZE --- */}
      <div className="relative z-30 pb-8 px-6">
         <div className="relative bg-gradient-to-r from-amber-500/20 via-amber-200/20 to-amber-500/20 rounded-lg p-[1px] shadow-2xl">
            <div className="absolute inset-0 bg-amber-500/10 rounded-lg blur-md" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-lg p-3 flex items-center justify-between overflow-hidden border border-white/5">
               {/* Shine effect */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]" />
               
               <div className="flex flex-col z-10">
                  <span className="text-amber-400 font-['Rajdhani'] font-bold text-[9px] uppercase tracking-[0.2em]">
                     TOURNAMENT PRIZE POOL
                  </span>
                  <span
                    className="font-['Teko'] text-2xl uppercase tracking-widest leading-none text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)]"
                    style={{ backgroundImage: 'linear-gradient(90deg,#fff 0%, #FCD34D 35%, #b45309 60%, #fff 100%)' }}
                  >
                    $1,000 + OFFICIAL GEAR
                  </span>
               </div>
               
                <div className="z-10 bg-amber-500 text-slate-950 p-1.5 rounded-md flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Trophy className="w-4 h-4" fill="currentColor" />
               </div>
            </div>
         </div>
         
         
      </div>

      <div className="absolute bottom-3 left-0 right-0 z-30 text-center">
         <span className="text-white/60 font-['Rajdhani'] font-bold text-[9px] tracking-[0.35em] uppercase">stadiumport.COM</span>
      </div>

    </div>
  );
};

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(ShareCardInner);

ShareCard.displayName = 'ShareCard';

