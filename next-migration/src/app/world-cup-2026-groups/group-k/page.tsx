import { Metadata } from 'next';
import GroupKClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group K Travel Guide: Mexico City, Houston, Atlanta & Miami',
  description: 'The definitive guide for following Group K in World Cup 2026. Master the Southern Crossing (Mexico City-Houston-Atlanta-Miami). Altitude, humidity, and hub strategy.',
  keywords: ['World Cup 2026 Group K Travel Guide', 'Group K matches', 'Mexico City Houston Atlanta Miami World Cup', 'Estadio Azteca travel', 'Hard Rock Stadium guide', 'Southern World Cup itinerary'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-k',
  },
  openGraph: {
    title: 'World Cup 2026 Group K Travel Guide: Mexico City, Houston, Atlanta & Miami',
    description: 'The definitive guide for following Group K in World Cup 2026. Master the Southern Crossing (Mexico City-Houston-Atlanta-Miami). Altitude, humidity, and hub strategy.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-k',
    siteName: 'StadiumPort',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group K Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group K Travel Guide: Mexico City, Houston, Atlanta & Miami',
    description: 'The definitive guide for following Group K in World Cup 2026. Master the Southern Crossing (Mexico City-Houston-Atlanta-Miami). Altitude, humidity, and hub strategy.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupKPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-k';

  const articleSchema = generateArticleSchema('group-k', pageUrl);

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
        "name": "Group K Guide",
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
        "name": "What is the best way to travel between Group K cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Due to the massive distances and international borders, flying is the only viable option. Use major hubs like Mexico City (MEX), Houston (IAH), Atlanta (ATL), and Miami (MIA) for direct connections."
        }
      },
      {
        "@type": "Question",
        "name": "Which Group K city is the most unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mexico City offers the most unique experience with its high altitude (7,200ft) and the historic Estadio Azteca, the only stadium to host three World Cup openers."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <GroupKClientPage />
    </>
  );
}




