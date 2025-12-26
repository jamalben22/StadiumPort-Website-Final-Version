'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void;
  }
}

export function AnalyticsTracker({ pageId }: { pageId: string }) {
  useEffect(() => {
    // Performance monitoring for Core Web Vitals
    const measurePerformance = () => {
      if (typeof PerformanceObserver === 'undefined') return;

      // Largest Contentful Paint (LCP)
      try {
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            console.log('LCP:', entry.startTime);
            if (window.gtag) {
              window.gtag('event', 'LCP', {
                value: Math.round(entry.startTime),
                metric_id: `lcp_${pageId}`
              });
            }
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Ignore if not supported
      }
      
      // First Input Delay (FID)
      try {
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            const firstInput = entry as PerformanceEventTiming;
            console.log('FID:', firstInput.processingStart - firstInput.startTime);
            if (window.gtag) {
              window.gtag('event', 'FID', {
                value: Math.round(firstInput.processingStart - firstInput.startTime),
                metric_id: `fid_${pageId}`
              });
            }
          }
        }).observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // Ignore
      }
      
      // Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            const layoutShift = entry as any; // CLS types are tricky
            if (!layoutShift.hadRecentInput) {
              clsValue += layoutShift.value;
              console.log('CLS:', clsValue);
              if (window.gtag) {
                window.gtag('event', 'CLS', {
                  value: Math.round(clsValue * 1000) / 1000,
                  metric_id: `cls_${pageId}`
                });
              }
            }
          }
        }).observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // Ignore
      }
    };
    
    measurePerformance();
    
    // Time on page
    let timeOnPage = 0;
    const timer = setInterval(() => {
      timeOnPage += 1;
      if (timeOnPage % 10 === 0 && window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: `time_on_page_${pageId}`,
          value: timeOnPage
        });
      }
    }, 1000);
    
    // Scroll depth
    let maxScroll = 0;
    const trackScroll = () => {
      const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      const clamped = Math.max(0, Math.min(100, pct));
      if (clamped > maxScroll) {
        maxScroll = clamped;
        if (window.gtag && maxScroll % 25 === 0) {
          window.gtag('event', 'scroll', {
            percent_scrolled: maxScroll,
            page: pageId
          });
        }
      }
    };
    
    window.addEventListener('scroll', trackScroll);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', trackScroll);
    };
  }, [pageId]);

  return null;
}
