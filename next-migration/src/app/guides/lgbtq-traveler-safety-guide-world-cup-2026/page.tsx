import React from 'react';
import { Metadata } from 'next';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import LGBTQClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'LGBTQ+ Traveler Safety Guide: World Cup 2026',
  description: 'Comprehensive safety guide for LGBTQ+ fans attending World Cup 2026 in USA, Canada, and Mexico. Legal rights, safe neighborhoods, and nightlife.',
  keywords: [
    'LGBTQ travel safety World Cup 2026',
    'gay friendly host cities',
    'transgender travel USA Canada Mexico',
    'LGBTQ rights North America',
    'queer friendly nightlife World Cup',
    'safety for gay travelers Mexico',
    'TSA transgender rules',
    'inclusive stadiums World Cup'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/guides/lgbtq-traveler-safety-guide-world-cup-2026',
  },
  openGraph: {
    title: 'LGBTQ+ Traveler Safety Guide: World Cup 2026',
    description: 'Comprehensive safety guide for LGBTQ+ fans attending World Cup 2026 in USA, Canada, and Mexico.',
    url: 'https://stadiumport.com/guides/lgbtq-traveler-safety-guide-world-cup-2026',
    siteName: 'StadiumPort',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/A_realistic_high-detail_photo_depicting_safe_transportation_in_a_World_Cup_2026.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 LGBTQ Safety',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LGBTQ+ Traveler Safety Guide: World Cup 2026',
    description: 'Safety guide for LGBTQ+ fans in USA, Canada, and Mexico.',
    images: ['/images/safety-guide/A_realistic_high-detail_photo_depicting_safe_transportation_in_a_World_Cup_2026.webp'],
  },
};

export default function LGBTQPage() {
  const articleSchema = generateArticleSchema(
    'lgbtq-traveler-safety-guide-world-cup-2026', 
    '/guides/lgbtq-traveler-safety-guide-world-cup-2026'
  );
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Safety Guide', item: '/world-cup-2026-safety-guide' },
    { name: 'LGBTQ+ Safety', item: '/guides/lgbtq-traveler-safety-guide-world-cup-2026' }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "Is it safe to be openly LGBTQ+ in host cities?",
      answer: "Generally, yes. Major host cities in all three countries (e.g., Toronto, NYC, San Francisco, Mexico City) have large, vibrant LGBTQ+ communities. However, caution is advised in rural areas or more conservative states/regions."
    },
    {
      question: "Are there specific laws against LGBTQ+ people?",
      answer: "No. Same-sex sexual activity is legal in all three countries. Same-sex marriage is legal nationwide in the USA, Canada, and Mexico (in all states). Anti-discrimination laws exist but vary in scope."
    },
    {
      question: "What about public displays of affection (PDA)?",
      answer: "PDA is widely accepted in Canada and major US cities. In Mexico, while legal, it can sometimes attract unwanted attention in conservative areas. Use discretion based on your surroundings."
    },
    {
      question: "Any tips for transgender travelers at borders?",
      answer: "Ensure your travel documents match your presentation if possible, or carry a physician's letter. TSA (USA) has specific screening protocols; you can request a private screening."
    }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LGBTQClientPage />
    </>
  );
}

