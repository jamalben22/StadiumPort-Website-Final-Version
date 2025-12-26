import type { Metadata } from 'next';
import GroupAClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
 title: 'World Cup 2026 Group A Travel Guide: Mexico City, Guadalajara & Monterrey | Stadiumport',
 description: 'The definitive guide for following Group A in World Cup 2026. Master the Aztec Heart (CDMX-Guadalajara) and the Northern Jump (Monterrey). Luxury buses, flights, and safety strategy.',
 keywords: 'World Cup 2026 Group A Travel Guide, Group A matches, Mexico City Guadalajara Monterrey World Cup, ETN Luxury Bus Mexico, Estadio Azteca travel guide',
 alternates: {
 canonical: '/groups/group-a',
 },
 openGraph: {
 title: 'World Cup 2026 Group A Travel Guide: Mexico City, Guadalajara & Monterrey | Stadiumport',
 description: 'The definitive guide for following Group A in World Cup 2026. Master the Aztec Heart (CDMX-Guadalajara) and the Northern Jump (Monterrey). Luxury buses, flights, and safety strategy.',
 url: '/groups/group-a',
 }
};

export default function GroupAPage() {
 const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
 const pageUrl = '/groups/group-a';

 const articleSchema = generateArticleSchema('group-a', pageUrl);

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
 "name": "Group A Guide",
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
 "name": "What is the best way to travel between Group A cities in Mexico?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "For the route between Mexico City and Guadalajara, luxury executive buses (like ETN) are often better than flying. For the trip to Monterrey, domestic flights are necessary due to the distance. The strategy is 'Bus the Central Heart, Fly the North'."
 }
 },
 {
 "@type": "Question",
 "name": "Is it safe to follow Group A matches in Mexico?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, provided you stick to recommended tourist neighborhoods (Roma, Condesa, Polanco in CDMX) and use official transit like Uber or luxury buses. Avoid street taxis and stick to well-traveled routes."
 }
 }
 ]
 };

 return (
 <>
 <JsonLd schema={articleSchema} />
 <JsonLd schema={breadcrumbSchema} />
 <JsonLd schema={faqSchema} />
 <GroupAClientPage />
 </>
 );
}
