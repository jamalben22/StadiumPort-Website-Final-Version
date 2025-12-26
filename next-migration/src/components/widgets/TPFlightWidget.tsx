'use client';

import React, { useRef, useEffect, memo } from 'react';

export const TPFlightWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Prevent multiple injections
    if (container.getAttribute('data-tp-loaded') === 'true') return;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?trs=468014&shmarker=679735&locale=en&curr=USD&powered_by=true&border_radius=12&plain=true&color_button=%2301b47d&color_button_text=%23ffffff&color_border=%2301b47d&promo_id=4132&campaign_id=121';
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

TPFlightWidget.displayName = 'TPFlightWidget';
