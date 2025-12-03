import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../base/Button';
import { Link } from 'react-router-dom';

export function MobileAffiliateBar() {
  const [isVisible, setIsVisible] = useState(false);

  // Show after a small delay to avoid clashing with initial load animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Don't render on desktop (handled by CSS, but good to have logic too if needed)
  // We'll use CSS md:hidden for simplicity and SSR compatibility

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div className="relative flex items-center justify-between gap-3 p-4 pr-3 rounded-2xl bg-white/90 dark:bg-navy-900/90 backdrop-blur-md border border-white/20 dark:border-navy-700 shadow-xl shadow-[#008f63]/10">
            
            {/* Close Button - positioned absolute top-right of the card */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-slate-200 dark:bg-navy-700 rounded-full shadow-md text-slate-500 dark:text-slate-300 hover:bg-slate-300 transition-colors"
              aria-label="Close offer"
            >
              <i className="ri-close-line text-xs font-bold"></i>
            </button>

            {/* Icon & Text */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/30 flex items-center justify-center flex-shrink-0">
                <i className="ri-hotel-bed-line text-[#01b47d] dark:text-[#01b47d] text-lg"></i>
              </div>
              <div className="flex flex-col">
                <span className="font-space font-bold text-slate-900 dark:text-white text-sm leading-tight">
                  Planning for WC26?
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Save up to 30% on hotels
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/deals">
              <Button 
                size="sm" 
                variant="primary" 
                className="whitespace-nowrap bg-[#01b47d] hover:bg-[#008f63] text-xs px-3 py-2 h-auto"
              >
                Check Deals
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
