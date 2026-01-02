import type { Metadata } from 'next';
import ClientPage from './ClientPage';
import { contentRegistry } from '@/data/content-registry';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';

const slug = 'world-cup-2026-packing-guide';
const meta = contentRegistry[slug] || {
  title: 'World Cup 2026 Packing Guide: Ultimate Checklist for All Weather',
  description: 'The definitive packing list for World Cup 2026. Weather-specific gear for 16 cities, baggage policies, stadium rules, and space-saving hacks.',
  publishedAt: '2025-12-30T00:00:00Z',
  updatedAt: '2025-12-30T00:00:00Z',
  image: '/images/travel-tips/World Cup 2026 Packing Guide Illustration.webp'
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `https://stadiumport.com/${slug}`,
    type: 'article',
    publishedTime: meta.publishedAt,
    modifiedTime: meta.updatedAt,
    images: [
      {
        url: meta.image || '/images/default-og.jpg',
        width: 1200,
        height: 630,
        alt: meta.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: [meta.image || '/images/default-og.jpg'],
  },
};

export default function Page() {
  const articleSchema = generateArticleSchema(slug, slug);
  
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
        "item": "https://stadiumport.com/travel-tips"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Packing Guide",
        "item": `https://stadiumport.com/${slug}`
      }
    ]
  };

  const faqSchema = generateFAQSchema([
    {
      question: "What size luggage should I bring for a 2-week World Cup trip?",
      answer: "For a 2-week trip, we recommend one checked bag (25-28 inches) and one carry-on. This allows you to pack for different weather zones while leaving space for souvenirs. If you are moving cities every 2-3 days, consider a large travel backpack instead of a suitcase for mobility."
    },
    {
      question: "What are the stadium bag policies for World Cup 2026?",
      answer: "All World Cup 2026 venues enforce a strict Clear Bag Policy. Bags must be clear plastic, vinyl, or PVC and not exceed 12\" x 6\" x 12\". Small clutch bags (no larger than 4.5\" x 6.5\") are also allowed. Backpacks and solid tote bags are prohibited."
    },
    {
      question: "Do I need different clothes for USA, Canada, and Mexico in June/July?",
      answer: "Yes. Mexico City is high altitude and mild (75°F), Monterrey is hot (90°F+), Miami/Houston are humid and hot (90°F+), while Vancouver and Seattle can be cool (65-75°F) with rain. Pack layers: moisture-wicking tees for heat, and a light rain jacket/hoodie for the north."
    },
    {
      question: "Can I bring liquids into the stadium?",
      answer: "Generally, no outside liquids are allowed. You may be able to bring an empty clear reusable water bottle to fill at stations inside, but check specific venue rules closer to the event. For flights (TSA), liquids in carry-on must be under 3.4oz (100ml)."
    },
    {
      question: "What is the most important item to pack?",
      answer: "Broken-in walking shoes. You will likely walk 15,000+ steps per match day. Do not bring brand new shoes; blisters will ruin your experience. Also critical: a portable charger (20,000mAh) as your phone is your ticket and map."
    }
  ]);

  return (
    <>
      <JsonLd schema={articleSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <JsonLd schema={faqSchema} />
      <ClientPage />
    </>
  );
}
