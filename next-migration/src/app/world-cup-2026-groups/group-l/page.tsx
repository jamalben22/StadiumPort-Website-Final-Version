import type { Metadata } from 'next';
import GroupLClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group L Travel Guide: Toronto, NYC, Boston, Philly & Dallas | Stadiumport',
  description: 'The definitive guide for following Group L in World Cup 2026. Master the Cross-Border Strategy (Toronto-NYC-Boston-Philly) and the Texas Jump (Dallas). Borders, trains, and budget strategy.',
  keywords: 'World Cup 2026 Group L Travel Guide, Group L matches, Toronto NYC Boston Philadelphia Dallas World Cup, Cross-border World Cup travel, Amtrak Northeast World Cup itinerary',
  alternates: {
    canonical: '/groups/group-l',
  },
  openGraph: {
    title: 'World Cup 2026 Group L Travel Guide: Toronto, NYC, Boston, Philly & Dallas | Stadiumport',
    description: 'The definitive guide for following Group L in World Cup 2026. Master the Cross-Border Strategy (Toronto-NYC-Boston-Philly) and the Texas Jump (Dallas). Borders, trains, and budget strategy.',
    url: '/groups/group-l',
  }
};

export default function GroupLPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/groups/group-l';

  const articleSchema = generateArticleSchema('group-l', pageUrl);

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
        "name": "Group L Guide",
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
        "name": "What is the best way to travel between Group L cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the Northeast cluster (Boston, NYC, Philadelphia), the Amtrak Acela is the best option. For Toronto and Dallas, you must fly. The strategy is 'Rail the Northeast, Fly the Long Haul'."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a visa for both Canada and the US in Group L?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Following Group L involves crossing the US-Canada border. Most international travelers will need a US ESTA/Visa and a Canadian eTA/Visa. Ensure both are secured months in advance."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <GroupLClientPage />
    </>
  );
}
