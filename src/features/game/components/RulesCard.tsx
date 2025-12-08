import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, AlertCircle, CheckCircle2, Shirt, Disc, DollarSign, Shield, HelpCircle, Globe } from 'lucide-react';

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
        className={`bg-slate-50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-6 mb-8 relative overflow-hidden ${className}`}
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-[#01b47d]" />
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-[#01b47d]/10 border border-[#01b47d]/20 shrink-0">
            <Trophy className="w-5 h-5 text-[#01b47d]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Teko'] tracking-wide uppercase mb-2">
              How to Play & Win
            </h3>
            <ul className="space-y-2">
              {[ 
                "Predict the entire World Cup 2026 tournament from Group Stage through the Final",
                "Earn 1 point for every correct prediction",
                "Top 5 players win exclusive World Cup 2026 prizes",
                "Winners announced after the Final on July 19, 2026"
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-white/80 font-['Rajdhani'] font-medium leading-tight">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#01b47d]/80 mt-0.5 shrink-0" />
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
      "name": "Online (Stadiumport)",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "USA"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Stadiumport",
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
    <div className={`bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-[32px] p-8 relative overflow-hidden group ${className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 dark:from-black/40 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10">
            <AlertCircle className="w-5 h-5 text-slate-900 dark:text-white" />
          </div>
          <h2 className="text-3xl font-black font-['Teko'] text-slate-900 dark:text-white uppercase tracking-wide">
            Official World Cup 2026 Prediction Game Rules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* How to Play */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-400 dark:text-white/40 uppercase tracking-widest font-['Rajdhani']">
              How to Play & Win
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-[#01b47d] font-['Teko'] text-xl">01</span>
                <p className="text-slate-600 dark:text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  <span className="text-slate-900 dark:text-white font-bold">Complete Prediction Journey</span> <br />
                  Predict every tournament stage: Group Stage <span className="text-slate-900 dark:text-white font-bold">→</span> Round of 32 <span className="text-slate-900 dark:text-white font-bold">→</span> Round of 16 <span className="text-slate-900 dark:text-white font-bold">→</span> Quarter-Finals <span className="text-slate-900 dark:text-white font-bold">→</span> Semi-Finals <span className="text-slate-900 dark:text-white font-bold">→</span> Final & Champion
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#01b47d] font-['Teko'] text-xl">02</span>
                <p className="text-slate-600 dark:text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  <span className="text-slate-900 dark:text-white font-bold">Point System</span> <br />
                  Earn <span className="text-slate-900 dark:text-white font-bold">1 point</span> for each <span className="text-slate-900 dark:text-white font-bold">correct prediction</span>. Final scores calculated after the World Cup 2026 Final on July 19, 2026.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#01b47d] font-['Teko'] text-xl">03</span>
                <p className="text-slate-600 dark:text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  <span className="text-slate-900 dark:text-white font-bold">Fair Play Policy</span> <br />
                  One entry per person. In case of tied scores, winners determined by: (1) Correct champion pick <span className="text-slate-900 dark:text-white font-bold">→</span> (2) Correct runner-up <span className="text-slate-900 dark:text-white font-bold">→</span> (3) Random verified draw.
                </p>
              </li>
            </ul>
          </div>

          {/* Prizes */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-400 dark:text-white/40 uppercase tracking-widest font-['Rajdhani']">
              Prize Pool & Rewards
            </h3>
            
            {/* 1st Place */}
            <div className="bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#FBBF24] font-bold font-['Teko'] text-xl uppercase">1st Place Champion</span>
                <Trophy className="w-4 h-4 text-[#FBBF24]" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-700 dark:text-white/90 text-sm font-['Rajdhani']">
                  <Shirt className="w-4 h-4 text-slate-400 dark:text-white/40" /> Official World Cup 2026 Winner Jersey
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-white/90 text-sm font-['Rajdhani']">
                  <Disc className="w-4 h-4 text-slate-400 dark:text-white/40" /> Official World cup 2026 Adidas Ball
                </div>
                <div className="flex items-center gap-2 text-[#01b47d] font-bold text-sm font-['Rajdhani']">
                  <DollarSign className="w-4 h-4" /> $500 USD Cash Prize
                </div>
              </div>
            </div>

            {/* 2nd-5th */}
            <div className="bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/20 rounded-xl p-4 opacity-80">
               <div className="flex items-center justify-between mb-3">
                <span className="text-slate-900 dark:text-white font-bold font-['Teko'] text-xl uppercase">2nd - 5th Place</span>
                <span className="text-xs text-slate-400 dark:text-white/40 font-['Rajdhani']">Runners Up</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-600 dark:text-white/70 text-sm font-['Rajdhani']">
                  <Shirt className="w-4 h-4 text-slate-400 dark:text-white/40" /> Official World Cup 2026 Winner Jersey
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-white/70 text-sm font-['Rajdhani']">
                  <Disc className="w-4 h-4 text-slate-400 dark:text-white/40" /> Official World cup 2026 Adidas Ball
                </div>
              </div>
            </div>
          </div>

          {/* Tie-Break & Fair Play */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-400 dark:text-white/40 uppercase tracking-widest font-['Rajdhani'] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#01b47d]" />
              Official Rules & Fair Play
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-[#01b47d] font-['Teko'] text-xl">A</span>
                <p className="text-slate-600 dark:text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  <span className="text-slate-900 dark:text-white font-bold">Tie-Breaking Protocol</span> <br />
                  Equal points resolved by: <br />
                  1. Correct World Cup 2026 Champion prediction <br />
                  2. Correct Runner-Up prediction  <br />
                  3. Verified random draw.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#01b47d] font-['Teko'] text-xl">B</span>
                <p className="text-slate-600 dark:text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  <span className="text-slate-900 dark:text-white font-bold">Anti-Cheating & Security</span> <br />
                  - Strictly ONE entry per person (verified by email + IP) <br />
                  - Multiple accounts = immediate disqualification + permanent ban <br />
                  - Bot usage, scripts, or automated submissions = disqualification <br />
                  - All entries monitored for suspicious activity
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#01b47d] font-['Teko'] text-xl">C</span>
                <p className="text-slate-600 dark:text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  <span className="text-slate-900 dark:text-white font-bold">Eligibility Requirements</span> <br />
                  - Open worldwide to participants 13+ years old <br />
                  - Valid email address required for entry <br />
                  - Winners must complete identity verification (KYC) before prize distribution <br />
                  - Employees of Stadiumport and immediate family members ineligible <br />
                  - Void where prohibited by law
                </p>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-400 dark:text-white/40 uppercase tracking-widest font-['Rajdhani'] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#01b47d]" />
              Frequently Asked Questions
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <p className="text-slate-600 dark:text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  Q: Is it free to play? <br />
                  A: Yes! 100% free to enter. No purchase necessary to participate or win prizes.
                </p>
              </li>
              <li className="flex gap-4">
                <p className="text-slate-600 dark:text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  Q: Can I change my predictions? <br />
                  A: Yes! Edit your bracket unlimited times until kickoff of the opening match on June 11, 2026 at 11:00 AM ET (Mexico vs. TBD).
                </p>
              </li>
              <li className="flex gap-4">
                <p className="text-slate-600 dark:text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  Q: When are winners announced? <br />
                  A: Winners will be contacted via email and publicly announced on this page within 48 hours after the World Cup 2026 Final (July 19, 2026).
                </p>
              </li>
              <li className="flex gap-4">
                <p className="text-slate-600 dark:text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  Q: How do I receive my prizes? <br />
                  A: Winners must complete identity verification (government ID) within 7 days of announcement. Physical prizes ship within 30 days. Cash prizes via PayPal/bank transfer.
                </p>
              </li>
              <li className="flex gap-4">
                <p className="text-slate-600 dark:text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  Q: What if I don't receive confirmation email? <br />
                  A: Check spam/junk folder. Contact info@stadiumport.com within 24 hours if issues persist.
                </p>
              </li>
              <li className="flex gap-4">
                <p className="text-slate-600 dark:text-white/80 text-sm font-['Rajdhani'] font-medium leading-relaxed">
                  Q: Can I play from any country? <br />
                  A: Yes, open globally to participants 13+. Some restrictions may apply based on local gambling laws.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/5 text-center">
           <p className="text-slate-500 dark:text-white/60 text-[11px] md:text-xs font-['Rajdhani'] font-medium leading-relaxed text-center">
             <span className="text-slate-900 dark:text-white">Official World Cup 2026 Prediction Challenge</span> · <span className="text-slate-900 dark:text-white font-bold uppercase tracking-widest">STADIUMPORT</span> <br />
             <Link to="/world-cup-2026-prediction-contest-terms" className="hover:text-slate-900 dark:hover:text-white underline decoration-slate-300 dark:decoration-white/30 underline-offset-2 transition-colors">Terms apply</Link> · <Link to="/world-cup-2026-prediction-contest-privacy" className="hover:text-slate-900 dark:hover:text-white underline decoration-slate-300 dark:decoration-white/30 underline-offset-2 transition-colors">Privacy Policy</Link> · <Link to="/world-cup-2026-prediction-contest-support" className="hover:text-slate-900 dark:hover:text-white underline decoration-slate-300 dark:decoration-white/30 underline-offset-2 transition-colors">Contact Support</Link> <br />
             Updated: Nov 28, 2025 · Opens: Nov 28, 2025 · Predictions lock: Jun 11, 2026
           </p>
        </div>
      </div>
    </div>
  );
});
