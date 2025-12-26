import { Metric } from 'web-vitals';

export function reportWebVitals(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // In production, send to analytics
  if (process.env.NODE_ENV === 'production') {
    const body = JSON.stringify(metric);
    
    // Example: Send to Vercel Analytics or custom endpoint
    // navigator.sendBeacon('/api/vitals', body);
    
    // Log for now if no endpoint configured
    // console.log('[WebVitals]', metric.name, metric.value);
  }
}