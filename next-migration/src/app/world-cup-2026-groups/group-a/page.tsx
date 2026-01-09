import { Metadata } from 'next';
import GroupAClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateEventSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Group A Travel Guide: Mexico City, Guadalajara & Monterrey',
  description: 'The definitive guide for following Group A in World Cup 2026. Master the Aztec Heart (CDMX-Guadalajara) and the Northern Jump (Monterrey). Luxury buses, flights, and safety strategy.',
  keywords: ['World Cup 2026 Group A Travel Guide', 'Group A matches', 'Mexico City Guadalajara Monterrey World Cup', 'ETN Luxury Bus Mexico', 'Estadio Azteca travel guide'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups/group-a',
  },
  openGraph: {
    title: 'World Cup 2026 Group A Travel Guide: Mexico City, Guadalajara & Monterrey',
    description: 'The definitive guide for following Group A in World Cup 2026. Master the Aztec Heart (CDMX-Guadalajara) and the Northern Jump (Monterrey). Luxury buses, flights, and safety strategy.',
    url: 'https://stadiumport.com/world-cup-2026-groups/group-a',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Group A Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Group A Travel Guide: Mexico City, Guadalajara & Monterrey',
    description: 'The definitive guide for following Group A in World Cup 2026. Master the Aztec Heart (CDMX-Guadalajara) and the Northern Jump (Monterrey). Luxury buses, flights, and safety strategy.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function GroupAPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-groups/group-a';

  const articleSchema = generateArticleSchema('group-a', pageUrl);

  const groupEventSchema = generateEventSchema({
    name: 'FIFA World Cup 2026 Group A Matches',
    startDate: '2026-06-11',
    endDate: '2026-06-24',
    location: {
      name: 'Group A Host Cities',
      address: 'Mexico City, Guadalajara, Monterrey, Atlanta',
      country: 'MX',
    },
    image: '/assets/wc26-groups-og.jpg',
    description: 'Group A fixtures played in Mexico City, Guadalajara, Monterrey, and Atlanta during the FIFA World Cup 2026 group stage.'
  });

  const matchEventSchemas = [
    generateEventSchema({
      name: 'Mexico vs South Africa (Group A) — Mexico City',
      startDate: '2026-06-11T13:00:00-06:00',
      endDate: '2026-06-11T15:00:00-06:00',
      location: { name: 'Mexico City Stadium', address: 'Mexico City', country: 'MX' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group A match at Mexico City Stadium in Mexico City.',
    }),
    generateEventSchema({
      name: 'Korea Republic vs UEFA Play-off D (Group A) — Guadalajara',
      startDate: '2026-06-11T20:00:00-06:00',
      endDate: '2026-06-11T22:00:00-06:00',
      location: { name: 'Estadio Guadalajara', address: 'Guadalajara', country: 'MX' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group A match at Estadio Guadalajara in Guadalajara.',
    }),
    generateEventSchema({
      name: 'UEFA Play-off D vs South Africa (Group A) — Atlanta',
      startDate: '2026-06-18T12:00:00-04:00',
      endDate: '2026-06-18T14:00:00-04:00',
      location: { name: 'Atlanta Stadium', address: 'Atlanta, GA', country: 'US' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group A match at Atlanta Stadium in Atlanta, Georgia.',
    }),
    generateEventSchema({
      name: 'Mexico vs Korea Republic (Group A) — Guadalajara',
      startDate: '2026-06-18T19:00:00-06:00',
      endDate: '2026-06-18T21:00:00-06:00',
      location: { name: 'Estadio Guadalajara', address: 'Guadalajara', country: 'MX' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group A match at Estadio Guadalajara in Guadalajara.',
    }),
    generateEventSchema({
      name: 'UEFA Play-off D vs Mexico (Group A) — Mexico City',
      startDate: '2026-06-24T19:00:00-06:00',
      endDate: '2026-06-24T21:00:00-06:00',
      location: { name: 'Mexico City Stadium', address: 'Mexico City', country: 'MX' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group A match at Mexico City Stadium in Mexico City.',
    }),
    generateEventSchema({
      name: 'South Africa vs Korea Republic (Group A) — Monterrey',
      startDate: '2026-06-24T19:00:00-06:00',
      endDate: '2026-06-24T21:00:00-06:00',
      location: { name: 'Estadio Monterrey', address: 'Monterrey', country: 'MX' },
      image: '/assets/wc26-groups-og.jpg',
      description: 'Group A match at Estadio Monterrey in Monterrey.',
    }),
  ];

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
 <JsonLd schema={groupEventSchema} />
 {matchEventSchemas.map((schema, index) => (
   <JsonLd key={index} schema={schema} />
 ))}
 <GroupAClientPage />
 </>
 );
}

