'use client';

import { useEffect } from 'react';
import { isAdSenseEnabled } from '@/lib/ads';

interface AdSenseAdProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: 'true' | 'false';
  style?: React.CSSProperties;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const AdSenseAd = ({
  slot,
  format = 'auto',
  responsive = 'true',
  style = { display: 'block' },
  className = '',
}: AdSenseAdProps) => {
  useEffect(() => {
    if (isAdSenseEnabled) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, []);

  if (!isAdSenseEnabled) {
    return null;
  }

  return (
    <div className={`adsense-container my-4 ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-5399794848914855"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};
