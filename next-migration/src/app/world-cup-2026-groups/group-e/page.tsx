import type { Metadata } from 'next';
import GroupEClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
 title: 'World Cup 2026 Group E Travel Guide: Philadelphia, Houston & KC | Stadiumport',
 description: 'The ultimate Group E travel guide. Master the route: Philadelphia, Houston, Kansas City, Toronto, and NY/NJ. Budget tips, Amtrak strategy, and stadium logistics.',
 keywords: 'World Cup 2026 Group E Travel Guide, Philadelphia World Cup, Houston World Cup, Kansas City World Cup, Toronto World Cup, Lincoln Financial Field guide, NRG Stadium guide, Arrowhead Stadium guide',
 alternates: {
 canonical: '/groups/group-e',
 },
 openGraph: {
 title: 'World Cup 2026 Group E Travel Guide: Philadelphia, Houston & KC | Stadiumport',
 description: 'The ultimate Group E travel guide. Master the route: Philadelphia, Houston, Kansas City, Toronto, and NY/NJ. Budget tips, Amtrak strategy, and stadium logistics.',
 url: '/groups/group-e',
 }
};

export default function GroupEPage() {
 const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
 const pageUrl = '/groups/group-e';

 const articleSchema = generateArticleSchema('group-e', pageUrl);

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
 "name": "Group E Guide",
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
 "name": "What is the best way to travel between Group E cities?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Split your travel: Use Amtrak for the Northeast leg (Philadelphia, NY/NJ). You MUST fly for the Central leg (Houston, Kansas City) and to reach Toronto. Driving between these regions is not feasible."
 }
 },
 {
 "@type": "Question",
 "name": "Is Philadelphia expensive during the World Cup?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Moderate to High. While cheaper than NYC, Philadelphia hotel rates will surge. Look for hotels in University City or near the Airport for better value, but Center City offers the best fan experience."
 }
 },
 {
 "@type": "Question",
 "name": "Do I need a visa for Group E?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes. You need a US Visa (or ESTA) for Philly/Houston/KC/NY and a Canadian ETA/Visa for Toronto. Ensure you have multi-entry permissions if moving back and forth."
 }
 }
 ]
 };

 return (
 <>
 <JsonLd schema={articleSchema} />
 <JsonLd schema={breadcrumbSchema} />
 <JsonLd schema={faqSchema} />
 <GroupEClientPage />
 </>
 );
}
