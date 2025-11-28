import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, AlertCircle, CheckCircle2, Shirt, Disc, DollarSign } from 'lucide-react';

interface RulesCardProps {
  variant: 'short' | 'full';
  className?: string;
}

export const RulesCard: React.FC<RulesCardProps> = ({ variant, className = '' }) => {
  if (variant === 'short') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8 relative overflow-hidden ${className}`}
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
            <Trophy className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-['Teko'] tracking-wide uppercase mb-2">
              Quick Rules
            </h3>
            <ul className="space-y-2">
              {[
                "Predict the entire WC 2026 tournament from Groups to the Final.",
                "Every correct prediction = 1 point.",
                "Top 5 players win official WC 2026 prizes.",
                "Winners announced after the real WC 2026 Final."
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/80 font-['Rajdhani'] font-medium leading-tight">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/80 mt-0.5 shrink-0" />
                  <span>{rule.replace('1 point', '<strong class="text-white">1 point</strong>')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`bg-[#111] border border-white/10 rounded-[32px] p-8 relative overflow-hidden group ${className}`}>
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <AlertCircle className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-black font-['Teko'] text-white uppercase tracking-wide">
            Official Game Rules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* How to Play */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest font-['Rajdhani']">
              How It Works
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-emerald-500 font-['Teko'] text-xl">01</span>
                <p className="text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  Predict every stage: <span className="text-white">Groups → Best 3rd Place → Bracket → Semis → Final</span>.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-500 font-['Teko'] text-xl">02</span>
                <p className="text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  Each correct prediction equals <span className="text-white font-bold">1 point</span>. Total scores are calculated after the tournament ends.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-500 font-['Teko'] text-xl">03</span>
                <p className="text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  One entry per person. If multiple players have equal points, a fair lottery determines the winners.
                </p>
              </li>
            </ul>
          </div>

          {/* Prizes */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest font-['Rajdhani']">
              Prize Pool
            </h3>
            
            {/* 1st Place */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#FBBF24] font-bold font-['Teko'] text-xl uppercase">1st Place</span>
                <Trophy className="w-4 h-4 text-[#FBBF24]" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/90 text-sm font-['Rajdhani']">
                  <Shirt className="w-4 h-4 text-white/40" /> Official Winning Jersey
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm font-['Rajdhani']">
                  <Disc className="w-4 h-4 text-white/40" /> Official Match Ball
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-['Rajdhani']">
                  <DollarSign className="w-4 h-4" /> $500 Cash Bonus
                </div>
              </div>
            </div>

            {/* 2nd-5th */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 opacity-80">
               <div className="flex items-center justify-between mb-3">
                <span className="text-white font-bold font-['Teko'] text-xl uppercase">2nd - 5th Place</span>
                <span className="text-xs text-white/40 font-['Rajdhani']">Runners Up</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/70 text-sm font-['Rajdhani']">
                  <Shirt className="w-4 h-4 text-white/40" /> Official Winning Jersey
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm font-['Rajdhani']">
                  <Disc className="w-4 h-4 text-white/40" /> Official Match Ball
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
           <p className="text-white/30 text-xs font-['Rajdhani']">
             Winners will be announced immediately after the WC 2026 Final. Terms and conditions apply.
           </p>
        </div>
      </div>
    </div>
  );
};
