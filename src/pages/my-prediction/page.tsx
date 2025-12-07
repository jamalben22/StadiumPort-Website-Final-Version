import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { supabase } from '../../lib/supabase';
import { Search, Trophy, AlertCircle, Share2, Download, Copy, CheckCircle2 } from 'lucide-react';
import { GameProvider, useGame } from '../../features/game/context/GameContext';
import { ResultDashboard } from '../../features/game/components/ResultDashboard';
import { TEAMS } from '../../features/game/lib/wc26-data';
import { GlassPanel } from '../../features/game/components/ui/GlassPanel';
import { NeonButton } from '../../features/game/components/ui/NeonButton';

const PredictionViewer = ({ prediction }: { prediction: any }) => {
  const { updateGroupStandings, setThirdPlacePicks, updateKnockoutPicks, setCurrentStep } = useGame();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prediction && prediction.predictions) {
      const { groupStandings, thirdPlacePicks, knockoutPicks } = prediction.predictions;
      
      Object.entries(groupStandings).forEach(([groupId, teams]) => {
        updateGroupStandings(groupId, teams as string[]);
      });
      
      if (thirdPlacePicks) setThirdPlacePicks(thirdPlacePicks);
      if (knockoutPicks) updateKnockoutPicks(knockoutPicks);
      
      setCurrentStep(4);
    }
  }, [prediction]);

  const championId = prediction.predictions?.knockoutPicks?.['F-01'];
  const champion = TEAMS.find(t => t.id === championId) || TEAMS[0];
  
  const knockoutPicks = prediction.predictions?.knockoutPicks || {};
  const finalist1 = knockoutPicks['SF-01'];
  const finalist2 = knockoutPicks['SF-02'];
  const runnerUpId = finalist1 === championId ? finalist2 : finalist1;
  const runnerUp = TEAMS.find(t => t.id === runnerUpId);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <GlassPanel className="overflow-hidden border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50">
        <div className="p-6 border-b border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-[#FBBF24] to-yellow-600 rounded-xl shadow-lg shadow-yellow-500/20">
              <Trophy className="text-white w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                Prediction by <span className="text-[#FBBF24]">{prediction.name}</span>
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                  ID: {prediction.unique_id}
                </span>
                <span className="text-slate-400 text-sm">•</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">{prediction.country}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={handleShare}
              className="group flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg border border-slate-200 dark:border-white/10 transition-all text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="text-sm font-medium">{copied ? 'Copied Link' : 'Share Link'}</span>
            </button>
          </div>
        </div>
        
        <div className="p-6 md:p-8 bg-gradient-to-b from-slate-50/50 to-white/80 dark:from-slate-900/50 dark:to-slate-900/80">
          <ResultDashboard 
            champion={champion}
            runnerUp={runnerUp}
            userName={prediction.name}
            userEmail={prediction.email}
            userCountry={prediction.country}
            uniqueId={prediction.unique_id}
          />
        </div>
      </GlassPanel>
    </div>
  );
};

export const MyPredictionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchId, setSearchId] = useState(searchParams.get('id') || '');
  const [prediction, setPrediction] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPrediction = async (id: string) => {
    if (!id) return;

    console.log(`🔍 Looking up prediction for ID: ${id}`);

    if (!supabase) {
      console.error('❌ Supabase client is NOT initialized in frontend! Check VITE_SUPABASE_URL.');
      setError('System error: Database connection failed.');
      return;
    }
    
    setLoading(true);
    setError('');
    setPrediction(null);

    const { data, error } = await supabase
      .from('predictions')
      .select('*')
      .eq('unique_id', id)
      .single();

    if (error) {
      console.error('❌ Supabase lookup error:', error);
      if (error.code === 'PGRST116') {
        setError('Prediction ID not found. Please double-check the ID.');
      } else {
        setError(`Error retrieving prediction: ${error.message} (${error.code})`);
      }
    } else {
      console.log('✅ Prediction found:', data);
      setPrediction(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      setSearchId(id);
      fetchPrediction(id);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchId.trim()) {
      setSearchParams({ id: searchId.trim() });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white selection:bg-[#FBBF24]/30">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-start p-4 md:p-8 relative overflow-hidden">
        
        {/* Background Ambient Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none -z-10 opacity-50" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#FBBF24]/10 dark:bg-[#FBBF24]/5 rounded-full blur-[120px] pointer-events-none -z-10 opacity-30" />

        <div className={`w-full max-w-7xl mx-auto transition-all duration-700 ${prediction ? 'mt-8' : 'mt-20 md:mt-32'}`}>
          
          {/* Search Section */}
          <div className={`max-w-2xl mx-auto text-center mb-12 transition-all duration-500 ${prediction ? 'scale-90 opacity-80' : 'scale-100'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display tracking-tight text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-slate-200 dark:to-slate-400">
              Find Your Prediction
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Enter your unique ID to view your bracket, check your status, and share your World Cup 2026 journey with friends.
            </p>
            
            <form onSubmit={handleSearch} className="relative group max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value.toUpperCase())}
                  placeholder="ENTER ID (e.g. WC26-ABC123)"
                  className="w-full pl-6 pr-14 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-black/40 backdrop-blur-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-[#FBBF24]/50 focus:ring-2 focus:ring-[#FBBF24]/20 focus:outline-none transition-all font-mono uppercase text-lg tracking-wider shadow-xl"
                />
                <button
                  type="submit"
                  className="absolute right-2 p-2.5 bg-[#FBBF24] text-black rounded-xl hover:bg-[#F59E0B] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-200 rounded-xl flex items-center justify-center gap-3 backdrop-blur-sm animate-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400" />
                <span className="font-medium">{error}</span>
              </div>
            )}
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-slate-200 dark:border-white/10 border-t-[#FBBF24] rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#FBBF24]/20 rounded-full blur-lg animate-pulse" />
                </div>
              </div>
              <p className="mt-4 text-slate-500 dark:text-slate-400 font-medium tracking-wide animate-pulse">SEARCHING ARCHIVES...</p>
            </div>
          )}

          {prediction && (
            <div className="relative z-10">
              <GameProvider>
                <PredictionViewer prediction={prediction} />
              </GameProvider>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyPredictionPage;
