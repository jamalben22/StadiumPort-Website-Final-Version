import { Metadata } from 'next';
import GroupGClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group G Travel Guide: Vancouver, Seattle & Los Angeles',
  description: 'The definitive guide for following Group G in World Cup 2026. Master the Cascadia Corridor (Vancouver-Seattle) and the Pacific Jump to Los Angeles. Trains, flights, and border strategy.',
  keywords: ['World Cup 2026 Group G Travel Guide', 'Group G matches', 'Vancouver Seattle Los Angeles World Cup', 'Amtrak Cascades World Cup travel', 'West Coast World Cup itinerary'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-g',
  },
  openGraph: {
    title: 'World Cup 2026 Group G Travel Guide: Vancouver, Seattle & Los Angeles',
    description: 'The definitive guide for following Group G in World Cup 2026. Master the Cascadia Corridor (Vancouver-Seattle) and the Pacific Jump to Los Angeles. Trains, flights, and border strategy.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-g',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group G Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group G Travel Guide: Vancouver, Seattle & Los Angeles',
    description: 'The definitive guide for following Group G in World Cup 2026. Master the Cascadia Corridor (Vancouver-Seattle) and the Pacific Jump to Los Angeles. Trains, flights, and border strategy.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupGPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-g';

  const articleSchema = generateArticleSchema('group-g', pageUrl);

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
       "name": "Group G Guide",
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
       "name": "What is the best way to travel between Group G cities?",
       "acceptedAnswer": {
         "@type": "Answer",
         "text": "For the Cascadia cities (Vancouver, Seattle), the Amtrak Cascades train is the superior option to avoid border traffic. For the jump to Los Angeles, you must fly. The strategy is 'Train North, Plane South'."
       }
     },
     {
       "@type": "Question",
       "name": "Which Group G city is the most expensive?",
       "acceptedAnswer": {
         "@type": "Answer",
         "text": "Vancouver and Los Angeles are tied for the highest costs. Expect to pay $400+ per night for central hotels in both cities. Seattle offers slightly better value but remains expensive compared to non-coastal cities."
       }
     }
   ]
 };

 return (
   <>
     <JsonLd schema={articleSchema} />
     <JsonLd schema={breadcrumbSchema} />
     <JsonLd schema={faqSchema} />
     <GroupGClientPage />
   </>
 );
}

