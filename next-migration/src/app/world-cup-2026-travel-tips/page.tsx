import React from 'react';
import TravelTipsClientPage from './ClientPage';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'World Cup 2026 Travel Tips: The Ultimate Guide (USA, Canada, Mexico)',
  description: 'The #1 World Cup 2026 travel guide. Complete advice on visas, tickets, accommodation, transport, and host cities for USA, Canada, and Mexico. Plan your trip now.',
  keywords: [
    'World Cup 2026 travel tips',
    'World Cup 2026 travel guide',
    'FIFA World Cup 2026 travel',
    'World Cup 2026 planning',
    'World Cup 2026 fan guide',
    'World Cup 2026 visa requirements',
    'World Cup 2026 host cities',
    'World Cup 2026 transportation',
    'World Cup 2026 accommodation',
    'World Cup 2026 tickets'
  ],
  path: '/world-cup-2026-travel-tips',
});

export default function TravelTipsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://stadiumport.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Travel Tips",
        "item": "https://stadiumport.com/world-cup-2026-travel-tips"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <TravelTipsClientPage />
    </>
  );
}
