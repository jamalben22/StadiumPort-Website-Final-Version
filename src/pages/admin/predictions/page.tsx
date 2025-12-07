import React, { useState, useEffect } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { supabase } from '../../../lib/supabase';
import { Search, Lock, Download, ExternalLink, Eye, Printer, Filter, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import { GameProvider, useGame } from '../../../features/game/context/GameContext';
import { ResultDashboard } from '../../../features/game/components/ResultDashboard';
import { TEAMS } from '../../../features/game/lib/wc26-data';
import { GlassPanel } from '../../../features/game/components/ui/GlassPanel';
import { NeonButton } from '../../../features/game/components/ui/NeonButton';

// Component to render the dashboard with injected state
const AdminPredictionViewer = ({ prediction, onClose }: { prediction: any; onClose: () => void }) => {
  const { updateGroupStandings, setThirdPlacePicks, updateKnockoutPicks, setCurrentStep } = useGame();

  useEffect(() => {
    if (prediction && prediction.predictions) {
      const { groupStandings, thirdPlacePicks, knockoutPicks } = prediction.predictions;
      
      // Batch update state
      // We need to iterate because updateGroupStandings takes one group at a time
      Object.entries(groupStandings).forEach(([groupId, teams]) => {
        updateGroupStandings(groupId, teams as string[]);
      });
      
      if (thirdPlacePicks) setThirdPlacePicks(thirdPlacePicks);
      if (knockoutPicks) updateKnockoutPicks(knockoutPicks);
      
      setCurrentStep(4); // Force to result step
    }
  }, [prediction]);

  const championId = prediction.predictions?.knockoutPicks?.['F-01'];
  const champion = TEAMS.find(t => t.id === championId) || TEAMS[0];
  
  // Determine Runner Up
  const knockoutPicks = prediction.predictions?.knockoutPicks || {};
  const finalist1 = knockoutPicks['SF-01'];
  const finalist2 = knockoutPicks['SF-02'];
  const runnerUpId = finalist1 === championId ? finalist2 : finalist1;
  const runnerUp = TEAMS.find(t => t.id === runnerUpId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-2xl">
        <GlassPanel className="min-h-full">
          <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-slate-900/80 backdrop-blur-md z-10">
            <div>
              <h2 className="text-2xl font-bold font-display text-white">Prediction Details</h2>
              <p className="text-slate-400 text-sm font-mono mt-1">{prediction.unique_id}</p>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Close</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6">
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
    </div>
  );
};

export const AdminPredictionsPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [predictions, setPredictions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrediction, setSelectedPrediction] = useState<any>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'stadiumport2026admin') {
      setIsAuthenticated(true);
      fetchPredictions();
    } else {
      alert('Invalid password');
    }
  };

  const fetchPredictions = async () => {
    if (!supabase) return;
    setLoading(true);
    
    let query = supabase
      .from('predictions')
      .select('*')
      .order('created_at', { ascending: sortOrder === 'asc' });

    if (searchQuery) {
      query = query.or(`unique_id.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%,name.ilike.%${searchQuery}%`);
    }

    const { data, error } = await query;
    
    if (error) {
      console.error('Error fetching predictions:', error);
    } else {
      setPredictions(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchPredictions();
    }
  }, [searchQuery, sortOrder]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-[#020617] text-white">
        <Header />
        <main className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
          {/* Ambient Background Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <GlassPanel className="w-full max-w-md p-8 relative z-10 border-white/5">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-white/5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <Lock className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center mb-2 font-display tracking-tight">Admin Access</h1>
            <p className="text-center text-slate-400 mb-8">Enter your secure credentials to continue</p>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
                <div className="relative group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/20 text-white placeholder-slate-600 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                    placeholder="Enter admin password"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 -z-10 blur-sm" />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold tracking-wide transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                UNLOCK DASHBOARD
              </button>
            </form>
          </GlassPanel>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-white selection:bg-emerald-500/30">
      <Header />
      <main className="flex-grow p-4 md:p-8 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Predictions
            </h1>
            <p className="text-slate-400 mt-2 text-lg">Manage and monitor user submissions</p>
          </div>
          
          <div className="flex items-center gap-3">
             <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 font-mono text-sm">
                Total: {predictions.length}
             </div>
             <button 
                onClick={fetchPredictions}
                className="p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors text-slate-300 hover:text-white"
                title="Refresh Data"
              >
                <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="mb-8 space-y-4">
          <GlassPanel className="p-2 flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by ID, Name, Email..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder-slate-500 focus:bg-white/10 focus:border-emerald-500/30 focus:outline-none transition-all"
              />
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="px-4 py-2 flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-slate-300 hover:text-white min-w-[140px] justify-center"
              >
                <span className="text-sm font-medium">Date</span>
                {sortOrder === 'desc' ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              </button>
              <button 
                onClick={() => window.print()}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-slate-300 hover:text-white"
                title="Print View"
              >
                <Printer className="w-5 h-5" />
              </button>
            </div>
          </GlassPanel>
        </div>

        {/* Data Table */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 space-y-4">
            <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
            <p className="text-slate-400 animate-pulse">Loading predictions...</p>
          </div>
        ) : (
          <GlassPanel className="overflow-hidden border-white/5">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-5 text-xs uppercase tracking-wider font-bold text-slate-400">Unique ID</th>
                    <th className="p-5 text-xs uppercase tracking-wider font-bold text-slate-400">User Details</th>
                    <th className="p-5 text-xs uppercase tracking-wider font-bold text-slate-400">Location</th>
                    <th className="p-5 text-xs uppercase tracking-wider font-bold text-slate-400">Submitted</th>
                    <th className="p-5 text-xs uppercase tracking-wider font-bold text-slate-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {predictions.map((p) => (
                    <tr key={p.id} className="group hover:bg-white/5 transition-colors duration-200">
                      <td className="p-5">
                        <span className="font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded text-sm group-hover:bg-emerald-500/20 transition-colors">
                          {p.unique_id}
                        </span>
                      </td>
                      <td className="p-5">
                        <div className="font-bold text-white text-lg">{p.name}</div>
                        <div className="text-sm text-slate-500 flex items-center gap-1">
                           {p.email}
                        </div>
                      </td>
                      <td className="p-5">
                        <div className="flex items-center gap-2">
                           <span className="text-slate-300">{p.country}</span>
                        </div>
                      </td>
                      <td className="p-5">
                        <span className="text-sm text-slate-400">
                          {new Date(p.created_at).toLocaleDateString(undefined, {
                             year: 'numeric',
                             month: 'short',
                             day: 'numeric'
                          })}
                        </span>
                        <div className="text-xs text-slate-600 mt-0.5">
                           {new Date(p.created_at).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </td>
                      <td className="p-5 text-right">
                        <button
                          onClick={() => setSelectedPrediction(p)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-lg hover:bg-emerald-600 hover:text-white border border-white/10 hover:border-emerald-500 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-emerald-900/20"
                        >
                          <Eye className="w-4 h-4" /> 
                          <span>View</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {predictions.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-16 text-center text-slate-500">
                        <div className="flex flex-col items-center gap-4">
                           <div className="p-4 bg-white/5 rounded-full">
                              <Search className="w-8 h-8 opacity-20" />
                           </div>
                           <p>No predictions found matching your criteria.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Footer (Placeholder for now as logic wasn't in original) */}
            <div className="p-4 border-t border-white/5 bg-white/5 flex justify-between items-center text-sm text-slate-500">
               <span>Showing {predictions.length} results</span>
               <div className="flex gap-2">
                  <button disabled className="px-3 py-1 rounded hover:bg-white/10 disabled:opacity-50">Previous</button>
                  <button disabled className="px-3 py-1 rounded hover:bg-white/10 disabled:opacity-50">Next</button>
               </div>
            </div>
          </GlassPanel>
        )}
      </main>

      {selectedPrediction && (
        <GameProvider>
          <AdminPredictionViewer 
            prediction={selectedPrediction} 
            onClose={() => setSelectedPrediction(null)} 
          />
        </GameProvider>
      )}

      <Footer />
    </div>
  );
};

export default AdminPredictionsPage;
