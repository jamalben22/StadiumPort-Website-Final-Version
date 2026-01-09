import React from 'react';
import { BracketSummary } from './BracketSummary';
import { RulesCard } from './RulesCard';
import { Trophy, ArrowRight, BadgeCheck, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

interface ShareDashboardProps {
  champion?: any;
  userName?: string;
  groupStandings: Record<string, string[]>;
  thirdPlacePicks: string[];
  knockoutPicks: Record<string, string>;
}

export const ShareDashboard = ({ 
  champion, 
  userName: propUserName,
  groupStandings,
  thirdPlacePicks,
  knockoutPicks
}: ShareDashboardProps) => {
  const userName = propUserName || 'Participant';
  
  if (!champion) {
    return <div className="p-8 text-center text-white">Loading prediction...</div>;
  }

  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto px-4 pb-24 pt-24 flex flex-col gap-8">
        <Breadcrumb 
          items={[
            { label: 'Prediction Game', href: '/world-cup-2026-prediction-game' },
            { label: 'Share Result', href: '#' }
          ]} 
          className="justify-center mb-8"
          variant="white"
        />
        
      {/* Hero Section - Premium Dark Style */}
      <div className="relative w-full overflow-hidden rounded-[2rem] bg-[#0A0A0C] text-white shadow-2xl border border-white/5 p-6 md:p-12 mb-8 group isolate">
        
        {/* --- PREMIUM BACKGROUND LAYERS (Matching ShareCard) --- */}
        {/* 1. Base Gradient (Deep Slate/Black) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b]" />
        
        {/* 2. Metallic Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
        
        {/* 3. Gold Dust/Particles Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        
        {/* Geometric Accents */}
        <div className="absolute top-12 left-0 w-24 h-[1px] bg-gradient-to-r from-transparent via-black to-transparent transform -skew-x-12"></div>
        <div className="absolute bottom-12 right-0 w-24 h-[1px] bg-gradient-to-r from-transparent via-black to-transparent transform -skew-x-12"></div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column: User Intro */}
          <div className="text-center md:text-left space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-[0.2em]">
               <BadgeCheck className="w-3.5 h-3.5 text-amber-500" />
               <span className="font-['Rajdhani']">Verified Entry 2026</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-['Teko'] font-bold uppercase tracking-tight leading-[0.85]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white/70">
                  {userName}'s
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                  World Cup
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white/70">
                  Prediction
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-medium text-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                  <span className="font-['Rajdhani'] tracking-[0.15em] uppercase text-[11px] font-bold">LIVE ON STADIUMPORT</span>
                </div>
                <div className="hidden md:block w-px h-3 bg-black"></div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-500" />
                  <span className="font-['Rajdhani'] tracking-[0.15em] uppercase text-[11px] font-bold">Official Bracket</span>
                </div>
              </div>
          </div>

          {/* Right Column: Champion Display */}
          <div className="relative text-center md:text-right flex flex-col items-center md:items-end">
              {/* Glowing Center for Champion */}
              <div className="absolute top-1/2 left-1/2 md:left-auto md:right-10 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-48 h-48 bg-amber-500/10 blur-[100px] rounded-full"></div>

              <div className="relative py-4">
                <span className="block text-amber-400 font-['Rajdhani'] font-bold uppercase tracking-[0.5em] text-xs md:text-sm mb-2">
                   2026 World Champion
                </span>
                <h2 className="text-[4rem] md:text-[6rem] lg:text-[7rem] leading-[0.85] font-['Teko'] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-200 to-amber-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] tracking-tighter transform group-hover:scale-[1.02] transition-transform duration-500">
                   {champion.name}
                </h2>
              </div>
              
              <div className="mt-4 flex items-center gap-6 justify-center md:justify-end">
                  <div className="flex flex-col items-end">
                     <div className="flex items-center gap-1.5 text-amber-400">
                       <Trophy className="w-4 h-4" />
                       <span className="text-[10px] font-bold uppercase tracking-wider">Trophy Winner</span>
                     </div>
                     <span className="text-slate-200 font-['Rajdhani'] text-xs uppercase tracking-widest text-right font-bold">
                       FIFA World Cup 26™
                     </span>
                  </div>
                  {champion.flagUrl && (
                    <div className="relative group/flag w-16 h-12 md:w-24 md:h-16">
                       <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF4A00] to-amber-500 rounded-lg blur opacity-20 group-hover/flag:opacity-40 transition-opacity"></div>
                       <div className="relative w-full h-full rounded-xl overflow-hidden ring-1 ring-black/5 shadow-xl">
                         <Image 
                           src={champion.flagUrl} 
                           alt={champion.name} 
                           fill
                           className="object-cover transform group-hover/flag:scale-110 transition-transform duration-700"
                         />
                       </div>
                    </div>
                  )}
              </div>
          </div>
        </div>
      </div>

      {/* Complete Bracket Summary */}
      <div className="mt-32">
        <div className="relative flex flex-col items-center mb-20 text-center">
          
          <h2 className="relative text-5xl md:text-8xl font-['Teko'] font-bold uppercase text-white tracking-tight leading-[0.85] flex flex-col items-center">
            <span className="text-amber-400 text-2xl md:text-3xl tracking-[0.2em] mb-4 font-['Rajdhani'] font-bold drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">
              {userName}'s
            </span>
            <span className="relative drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              Tournament
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 drop-shadow-[0_5px_15px_rgba(255,255,255,0.1)]">
              Prediction
            </span>
          </h2>
          
          {/* Premium underline accent */}
          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-black"></div>
            <div className="w-2 h-2 rounded-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
            <div className="w-12 h-[1px] bg-black"></div>
          </div>
        </div>
        
        <BracketSummary 
          groupStandings={groupStandings}
          thirdPlacePicks={thirdPlacePicks}
          knockoutPicks={knockoutPicks}
        />
      </div>

      {/* Official Rules Section */}
      <div 
        className="mt-24 rounded-[32px] overflow-hidden shadow-2xl border border-white/20 relative"
        style={{
          background: `linear-gradient(135deg, #FF4A00 0%, #FFB199 100%)`
        }}
      >
        {/* Subtle Depth Layers to match entry page exactly */}
        <div 
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full opacity-60 mix-blend-soft-light blur-3xl"
          style={{
            background: `radial-gradient(circle, #FFB199 0%, transparent 70%)`
          }}
        />
        <div className="relative z-10 game-font-body">
           <RulesCard variant="full" theme="light" />
         </div>
      </div>

      {/* Play CTA Section - Moved to Bottom */}
      <div className="flex justify-center mt-12 mb-8">
        <Link 
          href="/world-cup-2026-prediction-game"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl ring-4 ring-slate-900/10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Trophy className="w-6 h-6 text-[#fbbf24]" />
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-['Rajdhani'] font-bold uppercase tracking-widest text-slate-200 leading-none mb-0.5">Don't just watch</span>
            <span className="text-xl font-['Teko'] font-bold uppercase tracking-wide leading-none text-white">Play to Win the Big Prize</span>
          </div>
          <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  </div>
);
};

export default ShareDashboard;

