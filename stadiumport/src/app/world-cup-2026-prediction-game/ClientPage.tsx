'use client';

import React, { useState, useRef, useEffect, Suspense, useCallback } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { motion, AnimatePresence } from 'framer-motion';
import { GameProvider, useGame } from '../../features/game/context/GameContext';
import { GameLayout } from '../../features/game/components/GameLayout';
import { GameHeader } from '../../features/game/components/GameHeader';
import { FloatingControlCapsule } from '../../features/game/components/FloatingControlCapsule';
import { TEAMS } from '../../features/game/lib/wc26-data';
import { supabase } from '../../lib/supabase';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { ScrollScrubber } from '../../features/game/components/ScrollScrubber';
import { GroupStageSkeleton } from '../../features/game/components/GroupStageSkeleton';

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center w-full h-64">
    <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin shadow-[0_0_15px_rgba(245,158,11,0.2)]"></div>
  </div>
);

// Steps for the stepper
// Moved inside PredictGameContent to avoid reference errors during SSR

// Lazy loaded components with next/dynamic (Client-only)
const GroupStage = dynamic(() => import('../../features/game/components/GroupStage').then(mod => mod.GroupStage), { 
  ssr: false,
  loading: () => <GroupStageSkeleton />
});
const ThirdPlaceSelector = dynamic(() => import('../../features/game/components/ThirdPlaceSelector'), { 
  ssr: false,
  loading: () => <LoadingFallback />
});
const BracketView = dynamic(() => import('../../features/game/components/BracketView'), { 
  ssr: false,
  loading: () => <LoadingFallback />
});
const ResultDashboard = dynamic(() => import('../../features/game/components/ResultDashboard'), { 
  ssr: false,
  loading: () => <LoadingFallback />
});
const EmailRegistration = dynamic(() => import('../../features/game/components/EmailRegistration'), { 
  ssr: false,
  loading: () => <LoadingFallback />
});
const PredictionSummary = dynamic(() => import('../../features/game/components/PredictionSummary'), { 
  ssr: false,
  loading: () => <LoadingFallback />
});

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
} as const;

function PredictGameContent() {
  // Steps for the stepper
  const STEPS = [
    { id: 0, label: 'Group Stage' },
    { id: 1, label: 'Third Place' },
    { id: 2, label: 'Knockout Rounds' },
    { id: 3, label: 'Summary' },
    { id: 4, label: 'Submit Details' },
    { id: 5, label: 'Your Prediction' },
  ];

  const router = useRouter();
 const params = useParams();
 const searchParams = useSearchParams();
 const { currentStep, setCurrentStep, thirdPlacePicks, knockoutPicks, completedGroupIds, resetGame, groupStandings } = useGame();
 const scrollContainerRef = useRef<HTMLDivElement>(null);
 const [direction, setDirection] = useState(0);
 const stepperRef = useRef<HTMLDivElement>(null);
 const [userName, setUserName] = useState("You");
 const [userInfo, setUserInfo] = useState<{ name: string; email: string; country: string; uniqueId?: string }>({ name: "", email: "", country: "", uniqueId: "" });

 // Bracket Mobile State
 const [bracketRoundIndex, setBracketRoundIndex] = useState(0);
 const isMobile = useMediaQuery('(max-width: 768px)');

 const handleExit = useCallback(() => router.push('/'), [router]);

 // Sync URL step param with game state
 useEffect(() => {
 // params.step might not be available if we are at /world-cup-2026-prediction-game without sub-routes
 // But if we use dynamic routes like [step], we can get it. 
 // For now, let's assume we are on the main page and control step via internal state mostly, 
 // or if we want to support deep linking, we need to adjust the route structure.
 // Given the current file is page.tsx at root of prediction game, we might not have 'step' param unless we use query param or sub-route.
 // Let's use searchParams 'step' if available, or internal state.
 
 const stepParam = searchParams.get('step');
 if (!stepParam) return;
 
 const stepMap: Record<string, number> = {
 'group-stage': 0,
 'third-place-qualifiers': 1,
 'knockout-bracket': 2,
 'summary': 3,
 'submit': 4,
 'results': 5,
 'success': 5
 };

 if (stepMap[stepParam] !== undefined && stepMap[stepParam] !== currentStep) {
 setCurrentStep(stepMap[stepParam]);
 }
 }, [searchParams, setCurrentStep, currentStep]);

 // Scroll to top when step changes
 useEffect(() => {
 if (scrollContainerRef.current) {
 scrollContainerRef.current.scrollTop = 0;
 }
 }, [currentStep, bracketRoundIndex]);

 useEffect(() => {
 const container = stepperRef.current;
 if (!container) return;
 const el = container.querySelector(`[data-step="${currentStep}"]`) as HTMLElement | null;
 if (!el) return;
 const target = el.offsetLeft + el.offsetWidth / 2 - container.clientWidth / 2;
 const max = container.scrollWidth - container.clientWidth;
 const left = Math.max(0, Math.min(target, max));
 container.scrollTo({ left, behavior: 'smooth' });
 }, [currentStep]);

 const isNextDisabled = () => {
 if (currentStep === 0) return false; // Always enabled for Groups Page
 if (currentStep === 1) return thirdPlacePicks.length !== 8;
 if (currentStep === 2) {
 if (isMobile) {
 const rounds = ['R32', 'R16', 'QF', 'SF', 'F'];
 const roundPrefix = rounds[bracketRoundIndex];
 if (!roundPrefix) return true;
 const matchCounts: Record<string, number> = { 'R32': 16, 'R16': 8, 'QF': 4, 'SF': 2, 'F': 1 };
 const count = matchCounts[roundPrefix] ?? 0;
 
 for (let i = 1; i <= count; i++) {
 const id = `${roundPrefix}-${i.toString().padStart(2, '0')}`;
 if (!knockoutPicks[id]) return true;
 }
 // After Final selection, require Third Place winner too
 if (roundPrefix === 'F') {
 return !(knockoutPicks['F-01'] && knockoutPicks['TP-01']);
 }
 return false;
 }
 // Desktop: require Champion and Third Place before proceeding
 return !(knockoutPicks['F-01'] && knockoutPicks['TP-01']);
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
 } else if (currentStep === 3) {
 setCurrentStep(4);
 } else if (currentStep === 4) {
 // Email step proceeds to nothing automatically; submission handles redirect
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
 if (currentStep === 4) setCurrentStep(3);
 };

 const handleRegistrationComplete = (data: { name: string; email: string; country: string; uniqueId: string }) => {
 setUserInfo(data);
 setUserName(data.name);
 try {
 const key = 'sp_wc26_predictions';
 if (typeof window !== 'undefined') {
 const raw = localStorage.getItem(key);
 const map = raw ? JSON.parse(raw) : {};
 map[data.uniqueId] = {
 unique_id: data.uniqueId,
 name: data.name,
 email: data.email,
 country: data.country,
 predictions: {
 groupStandings,
 thirdPlacePicks,
 knockoutPicks
 }
 };
 localStorage.setItem(key, JSON.stringify(map));
 try { localStorage.setItem('sp_wc26_last_id', data.uniqueId); } catch {}
 }
 } catch {}

 (async () => {
 try {
 if (supabase) {
 await supabase.from('predictions').upsert({
 unique_id: data.uniqueId,
 name: data.name,
 email: data.email,
 country: data.country,
 predictions: {
 groupStandings,
 thirdPlacePicks,
 knockoutPicks
 }
 }, { onConflict: 'unique_id' });
 }
 } catch {}
 })();
 router.push(`/world-cup-2026-prediction-game/entry/${data.uniqueId}`);
 };

 const getNextLabel = () => {
 if (currentStep === 2) {
 if (isMobile && bracketRoundIndex < 4) return 'NEXT ROUND';
 if (!knockoutPicks['TP-01']) return 'PICK THIRD PLACE';
 return 'PROCEED';
 }
 if (currentStep === 3) {
 return 'CONTINUE TO EMAIL';
 }
 return 'PROCEED';
 };

 useEffect(() => {
    if (currentStep === 5) {
      if (userInfo.uniqueId) {
        router.push(`/world-cup-2026-prediction-game/entry/${userInfo.uniqueId}`);
      } else {
        // If we try to go to results without submitting, send back to email step
        setCurrentStep(4);
      }
    }
  }, [currentStep, userInfo.uniqueId, router, setCurrentStep]);

  if (currentStep === 5) {
    return null;
  }

 return (
 <GameLayout>
      {/* 1. Header (Fixed, never unmounts) */}
      <GameHeader onExit={handleExit} />
      
      {/* 2. The Content (Animates) - Fixed layout structure */}
      <div 
        ref={scrollContainerRef}
        className="relative w-full h-full flex-1 overflow-y-auto pb-32 pt-20 no-scrollbar"
      >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <>
            {/* Breadcrumb */}
            <Breadcrumb 
              items={[
                { label: 'Prediction Game', href: '/world-cup-2026-prediction-game' }
              ]} 
              className="justify-center mb-8"
              variant="white"
            />

            <h1 className="text-3xl md:text-5xl font-black text-center text-white mb-6 tracking-tight drop-shadow-md">
              World Cup 2026 <span className="text-[#FBBF24]">Predictor Game</span>
            </h1>

            <div className="flex justify-center mb-12">
              <span className="px-3 py-1 rounded-full border border-white/10 text-white/40 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md bg-white/5">
                Last Updated: January 4, 2026
              </span>
            </div>

            {/* Stepper UI (Persistent) */}
          <div className="mb-8 md:mb-12">
            <div ref={stepperRef} className="flex items-center justify-start gap-3 md:justify-between relative overflow-x-auto overflow-y-visible whitespace-nowrap no-scrollbar px-5 py-3 rounded-3xl border border-white/10 bg-[#0A0A0C]/40 backdrop-blur-2xl shadow-2xl pr-5">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] -z-10 rounded-full bg-white/10"></div>
              <motion.div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] -z-10 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                initial={{ width: 0 }}
                animate={{ width: `${Math.max(0, Math.min(100, (currentStep/(STEPS.length-1))*100))}%` }}
                transition={{ type: 'tween', duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
              />
              {STEPS.map((step) => {
                const isCompleted = currentStep > step.id;
                const isCurrent = currentStep === step.id;
                
                return (
                  <div key={step.id} data-step={step.id} className="flex flex-col items-center min-w-[68px] md:min-w-0 shrink-0">
                    <motion.div 
                      initial={false}
                      animate={{ scale: isCurrent ? 1.08 : 1 }}
                      className="flex items-center justify-center"
                    >
                      <div className={`rounded-full transition-all duration-300 ${
                        isCurrent ? 'w-3 h-3 md:w-3.5 md:h-3.5 ring-2 ring-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)] bg-amber-500' :
                        isCompleted ? 'w-2.5 h-2.5 md:w-3 md:h-3 bg-amber-500/80' :
                        'w-2 h-2 md:w-2.5 md:h-2.5 bg-white/20'
                      }`}></div>
                    </motion.div>
                    <span 
                      className={`mt-2 text-[11px] md:text-sm font-medium tracking-wide transition-colors duration-300 whitespace-nowrap font-inter ${
                        isCurrent ? 'text-white font-bold' : isCompleted ? 'text-white/60' : 'text-white/30'
                      } ${isCurrent ? 'inline' : 'hidden md:inline'}`}
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
 <BracketView bracketRoundIndex={bracketRoundIndex} setBracketRoundIndex={setBracketRoundIndex} />
 </Suspense>
 </motion.div>
 )}
 {currentStep === 3 && (
 <motion.div
 key="step-summary"
 custom={direction}
 variants={pageVariants}
 initial="enter"
 animate="center"
 exit="exit"
 transition={pageTransition}
 style={{ willChange: 'transform, opacity' }}
 >
 <Suspense fallback={<LoadingFallback />}>
 <PredictionSummary />
 </Suspense>
 </motion.div>
 )}
 {currentStep === 4 && (
 <motion.div
 key="step-email"
 custom={direction}
 variants={pageVariants}
 initial="enter"
 animate="center"
 exit="exit"
 transition={pageTransition}
 style={{ willChange: 'transform, opacity' }}
 >
 <Suspense fallback={<LoadingFallback />}>
 <EmailRegistration onComplete={handleRegistrationComplete} onBack={handleFooterBack} />
 </Suspense>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </>
 </div>
 </div>

 {/* 3. Floating Controls */}
      {currentStep < 3 && (
        <FloatingControlCapsule
          onNext={handleFooterNext}
          onBack={handleFooterBack}
          isNextDisabled={isNextDisabled()}
          nextLabel={getNextLabel()}
          currentDot={currentStep}
          totalDots={6}
          showDots={true}
          canGoBack={currentStep > 0}
        />
      )}
    </GameLayout>
 );
}

export default function ClientPage() {
 return (
 <GameProvider>
 <Suspense fallback={<LoadingFallback />}>
 <PredictGameContent />
 </Suspense>
 </GameProvider>
 );
}








