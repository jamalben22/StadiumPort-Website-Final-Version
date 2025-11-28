import React, { forwardRef } from 'react';
import { Team } from '../lib/wc26-data';
import { Trophy, Star, Shirt, Disc, Share2, Globe, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface ShareCardProps {
  champion: Team;
  runnerUp?: Team;
  userName: string;
  stats?: {
    topScorer: string;
    bestPlayer: string;
  };
  className?: string;
}

const getTeamBackground = (team: Team) => {
  const id = team.id;
  const [p, s] = team.colors;
  
  // Argentina: Light blue/white gradient + sun symbol + particles
  if (id === 'arg') {
    return {
      background: `radial-gradient(circle at 50% 30%, #74ACDF 0%, #FFFFFF 40%, #74ACDF 80%)`,
      overlay: `
        radial-gradient(circle at 50% 50%, rgba(255, 200, 0, 0.3) 0%, transparent 50%),
        repeating-conic-gradient(from 0deg, rgba(255,255,255,0.1) 0deg, rgba(255,255,255,0.1) 10deg, transparent 10deg, transparent 20deg)
      `,
      particleColor: '#FFD700'
    };
  }
  
  // Brazil: Green/yellow gradient + diamond patterns + vibrant energy
  if (id === 'bra') {
    return {
      background: `radial-gradient(circle at 50% 40%, #FEDF00 0%, #009B3A 70%, #002776 100%)`,
      overlay: `
        repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 20px, transparent 20px, transparent 40px),
        radial-gradient(circle at 50% 50%, rgba(255,255,0,0.2) 0%, transparent 60%)
      `,
      particleColor: '#00FF00'
    };
  }
  
  // France: Blue/white/red vertical blend + elegant sheen
  if (id === 'fra') {
    return {
      background: `linear-gradient(120deg, #002395 0%, #002395 30%, #FFFFFF 45%, #FFFFFF 55%, #ED2939 70%, #ED2939 100%)`,
      overlay: `linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)`,
      particleColor: '#FFFFFF'
    };
  }
  
  // Germany: Black/red/gold horizontal bands + solid power
  if (id === 'ger') {
    return {
      background: `linear-gradient(180deg, #000000 0%, #220000 30%, #DD0000 50%, #FFCE00 80%, #FFAA00 100%)`,
      overlay: `radial-gradient(circle at top, rgba(255,255,255,0.1), transparent 70%)`,
      particleColor: '#FFCE00'
    };
  }

  // Default Dynamic Generator (Premium Mesh)
  return {
    background: `
      radial-gradient(at 0% 0%, ${p} 0px, transparent 50%),
      radial-gradient(at 100% 0%, ${s} 0px, transparent 50%),
      radial-gradient(at 100% 100%, ${p} 0px, transparent 50%),
      radial-gradient(at 0% 100%, ${s} 0px, transparent 50%),
      linear-gradient(135deg, #1a1a1a 0%, #000000 100%)
    `,
    overlay: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)`,
    particleColor: s
  };
};

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(({ champion, runnerUp, userName, stats, className = '' }, ref) => {
  const teamBg = getTeamBackground(champion);
  
  // Generate random particles for the background
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5
  }));

  return (
    <div 
      ref={ref}
      // 9:16 Aspect Ratio Container
      className={`relative w-[360px] h-[640px] rounded-[40px] overflow-hidden flex flex-col ${className}`}
      style={{ 
        boxShadow: `
          0 50px 100px -20px rgba(0,0,0,0.5),
          inset 0 0 0 1px rgba(255,255,255,0.2),
          inset 0 0 40px rgba(255,255,255,0.05)
        `
      }}
    >
      {/* --- LEGENDARY BACKGROUND LAYERS (APPLE MESH + FIFA VIBRANCY) --- */}
      
      {/* 1. Base Background (Apple Mesh Gradient) */}
      <div className="absolute inset-0 z-0 animate-gradient-slow" style={{ background: teamBg.background, backgroundSize: '200% 200%' }}>
         {/* Dynamic Overlay (Rays, Patterns) */}
        {teamBg.overlay && (
          <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ background: teamBg.overlay }} />
        )}
        
        {/* Mesh Gradient Overlay for Organic Flow */}
        <div className="absolute inset-0 opacity-50 mix-blend-soft-light" 
             style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3), transparent 50%), radial-gradient(circle at 20% 80%, rgba(0,0,0,0.2), transparent 50%)' }} 
        />
      </div>
      
      {/* 2. Particle System (Floating Sparkles - Refined) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white mix-blend-overlay shadow-[0_0_15px_rgba(255,255,255,0.9)]"
            style={{ 
              left: `${p.x}%`, 
              top: `${p.y}%`, 
              width: p.size, 
              height: p.size,
              backgroundColor: teamBg.particleColor 
            }}
            animate={{ 
              y: [0, -100], 
              opacity: [0, 0.6, 0] 
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay,
              ease: "linear" 
            }}
          />
        ))}
      </div>

      {/* 3. Premium Texture Overlays */}
      {/* Noise for Apple Print Feel */}
      <div className="absolute inset-0 z-0 opacity-[0.08] mix-blend-overlay pointer-events-none" 
           style={{ 
             backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
             backgroundRepeat: 'repeat',
           }} 
      />
      {/* FIFA Hex/Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-repeat" />
      
      {/* 4. Holographic Foil Effect (Subtler, more Apple-like) */}
      <div className="absolute inset-0 z-10 opacity-20 mix-blend-color-dodge pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
      <motion.div 
        className="absolute inset-0 z-10 opacity-10 mix-blend-overlay pointer-events-none bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
        initial={{ x: '-150%' }}
        animate={{ x: '150%' }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", repeatDelay: 2 }}
      />
      
      {/* 5. Vignette & Depth */}
      <div className="absolute inset-0 z-10 pointer-events-none" 
           style={{ background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)' }} 
      />
      
      {/* --- CONTENT STACK --- */}
      
      {/* HEADER: Glass Pill */}
      <div className="relative z-20 pt-8 px-4 text-center shrink-0">
        <div className="flex items-center justify-between mb-6">
          {/* User Badge (Apple Glass) */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl pl-1 pr-4 py-1.5 rounded-full border border-white/20 shadow-lg">
             <div className="w-7 h-7 rounded-full bg-gradient-to-b from-white to-gray-300 flex items-center justify-center text-black shadow-inner">
               <User className="w-3.5 h-3.5 text-black/80" />
             </div>
             <span className="text-white font-['Rajdhani'] font-bold text-sm tracking-wide uppercase truncate max-w-[120px]">
               {userName}
             </span>
          </div>

          {/* Official Badge */}
          <div className="bg-white/10 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
            <span className="text-[10px] font-['Rajdhani'] font-bold text-white/90 tracking-widest uppercase flex items-center gap-1">
              <Globe className="w-3 h-3" /> Official
            </span>
          </div>
        </div>

        {/* Title Group */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-white/50" />
          <span className="font-['Teko'] font-bold text-3xl tracking-widest text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            WC PREDICTION
          </span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-white/50" />
        </div>
      </div>
      
      {/* HERO: Team Showcase (Apple Museum Style) */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center py-0">
        
        {/* Emblem (static, Museum Lighting) */}
        <div 
           className="relative mb-8 group"
        >
          {/* Soft Ambient Glow */}
          <div className="absolute inset-0 bg-white/20 blur-[60px] rounded-full scale-125 mix-blend-overlay" />
          
          {/* Emblem Container */}
          <div className="relative w-48 h-48 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
             <img src={champion.flagUrl} alt={champion.name} className="w-full h-full object-contain" />
          </div>
        </div>
        
        {/* Typography (Apple Pro + FIFA Bold) */}
        <div className="flex flex-col items-center relative w-full px-4">
           
           <h1 className="font-['Teko'] text-[6rem] font-black uppercase leading-[0.8] tracking-tighter text-center z-10 w-full text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 drop-shadow-2xl">
             {champion.name}
           </h1>
          
          <div className="mt-4 flex flex-col items-center gap-2">
             <div className="flex items-center gap-4">
               <div className="h-[1px] w-12 bg-white/30" />
               <span className="text-lg font-['Rajdhani'] font-bold tracking-[0.4em] text-[#FFD700] uppercase">
                 2026 Champion
               </span>
               <div className="h-[1px] w-12 bg-white/30" />
             </div>
             
             {/* Personalized User Name */}
             <div className="flex items-center gap-2 opacity-80 mt-1">
                <User className="w-3 h-3 text-white/60" />
                <span className="text-xs font-['Rajdhani'] font-medium tracking-widest text-white/60 uppercase">
                  Predicted by {userName}
                </span>
             </div>
          </div>
       </div>
      </div>
      
      {/* STATS: Frosted Glass Grid */}
      <div className="relative z-20 px-6 mb-6 shrink-0 grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
        
        {/* Winner Box */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 p-3 flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all hover:bg-white/10">
          <span className="text-[9px] text-white/60 uppercase font-bold tracking-widest mb-1">Winner</span>
          <div className="flex items-center gap-2">
            <img src={champion.flagUrl} className="w-6 h-6 rounded-full object-cover shadow-sm" />
            <span className="text-white font-['Teko'] font-bold text-2xl leading-none tracking-wide">{champion.fifaCode}</span>
          </div>
        </div>
        
        {/* VS Badge (Minimal) */}
        <div className="flex flex-col items-center justify-center w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
           <span className="text-white/60 font-bold text-xs font-['Rajdhani']">VS</span>
        </div>
        
        {/* Runner Up Box */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 p-3 flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all hover:bg-white/10">
           <span className="text-[9px] text-white/60 uppercase font-bold tracking-widest mb-1">Finalist</span>
           <div className="flex items-center gap-2">
             {runnerUp ? (
               <img src={runnerUp.flagUrl} className="w-6 h-6 rounded-full object-cover shadow-sm grayscale-[30%]" />
             ) : (
               <div className="w-6 h-6 rounded-full bg-white/10" />
             )}
             <span className="text-white/80 font-['Teko'] font-bold text-2xl leading-none tracking-wide">{runnerUp?.fifaCode || 'TBD'}</span>
           </div>
        </div>
      </div>
      
      {/* PRIZE: Apple Wallet Style Pass */}
      <div className="relative z-20 mx-4 mb-6 shrink-0">
        <div className="relative rounded-[24px] overflow-hidden p-[1px] bg-gradient-to-b from-[#FFD700] to-[#B8860B] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]">
           <div className="bg-[#111] rounded-[23px] p-4 relative overflow-hidden">
              {/* Inner Gold Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#FFD700]/20 blur-[40px] rounded-full" />
              
              <div className="relative z-10 flex items-center justify-between">
                 <div className="flex flex-col items-start">
                    <span className="text-[#FFD700] font-['Rajdhani'] font-bold text-xs uppercase tracking-wider mb-0.5">Grand Prize</span>
                    <h2 className="font-['Teko'] font-black text-5xl text-white leading-[0.9] tracking-tight">
                      $500 <span className="text-2xl text-white/50 font-medium align-top">$</span>
                    </h2>
                 </div>
                 
                 <div className="h-12 w-[1px] bg-white/10 mx-2" />
                 
                 <div className="flex flex-col items-end gap-1">
                    <div className="bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide">
                      Guaranteed
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-[10px] font-medium uppercase tracking-wider">
                       <span>Jersey</span>
                       <span className="w-1 h-1 rounded-full bg-white/20" />
                       <span>Ball</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      {/* FOOTER: Minimalist Brand */}
      <div className="relative z-20 py-6 px-8 flex items-center justify-between mt-auto">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black rounded-xl flex items-center justify-center shadow-lg">
              <span className="font-['Teko'] font-black text-lg leading-none mt-0.5">SP</span>
            </div>
            <div className="flex flex-col">
               <span className="text-white font-['Rajdhani'] font-bold tracking-[0.2em] text-sm leading-none">
                 STADIUMPORT
               </span>
            </div>
         </div>
         
         <div className="opacity-50">
            <Globe className="w-4 h-4 text-white" />
         </div>
      </div>
      
    </div>
  );
});

ShareCard.displayName = 'ShareCard';
