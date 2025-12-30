import type { Metadata } from 'next';
import ClientPage from './ClientPage';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'World Cup 2026 Food & Dining Guide: Eating Well on Any Budget',
  description: 'Street tacos in Mexico City, BBQ in Kansas City, and pizza in NY. Eat like a local champion with our 2026 World Cup food guide.',
  openGraph: {
    title: 'World Cup 2026 Food & Dining Guide: Eating Well on Any Budget',
    description: 'Street tacos in Mexico City, BBQ in Kansas City, and pizza in NY. Eat like a local champion with our 2026 World Cup food guide.',
    url: 'https://stadiumport.com/world-cup-2026-food-dining-guide',
    type: 'article',
    images: [
      {
        url: '/images/travel-tips/World Cup 2026 Food & Dining Guide Illustration.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Food & Dining Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Food & Dining Guide: Eating Well on Any Budget',
    description: 'Street tacos in Mexico City, BBQ in Kansas City, and pizza in NY. Eat like a local champion with our 2026 World Cup food guide.',
    images: ['/images/travel-tips/World Cup 2026 Food & Dining Guide Illustration.webp'],
  },
};

export default function Page() {
  const articleSchema = generateArticleSchema('world-cup-2026-food-dining-guide', '/world-cup-2026-food-dining-guide');
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Travel Tips', item: '/travel-tips' },
    { name: 'Food & Dining Guide', item: '/world-cup-2026-food-dining-guide' }
  ]);

  const faqSchema = generateFAQSchema([
    { question: "How much should I budget for food daily?", answer: "For a comfortable trip, budget $50-60 USD per day. This allows for coffee, a casual lunch, and a decent dinner. In Mexico, you can do it for $30. In NYC/SF, budget $80." },
    { question: "Is street food safe in Mexico?", answer: "Generally, yes. Follow the crowds. If a stand is packed with locals and the food is cooked hot in front of you (tacos, quesadillas), it's safe. Avoid pre-cut fruit or salads washed in tap water." },
    { question: "Do I need reservations?", answer: "For popular sit-down restaurants in host cities during the World Cup? Absolutely. Book 1-3 months in advance via OpenTable or Resy." },
    { question: "Are US portions really that big?", answer: "Yes. They are often double a European portion. It is perfectly normal to ask for a 'to-go box' or split an entrée between two people." },
    { question: "Can I bring food into the stadiums?", answer: "Usually no, other than medically necessary items. Some stadiums allow small snacks in clear bags, but check the specific stadium guide closer to match day." },
    { question: "What is the tipping culture?", answer: "USA: 20% standard. Canada: 15-18%. Mexico: 10-15%. In the US, tipping is not optional; it is the server's wage." }
  ]);

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <ClientPage />
    </>
  );
}
