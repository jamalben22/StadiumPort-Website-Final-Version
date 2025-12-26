import React from 'react';
import { Share2, Download, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ActionIslandProps {
  onShare?: () => void;
  onSave?: () => void;
  onChallenge?: () => void;
  isGenerating?: boolean;
}

export const ActionIsland: React.FC<ActionIslandProps> = ({ 
  onShare, 
  onSave, 
  onChallenge,
  isGenerating = false 
}) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4">
      <motion.div 
        className="flex items-center justify-between bg-[#1a1a1a]/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-2 pl-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] ring-1 ring-white/5"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        
        {/* Share to Instagram (Primary) */}
        <button 
          onClick={onShare}
          className="flex-1 flex items-center justify-center gap-2.5 bg-white text-black font-bold py-3.5 px-6 rounded-[24px] hover:scale-[1.02] transition-all active:scale-[0.97] shadow-lg shadow-white/10 group"
        >
          <Share2 className="w-4 h-4 transition-transform group-hover:rotate-12" />
          <span className="text-sm font-['Rajdhani'] font-bold tracking-wide uppercase">Share</span>
        </button>

        <div className="w-px h-6 bg-white/10 mx-1.5" />

        {/* Save Image (Secondary) */}
        <button 
          onClick={onSave}
          disabled={isGenerating}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all active:scale-90 border border-white/5 disabled:opacity-50"
          title="Save Image"
        >
          {isGenerating ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Download className="w-5 h-5" />
          )}
        </button>

        <div className="w-1.5" />

        {/* Challenge Friend (WhatsApp) */}
        <button 
          onClick={onChallenge}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all active:scale-90 shadow-[0_0_15px_rgba(37,211,102,0.3)]"
          title="Challenge on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </button>

      </motion.div>
    </div>
  );
};
