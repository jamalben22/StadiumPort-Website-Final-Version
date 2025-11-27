import React, { useRef, useState, useMemo, forwardRef, useImperativeHandle } from 'react';
import { toJpeg } from 'html-to-image';
import { QRCodeSVG } from 'qrcode.react';
import { useGame } from '../context/GameContext';
import { TEAMS } from '../lib/wc26-data';
import { generateBracketMatches, Match } from '../lib/bracket-logic';
import { motion } from 'framer-motion';

export interface ShareCardRef {
  downloadImage: () => Promise<void>;
  isGenerating: boolean;
}

interface ShareCardProps {
  userName?: string;
}

export const ShareCard = forwardRef<ShareCardRef, ShareCardProps>(({ userName = "Fan" }, ref) => {
  const { knockoutPicks, groupStandings, thirdPlacePicks } = useGame();
  const [isGenerating, setIsGenerating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Identify Champion
  const championId = knockoutPicks['F-01'];
  const champion = TEAMS.find((t) => t.id === championId);

  // --- Stats Calculation ---
  const stats = useMemo(() => {
    if (!champion) return { riskLevel: 'Unknown', topUpset: 'None yet' };

    // 1. Risk Level
    // If Champion rating > 88 => Safe, else High Risk
    // (Adjust threshold based on your data. Assuming top teams are ~90+)
    const riskLevel = (champion.rating || 80) >= 88 ? 'Safe' : 'High';

    // 2. Top Upset
    // Reconstruct full bracket matches to find who played whom
    const { roundOf32 } = generateBracketMatches(groupStandings, thirdPlacePicks);
    let allMatches: Match[] = [...roundOf32];

    // Generate subsequent rounds (structure mirror from BracketView)
    const rounds = [
        { id: 'R16', count: 8, next: 'QF' },
        { id: 'QF', count: 4, next: 'SF' },
        { id: 'SF', count: 2, next: 'F' },
        { id: 'F', count: 1, next: null }
    ];

    rounds.forEach(r => {
        for (let i = 1; i <= r.count; i++) {
            const id = `${r.id}-${i.toString().padStart(2, '0')}`;
            const nextId = r.next ? `${r.next}-${Math.ceil(i / 2).toString().padStart(2, '0')}` : undefined;
            allMatches.push({ id, team1Id: null, team2Id: null, nextMatchId: nextId });
        }
    });

    let maxRatingDelta = -100;
    let bestUpset = "None";

    // Helper to resolve winner for a match input
    const getWinnerOf = (matchId: string) => knockoutPicks[matchId];

    // Iterate matches to find participants
    // We need to resolve participants for later rounds dynamically
    const resolvedMatches = new Map<string, { t1: string | null, t2: string | null }>();

    // Initialize R32 participants
    roundOf32.forEach(m => {
        resolvedMatches.set(m.id, { t1: m.team1Id, t2: m.team2Id });
    });

    // Process all matches in order (R32 -> R16 -> ...) to propagate winners
    allMatches.sort((a, b) => a.id.localeCompare(b.id)).forEach(match => {
        let t1Id = match.team1Id;
        let t2Id = match.team2Id;

        // If not R32, we need to find who fed into this match
        if (!match.id.startsWith('R32')) {
            // Find matches that point to this one
            const feeders = allMatches.filter(m => m.nextMatchId === match.id).sort((a, b) => a.id.localeCompare(b.id));
            if (feeders.length === 2) {
                t1Id = getWinnerOf(feeders[0].id) || null;
                t2Id = getWinnerOf(feeders[1].id) || null;
            }
        }

        const winnerId = knockoutPicks[match.id];
        
        if (t1Id && t2Id && winnerId) {
            const winner = TEAMS.find(t => t.id === winnerId);
            const loserId = winnerId === t1Id ? t2Id : t1Id;
            const loser = TEAMS.find(t => t.id === loserId);

            if (winner && loser) {
                // Upset = Loser Rating - Winner Rating
                // Example: Winner (80) beats Loser (90) -> Delta 10.
                const delta = (loser.rating || 0) - (winner.rating || 0);
                
                if (delta > maxRatingDelta && delta > 0) { // Only count if actually lower rated
                    maxRatingDelta = delta;
                    bestUpset = `${winner.fifaCode} def. ${loser.fifaCode}`;
                }
            }
        }
    });

    return { riskLevel, topUpset: bestUpset === "None" ? "Favorites Only" : bestUpset };
  }, [champion, knockoutPicks, groupStandings, thirdPlacePicks]);

  const handleDownload = async () => {
    if (cardRef.current === null) return;
    
    setIsGenerating(true);
    try {
      const dataUrl = await toJpeg(cardRef.current, { quality: 0.95, pixelRatio: 2 });
      const link = document.createElement('a');
      link.download = `wc26-prediction-${champion?.code}.jpg`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
    } finally {
      setIsGenerating(false);
    }
  };

  useImperativeHandle(ref, () => ({
    downloadImage: handleDownload,
    isGenerating
  }));

  if (!champion) return null;

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* 
        Spotify Wrapped / Hype Style Card
        Dimensions: 360x640 (Mobile Vertical Aspect 9:16)
      */}
      <div className="relative group perspective-1000">
        <div 
          ref={cardRef}
          className="w-[360px] h-[640px] relative overflow-hidden bg-slate-950 shadow-2xl"
        >
          {/* --- Backgrounds --- */}
          {/* Dark Moody Stadium Image */}
          <div className="absolute inset-0">
            <img 
                src="/images/articles/dallas city guide/AT&T Stadium Interior.webp" 
                alt="Stadium Background" 
                className="w-full h-full object-cover grayscale opacity-40"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FBBF24]/20 via-transparent to-transparent mix-blend-overlay" />
          </div>
          
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20 mix-blend-overlay" />

          {/* --- Content Grid --- */}
          <div className="relative h-full flex flex-col p-8 z-10 text-white">
            
            {/* 1. Header */}
            <div className="flex flex-col items-center justify-center pt-4 mb-8">
                <div className="flex items-center gap-2 mb-2">
                    <i className="ri-vip-crown-fill text-[#FBBF24]"></i>
                    <span className="text-[10px] font-bold tracking-[0.4em] text-[#FBBF24] uppercase">
                        Official Prediction
                    </span>
                    <i className="ri-vip-crown-fill text-[#FBBF24]"></i>
                </div>
                <h1 className="text-3xl font-black italic uppercase tracking-tighter text-center leading-none">
                    World Cup<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                        2026
                    </span>
                </h1>
            </div>

            {/* 2. Main Character (Champion) */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FBBF24] rounded-full blur-[100px] opacity-20 animate-pulse" />
                
                {/* Huge Flag / Jersey Placeholder */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative w-56 h-56 mb-8 flex items-center justify-center"
                >
                    {/* Circle decorative ring */}
                    <div className="absolute inset-0 border border-[#FBBF24]/30 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-2 border border-[#FBBF24]/10 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
                    
                    <img 
                        src={champion.flagUrl} 
                        alt={champion.name}
                        className="relative w-48 h-48 object-cover rounded-full shadow-[0_0_50px_rgba(251,191,36,0.3)] border-4 border-black/50"
                    />
                    
                    {/* Champion Badge Overlay */}
                    <div className="absolute -bottom-6 bg-gradient-to-r from-[#FBBF24] to-[#b45309] text-black font-black text-xl italic uppercase px-6 py-2 -skew-x-12 shadow-lg border-2 border-white/20">
                        Winner
                    </div>
                </motion.div>

                <h2 className="text-5xl font-black uppercase tracking-tight text-center leading-none mb-2 drop-shadow-xl">
                    {champion.name}
                </h2>
                <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-widest">
                    <span>Predicted by</span>
                    <span className="text-white font-bold border-b border-[#FBBF24]">{userName}</span>
                </div>
            </div>

            {/* 3. Footer / Stats */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div className="text-center">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Risk Level</div>
                    <div className={`text-xl font-black italic ${stats.riskLevel === 'High' ? 'text-red-500' : 'text-emerald-400'}`}>
                        {stats.riskLevel}
                    </div>
                </div>
                <div className="text-center border-l border-white/10">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Top Upset</div>
                    <div className="text-xl font-black italic text-[#FBBF24] truncate px-2">
                        {stats.topUpset}
                    </div>
                </div>
            </div>
            
            {/* Watermark */}
            <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="text-[8px] text-white/20 uppercase tracking-[0.2em]">StadiumPort.com</span>
            </div>
          </div>
          
          {/* Holographic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
});

export default ShareCard;
