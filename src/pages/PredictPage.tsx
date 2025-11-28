import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GameProvider, useGame } from '../features/game/context/GameContext';
import { GameLayout } from '../features/game/components/GameLayout';
import { GameHeader } from '../features/game/components/GameHeader';
import { FloatingControlCapsule } from '../features/game/components/FloatingControlCapsule';
import { ResultDashboard } from '../features/game/components/ResultDashboard';
import { TEAMS } from '../features/game/lib/wc26-data';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { SEO } from '../components/common/SEO';
import { EmailRegistration } from '../features/game/components/EmailRegistration';

// Lazy loaded components
const GroupStage = lazy(() => import('../features/game/components/GroupStage').then(module => ({ default: module.GroupStage })));
const ThirdPlaceSelector = lazy(() => import('../features/game/components/ThirdPlaceSelector').then(module => ({ default: module.ThirdPlaceSelector })));
const BracketView = lazy(() => import('../features/game/components/BracketView').then(module => ({ default: module.BracketView })));

// Steps for the stepper
const STEPS = [
  { id: 0, label: 'Groups' },
  { id: 1, label: '3rd Place' },
  { id: 2, label: 'Bracket' },
  { id: 3, label: 'Register' },
  { id: 4, label: 'Result' },
];

const LoadingFallback = () => (
  <div className="flex items-center justify-center w-full h-64">
    <div className="w-8 h-8 border-2 border-[#FBBF24]/20 border-t-[#FBBF24] rounded-full animate-spin"></div>
  </div>
);

// Transition Config
const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 1,
    scale: 1,
    position: 'relative' as const,
    width: '100%',
    zIndex: 2 // Ensure entering item is always on top
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    position: 'relative' as const,
    width: '100%',
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 1,
    scale: 1,
    position: 'absolute' as const,
    width: '100%',
    top: 0,
    left: 0
  })
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1.0], // Native iOS Ease
  duration: 0.35
};

function PredictGameContent() {
  const navigate = useNavigate();
  const { currentStep, setCurrentStep, thirdPlacePicks, knockoutPicks, completedGroupIds, resetGame } = useGame();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(0);
  const [userName, setUserName] = useState("You");

  // Bracket Mobile State
  const [bracketRoundIndex, setBracketRoundIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Scroll to top when step changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentStep, bracketRoundIndex]);

  const isNextDisabled = () => {
    if (currentStep === 0) return false; // Always enabled for Groups Page
    if (currentStep === 1) return thirdPlacePicks.length !== 8;
    if (currentStep === 2) {
       if (isMobile) {
          const rounds = ['R32', 'R16', 'QF', 'SF', 'F'];
          const roundPrefix = rounds[bracketRoundIndex];
          const matchCounts: Record<string, number> = { 'R32': 16, 'R16': 8, 'QF': 4, 'SF': 2, 'F': 1 };
          const count = matchCounts[roundPrefix];
          
          for (let i = 1; i <= count; i++) {
             const id = `${roundPrefix}-${i.toString().padStart(2, '0')}`;
             if (!knockoutPicks[id]) return true;
          }
          return false;
       }
       return !knockoutPicks['F-01'];
    }
    return false;
  };

  const handleFooterNext = () => {
    setDirection(1);
    if (currentStep === 0) setCurrentStep(1);
    else if (currentStep === 1) setCurrentStep(2);
    else if (currentStep === 2) {
       if (isMobile) {
          if (bracketRoundIndex < 4) {
             setBracketRoundIndex(prev => prev + 1);
          } else {
             setCurrentStep(3);
          }
       } else {
          setCurrentStep(3);
       }
    }
  };

  const handleFooterBack = () => {
    setDirection(-1);
    if (currentStep === 0) return;
    if (currentStep === 1) setCurrentStep(0);
    if (currentStep === 2) {
       if (isMobile && bracketRoundIndex > 0) {
          setBracketRoundIndex(prev => prev - 1);
       } else {
          setCurrentStep(1);
       }
    }
    if (currentStep === 3) setCurrentStep(2);
  };

  const handleRegistrationComplete = (data: { name: string }) => {
    setUserName(data.name);
    setCurrentStep(4);
  };

  const getNextLabel = () => {
    if (currentStep === 2) {
      if (isMobile && bracketRoundIndex < 4) return 'NEXT';
      return 'CONTINUE';
    }
    return 'CONTINUE';
  };

  if (currentStep === 4) {
    const championId = knockoutPicks['F-01'];
    const champion = TEAMS.find(t => t.id === championId) || TEAMS[0]; 
    
    // Determine Runner Up (Loser of the Final)
    // The Finalists come from SF-01 and SF-02 winners
    const finalist1 = knockoutPicks['SF-01'];
    const finalist2 = knockoutPicks['SF-02'];
    const runnerUpId = finalist1 === championId ? finalist2 : finalist1;
    const runnerUp = TEAMS.find(t => t.id === runnerUpId);

    return (
      <GameLayout>
         <GameHeader onExit={() => navigate('/')} />
         <ResultDashboard 
           champion={champion} 
           runnerUp={runnerUp}
           userName={userName} 
           onRestart={() => {
             resetGame();
             // setIsGameFinished(false); // Not defined in this scope, removing
             // setShowRegistration(false); // Not defined in this scope, removing
             setUserName("You");
           }}
         />
      </GameLayout>
    );
  }

  return (
    <GameLayout>
      {/* 1. Header (Fixed, never unmounts) */}
      <GameHeader onExit={() => navigate('/')} />
      
      <SEO 
        title="Play WC26 Predictor - Win a Prize" 
        description="Predict the full World Cup 2026 tournament bracket. Challenge your friends and win exclusive prizes!"
      />
      
      {/* 2. The Content (Animates) - Fixed layout structure */}
      <div 
        ref={scrollContainerRef}
        className="relative w-full h-full flex-1 overflow-y-auto pb-32 pt-20 no-scrollbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <>
              {/* Stepper UI (Persistent) */}
              <div className="mb-8 md:mb-12">
                <div className="flex items-center justify-between relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-200 dark:bg-navy-700 -z-10"></div>
                  {STEPS.map((step) => {
                    const isCompleted = currentStep > step.id;
                    const isCurrent = currentStep === step.id;
                    
                    return (
                      <div key={step.id} className="flex flex-col items-center">
                        <div 
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-4 
                            ${isCompleted 
                              ? 'bg-emerald-500 border-emerald-500 text-white' 
                              : isCurrent 
                                ? 'bg-white dark:bg-navy-800 border-[#FBBF24] text-[#FBBF24] shadow-[0_0_15px_rgba(251,191,36,0.5)]' 
                                : 'bg-white dark:bg-navy-800 border-slate-200 dark:border-navy-600 text-slate-400'
                            }`}
                        >
                          {isCompleted ? <i className="ri-check-line"></i> : step.id + 1}
                        </div>
                        <span 
                          className={`mt-2 text-xs font-medium uppercase tracking-wider transition-colors duration-300
                            ${isCurrent 
                              ? 'text-[#FBBF24] font-bold' 
                              : isCompleted 
                                ? 'text-emerald-500' 
                                : 'text-slate-400'
                            }`}
                        >
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step Content */}
              <div className="relative w-full min-h-[60vh] overflow-x-hidden will-change-transform">
                <AnimatePresence mode="popLayout" custom={direction}>
                  {currentStep === 0 && (
                    <motion.div
                      key="step-groups"
                      custom={direction}
                      variants={pageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={pageTransition}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <Suspense fallback={<LoadingFallback />}>
                        <GroupStage />
                      </Suspense>
                    </motion.div>
                  )}
                  {currentStep === 1 && (
                    <motion.div
                      key="step-thirdplace"
                      custom={direction}
                      variants={pageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={pageTransition}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <Suspense fallback={<LoadingFallback />}>
                        <ThirdPlaceSelector />
                      </Suspense>
                    </motion.div>
                  )}
                  {currentStep === 2 && (
                    <motion.div
                      key="step-bracket"
                      custom={direction}
                      variants={pageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={pageTransition}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <Suspense fallback={<LoadingFallback />}>
                        <BracketView 
                           bracketRoundIndex={bracketRoundIndex} 
                           setBracketRoundIndex={setBracketRoundIndex}
                        />
                      </Suspense>
                    </motion.div>
                  )}
                  {currentStep === 3 && (
                    <motion.div
                      key="step-registration"
                      custom={direction}
                      variants={pageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={pageTransition}
                      style={{ willChange: 'transform, opacity' }}
                    >
                       <div className="min-h-[70vh] flex items-center justify-center">
                        <EmailRegistration 
                          onComplete={handleRegistrationComplete}
                          onBack={() => setCurrentStep(2)}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
        </div>
      </div>


      {/* 3. Footer (Fixed, never unmounts) */}
      {currentStep < 3 && (
        <FloatingControlCapsule
          onNext={handleFooterNext}
          onBack={handleFooterBack}
          canGoBack={currentStep > 0 || (currentStep === 2 && isMobile && bracketRoundIndex > 0)}
          isNextDisabled={isNextDisabled()}
          nextLabel={getNextLabel()}
          showDots={currentStep === 2 && isMobile}
          currentDot={bracketRoundIndex}
          totalDots={5}
        />
      )}

    </GameLayout>
  );
}

export default function PredictPage() {
  return (
    <GameProvider>
      <PredictGameContent />
    </GameProvider>
  );
}
