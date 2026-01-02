'use client';

import React, { useEffect, useMemo, useState, Suspense } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { GameProvider, useGame } from '../../../../features/game/context/GameContext';
import { ResultDashboard } from '../../../../features/game/components/ResultDashboard';
import { GameHeader } from '../../../../features/game/components/GameHeader';
import { TEAMS } from '../../../../features/game/lib/wc26-data';
import { supabase } from '../../../../lib/supabase';
import { GameLayout } from '../../../../features/game/components/GameLayout';
import { Home, Share2 } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { motion } from 'framer-motion';
import Link from 'next/link';

const STORAGE_KEY = 'sp_wc26_predictions';

function usePredictionByCode(code?: string) {
  const [prediction, setPrediction] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!code) return;
      setLoading(true);
      setError('');
      setPrediction(null);

      // 1) Try Supabase if configured
      if (supabase) {
        try {
          const { data, error: sbError } = await supabase
            .from('predictions')
            .select('*')
            .eq('unique_id', code)
            .single();

          if (!sbError && data) {
            setPrediction(data);
            setLoading(false);
            return;
          }
        } catch (e) {
          console.error('Supabase fetch error:', e);
        }
      }

      // 2) Fallback to localStorage (client-side persistence)
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const map = raw ? JSON.parse(raw) : {};
        const local = map[code];
        if (local) {
          setPrediction(local);
        } else {
          setError('Prediction not found');
        }
      } catch {
        setError('Prediction not found');
      }
      setLoading(false);
    };
    fetchData();
  }, [code]);

  return { prediction, loading, error };
}

function ResultsView({ prediction, code }: { prediction: any; code: string }) {
  const { updateGroupStandings, setThirdPlacePicks, updateKnockoutPicks, setCurrentStep } = useGame();
  
  useEffect(() => {
    if (!prediction || !prediction.predictions) return;
    const { groupStandings, thirdPlacePicks, knockoutPicks } = prediction.predictions;
    
    if (groupStandings) {
      Object.entries(groupStandings).forEach(([groupId, teams]: any) => {
        updateGroupStandings(groupId, teams as string[]);
      });
    }
    if (thirdPlacePicks) setThirdPlacePicks(thirdPlacePicks);
    if (knockoutPicks) updateKnockoutPicks(knockoutPicks);
    setCurrentStep(5); // Step 5 is the results step in STEPS array
  }, [prediction, updateGroupStandings, setThirdPlacePicks, updateKnockoutPicks, setCurrentStep]);

  const champion = useMemo(() => {
    const champId = prediction?.predictions?.knockoutPicks?.['F-01'];
    return TEAMS.find(t => t.id === champId) || TEAMS[0]!;
  }, [prediction]);

  const runnerUp = useMemo(() => {
    const picks = prediction?.predictions?.knockoutPicks || {};
    const championId = picks['F-01'];
    const finalist1 = picks['SF-01'];
    const finalist2 = picks['SF-02'];
    const ruId = finalist1 === championId ? finalist2 : finalist1;
    return TEAMS.find(t => t.id === ruId);
  }, [prediction]);

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Prediction Game', item: '/world-cup-2026-prediction-game' },
    { name: 'Entry', item: `/world-cup-2026-prediction-game/entry/${code}` }
  ]);

  return (
    <GameLayout allowScroll={true}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <GameHeader />
      
      {/* Breadcrumbs */}
      <div className="w-full max-w-5xl mx-auto px-4 pt-24 pb-0">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-sm font-medium text-slate-900/60 mb-4 tracking-wide uppercase"
        >
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span className="text-slate-900/40">/</span>
          <Link href="/world-cup-2026-prediction-game" className="hover:text-slate-900 transition-colors">Prediction Game</Link>
          <span className="text-slate-900/40">/</span>
          <span className="text-slate-900">Entry</span>
        </motion.div>
      </div>

      <ResultDashboard 
        champion={champion}
      runnerUp={runnerUp}
      userName={prediction.name || 'Participant'}
      userEmail={prediction.email || ''}
      userCountry={prediction.country || ''}
      uniqueId={prediction.unique_id || code}
      disableSEO={true}
    />
    </GameLayout>
  );
}

function PredictResultsContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [code, setCode] = useState<string | undefined>(undefined);

  useEffect(() => {
    const urlCode = (params?.uniqueId as string) || searchParams.get('code');
    if (urlCode) {
      setCode(urlCode);
    } else {
      const lastId = localStorage.getItem('sp_wc26_last_id') || '';
      setCode(lastId);
    }
  }, [params?.uniqueId, searchParams]);

  const { prediction, loading, error } = usePredictionByCode(code || undefined);

  const handlePlayAgain = () => router.push('/world-cup-2026-prediction-game');
  const handleExit = () => router.push('/');
  
  const handleShareNative = async () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'My World Cup 2026 Prediction',
          text: 'Check out my World Cup 2026 bracket!',
          url: shareUrl,
        });
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
      } catch {}
    }
  };

  return (
    <div className="relative z-10 w-full h-full flex flex-col">
      <GameHeader onExit={handleExit} />
      <main className="relative z-10 flex-1 p-4 md:p-8 pt-24">
        <div className="max-w-7xl mx-auto">
          {loading && (
            <div className="flex items-center justify-center py-16">
              <div className="w-16 h-16 border-4 border-slate-200 dark:border-white/10 border-t-[#FBBF24] rounded-full animate-spin" />
            </div>
          )}
          {!loading && error && (
            <div className="max-w-xl mx-auto bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-200 rounded-xl p-6 text-center">
              <p className="font-medium">{error}</p>
              <p className="mt-2 text-sm">Double-check your prediction code or try again later.</p>
            </div>
          )}
          {!loading && prediction && (
            <GameProvider>
              <ResultsView prediction={prediction} code={code || ''} />

              <div className="mt-8 flex justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/6 border border-white/12 ring-1 ring-white/8 backdrop-blur-xl shadow-[0_8px_30px_rgba(255,255,255,0.06)]">
                  <button 
                    type="button" 
                    onClick={handlePlayAgain}
                    className="px-3.5 py-2 rounded-full bg-[#01b47d] hover:bg-emerald-500 text-white text-[12px] font-inter font-medium uppercase tracking-[0.12em] shadow-[0_0_30px_rgba(1,180,125,0.25)]"
                  >
                    Play Again
                  </button>
                  <button 
                    type="button" 
                    onClick={handleExit}
                    className="px-3.5 py-2 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/15 transition-colors flex items-center gap-2 text-[12px] font-inter font-medium uppercase tracking-[0.12em]"
                  >
                    <Home className="w-4 h-4" />
                    <span>Return to Home</span>
                  </button>
                </div>
              </div>
            </GameProvider>
          )}
        </div>
      </main>
      <div className="relative z-20 px-6 pb-6 text-center">
        <span className="text-[10px] text-white/30 font-inter tracking-[0.3em]">
          © 2026 Stadiumport • <a href="/legal/privacy" className="underline hover:no-underline">Privacy</a>
        </span>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <GameLayout allowScroll={true}>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-12 h-12 border-4 border-white/10 border-t-[#FBBF24] rounded-full animate-spin" />
        </div>
      }>
        <PredictResultsContent />
      </Suspense>
    </GameLayout>
  );
}
