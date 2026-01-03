'use client';

import { useEffect, useRef } from 'react';
import { isEzoicEnabled } from '@/lib/ads';

// Define the window interface to include Ezoic
declare global {
  interface Window {
    ezstandalone?: {
      cmd: any[];
      showAds: (...args: number[]) => void;
      hasAd?: (placeholderId: number) => boolean;
      define?: (placeholderIds: number[]) => void;
      enable?: () => void;
      display?: () => void;
      refresh?: () => void;
      destroy?: () => void;
    };
  }
}

interface EzoicAdProps {
  placementId?: number;
  placementIds?: number[];
  className?: string;
}

export const EzoicAd = ({ placementId, placementIds, className = '' }: EzoicAdProps) => {
  // Use a ref to track if we've already initialized ads for this component
  // to prevent duplicate calls, although Ezoic is generally safe with them.
  const initialized = useRef(false);

  // Feature flag check
  if (!isEzoicEnabled) return null;

  // Combine single ID and array of IDs into one normalized array
  const allPlacementIds = [
    ...(placementId ? [placementId] : []),
    ...(placementIds || [])
  ];

  useEffect(() => {
    // Safety check: ensure we have placement IDs
    if (allPlacementIds.length === 0) return;

    // Safety check: ensure window exists (client-side)
    if (typeof window === 'undefined') return;

    // Mark as initialized to prevent double-firing in strict mode or re-renders
    if (initialized.current) return;
    initialized.current = true;

    // Push to Ezoic command queue
    window.ezstandalone = window.ezstandalone || ({} as any);
    window.ezstandalone.cmd = window.ezstandalone.cmd || [];

    window.ezstandalone.cmd.push(() => {
      // Ensure ezstandalone is available
      if (window.ezstandalone && typeof window.ezstandalone.showAds === 'function') {
        // We use spread operator to pass all IDs as individual arguments
        window.ezstandalone.showAds(...allPlacementIds);
      }
    });
  }, [allPlacementIds]); // Re-run if placement IDs change (unlikely but safe)

  if (allPlacementIds.length === 0) return null;

  return (
    <>
      {allPlacementIds.map((id) => (
        <div 
          key={id} 
          id={`ezoic-pub-ad-placeholder-${id}`}
          className={className}
          // Intentionally empty and unstyled as per Ezoic requirements
        />
      ))}
    </>
  );
};
