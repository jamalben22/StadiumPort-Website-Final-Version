'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

const CLARITY_PROJECT_ID = 'uyrqcqbv87';
export const CONSENT_STORAGE_KEY = 'cookie-consent';

/**
 * Microsoft Clarity Integration
 * 
 * Implements enterprise-grade setup for Microsoft Clarity with:
 * - Production-only execution
 * - GDPR consent handling via Clarity Consent API
 * - Performance optimization (client-side only)
 */
export function MicrosoftClarity() {
  useEffect(() => {
    // 1. Environment Check: Only run in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // 2. Initialize Clarity
    if (CLARITY_PROJECT_ID) {
      Clarity.init(CLARITY_PROJECT_ID);
      
      // 3. GDPR Consent Handling
      const consentState = getConsentState();
      
      if (consentState) {
        // Apply existing consent decision
        Clarity.consentV2({
          ad_Storage: consentState.ad ? 'granted' : 'denied',
          analytics_Storage: consentState.analytics ? 'granted' : 'denied'
        });
      }
    }
  }, []);

  return null;
}

/**
 * Helper to retrieve consent state from common storage locations
 */
function getConsentState(): { ad: boolean; analytics: boolean } | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (storedConsent) {
      const parsed = JSON.parse(storedConsent);
      return {
        ad: parsed.ad || false,
        analytics: parsed.analytics || false
      };
    }
  } catch (e) {
    // Ignore parsing errors
  }

  return null;
}
