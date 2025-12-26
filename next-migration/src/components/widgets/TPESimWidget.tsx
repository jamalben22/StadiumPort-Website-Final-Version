'use client';

import React, { useRef, useEffect, memo } from 'react';

export const TPESimWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Prevent multiple injections
    if (container.getAttribute('data-tp-loaded') === 'true') return;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?trs=468014&shmarker=679735&locale=en&country=United%20States&powered_by=true&color_button=%2301b47d&color_focused=%2301b47d&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23C4C4C4&border_radius=12&plain=false&no_labels=true&promo_id=8588&campaign_id=541';
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

TPESimWidget.displayName = 'TPESimWidget';
