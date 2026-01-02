'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface GameHeaderProps {
  onExit?: () => void;
}

export const GameHeader = React.memo(({ onExit }: GameHeaderProps) => {
  const router = useRouter();

  const handleExit = () => {
    if (onExit) {
      onExit();
    } else {
       if(window.confirm('Exit Prediction Game? Unsaved progress will be discarded.')) {
          router.push('/');
       }
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Logo / Brand */}
        <img 
          src="/images/Logos/Desktop Header SP Logo 2400 x 600 px Night mode.svg" 
          alt="Stadiumport" 
          className="h-8 w-auto object-contain" 
        />
      </div>

      <button 
        onClick={handleExit}
        title="Return to Stadiumport World Cup 2026 Hub"
        className="pointer-events-auto group flex items-center justify-center w-10 h-10 rounded-full bg-[#1c1c1e]/60 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5 text-white/80 group-hover:text-slate-900 dark:text-white transition-colors"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </header>
  );
});

