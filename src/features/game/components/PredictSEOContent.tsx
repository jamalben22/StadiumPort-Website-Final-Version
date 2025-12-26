import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="text-center mb-20">
        {/* removed badge */}
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
          World Cup 2026 Predictor: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">The Ultimate Bracket Challenge</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Experience the thrill of the tournament before kickoff. Forecast the destiny of all 48 teams in the USA, Canada, and Mexico with the most advanced simulator on the web.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {[
          { icon: Layout, title: "Full 48-Team Format", desc: "Updated for the new 12-group structure." },
          { icon: Zap, title: "Real-Time Simulation", desc: "Instant bracket updates based on your picks." },
          { icon: Share2, title: "Shareable Results", desc: "Generate custom prediction cards for social media." },
          { icon: Trophy, title: "Official Prizes", desc: "Top predictors win authentic jerseys and gear." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* How to Play Section */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">How to Play</h2>
          <p className="text-slate-400">Four simple steps to glory.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent -translate-x-1/2"></div>

           {[
             { title: "Predict Group Winners", desc: "Select Winner and Runner-up for all 12 groups. These 24 teams advance automatically." },
             { title: "Select Third-Place Teams", desc: "Choose the 8 best third-place teams to complete the Round of 32 field." },
             { title: "Navigate the Bracket", desc: "Plot your path through the Knockout Stages. From Round of 32 to the Final." },
             { title: "Crown the Champion", desc: "Pick the winner of the Final on July 19, 2026 at MetLife Stadium." }
           ].map((step, i) => (
             <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                {/* Number Badge */}
                <div className={`absolute top-0 md:top-1 ${i % 2 === 0 ? 'right-0 md:right-auto md:left-1/2 md:translate-x-[-50%]' : 'left-0 md:left-1/2 md:translate-x-[-50%]'} w-8 h-8 rounded-full bg-indigo-600 border-4 border-slate-900 z-10 flex items-center justify-center text-xs font-bold text-white`}>
                  {i + 1}
                </div>
                
                <div className={`flex-1 pt-1 ${i % 2 === 0 ? 'mr-12 md:mr-0 md:pr-12' : 'ml-12 md:ml-0 md:pl-12'}`}>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* New Format Explained */}
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-white/10 p-8 md:p-12 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">The New 48-Team Format</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              The 2026 World Cup revolutionizes the bracket structure. Understanding these changes is key to a perfect prediction.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">12 Groups of 4</h3>
                  <p className="text-slate-400 text-sm">Top 2 advance automatically.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">"Best Third-Place" Rule</h3>
                  <p className="text-slate-400 text-sm">Top 8 third-place teams qualify for R32.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Round of 32</h3>
                  <p className="text-slate-400 text-sm">A new knockout round added. 5 wins to glory.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
             <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                <span className="text-slate-400">Teams</span>
                <span className="text-white font-bold">48</span>
             </div>
             <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                <span className="text-slate-400">Matches</span>
                <span className="text-white font-bold">104</span>
             </div>
             <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                <span className="text-slate-400">Knockout Rounds</span>
                <span className="text-white font-bold">5</span>
             </div>
             <div className="flex items-center justify-between">
                <span className="text-slate-400">Duration</span>
                <span className="text-white font-bold">39 Days</span>
             </div>
          </div>
        </div>
      </div>


      {/* FAQ */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
          <HelpCircle className="w-8 h-8 text-indigo-500" /> Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: "When does the 2026 World Cup start?", a: "June 11, 2026, at Estadio Azteca in Mexico City. Predictions close before kickoff." },
            { q: "How does the 48-team format work?", a: "12 groups of 4. Top 2 + 8 best 3rd place teams advance to Round of 32." },
            { q: "Is this prediction game free?", a: "Yes! 100% free to play. No purchase necessary." },
            { q: "Can I download my bracket?", a: "Absolutely. Generate a high-quality image to share on social media." }
          ].map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
