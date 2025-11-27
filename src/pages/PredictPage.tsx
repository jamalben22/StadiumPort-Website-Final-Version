import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameProvider, useGame } from '../features/game/context/GameContext';
import { GroupStage } from '../features/game/components/GroupStage';
import { ThirdPlaceSelector } from '../features/game/components/ThirdPlaceSelector';
import { BracketView } from '../features/game/components/BracketView';
import { ShareCard, ShareCardRef } from '../features/game/components/ShareCard';
import { AffiliateResult } from '../features/game/components/AffiliateResult';
import { supabase } from '../lib/supabase';
import { Button } from '../components/base/Button';
import { Header } from '../components/feature/Header';
import { Footer } from '../components/feature/Footer';
import { SEO } from '../components/common/SEO';

import { StepController } from '../components/feature/StepController';
import { TEAMS } from '../features/game/lib/wc26-data';

// Steps for the stepper
const STEPS = [
  { id: 0, label: 'Groups' },
  { id: 1, label: '3rd Place' },
  { id: 2, label: 'Bracket' },
  { id: 3, label: 'Result' },
];

function PredictGameContent() {
  const { currentStep, setCurrentStep, resetGame, groupStandings, thirdPlacePicks, knockoutPicks } = useGame();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const shareCardRef = useRef<ShareCardRef>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleDownload = async () => {
    if (!shareCardRef.current) return;
    setIsDownloading(true);
    try {
      await shareCardRef.current.downloadImage();
    } finally {
      setIsDownloading(false);
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`I predicted the World Cup 2026 winner! Beat me here: ${window.location.origin}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };


  const isNextDisabled = () => {
    if (currentStep === 0) return false; // Groups always valid (default or sorted)
    if (currentStep === 1) return thirdPlacePicks.length !== 8;
    if (currentStep === 2) return !knockoutPicks['F-01'];
    return false;
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!supabase) {
        // Demo mode: Simulate success if Supabase is not configured
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmissionSuccess(true);
        return;
      }

      const { error: supabaseError } = await supabase
        .from('predictions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            group_standings: groupStandings,
            third_place_picks: thirdPlacePicks,
            knockout_picks: knockoutPicks,
            submitted_at: new Date().toISOString(),
          },
        ]);

      if (supabaseError) throw supabaseError;
      setSubmissionSuccess(true);
    } catch (err: any) {
      console.error('Error submitting prediction:', err);
      setError(err.message || 'Failed to save prediction. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-900 flex flex-col">
      <SEO 
        title="Play WC26 Predictor - Win a Prize" 
        description="Predict the full World Cup 2026 tournament bracket. Challenge your friends and win exclusive prizes!"
      />
      <Header />
      
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Stepper UI */}
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
          <div className="min-h-[60vh]">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="step-groups"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GroupStage />
                </motion.div>
              )}
              {currentStep === 1 && (
                <motion.div
                  key="step-thirdplace"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ThirdPlaceSelector />
                </motion.div>
              )}
              {currentStep === 2 && (
                <motion.div
                  key="step-bracket"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <BracketView />
                </motion.div>
              )}
              
              {currentStep === 3 && (
                <motion.div
                  key="step-result"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="max-w-3xl mx-auto animate-fade-up">
                {!submissionSuccess ? (
                  <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-xl border border-slate-100 dark:border-navy-700 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#FBBF24] to-[#d97706] p-1"></div>
                    <div className="p-8 md:p-12">
                      <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-[#FBBF24]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#FBBF24] text-3xl">
                          <i className="ri-trophy-line"></i>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-space mb-4">
                          Prediction Complete!
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg">
                          Enter your details to generate your Golden Ticket and see your personalized travel guide.
                        </p>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-navy-600 bg-slate-50 dark:bg-navy-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#FBBF24] focus:border-transparent transition-all duration-200"
                            placeholder="e.g. Kylian Mbappé"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-navy-600 bg-slate-50 dark:bg-navy-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#FBBF24] focus:border-transparent transition-all duration-200"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>

                        {error && (
                          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 rounded-xl flex items-start gap-3">
                            <i className="ri-error-warning-line text-red-500 mt-0.5"></i>
                            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                          </div>
                        )}

                        <Button 
                          type="submit" 
                          variant="primary" 
                          fullWidth 
                          className="py-4 text-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <i className="ri-loader-4-line animate-spin"></i> Saving...
                            </span>
                          ) : (
                            'Reveal My Golden Ticket'
                          )}
                        </Button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div className="animate-fade-in min-h-screen">
                    <div className="max-w-7xl mx-auto py-4 md:py-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                            
                            {/* Left Column: The Poster */}
                            <div className="flex flex-col items-center order-2 lg:order-1">
                                {/* Success Message (Mobile Only) */}
                                <div className="lg:hidden w-full mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center">
                                    <p className="text-emerald-400 font-medium text-sm flex items-center justify-center gap-2">
                                        <i className="ri-checkbox-circle-line"></i> Prediction Saved!
                                    </p>
                                </div>

                                {/* Phone Mockup */}
                                <div className="relative mx-auto max-w-[340px] border-8 border-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden bg-slate-900 sticky top-8">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-xl z-20"></div>
                                    {/* Screen */}
                                    <div className="bg-slate-800 w-full h-full min-h-[500px] flex flex-col">
                                        <ShareCard ref={shareCardRef} userName={formData.name} />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Details & Actions */}
                            <div className="space-y-8 text-white order-1 lg:order-2 lg:sticky lg:top-8">
                                 {/* Success Message (Desktop) */}
                                <div className="hidden lg:block w-fit bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1 text-center mb-4">
                                    <p className="text-emerald-400 font-medium text-sm flex items-center gap-2">
                                        <i className="ri-checkbox-circle-line"></i> Prediction Locked In
                                    </p>
                                </div>

                                 <div className="space-y-2">
                                     <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                                        YOUR TICKET TO <span className="text-[#FBBF24]">GLORY</span>
                                     </h2>
                                     <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                                        You've locked in your prediction. Now share it with the world and check out the trip of a lifetime.
                                     </p>
                                 </div>

                                 {/* Action Buttons */}
                                 <div className="flex flex-col gap-4 pt-4">
                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Button 
                                            onClick={handleDownload}
                                            disabled={isDownloading}
                                            className="h-16 text-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-purple-500/30 border-none rounded-xl"
                                        >
                                            <i className="ri-instagram-line mr-2 text-2xl"></i> 
                                            {isDownloading ? 'Saving...' : 'Share to Story'}
                                        </Button>
                                        
                                        <Button
                                            onClick={handleWhatsAppShare}
                                            className="h-16 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-green-500/30 border-none rounded-xl"
                                        >
                                            <i className="ri-whatsapp-line mr-2 text-2xl"></i> Challenge Friends
                                        </Button>
                                     </div>

                                     {/* Pulsing Trip Button */}
                                     <div className="relative group mt-4">
                                        <div className="absolute inset-0 bg-[#FBBF24] rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                                        <Button 
                                            className="relative w-full h-20 text-2xl font-black italic uppercase bg-black border-2 border-[#FBBF24] text-[#FBBF24] hover:bg-[#FBBF24] hover:text-black transition-all rounded-xl"
                                            onClick={() => window.open('https://stadiumport.com', '_blank')}
                                        >
                                            Check Trip Price
                                            <i className="ri-arrow-right-line ml-2"></i>
                                        </Button>
                                     </div>
                                 </div>
                                 
                                 <div className="pt-8 border-t border-white/10">
                                     <AffiliateResult />
                                 </div>

                                 <div className="flex justify-start">
                                    <button 
                                        onClick={() => {
                                            setSubmissionSuccess(false);
                                            setFormData({ name: '', email: '' });
                                            resetGame();
                                        }}
                                        className="text-slate-500 hover:text-white transition-colors text-sm font-medium underline decoration-slate-700 hover:decoration-white underline-offset-4"
                                    >
                                        Start New Prediction
                                    </button>
                                 </div>
                            </div>
                        </div>
                    </div>
                  </div>
                )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Step Controller (Fixed Bottom) */}
      {currentStep < 3 && (
        <StepController
          currentStep={currentStep}
          totalSteps={STEPS.length}
          onNext={handleNext}
          onBack={handleBack}
          isNextDisabled={isNextDisabled()}
          isBackDisabled={currentStep === 0}
          nextLabel={currentStep === 2 ? 'Finish' : 'Next'}
        />
      )}

      <Footer />
    </div>
  );
}

export default function PredictPage() {
  return (
    <GameProvider>
      <PredictGameContent />
    </GameProvider>
  );
}
