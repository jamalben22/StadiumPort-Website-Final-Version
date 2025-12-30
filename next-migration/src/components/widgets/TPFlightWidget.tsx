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
    script.src = 'https://tpwgts.com/content?trs=468014&shmarker=679735&locale=en&curr=USD&powered_by=false&border_radius=12&plain=false&color_button=%2301b47d&color_button_text=%23FAFAFA&color_border=%23C8C8C8ff&promo_id=4132&campaign_id=121';
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

TPFlightWidget.displayName = 'TPFlightWidget';
