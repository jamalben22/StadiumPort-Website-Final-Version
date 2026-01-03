declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void;
  }
}

export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackWorldCupJourney = (stage: 'group_view' | 'city_view' | 'ticket_click' | 'booking_initiated', detail: string) => {
  trackEvent('journey_step', 'world_cup_planning', `${stage}:${detail}`);
};
