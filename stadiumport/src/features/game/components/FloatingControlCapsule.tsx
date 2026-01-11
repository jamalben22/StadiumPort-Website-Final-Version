import React from 'react';

interface FloatingControlCapsuleProps {
  onNext: () => void;
  onBack?: () => void;
  canGoBack?: boolean;
  isNextDisabled?: boolean;
  nextLabel?: string;
  showDots?: boolean;
  currentDot?: number;
  totalDots?: number;
  className?: string;
}

export const FloatingControlCapsule = ({
  onNext,
  onBack,
  canGoBack = false,
  isNextDisabled = false,
  nextLabel = 'PROCEED',
  showDots = false,
  currentDot = 0,
  totalDots = 0,
  className = '',
}: FloatingControlCapsuleProps) => {
  return (
    <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none ${className}`}>
      <div className="pointer-events-auto h-12 px-1 flex items-center bg-[#0A0A0C]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          disabled={!canGoBack}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center
            transition-all duration-200
            ${!canGoBack 
              ? 'opacity-20 cursor-not-allowed text-white' 
              : 'hover:bg-white/10 text-white cursor-pointer'}
          `}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Progress Dots (Optional) */}
        {showDots && totalDots > 0 && (
          <div className="flex items-center gap-2 px-4">
            {[...Array(totalDots)].map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1 h-1 rounded-full transition-all duration-300 ${idx === currentDot ? 'bg-amber-500 scale-125' : 'bg-white/20'}`}
              />
            ))}
          </div>
        )}

        {/* Smart Action Button */}
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className={`
            rounded-full h-10 px-6 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-200 flex items-center justify-center whitespace-nowrap font-['Rajdhani']
            ${isNextDisabled 
              ? 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5 opacity-80' 
              : 'bg-amber-500 text-black shadow-lg hover:scale-105 active:scale-95 cursor-pointer'}
          `}
        >
          {nextLabel}
        </button>

      </div>
    </div>
  );
};

