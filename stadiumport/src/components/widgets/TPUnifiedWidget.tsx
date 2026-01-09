'use client';

import React, { useRef, useEffect, memo } from 'react';

export const TPUnifiedWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.getAttribute('data-tp-loaded') === 'true' || container.hasChildNodes()) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?trs=468014&shmarker=679735&locale=en&curr=USD&powered_by=false&border_radius=12&plain=false&color_button=%2301b47d&color_button_text=%23FAFAFA&color_border=%23C8C8C8ff&promo_id=4132&campaign_id=121';
    script.charset = 'utf-8';
    script.onerror = () => {
      console.error('Failed to load TravelPay widget script');
    };
    container.appendChild(script);
    container.setAttribute('data-tp-loaded', 'true');
  }, []);

  return (
    <div
      ref={containerRef}
      data-tp-loaded="false"
      className="mt-10 rounded-[20px] bg-white p-4 sm:p-6 shadow-md ring-1 ring-[#01b47d]/30 mx-auto flex justify-center"
    />
  );
});

TPUnifiedWidget.displayName = 'TPUnifiedWidget';
