import { Metadata } from 'next';
import GroupDClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group D Travel Guide: Seattle, San Francisco & Los Angeles',
  description: 'The ultimate Group D travel guide. Master the West Coast route: Seattle, SF Bay Area, and Los Angeles. Pacific Coast Highway tips, budget strategy, and stadium logistics.',
  keywords: ['World Cup 2026 Group D Travel Guide', 'Seattle World Cup', 'San Francisco World Cup', 'Los Angeles World Cup', 'West Coast World Cup itinerary', 'SoFi Stadium guide', "Levi's Stadium guide", 'Lumen Field guide'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-d',
  },
  openGraph: {
    title: 'World Cup 2026 Group D Travel Guide: Seattle, San Francisco & Los Angeles',
    description: 'The ultimate Group D travel guide. Master the West Coast route: Seattle, SF Bay Area, and Los Angeles. Pacific Coast Highway tips, budget strategy, and stadium logistics.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-d',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group D Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group D Travel Guide: Seattle, San Francisco & Los Angeles',
    description: 'The ultimate Group D travel guide. Master the West Coast route: Seattle, SF Bay Area, and Los Angeles. Pacific Coast Highway tips, budget strategy, and stadium logistics.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupDPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-d';

  const articleSchema = generateArticleSchema('group-d', pageUrl);

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
 "name": "Group D Guide",
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
 "name": "What is the best way to travel between Seattle, SF, and LA?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Flying is the only practical option for match-to-match travel. Seattle to LA is a 2.5-hour flight or a 17+ hour drive. Only drive the Pacific Coast Highway if you have 3+ spare days between matches."
 }
 },
 {
 "@type": "Question",
 "name": "Where should I stay for matches at Levi's Stadium?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Stay in San Jose or Santa Clara for match days. San Francisco is 45 miles (60-90 mins) away. The commute from SF to the stadium on a weeknight is brutal."
 }
 }
 ]
 };

 return (
 <>
 <JsonLd schema={articleSchema} />
 <JsonLd schema={breadcrumbSchema} />
 <JsonLd schema={faqSchema} />
 <GroupDClientPage />
 </>
 );
}
