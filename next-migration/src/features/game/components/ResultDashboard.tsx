import React, { useMemo, useRef, useCallback, useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { TEAMS } from '../lib/wc26-data';
import { ShareCard } from './ShareCard';
import { BracketSummary } from './BracketSummary';
import { RulesCard } from './RulesCard';
import { toPng } from 'html-to-image';
import { Download, Share2, Instagram, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface ResultDashboardProps {
  champion?: any;
  runnerUp?: any;
  userName?: string;
  userEmail?: string;
  userCountry?: string;
  uniqueId?: string;
  disableSEO?: boolean;
}

export const ResultDashboard = ({ 
  champion: propChampion, 
  runnerUp: propRunnerUp,
  userName = 'You',
  uniqueId
}: ResultDashboardProps) => {
  const { knockoutPicks } = useGame();
  const cardRef = useRef<HTMLDivElement>(null);
  const [showCopyToast, setShowCopyToast] = useState(false);

  useEffect(() => {
    if (showCopyToast) {
      const timer = setTimeout(() => setShowCopyToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showCopyToast]);

  const champion = useMemo(() => {
    if (propChampion) return propChampion;
    const championId = knockoutPicks['F-01'];
    return TEAMS.find(t => t.id === championId);
  }, [propChampion, knockoutPicks]);

  const runnerUp = useMemo(() => {
    if (propRunnerUp) return propRunnerUp;
    const championId = knockoutPicks['F-01'];
    const sf1WinnerId = knockoutPicks['SF-01'];
    const sf2WinnerId = knockoutPicks['SF-02'];
    const runnerUpId = sf1WinnerId === championId ? sf2WinnerId : sf1WinnerId;
    return TEAMS.find(t => t.id === runnerUpId);
  }, [propRunnerUp, knockoutPicks, propChampion]);

  const handleShare = useCallback(async () => {
    const shareUrl = typeof window !== 'undefined' && uniqueId
      ? `${window.location.origin}/world-cup-2026-prediction-game/share/${uniqueId}`
      : (typeof window !== 'undefined' ? window.location.href : '');
      
    const shareData = {
      title: 'My World Cup 2026 Prediction',
      text: `I predicted ${champion?.name} to win the World Cup 2026! Check out my full bracket on Stadiumport.`,
      url: shareUrl,
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShowCopyToast(true);
      } catch (err) {
        console.error('Clipboard error:', err);
      }
    }
  }, [champion, userName]);

  const handleSocialShare = useCallback((platform: 'twitter' | 'whatsapp' | 'instagram') => {
    const shareUrl = typeof window !== 'undefined' && uniqueId
      ? `${window.location.origin}/world-cup-2026-prediction-game/share/${uniqueId}`
      : (typeof window !== 'undefined' ? window.location.href : '');
      
    const encodedUrl = encodeURIComponent(shareUrl);
    const text = encodeURIComponent(`I predicted ${champion?.name} to win the World Cup 2026! Check out my full bracket on Stadiumport.`);
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`, '_blank');
    } else if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${text}%20${encodedUrl}`, '_blank');
    } else if (platform === 'instagram') {
      // Instagram doesn't have a direct share URL, so we copy link
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl);
        setShowCopyToast(true);
      }
    }
  }, [champion]);

  const handleDownload = useCallback(async () => {
    if (cardRef.current === null) return;
    
    try {
      const dataUrl = await toPng(cardRef.current, { 
        cacheBust: true,
        width: 360,
        height: 640,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left'
        }
      });
      const link = document.createElement('a');
      link.download = `world-cup-2026-prediction-${userName.toLowerCase().replace(/\s+/g, '-')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download failed:', err);
    }
  }, [userName]);
  
  if (!champion) {
    return <div className="p-8 text-center text-slate-900">No champion selected yet.</div>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-24 pt-8 flex flex-col gap-8">
      
      {/* Top Actions: Share Buttons */}
      <div className="flex justify-center mb-2">
        <div className="flex items-center gap-3 p-1.5 bg-white rounded-full border border-black/10 shadow-sm">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-black/5 text-slate-900 border border-black/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/10 transition-all hover:scale-105"
          >
            <Share2 className="w-3.5 h-3.5" />
            Share Link
          </button>
          <div className="w-px h-4 bg-black/10 mx-1" />
          <button
            onClick={() => handleSocialShare('twitter')}
            className="p-2 text-slate-900 hover:bg-black/5 rounded-full transition-all"
            title="Share on X"
          >
            <XIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleSocialShare('whatsapp')}
            className="p-2 text-slate-900 hover:bg-black/5 rounded-full transition-all"
            title="Share on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleSocialShare('instagram')}
            className="p-2 text-slate-900 hover:bg-black/5 rounded-full transition-all"
            title="Share on Instagram"
          >
            <Instagram className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Confirmation Header */}
      <div className="text-center space-y-3 mb-4">
        <h1 className="text-4xl md:text-6xl font-['Teko'] font-bold uppercase text-slate-900 drop-shadow-sm tracking-tight">
          Official Entry Confirmed
        </h1>
        <p className="text-slate-900 font-['Rajdhani'] font-bold text-lg md:text-xl uppercase tracking-wider max-w-2xl mx-auto leading-tight">
          Official World Cup 2026 predictions Confirmed, Good luck competing for official prizes!
        </p>
      </div>

      {/* Predicted Champion Summary */}
      <div className="text-center -mt-4 mb-2">
        <p className="text-slate-900 font-['Rajdhani'] font-bold text-sm uppercase tracking-[0.3em] mb-1">
          {userName === 'You' ? 'YOUR' : `${userName.toUpperCase()}'S`} PREDICTED CHAMPION
        </p>
        <h2 className="text-6xl md:text-8xl font-['Teko'] font-black uppercase text-slate-900 leading-none">
          {champion.name}
        </h2>
        <p className="text-[#01b47d] font-['Rajdhani'] font-bold text-lg md:text-xl uppercase tracking-widest mt-1">
          World Cup 2026 Winner
        </p>
      </div>

      {/* Share Section */}
      <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-['Teko'] font-bold uppercase text-slate-900 tracking-widest">
              SHARE YOUR PREDICTION CARD
            </h3>
            <div className="w-16 h-0.5 bg-[#c0a062] mx-auto mt-1 opacity-60"></div>
          </div>

          <div className="shadow-2xl rounded-2xl overflow-hidden ring-1 ring-black/10">
            <ShareCard 
              ref={cardRef}
              champion={champion} 
              runnerUp={runnerUp} 
              userName={userName}
              uniqueId={uniqueId}
            />
          </div>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-black/5 text-slate-900 border border-black/10 px-8 py-3 rounded-full font-['Rajdhani'] font-bold uppercase tracking-widest hover:bg-black/10 transition-all hover:scale-105 active:scale-95 shadow-lg group"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download My Card
          </button>
      </div>

      {/* Complete Bracket Summary */}
      <div className="mt-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-['Teko'] font-bold uppercase text-slate-900 tracking-tight">
            Complete Prediction Summary
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mt-2"></div>
        </div>
        <BracketSummary />
      </div>

      {/* Official Rules */}
      <div className="mt-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-['Teko'] font-bold uppercase text-slate-900 tracking-tight">
            Official Tournament Rules
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mt-2"></div>
        </div>
        <div className="bg-white/5 border border-black/10 rounded-[32px] overflow-hidden shadow-2xl">
          <RulesCard variant="full" />
        </div>
      </div>

      {/* Apple-style Toast Notification */}
      <AnimatePresence>
        {showCopyToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-8 left-1/2 z-[100] pointer-events-none"
          >
            <div className="bg-white backdrop-blur-xl border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] px-6 py-3 rounded-2xl flex items-center gap-3 ring-1 ring-black/5">
              <div className="w-6 h-6 bg-black/5 border border-black/10 rounded-full flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-[#01b47d] stroke-[3]" />
              </div>
              <span className="text-slate-900 font-['Rajdhani'] font-bold uppercase tracking-widest text-sm">
                Link Copied to Clipboard
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ResultDashboard;


