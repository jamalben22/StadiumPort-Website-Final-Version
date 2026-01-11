'use client';

import React, { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

// Utility for class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GameLayoutProps {
  children: ReactNode;
  className?: string;
  allowScroll?: boolean;
}

// Memoized Background Component to prevent re-renders
const GameBackground = React.memo(() => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    {/* Primary Dark Background */}
    <div className="absolute inset-0 bg-[#0A0A0C]" />
    
    {/* Gradient Layers for Depth */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b] opacity-80" />
    
    {/* Carbon Fiber Texture */}
    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
    
    {/* Dynamic Ambient Glows */}
    <div 
      className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full opacity-20 mix-blend-screen blur-[120px] animate-pulse"
      style={{
        background: `radial-gradient(circle, #3b82f6 0%, transparent 70%)`
      }}
    />
    
    <div 
      className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-20 mix-blend-screen blur-[120px] animate-pulse"
      style={{
        background: `radial-gradient(circle, #f59e0b 0%, transparent 70%)`
      }}
    />
  </div>
));

export const GameLayout = ({ children, className, allowScroll = false }: GameLayoutProps) => {

  return (
    <div className={cn(
      "relative w-full h-[100dvh] bg-[#0A0A0C] text-white selection:bg-amber-500/30 flex flex-col",
      allowScroll ? "overflow-y-auto overflow-x-hidden" : "overflow-hidden"
    )}>
      {/* Enforce Fonts Scoped Style */}
      <style>{`
        .game-font-header { font-family: var(--font-teko), sans-serif; }
        .game-font-body { font-family: var(--font-rajdhani), sans-serif; }
      `}</style>

      {/* --- PREMIUM GAMING ATMOSPHERE --- */}
      <GameBackground />

      {/* Main Content Area - Layout controlled by children */}
      <div className={cn(
        "relative z-10 w-full font-body",
        !allowScroll && "flex-1 h-full",
        className
      )}>
        {children}
      </div>
    </div>
  );
};
