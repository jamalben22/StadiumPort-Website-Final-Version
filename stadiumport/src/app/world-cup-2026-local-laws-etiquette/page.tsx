import React from 'react';
import { Metadata } from 'next';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import LocalLawsClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Local Laws & Cultural Etiquette: World Cup 2026 Guide',
  description: 'Essential guide to local laws, customs, and etiquette in USA, Canada, and Mexico for World Cup 2026. Avoid fines and cultural faux pas.',
  keywords: [
    'World Cup 2026 local laws',
    'cultural etiquette USA Canada Mexico',
    'tipping culture North America',
    'drinking age World Cup 2026',
    'marijuana laws Canada World Cup',
    'Mexico public drinking laws',
    'smoking bans World Cup stadiums',
    'police interaction tips',
    'World Cup travel rules',
    'legal advice for fans'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-local-laws-etiquette',
  },
  openGraph: {
    title: 'Local Laws & Cultural Etiquette: World Cup 2026 Guide',
    description: 'Essential guide to local laws, customs, and etiquette in USA, Canada, and Mexico for World Cup 2026.',
    url: 'https://stadiumport.com/world-cup-2026-local-laws-etiquette',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/Local Laws & Cultural Etiquette.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Local Laws & Culture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Laws & Cultural Etiquette: World Cup 2026 Guide',
    description: 'Essential guide to local laws, customs, and etiquette in USA, Canada, and Mexico.',
    images: ['/images/safety-guide/Local Laws & Cultural Etiquette.webp'],
  },
};

export default function LocalLawsPage() {
  const articleSchema = generateArticleSchema(
    'local-laws-cultural-etiquette-world-cup-2026', 
    '/world-cup-2026-local-laws-etiquette'
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Safety Guide', item: '/world-cup-2026-safety-guide' },
    { name: 'Local Laws & Etiquette', item: '/world-cup-2026-local-laws-etiquette' }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "What is the legal drinking age in the host countries?",
      answer: "USA: 21. Canada: 18 or 19 (depending on province). Mexico: 18. Strict ID checks are common, especially in the US."
    },
    {
      question: "Is marijuana legal in World Cup host cities?",
      answer: "Canada: Legal nationwide. USA: Legal in some host states (e.g., WA, CA, NY) but illegal federally and in others (e.g., TX). Mexico: Decriminalized for personal use but sales are restricted; best to avoid."
    },
    {
      question: "Do I need to tip in restaurants?",
      answer: "USA: Yes, 18-22% is standard. Canada: Yes, 15-20%. Mexico: Yes, 10-15%. In the US, tipping is not optional; it is the server's primary wage."
    },
    {
      question: "Can I drink alcohol in public?",
      answer: "Generally NO in USA and Canada (except specific designated zones). In Mexico, it is technically illegal and can lead to fines or arrest, despite common misconceptions."
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
      <LocalLawsClientPage />
    </>
  );
}

