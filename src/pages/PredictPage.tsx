import React, { useState, useRef, useEffect, Suspense, lazy, useCallback } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GameProvider, useGame } from '../features/game/context/GameContext';
import { GameLayout } from '../features/game/components/GameLayout';
import { GameHeader } from '../features/game/components/GameHeader';
import { FloatingControlCapsule } from '../features/game/components/FloatingControlCapsule';
import { TEAMS } from '../features/game/lib/wc26-data';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { SEO } from '../components/common/SEO';
import { SchemaOrg } from '../components/seo/SchemaOrg';
import { PredictSEOContent } from '../features/game/components/PredictSEOContent';

// Lazy loaded components
const GroupStage = lazy(() => import('../features/game/components/GroupStage').then(module => ({ default: module.GroupStage })));
const ThirdPlaceSelector = lazy(() => import('../features/game/components/ThirdPlaceSelector').then(module => ({ default: module.ThirdPlaceSelector })));
const BracketView = lazy(() => import('../features/game/components/BracketView').then(module => ({ default: module.BracketView })));
const ResultDashboard = lazy(() => import('../features/game/components/ResultDashboard').then(module => ({ default: module.ResultDashboard })));
const EmailRegistration = lazy(() => import('../features/game/components/EmailRegistration').then(module => ({ default: module.EmailRegistration })));

// Steps for the stepper
const STEPS = [
  { id: 0, label: 'Group Stage' },
  { id: 1, label: 'Third Place' },
  { id: 2, label: 'Knockout Rounds' },
  { id: 3, label: 'Submit Details' },
  { id: 4, label: 'Your Prediction' },
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
  const { step } = useParams();
  const [searchParams] = useSearchParams();
  const { currentStep, setCurrentStep, thirdPlacePicks, knockoutPicks, completedGroupIds, resetGame } = useGame();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(0);
  const [userName, setUserName] = useState("You");
  const [userInfo, setUserInfo] = useState<{ name: string; email: string; country: string }>({ name: "", email: "", country: "" });

  // Bracket Mobile State
  const [bracketRoundIndex, setBracketRoundIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleExit = useCallback(() => navigate('/'), [navigate]);

  // Sync URL step param with game state
  useEffect(() => {
    if (!step) return;
    
    const stepMap: Record<string, number> = {
      'group-stage': 0,
      'third-place-qualifiers': 1,
      'knockout-bracket': 2,
      'submit': 3,
      'results': 4,
      'success': 4
    };

    if (stepMap[step] !== undefined && stepMap[step] !== currentStep) {
      setCurrentStep(stepMap[step]);
    }
  }, [step, setCurrentStep, currentStep]);

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

  const handleRegistrationComplete = (data: { name: string; email: string; country: string }) => {
    setUserInfo(data);
    setUserName(data.name);
    setCurrentStep(4);
  };

  const getNextLabel = () => {
    if (currentStep === 2) {
      if (isMobile && bracketRoundIndex < 4) return 'NEXT ROUND';
      return 'CONFIRM BRACKET';
    }
    return 'PROCEED';
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
         <GameHeader onExit={handleExit} />
         <Suspense fallback={<LoadingFallback />}>
           <ResultDashboard 
             champion={champion} 
             runnerUp={runnerUp}
             userName={userName}
             userEmail={userInfo.email}
             userCountry={userInfo.country}
             onRestart={() => {
               resetGame();
               // setIsGameFinished(false); // Not defined in this scope, removing
               // setShowRegistration(false); // Not defined in this scope, removing
               setUserName("You");
             }}
           />
         </Suspense>
      </GameLayout>
    );
  }

  return (
    <GameLayout>
      {/* 1. Header (Fixed, never unmounts) */}
      <GameHeader onExit={handleExit} />
      
      <SEO 
        title="World Cup 2026 Predictor: The #1 Bracket Challenge Simulator" 
        description="Predict the 2026 World Cup winner with our advanced simulator. Forecast every match from the 48-team group stage to the Final. Free to play, official prizes, and instant sharing."
        keywords={["World Cup 2026 Predictor", "World Cup 2026 Bracket", "FIFA World Cup 2026 Simulator", "2026 World Cup Prediction Game", "World Cup Bracket Challenge"]}
        url="/world-cup-2026-prediction-game"
      />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "World Cup 2026 Predictor",
        "applicationCategory": "GameApplication",
        "operatingSystem": "Web",
        "url": "https://stadiumport.com/world-cup-2026-prediction-game",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Interactive World Cup 2026 bracket simulator and prediction game.",
        "featureList": "48-team group stage simulation, Third-place qualifier logic, Knockout bracket predictor, Social sharing",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "15420"
        }
      }} />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When does the 2026 World Cup start?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The tournament kicks off on June 11, 2026, at the Estadio Azteca in Mexico City. The prediction game will remain open until the first match begins."
            }
          },
          {
            "@type": "Question",
            "name": "How does the new 48-team format work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 2026 World Cup features 12 groups of 4 teams. The top 2 from each group, plus the 8 best third-place teams, advance to a new Round of 32 knockout stage."
            }
          },
          {
            "@type": "Question",
            "name": "Is this prediction game free to play?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! The Stadiumport World Cup 2026 Predictor is 100% free."
            }
          },
          {
            "@type": "Question",
            "name": "Can I download my bracket?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Once you complete your prediction, you can download a high-quality image of your bracket or share it directly to Instagram, X (Twitter), and Facebook."
            }
          },
          {
            "@type": "Question",
            "name": "Is the World Cup 2026 Prediction Game free to play?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the Stadiumport World Cup 2026 Prediction Game is 100% free to join and play for football fans worldwide."
            }
          },
          {
            "@type": "Question",
            "name": "How are winners determined?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Winners are based on total points earned from correct predictions. 1 point is awarded for every correct group and knockout match prediction."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if there is a tie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the event of a tie, the winner is determined by: 1. Correct Champion Prediction, 2. Correct Runner-up Prediction, 3. Random Draw."
            }
          }
        ]
      }} />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://stadiumport.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "World Cup 2026 Prediction Game",
            "item": "https://stadiumport.com/world-cup-2026-prediction-game"
          }
        ]
      }} />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Play the World Cup 2026 Prediction Game",
        "description": "Step-by-step guide to using the Stadiumport World Cup 2026 Bracket Simulator.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Predict Group Winners",
            "text": "Select the Winner and Runner-up for each of the 12 groups. These teams automatically advance to the Round of 32.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Select Best Third-Place Teams",
            "text": "Choose the 8 best third-place teams that will advance to the knockout stage.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Navigate the Knockout Bracket",
            "text": "Plot your path through the Round of 32, Round of 16, Quarterfinals, and Semifinals.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Crown the Champion",
            "text": "Pick the winner of the Final match to complete your bracket.",
            "position": 4
          }
        ]
      }} />
      
      {/* 2. The Content (Animates) - Fixed layout structure */}
      <div 
        ref={scrollContainerRef}
        className="relative w-full h-full flex-1 overflow-y-auto pb-32 pt-20 no-scrollbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <>
              {/* Stepper UI (Persistent) */}
              <div className="mb-8 md:mb-12">
                <div className="flex items-center justify-start gap-4 md:justify-between relative overflow-x-auto no-scrollbar px-2">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-200 dark:bg-navy-700 -z-10"></div>
                  {STEPS.map((step) => {
                    const isCompleted = currentStep > step.id;
                    const isCurrent = currentStep === step.id;
                    
                    return (
                      <div key={step.id} className="flex flex-col items-center min-w-[72px] md:min-w-0">
                        <div 
                          className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-4 
                            ${isCompleted 
                              ? 'bg-[#01b47d] border-[#01b47d] text-white' 
                              : isCurrent 
                                ? 'bg-white dark:bg-navy-800 border-[#FBBF24] text-[#FBBF24] shadow-[0_0_15px_rgba(251,191,36,0.5)]' 
                                : 'bg-white dark:bg-navy-800 border-slate-200 dark:border-navy-600 text-slate-400'
                            }`}
                        >
                          {isCompleted ? <i className="ri-check-line"></i> : step.id + 1}
                        </div>
                        <span 
                          className={`mt-2 text-[10px] md:text-xs font-medium uppercase tracking-wider transition-colors duration-300 whitespace-nowrap
                            ${isCurrent 
                              ? 'text-[#FBBF24] font-bold' 
                              : isCompleted 
                                ? 'text-[#01b47d]' 
                                : 'text-slate-400'
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
                        <Suspense fallback={<LoadingFallback />}>
                          <EmailRegistration 
                            onComplete={handleRegistrationComplete}
                            onBack={() => setCurrentStep(2)}
                          />
                        </Suspense>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
            
            {/* SEO Content Section - Visible on scroll */}
            <div className="mt-24 pb-10 opacity-80 hover:opacity-100 transition-opacity duration-500">
               <PredictSEOContent />
            </div>
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
