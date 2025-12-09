import React, { useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { toPng, toBlob } from 'html-to-image';
import { ShareCard } from './ShareCard';
import { PrizeBento } from './PrizeBento';
import { TripTicket } from './TripTicket';
import { ActionIsland } from './ActionIsland';
import { RulesCard } from './RulesCard';
import { Team, TEAM_MAP } from '../lib/wc26-data';
import { Sparkles, CheckCircle2, RotateCcw, Trophy, LayoutGrid, Shield, Share2, Download, Mail, Globe, Home, ChevronRight } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { generateBracketMatches, Match } from '../lib/bracket-logic';
import { SEO } from '../../../components/common/SEO';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';

interface ResultDashboardProps {
  champion: Team;
  runnerUp?: Team;
  userName: string;
  userEmail?: string;
  userCountry?: string;
  uniqueId?: string; // Add uniqueId prop
  stats?: {
    topScorer: string;
    bestPlayer: string;
  };
  onRestart?: () => void;
  headlineOverride?: string;
  participantMinimal?: boolean;
  disableSEO?: boolean;
}

export const ResultDashboard: React.FC<ResultDashboardProps> = React.memo(({ champion, runnerUp, userName, userEmail, userCountry, uniqueId, stats, onRestart, headlineOverride, participantMinimal, disableSEO }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);
  // Use provided uniqueId or generate a fallback (though uniqueId should always be present after submission)
  const [entryId] = useState(() => uniqueId || `WC2026-${Math.random().toString(36).slice(2,8).toUpperCase()}`);
  const [submittedAt] = useState(() => new Date());
  const firstName = (userName || '').trim().split(/\s+/)[0] || 'User';
  
  // Reconstruct Bracket Logic
  const { groupStandings, knockoutPicks, thirdPlacePicks } = useGame();
  
  const bracketData = useMemo(() => {
    // 1. Generate R32 Base
    const { roundOf32 } = generateBracketMatches(groupStandings, thirdPlacePicks || []);
    
    // 2. Build R16
    const r16Matches: Match[] = [];
    for (let i = 1; i <= 8; i++) {
        const id = `R16-${i.toString().padStart(2, '0')}`;
        // Find R32 matches that feed into this R16 match
        const feedingMatches = roundOf32.filter(m => m.nextMatchId === id);
        // Determine teams based on picks
        const team1Id = knockoutPicks[feedingMatches[0]?.id] || null;
        const team2Id = knockoutPicks[feedingMatches[1]?.id] || null;
        r16Matches.push({ id, team1Id, team2Id, nextMatchId: `QF-${Math.ceil(i/2).toString().padStart(2, '0')}` });
    }

    // 3. Build QF
    const qfMatches: Match[] = [];
    for (let i = 1; i <= 4; i++) {
        const id = `QF-${i.toString().padStart(2, '0')}`;
        const feedingMatches = r16Matches.filter(m => m.nextMatchId === id);
        const team1Id = knockoutPicks[feedingMatches[0]?.id] || null;
        const team2Id = knockoutPicks[feedingMatches[1]?.id] || null;
        qfMatches.push({ id, team1Id, team2Id, nextMatchId: `SF-${Math.ceil(i/2).toString().padStart(2, '0')}` });
    }

    // 4. Build SF
    const sfMatches: Match[] = [];
    for (let i = 1; i <= 2; i++) {
        const id = `SF-${i.toString().padStart(2, '0')}`;
        const feedingMatches = qfMatches.filter(m => m.nextMatchId === id);
        const team1Id = knockoutPicks[feedingMatches[0]?.id] || null;
        const team2Id = knockoutPicks[feedingMatches[1]?.id] || null;
        sfMatches.push({ id, team1Id, team2Id, nextMatchId: 'F-01' });
    }
    
    // 5. Build Third Place (Losers of SF)
    const sf1LoserId = sfMatches[0] ? (knockoutPicks[sfMatches[0].id] === sfMatches[0].team1Id ? sfMatches[0].team2Id : sfMatches[0].team1Id) : null;
    const sf2LoserId = sfMatches[1] ? (knockoutPicks[sfMatches[1].id] === sfMatches[1].team1Id ? sfMatches[1].team2Id : sfMatches[1].team1Id) : null;
    
    return {
        roundOf32,
        roundOf16: r16Matches,
        quarterFinals: qfMatches,
        semiFinals: sfMatches,
        thirdPlace: { team1Id: sf1LoserId, team2Id: sf2LoserId }
    };
  }, [groupStandings, thirdPlacePicks, knockoutPicks]);

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
      link.download = `my-wc2026-prediction.png`;
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
        
        const file = new File([blob], `my-wc2026-prediction.png`, { type: "image/png" });

        if (navigator.share) {
            await navigator.share({
                title: 'My WC26 Prediction',
                text: `I predict ${champion.name} will win the World Cup 2026! 🏆 #Stadiumport #WC26`,
                files: [file]
            });
        } else {
            const link = document.createElement('a');
            link.download = `my-wc2026-prediction.png`;
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

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(entryId);
      // Could add a temporary "Copied!" state here if desired
      const btn = document.getElementById('copy-id-btn');
      if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!</span>';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      }
    } catch {}
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
      {!disableSEO && (
        <>
          <SEO 
            title={`World Cup 2026 Official Entry | ${userName}`}
            description={`Official prediction entry: ${userName} picks ${champion.name} as World Cup 2026 champion. View full bracket and share card.`}
            keywords={["World Cup 2026 official entry", "prediction bracket", "soccer prediction card", "stadiumport prediction"]}
            url="/world-cup-2026-prediction-game/entry"
            image={`https://stadiumport.com/share/wc26-${champion.id}.png`}
          />
          <SchemaOrg schema={{
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "name": "World Cup 2026 Official Prediction Entry",
            "description": "Official prediction entry with champion pick and full bracket details.",
            "url": "https://stadiumport.com/world-cup-2026-prediction-game/entry",
            "mainEntity": {
              "@type": "SportsEvent",
              "name": "World Cup 2026",
              "competitor": {
                "@type": "SportsTeam",
                "name": champion.name
              }
            }
          }} />
        </>
      )}
    {/* Clean Container - Transparent to show GameLayout background */}
    <div className="w-full h-full overflow-y-auto custom-scrollbar relative z-10">
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-32 md:pt-28"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        
        
        {/* 1. Premium Header */}
        <motion.header variants={itemVariants} className="text-center mb-16 relative">
           <h1 className="text-6xl md:text-8xl font-black font-['Teko'] uppercase tracking-tight leading-[0.85] mb-2 text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:via-white dark:to-white/50">
             {(() => {
               const text = headlineOverride || 'Official Entry Confirmed';
               const poss = userName ? `${userName}'s` : '';
               const idx = poss ? text.indexOf(poss) : -1;
               if (idx >= 0) {
                 return (
                   <>
                     {text.slice(0, idx)}
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] via-emerald-400 to-cyan-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                       {poss}
                     </span>
                     {text.slice(idx + poss.length)}
                   </>
                 );
               }
               return text;
             })()}
           </h1>
           <p className="text-[#01b47d] font-bold text-lg font-['Rajdhani'] tracking-widest uppercase">
              Official World Cup 2026 predictions Confirmed, Good luck competing for official prizes!
            </p>
            {participantMinimal && (
              <div className="mx-auto mt-6 max-w-4xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                  <span className="text-slate-400 dark:text-white/60 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Official Participant Record</span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white/6 border border-white/12 ring-1 ring-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(255,255,255,0.06)]">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                    <span className="text-[11px] text-white/70">Name</span>
                    <span className="text-[12px] font-bold text-white">{userName || '—'}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                    <span className="text-[11px] text-white/70">Country</span>
                    <span className="text-[12px] font-bold text-white">{userCountry || '—'}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                    <span className="text-[11px] text-white/70">{firstName} ID</span>
                    <span className="text-[12px] font-bold text-white">{entryId}</span>
                  </div>
                </div>
              </div>
            )}
        </motion.header>
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
            <span className="text-[10px] font-bold text-slate-500 dark:text-white/60 uppercase tracking-widest font-['Rajdhani']">{firstName}'s PREDICTED CHAMPION</span>
          </div>
          <div className="mt-4">
            <div className="text-5xl md:text-7xl font-black font-['Teko'] uppercase tracking-tight leading-[0.9] text-slate-900 dark:text-white">{champion.name}</div>
            <p className="text-[#01b47d] font-bold text-sm md:text-base font-['Rajdhani'] tracking-widest uppercase mt-1">World Cup 2026 Winner</p>
          </div>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black font-['Teko'] uppercase tracking-tight text-[#FBBF24]">
            Complete Bracket Summary
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

           {/* Section 1: Full Group Predictions (Span 12 or 8) */}
           <motion.div variants={itemVariants} className={participantMinimal ? "md:col-span-12 flex flex-col items-center gap-6" : "md:col-span-12 lg:col-span-8 flex flex-col gap-6"}>
              <div className="flex items-center justify-center gap-4 w-full max-w-4xl mx-auto">
                 <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                 <span className="text-slate-400 dark:text-white/60 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Group Stage Predictions</span>
                 <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
              </div>
              
              {(() => {
                const entries = Object.entries(groupStandings);
                const rows: Array<Array<[string, string[]]>> = [];
                for (let i = 0; i < entries.length; i += 3) rows.push(entries.slice(i, i + 3));
                return (
                  <div className="w-full max-w-6xl mx-auto space-y-4">
                    {rows.map((row, rowIdx) => (
                      <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {row.map(([groupId, teamIds]) => (
                          <div key={groupId} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 flex flex-col gap-3">
                            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
                              <span className="text-xs font-bold text-slate-500 dark:text-white/60 font-['Rajdhani']">GROUP {groupId}</span>
                            </div>
                            <div className="space-y-2">
                              {teamIds.map((teamId, index) => {
                                const team = getTeam(teamId);
                                if (!team) return null;
                                return (
                                  <div key={teamId} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <span className={`text-[10px] font-bold w-4 ${index < 2 ? 'text-[#01b47d]' : 'text-slate-400'}`}>{index + 1}</span>
                                      <div className="flex items-center gap-2">
                                        {['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team.id) ? (
                                          <div className="w-5 h-4 rounded shadow-sm flex items-center justify-center bg-slate-700/50">
                                            <span className="text-[6px] font-bold text-slate-400">FIFA</span>
                                          </div>
                                        ) : (
                                          <img src={team.flagUrl} alt={team.name} className="w-5 h-4 object-cover rounded shadow-sm" />
                                        )}
                                        <span className={`text-xs font-['Rajdhani'] font-semibold ${index < 2 ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-white/50'}`}>{team.name}</span>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })()}
           </motion.div>

          {/* Section 4: User Info / Quick Stats (Span 4) */}
          {!participantMinimal && (
          <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-4 flex flex-col gap-6">
               <div className="flex items-center gap-4">
                 <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                 <span className="text-slate-400 dark:text-white/60 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Official Participant Record</span>
                 <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
              </div>

            <div className="group relative bg-white/6 dark:bg-white/5 backdrop-blur-2xl ring-1 ring-white/10 rounded-3xl p-7 flex flex-col items-center justify-center h-full overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
                <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-white/10 bg-gradient-to-b from-white/12 via-white/6 to-transparent [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.3),transparent)] [background-position:top] [background-size:100%_60%]" />
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-white/8 dark:bg-white/10 blur-[100px] rounded-full" />
                <div className="w-full space-y-4 text-slate-700 dark:text-white/90 text-[12px] md:text-sm font-['Rajdhani'] font-medium relative z-10">
                  
                  

                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="text-white/70">Name:</span>
                        <span className="font-bold truncate max-w-[220px] text-white">{userName || '—'}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="text-white/70">Country:</span>
                        <span className="font-bold truncate max-w-[220px] text-white">{userCountry || '—'}</span>
                    </div>
                    {participantMinimal && (
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="text-white/70">{firstName} ID:</span>
                        <span className="font-bold truncate max-w-[220px] text-white">{entryId}</span>
                      </div>
                    )}
                    {!participantMinimal && (
                      <>
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <span className="text-white/70">Email:</span>
                            <span className="font-bold truncate max-w-[220px] text-white">{userEmail || '—'}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <span className="text-white/70">Submitted:</span>
                            <span className="font-bold truncate max-w-[220px] text-white">{submittedAt.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                            <span className="text-white/70">Status:</span>
                            <span className="inline-flex items-center gap-2 font-bold text-[#01b47d]">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Verified & Locked
                            </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {!participantMinimal && (
                  <p className="mt-3 text-[11px] md:text-xs text-white/60">
                    ⚠️ Predictions are locked and cannot be edited.
                  </p>
                )}
              </div>
           </motion.div>
          )}

           {/* Section: Full Knockout Breakdown */}
           <motion.div variants={itemVariants} className="md:col-span-12 flex flex-col gap-12 mt-8">
              
              {/* 1. Round of 32 */}
              <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                     <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                     <span className="text-slate-400 dark:text-white/60 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Round of 32 Predictions</span>
                     <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                     {bracketData.roundOf32.map((match) => {
                         const winnerId = knockoutPicks[match.id];
                         const winner = getTeam(winnerId);
                         const team1 = getTeam(match.team1Id || '');
                         const team2 = getTeam(match.team2Id || '');
                         
                         return (
                             <div key={match.id} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-2 flex flex-col gap-1">
                                 <div className={`flex items-center justify-between p-1 rounded ${winnerId === team1?.id ? 'bg-[#01b47d]/10' : ''}`}>
                                     <div className="flex items-center gap-2">
                                         {team1 ? (
                                           ['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team1.id) ? (
                                             <div className="w-4 h-3 rounded-[1px] bg-slate-700/50 flex items-center justify-center">
                                                <span className="text-[5px] font-bold text-slate-400">FIFA</span>
                                             </div>
                                           ) : (
                                             <img src={team1.flagUrl} className="w-4 h-3 rounded-[1px]" />
                                           )
                                         ) : <div className="w-4 h-3 bg-slate-200 rounded-[1px]" />}
                                        <span className={`text-[10px] font-['Rajdhani'] font-bold ${winnerId === team1?.id ? 'text-[#01b47d]' : 'text-slate-500 dark:text-white/50'}`}>{team1?.name || 'TBD'}</span>
                                     </div>
                                 </div>
                                 <div className={`flex items-center justify-between p-1 rounded ${winnerId === team2?.id ? 'bg-[#01b47d]/10' : ''}`}>
                                     <div className="flex items-center gap-2">
                                         {team2 ? (
                                           ['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team2.id) ? (
                                             <div className="w-4 h-3 rounded-[1px] bg-slate-700/50 flex items-center justify-center">
                                                <span className="text-[5px] font-bold text-slate-400">FIFA</span>
                                             </div>
                                           ) : (
                                             <img src={team2.flagUrl} className="w-4 h-3 rounded-[1px]" />
                                           )
                                         ) : <div className="w-4 h-3 bg-slate-200 rounded-[1px]" />}
                                        <span className={`text-[10px] font-['Rajdhani'] font-bold ${winnerId === team2?.id ? 'text-[#01b47d]' : 'text-slate-500 dark:text-white/50'}`}>{team2?.name || 'TBD'}</span>
                                     </div>
                                 </div>
                             </div>
                         );
                     })}
                  </div>
              </div>

              {/* 2. Round of 16 */}
              <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                     <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                     <span className="text-slate-400 dark:text-white/60 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Round of 16 Predictions</span>
                     <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                     {bracketData.roundOf16.map((match) => {
                         const winnerId = knockoutPicks[match.id];
                         const team1 = getTeam(match.team1Id || '');
                         const team2 = getTeam(match.team2Id || '');
                         
                         return (
                             <div key={match.id} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 flex flex-col gap-2 relative overflow-hidden">
                                 <div className={`flex items-center justify-between p-1.5 rounded-lg transition-colors ${winnerId === team1?.id ? 'bg-[#01b47d]/10 ring-1 ring-[#01b47d]/20' : ''}`}>
                                     <div className="flex items-center gap-3">
                                         {team1 ? (
                                            ['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team1.id) ? (
                                              <div className="w-6 h-4 rounded shadow-sm bg-slate-700/50 flex items-center justify-center">
                                                 <span className="text-[6px] font-bold text-slate-400">FIFA</span>
                                              </div>
                                            ) : (
                                              <img src={team1.flagUrl} className="w-6 h-4 rounded shadow-sm" />
                                            )
                                         ) : <div className="w-6 h-4 bg-slate-200 rounded" />}
                                         <span className={`text-xs font-['Teko'] uppercase tracking-wide text-lg leading-none ${winnerId === team1?.id ? 'text-[#01b47d]' : 'text-slate-500 dark:text-white/50'}`}>{team1?.name || 'TBD'}</span>
                                     </div>
                                     {winnerId === team1?.id && <CheckCircle2 className="w-3 h-3 text-[#01b47d]" />}
                                 </div>
                                 <div className={`flex items-center justify-between p-1.5 rounded-lg transition-colors ${winnerId === team2?.id ? 'bg-[#01b47d]/10 ring-1 ring-[#01b47d]/20' : ''}`}>
                                     <div className="flex items-center gap-3">
                                         {team2 ? (
                                            ['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team2.id) ? (
                                              <div className="w-6 h-4 rounded shadow-sm bg-slate-700/50 flex items-center justify-center">
                                                 <span className="text-[6px] font-bold text-slate-400">FIFA</span>
                                              </div>
                                            ) : (
                                              <img src={team2.flagUrl} className="w-6 h-4 rounded shadow-sm" />
                                            )
                                         ) : <div className="w-6 h-4 bg-slate-200 rounded" />}
                                         <span className={`text-xs font-['Teko'] uppercase tracking-wide text-lg leading-none ${winnerId === team2?.id ? 'text-[#01b47d]' : 'text-slate-500 dark:text-white/50'}`}>{team2?.name || 'TBD'}</span>
                                     </div>
                                     {winnerId === team2?.id && <CheckCircle2 className="w-3 h-3 text-[#01b47d]" />}
                                 </div>
                             </div>
                         );
                     })}
                  </div>
              </div>

              {/* 3. Quarter Finals */}
              <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                     <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                     <span className="text-slate-400 dark:text-white/60 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Quarter-Final Predictions</span>
                     <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                     {bracketData.quarterFinals.map((match) => {
                         const winnerId = knockoutPicks[match.id];
                         const team1 = getTeam(match.team1Id || '');
                         const team2 = getTeam(match.team2Id || '');
                         
                         return (
                             <div key={match.id} className="bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 rounded-xl p-4 flex flex-col gap-3 shadow-sm">
                                 <div className={`flex items-center justify-between ${winnerId === team1?.id ? 'opacity-100' : 'opacity-50'}`}>
                                     <div className="flex items-center gap-3">
                                         {team1 ? (
                                            ['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team1.id) ? (
                                              <div className="w-8 h-6 rounded shadow-sm bg-slate-700/50 flex items-center justify-center">
                                                 <span className="text-[8px] font-bold text-slate-400">FIFA</span>
                                              </div>
                                            ) : (
                                              <img src={team1.flagUrl} className="w-8 h-6 rounded shadow-sm" />
                                            )
                                         ) : <div className="w-8 h-6 bg-slate-200 rounded" />}
                                         <span className="font-['Teko'] text-xl uppercase leading-none text-slate-900 dark:text-white">{team1?.name || 'TBD'}</span>
                                     </div>
                                     {winnerId === team1?.id && <div className="text-[10px] font-bold bg-[#01b47d] text-white px-2 py-0.5 rounded">WIN</div>}
                                 </div>
                                 <div className="h-px bg-slate-100 dark:bg-white/10 w-full" />
                                 <div className={`flex items-center justify-between ${winnerId === team2?.id ? 'opacity-100' : 'opacity-50'}`}>
                                     <div className="flex items-center gap-3">
                                         {team2 ? (
                                            ['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team2.id) ? (
                                              <div className="w-8 h-6 rounded shadow-sm bg-slate-700/50 flex items-center justify-center">
                                                 <span className="text-[8px] font-bold text-slate-400">FIFA</span>
                                              </div>
                                            ) : (
                                              <img src={team2.flagUrl} className="w-8 h-6 rounded shadow-sm" />
                                            )
                                         ) : <div className="w-8 h-6 bg-slate-200 rounded" />}
                                         <span className="font-['Teko'] text-xl uppercase leading-none text-slate-900 dark:text-white">{team2?.name || 'TBD'}</span>
                                     </div>
                                     {winnerId === team2?.id && <div className="text-[10px] font-bold bg-[#01b47d] text-white px-2 py-0.5 rounded">WIN</div>}
                                 </div>
                             </div>
                         );
                     })}
                  </div>
              </div>

              {/* 4. Semi-Finals */}
              <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                     <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                     <span className="text-slate-400 dark:text-white/60 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Semi-Final Predictions</span>
                     <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {bracketData.semiFinals.map((match) => {
                         const winnerId = knockoutPicks[match.id];
                         const team1 = getTeam(match.team1Id || '');
                         const team2 = getTeam(match.team2Id || '');
                         return (
                             <div key={match.id} className="bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 rounded-xl p-4">
                                 <div className={`flex items-center justify-between mb-3 ${winnerId === team1?.id ? 'opacity-100' : 'opacity-50'}`}>
                                     <div className="flex items-center gap-3">
                                         {team1 && (
                                           ['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team1.id) ? (
                                             <div className="w-6 h-4 rounded bg-slate-700/50 flex items-center justify-center">
                                                <span className="text-[6px] font-bold text-slate-400">FIFA</span>
                                             </div>
                                           ) : (
                                             <img src={team1.flagUrl} className="w-6 h-4 rounded" />
                                           )
                                         )}
                                         <span className="font-['Teko'] text-xl uppercase text-slate-900 dark:text-white">{team1?.name}</span>
                                     </div>
                                     {winnerId === team1?.id && <CheckCircle2 className="w-4 h-4 text-[#01b47d]" />}
                                 </div>
                                 <div className={`flex items-center justify-between ${winnerId === team2?.id ? 'opacity-100' : 'opacity-50'}`}>
                                     <div className="flex items-center gap-3">
                                         {team2 && (
                                           ['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team2.id) ? (
                                             <div className="w-6 h-4 rounded bg-slate-700/50 flex items-center justify-center">
                                                <span className="text-[6px] font-bold text-slate-400">FIFA</span>
                                             </div>
                                           ) : (
                                             <img src={team2.flagUrl} className="w-6 h-4 rounded" />
                                           )
                                         )}
                                         <span className="font-['Teko'] text-xl uppercase text-slate-900 dark:text-white">{team2?.name}</span>
                                     </div>
                                     {winnerId === team2?.id && <CheckCircle2 className="w-4 h-4 text-[#01b47d]" />}
                                 </div>
                             </div>
                         );
                     })}
                  </div>
              </div>

              {/* 5. Third Place Match */}
              <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                     <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                     <span className="text-slate-400 dark:text-white/60 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">Third Place Match Prediction</span>
                     <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                  </div>
                  <div className="max-w-2xl mx-auto w-full">
                       <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 flex flex-col justify-center h-full">
                           <div className="flex flex-col gap-2">
                              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                  <div className="flex items-center gap-3">
                                      {getTeam(bracketData.thirdPlace.team1Id || '') && (
                                        ['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(getTeam(bracketData.thirdPlace.team1Id || '')?.id || '') ? (
                                          <div className="w-8 h-6 rounded bg-slate-700/50 flex items-center justify-center">
                                             <span className="text-[8px] font-bold text-slate-400">FIFA</span>
                                          </div>
                                        ) : (
                                          <img src={getTeam(bracketData.thirdPlace.team1Id || '')?.flagUrl} className="w-8 h-6 rounded shadow-sm" />
                                        )
                                      )}
                                      <span className="font-['Teko'] text-xl uppercase text-slate-900 dark:text-white">{getTeam(bracketData.thirdPlace.team1Id || '')?.name || 'TBD'}</span>
                                  </div>
                                  <span className="text-[10px] font-bold text-slate-400 bg-slate-200 dark:bg-white/10 px-2 py-0.5 rounded">SF L1</span>
                              </div>
                              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                  <div className="flex items-center gap-3">
                                      {getTeam(bracketData.thirdPlace.team2Id || '') && (
                                        ['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(getTeam(bracketData.thirdPlace.team2Id || '')?.id || '') ? (
                                          <div className="w-8 h-6 rounded bg-slate-700/50 flex items-center justify-center">
                                             <span className="text-[8px] font-bold text-slate-400">FIFA</span>
                                          </div>
                                        ) : (
                                          <img src={getTeam(bracketData.thirdPlace.team2Id || '')?.flagUrl} className="w-8 h-6 rounded shadow-sm" />
                                        )
                                      )}
                                      <span className="font-['Teko'] text-xl uppercase text-slate-900 dark:text-white">{getTeam(bracketData.thirdPlace.team2Id || '')?.name || 'TBD'}</span>
                                  </div>
                                  <span className="text-[10px] font-bold text-slate-400 bg-slate-200 dark:bg-white/10 px-2 py-0.5 rounded">SF L2</span>
                            </div>
                            {/* Outcome: 3rd & 4th Places */}
                            <div className="mt-3 flex items-center justify-center gap-3 text-xs font-['Rajdhani'] uppercase tracking-widest text-slate-500 dark:text-white/60">
                              {(() => {
                                const tpWinnerId = knockoutPicks['TP-01'];
                                const t1 = getTeam(bracketData.thirdPlace.team1Id || '');
                                const t2 = getTeam(bracketData.thirdPlace.team2Id || '');
                                const tpLoserId = tpWinnerId && (tpWinnerId === t1?.id ? t2?.id : t1?.id);
                                return (
                                  <>
                                    <span className="inline-flex items-center gap-2 bg-white/40 dark:bg-white/10 px-2.5 py-1 rounded">
                                      <span className="text-[#01b47d] font-bold">3rd</span>
                                      <span className="font-bold text-slate-700 dark:text-white">{getTeam(tpWinnerId || '')?.name || 'TBD'}</span>
                                    </span>
                                    <span className="text-white/30">•</span>
                                    <span className="inline-flex items-center gap-2 bg-white/40 dark:bg-white/10 px-2.5 py-1 rounded">
                                      <span className="text-slate-400 font-bold">4th</span>
                                      <span className="font-bold text-slate-700 dark:text-white">{getTeam(tpLoserId || '')?.name || 'TBD'}</span>
                                    </span>
                                  </>
                                );
                              })()}
                            </div>
                        </div>
                  </div>
              </div>
              </div>

              {/* 6. World Cup Final */}
               <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-4">
                      <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                      <span className="text-slate-400 dark:text-white/60 text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani']">World Cup Final Prediction</span>
                      <div className="h-px flex-1 bg-slate-200 dark:bg-white/20"></div>
                   </div>
                   <div className="max-w-2xl mx-auto w-full">
                       <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-white/5 dark:to-white/10 border border-[#FBBF24]/30 rounded-xl p-4 flex flex-col justify-center h-full shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                           <div className="flex flex-col gap-2">
                               {/* Champion (Winner) */}
                               <div className="flex items-center justify-between p-3 rounded-lg bg-[#FBBF24]/10 border border-[#FBBF24]/20 relative overflow-hidden">
                                   <div className="absolute inset-0 bg-gradient-to-r from-[#FBBF24]/10 via-transparent to-transparent opacity-50" />
                                   <div className="flex items-center gap-3 relative z-10">
                                       {['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(champion.id) ? (
                                         <div className="w-8 h-6 rounded bg-slate-700/50 flex items-center justify-center border border-[#FBBF24]/30">
                                            <span className="text-[8px] font-bold text-slate-400">FIFA</span>
                                         </div>
                                       ) : (
                                         <img src={champion.flagUrl} className="w-8 h-6 rounded shadow-sm ring-1 ring-[#FBBF24]/40" />
                                       )}
                                       <span className="font-['Teko'] text-xl uppercase text-slate-900 dark:text-white">{champion.name}</span>
                                   </div>
                                   <div className="flex items-center gap-2 relative z-10">
                                       <Trophy className="w-4 h-4 text-[#FBBF24]" />
                                       <span className="text-[10px] font-bold text-[#FBBF24] bg-[#FBBF24]/10 px-2 py-0.5 rounded border border-[#FBBF24]/20">WINNER</span>
                                   </div>
                               </div>
                               
                               {/* Runner Up */}
                               <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                   <div className="flex items-center gap-3">
                                       {runnerUp ? (
                                           <>
                                            {['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(runnerUp.id) ? (
                                                <div className="w-8 h-6 rounded bg-slate-700/50 flex items-center justify-center">
                                                    <span className="text-[8px] font-bold text-slate-400">FIFA</span>
                                                </div>
                                            ) : (
                                                <img src={runnerUp.flagUrl} className="w-8 h-6 rounded shadow-sm" />
                                            )}
                                            <span className="font-['Teko'] text-xl uppercase text-slate-900 dark:text-white">{runnerUp.name}</span>
                                           </>
                                       ) : (
                                           <div className="flex items-center gap-3 opacity-50">
                                               <div className="w-8 h-6 bg-slate-200 dark:bg-white/10 rounded"></div>
                                               <span className="font-['Teko'] text-xl uppercase text-slate-400">TBD</span>
                                           </div>
                                       )}
                                   </div>
                                   <span className="text-[10px] font-bold text-slate-400 bg-slate-200 dark:bg-white/10 px-2 py-0.5 rounded">RUNNER-UP</span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>

           </motion.div>

          {/* Section 3: Official Card (Visual Highlight) */}
          <motion.div variants={itemVariants} className="md:col-span-12 mt-8 flex flex-col items-center">
            <div className="mb-4 text-center">
          <h3 className="text-[12px] md:text-sm font-['Rajdhani'] font-extrabold uppercase tracking-[0.25em] text-slate-500 dark:text-white/70">{participantMinimal ? `${userName} Prediction CARD` : 'SHARE YOUR PREDICTION CARD'}</h3>
            </div>
            <div className="relative group cursor-pointer" onClick={handleSaveImage}>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#01b47d] via-[#01b47d] to-purple-600 rounded-[32px] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-soft-light pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.35), transparent 60%)', maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.35), transparent 60%)' }} />
                <ShareCard 
                   champion={champion} 
                   runnerUp={runnerUp}
                   userName={userName} 
                   userCountry={userCountry}
                   uniqueId={entryId}
                   stats={stats}
                   className="relative transform transition-transform duration-500 group-hover:scale-[1.01]"
                />
              
            </div>
            {!participantMinimal && (
              <div className="mt-5 flex justify-center">
                <button
                  type="button"
                  aria-label="Download My Prediction Card"
                  onClick={handleSaveImage}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/8 border border-white/15 ring-1 ring-white/10 backdrop-blur-xl text-white shadow-[0_8px_30px_rgba(255,255,255,0.06)] hover:bg-white/12 active:scale-[0.98] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <Download className="w-4 h-4 text-white/85" />
                  <span className="text-[12px] font-inter font-medium uppercase tracking-[0.12em]">Download My Card</span>
                </button>
              </div>
            )}
            {participantMinimal && (
              <div className="mt-5 flex justify-center">
                <button
                  type="button"
                  onClick={() => { window.location.href = '/world-cup-2026-prediction-game'; }}
                  className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#01b47d] hover:bg-emerald-500 text-white font-['Rajdhani'] uppercase tracking-widest shadow-lg shadow-emerald-500/25 ring-1 ring-emerald-400/20 transition-all active:scale-[0.98]"
                  aria-label="Play the game for a chance to win big prizes"
                  title="Play the game for a chance to win big prizes"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l2.39 4.84L20 7.27l-3.64 3.54.86 5.02L12 14.77 6.78 15.83l.86-5.02L4 7.27l5.61-.43L12 2z" />
                    </svg>
                  </span>
                  <span>Play Now — Win Big Prizes</span>
                </button>
              </div>
            )}
              <div className="my-8 w-full">
                <div className="mx-auto max-w-xl h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/20 to-transparent" />
              </div>
            </motion.div>

           {/* Section 5: Full Rules */}
           <motion.div variants={itemVariants} className="md:col-span-12 mt-8">
              <RulesCard variant="full" />
           </motion.div>

        </div>

        

      </motion.div>

      {/* Hidden Render for Image Generation */}
      <div className="fixed top-0 -left-[9999px] w-[360px] h-[640px] z-[-1]">
        <div ref={exportRef} className="w-[360px] h-[640px] rounded-[40px] overflow-hidden relative bg-[#0a0a0a]">
           <ShareCard 
              champion={champion} 
              runnerUp={runnerUp}
              userName={userName} 
              uniqueId={entryId}
              stats={stats}
              className="scale-100 shadow-none"
           />
        </div>
      </div>
    </div>
    </>
  );
});
