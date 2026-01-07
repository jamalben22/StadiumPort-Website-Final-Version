import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
 title: 'Vancouver World Cup 2026 Guide: BC Place & Travel Tips',
 description: 'The most scenic World Cup host city. BC Place guide, Sea-to-Sky highway trips, Stanley Park & waterfront luxury.',
 alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-vancouver-guide',
  },
  openGraph: {
    title: 'Vancouver World Cup 2026 Guide: BC Place & Travel Tips',
    description: 'The most scenic World Cup host city. BC Place guide, Sea-to-Sky highway trips, Stanley Park & waterfront luxury.',
    url: 'https://stadiumport.com/world-cup-2026-vancouver-guide',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/vancouver-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Vancouver World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vancouver World Cup 2026 Guide: BC Place & Travel Tips',
    description: 'The most scenic World Cup host city. BC Place guide, Sea-to-Sky highway trips, Stanley Park & waterfront luxury.',
    images: ['/images/cities/vancouver-world-cup-2026.webp'],
  },
  keywords: [
    'Vancouver World Cup 2026 guide',
    'Vancouver World Cup 2026 travel guide',
    'BC Place World Cup 2026',
    'BC Place Vancouver World Cup matches',
    'Vancouver World Cup 2026 hotels',
    'best hotels near BC Place',
    'SkyTrain to BC Place',
    'YVR to downtown Vancouver SkyTrain',
    'Canada Line Vancouver',
    'Expo Line Stadium-Chinatown',
    'where to stay in Vancouver for World Cup',
    'Vancouver fan festival',
    'FIFA Fan Festival Vancouver',
    'Vancouver match day tips',
    'Vancouver public transit fares',
    'Vancouver neighborhoods guide',
    'Gastown vs Yaletown',
    'Granville Street nightlife',
    'Vancouver safety tips for tourists',
    'things to do in Vancouver between matches',
    'Vancouver World Cup 2026 hospitality packages',
    'TransLink 2026 fares',
    'FIFA 2026 Vancouver match dates'
  ],
};

export default function Page() {
  const jsonLd = generateArticleSchema('vancouver-city-guide', '/world-cup-2026-vancouver-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Vancouver Guide', item: '/world-cup-2026-vancouver-guide' }
  ]);

  const eventLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'FIFA World Cup 2026™ Matches in Vancouver (BC Place)',
    startDate: '2026-06-13',
    endDate: '2026-07-07',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'BC Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '777 Pacific Blvd',
        addressLocality: 'Vancouver',
        addressRegion: 'BC',
        postalCode: 'V6B 4Y8',
        addressCountry: 'CA',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'FIFA',
      url: 'https://www.fifa.com',
    },
    image: ['https://stadiumport.com/images/cities/vancouver-world-cup-2026.webp'],
    url: 'https://stadiumport.com/world-cup-2026-vancouver-guide',
  };

  const localBusinessLd = {
    '@context': 'https://schema.org',
    '@type': 'StadiumOrArena',
    name: 'BC Place',
    url: 'https://www.bcplace.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '777 Pacific Blvd',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      postalCode: 'V6B 4Y8',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.2767,
      longitude: -123.1119,
    },
    image: 'https://stadiumport.com/images/cities/vancouver-world-cup-2026.webp',
  };

  const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'Where is the World Cup stadium in Vancouver?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'BC Place is in downtown Vancouver at 777 Pacific Blvd, beside False Creek and the Parq Vancouver entertainment district.'
 }
 },
 {
 '@type': 'Question',
 name: 'How do I get from YVR airport to the stadium area?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Take the Canada Line SkyTrain from YVR to Vancouver City Centre or Yaletown-Roundhouse, then walk 10–20 minutes to BC Place.'
 }
 },
 {
 '@type': 'Question',
 name: 'Do I need a car for World Cup 2026 in Vancouver?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'No if you stay Downtown, Yaletown, or the West End. SkyTrain + walking covers most matchday needs, and parking downtown is limited and expensive.'
 }
 },
 {
 '@type': 'Question',
 name: 'What is the weather like in June and July?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Early summer is usually mild to warm with occasional rain showers. BC Place has a retractable roof, so matches stay comfortable even in wet weather.'
 }
 },
 {
 '@type': 'Question',
 name: 'Which areas are best to stay in?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Best matchday bases are Downtown (CBD/Coal Harbour/Waterfront), Yaletown (walkable and lively), and the West End (quiet, beachy, central).'
 }
 },
 {
 '@type': 'Question',
 name: 'Do I need a visa for Canada?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Most international visitors need an eTA or a Visitor Visa. US citizens only need a valid passport. Check current requirements before travel.'
 }
 }
 ,
 {
 '@type': 'Question',
 name: 'What matches are in Vancouver for World Cup 2026?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Vancouver hosts seven matches at BC Place: five group-stage games plus one Round of 32 and one Round of 16 match.'
 }
 }
 ,
 {
 '@type': 'Question',
 name: 'What are the official FIFA World Cup 2026 hospitality packages for Vancouver?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: "Official hospitality packages for Vancouver's World Cup 2026 matches are available exclusively through On Location via the official FIFA website: https://fifaworldcup26.hospitality.fifa.com/us/en. Packages include premium seats, entertainment, and food & beverage options."
 }
 },
 {
 '@type': 'Question',
 name: 'What are the 2026 TransLink fares for Vancouver World Cup travel?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: '2026 TransLink fares for Vancouver include a 1-Zone fare of $3.35, 2-Zone fare of $4.85, and 3-Zone fare of $6.60 for adult cash/contactless payments. A $5 YVR Airport AddFare applies to trips starting from YVR Airport stations.'
 }
 },
 {
 '@type': 'Question',
 name: 'What are the FIFA World Cup 2026 match dates for Vancouver?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: "Vancouver's BC Place will host seven FIFA World Cup 2026 matches, including Canada vs. Qatar on June 18, 2026, and Canada vs. Switzerland on June 24, 2026. Full match dates are available on the official FIFA website."
 }
 }
 ]
 };

 return (
 <>
 <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      <JsonLd schema={eventLd} />
      <JsonLd schema={localBusinessLd} />
      <JsonLd schema={faqLd} />
 <ClientPage />
 </>
 );
}





