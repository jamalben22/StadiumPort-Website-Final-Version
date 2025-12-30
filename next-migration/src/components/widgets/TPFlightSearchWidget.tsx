'use client';

import React, { useRef, useEffect, memo } from 'react';

export const TPFlightSearchWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Prevent multiple injections
    if (container.getAttribute('data-tp-loaded') === 'true') return;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?currency=usd&trs=468014&shmarker=679735&locale=en&stops=any&show_hotels=false&powered_by=false&border_radius=12&plain=false&color_button=%2301b47d&color_button_text=%23ffffff&promo_id=3414&campaign_id=111';
    script.charset = 'utf-8';
    
    container.appendChild(script);
    container.setAttribute('data-tp-loaded', 'true');
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div 
        ref={containerRef} 
        data-tp-loaded="false"
        className="w-full max-w-5xl flex justify-center items-start" 
      />
    </div>
  );
});

TPFlightSearchWidget.displayName = 'TPFlightSearchWidget';
