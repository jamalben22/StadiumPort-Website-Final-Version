import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section className="relative py-40 bg-navy-950 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-[#01b47d]/20 to-purple-900/40 animate-aurora filter blur-3xl"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-space font-bold text-6xl md:text-8xl text-white tracking-tighter mb-8"
        >
          Ready for Kickoff?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-inter text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto font-light leading-relaxed opacity-90"
        >
          The countdown has begun. Don't wait until prices skyrocket. 
          Start planning your World Cup 2026 experience today.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/travel-guides">
             <button className="group relative px-12 py-6 rounded-full bg-white text-navy-950 font-space font-bold text-xl hover:bg-slate-100 transition-colors shadow-ultra-glow hover:scale-105 transform duration-300 overflow-hidden">
               <span className="relative z-10">Start Planning Now</span>
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
             </button>
          </Link>
           <Link to="/accommodation">
             <button className="px-12 py-6 rounded-full border border-white/20 text-white font-space font-semibold text-xl hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm">
               Find Accommodation
             </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
