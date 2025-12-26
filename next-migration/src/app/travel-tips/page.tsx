import React from 'react';
import TravelTipsClientPage from './ClientPage';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'World Cup 2026 Travel Tips | The Ultimate Planning Hub',
  description: 'The definitive World Cup 2026 travel guide. Expert tips on budgets, booking timelines, itineraries, and safety for the first three-nation tournament.',
  keywords: ['World Cup 2026 travel tips', 'World Cup 2026 travel guide', 'FIFA World Cup 2026 travel', 'World Cup 2026 planning', 'World Cup 2026 fan guide'],
  path: '/travel-tips',
});

export default function TravelTipsPage() {
  return <TravelTipsClientPage />;
}
