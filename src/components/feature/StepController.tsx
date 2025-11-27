import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StepControllerProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  isNextDisabled?: boolean;
  isBackDisabled?: boolean;
  nextLabel?: string;
  backLabel?: string;
}

export const StepController = ({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  isNextDisabled = false,
  isBackDisabled = false,
  nextLabel = 'Next',
  backLabel = 'Back',
}: StepControllerProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] bg-slate-900/90 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          disabled={isBackDisabled}
          className={`
            flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all
            ${isBackDisabled 
              ? 'opacity-30 cursor-not-allowed text-slate-500' 
              : 'text-white hover:bg-white/10 active:scale-95'
            }
          `}
        >
          <i className="ri-arrow-left-s-line text-lg"></i>
          <span className="hidden sm:inline">{backLabel}</span>
        </button>

        {/* Step Indicator */}
        <div className="flex flex-col items-center">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`
                  h-1 rounded-full transition-all duration-300
                  ${i === currentStep 
                    ? 'w-6 bg-[#FBBF24]' 
                    : i < currentStep 
                      ? 'w-2 bg-[#FBBF24]/50' 
                      : 'w-2 bg-slate-700'
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg
            ${isNextDisabled 
              ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5' 
              : 'bg-[#FBBF24] text-black hover:bg-[#f59e0b] shadow-[#FBBF24]/20 active:scale-95'
            }
          `}
        >
          <span className="hidden sm:inline">{nextLabel}</span>
          <span className="sm:hidden">Next</span>
          <i className="ri-arrow-right-s-line text-lg"></i>
        </button>
      </div>
    </div>
  );
};
