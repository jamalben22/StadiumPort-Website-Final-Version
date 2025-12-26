import type { Metadata } from 'next';
import GroupBClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
 title: 'World Cup 2026 Group B Travel Guide: Vancouver, Seattle, SF & LA | Stadiumport',
 description: 'The definitive guide for following Group B in World Cup 2026. Master the Pacific Coast Strategy (Vancouver-Seattle-SF-LA). Flights, border crossings, and budget strategy.',
 keywords: 'World Cup 2026 Group B Travel Guide, Group B matches, Vancouver Seattle San Francisco Los Angeles World Cup, Pacific Northwest World Cup travel, West Coast World Cup itinerary',
 alternates: {
  canonical: '/groups/group-b',
 },
 openGraph: {
  title: 'World Cup 2026 Group B Travel Guide: Vancouver, Seattle, SF & LA | Stadiumport',
  description: 'The definitive guide for following Group B in World Cup 2026. Master the Pacific Coast Strategy (Vancouver-Seattle-SF-LA). Flights, border crossings, and budget strategy.',
  url: '/groups/group-b',
 }
};

export default function GroupBPage() {
 const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
 const pageUrl = '/groups/group-b';

 const articleSchema = generateArticleSchema('group-b', pageUrl);

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
    "name": "Group B Guide",
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
    "name": "What is the best way to travel between Group B cities?",
    "acceptedAnswer": {
     "@type": "Answer",
     "text": "For the Cascadia leg (Vancouver to Seattle), the Amtrak Cascades train or a scenic drive is best. For the jump to California (SF and LA), domestic flights are essential due to the distance. The strategy is 'Rail the North, Fly the Coast'."
    }
   },
   {
    "@type": "Question",
    "name": "Do I need a visa to travel between Vancouver and Seattle?",
    "acceptedAnswer": {
     "@type": "Answer",
     "text": "Yes, you will be crossing an international border. Most travelers will need both a Canadian eTA/Visa and a US ESTA/Visa. Ensure all documents are ready for the land or rail crossing at Peace Arch."
    }
   }
  ]
 };

 return (
  <>
   <JsonLd schema={articleSchema} />
   <JsonLd schema={breadcrumbSchema} />
   <JsonLd schema={faqSchema} />
   <GroupBClientPage />
  </>
 );
}
