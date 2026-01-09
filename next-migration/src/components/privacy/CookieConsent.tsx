'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Clarity from '@microsoft/clarity';
import { CONSENT_STORAGE_KEY } from '@/components/analytics/MicrosoftClarity';
import { Cookie, X } from 'lucide-react';

/**
 * CookieConsent Component
 * 
 * An enterprise-grade, Apple-style cookie consent banner.
 * Features:
 * - Minimalist design with backdrop blur
 * - Smooth animations via Framer Motion
 * - Integrated with Microsoft Clarity Consent API
 * - Persistent storage of user choice
 * - Responsive layout (floating card on desktop, bottom sheet on mobile)
 */
export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if consent has already been given
    const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!storedConsent) {
      // Small delay for better UX (don't slam the user immediately)
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    // 1. Save to localStorage
    const consentState = {
      ad: accepted,
      analytics: accepted,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentState));

    // 2. Notify Clarity immediately
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      Clarity.consentV2({
        ad_Storage: accepted ? 'granted' : 'denied',
        analytics_Storage: accepted ? 'granted' : 'denied'
      });
    }

    // 3. Close banner
    setIsVisible(false);
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Apple-style spring/ease
          className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-6 md:max-w-md"
        >
          <div className="relative overflow-hidden rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-2xl p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white">
                    Cookie Preferences
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    We use cookies to enhance your browsing experience and analyze site traffic. Your privacy is important to us.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => handleConsent(true)}
                  className="flex-1 px-4 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                >
                  Allow All
                </button>
                <button
                  onClick={() => handleConsent(false)}
                  className="flex-1 px-4 py-2.5 bg-transparent border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
