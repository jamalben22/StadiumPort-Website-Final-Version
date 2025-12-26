'use client';

import React, { useRef, useEffect, memo } from 'react';

export const TPGuideWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Prevent multiple injections
    if (container.getAttribute('data-tp-loaded') === 'true') return;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?currency=usd&trs=468014&shmarker=679735&powered_by=true&locale=en&destination=77&lowest_price=&highest_price=&min_lines=8&color_button=%2301b47d&promo_id=5850&campaign_id=47';
    script.charset = 'utf-8';
    
    container.appendChild(script);
    container.setAttribute('data-tp-loaded', 'true');
  }, []);

  return (
    <div className="w-full flex justify-center py-6">
      <div 
        ref={containerRef} 
        data-tp-loaded="false"
        className="w-full max-w-5xl min-h-[400px] flex justify-center items-start" 
      />
    </div>
  );
});

TPGuideWidget.displayName = 'TPGuideWidget';
