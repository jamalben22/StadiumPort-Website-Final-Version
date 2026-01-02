import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
 title: 'Seattle World Cup 2026 Travel Guide: Hotels, Transport, Tickets',
 description: 'Plan World Cup 2026 in Seattle: Lumen Field tips, Pioneer Square/SoDo hotels, Link Light Rail strategy from SEA airport, dining in Pike Place, safety, packing, and insider advice.',
 alternates: {
 canonical: '/world-cup-2026-host-cities-guide/seattle-city-guide',
 },
 openGraph: {
 title: 'Seattle World Cup 2026 Travel Guide: Hotels, Transport, Tickets',
 description: 'Everything you need for World Cup 2026 in Seattle: stadium overview, walkable hotel areas, Link Light Rail routes, matchday plan, and local secrets.',
 url: 'https://stadiumport.com/world-cup-2026-host-cities-guide/seattle-city-guide',
 siteName: 'Stadiumport',
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
 keywords: ['Seattle World Cup 2026', 'Lumen Field', 'Link Light Rail', 'Downtown Seattle hotels', 'Pioneer Square hotels', 'SEA airport transfer', 'Seattle travel tips', 'World Cup tickets Seattle', 'Seattle CityPASS', 'Seattle fan zones'],
};

import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export default function Page() {
  const jsonLd = generateArticleSchema('seattle-city-guide', '/world-cup-2026-host-cities-guide/seattle-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities-guide' },
    { name: 'Seattle Guide', item: '/world-cup-2026-host-cities-guide/seattle-city-guide' }
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
 text: 'Lumen Field is located in the SoDo district, just south of downtown and Pioneer Square. It is easily walkable from many hotels.'
 }
 },
 {
 '@type': 'Question',
 name: 'How do I get from SEA airport to the stadium area?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Take the Link Light Rail directly from SEA-TAC to Stadium Station or International District/Chinatown Station. It takes about 35-40 minutes.'
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
 name: 'What is the weather like in Seattle in June/July?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Summer in Seattle is beautiful with highs around 75°F (24°C), sunny days, and low humidity. Rain is rare during these months.'
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




