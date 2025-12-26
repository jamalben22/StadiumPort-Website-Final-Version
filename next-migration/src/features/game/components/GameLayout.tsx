'use client';

import React, { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import '@fontsource/teko';
import '@fontsource/rajdhani';

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
    {/* Primary Background - Apple-style smooth gradient */}
    <div 
      className="absolute inset-0 w-full h-full"
      style={{
        background: `linear-gradient(135deg, #FF4A00 0%, #FFB199 100%)`
      }}
    />
    
    {/* Subtle Depth Layer - Soft Radial Blend */}
    <div 
      className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full opacity-60 mix-blend-soft-light blur-3xl"
      style={{
        background: `radial-gradient(circle, #FFB199 0%, transparent 70%)`
      }}
    />
    
    <div 
      className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-40 mix-blend-overlay blur-3xl"
      style={{
        background: `radial-gradient(circle, #FF4A00 0%, transparent 70%)`
      }}
    />
  </div>
));

export const GameLayout = ({ children, className, allowScroll = false }: GameLayoutProps) => {

  return (
    <div className={cn(
      "relative w-full h-[100dvh] bg-[#FF4A00] text-slate-900 selection:bg-white/30 flex flex-col",
      allowScroll ? "overflow-y-auto overflow-x-hidden" : "overflow-hidden"
    )}>
      {/* Enforce Fonts Scoped Style */}
      <style>{`
        .game-font-header { font-family: 'Teko', sans-serif; }
        .game-font-body { font-family: 'Rajdhani', sans-serif; }
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
