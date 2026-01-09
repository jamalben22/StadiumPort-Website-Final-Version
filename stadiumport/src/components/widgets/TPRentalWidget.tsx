'use client';

import React, { useRef, useEffect, memo } from 'react';

export const TPRentalWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Prevent multiple injections
    if (container.getAttribute('data-tp-loaded') === 'true') return;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?trs=468014&shmarker=679735&locale=en&powered_by=false&border_radius=12&plain=false&show_logo=true&color_background=%23FAFAFA&color_button=%2301b47d&color_text=%23000000&color_input_text=%23000000&color_button_text=%23ffffff&promo_id=4480&campaign_id=10';
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

TPRentalWidget.displayName = 'TPRentalWidget';
