import React from 'react';
import SafetyGuideClientPage from './ClientPage';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'World Cup 2026 Safety Guide | Security & Emergency Resources',
  description: 'The definitive safety guide for World Cup 2026. Expert advice on scams, stadium security, medical preparedness, and emergency contacts for the US, Canada, and Mexico.',
  keywords: ['World Cup 2026 safety guide', 'World Cup 2026 safety tips', 'FIFA World Cup 2026 safety', 'World Cup 2026 travel safety', 'World Cup 2026 fan safety', 'World Cup 2026 emergency contacts', 'World Cup 2026 solo travel safety', 'World Cup 2026 border crossing', 'World Cup 2026 scams', 'World Cup 2026 stadium security'],
  path: '/world-cup-2026-safety-guide',
});

export default function SafetyGuidePage() {
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
        "name": "Safety Guide",
        "item": "https://stadiumport.com/world-cup-2026-safety-guide"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SafetyGuideClientPage />
    </>
  );
}
