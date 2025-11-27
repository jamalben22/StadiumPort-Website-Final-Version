
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'premium' | 'gold' | 'glass' | 'cosmic' | 'aurora' | 'diamond' | 'holographic' | 'quantum' | 'ethereal' | 'cyber' | 'matrix' | 'plasma' | 'stellar';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'ultra';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
  glow?: boolean;
  animate?: boolean;
  effect?: 'none' | 'shimmer' | 'ripple' | 'glow' | 'pulse' | 'morph' | 'levitate' | 'crystalline' | 'liquid' | 'magnetic' | 'dimensional' | 'energy';
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  glow = false,
  animate = true,
  effect = 'shimmer',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold rounded-3xl 
    transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden
    focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 
    disabled:cursor-not-allowed group font-inter ultra-premium-focus
    ${animate ? 'hover:-translate-y-1' : ''}
    ${fullWidth ? 'w-full' : ''}
    transform-gpu will-change-transform
  `;

  const variants = {
    primary: `
      bg-gradient-to-br from-[#FBBF24] via-[#f59e0b] to-[#d97706] text-slate-950 font-bold
      hover:from-[#f59e0b] hover:via-[#d97706] hover:to-[#b45309] focus:ring-[#FBBF24]/30
      shadow-premium hover:shadow-premium-lg border border-[#FBBF24]/20
      ${glow ? 'shadow-[0_0_20px_rgba(251,191,36,0.6)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)]' : ''}
    `,
    secondary: `
      bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 text-slate-900 
      hover:from-slate-200 hover:via-slate-300 hover:to-slate-400 focus:ring-slate-500/30
      dark:from-navy-700 dark:via-navy-600 dark:to-navy-500 dark:text-white 
      dark:hover:from-navy-600 dark:hover:via-navy-500 dark:hover:to-navy-400
      shadow-premium hover:shadow-premium-lg border border-slate-300/20 dark:border-navy-500/20
    `,
    outline: `
      border-2 border-[#FBBF24] text-[#FBBF24] bg-transparent backdrop-blur-xl
      hover:bg-[#FBBF24] hover:text-slate-950 hover:border-[#FBBF24] focus:ring-[#FBBF24]/30
      shadow-premium hover:shadow-premium-lg font-bold
    `,
    ghost: `
      text-slate-600 dark:text-slate-300 bg-transparent backdrop-blur-xl
      hover:bg-slate-100/80 dark:hover:bg-navy-700/80 focus:ring-slate-500/30
      border border-transparent hover:border-slate-200 dark:hover:border-navy-600
    `,
    premium: `
      bg-gradient-to-br from-emerald-400 via-emerald-500 via-emerald-600 to-teal-700 text-white
      hover:from-emerald-500 hover:via-emerald-600 hover:via-emerald-700 hover:to-teal-800
      focus:ring-emerald-500/30 shadow-premium hover:shadow-premium-lg
      border border-emerald-300/30 backdrop-blur-xl
      ${glow ? 'shadow-ultra-glow hover:shadow-ultra-glow' : ''}
    `,
    gold: `
      bg-gradient-to-br from-gold-300 via-gold-400 via-gold-500 to-gold-600 text-navy-900
      hover:from-gold-400 hover:via-gold-500 hover:via-gold-600 hover:to-gold-700
      focus:ring-gold-500/30 shadow-premium hover:shadow-premium-lg
      border border-gold-300/30 font-bold backdrop-blur-xl
      ${glow ? 'shadow-gold-glow-lg hover:shadow-gold-glow-xl' : ''}
    `,
    glass: `
      bg-white/10 backdrop-blur-2xl border border-white/30 text-white
      hover:bg-white/20 hover:border-white/40 focus:ring-white/30
      shadow-glass hover:shadow-glass-lg
    `,
    cosmic: `
      text-white focus:ring-purple-500/30 shadow-cosmic hover:shadow-cosmic
      border border-purple-400/30 backdrop-blur-xl font-bold
      bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500
      hover:from-purple-600 hover:via-pink-600 hover:to-blue-600
      animate-cosmic
    `,
    aurora: `
      text-white focus:ring-cyan-500/30 shadow-aurora hover:shadow-aurora
      border border-cyan-400/30 backdrop-blur-xl font-bold
      bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500
      hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-600
      animate-aurora
    `,
    diamond: `
      text-slate-800 focus:ring-slate-500/30 shadow-diamond hover:shadow-diamond
      border border-white/50 backdrop-blur-xl font-bold
      bg-gradient-to-br from-white via-slate-50 to-slate-100
      hover:from-slate-50 hover:via-slate-100 hover:to-slate-200
      animate-crystalline
    `,
    holographic: `
      text-white focus:ring-pink-500/30 shadow-holographic hover:shadow-holographic
      border border-pink-400/30 backdrop-blur-xl font-bold
      bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500
      hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600
      animate-holographic
    `,
    quantum: `
      text-white focus:ring-violet-500/30 shadow-quantum hover:shadow-quantum
      border border-violet-400/30 backdrop-blur-xl font-bold
      bg-gradient-to-br from-emerald-500 via-blue-500 to-violet-500
      hover:from-emerald-600 hover:via-blue-600 hover:to-violet-600
      animate-quantum
    `,
    ethereal: `
      text-slate-700 focus:ring-slate-500/30 shadow-ethereal hover:shadow-ethereal
      border border-white/40 backdrop-blur-2xl font-semibold
      bg-gradient-to-br from-white/90 via-white/80 to-white/70
      hover:from-white/95 hover:via-white/85 hover:to-white/75
      animate-ethereal
    `,
    cyber: `
      text-black focus:ring-cyan-500/30 shadow-cyber hover:shadow-cyber
      border border-cyan-400/50 backdrop-blur-xl font-bold
      bg-gradient-to-br from-cyan-400 via-pink-400 to-yellow-400
      hover:from-cyan-500 hover:via-pink-500 hover:to-yellow-500
      animate-cyber-glow
    `,
    matrix: `
      text-black focus:ring-green-500/30 shadow-matrix hover:shadow-matrix
      border border-green-400/50 backdrop-blur-xl font-bold
      bg-gradient-to-br from-green-400 via-green-500 to-green-600
      hover:from-green-500 hover:via-green-600 hover:to-green-700
      animate-matrix
    `,
    plasma: `
      text-white focus:ring-purple-500/30 shadow-plasma hover:shadow-plasma
      border border-purple-400/30 backdrop-blur-xl font-bold
      bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500
      hover:from-pink-600 hover:via-purple-600 hover:to-blue-600
      animate-plasma
    `,
    stellar: `
      text-white focus:ring-indigo-500/30 shadow-stellar hover:shadow-stellar
      border border-indigo-400/30 backdrop-blur-xl font-bold
      bg-gradient-to-br from-indigo-500 via-purple-500 to-black
      hover:from-indigo-600 hover:via-purple-600 hover:to-gray-900
      animate-stellar
    `
  };

  const sizes = {
    xs: 'px-4 py-2 text-xs',
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
    xl: 'px-12 py-6 text-xl',
    ultra: 'px-16 py-8 text-2xl'
  };

  const effects = {
    none: '',
    shimmer: 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
    ripple: 'after:absolute after:inset-0 after:rounded-3xl after:opacity-0 active:after:opacity-100 after:transition-opacity after:duration-200 after:bg-white/20 after:animate-ping',
    glow: 'hover:shadow-ultra-glow',
    pulse: 'animate-hyper-pulse',
    morph: 'animate-morph',
    levitate: 'animate-levitate',
    crystalline: 'animate-crystalline',
    liquid: 'animate-liquid-flow',
    magnetic: 'animate-magnetic',
    dimensional: 'animate-dimensional',
    energy: 'before:absolute before:inset-0 before:bg-energy-gradient before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500 before:animate-energy-wave'
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${effects[effect]} ${className}`;

  return (
    <motion.button
      className={buttonClasses}
      disabled={disabled || loading}
      whileTap={{ scale: 0.95 }}
      {...props as HTMLMotionProps<"button">}
    >
      {/* Ultra Premium Background Effects */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Advanced Shimmer Effect */}
      {effect === 'shimmer' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
        </div>
      )}

      {/* Ultra Premium Glow Effect */}
      {glow && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/0 via-emerald-400/30 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl animate-pulse-glow"></div>
      )}

      {/* Quantum Particle Effect */}
      {variant === 'quantum' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-quantum"></div>
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-violet-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-quantum" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 animate-quantum" style={{ animationDelay: '1s' }}></div>
        </div>
      )}

      {/* Holographic Prism Effect */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-prismatic"></div>
        </div>
      )}

      {/* Cosmic Nebula Effect */}
      {variant === 'cosmic' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-nebula-gradient opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-nebula"></div>
        </div>
      )}

      {/* Aurora Borealis Effect */}
      {variant === 'aurora' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-aurora"></div>
        </div>
      )}

      {/* Diamond Crystalline Effect */}
      {variant === 'diamond' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-diamond-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-diamond-shine"></div>
        </div>
      )}

      {/* Ethereal Mist Effect */}
      {variant === 'ethereal' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-ethereal-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ethereal"></div>
        </div>
      )}

      {/* Cyber Grid Effect */}
      {variant === 'cyber' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-cyber-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-neon-flicker"></div>
        </div>
      )}

      {/* Matrix Code Effect */}
      {variant === 'matrix' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-matrix-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-400 animate-matrix"></div>
        </div>
      )}

      {/* Plasma Energy Effect */}
      {variant === 'plasma' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-plasma-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-plasma"></div>
        </div>
      )}

      {/* Stellar Formation Effect */}
      {variant === 'stellar' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-nebula-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-600 animate-stellar"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center space-x-2">
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
            <span className="ultra-premium-text">Loading...</span>
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <i className={`${icon} transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}></i>
            )}
            <span className="ultra-premium-text font-semibold">{children}</span>
            {icon && iconPosition === 'right' && (
              <i className={`${icon} transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12`}></i>
            )}
          </>
        )}
      </div>

      {/* Ultra Premium Ripple Effect */}
      {effect === 'ripple' && (
        <div className="absolute inset-0 rounded-3xl opacity-0 group-active:opacity-100 transition-opacity duration-200">
          <div className="absolute inset-0 rounded-3xl bg-white/30 animate-ping"></div>
          <div className="absolute inset-0 rounded-3xl bg-white/20 animate-ping" style={{ animationDelay: '0.1s' }}></div>
          <div className="absolute inset-0 rounded-3xl bg-white/10 animate-ping" style={{ animationDelay: '0.2s' }}></div>
        </div>
      )}

      {/* Energy Wave Effect */}
      {effect === 'energy' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-energy-gradient translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 animate-energy-wave"></div>
        </div>
      )}

      {/* Dimensional Portal Effect */}
      {effect === 'dimensional' && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-dimensional"></div>
        </div>
      )}
    </motion.button>
  );
}
