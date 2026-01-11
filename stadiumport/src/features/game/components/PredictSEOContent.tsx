import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Share2, 
  Zap, 
  Layout, 
  MapPin, 
  HelpCircle,
  CheckCircle2,
  Calendar,
  Users,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export const PredictSEOContent = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-inter">
      
      {/* Hero / Title Section */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0A0A0C]/40 border border-white/10 backdrop-blur-xl shadow-sm mb-6">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
          <span className="text-[11px] font-bold text-white uppercase tracking-[0.22em] font-['Rajdhani']">2026 Prediction Engine</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight font-['Teko'] uppercase">
          World Cup 2026 Predictor: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">The Ultimate Bracket Challenge</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium font-['Rajdhani']">
          Experience the thrill of the tournament before kickoff. Forecast the destiny of all 48 teams in the USA, Canada, and Mexico with the most advanced simulator on the web.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 relative">
        {[
          { icon: Layout, title: "Full 48-Team Format", desc: "Updated for the new 12-group structure." },
          { icon: Zap, title: "Real-Time Simulation", desc: "Instant bracket updates based on your picks." },
          { icon: Share2, title: "Shareable Results", desc: "Generate custom prediction cards for social media." },
          { icon: Trophy, title: "Official Prizes", desc: "Top predictors win authentic jerseys and gear." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-[#0A0A0C]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-amber-500/30 transition-all relative overflow-hidden group"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Rajdhani'] uppercase tracking-wider">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* How to Play Section */}
      <div className="mb-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 font-['Teko'] uppercase tracking-tight">How to Play</h2>
          <p className="text-slate-400 font-medium font-['Rajdhani'] uppercase tracking-widest text-xs">Four simple steps to glory.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>

           {[
             { title: "Predict Group Winners", desc: "Select Winner and Runner-up for all 12 groups. These 24 teams advance automatically." },
             { title: "Select Third-Place Teams", desc: "Choose the 8 best third-place teams to complete the Round of 32 field." },
             { title: "Navigate the Bracket", desc: "Plot your path through the Knockout Stages. From Round of 32 to the Final." },
             { title: "Crown the Champion", desc: "Pick the winner of the Final on July 19, 2026 at MetLife Stadium." }
           ].map((step, i) => (
             <div key={i} className={`relative flex items-start gap-6 group ${i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                {/* Number Badge */}
                <div className={`absolute top-0 md:top-1 ${i % 2 === 0 ? 'right-0 md:right-auto md:left-1/2 md:translate-x-[-50%]' : 'left-0 md:left-1/2 md:translate-x-[-50%]'} w-10 h-10 rounded-full bg-[#0A0A0C] border-2 border-white/10 z-10 flex items-center justify-center text-sm font-bold text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:border-amber-500/50 transition-colors`}>
                  {i + 1}
                </div>
                
                <div className={`flex-1 pt-1 ${i % 2 === 0 ? 'mr-14 md:mr-0 md:pr-14' : 'ml-14 md:ml-0 md:pl-14'}`}>
                  <h3 className="text-xl font-bold text-white mb-2 font-['Teko'] uppercase tracking-wide group-hover:text-amber-500 transition-colors">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium text-sm font-['Rajdhani']">{step.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* New Format Explained */}
      <div className="bg-[#0A0A0C]/40 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12 mb-24 relative overflow-hidden z-10">
        {/* Background Texture & Glow */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 font-['Teko'] uppercase tracking-tight">The New 48-Team Format</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium font-['Rajdhani']">
              The 2026 World Cup revolutionizes the bracket structure. Understanding these changes is key to a perfect prediction.
            </p>
            <div className="space-y-4">
              {[
                { title: "12 Groups of 4", desc: "The tournament expands to accommodate 48 nations across 16 host cities." },
                { title: "Round of 32", desc: "A new knockout stage is added between the group stage and Round of 16." },
                { title: "104 Total Matches", desc: "More football than ever before, played over 39 days of competition." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 font-['Teko'] uppercase tracking-wide">{item.title}</h4>
                    <p className="text-slate-400 text-sm font-medium font-['Rajdhani']">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0A0A0C]/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 relative overflow-hidden group">
             {/* Texture */}
             <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
             
             <div className="relative z-10 space-y-4">
               <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400 font-medium font-['Rajdhani'] uppercase tracking-wider text-xs">Teams</span>
                  <span className="text-white font-bold font-['Rajdhani'] text-xl">48</span>
               </div>
               <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400 font-medium font-['Rajdhani'] uppercase tracking-wider text-xs">Matches</span>
                  <span className="text-white font-bold font-['Rajdhani'] text-xl">104</span>
               </div>
               <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400 font-medium font-['Rajdhani'] uppercase tracking-wider text-xs">Knockout Rounds</span>
                  <span className="text-white font-bold font-['Rajdhani'] text-xl">5</span>
               </div>
               <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-medium font-['Rajdhani'] uppercase tracking-wider text-xs">Duration</span>
                  <span className="text-white font-bold font-['Rajdhani'] text-xl">39 Days</span>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3 font-['Teko'] uppercase tracking-tight">
          <HelpCircle className="w-8 h-8 text-amber-500" /> Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: "When does the 2026 World Cup start?", a: "June 11, 2026, at Estadio Azteca in Mexico City. Predictions close before kickoff." },
            { q: "How does the 48-team format work?", a: "12 groups of 4. Top 2 + 8 best 3rd place teams advance to Round of 32." },
            { q: "Is this prediction game free?", a: "Yes! 100% free to play. No purchase necessary." },
            { q: "Can I download my bracket?", a: "Absolutely. Generate a high-quality image to share on social media." }
          ].map((faq, i) => (
            <div key={i} className="bg-[#0A0A0C]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />
              <div className="relative z-10">
                <h3 className="font-bold text-white mb-2 font-['Teko'] uppercase tracking-wide group-hover:text-amber-500 transition-colors">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium font-['Rajdhani']">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

