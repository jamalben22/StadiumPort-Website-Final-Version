'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { isEzoicEnabled } from '@/lib/ads';

/**
 * Hook to handle Ezoic ads during client-side navigation and dynamic content changes.
 * 
 * Responsibilities:
 * 1. Refresh ads on route changes (SPA navigation)
 * 2. Provide utilities for dynamic content (load more, infinite scroll)
 * 3. Ensure safe cleanup of placeholders
 */
export const useEzoicDynamicAds = () => {
  const pathname = usePathname();
  const lastPathname = useRef(pathname);

  // 1. Handle Route Changes (SPA Navigation)
  useEffect(() => {
    if (!isEzoicEnabled) return;

    // Only run if pathname has actually changed
    if (pathname === lastPathname.current) return;
    lastPathname.current = pathname;

    if (typeof window !== 'undefined') {
      window.ezstandalone = window.ezstandalone || ({} as any);
      window.ezstandalone!.cmd = window.ezstandalone!.cmd || [];

      window.ezstandalone!.cmd.push(() => {
        // destroyAll() is aggressive but ensures a clean slate for the new page.
        // Ezoic recommends calling showAds() on navigation, which usually implies
        // we should just let the new page's components register themselves.
        // However, specifically for "refreshing" ads or handling strict SPA transitions:
        
        // Option A: Just showAds() - if new components mount, they call showAds themselves via EzoicAd.
        // But we might want to refresh persistent slots (like sidebar) if they don't unmount.
        
        // According to requirements: "On every pathname change: ezstandalone.showAds();"
        // This forces a refresh of any existing slots and checks for new ones.
        if (window.ezstandalone?.showAds) {
           window.ezstandalone.showAds();
        }
      });
    }
  }, [pathname]);

  // 2. Dynamic Content Utilities
  
  /**
   * Call this when new content with ad placeholders is injected (e.g., "Load More")
   * @param placeholderIds Array of placement IDs to show
   */
  const showDynamicAds = (placeholderIds: number[]) => {
    if (!isEzoicEnabled) return;
    if (typeof window === 'undefined' || placeholderIds.length === 0) return;

    window.ezstandalone = window.ezstandalone || ({} as any);
    window.ezstandalone!.cmd = window.ezstandalone!.cmd || [];

    window.ezstandalone!.cmd.push(() => {
      if (window.ezstandalone?.showAds) {
        window.ezstandalone.showAds(...placeholderIds);
      }
    });
  };

  /**
   * Call this BEFORE removing or replacing content that contains ad placeholders.
   * This allows Ezoic to clean up and potentially reuse these IDs later.
   * @param placeholderIds Array of placement IDs to destroy
   */
  const destroyDynamicAds = (placeholderIds: number[]) => {
    if (!isEzoicEnabled) return;
    if (typeof window === 'undefined' || placeholderIds.length === 0) return;

    window.ezstandalone = window.ezstandalone || ({} as any);
    window.ezstandalone!.cmd = window.ezstandalone!.cmd || [];

    window.ezstandalone!.cmd.push(() => {
      if (window.ezstandalone?.destroyPlaceholders) {
        window.ezstandalone.destroyPlaceholders(...placeholderIds);
      }
    });
  };

  /**
   * Helper for infinite scroll reuse pattern:
   * 1. Destroy IDs (cleanup previous usage)
   * 2. Show IDs (render new ads)
   * @param placeholderIds Array of placement IDs to reuse
   */
  const refreshDynamicAds = (placeholderIds: number[]) => {
    if (!isEzoicEnabled) return;
    if (typeof window === 'undefined' || placeholderIds.length === 0) return;

    window.ezstandalone = window.ezstandalone || ({} as any);
    window.ezstandalone!.cmd = window.ezstandalone!.cmd || [];

    window.ezstandalone!.cmd.push(() => {
      if (window.ezstandalone?.destroyPlaceholders && window.ezstandalone?.showAds) {
        window.ezstandalone.destroyPlaceholders(...placeholderIds);
        window.ezstandalone.showAds(...placeholderIds);
      }
    });
  };

  return {
    showDynamicAds,
    destroyDynamicAds,
    refreshDynamicAds
  };
};
