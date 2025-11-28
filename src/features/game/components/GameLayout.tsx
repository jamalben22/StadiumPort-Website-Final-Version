import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
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

export const GameLayout = ({ children, className }: GameLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[100dvh] bg-[#1e1b4b] text-white selection:bg-cyan-500/30 overflow-hidden flex flex-col">
      {/* Enforce Dark Mode & Fonts Scoped Style */}
      <style>{`
        :root {
          color-scheme: dark;
        }
        .game-font-header { font-family: 'Teko', sans-serif; }
        .game-font-body { font-family: 'Rajdhani', sans-serif; }
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(250%) skewX(-12deg); }
        }
      `}</style>

      {/* --- VIBRANT FIFA ENERGY ATMOSPHERE --- */}
      
      {/* 1. Base Gradient Layer (Deep Violet Indigo) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#1e1b4b] via-[#2e1065] to-[#020617] pointer-events-none" />

      {/* 2. Aurora Borealis Animation (The Life) */}
      
      {/* Blob 1: Top Left (Purple/Pink) */}
      <motion.div 
        className="fixed -top-[20%] -left-[20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-transparent blur-[150px] opacity-40 pointer-events-none z-0 transform-gpu"
        animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            rotate: [0, 20, 0],
            scale: [1, 1.1, 1]
        }}
        transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
        }}
      />

      {/* Blob 2: Bottom Right (Cyan/Blue) */}
      <motion.div 
        className="fixed -bottom-[20%] -right-[20%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tl from-cyan-500 via-blue-600 to-transparent blur-[150px] opacity-40 pointer-events-none z-0 transform-gpu"
        animate={{ 
            x: [0, -60, 0],
            y: [0, -40, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.15, 1]
        }}
        transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2 
        }}
      />

      {/* Blob 3: Center (Subtle Gold) */}
      <motion.div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-amber-400 blur-[150px] opacity-10 pointer-events-none z-0 transform-gpu"
        animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5 
        }}
      />

      {/* 3. Tactical Grid Overlay (The Game Feel) */}
      <div 
        className="fixed inset-0 z-0 h-screen w-screen opacity-20 pointer-events-none mix-blend-overlay"
        style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }} 
      />

      {/* 4. Vignette (Focus on Center) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none" />

      {/* Main Content Area - Layout controlled by children */}
      <div className={cn("relative z-10 w-full flex-1 h-full font-body", className)}>
        {children}
      </div>
    </div>
  );
};
