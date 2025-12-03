import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { toPng, toBlob } from 'html-to-image';
import { ShareCard } from './ShareCard';
import { PrizeBento } from './PrizeBento';
import { TripTicket } from './TripTicket';
import { ActionIsland } from './ActionIsland';
import { RulesCard } from './RulesCard';
import { Team, TEAM_MAP } from '../lib/wc26-data';
import { Sparkles, CheckCircle2, RotateCcw, Trophy, LayoutGrid, Shield, Share2, Download, Mail, Globe, Home } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { SEO } from '../../../components/common/SEO';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';

interface ResultDashboardProps {
  champion: Team;
  runnerUp?: Team;
  userName: string;
  userEmail?: string;
  userCountry?: string;
  stats?: {
    topScorer: string;
    bestPlayer: string;
  };
  onRestart?: () => void;
}

export const ResultDashboard: React.FC<ResultDashboardProps> = React.memo(({ champion, runnerUp, userName, userEmail, userCountry, stats, onRestart }) => {
  const { groupStandings, knockoutPicks } = useGame();
  const [isGenerating, setIsGenerating] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);
  const [entryId] = useState(() => `WC2026-${Math.random().toString(36).slice(2,8).toUpperCase()}`);
  const [submittedAt] = useState(() => new Date());

  // Helper: Get Team by ID (Optimized)
  const getTeam = (id: string) => TEAM_MAP.get(id);

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
                text: `I predict ${champion.name} will win the World Cup 2026! 🏆 #Stadiumport #WC26`,
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

  const shareText = `I predict ${champion.name} will win the World Cup 2026! 🏆 #Stadiumport #WC26`;
  const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://stadiumport.com';
  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
    window.open(url, '_blank');
  };
  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    window.open(url, '_blank');
  };
  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}`;
    window.open(url, '_blank');
  };
  const handleShareInstagram = () => {
    handleSaveImage();
  };
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
    } catch {}
  };
  const handleInviteFriends = () => {
    const subject = 'Join me in the WC26 Prediction Game';
    const body = `${shareText}\n\n${pageUrl}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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

  // Derive other Top-4 teams (losing semifinalists)
  const sf1WinnerId = knockoutPicks['SF-01'];
  const sf2WinnerId = knockoutPicks['SF-02'];
  const sf1Candidates = [knockoutPicks['QF-01'], knockoutPicks['QF-02']].filter(Boolean) as string[];
  const sf2Candidates = [knockoutPicks['QF-03'], knockoutPicks['QF-04']].filter(Boolean) as string[];
  const sf1Loser = getTeam(sf1Candidates.find((id) => id !== sf1WinnerId) || '');
  const sf2Loser = getTeam(sf2Candidates.find((id) => id !== sf2WinnerId) || '');

  return (
    <>
      <SEO 
        title="My World Cup 2026 Prediction | Stadiumport"
        description={`I predicted ${champion.name} will win the 2026 World Cup! Create your own prediction bracket and compete for official prizes.`}
        keywords={["World Cup 2026 prediction", "bracket results", "soccer prediction card", "stadiumport prediction"]}
        url="/world-cup-2026-prediction-game/results"
        image={`https://stadiumport.com/share/wc26-${champion.id}.png`}
      />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "World Cup 2026 Prediction Results",
        "description": "User prediction results for the World Cup 2026 tournament.",
        "url": "https://stadiumport.com/world-cup-2026-prediction-game/results",
        "mainEntity": {
          "@type": "SportsEvent",
          "name": "World Cup 2026",
          "competitor": {
            "@type": "SportsTeam",
            "name": champion.name
          }
        }
      }} />
    {/* Clean Container - Transparent to show GameLayout background */}
    <div className="w-full h-full overflow-y-auto custom-scrollbar relative z-10">
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-32 md:pt-28"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/8 border border-white/20 backdrop-blur-xl shadow-[0_8px_30px_rgba(255,255,255,0.08)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#01b47d] shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
            <span className="text-[11px] font-bold text-white/85 uppercase tracking-[0.22em] font-['Rajdhani']">
              Step 5 of 5: Your Prediction is Locked!
            </span>
          </div>
        </div>
        
        {/* 1. Premium Header */}
        <motion.header variants={itemVariants} className="text-center mb-16 relative">
           <h1 className="text-6xl md:text-8xl font-black font-['Teko'] uppercase tracking-tight leading-[0.85] mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
             Official Entry Confirmed
           </h1>
           <p className="text-[#01b47d] font-bold text-lg font-['Rajdhani'] tracking-widest uppercase">
             Your World Cup 2026 predictions are submitted and verified. Good luck competing for official prizes!
           </p>
        </motion.header>
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest font-['Rajdhani']">YOUR PREDICTED CHAMPION</span>
          </div>
          <div className="mt-4">
            <div className="text-5xl md:text-7xl font-black font-['Teko'] uppercase tracking-tight leading-[0.9] text-white">{champion.name}</div>
            <p className="text-[#01b47d] font-bold text-sm md:text-base font-['Rajdhani'] tracking-widest uppercase mt-1">World Cup 2026 Winner</p>
          </div>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black font-['Teko'] uppercase tracking-tight text-[#FBBF24]">
            Your Complete Bracket Summary
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

           {/* Section 1: Group Predictions Summary (Span 12 or 8) */}
           <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                 <div className="h-px flex-1 bg-white/10"></div>
                 <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Group Stage Winners (Top of Each Group)</span>
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
                                <span className="text-[10px] text-white/70 font-['Rajdhani'] font-semibold">{winner.name}</span>
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
                 <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Official Participant Record</span>
                 <div className="h-px flex-1 bg-white/10"></div>
              </div>

            <div className="group relative bg-[#0b0b0c]/80 backdrop-blur-2xl border border-white/10 ring-1 ring-white/5 rounded-2xl p-6 flex flex-col items-center justify-center h-full overflow-hidden shadow-[0_18px_48px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-[#FFD700]/25 to-transparent opacity-60" />
                <div className="absolute -top-24 -left-24 w-52 h-52 bg-[#FFD700]/10 blur-[80px] rounded-full" />
                <div className="absolute inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                <div className="w-full space-y-2 text-white/80 text-[12px] md:text-sm font-['Rajdhani'] font-medium">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Entry ID:</span>
                    <span className="font-bold">#{entryId}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Name:</span>
                    <span className="font-bold truncate max-w-[220px]">{userName || '—'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Country:</span>
                    <span className="font-bold truncate max-w-[220px]">{userCountry || '—'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Email:</span>
                    <span className="font-bold truncate max-w-[220px]">{userEmail || '—'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Submitted:</span>
                    <span className="font-bold truncate max-w-[220px]">{submittedAt.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Status:</span>
                    <span className="inline-flex items-center gap-2 font-bold text-[#01b47d]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified & Locked
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] md:text-xs text-yellow-300/80">
                    ⚠️ Predictions are now locked and cannot be edited after June 11, 2026 kickoff.
                  </p>
                </div>
              </div>
           </motion.div>

           {/* Section 2: Bracket Summary (Final 4 Path) */}
           <motion.div variants={itemVariants} className="md:col-span-12 flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4">
                 <div className="h-px flex-1 bg-white/10"></div>
                 <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Your Final Four Predictions</span>
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
                             <span className="text-xs text-white/30 font-['Rajdhani'] font-bold">CHAMPION</span>
                          </div>
                       ) : null;
                    })}
                 </div>

                 {/* The Final */}
                 <div className="bg-gradient-to-b from-[#008f63]/20 to-[#111] border border-[#01b47d]/30 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden h-full min-h-[160px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#01b47d]/10 to-transparent pointer-events-none" />
                    <Trophy className="w-8 h-8 text-[#01b47d] mb-3" />
                    <div className="text-center">
                       <div className="text-xs text-[#01b47d] font-bold tracking-widest font-['Rajdhani'] mb-1">WORLD CHAMPION</div>
                       <div className="text-4xl font-black text-white font-['Teko'] uppercase">{champion.name}</div>
                    </div>
                 </div>

                {/* Other Top-4 Teams (Losing Semifinalists) */}
                <div className="space-y-3">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        {sf1Loser ? (
                          <>
                            <img src={sf1Loser.flagUrl} className="w-8 h-6 rounded object-cover" />
                            <span className="text-white font-bold font-['Teko'] text-lg">{sf1Loser.name}</span>
                          </>
                        ) : (
                          <>
                            <div className="w-8 h-6 rounded bg-white/10 ring-1 ring-white/20" />
                            <span className="text-white/40 font-['Teko'] text-lg">TBD</span>
                          </>
                        )}
                     </div>
                     <span className="text-xs text-white/30 font-['Rajdhani'] font-bold">3rd PLACE</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        {sf2Loser ? (
                          <>
                            <img src={sf2Loser.flagUrl} className="w-8 h-6 rounded object-cover" />
                            <span className="text-white font-bold font-['Teko'] text-lg">{sf2Loser.name}</span>
                          </>
                        ) : (
                          <>
                            <div className="w-8 h-6 rounded bg-white/10 ring-1 ring-white/20" />
                            <span className="text-white/40 font-['Teko'] text-lg">TBD</span>
                          </>
                        )}
                     </div>
                     <span className="text-xs text-white/30 font-['Rajdhani'] font-bold">4th PLACE</span>
                  </div>
                </div>
              </div>
           </motion.div>

          {/* Section 3: Official Card (Visual Highlight) */}
          <motion.div variants={itemVariants} className="md:col-span-12 mt-8 flex flex-col items-center">
            <div className="mb-4 text-center">
              <h3 className="text-[12px] md:text-sm font-['Rajdhani'] font-extrabold uppercase tracking-[0.25em] text-white/70">SHARE YOUR PREDICTION CARD</h3>
            </div>
            <div className="relative group cursor-pointer" onClick={handleSaveImage}>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-purple-600 rounded-[32px] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-soft-light pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.35), transparent 60%)', maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.35), transparent 60%)' }} />
                <ShareCard 
                   champion={champion} 
                   runnerUp={runnerUp}
                   userName={userName} 
                   userCountry={userCountry}
                   stats={stats}
                   className="relative transform transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Download className="w-3 h-3 text-white" />
                   <span className="text-[10px] font-bold text-white uppercase">Download Official Card</span>
                </div>
              </div>
              <div className="my-8 w-full">
                <div className="mx-auto max-w-xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
              <div className="mt-8 w-full max-w-xl">
                <div className="relative group bg-white/6 border border-white/15 rounded-[28px] md:rounded-[32px] p-6 md:p-7 backdrop-blur-2xl ring-1 ring-white/10 shadow-[0_18px_48px_rgba(0,0,0,0.35)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="absolute -top-24 -left-24 w-52 h-52 bg-[#FFD700]/10 blur-[80px] rounded-full pointer-events-none" />
                  <div className="text-center mb-4">
                    <span className="text-[11px] font-['Rajdhani'] font-extrabold uppercase tracking-[0.3em] text-white/80">Important Dates</span>
                    <div className="mx-auto mt-2 w-24 h-px bg-gradient-to-r from-white/20 via-white/40 to-white/20" />
                  </div>
                  <ul className="text-white/85 text-sm md:text-base font-['Rajdhani'] leading-relaxed space-y-1.5">
                    <li>• Tournament Starts: June 11, 2026</li>
                    <li>• Final Match: July 19, 2026</li>
                    <li>• Winners Announced: Within 48 hours after Final</li>
                  </ul>
                  <div className="my-5 h-px bg-white/10" />
                  <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleShare}
                      className="w-full md:w-auto group relative px-8 py-4 rounded-full bg-[#01b47d] hover:bg-[#008f63] transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(1,180,125,0.3)]"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Share2 className="w-5 h-5 text-white" />
                        <span className="text-white font-bold font-['Rajdhani'] uppercase tracking-widest text-sm">Share Official Prediction</span>
                      </div>
                    </button>
                    <button
                      onClick={onRestart}
                      className="w-full md:w-auto group px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 active:scale-95"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 border border-white/20">
                          <RotateCcw className="w-4 h-4 text-white/80" />
                        </span>
                        <span className="text-white/80 font-bold font-['Rajdhani'] uppercase tracking-widest text-sm">Initialize New Prediction</span>
                      </div>
                    </button>
                  </div>
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
             className="w-full md:w-auto group relative px-8 py-4 rounded-full bg-[#01b47d] hover:bg-[#008f63] transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(1,180,125,0.3)]"
           >
             <div className="flex items-center justify-center gap-3">
               <Share2 className="w-5 h-5 text-white" />
              <span className="text-white font-bold font-['Rajdhani'] uppercase tracking-widest text-sm">Share Official Prediction</span>
             </div>
           </button>

            {onRestart && (
              <button
                onClick={onRestart}
                className="w-full md:w-auto group px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 active:scale-95"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 border border-white/20">
                    <RotateCcw className="w-4 h-4 text-white/80" />
                  </span>
                 <span className="text-white/80 font-bold font-['Rajdhani'] uppercase tracking-widest text-sm">Initialize New Prediction</span>
                </div>
              </button>
            )}

            <button
              onClick={() => (window.location.href = '/')}
              className="w-full md:w-auto group px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 border border-white/20">
                  <Home className="w-4 h-4 text-white/80" />
                </span>
                <span className="text-white/80 font-bold font-['Rajdhani'] uppercase tracking-widest text-sm">RETURN TO HOME</span>
              </div>
            </button>

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
    </>
  );
});
