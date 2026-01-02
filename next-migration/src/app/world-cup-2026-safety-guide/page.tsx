import React from 'react';
import { Metadata } from 'next';
import SafetyGuideClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'World Cup 2026 Safety Guide: Essential Tips for Fans',
  description: 'Stay safe at World Cup 2026. Critical advice on stadium security, emergency contacts, solo travel & scam prevention for USA, Canada & Mexico.',
  keywords: [
    'World Cup 2026 safety guide',
    'World Cup 2026 safety tips',
    'FIFA World Cup 2026 safety',
    'World Cup 2026 travel safety',
    'World Cup 2026 fan safety',
    'World Cup 2026 emergency contacts',
    'World Cup 2026 solo travel safety',
    'World Cup 2026 border crossing',
    'World Cup 2026 scams',
    'World Cup 2026 stadium security'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-safety-guide',
  },
  openGraph: {
    title: 'World Cup 2026 Safety Guide: Essential Tips for Fans',
    description: 'Stay safe at World Cup 2026. Critical advice on stadium security, emergency contacts, solo travel & scam prevention for USA, Canada & Mexico.',
    url: 'https://stadiumport.com/world-cup-2026-safety-guide',
    siteName: 'StadiumPort',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/travel-tips/World%20Cup%202026%20Safety%20Guide%20Illustration.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Safety Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Safety Guide: Essential Tips for Fans',
    description: 'Stay safe at World Cup 2026. Critical advice on stadium security, emergency contacts, solo travel & scam prevention for USA, Canada & Mexico.',
    images: ['/images/travel-tips/World%20Cup%202026%20Safety%20Guide%20Illustration.webp'],
  },
};

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
