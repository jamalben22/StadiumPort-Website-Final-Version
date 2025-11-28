import React, { forwardRef } from 'react';
import { Team } from '../lib/wc26-data';

interface ShareCardProps {
  champion: Team;
  runnerUp?: Team;
  userName: string;
  userCountry?: string;
  stats?: {
    topScorer: string;
    bestPlayer: string;
  };
  className?: string;
}

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(({ champion, runnerUp, userName, userCountry, stats, className = '' }, ref) => {
  const [primaryColor, secondaryColor] = champion.colors;

  // Helper to ensure contrast
  const getContrastYIQ = (hexcolor: string) => {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
  }
  
  const textColor = getContrastYIQ(primaryColor);

  return (
    <div 
      ref={ref}
      // 9:16 Aspect Ratio (360x640) -> Exports to 1080x1920
      className={`relative w-[360px] h-[640px] bg-[#050505] text-white overflow-hidden font-sans flex flex-col ${className}`}
    >
      {/* --- GLOBAL BACKGROUND & TEXTURE --- */}
      
      {/* 1. Base: Deep Premium Dark (Official Game Dark Mode) */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* 2. Dynamic Team Lighting (Aurora/Spotlight Effect) */}
      <div className="absolute inset-0 opacity-50 mix-blend-hard-light pointer-events-none transition-colors duration-700"
           style={{
             background: `
               radial-gradient(circle at 0% 0%, ${primaryColor} 0%, transparent 55%),
               radial-gradient(circle at 100% 80%, ${secondaryColor} 0%, transparent 50%)
             `
           }}
      />

      {/* 3. High-Tech Micro-Texture (Jersey/Carbon Feel) */}
      <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '20px 20px'
           }} 
      />

      {/* 4. Geometric Accent Lines (FIFA 26 Architectural Style) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 right-0 w-[80%] h-[80%] border-[1px] border-white/10 rounded-full translate-x-1/2 -translate-y-1/4 blur-[1px]" />
         <div className="absolute bottom-0 left-0 w-[80%] h-[80%] border-[1px] border-white/10 rounded-full -translate-x-1/2 translate-y-1/4 blur-[1px]" />
      </div>
      
      {/* 5. WATERMARK: "STADIUMPORT" (Subtle, Premium, Repeating Pattern) */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.04] pointer-events-none select-none mix-blend-screen">
        <div className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2 flex flex-wrap content-center justify-center -rotate-[30deg] gap-x-12 gap-y-12">
          {Array.from({ length: 40 }).map((_, i) => (
             <span key={i} className="font-['Teko'] font-bold text-5xl text-white uppercase tracking-[0.2em] whitespace-nowrap">
                FIFA
             </span>
          ))}
        </div>
      </div>

      {/* 6. Vignette & Depth Polish */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90 pointer-events-none" />


      {/* --- 1. TOP HEADER: OFFICIAL COLLAB BAR --- */}
      <div className="relative z-10 pt-8 pb-4 flex justify-center items-center">
        <div className="flex items-center gap-3 w-full px-6">
           {/* Left Tech Marker */}
           <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-white/40" />
           
           <div className="flex flex-col items-center">
             <span className="font-['Teko'] font-bold text-3xl leading-none tracking-wide text-white uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                STADIUMPORT
              </span>
              <div className="flex items-center gap-2 mt-1">
                 <div className="w-1 h-1 bg-[#FFD700] rounded-full" />
                 <span className="font-['Rajdhani'] font-medium text-[9px] tracking-[0.3em] text-white/60 uppercase">
                   Official World Cup 2026 Partner
                 </span>
                 <div className="w-1 h-1 bg-[#FFD700] rounded-full" />
              </div>
           </div>

           {/* Right Tech Marker */}
           <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-white/40" />
        </div>
      </div>

      {/* --- 2. TITLE SECTION --- */}
      <div className="relative z-10 mb-2">
        <div className="mx-6 py-2 border-y border-white/10 bg-white/5 backdrop-blur-md flex justify-center relative overflow-hidden">
          {/* Animated Shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
          <span className="font-['Rajdhani'] font-extrabold text-[11px] tracking-[0.25em] text-[#FFD700] uppercase relative z-10">
            MY WORLD CUP 2026 PREDICTION
          </span>
        </div>
      </div>

      {/* --- 3. HERO SECTION - WINNER (Dynamic Tech Zone) --- */}
      <div className="relative z-10 h-[160px] w-full mb-6 group">
         {/* Main Dynamic Background */}
         <div 
           className="absolute inset-0 transition-all duration-700"
           style={{ 
             background: `linear-gradient(135deg, ${primaryColor} 0%, #000 100%)` 
           }}
         >
            {/* Jersey Mesh Pattern */}
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-multiply" />
            
            {/* Speed Streaks Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
         </div>
         
         {/* Content Container - Kept empty as requested by previous deletes, but styled */}
         <div className="relative z-10 h-full flex flex-col items-center justify-center">
            {/* Center Line Decoration */}
            <div className="w-[1px] h-full bg-white/10 absolute left-1/2 transform -translate-x-1/2" />
         </div>

         {/* Bottom Edge Tech Detail */}
         <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
      </div>

      {/* --- 4. FINAL MATCH SECTION (Performance Stats Layout) --- */}
      <div className="relative z-10 px-5 mb-6">
         <div className="flex items-stretch justify-between gap-1">
            
            {/* Winner Card - Left */}
            <div className="flex-1 bg-[#111] border border-white/10 rounded-l-lg p-3 relative overflow-hidden">
               {/* Team Color Accent Bar */}
               <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-500" />
               <div className="absolute right-0 top-0 w-8 h-8 bg-gradient-to-bl from-emerald-500/20 to-transparent" />
               
               <div className="flex flex-col items-start pl-2">
                  <span className="text-[9px] font-['Rajdhani'] font-bold text-emerald-500 uppercase tracking-widest mb-2">Champion</span>
                  <div className="flex items-center gap-3">
                     <div className="relative p-[2px] rounded-md bg-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                        <img 
                          src={champion.flagUrl} 
                          alt={`${champion.name} Flag`}
                          className="w-14 h-10 rounded-[6px] object-cover ring-1 ring-emerald-400/40 saturate-[1.15] contrast-[1.1] brightness-[1.1]"
                        />
                        <div className="absolute inset-0 rounded-md pointer-events-none" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35)' }} />
                     </div>
                  </div>
               </div>
            </div>

            {/* VS - Center Tech Connector */}
            <div className="w-8 flex items-center justify-center bg-[#1a1a1a] border-y border-white/10 relative">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />
               <span className="font-['Rajdhani'] font-black text-sm text-white/30 italic -rotate-90">VS</span>
            </div>

            {/* Runner Up Card - Right */}
            <div className="flex-1 bg-[#111] border border-white/10 rounded-r-lg p-3 relative overflow-hidden text-right">
               {/* Team Color Accent Bar */}
               <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-red-500" />
               <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-red-500/20 to-transparent" />
               
               <div className="flex flex-col items-end pr-2">
                  <span className="text-[9px] font-['Rajdhani'] font-bold text-red-500 uppercase tracking-widest mb-2">Runner-Up</span>
                  <div className="flex items-center justify-end gap-3 flex-row-reverse">
                     {runnerUp ? (
                       <div className="relative p-[2px] rounded-md bg-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                         <img 
                           src={runnerUp.flagUrl} 
                           alt={`${runnerUp.name} Flag`}
                           className="w-14 h-10 rounded-[6px] object-cover ring-1 ring-red-400/40 saturate-[1.1] contrast-[1.1] brightness-[1.05]"
                         />
                         <div className="absolute inset-0 rounded-md pointer-events-none" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28)' }} />
                       </div>
                     ) : (
                       <div className="w-14 h-10 rounded-[6px] bg-white/10 ring-1 ring-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.35)]" />
                     )}
                  </div>
               </div>
            </div>

         </div>
      </div>

      {/* --- 5. USER NAME SECTION (Player Jersey Style) --- */}
      <div className="relative z-10 text-center mb-6">
         <div className="inline-block relative">
             <span className="block text-[9px] font-['Rajdhani'] font-bold text-white/40 uppercase tracking-[0.3em] mb-1">
               Predicted By
             </span>
             <div className="relative px-8 py-2 bg-white/5 border border-white/10 skew-x-[-10deg]">
                <span className="font-['Teko'] font-bold text-3xl text-white uppercase tracking-wider block skew-x-[10deg]">
                  {userName}
                </span>
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
             </div>
         </div>
      </div>

      {/* --- 6. QUOTE SECTION --- */}
      <div className="relative z-10 px-10 text-center mb-6">
          <div className="relative py-2">
            <p className="font-['Rajdhani'] font-medium text-white/80 text-sm leading-relaxed uppercase tracking-wide">
              <span className="text-white/30 mr-1">“</span>
              Think you can beat this? <br/>
              <span className="text-[#FFD700] font-bold">Make YOUR prediction!</span>
              <span className="text-white/30 ml-1">”</span>
            </p>
         </div>
      </div>

      {/* --- 7. PRIZE SECTION (The "Drop" Pass) --- */}
      <div className="relative z-10 px-5 mb-auto">
         <div className="group relative rounded-2xl overflow-hidden bg-[#0b0b0c]/80 backdrop-blur-2xl border border-white/10 ring-1 ring-white/5 shadow-[0_18px_48px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-[#FFD700]/35 to-transparent opacity-60" />
            
            <div className="relative p-4 flex flex-col items-center">
               <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#FFD700]/10 blur-[60px] rounded-full" />
               <div className="absolute inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
               <div className="w-full flex justify-between items-center border-b border-white/10 pb-2 mb-3">
                  <span className="font-['Teko'] font-bold text-xl uppercase tracking-wider" style={{ background: 'linear-gradient(90deg,#FFD700,#FFF4C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                     Perfect Score Reward
                  </span>
                  <div className="flex gap-1">
                     <div className="w-1.5 h-1.5 bg-white/30 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                     <div className="w-1.5 h-1.5 bg-white/30 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                     <div className="w-1.5 h-1.5 bg-white/30 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  </div>
               </div>
               
               <div className="w-full space-y-3">
                  <div className="flex items-center justify-between group/item">
                     <span className="text-xs font-['Rajdhani'] font-semibold text-white/70 uppercase tracking-wide group-hover/item:text-white transition-colors">Official WC26 Jersey</span>
                     <div className="h-[1px] flex-1 mx-3 bg-white/15" />
                     <div className="w-2 h-2 border border-white/40 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.15)]" />
                  </div>
                  <div className="flex items-center justify-between group/item">
                     <span className="text-xs font-['Rajdhani'] font-semibold text-white/70 uppercase tracking-wide group-hover/item:text-white transition-colors">Official Match Ball</span>
                     <div className="h-[1px] flex-1 mx-3 bg-white/15" />
                     <div className="w-2 h-2 border border-white/40 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.15)]" />
                  </div>
                  <div className="flex items-center justify-between group/item">
                     <span className="text-xs font-['Rajdhani'] font-bold text-[#FFD700] uppercase tracking-wide">$500 USD Cash Prize</span>
                     <div className="h-[1px] flex-1 mx-3 bg-[#FFD700]/25" />
                     <div className="w-2 h-2 bg-[#FFD700] rounded-full shadow-[0_0_10px_#FFD700] ring-1 ring-[#FFD700]/50" />
                  </div>
               </div>
            </div>
         </div>
      </div>

      

    </div>
  );
});

ShareCard.displayName = 'ShareCard';
