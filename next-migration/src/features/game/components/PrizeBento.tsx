import React from 'react';
import { Trophy, Medal, Shirt, Disc, Banknote, ChevronRight } from 'lucide-react';

export const PrizeBento = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {/* Card 1: Grand Prize (Premium Gold) */}
      <div className="relative overflow-hidden rounded-[32px] bg-slate-50 border border-black/10 p-6 group hover:border-slate-900/30 transition-colors">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-transparent opacity-50" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-slate-900/10 flex items-center justify-center border border-slate-900/20">
              <Trophy className="w-6 h-6 text-slate-900" />
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-900/10 border border-slate-900/20 text-slate-900 text-[10px] font-bold uppercase tracking-widest">
              1st Place
            </span>
          </div>
          
          <h3 className="text-slate-900 font-['Teko'] font-bold text-3xl mb-1 leading-none">Grand Champion</h3>
          <p className="text-slate-900 text-xs font-['Rajdhani'] font-medium uppercase tracking-wider mb-6">
            The ultimate victory package
          </p>
          
          <div className="mt-auto space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-black/5 border border-black/5">
              <Banknote className="w-5 h-5 text-slate-900" />
              <span className="text-sm text-slate-900 font-bold font-['Rajdhani']">$1,000 Cash Prize</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-black/5 border border-black/5">
              <Shirt className="w-5 h-5 text-slate-900" />
              <span className="text-sm text-slate-900 font-['Rajdhani']">Original WC26 Jersey</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Runners Up (Sleek Dark) */}
      <div className="relative overflow-hidden rounded-[32px] bg-slate-50 border border-black/10 p-6 group hover:border-slate-900/20 transition-colors">
         <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-transparent opacity-30" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center border border-black/10">
              <Medal className="w-6 h-6 text-slate-900" />
            </div>
            <span className="px-3 py-1 rounded-full bg-black/5 border border-black/10 text-slate-900 text-[10px] font-bold uppercase tracking-widest">
              Top 5
            </span>
          </div>
          
          <h3 className="text-slate-900 font-['Teko'] font-bold text-3xl mb-1 leading-none">Elite Predictors</h3>
          <p className="text-slate-900 text-xs font-['Rajdhani'] font-medium uppercase tracking-wider mb-6">
            Rewards for the best
          </p>
          
          <div className="mt-auto space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-black/5 border border-black/5">
              <Shirt className="w-5 h-5 text-slate-900" />
              <span className="text-sm text-slate-900 font-['Rajdhani']">National Team Jersey</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-black/5 border border-black/5">
              <Disc className="w-5 h-5 text-slate-900" />
              <span className="text-sm text-slate-900 font-['Rajdhani']">Official Match Ball</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

