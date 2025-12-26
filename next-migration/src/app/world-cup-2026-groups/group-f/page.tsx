import type { Metadata } from 'next';
import GroupFClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group F Travel Guide: Dallas, Houston, KC & Monterrey | Stadiumport',
  description: 'The definitive guide for following Group F in World Cup 2026. Master the Tex-Mex Corridor (Dallas-Houston-Monterrey) and the Midwest Hub (Kansas City). Drive times, heat safety, and border tips.',
  keywords: 'World Cup 2026 Group F Travel Guide, Group F matches, Dallas Houston Kansas City Monterrey World Cup, I-35 road trip World Cup, Mexico border crossing World Cup',
  alternates: {
    canonical: '/groups/group-f',
  },
  openGraph: {
    title: 'World Cup 2026 Group F Travel Guide: Dallas, Houston, KC & Monterrey | Stadiumport',
    description: 'The definitive guide for following Group F in World Cup 2026. Master the Tex-Mex Corridor (Dallas-Houston-Monterrey) and the Midwest Hub (Kansas City). Drive times, heat safety, and border tips.',
    url: '/groups/group-f',
  }
};

export default function GroupFPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/groups/group-f';

  const articleSchema = generateArticleSchema('group-f', pageUrl);

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
        "name": "Group F Guide",
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
        "name": "What is the best way to travel between Group F cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the Texas cities (Dallas and Houston), driving is common but flying is faster. For the long jumps to Kansas City and Monterrey, flying is essential due to the 10+ hour drive times and border logistics."
        }
      },
      {
        "@type": "Question",
        "name": "How hot will Group F cities be in June?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Extreme heat is the primary factor. Dallas, Houston, and Monterrey regularly exceed 95°F (35°C) in June. Both Texas stadiums are climate-controlled, but fans must plan for outdoor heat during travel."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <GroupFClientPage />
    </>
  );
}
