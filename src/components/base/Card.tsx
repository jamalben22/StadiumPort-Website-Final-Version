
import { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'premium' | 'glass' | 'gradient' | 'minimal' | 'cosmic' | 'aurora' | 'diamond' | 'holographic' | 'quantum' | 'ethereal' | 'cyber' | 'matrix' | 'plasma' | 'stellar';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'ultra';
  hover?: boolean;
  glow?: boolean;
  animate?: boolean;
  border?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'premium' | 'ultra' | 'cosmic' | 'aurora' | 'diamond' | 'holographic' | 'quantum' | 'ethereal' | 'cyber' | 'matrix' | 'plasma' | 'stellar';
  effect?: 'none' | 'shimmer' | 'glow' | 'pulse' | 'morph' | 'levitate' | 'crystalline' | 'liquid' | 'magnetic' | 'dimensional' | 'energy' | 'parallax';
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  hover = true,
  glow = false,
  animate = true,
  border = true,
  shadow = 'md',
  effect = 'shimmer',
  className = '',
  ...props
}: CardProps) {
  const baseClasses = `
    relative rounded-4xl transition-all duration-700 overflow-hidden ultra-premium-container
    ${animate ? 'group transform-gpu will-change-transform' : ''}
    backdrop-blur-xl
  `;

  const variants = {
    default: `
      bg-white/90 dark:bg-navy-800/90 
      ${border ? 'border border-slate-200/50 dark:border-navy-700/50' : ''}
      ${hover ? 'hover:border-[#008f63]/40 dark:hover:border-[#008f63]/40 hover:bg-white/95 dark:hover:bg-navy-800/95' : ''}
    `,
    premium: `
      bg-white/85 dark:bg-navy-800/85 
      ${border ? 'border border-white/30 dark:border-navy-700/30' : ''}
      ${hover ? 'hover:bg-white/95 dark:hover:bg-navy-800/95 hover:border-[#008f63]/40' : ''}
    `,
    glass: `
      bg-white/10 dark:bg-navy-900/10 
      ${border ? 'border border-white/20 dark:border-navy-700/20' : ''}
      ${hover ? 'hover:bg-white/20 dark:hover:bg-navy-900/20 hover:border-white/40' : ''}
    `,
    gradient: `
      bg-gradient-to-br from-white/90 via-slate-50/90 to-[#01b47d]/5
      dark:from-navy-800/90 dark:via-navy-700/90 dark:to-[#008f63]/30
      ${border ? 'border border-[#01b47d]/20 dark:border-[#008f63]/30' : ''}
      ${hover ? 'hover:from-[#01b47d]/5 hover:to-gold-50/95 dark:hover:from-[#008f63]/40 dark:hover:to-gold-900/30' : ''}
    `,
    minimal: `
      bg-transparent
      ${border ? 'border border-slate-200/50 dark:border-navy-700/50' : ''}
      ${hover ? 'hover:bg-slate-50/80 dark:hover:bg-navy-800/50' : ''}
    `,
    cosmic: `
      bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-[#01b47d]/20
      dark:from-purple-900/30 dark:via-pink-900/30 dark:to-[#008f63]/30
      ${border ? 'border border-purple-400/30 dark:border-purple-600/30' : ''}
      ${hover ? 'hover:from-purple-500/30 hover:via-pink-500/30 hover:to-[#01b47d]/30' : ''}
      animate-cosmic
    `,
    aurora: `
      bg-gradient-to-br from-[#01b47d]/20 via-[#01b47d]/20 to-[#01b47d]/20
      dark:from-[#008f63]/30 dark:via-[#008f63]/30 dark:to-[#008f63]/30
      ${border ? 'border border-[#01b47d]/30 dark:border-[#01b47d]/30' : ''}
      ${hover ? 'hover:from-[#01b47d]/30 hover:via-[#01b47d]/30 hover:to-[#01b47d]/30' : ''}
      animate-aurora
    `,
    diamond: `
      bg-gradient-to-br from-white/95 via-slate-50/95 to-slate-100/95
      dark:from-slate-800/95 dark:via-slate-700/95 dark:to-slate-600/95
      ${border ? 'border border-white/50 dark:border-slate-500/50' : ''}
      ${hover ? 'hover:from-white hover:via-slate-50 hover:to-slate-100' : ''}
      animate-crystalline
    `,
    holographic: `
      bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-[#01b47d]/20
      dark:from-pink-900/30 dark:via-purple-900/30 dark:to-[#008f63]/30
      ${border ? 'border border-pink-400/30 dark:border-pink-600/30' : ''}
      ${hover ? 'hover:from-pink-500/30 hover:via-purple-500/30 hover:to-[#01b47d]/30' : ''}
      animate-holographic
    `,
    quantum: `
      bg-gradient-to-br from-[#01b47d]/20 via-[#01b47d]/20 to-violet-500/20
      dark:from-[#008f63]/30 dark:via-[#008f63]/30 dark:to-violet-900/30
      ${border ? 'border border-violet-400/30 dark:border-violet-600/30' : ''}
      ${hover ? 'hover:from-[#01b47d]/30 hover:via-[#01b47d]/30 hover:to-violet-500/30' : ''}
      animate-quantum
    `,
    ethereal: `
      bg-gradient-to-br from-white/80 via-white/70 to-white/60
      dark:from-navy-800/80 dark:via-navy-700/70 dark:to-navy-600/60
      ${border ? 'border border-white/40 dark:border-navy-500/40' : ''}
      ${hover ? 'hover:from-white/90 hover:via-white/80 hover:to-white/70' : ''}
      animate-ethereal
    `,
    cyber: `
      bg-gradient-to-br from-[#01b47d]/20 via-pink-400/20 to-yellow-400/20
      dark:from-[#008f63]/30 dark:via-pink-900/30 dark:to-yellow-900/30
      ${border ? 'border border-[#01b47d]/50 dark:border-[#01b47d]/50' : ''}
      ${hover ? 'hover:from-[#01b47d]/30 hover:via-pink-400/30 hover:to-yellow-400/30' : ''}
      animate-cyber-glow
    `,
    matrix: `
      bg-gradient-to-br from-green-400/20 via-green-500/20 to-green-600/20
      dark:from-green-900/30 dark:via-green-800/30 dark:to-green-700/30
      ${border ? 'border border-green-400/50 dark:border-green-600/50' : ''}
      ${hover ? 'hover:from-green-400/30 hover:via-green-500/30 hover:to-green-600/30' : ''}
      animate-matrix
    `,
    plasma: `
      bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-[#01b47d]/20
      dark:from-pink-900/30 dark:via-purple-900/30 dark:to-[#008f63]/30
      ${border ? 'border border-purple-400/30 dark:border-purple-600/30' : ''}
      ${hover ? 'hover:from-pink-500/30 hover:via-purple-500/30 hover:to-[#01b47d]/30' : ''}
      animate-plasma
    `,
    stellar: `
      bg-gradient-to-br from-[#01b47d]/20 via-purple-500/20 to-black/20
      dark:from-[#008f63]/30 dark:via-purple-900/30 dark:to-black/50
      ${border ? 'border border-[#01b47d]/30 dark:border-[#01b47d]/30' : ''}
      ${hover ? 'hover:from-[#01b47d]/30 hover:via-purple-500/30 hover:to-black/30' : ''}
      animate-stellar
    `
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
    ultra: 'p-16'
  };

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    premium: 'shadow-premium hover:shadow-premium-lg',
    ultra: 'shadow-ultra-glow hover:shadow-ultra-glow',
    cosmic: 'shadow-cosmic hover:shadow-cosmic',
    aurora: 'shadow-aurora hover:shadow-aurora',
    diamond: 'shadow-diamond hover:shadow-diamond',
    holographic: 'shadow-holographic hover:shadow-holographic',
    quantum: 'shadow-quantum hover:shadow-quantum',
    ethereal: 'shadow-ethereal hover:shadow-ethereal',
    cyber: 'shadow-cyber hover:shadow-cyber',
    matrix: 'shadow-matrix hover:shadow-matrix',
    plasma: 'shadow-plasma hover:shadow-plasma',
    stellar: 'shadow-stellar hover:shadow-stellar'
  };

  const effects = {
    none: '',
    shimmer: 'before:absolute before:inset-0 before:rounded-4xl before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-1000',
    glow: 'group-hover:shadow-ultra-glow',
    pulse: 'animate-hyper-pulse',
    morph: 'animate-morph',
    levitate: 'animate-levitate',
    crystalline: 'animate-crystalline',
    liquid: 'animate-liquid-flow',
    magnetic: 'animate-magnetic',
    dimensional: 'animate-dimensional',
    energy: 'before:absolute before:inset-0 before:rounded-4xl before:bg-energy-gradient before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-700',
    parallax: 'transform-gpu will-change-transform group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:rotate-1'
  };

  const hoverEffects = hover ? `
    ${animate ? 'hover:scale-[1.02] hover:-translate-y-2' : ''}
    ${glow ? 'hover:shadow-ultra-glow' : ''}
  ` : '';

  const cardClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${paddings[padding]} 
    ${shadows[shadow]} 
    ${effects[effect]}
    ${hoverEffects} 
    ${className}
  `;

  return (
    <div className={cardClasses} {...props}>
      {/* Ultra Premium Background Mesh */}
      <div className="absolute inset-0 rounded-4xl bg-mesh-gradient opacity-30 pointer-events-none"></div>

      {/* Variant-Specific Background Effects */}
      {variant === 'cosmic' && (
        <div className="absolute inset-0 rounded-4xl bg-cosmic-mesh opacity-50 pointer-events-none animate-cosmic"></div>
      )}
      
      {variant === 'aurora' && (
        <div className="absolute inset-0 rounded-4xl bg-aurora-mesh opacity-50 pointer-events-none animate-aurora"></div>
      )}
      
      {variant === 'diamond' && (
        <div className="absolute inset-0 rounded-4xl bg-diamond-mesh opacity-60 pointer-events-none animate-crystalline"></div>
      )}
      
      {variant === 'holographic' && (
        <div className="absolute inset-0 rounded-4xl bg-holographic-mesh opacity-40 pointer-events-none animate-holographic"></div>
      )}
      
      {variant === 'quantum' && (
        <div className="absolute inset-0 rounded-4xl bg-quantum-mesh opacity-50 pointer-events-none animate-quantum"></div>
      )}
      
      {variant === 'ethereal' && (
        <div className="absolute inset-0 rounded-4xl bg-ethereal-mesh opacity-60 pointer-events-none animate-ethereal"></div>
      )}
      
      {variant === 'cyber' && (
        <div className="absolute inset-0 rounded-4xl bg-cyber-mesh opacity-40 pointer-events-none animate-cyber-glow"></div>
      )}
      
      {variant === 'matrix' && (
        <div className="absolute inset-0 rounded-4xl bg-matrix-mesh opacity-50 pointer-events-none animate-matrix"></div>
      )}
      
      {variant === 'plasma' && (
        <div className="absolute inset-0 rounded-4xl bg-plasma-mesh opacity-50 pointer-events-none animate-plasma"></div>
      )}
      
      {variant === 'stellar' && (
        <div className="absolute inset-0 rounded-4xl bg-stellar-mesh opacity-50 pointer-events-none animate-stellar"></div>
      )}

      {/* Premium Gradient Overlay */}
      {variant === 'premium' && (
        <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-white/20 via-transparent to-[#01b47d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      )}

      {/* Glass Reflection Effect */}
      {variant === 'glass' && (
        <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40 pointer-events-none"></div>
      )}

      {/* Ultra Premium Shimmer Effect */}
      {effect === 'shimmer' && animate && hover && (
        <div className="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#01b47d]/60 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200"></div>
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-transparent via-gold-400/60 to-transparent translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1200" style={{ transitionDelay: '0.2s' }}></div>
        </div>
      )}

      {/* Energy Wave Effect */}
      {effect === 'energy' && (
        <div className="absolute inset-0 rounded-4xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-energy-gradient translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 opacity-30"></div>
        </div>
      )}

      {/* Dimensional Portal Effect */}
      {effect === 'dimensional' && (
        <div className="absolute inset-0 rounded-4xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-[#01b47d]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-dimensional"></div>
        </div>
      )}

      {/* Magnetic Field Effect */}
      {effect === 'magnetic' && (
        <div className="absolute inset-0 rounded-4xl overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#01b47d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-magnetic"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-magnetic" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-[#01b47d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 animate-magnetic" style={{ animationDelay: '1s' }}></div>
        </div>
      )}

      {/* Liquid Flow Effect */}
      {effect === 'liquid' && (
        <div className="absolute inset-0 rounded-4xl overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#01b47d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-liquid-flow"></div>
        </div>
      )}

      {/* Crystalline Structure Effect */}
      {effect === 'crystalline' && (
        <div className="absolute inset-0 rounded-4xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-crystalline"></div>
        </div>
      )}

      {/* Glow Effect */}
      {glow && (
        <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-[#01b47d]/10 to-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none animate-pulse-glow"></div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      

      {/* Parallax Effect */}
      {effect === 'parallax' && (
        <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-white/5 via-transparent to-[#01b47d]/5 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none transform group-hover:scale-105"></div>
      )}

      {/* Ultra Premium Floating Particles */}
      {variant === 'quantum' && (
        <div className="absolute inset-0 rounded-4xl overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-[#01b47d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-[#01b47d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      )}
    </div>
  );
}
