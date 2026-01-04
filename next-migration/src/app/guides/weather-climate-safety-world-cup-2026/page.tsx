import React from 'react';
import { Metadata } from 'next';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import WeatherClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Weather & Climate Safety: World Cup 2026 Survival Guide',
  description: 'Prepare for extreme heat, humidity, storms, and altitude in USA, Canada, and Mexico. Essential packing and safety tips for World Cup fans.',
  keywords: [
    'World Cup 2026 weather',
    'heat safety soccer fans',
    'Mexico City altitude sickness',
    'hurricane season travel tips',
    'Miami humidity World Cup',
    'Vancouver rain gear',
    'hydration tips for fans',
    'sun protection stadiums',
    'extreme weather safety',
    'what to pack World Cup 2026'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/guides/weather-climate-safety-world-cup-2026',
  },
  openGraph: {
    title: 'Weather & Climate Safety: World Cup 2026 Survival Guide',
    description: 'Prepare for extreme heat, humidity, storms, and altitude in USA, Canada, and Mexico.',
    url: 'https://stadiumport.com/guides/weather-climate-safety-world-cup-2026',
    siteName: 'StadiumPort',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/A_realistic_high-detail_photo_depicting_safe_transportation_in_a_World_Cup_2026.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Weather Safety',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weather & Climate Safety: World Cup 2026 Survival Guide',
    description: 'Prepare for extreme heat, humidity, storms, and altitude.',
    images: ['/images/safety-guide/A_realistic_high-detail_photo_depicting_safe_transportation_in_a_World_Cup_2026.webp'],
  },
};

export default function WeatherPage() {
  const articleSchema = generateArticleSchema(
    'weather-climate-safety-world-cup-2026', 
    '/guides/weather-climate-safety-world-cup-2026'
  );
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Safety Guide', item: '/world-cup-2026-safety-guide' },
    { name: 'Weather Safety', item: '/guides/weather-climate-safety-world-cup-2026' }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "Will it be very hot during the World Cup?",
      answer: "Yes. In June/July, cities like Dallas, Houston, Miami, and Monterrey can see temperatures exceed 35°C (95°F) with high humidity. Hydration is critical."
    },
    {
      question: "Is altitude sickness a risk?",
      answer: "Yes, specifically in Mexico City (2,240m) and Guadalajara (1,566m). It can cause shortness of breath and headaches. Acclimatize for a few days if possible."
    },
    {
      question: "What about hurricanes?",
      answer: "June starts the Atlantic hurricane season. Miami, Houston, and East Coast cities are potential targets. Monitor weather apps and have travel insurance."
    },
    {
      question: "Does it rain a lot in Vancouver?",
      answer: "Vancouver is known for rain, though summers are drier. Still, a light waterproof jacket is essential for games in the Pacific Northwest."
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
      <WeatherClientPage />
    </>
  );
}

