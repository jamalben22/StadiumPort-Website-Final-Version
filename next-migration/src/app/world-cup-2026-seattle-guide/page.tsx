import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Seattle World Cup 2026 Guide: Local Matchday Playbook',
  description: 'Seattle World Cup 2026 guide from a local: Lumen Field matchday plan, best neighborhoods, hotels, transit hacks, weather, safety, and itineraries.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-seattle-guide',
  },
  openGraph: {
    title: 'Seattle World Cup 2026 Guide: Local Matchday Playbook',
    description: 'Seattle World Cup 2026 guide from a local: Lumen Field matchday plan, best neighborhoods, hotels, transit hacks, weather, safety, and itineraries.',
    url: 'https://stadiumport.com/world-cup-2026-seattle-guide',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/seattle-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Seattle World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seattle World Cup 2026 Guide: Local Matchday Playbook',
    description: 'Local Seattle guide for World Cup 2026: where to stay, Link light rail to Lumen Field, fan zones, safety tips, weather, and day-by-day itineraries.',
    images: ['/images/seattle-hero.jpg'],
  },
  keywords: [
    'Seattle World Cup 2026 guide',
    'Seattle World Cup 2026 travel guide',
    'Lumen Field World Cup 2026',
    'Lumen Field matchday guide',
    'Seattle stadium transportation',
    'SEA airport to downtown Seattle',
    'SEA airport to Lumen Field',
    'Link light rail to Stadium Station',
    'ORCA card Seattle',
    'best area to stay in Seattle for World Cup',
    'Pioneer Square hotels near Lumen Field',
    'Downtown Seattle hotels World Cup 2026',
    'Belltown hotels Seattle',
    'Capitol Hill nightlife Seattle',
    'Seattle fan zones watch parties',
    'Seattle June weather',
    'Seattle July weather',
    'Seattle safety tips for tourists',
    'Seattle itinerary World Cup 2026',
    'Seattle airport transfer',
  ],
};

export default function Page() {
  const jsonLd = generateArticleSchema('seattle-city-guide', '/world-cup-2026-seattle-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Seattle Guide', item: '/world-cup-2026-seattle-guide' }
  ]);

  const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'Where is the World Cup stadium in Seattle?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Lumen Field sits in Seattle’s SoDo district, between Pioneer Square and T-Mobile Park. It’s walkable from Pioneer Square and reachable by Link light rail via Stadium Station or International District/Chinatown Station.'
 }
 },
 {
 '@type': 'Question',
 name: 'How do I get from SEA airport to the stadium area?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Take Link light rail from SeaTac/Airport Station to Stadium Station (for Lumen Field) or International District/Chinatown Station. It’s the simplest, traffic-proof option.'
 }
 },
 {
 '@type': 'Question',
 name: 'How much is Link light rail in Seattle?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Adult Link light rail fares are a flat $3 per trip on the 1 and 2 Lines, with day passes priced at twice the one-way fare.'
 }
 },
 {
 '@type': 'Question',
 name: 'Do I need a car in Seattle for the World Cup?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'No. Parking is expensive and traffic is congested. The Link Light Rail and walking are your best options for getting around.'
 }
 },
 {
 '@type': 'Question',
 name: 'What is Lumen Field’s clear bag policy?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Lumen Field allows clear bags up to 12″ x 6″ x 12″ and small clutches up to 4.5″ x 6.5″. Oversized bags are not allowed.'
 }
 },
 {
 '@type': 'Question',
 name: 'What is the weather like in Seattle in June/July?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Expect mild summer days, cool evenings, and long daylight hours. Pack light layers and a thin rain shell; even “nice” Seattle days can turn breezy near the water.'
 }
 },
 {
 '@type': 'Question',
 name: 'Where should I stay for the easiest matchday commute?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'For walking access, choose Pioneer Square or the Stadium District. For the best mix of hotels, food, and safety, Downtown and Belltown work well with quick Link access.'
 }
 },
 {
 '@type': 'Question',
 name: 'What are the best nightlife areas near the stadium?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Capitol Hill is the main nightlife hub, with dense bars and clubs plus easy Link access. Pioneer Square is great for pre-match drinks but gets quieter later.'
 }
 }
 ]
 };

 return (
 <>
 <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      <JsonLd schema={faqLd} />
 <ClientPage />
 </>
 );
}





