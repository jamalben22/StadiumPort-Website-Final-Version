import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GameHeaderProps {
  onExit?: () => void;
}

export const GameHeader = React.memo(({ onExit }: GameHeaderProps) => {
  const navigate = useNavigate();

  const handleExit = () => {
    if (onExit) {
      onExit();
    } else {
       if(window.confirm('Exit Prediction Game? Unsaved progress will be discarded.')) {
          navigate('/');
       }
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 pointer-events-none bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex items-center gap-3 pointer-events-auto">
         {/* Logo / Brand */}
         <img 
           src="/images/Logos/Mobile Header Logo 180 x 180 px.svg" 
           alt="StadiumPort" 
           className="h-8 w-auto object-contain invert" 
         />
      </div>

      <button 
        onClick={handleExit}
        title="Return to StadiumPort World Cup 2026 Hub"
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
          className="w-5 h-5 text-white/80 group-hover:text-white transition-colors"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </header>
  );
});
