import type { Metadata } from 'next';
import FoodSafetyClientPage from './ClientPage';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Food & Water Safety: Dining Without Distress',
  description: 'Expert guide to World Cup 2026 food & water safety. Learn where to eat, water potability in USA/Canada/Mexico, and how to avoid traveler\'s diarrhea.',
  keywords: [
    'World Cup 2026 food safety',
    'safe eating World Cup',
    'water safety World Cup',
    'dining guide 2026',
    'street food safety World Cup',
    'traveler\'s diarrhea prevention',
    'safe restaurants World Cup',
    'Mexico food safety',
    'tap water safety Mexico World Cup'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-food-dining-safety',
  },
  openGraph: {
    title: 'Food & Water Safety: Dining Without Distress',
    description: 'Expert guide to World Cup 2026 food & water safety. Learn where to eat, water potability in USA/Canada/Mexico, and how to avoid traveler\'s diarrhea.',
    url: 'https://stadiumport.com/world-cup-2026-food-dining-safety',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/A_realistic_high-detail_photo_showing_a_travel_medical_essentials_layout_for_World_cup_2026.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Food & Water Safety Essentials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food & Water Safety: Dining Without Distress',
    description: 'Expert guide to World Cup 2026 food & water safety. Learn where to eat, water potability in USA/Canada/Mexico, and how to avoid traveler\'s diarrhea.',
    images: ['/images/safety-guide/A_realistic_high-detail_photo_showing_a_travel_medical_essentials_layout_for_World_cup_2026.webp'],
  },
};

export default function FoodSafetyPage() {
  const articleSchema = generateArticleSchema('food-water-safety-dining-world-cup-2026', '/world-cup-2026-food-dining-safety');
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Food & Water Safety', item: '/world-cup-2026-food-dining-safety' }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "Is it safe to eat street tacos in Mexico?",
      answer: "Yes, millions do every day! Look for stalls with long lines of locals, fresh hot meat cooked in front of you, and clean work areas. Avoid salsa that has been sitting out in the sun."
    },
    {
      question: "Can I drink the tap water in the USA?",
      answer: "Yes, tap water is safe to drink in 99% of the United States and Canada. In Mexico, stick to bottled water exclusively."
    },
    {
      question: "What should I do if I get food poisoning?",
      answer: "Stay hydrated with electrolytes. Take Imodium if you need to travel (but not if you have a fever/blood). If symptoms are severe or last >24 hours, seek medical attention."
    },
    {
      question: "Are salads safe to eat?",
      answer: "In USA/Canada, yes. In Mexico, only eat salads in reputable restaurants or hotels where they wash produce with purified water. When in doubt, stick to cooked vegetables."
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
      <FoodSafetyClientPage />
    </>
  );
}

