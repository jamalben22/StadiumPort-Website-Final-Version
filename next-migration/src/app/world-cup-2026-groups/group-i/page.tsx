import type { Metadata } from 'next';
import GroupIClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group I Travel Guide: San Francisco & Los Angeles | Stadiumport',
  description: 'The definitive guide for following Group I in World Cup 2026. Master the California Corridor (SF-LA). Pacific Coast Highway tips, stadium logistics, and budget strategy.',
  keywords: 'World Cup 2026 Group I Travel Guide, Group I matches, San Francisco Los Angeles World Cup, California World Cup itinerary, Levi\'s Stadium guide, SoFi Stadium guide',
  alternates: {
    canonical: '/groups/group-i',
  },
  openGraph: {
    title: 'World Cup 2026 Group I Travel Guide: San Francisco & Los Angeles | Stadiumport',
    description: 'The definitive guide for following Group I in World Cup 2026. Master the California Corridor (SF-LA). Pacific Coast Highway tips, stadium logistics, and budget strategy.',
    url: '/groups/group-i',
  }
};

export default function GroupIPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/groups/group-i';

  const articleSchema = generateArticleSchema('group-i', pageUrl);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Groups",
        "item": `${siteUrl}/world-cup-2026-groups`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Group I Guide",
        "item": `${siteUrl}${pageUrl}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best way to travel between San Francisco and Los Angeles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For speed, flying between SFO/SJC and LAX/BUR is best (1h 15m). For the experience, driving the Pacific Coast Highway (PCH) is legendary but takes 8-10 hours. Avoid the Amtrak Coast Starlight if you are on a tight schedule."
        }
      },
      {
        "@type": "Question",
        "name": "How far is Levi's Stadium from San Francisco?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Levi's Stadium is in Santa Clara, about 45 miles (72 km) south of downtown San Francisco. Depending on traffic, it can take 1-2 hours by car or Caltrain."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <GroupIClientPage />
    </>
  );
}




