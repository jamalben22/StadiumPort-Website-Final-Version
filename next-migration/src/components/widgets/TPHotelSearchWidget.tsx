'use client';

import React, { useRef, useEffect, memo } from 'react';

export const TPHotelSearchWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Prevent multiple injections
    if (container.getAttribute('data-tp-loaded') === 'true') return;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?trs=468014&shmarker=679735&locale=en&powered_by=false&primary_override=%23FAFAFA&color_button=%2301b47d&color_icons=%2301b47d&dark=%23262626&color_border=%23A8A8A8ff&color_focused=%2301b47d&border_radius=12&no_labels=&plain=false&promo_id=8303&campaign_id=104';
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

TPHotelSearchWidget.displayName = 'TPHotelSearchWidget';
