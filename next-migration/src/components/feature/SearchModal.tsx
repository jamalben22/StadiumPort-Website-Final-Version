'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, MapPin, Calendar, Trophy, ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SearchResult {
  id: string;
  type: 'city' | 'stadium' | 'group' | 'page';
  title: string;
  description: string;
  path: string;
  icon?: any;
}

const SEARCH_DATA: SearchResult[] = [
  // Pages
  { id: 'p1', type: 'page', title: 'World Cup Groups', description: 'View all groups, teams, and standings', path: '/world-cup-2026-groups', icon: Trophy },
  { id: 'p2', type: 'page', title: 'Host Cities', description: 'Explore all 16 host cities', path: '/world-cup-2026-host-cities-guide', icon: MapPin },
  { id: 'p3', type: 'page', title: 'Stadiums', description: 'Guide to all World Cup venues', path: '/world-cup-2026-stadiums', icon: MapPin },
  { id: 'p4', type: 'page', title: 'Draw Travel Hub', description: 'Logistics and travel planning', path: '/world-cup-2026-draw-travel-hub', icon: Calendar },
  { id: 'p5', type: 'page', title: 'Prediction Game', description: 'Predict scores and win prizes', path: '/world-cup-2026-prediction-game', icon: Trophy },
  
  // Groups
  { id: 'g1', type: 'group', title: 'Group A', description: 'Mexico City, Guadalajara, Monterrey', path: '/world-cup-2026-groups/group-a', icon: Trophy },
  { id: 'g2', type: 'group', title: 'Group B', description: 'Vancouver, Seattle, San Francisco, Los Angeles', path: '/world-cup-2026-groups/group-b', icon: Trophy },
  { id: 'g3', type: 'group', title: 'Group C', description: 'Boston, New York/NJ, Philadelphia, Toronto', path: '/world-cup-2026-groups/group-c', icon: Trophy },
  { id: 'g4', type: 'group', title: 'Group D', description: 'Arizona, Houston, Dallas', path: '/world-cup-2026-groups/group-d', icon: Trophy },
  { id: 'g5', type: 'group', title: 'Group E', description: 'Kansas City, Houston, Dallas', path: '/world-cup-2026-groups/group-e', icon: Trophy },
  { id: 'g6', type: 'group', title: 'Group F', description: 'Kansas City, Dallas, Houston', path: '/world-cup-2026-groups/group-f', icon: Trophy },
  { id: 'g7', type: 'group', title: 'Group G', description: 'Los Angeles, Seattle, Vancouver', path: '/world-cup-2026-groups/group-g', icon: Trophy },
  { id: 'g8', type: 'group', title: 'Group H', description: 'Atlanta, Miami, Houston', path: '/world-cup-2026-groups/group-h', icon: Trophy },
  { id: 'g9', type: 'group', title: 'Group I', description: 'New York/NJ, Boston, Philadelphia', path: '/world-cup-2026-groups/group-i', icon: Trophy },
  { id: 'g10', type: 'group', title: 'Group J', description: 'San Francisco, Seattle, Vancouver', path: '/world-cup-2026-groups/group-j', icon: Trophy },
  { id: 'g11', type: 'group', title: 'Group K', description: 'Houston, Dallas, Kansas City', path: '/world-cup-2026-groups/group-k', icon: Trophy },
  { id: 'g12', type: 'group', title: 'Group L', description: 'Atlanta, Miami, Toronto', path: '/world-cup-2026-groups/group-l', icon: Trophy },

  // Cities (Verified Routes)
  { id: 'c1', type: 'city', title: 'New York / New Jersey', description: 'MetLife Stadium - Final Host', path: '/world-cup-2026-host-cities-guide/new-york-city-guide', icon: MapPin },
  { id: 'c2', type: 'city', title: 'Los Angeles', description: 'SoFi Stadium - US Opener', path: '/world-cup-2026-host-cities-guide/los-angeles-city-guide', icon: MapPin },
  { id: 'c3', type: 'city', title: 'Mexico City', description: 'Estadio Azteca - Opening Match', path: '/world-cup-2026-host-cities-guide/mexico-city-city-guide', icon: MapPin },
  { id: 'c4', type: 'city', title: 'Toronto', description: 'BMO Field - Canada Opener', path: '/world-cup-2026-host-cities-guide/toronto-city-guide', icon: MapPin },
  { id: 'c5', type: 'city', title: 'Vancouver', description: 'BC Place', path: '/world-cup-2026-host-cities-guide/vancouver-city-guide', icon: MapPin },
  { id: 'c6', type: 'city', title: 'Miami', description: 'Hard Rock Stadium', path: '/world-cup-2026-host-cities-guide/miami-city-guide', icon: MapPin },
  { id: 'c7', type: 'city', title: 'Dallas', description: 'AT&T Stadium', path: '/world-cup-2026-host-cities-guide/dallas-city-guide', icon: MapPin },
  { id: 'c8', type: 'city', title: 'Atlanta', description: 'Mercedes-Benz Stadium', path: '/world-cup-2026-host-cities-guide/atlanta-city-guide', icon: MapPin },
  { id: 'c9', type: 'city', title: 'Boston', description: 'Gillette Stadium', path: '/world-cup-2026-host-cities-guide/boston-city-guide', icon: MapPin },
  { id: 'c10', type: 'city', title: 'Guadalajara', description: 'Estadio Akron', path: '/world-cup-2026-host-cities-guide/guadalajara-city-guide', icon: MapPin },
  { id: 'c11', type: 'city', title: 'Houston', description: 'NRG Stadium', path: '/world-cup-2026-host-cities-guide/houston-city-guide', icon: MapPin },
  { id: 'c12', type: 'city', title: 'Kansas City', description: 'Arrowhead Stadium', path: '/world-cup-2026-host-cities-guide/kansas-city-city-guide', icon: MapPin },
  { id: 'c13', type: 'city', title: 'Monterrey', description: 'Estadio BBVA', path: '/world-cup-2026-host-cities-guide/monterrey-city-guide', icon: MapPin },
  { id: 'c14', type: 'city', title: 'Philadelphia', description: 'Lincoln Financial Field', path: '/world-cup-2026-host-cities-guide/philadelphia-city-guide', icon: MapPin },
  { id: 'c15', type: 'city', title: 'San Francisco', description: "Levi's Stadium", path: '/world-cup-2026-host-cities-guide/san-francisco-city-guide', icon: MapPin },
  { id: 'c16', type: 'city', title: 'Seattle', description: 'Lumen Field', path: '/world-cup-2026-host-cities-guide/seattle-city-guide', icon: MapPin },

  // Stadiums (Verified Routes)
  { id: 's1', type: 'stadium', title: 'MetLife Stadium', description: 'New York/New Jersey', path: '/world-cup-2026-stadiums/metlife-stadium-guide', icon: MapPin },
  { id: 's2', type: 'stadium', title: 'SoFi Stadium', description: 'Los Angeles', path: '/world-cup-2026-stadiums/sofi-stadium-guide', icon: MapPin },
  { id: 's3', type: 'stadium', title: 'Estadio Azteca', description: 'Mexico City', path: '/world-cup-2026-stadiums/estadio-azteca-guide', icon: MapPin },
  { id: 's4', type: 'stadium', title: 'BMO Field', description: 'Toronto', path: '/world-cup-2026-stadiums/bmo-field-guide', icon: MapPin },
  { id: 's5', type: 'stadium', title: 'BC Place', description: 'Vancouver', path: '/world-cup-2026-stadiums/bc-place-guide', icon: MapPin },
  { id: 's6', type: 'stadium', title: 'Hard Rock Stadium', description: 'Miami', path: '/world-cup-2026-stadiums/hard-rock-stadium-guide', icon: MapPin },
  { id: 's7', type: 'stadium', title: 'AT&T Stadium', description: 'Dallas', path: '/world-cup-2026-stadiums/att-stadium-guide', icon: MapPin },
  { id: 's8', type: 'stadium', title: 'Mercedes-Benz Stadium', description: 'Atlanta', path: '/world-cup-2026-stadiums/mercedes-benz-stadium-guide', icon: MapPin },
  { id: 's9', type: 'stadium', title: 'Gillette Stadium', description: 'Boston', path: '/world-cup-2026-stadiums/gillette-stadium-guide', icon: MapPin },
  { id: 's10', type: 'stadium', title: 'Estadio Akron', description: 'Guadalajara', path: '/world-cup-2026-stadiums/estadio-akron-guide', icon: MapPin },
  { id: 's11', type: 'stadium', title: 'NRG Stadium', description: 'Houston', path: '/world-cup-2026-stadiums/nrg-stadium-guide', icon: MapPin },
  { id: 's12', type: 'stadium', title: 'Arrowhead Stadium', description: 'Kansas City', path: '/world-cup-2026-stadiums/arrowhead-stadium-guide', icon: MapPin },
  { id: 's13', type: 'stadium', title: 'Estadio BBVA', description: 'Monterrey', path: '/world-cup-2026-stadiums/estadio-bbva-guide', icon: MapPin },
  { id: 's14', type: 'stadium', title: 'Lincoln Financial Field', description: 'Philadelphia', path: '/world-cup-2026-stadiums/lincoln-financial-field-guide', icon: MapPin },
  { id: 's15', type: 'stadium', title: "Levi's Stadium", description: 'San Francisco', path: '/world-cup-2026-stadiums/levis-stadium-guide', icon: MapPin },
  { id: 's16', type: 'stadium', title: 'Lumen Field', description: 'Seattle', path: '/world-cup-2026-stadiums/lumen-field-guide', icon: MapPin },

  // Features
  { id: 'f1', type: 'page', title: 'Predictor Game', description: 'Predict match results', path: '/world-cup-2026-prediction-game', icon: Trophy },
  { id: 'f2', type: 'page', title: 'Draw Hub', description: 'Travel guide based on draw', path: '/world-cup-2026-draw-travel-hub', icon: MapPin },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSelect = useCallback(
    (result: SearchResult) => {
      onClose();
      router.push(result.path);
    },
    [onClose, router],
  );

  // Reset when opening
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      // Small delay to allow animation to start before focusing
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Search Logic
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const filtered = SEARCH_DATA.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) || 
      item.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (results.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + (results.length || 1)) % (results.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSelect, isOpen, onClose, results, selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[20px] z-[100]"
            onClick={onClose}
            role="button"
            aria-label="Close search"
            tabIndex={-1}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.22, 1, 0.36, 1] // Apple-style ease
            }}
            className="fixed top-4 left-4 right-4 bottom-auto md:top-[15%] md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[90%] md:max-w-2xl bg-[#F5F5F7]/95 dark:bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-[12px] shadow-2xl z-[101] overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Search"
          >
            {/* Search Input */}
            <div className="relative border-b border-black/5 dark:border-white/10">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" strokeWidth={2.5} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search groups, cities, or guides..."
                className="w-full h-[60px] bg-transparent pl-14 pr-5 text-[18px] text-slate-900 dark:text-white placeholder:text-slate-400/80 focus:outline-none caret-emerald-500 font-normal"
                autoComplete="off"
              />
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto">
              {results.length > 0 ? (
                <div className="py-2">
                  {results.map((result, index) => (
                    <motion.button
                      key={result.id}
                      onClick={() => handleSelect(result)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full px-4 py-3 flex items-center gap-4 text-left transition-colors ${
                        index === selectedIndex 
                          ? 'bg-emerald-500 text-white' 
                          : 'text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`p-2 rounded-lg ${
                        index === selectedIndex 
                          ? 'bg-white/20 text-white' 
                          : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                      }`}>
                        {result.icon ? <result.icon className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-base font-medium ${
                          index === selectedIndex ? 'text-white' : 'text-slate-900 dark:text-white'
                        }`}>
                          {result.title}
                        </div>
                        <div className={`text-sm truncate ${
                          index === selectedIndex ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'
                        }`}>
                          {result.description}
                        </div>
                      </div>
                      {index === selectedIndex && (
                        <motion.div
                          layoutId="enter-icon"
                          className="text-white/80"
                        >
                          <span className="text-xs font-medium">Press Enter</span>
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              ) : query ? (
                <div className="py-12 text-center text-slate-500 dark:text-slate-400">
                  <p>No results found for "{query}"</p>
                </div>
              ) : (
                <div className="p-4">
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">Quick Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                     <QuickLink 
                       title="Prediction Game" 
                       path="/world-cup-2026-prediction-game" 
                       icon={Trophy} 
                       onClick={() => handleSelect({ id: 'ql1', type: 'page', title: 'Prediction Game', description: '', path: '/world-cup-2026-prediction-game' })} 
                     />
                     <QuickLink 
                       title="Host Cities" 
                       path="/world-cup-2026-host-cities" 
                       icon={MapPin} 
                       onClick={() => handleSelect({ id: 'ql2', type: 'page', title: 'Host Cities', description: '', path: '/world-cup-2026-host-cities' })} 
                     />
                  </div>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="px-4 py-3 bg-slate-50 dark:bg-white/5 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-slate-400">
               <div className="flex gap-4">
                 <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 font-sans">↑↓</kbd> to navigate</span>
                 <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 font-sans">↵</kbd> to select</span>
                 <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 font-sans">esc</kbd> to close</span>
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function QuickLink({ title, path, icon: Icon, onClick }: { title: string, path: string, icon: any, onClick: () => void }) {
  return (
    <motion.button 
      onClick={onClick} 
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-left group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-2 bg-white dark:bg-white/10 rounded-md shadow-sm group-hover:scale-110 transition-transform">
        <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
      </div>
      <div>
        <div className="text-sm font-medium text-slate-900 dark:text-white">{title}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400">Quick access</div>
      </div>
    </motion.button>
  );
}
