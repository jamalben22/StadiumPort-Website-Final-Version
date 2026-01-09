import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  AlertCircle, 
  CheckCircle2, 
  Shirt, 
  Disc, 
  DollarSign, 
  Shield, 
  HelpCircle, 
  Globe,
  Clock,
  Award,
  BookOpen
} from 'lucide-react';

interface RulesCardProps {
  variant: 'short' | 'full';
  className?: string;
  theme?: 'dark' | 'light';
}

export const RulesCard = React.memo(({ variant, className = '' }: RulesCardProps) => {
  if (variant === 'short') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative overflow-hidden bg-[#0A0A0C] border border-white/10 shadow-2xl rounded-3xl p-8 mb-8 group ${className} isolate`}
      >
        {/* PREMIUM BACKGROUND LAYERS */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-0 left-0 w-1 h-full bg-black shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
        
        <div className="relative z-10 flex items-start gap-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-amber-400 shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-500">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-['Teko'] uppercase tracking-wider">
              How to Play & Win
            </h3>
            <ul className="space-y-3">
              {[ 
                "Predict the entire World Cup 2026 tournament from Group Stage through the Final",
                "Earn 1 point for every correct prediction",
                "Top 5 players win exclusive World Cup 2026 prizes",
                "Winners announced after the Final on July 19, 2026"
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium font-['Rajdhani'] tracking-wide leading-relaxed group/item">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    );
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "World Cup 2026 Prediction Game",
    "description": "Free to play World Cup 2026 prediction bracket game. Predict group winners and knockout stage matches to win official merchandise and cash prizes.",
    "url": "https://stadiumport.com/world-cup-2026-prediction-game",
    "image": "https://stadiumport.com/images/hub-pages/FIFA-World-Cup-26-qualified-teams-wallchart-graphic.webp",
    "startDate": "2026-06-11",
    "endDate": "2026-07-19",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://stadiumport.com/world-cup-2026-prediction-game"
    },
    "organizer": {
      "@type": "Organization",
      "name": "stadiumport",
      "url": "https://stadiumport.com"
    },
    "performer": {
      "@type": "Organization",
      "name": "stadiumport Prediction Contestants"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://stadiumport.com/world-cup-2026-prediction-game",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-06-11T09:00:00Z"
    }
  };
  
  return (
    <div className={`relative overflow-hidden bg-[#0A0A0C] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl group font-['Rajdhani'] isolate ${className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* PREMIUM BACKGROUND LAYERS */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60" />
      
      {/* Ambient Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none animate-pulse" />
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em] font-['Rajdhani']">
              Official Tournament Rules
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Teko'] uppercase tracking-tight">
            World Cup 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Prediction Game</span> Rules
          </h2>
          <p className="text-slate-200 max-w-2xl mx-auto font-medium text-lg">
            Everything you need to know about scoring, prizes, and fair play.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* How to Play */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-widest font-['Teko']">
                How to Play & Win
              </h3>
            </div>
            
            <ul className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Complete Prediction Journey",
                  desc: "Predict every tournament stage: Group Stage → Round of 32 → Round of 16 → Quarter-Finals → Semi-Finals → Final & Champion."
                },
                {
                  num: "02",
                  title: "Point System",
                  desc: "Earn 1 point for each correct prediction. Final scores calculated after the Final on July 19, 2026."
                },
                {
                  num: "03",
                  title: "Fair Play Policy",
                  desc: "One entry per person. Ties broken by: (1) Correct Champion → (2) Correct Runner-up → (3) Random verified draw."
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-6 group/item">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-amber-500 font-bold text-2xl font-['Teko']">{item.num}</span>
                    <div className="w-px h-full bg-gradient-to-b from-black to-transparent group-last/item:hidden"></div>
                  </div>
                  <div className="pt-1">
                    <h4 className="text-white font-bold text-lg mb-2 font-['Rajdhani'] tracking-wide">{item.title}</h4>
                    <p className="text-slate-200 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Prizes */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-widest font-['Teko']">
                Prize Pool & Rewards
              </h3>
            </div>
            
            {/* 1st Place */}
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 shadow-2xl rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-500">
              <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12 group-hover:rotate-0 duration-700">
                <Trophy className="w-32 h-32 text-amber-500" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-amber-400 font-bold text-xl uppercase tracking-wider font-['Teko']">1st Place Champion</span>
                  <div className="p-2 rounded-lg bg-amber-500/20 animate-pulse">
                    <Trophy className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: Shirt, label: "Official World Cup 2026 Winner Jersey" },
                    { icon: Disc, label: "Official Adidas Match Ball" }
                  ].map((prize, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-300 text-sm font-medium">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-amber-500/20 transition-colors">
                        <prize.icon className="w-4 h-4 text-amber-400" />
                      </div>
                      {prize.label}
                    </div>
                  ))}
                  
                  <div className="flex items-center gap-4 text-white font-bold text-lg bg-amber-500/10 p-4 rounded-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-all duration-500 mt-4">
                    <div className="p-2 rounded-lg bg-amber-500/20">
                      <DollarSign className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="font-['Teko'] tracking-wider text-xl">$1,000 USD CASH PRIZE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd-5th */}
            <div className="bg-white/5 border border-white/10 shadow-xl rounded-2xl p-6 hover:border-white/20 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <span className="text-white font-bold text-lg font-['Teko'] uppercase tracking-wider">2nd - 5th Place</span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-[0.2em] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Runners Up
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Shirt, label: "Official World Cup 2026 Winner Jersey" },
                  { icon: Disc, label: "Official Adidas Match Ball" }
                ].map((prize, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-200 text-sm font-medium">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <prize.icon className="w-4 h-4 text-amber-500" />
                    </div>
                    {prize.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-12 border-t border-white/10">
          {/* Tie-Break & Fair Play */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-widest font-['Teko']">
                Fair Play & Policy
              </h3>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-6">
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2 font-['Rajdhani']">
                  <AlertCircle className="w-4 h-4 text-amber-400" /> Tie-Breaking Protocol
                </h4>
                <div className="text-slate-200 font-medium text-sm leading-relaxed pl-6 border-l-2 border-amber-500/30">
                  <p>Equal points resolved by:</p>
                  <ol className="mt-2 space-y-1">
                    <li>1. Correct Tournament Champion</li>
                    <li>2. Correct Tournament Runner-Up</li>
                    <li>3. Verified random digital draw</li>
                  </ol>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2 font-['Rajdhani']">
                  <Shield className="w-4 h-4 text-amber-400" /> Anti-Cheating
                </h4>
                <p className="text-slate-200 font-medium text-sm leading-relaxed pl-6 border-l-2 border-amber-500/30">
                  Strictly ONE entry per person. Multiple accounts, bots, or automated scripts result in immediate disqualification.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-widest font-['Teko']">
                Common Questions
              </h3>
            </div>
            
            <div className="space-y-3">
              {[
                { q: "Is it free to play?", a: "Yes! 100% free. No purchase necessary." },
                { q: "Can I change predictions?", a: "No — once you submit, your predictions are locked and cannot be edited." },
                { q: "When are winners announced?", a: "Within 48 hours after the Final (July 19, 2026)." },
                { q: "Can I play from any country?", a: "Yes, open globally to participants 13+." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 shadow-sm rounded-xl p-4 transition-all duration-300 group/faq">
                  <p className="text-white font-bold text-sm mb-1 font-['Rajdhani'] tracking-wide group-hover/faq:text-amber-400 transition-colors">{item.q}</p>
                  <p className="text-slate-200 font-medium text-xs leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
           <div className="text-slate-300 text-xs font-medium leading-relaxed font-['Rajdhani']">
             <span className="text-slate-200 uppercase tracking-widest font-bold">Official World Cup 2026 Prediction Challenge</span> 
             <div className="mt-1 text-amber-500 font-bold uppercase tracking-[0.3em]">stadiumport</div>
             <div className="flex flex-wrap justify-center gap-6 mt-6">
               <Link href="/world-cup-2026-prediction-contest-terms" className="text-slate-200 hover:text-amber-400 transition-colors underline underline-offset-4 decoration-white/10 font-bold">Terms & Conditions</Link>
               <Link href="/world-cup-2026-prediction-contest-privacy" className="text-slate-200 hover:text-amber-400 transition-colors underline underline-offset-4 decoration-white/10 font-bold">Privacy Policy</Link>
               <Link href="/world-cup-2026-prediction-contest-support" className="text-slate-200 hover:text-amber-400 transition-colors underline underline-offset-4 decoration-white/10 font-bold">Support</Link>
             </div>
             <div className="mt-6 text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em] bg-white/5 py-2 px-4 rounded-full inline-block border border-white/10">
               Updated: Jan 06, 2026 · Predictions lock: Jun 11, 2026
             </div>
           </div>
        </div>
      </div>
    </div>
  );
});