import { Metadata } from 'next';
import GroupCClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group C Travel Guide: Boston, NYC, Philly, Atlanta & Miami',
  description: 'The definitive guide for following Group C in World Cup 2026. Master the Atlantic Corridor (Boston-NYC-Philly) and the Southern Leg (Atlanta-Miami). Trains, flights, and budget strategy.',
  keywords: ['World Cup 2026 Group C Travel Guide', 'Group C matches', 'Boston NYC Philadelphia Atlanta Miami World Cup', 'Amtrak Acela World Cup travel', 'East Coast World Cup itinerary'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-c',
  },
  openGraph: {
    title: 'World Cup 2026 Group C Travel Guide: Boston, NYC, Philly, Atlanta & Miami',
    description: 'The definitive guide for following Group C in World Cup 2026. Master the Atlantic Corridor (Boston-NYC-Philly) and the Southern Leg (Atlanta-Miami). Trains, flights, and budget strategy.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-c',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group C Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group C Travel Guide: Boston, NYC, Philly, Atlanta & Miami',
    description: 'The definitive guide for following Group C in World Cup 2026. Master the Atlantic Corridor (Boston-NYC-Philly) and the Southern Leg (Atlanta-Miami). Trains, flights, and budget strategy.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupCPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-c';

  const articleSchema = generateArticleSchema('group-c', pageUrl);

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
 "name": "Group C Guide",
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
 "name": "What is the best way to travel between Group C cities?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "For the northern cities (Boston, NYC, Philadelphia), the Amtrak Acela train is superior to flying. For the southern leg (Atlanta, Miami), you must fly. The strategy is 'Train North, Plane South'."
 }
 },
 {
 "@type": "Question",
 "name": "Which Group C city is the most expensive?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "New York City is the most expensive for accommodation, averaging $450+ per night. Boston follows closely. Atlanta and Philadelphia offer better value for mid-range travelers."
 }
 }
 ]
 };

 return (
 <>
 <JsonLd schema={articleSchema} />
 <JsonLd schema={breadcrumbSchema} />
 <JsonLd schema={faqSchema} />
 <GroupCClientPage />
 </>
 );
}

