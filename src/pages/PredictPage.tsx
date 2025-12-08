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
import { ScrollScrubber } from '../features/game/components/ScrollScrubber';

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
  const [userInfo, setUserInfo] = useState<{ name: string; email: string; country: string; uniqueId?: string }>({ name: "", email: "", country: "", uniqueId: "" });

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

  const handleRegistrationComplete = (data: { name: string; email: string; country: string; uniqueId: string }) => {
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
             uniqueId={userInfo.uniqueId}
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
        title="Free World Cup 2026 Predictor Contest | Win Jerseys, Match Ball & Cash (13+)" 
        description="Free worldwide for ages 13+. Win official jerseys, match ball & $500 cash. Open to all countries. Parental consent required for minors. Void where prohibited."
        keywords={["World Cup 2026 predictor", "free World Cup prediction game", "International World Cup contest", "Global soccer prediction game", "Worldwide World Cup prizes", "Win World Cup prizes internationally"]}
        url="/world-cup-2026-prediction-game"
      />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "World Cup 2026 Predictor",
        "applicationCategory": "GameApplication",
        "operatingSystem": "Any",
        "url": "https://stadiumport.com/world-cup-2026-prediction-game",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Interactive World Cup 2026 bracket simulator and prediction game. Free to play worldwide for ages 13+.",
        "featureList": "48-team group stage simulation, Third-place qualifier logic, Knockout bracket predictor, Social sharing",
        "browserRequirements": "Requires JavaScript. Works on modern browsers.",
        "softwareVersion": "2.0",
        "audience": {
          "@type": "PeopleAudience",
          "suggestedMinAge": "13"
        }
      }} />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "World Cup 2026 Predictor Challenge",
        "description": "Global World Cup 2026 prediction contest open to participants worldwide aged 13 or older. Participants aged 13-17 must have parental or guardian permission. All physical prizes ship internationally to any country. Prize winners under 18 must have a parent or guardian claim the prize on their behalf. Void where prohibited by law.",
        "startDate": "2024-06-11T09:00:00Z",
        "endDate": "2026-06-11T09:00:00Z",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
          "@type": "VirtualLocation",
          "url": "https://stadiumport.com/world-cup-2026-prediction-game"
        },
        "organizer": {
          "@type": "Organization",
          "name": "StadiumPort",
          "url": "https://stadiumport.com"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://stadiumport.com/world-cup-2026-prediction-game",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-06-11T09:00:00Z"
        },
        "performer": {
          "@type": "Organization",
          "name": "StadiumPort"
        }
      }} />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I win the World Cup 2026 Predictor Contest?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Earn points for every correct prediction: 1 point for group winners, 2 points for Round of 32, up to 10 points for the Champion. The user with the highest total score on July 19, 2026 wins the Grand Prize."
            }
          },
          {
            "@type": "Question",
            "name": "What are the prizes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Grand Prize: Authentic World Cup 2026 Jersey of your choice, Official Match Ball, and $500 Cash. Runner-up prizes include gift cards and team merchandise."
            }
          },
          {
            "@type": "Question",
            "name": "Is the contest free to enter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the StadiumPort Predictor is 100% free to play. No purchase necessary to enter or win."
            }
          },
          {
            "@type": "Question",
            "name": "Who can play?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Anyone worldwide aged 13+ (parental consent required for minors)."
            }
          },
          {
            "@type": "Question",
            "name": "Who can win prizes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Anyone worldwide aged 13+ can win. We ship prizes internationally to all countries."
            }
          },
          {
            "@type": "Question",
            "name": "Do you ship prizes internationally?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We ship all physical prizes (jerseys, official match ball) to winners anywhere in the world at no cost to the winner. Cash prizes are sent via PayPal or international wire transfer."
            }
          },
          {
            "@type": "Question",
            "name": "What if I'm under 18 and win?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Parent/guardian must claim prize on your behalf."
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
            "name": "World Cup 2026 Predictor",
            "item": "https://stadiumport.com/world-cup-2026-prediction-game"
          }
        ]
      }} />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Play the World Cup 2026 Prediction Game",
        "description": "Step-by-step guide to creating your winning World Cup 2026 bracket.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Predict Group Winners",
            "text": "Select the Winner and Runner-up for each of the 12 groups. These 24 teams automatically advance to the Round of 32.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Select Third-Place Qualifiers",
            "text": "Choose the 8 best third-place teams from the remaining pool to complete the Round of 32.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Navigate Knockout Bracket",
            "text": "Predict the winner of every match from the Round of 32 to the Final on July 19, 2026.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Submit Prediction",
            "text": "Enter your name and email to lock in your bracket and enter the contest for a chance to win prizes.",
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
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-white/10 -z-10 rounded-full"></div>
                  {STEPS.map((step) => {
                    const isCompleted = currentStep > step.id;
                    const isCurrent = currentStep === step.id;
                    
                    return (
                      <div key={step.id} className="flex flex-col items-center min-w-[72px] md:min-w-0">
                        <motion.div 
                          initial={false}
                          animate={{
                             scale: isCurrent ? 1.1 : 1,
                             backgroundColor: isCompleted ? '#10b981' : isCurrent ? '#6366f1' : '#1e293b',
                             borderColor: isCompleted ? '#10b981' : isCurrent ? '#818cf8' : '#334155'
                          }}
                          className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 transition-all duration-300 shadow-lg ${isCurrent ? 'shadow-indigo-500/30' : ''}`}
                        >
                          {isCompleted ? <i className="ri-check-line text-white"></i> : <span className={isCurrent ? 'text-white' : 'text-slate-400'}>{step.id + 1}</span>}
                        </motion.div>
                        <span 
                          className={`mt-3 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors duration-300 whitespace-nowrap font-inter
                            ${isCurrent 
                              ? 'text-indigo-400' 
                              : isCompleted 
                                ? 'text-emerald-400' 
                                : 'text-slate-500'
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
            <div className="mt-24 pb-10">
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

      {/* 4. Premium Scroll Scrubber */}
      <ScrollScrubber containerRef={scrollContainerRef} />

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
