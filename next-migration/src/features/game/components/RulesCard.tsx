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
        className={`bg-white/30 border-black/10 shadow-sm backdrop-blur-md border rounded-3xl p-8 mb-8 relative overflow-hidden ${className}`}
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-slate-900" />
        <div className="flex items-start gap-6">
          <div className="p-4 rounded-2xl bg-black/5 text-slate-900 shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 font-inter">
              How to Play & Win
            </h3>
            <ul className="space-y-3">
              {[ 
                "Predict the entire World Cup 2026 tournament from Group Stage through the Final",
                "Earn 1 point for every correct prediction",
                "Top 5 players win exclusive World Cup 2026 prizes",
                "Winners announced after the Final on July 19, 2026"
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-800 font-medium font-inter leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" />
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
      "name": "Stadiumport",
      "url": "https://stadiumport.com"
    },
    "performer": {
      "@type": "Organization",
      "name": "Stadiumport Prediction Contestants"
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
    <div className="bg-white/10 border-white/20 backdrop-blur-md border rounded-[32px] p-8 md:p-12 relative overflow-hidden group font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border-black/10 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-900"></span>
            </span>
            <span className="text-xs font-semibold text-slate-900 font-bold uppercase tracking-widest">
              Official Rules
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            World Cup 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">Prediction Game</span> Rules
          </h2>
          <p className="text-slate-900 max-w-2xl mx-auto font-medium">
            Everything you need to know about scoring, prizes, and fair play.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* How to Play */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-black/10">
              <BookOpen className="w-5 h-5 text-slate-900" />
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">
                How to Play & Win
              </h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-slate-900 font-bold text-xl">01</span>
                  <div className="w-px h-full bg-black/10"></div>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-2">Complete Prediction Journey</h4>
                  <p className="text-slate-800 text-sm leading-relaxed">
                    Predict every tournament stage: Group Stage → Round of 32 → Round of 16 → Quarter-Finals → Semi-Finals → Final & Champion.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-slate-900 font-bold text-xl">02</span>
                  <div className="w-px h-full bg-black/10"></div>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-2">Point System</h4>
                  <p className="text-slate-800 text-sm leading-relaxed">
                    Earn <span className="text-slate-900 font-extrabold">1 point</span> for each correct prediction. Final scores calculated after the Final on July 19, 2026.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-slate-900 font-bold text-xl">03</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-2">Fair Play Policy</h4>
                  <p className="text-slate-800 text-sm leading-relaxed">
                    One entry per person. Ties broken by: (1) Correct Champion → (2) Correct Runner-up → (3) Random verified draw.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Prizes */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-black/10">
              <Award className="w-5 h-5 text-slate-900" />
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">
                Prize Pool & Rewards
              </h3>
            </div>
            
            {/* 1st Place */}
            <div className="bg-white/40 border-black/10 shadow-sm rounded-2xl p-6 relative overflow-hidden group hover:bg-white/10 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy className="w-16 h-16 text-slate-900" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-900 font-bold text-lg uppercase tracking-wide">1st Place Champion</span>
                  <Trophy className="w-5 h-5 text-amber-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-800 text-sm font-semibold">
                    <div className="p-1.5 rounded-lg bg-black/5"><Shirt className="w-4 h-4 text-slate-900" /></div>
                    Official World Cup 2026 Winner Jersey
                  </div>
                  <div className="flex items-center gap-3 text-slate-800 text-sm font-semibold">
                    <div className="p-1.5 rounded-lg bg-black/5"><Disc className="w-4 h-4 text-slate-900" /></div>
                    Official Adidas Match Ball
                  </div>
                  <div className="flex items-center gap-3 text-slate-900 font-black text-sm bg-white/50 p-2 rounded-lg border border-black/5">
                    <DollarSign className="w-4 h-4 text-green-600" /> $1,000 USD Cash Prize
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd-5th */}
            <div className="bg-white/30 border-black/10 shadow-sm rounded-2xl p-6">
               <div className="flex items-center justify-between mb-4">
                <span className="text-slate-900 font-bold text-lg">2nd - 5th Place</span>
                <span className="text-[10px] text-slate-800 font-bold uppercase tracking-wider bg-white/50 px-2 py-1 rounded border border-black/5">Runners Up</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                  <div className="p-1.5 rounded-lg bg-white/40"><Shirt className="w-4 h-4 text-slate-900" /></div>
                  Official World Cup 2026 Winner Jersey
                </div>
                <div className="flex items-center gap-3 text-slate-800 text-sm font-medium">
                  <div className="p-1.5 rounded-lg bg-white/40"><Disc className="w-4 h-4 text-slate-900" /></div>
                  Official Adidas Match Ball
                </div>
              </div>
            </div>
          </div>

          {/* Tie-Break & Fair Play */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-black/10">
              <Shield className="w-5 h-5 text-slate-900" />
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">
                Official Rules & Fair Play
              </h3>
            </div>
            
            <div className="bg-white/30 shadow-sm rounded-2xl p-6 border border-black/5 space-y-6">
              <div>
                <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-slate-900" /> Tie-Breaking Protocol
                </h4>
                <p className="text-slate-800 font-medium text-sm leading-relaxed pl-6 border-l border-black/10">
                  Equal points resolved by: <br />
                  1. Correct Champion <br />
                  2. Correct Runner-Up <br />
                  3. Verified random draw
                </p>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-slate-900" /> Anti-Cheating
                </h4>
                <p className="text-slate-800 font-medium text-sm leading-relaxed pl-6 border-l border-black/10">
                  Strictly ONE entry per person. Multiple accounts, bots, or scripts result in immediate disqualification.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-black/10">
              <HelpCircle className="w-5 h-5 text-slate-900" />
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">
                Common Questions
              </h3>
            </div>
            
            <div className="space-y-4">
              {[
                { q: "Is it free to play?", a: "Yes! 100% free. No purchase necessary." },
                { q: "Can I change predictions?", a: "No — once you submit, your predictions are locked and cannot be edited." },
                { q: "When are winners announced?", a: "Within 48 hours after the Final (July 19, 2026)." },
                { q: "Can I play from any country?", a: "Yes, open globally to participants 13+." }
              ].map((item, i) => (
                <div key={i} className="bg-white/40 hover:bg-white/60 border border-black/5 shadow-sm rounded-xl p-4 transition-colors">
                  <p className="text-slate-900 font-bold text-sm mb-1">{item.q}</p>
                  <p className="text-slate-800 font-medium text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/10 text-center">
           <div className="text-slate-700 text-xs font-medium leading-relaxed">
             <span className="text-slate-900/60">Official World Cup 2026 Prediction Challenge</span> · <span className="text-slate-900 font-bold uppercase tracking-widest">STADIUMPORT</span> <br />
             <div className="flex flex-wrap justify-center gap-4 mt-4">
               <Link href="/world-cup-2026-prediction-contest-terms" className="text-slate-900 hover:text-black underline decoration-black/20 transition-colors">Terms & Conditions</Link>
               <Link href="/world-cup-2026-prediction-contest-privacy" className="text-slate-900 hover:text-black underline decoration-black/20 transition-colors">Privacy Policy</Link>
               <Link href="/world-cup-2026-prediction-contest-support" className="text-slate-900 hover:text-black underline decoration-black/20 transition-colors">Support</Link>
             </div>
             <div className="mt-4 text-slate-900/50 font-bold uppercase tracking-tighter">
               Updated: Nov 28, 2025 · Opens: Nov 28, 2025 · Predictions lock: Jun 11, 2026
             </div>
           </div>
        </div>
      </div>
    </div>
  );
});
