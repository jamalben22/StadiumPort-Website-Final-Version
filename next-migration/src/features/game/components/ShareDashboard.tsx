import React from 'react';
import { TEAMS } from '../lib/wc26-data';
import { BracketSummary } from './BracketSummary';
import { RulesCard } from './RulesCard';
import { Trophy, ArrowRight, BadgeCheck, Star, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
    return <div className="p-8 text-center text-slate-900">Loading prediction...</div>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-24 pt-24 flex flex-col gap-8">
      
      {/* Breadcrumbs */}
      <Breadcrumb 
        items={[
          { label: 'Prediction Game', href: '/world-cup-2026-prediction-game' },
          { label: 'Share', href: '#' }
        ]} 
        variant="light"
        className="mb-8"
      />

      {/* Hero Section - FIFA x Apple x Nike Style */}
      <div className="relative w-full overflow-hidden rounded-[2rem] bg-white text-slate-900 shadow-2xl border border-black/10 p-6 md:p-12 mb-8 group isolate">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_#f8fafc_0%,_#ffffff_60%)]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#01b47d]/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        {/* Nike-style Geometric Accents */}
        <div className="absolute top-12 left-0 w-24 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
        <div className="absolute bottom-12 right-0 w-24 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column: User Intro */}
          <div className="text-center md:text-left space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 backdrop-blur-md border border-black/10 text-xs font-medium text-slate-900/80">
               <BadgeCheck className="w-3 h-3 text-[#01b47d]" />
               <span className="font-['Rajdhani'] uppercase tracking-wider">Verified Entry</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-['Teko'] font-bold uppercase tracking-tight leading-[0.85]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900/70">
                  {userName}'s
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-[#01b47d]/70">
                  World Cup
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900/70">
                  Prediction
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-medium text-slate-900/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#01b47d] shadow-[0_0_10px_#01b47d]"></div>
                  <span className="font-['Rajdhani'] tracking-wide">2026 Season</span>
                </div>
                <div className="hidden md:block w-px h-3 bg-black/10"></div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="font-['Rajdhani'] tracking-wide">Official Bracket</span>
                </div>
              </div>
          </div>

          {/* Right Column: Champion Display */}
          <div className="relative text-center md:text-right flex flex-col items-center md:items-end">
              {/* Glowing Center for Champion */}
              <div className="absolute top-1/2 left-1/2 md:left-auto md:right-10 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-48 h-48 bg-white/5 blur-3xl rounded-full"></div>

              <div className="relative py-4">
                <span className="block text-[#fbbf24] font-['Rajdhani'] font-bold uppercase tracking-[0.5em] text-xs md:text-sm mb-2 animate-pulse">
                   2026 World Champion
                </span>
                <h2 className="text-[4rem] md:text-[6rem] lg:text-[7rem] leading-[0.85] font-['Teko'] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter transform group-hover:scale-[1.02] transition-transform duration-500">
                   {champion.name}
                </h2>
              </div>
              
              <div className="mt-4 flex items-center gap-6 justify-center md:justify-end">
                  <div className="flex flex-col items-end">
                     <div className="flex items-center gap-1.5 text-[#fbbf24]">
                       <Trophy className="w-4 h-4" />
                       <span className="text-[10px] font-bold uppercase tracking-wider">Trophy Winner</span>
                     </div>
                     <span className="text-slate-900 font-['Rajdhani'] text-xs uppercase tracking-widest text-right">
                       FIFA World Cup 26™
                     </span>
                  </div>
                  {champion.flagUrl && (
                    <div className="relative group/flag">
                       <div className="absolute -inset-1 bg-gradient-to-tr from-[#01b47d] to-blue-600 rounded-lg blur opacity-40 group-hover/flag:opacity-75 transition-opacity"></div>
                       <img 
                         src={champion.flagUrl} 
                         alt={champion.name} 
                         className="relative w-16 h-12 md:w-20 md:h-14 rounded-md shadow-2xl object-cover ring-1 ring-white/20"
                       />
                    </div>
                  )}
              </div>
          </div>
        </div>
      </div>

      {/* Complete Bracket Summary */}
      <div className="mt-32">
        <div className="relative flex flex-col items-center mb-20 text-center">
          {/* Editorial Accent Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-px h-16 bg-gradient-to-b from-transparent via-slate-300 to-slate-900"></div>
          
          <h2 className="relative text-5xl md:text-8xl font-['Teko'] font-bold uppercase text-slate-900 tracking-tight leading-[0.85] flex flex-col items-center">
            <span className="text-slate-700 text-2xl md:text-3xl tracking-[0.2em] mb-4 font-['Rajdhani'] font-bold">
              {userName}'s
            </span>
            <span className="relative">
              Tournament
              <span className="absolute -right-8 -top-4 text-xs bg-slate-900 text-white px-2 py-1 rounded-sm font-['Rajdhani'] tracking-widest">2026</span>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
              Prediction
            </span>
          </h2>
          
          {/* Premium underline accent */}
          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-slate-200"></div>
            <div className="w-2 h-2 rounded-full bg-slate-900"></div>
            <div className="w-12 h-[2px] bg-slate-200"></div>
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
            <span className="text-[10px] font-['Rajdhani'] font-bold uppercase tracking-widest text-slate-400 leading-none mb-0.5">Don't just watch</span>
            <span className="text-xl font-['Teko'] font-bold uppercase tracking-wide leading-none">Play to Win the Big Prize</span>
          </div>
          <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
};

