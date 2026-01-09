import type { Metadata } from 'next';
import NightlifeSafetyClientPage from './ClientPage';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Nightlife & After-Hours Safety: World Cup 2026 Guide',
  description: 'Expert guide to World Cup 2026 nightlife safety. Enjoy the atmosphere responsibly with tips on safe transport, alcohol awareness, and venue security in USA, Canada & Mexico.',
  keywords: [
    'World Cup 2026 nightlife safety',
    'safe nightlife World Cup',
    'after-hours safety guide',
    'nightlife security World Cup',
    'World Cup party safety',
    'safe celebration World Cup',
    'nightlife tips 2026',
    'drinking safety World Cup',
    'safe transportation World Cup',
    'World Cup 2026 solo safety'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-nightlife-safety',
  },
  openGraph: {
    title: 'Nightlife & After-Hours Safety: World Cup 2026 Guide',
    description: 'Expert guide to World Cup 2026 nightlife safety. Enjoy the atmosphere responsibly with tips on safe transport, alcohol awareness, and venue security in USA, Canada & Mexico.',
    url: 'https://stadiumport.com/world-cup-2026-nightlife-safety',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/article mode/A_realistic_high-detail_photo_of_a_solo_traveler_walking_confidently_through_a_world_cup_2026.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Nightlife Safety',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nightlife & After-Hours Safety: World Cup 2026 Guide',
    description: 'Expert guide to World Cup 2026 nightlife safety. Enjoy the atmosphere responsibly with tips on safe transport, alcohol awareness, and venue security.',
    images: ['/images/safety-guide/article mode/A_realistic_high-detail_photo_of_a_solo_traveler_walking_confidently_through_a_world_cup_2026.webp'],
  },
};

export default function NightlifeSafetyPage() {
  const articleSchema = generateArticleSchema('nightlife-after-hours-safety-world-cup-2026', '/world-cup-2026-nightlife-safety');
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Nightlife Safety', item: '/world-cup-2026-nightlife-safety' }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "Is it safe to walk at night in World Cup cities?",
      answer: "It depends heavily on the city and neighborhood. In general, stick to main, well-lit thoroughfares with other people. Avoid shortcuts through parks or empty streets. In cities like Mexico City or certain parts of US cities, rideshares are safer than walking late at night."
    },
    {
      question: "Can I drink on the street?",
      answer: "In most US and Canadian cities, NO. You will be fined. Exceptions exist (e.g., Las Vegas, New Orleans, or specific 'entertainment zones'). In Mexico, it is also technically illegal though enforcement varies; best to avoid it to prevent police interactions."
    },
    {
      question: "What is the legal drinking age?",
      answer: "USA: 21. Canada: 18 (Alberta, Manitoba, Quebec) or 19 (rest of country). Mexico: 18. IDs are checked strictly in North America."
    },
    {
      question: "Are nightclubs safe for solo women?",
      answer: "Generally yes, especially in major cities, but standard precautions apply. Watch your drink, stay in public areas, and have a safe ride home planned. Joining a group or tour is often more fun and safer."
    }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NightlifeSafetyClientPage />
    </>
  );
}

