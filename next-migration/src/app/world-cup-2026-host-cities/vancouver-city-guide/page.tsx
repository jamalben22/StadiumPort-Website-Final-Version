import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
 title: 'Vancouver World Cup 2026 Travel Guide: Hotels, Transport, Tickets',
 description: 'Plan World Cup 2026 in Vancouver: BC Place stadium tips, best downtown/Yaletown hotels, SkyTrain strategy from YVR airport, dining, safety, packing, and insider advice.',
 alternates: {
 canonical: '/world-cup-2026-host-cities/vancouver-city-guide',
 },
 openGraph: {
 title: 'Vancouver World Cup 2026 Travel Guide: Hotels, Transport, Tickets',
 description: 'Everything you need for World Cup 2026 in Vancouver: stadium overview, walkable hotel areas, SkyTrain routes, matchday plan, and local secrets.',
 url: 'https://stadiumport.com/world-cup-2026-host-cities/vancouver-city-guide',
 siteName: 'Stadiumport',
 locale: 'en_US',
 type: 'article',
 images: [
 {
 url: 'https://stadiumport.com/images/cities/vancouver-world-cup-2026.webp',
 width: 1200,
 height: 630,
 alt: 'Vancouver World Cup 2026 Guide',
 },
 ],
 },
 keywords: ['Vancouver World Cup 2026', 'BC Place', 'SkyTrain', 'Downtown Vancouver hotels', 'Yaletown hotels', 'Vancouver airport transfer', 'Vancouver travel tips', 'World Cup tickets Vancouver', 'Vancouver fan zones', 'Canada Place'],
};

import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export default function Page() {
  const jsonLd = generateArticleSchema('vancouver-city-guide', '/world-cup-2026-host-cities/vancouver-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Vancouver Guide', item: '/world-cup-2026-host-cities/vancouver-city-guide' }
  ]);

  const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'Where is the World Cup stadium in Vancouver?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'BC Place is located in downtown Vancouver, next to False Creek and the Parq Vancouver entertainment complex.'
 }
 },
 {
 '@type': 'Question',
 name: 'How do I get from YVR airport to the stadium area?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Take the Canada Line SkyTrain from YVR Airport to Vancouver City Centre or Yaletown-Roundhouse stations in about 25 minutes.'
 }
 },
 {
 '@type': 'Question',
 name: 'Do I need a car for World Cup 2026 in Vancouver?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'No if you stay Downtown or Yaletown. SkyTrain is efficient and walking distance covers most venues. Parking is expensive and traffic can be heavy.'
 }
 },
 {
 '@type': 'Question',
 name: 'What is the weather like in June and July?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Mild and pleasant, typically 68–77°F (20–25°C). Rain is possible but less common in summer. BC Place has a retractable roof.'
 }
 },
 {
 '@type': 'Question',
 name: 'Which areas are best to stay in?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Downtown for walk-to-stadium convenience; Yaletown for dining and nightlife; Gastown for history; Waterfront for views.'
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




