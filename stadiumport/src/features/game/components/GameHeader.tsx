'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
        <Image 
          src="/images/Logos/stadiumport-header-logo-dark.svg" 
          alt="stadiumport" 
          width={128}
          height={32}
          priority
          className="h-8 w-auto object-contain" 
        />
      </div>

      <button 
        onClick={handleExit}
        title="Return to stadiumport World Cup 2026 Hub"
        className="pointer-events-auto group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-xl"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5 text-white transition-colors"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </header>
  );
});

