import React from 'react';
import { Link } from 'react-router-dom';
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
}

export const RulesCard = React.memo(({ variant, className = '' }: RulesCardProps) => {
  if (variant === 'short') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 mb-8 relative overflow-hidden ${className}`}
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
        <div className="flex items-start gap-6">
          <div className="p-4 rounded-2xl bg-indigo-500/20 text-indigo-400 shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-inter">
              How to Play & Win
            </h3>
            <ul className="space-y-3">
              {[ 
                "Predict the entire World Cup 2026 tournament from Group Stage through the Final",
                "Earn 1 point for every correct prediction",
                "Top 5 players win exclusive World Cup 2026 prizes",
                "Winners announced after the Final on July 19, 2026"
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-inter leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
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
    "startDate": "2026-06-11",
    "endDate": "2026-07-19",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Online (stadiumport)",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "USA"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "stadiumport",
      "url": "https://stadiumport.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "url": "https://stadiumport.com/game",
      "availability": "https://schema.org/InStock"
    }
  };
  
  return (
    <div className={`bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden group ${className} font-inter`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">
              Official Rules
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            World Cup 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Prediction Game</span> Rules
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about scoring, prizes, and fair play.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* How to Play */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                How to Play & Win
              </h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-indigo-400 font-bold text-xl">01</span>
                  <div className="w-px h-full bg-indigo-500/30"></div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Complete Prediction Journey</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Predict every tournament stage: Group Stage → Round of 32 → Round of 16 → Quarter-Finals → Semi-Finals → Final & Champion.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-indigo-400 font-bold text-xl">02</span>
                  <div className="w-px h-full bg-indigo-500/30"></div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Point System</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Earn <span className="text-white font-semibold">1 point</span> for each correct prediction. Final scores calculated after the Final on July 19, 2026.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-indigo-400 font-bold text-xl">03</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Fair Play Policy</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    One entry per person. Ties broken by: (1) Correct Champion → (2) Correct Runner-up → (3) Random verified draw.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Prizes */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <Award className="w-5 h-5 text-indigo-400" />
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Prize Pool & Rewards
              </h3>
            </div>
            
            {/* 1st Place */}
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy className="w-16 h-16 text-indigo-400" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-indigo-300 font-bold text-lg uppercase tracking-wide">1st Place Champion</span>
                  <Trophy className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                    <div className="p-1.5 rounded-lg bg-white/10"><Shirt className="w-4 h-4 text-indigo-300" /></div>
                    Official World Cup 2026 Winner Jersey
                  </div>
                  <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                    <div className="p-1.5 rounded-lg bg-white/10"><Disc className="w-4 h-4 text-indigo-300" /></div>
                    Official Adidas Match Ball
                  </div>
                  <div className="flex items-center gap-3 text-white font-bold text-sm bg-indigo-500/20 p-2 rounded-lg border border-indigo-500/30">
                    <DollarSign className="w-4 h-4 text-green-400" /> $1,000 USD Cash Prize
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd-5th */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
               <div className="flex items-center justify-between mb-4">
                <span className="text-white font-bold text-lg">2nd - 5th Place</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider bg-white/10 px-2 py-1 rounded">Runners Up</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="p-1.5 rounded-lg bg-white/5"><Shirt className="w-4 h-4" /></div>
                  Official World Cup 2026 Winner Jersey
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="p-1.5 rounded-lg bg-white/5"><Disc className="w-4 h-4" /></div>
                  Official Adidas Match Ball
                </div>
              </div>
            </div>
          </div>

          {/* Tie-Break & Fair Play */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <Shield className="w-5 h-5 text-indigo-400" />
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Official Rules & Fair Play
              </h3>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 space-y-6">
              <div>
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-indigo-400" /> Tie-Breaking Protocol
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed pl-6 border-l border-white/10">
                  Equal points resolved by: <br />
                  1. Correct Champion <br />
                  2. Correct Runner-Up <br />
                  3. Verified random draw
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-indigo-400" /> Anti-Cheating
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed pl-6 border-l border-white/10">
                  Strictly ONE entry per person. Multiple accounts, bots, or scripts result in immediate disqualification.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <HelpCircle className="w-5 h-5 text-indigo-400" />
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
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
                <div key={i} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                  <p className="text-white font-bold text-sm mb-1">{item.q}</p>
                  <p className="text-slate-400 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
           <div className="text-slate-500 text-xs font-medium leading-relaxed">
             <span className="text-slate-300">Official World Cup 2026 Prediction Challenge</span> · <span className="text-white font-bold uppercase tracking-widest">stadiumport</span> <br />
             <div className="flex flex-wrap justify-center gap-4 mt-4">
               <Link to="/world-cup-2026-prediction-contest-terms" className="text-indigo-400 hover:text-indigo-300 transition-colors">Terms & Conditions</Link>
               <Link to="/world-cup-2026-prediction-contest-privacy" className="text-indigo-400 hover:text-indigo-300 transition-colors">Privacy Policy</Link>
               <Link to="/world-cup-2026-prediction-contest-support" className="text-indigo-400 hover:text-indigo-300 transition-colors">Support</Link>
             </div>
             <div className="mt-4 text-slate-600">
               Updated: Nov 28, 2025 · Opens: Nov 28, 2025 · Predictions lock: Jun 11, 2026
             </div>
           </div>
        </div>
      </div>
    </div>
  );
});
