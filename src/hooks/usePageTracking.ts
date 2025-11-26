import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// TODO: Add your Google Analytics (GA4) Measurement ID here
// const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Construct the full URL or path
    const pagePath = location.pathname + location.search;

    // 2. Log the page view (placeholder for GA4)
    console.log(`Page View: ${pagePath}`);

    // 3. Google Analytics Integration (Future)
    // if (window.gtag) {
    //   window.gtag('config', GA_MEASUREMENT_ID, {
    //     page_path: pagePath,
    //   });
    // }
  }, [location]);
};
