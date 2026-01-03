import React from 'react';
import { Metadata } from 'next';
import TravelTipsClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Travel Tips: Complete Fan Planning Guide',
  description: 'Essential travel tips for World Cup 2026. Expert advice on visas, tickets, accommodation, transport & budgets for USA, Canada & Mexico.',
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
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-travel-tips',
  },
  openGraph: {
    title: 'World Cup 2026 Travel Tips: Complete Fan Planning Guide',
    description: 'Essential travel tips for World Cup 2026. Expert advice on visas, tickets, accommodation, transport & budgets for USA, Canada & Mexico.',
    url: 'https://stadiumport.com/world-cup-2026-travel-tips',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/travel-tips/World%20Cup%202026%20Travel%20Tips%20Cover.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Travel Tips',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Travel Tips: Complete Fan Planning Guide',
    description: 'Essential travel tips for World Cup 2026. Expert advice on visas, tickets, accommodation, transport & budgets for USA, Canada & Mexico.',
    images: ['/images/travel-tips/World%20Cup%202026%20Travel%20Tips%20Cover.webp'],
  },
};

export default function TravelTipsPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Travel Tips', item: '/world-cup-2026-travel-tips' }
  ]);
  
  const articleSchema = generateArticleSchema('world-cup-2026-travel-tips', '/world-cup-2026-travel-tips');

  return (
    <>
      <JsonLd schema={breadcrumbJsonLd} />
      <JsonLd schema={articleSchema} />
      <TravelTipsClientPage />
    </>
  );
}
