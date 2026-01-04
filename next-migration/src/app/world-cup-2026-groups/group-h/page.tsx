import { Metadata } from 'next';
import GroupHClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group H Travel Guide: Miami, Houston & Atlanta',
  description: 'The definitive guide for following Group H in World Cup 2026. Master the Southern Triangle (Miami-Houston-Atlanta). Flight strategies, stadium cooling tips, and budget strategy.',
  keywords: ['World Cup 2026 Group H Travel Guide', 'Group H matches', 'Miami Houston Atlanta World Cup', 'Southern Triangle World Cup itinerary', 'Hard Rock Stadium guide', 'NRG Stadium', 'Mercedes-Benz Stadium'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-h',
  },
  openGraph: {
    title: 'World Cup 2026 Group H Travel Guide: Miami, Houston & Atlanta',
    description: 'The definitive guide for following Group H in World Cup 2026. Master the Southern Triangle (Miami-Houston-Atlanta). Flight strategies, stadium cooling tips, and budget strategy.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-h',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group H Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group H Travel Guide: Miami, Houston & Atlanta',
    description: 'The definitive guide for following Group H in World Cup 2026. Master the Southern Triangle (Miami-Houston-Atlanta). Flight strategies, stadium cooling tips, and budget strategy.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupHPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-h';

  const articleSchema = generateArticleSchema('group-h', pageUrl);

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
 "name": "Group H Guide",
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
 "name": "What is the best way to travel between Group H cities?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Group H cities (Miami, Houston, Atlanta) are too far apart for driving. You must fly. These are three of the largest airline hubs in the US (American in MIA, United in IAH, Delta in ATL), making flight connections frequent but competitive."
 }
 },
 {
 "@type": "Question",
 "name": "Which Group H stadium is the most comfortable in summer?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Mercedes-Benz Stadium in Atlanta and NRG Stadium in Houston are fully climate-controlled with retractable roofs. Hard Rock Stadium in Miami is open-air but features a canopy that shades 90% of the seats."
 }
 }
 ]
 };

 return (
 <>
 <JsonLd schema={articleSchema} />
 <JsonLd schema={breadcrumbSchema} />
 <JsonLd schema={faqSchema} />
 <GroupHClientPage />
 </>
 );
}

