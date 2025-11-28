import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { toPng, toBlob } from 'html-to-image';
import { ShareCard } from './ShareCard';
import { PrizeBento } from './PrizeBento';
import { TripTicket } from './TripTicket';
import { ActionIsland } from './ActionIsland';
import { RulesCard } from './RulesCard';
import { Team, TEAMS } from '../lib/wc26-data';
import { Sparkles, CheckCircle2, RotateCcw, Trophy, LayoutGrid, Shield, Share2, Download } from 'lucide-react';
import { useGame } from '../context/GameContext';

interface ResultDashboardProps {
  champion: Team;
  runnerUp?: Team;
  userName: string;
  stats?: {
    topScorer: string;
    bestPlayer: string;
  };
  onRestart?: () => void;
}

// Helper: Get Team by ID
const getTeam = (id: string) => TEAMS.find(t => t.id === id);

export const ResultDashboard: React.FC<ResultDashboardProps> = ({ champion, runnerUp, userName, stats, onRestart }) => {
  const { groupStandings, knockoutPicks } = useGame();
  const [isGenerating, setIsGenerating] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  // Image Generation
  const handleSaveImage = async () => {
    if (!exportRef.current || isGenerating) return;
    setIsGenerating(true);

    try {
      await document.fonts.ready;
      await new Promise(resolve => setTimeout(resolve, 500));

      const dataUrl = await toPng(exportRef.current, {
        cacheBust: true,
        quality: 1.0,
        pixelRatio: 3,
        backgroundColor: 'transparent',
        style: { transform: 'scale(1)', transformOrigin: 'top left' }
      });
      
      const link = document.createElement('a');
      link.download = `stadiumport-wc26-${champion.id}-prediction.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShare = async () => {
    if (!exportRef.current || isGenerating) return;
    setIsGenerating(true);

    try {
        await document.fonts.ready;
        await new Promise(resolve => setTimeout(resolve, 500));

        const blob = await toBlob(exportRef.current, {
            cacheBust: true,
            quality: 1.0,
            pixelRatio: 3,
            backgroundColor: 'transparent',
            style: { transform: 'scale(1)', transformOrigin: 'top left' }
        });

        if (!blob) throw new Error('Failed to generate blob');
        
        const file = new File([blob], `prediction-${champion.id}.png`, { type: "image/png" });

        if (navigator.share) {
            await navigator.share({
                title: 'My WC26 Prediction',
                text: `I predict ${champion.name} will win the World Cup 2026! 🏆 #StadiumPort #WC26`,
                files: [file]
            });
        } else {
            const link = document.createElement('a');
            link.download = `stadiumport-wc26-${champion.id}-prediction.png`;
            link.href = URL.createObjectURL(blob);
            link.click();
        }
    } catch (err) {
        console.error('Share failed:', err);
    } finally {
        setIsGenerating(false);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.6
      }
    }
  };

  return (
    // Clean Container - Transparent to show GameLayout background
    <div className="w-full h-full overflow-y-auto custom-scrollbar relative z-10">
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-32 md:pt-28"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        
        {/* 1. Premium Header */}
        <motion.header variants={itemVariants} className="text-center mb-16 relative">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
             <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
             <span className="text-[11px] font-bold text-white/80 uppercase tracking-[0.2em] font-['Rajdhani']">Official Prediction Locked</span>
           </div>
           <h1 className="text-6xl md:text-8xl font-black font-['Teko'] uppercase tracking-tight leading-[0.85] mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
             {champion.name}
           </h1>
           <p className="text-emerald-400 font-bold text-lg font-['Rajdhani'] tracking-widest uppercase">
             World Cup 2026 Champion
           </p>
        </motion.header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

           {/* Section 1: Group Predictions Summary (Span 12 or 8) */}
           <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                 <div className="h-px flex-1 bg-white/10"></div>
                 <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Group Winners</span>
                 <div className="h-px flex-1 bg-white/10"></div>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                 {Object.entries(groupStandings).map(([groupId, teamIds]) => {
                    const winner = getTeam(teamIds[0]);
                    return (
                       <div key={groupId} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center gap-2 group hover:bg-white/10 transition-colors">
                          <span className="text-[10px] text-white/40 font-bold font-['Rajdhani']">GRP {groupId}</span>
                          {winner && (
                             <>
                                <img src={winner.flagUrl} alt={winner.name} className="w-8 h-6 object-cover rounded shadow-sm" />
                                <span className="text-xs font-bold text-white font-['Teko'] tracking-wide">{winner.code}</span>
                             </>
                          )}
                       </div>
                    );
                 })}
              </div>
           </motion.div>

           {/* Section 4: User Info / Quick Stats (Span 4) */}
           <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-4 flex flex-col gap-6">
               <div className="flex items-center gap-4">
                 <div className="h-px flex-1 bg-white/10"></div>
                 <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Player Card</span>
                 <div className="h-px flex-1 bg-white/10"></div>
              </div>

              <div className="bg-[#111]/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center h-full relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 p-0.5 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center text-2xl font-bold text-white font-['Teko']">
                       {userName.charAt(0).toUpperCase()}
                    </div>
                 </div>
                 <h3 className="text-2xl font-bold text-white font-['Teko'] uppercase tracking-wide mb-1">{userName}</h3>
                 <div className="flex items-center gap-2 text-white/60 text-xs font-medium font-['Rajdhani']">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified Prediction
                 </div>
              </div>
           </motion.div>

           {/* Section 2: Bracket Summary (Final 4 Path) */}
           <motion.div variants={itemVariants} className="md:col-span-12 flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4">
                 <div className="h-px flex-1 bg-white/10"></div>
                 <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">The Final Four</span>
                 <div className="h-px flex-1 bg-white/10"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                 {/* Semi Finalists (Left) */}
                 <div className="space-y-3">
                    {['SF-01', 'SF-02'].map(matchId => {
                       const winnerId = knockoutPicks[matchId];
                       const team = getTeam(winnerId);
                       return team ? (
                          <div key={matchId} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                             <div className="flex items-center gap-3">
                                <img src={team.flagUrl} className="w-8 h-6 rounded object-cover" />
                                <span className="text-white font-bold font-['Teko'] text-lg">{team.name}</span>
                             </div>
                             <span className="text-xs text-white/30 font-['Rajdhani'] font-bold">FINALIST</span>
                          </div>
                       ) : null;
                    })}
                 </div>

                 {/* The Final */}
                 <div className="bg-gradient-to-b from-emerald-900/20 to-[#111] border border-emerald-500/30 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden h-full min-h-[160px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 to-transparent pointer-events-none" />
                    <Trophy className="w-8 h-8 text-emerald-400 mb-3" />
                    <div className="text-center">
                       <div className="text-xs text-emerald-400 font-bold tracking-widest font-['Rajdhani'] mb-1">WORLD CHAMPION</div>
                       <div className="text-4xl font-black text-white font-['Teko'] uppercase">{champion.name}</div>
                    </div>
                 </div>

                 {/* Runner Up info implied or separate card? Let's just show Final Matchup Summary */}
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-center">
                    <div className="text-center space-y-4">
                       <div>
                          <div className="text-[10px] text-white/40 font-bold font-['Rajdhani'] uppercase tracking-widest mb-1">FINAL MATCHUP</div>
                          <div className="flex items-center justify-center gap-3">
                             <span className="text-xl font-bold text-white font-['Teko']">{champion.code}</span>
                             <span className="text-white/20 font-['Teko']">VS</span>
                             <span className="text-xl font-bold text-white/60 font-['Teko']">{runnerUp?.code || 'TBD'}</span>
                          </div>
                       </div>
                       <div className="w-full h-px bg-white/10" />
                       <div className="flex justify-between items-center">
                          <span className="text-xs text-white/60 font-['Rajdhani']">Total Matches</span>
                          <span className="text-emerald-400 font-bold font-['Teko']">104</span>
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* Section 3: Official Card (Visual Highlight) */}
           <motion.div variants={itemVariants} className="md:col-span-12 mt-8 flex justify-center">
              <div className="relative group cursor-pointer" onClick={handleSaveImage}>
                 <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-600 rounded-[32px] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                 <ShareCard 
                    champion={champion} 
                    runnerUp={runnerUp}
                    userName={userName} 
                    stats={stats}
                    className="relative transform transition-transform duration-500 group-hover:scale-[1.01]"
                 />
                 <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download className="w-3 h-3 text-white" />
                    <span className="text-[10px] font-bold text-white uppercase">Click to Save</span>
                 </div>
              </div>
           </motion.div>

           {/* Section 5: Full Rules */}
           <motion.div variants={itemVariants} className="md:col-span-12 mt-8">
              <RulesCard variant="full" />
           </motion.div>

        </div>

        {/* Bottom Buttons */}
        <motion.div variants={itemVariants} className="mt-20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
           
           <button
             onClick={handleShare}
             className="w-full md:w-auto group relative px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
           >
             <div className="flex items-center justify-center gap-3">
               <Share2 className="w-5 h-5 text-emerald-950" />
               <span className="text-emerald-950 font-bold font-['Rajdhani'] uppercase tracking-widest text-sm">Share Prediction</span>
             </div>
           </button>

           {onRestart && (
             <button
               onClick={onRestart}
               className="w-full md:w-auto group px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 active:scale-95"
             >
               <div className="flex items-center justify-center gap-3">
                 <RotateCcw className="w-4 h-4 text-white/60 group-hover:text-white group-hover:-rotate-180 transition-all duration-500" />
                 <span className="text-white/60 group-hover:text-white font-bold font-['Rajdhani'] uppercase tracking-widest text-sm">Start New Game</span>
               </div>
             </button>
           )}

        </motion.div>

      </motion.div>

      {/* Hidden Render for Image Generation */}
      <div className="fixed top-0 -left-[9999px] w-[360px] h-[640px] z-[-1]">
        <div ref={exportRef} className="w-[360px] h-[640px] rounded-[40px] overflow-hidden relative bg-[#0a0a0a]">
           <ShareCard 
              champion={champion} 
              runnerUp={runnerUp}
              userName={userName} 
              stats={stats}
              className="scale-100 shadow-none"
           />
        </div>
      </div>

    </div>
  );
};
