import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
 title: 'San Francisco Bay Area World Cup 2026 Travel Guide: Hotels, Transport, Tickets',
 description: 'Plan World Cup 2026 in San Francisco Bay Area: Levi\'s Stadium tips, best SF/Santa Clara hotels, Caltrain strategy, dining, safety, packing, and insider advice.',
 alternates: {
 canonical: '/world-cup-2026-host-cities-guide/san-francisco-city-guide',
 },
 openGraph: {
 title: 'San Francisco Bay Area World Cup 2026 Travel Guide: Hotels, Transport, Tickets',
 description: 'Everything you need for World Cup 2026 in San Francisco Bay Area: Levi\'s Stadium overview, SF vs Santa Clara hotels, Caltrain routes, matchday plan, and local secrets.',
 url: 'https://stadiumport.com/world-cup-2026-host-cities-guide/san-francisco-city-guide',
 siteName: 'Stadiumport',
 locale: 'en_US',
 type: 'article',
 images: [
 {
 url: '/images/cities/san-francisco-world-cup-2026.webp',
 width: 1200,
 height: 630,
 alt: 'San Francisco Bay Area World Cup 2026 Guide',
 },
 ],
 },
 keywords: ['San Francisco World Cup 2026', 'Levi\'s Stadium', 'Santa Clara World Cup', 'San Francisco hotels', 'Santa Clara hotels', 'Caltrain to Levi\'s Stadium', 'San Francisco travel tips', 'World Cup tickets San Francisco', 'SF CityPASS', 'Bay Area fan zones'],
};

import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export default function Page() {
  const jsonLd = generateArticleSchema('san-francisco-city-guide', '/world-cup-2026-host-cities-guide/san-francisco-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities-guide' },
    { name: 'San Francisco Guide', item: '/world-cup-2026-host-cities-guide/san-francisco-city-guide' }
  ]);

  const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'Where is the World Cup stadium in San Francisco?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Levi\'s Stadium is located in Santa Clara, about 45 miles south of San Francisco.'
 }
 },
 {
 '@type': 'Question',
 name: 'How do I get from SF to the stadium area?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Take Caltrain from SF to Mountain View, then transfer to VTA Light Rail (Orange Line) to the stadium.'
 }
 },
 {
 '@type': 'Question',
 name: 'Do I need a car for World Cup 2026 in San Francisco?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'No if you stay in SF or near transit. Driving to the stadium is difficult due to traffic and parking costs.'
 }
 },
 {
 '@type': 'Question',
 name: 'What is the weather like in June and July?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'SF is cool and foggy (55-65°F). Santa Clara is warm and sunny (75-85°F). Bring layers.'
 }
 },
 {
 '@type': 'Question',
 name: 'Which areas are best to stay in?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'San Francisco (Union Square/Fisherman\'s Wharf) for tourism/nightlife; Santa Clara/San Jose for stadium convenience.'
 }
 },
 {
 '@type': 'Question',
 name: 'Can I bring a bag to the stadium?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Clear stadium-approved bags only (12x6x12 inches). Policies are strict.'
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




