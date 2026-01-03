import { Metadata } from 'next';
import GroupJClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group J Travel Guide: Kansas City, Dallas & San Francisco',
  description: 'The definitive guide for following Group J in World Cup 2026. Master the American Frontier (Kansas City-Dallas-San Francisco). Flights, rentals, and heat strategy.',
  keywords: ['World Cup 2026 Group J Travel Guide', 'Group J matches', 'Kansas City Dallas San Francisco World Cup', 'Arrowhead Stadium travel', 'AT&T Stadium guide', "Levi's Stadium logistics"],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-j',
  },
  openGraph: {
    title: 'World Cup 2026 Group J Travel Guide: Kansas City, Dallas & San Francisco',
    description: 'The definitive guide for following Group J in World Cup 2026. Master the American Frontier (Kansas City-Dallas-San Francisco). Flights, rentals, and heat strategy.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-j',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group J Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group J Travel Guide: Kansas City, Dallas & San Francisco',
    description: 'The definitive guide for following Group J in World Cup 2026. Master the American Frontier (Kansas City-Dallas-San Francisco). Flights, rentals, and heat strategy.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupJPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-j';

  const articleSchema = generateArticleSchema('group-j', pageUrl);

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
 "name": "Group J Guide",
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
 "name": "What is the best way to travel between Group J cities?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Due to the vast distances, flying is the only practical option between Kansas City, Dallas, and San Francisco. A rental car is essential in KC and Dallas, while public transit is more viable in the Bay Area."
 }
 },
 {
 "@type": "Question",
 "name": "Which Group J city has the best stadium atmosphere?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Kansas City's Arrowhead Stadium is world-renowned for its noise levels, holding the Guinness World Record. Dallas offers the most high-tech experience at AT&T Stadium."
 }
 }
 ]
 };

 return (
 <>
 <JsonLd schema={articleSchema} />
 <JsonLd schema={breadcrumbSchema} />
 <JsonLd schema={faqSchema} />
 <GroupJClientPage />
 </>
 );
}
