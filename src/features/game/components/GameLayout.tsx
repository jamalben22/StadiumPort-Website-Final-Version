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
}

// Memoized Background Component to prevent re-renders
const GameBackground = React.memo(() => (
  <>
    {/* 1. Base Premium Layer (Deep Dark Slate/Black) */}
    <div className="fixed inset-0 z-0 bg-[#020617] pointer-events-none" />
    
    {/* 2. Ambient Lighting (Subtle & Elegant) */}
    {/* Top Center Glow - "Stage Light" effect */}
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-b from-indigo-950/30 via-[#0f172a]/10 to-transparent blur-[120px] pointer-events-none z-0" />

    {/* Bottom Right Glow - Subtle Accent */}
    <motion.div 
      className="fixed -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/5 blur-[100px] pointer-events-none z-0"
      animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
      }}
      transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
      }}
    />

    {/* Bottom Left Glow - Subtle Accent */}
    <motion.div 
      className="fixed -bottom-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/5 blur-[100px] pointer-events-none z-0"
      animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
      }}
      transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
      }}
    />

    {/* 3. Modern Tech Grid (Very Subtle) */}
    <div 
      className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
      style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '120px 120px'
      }} 
    />

    {/* 4. Vignette (Premium Focus) */}
    <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#020617] pointer-events-none" />
  </>
));

export const GameLayout = ({ children, className }: GameLayoutProps) => {

  return (
    <div className="relative w-full h-[100dvh] bg-[#020617] text-white selection:bg-indigo-500/30 overflow-hidden flex flex-col">
      {/* Enforce Dark Mode & Fonts Scoped Style */}
      <style>{`
        :root {
          color-scheme: dark;
        }
        .game-font-header { font-family: 'Teko', sans-serif; }
        .game-font-body { font-family: 'Rajdhani', sans-serif; }
      `}</style>

      {/* --- PREMIUM GAMING ATMOSPHERE --- */}
      <GameBackground />

      {/* Main Content Area - Layout controlled by children */}
      <div className={cn("relative z-10 w-full flex-1 h-full font-body", className)}>
        {children}
      </div>
    </div>
  );
};
