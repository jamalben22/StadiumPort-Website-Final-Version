import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Guadalajara World Cup 2026 Guide: Local Matchday Playbook',
  description: 'Guadalajara World Cup 2026 guide with Estadio Akron logistics, neighborhoods, transport hacks, safety, weather, budgets, and local food picks.',
  keywords: [
    'Guadalajara World Cup 2026 guide',
    'Guadalajara World Cup 2026 travel guide',
    'Estadio Akron World Cup 2026',
    'Guadalajara Stadium World Cup 2026',
    'Guadalajara where to stay World Cup 2026',
    'Zapopan hotels near Estadio Akron',
    'Guadalajara matchday transport',
    'Mi Macro Periférico Estadio Chivas',
    'Mi Tren Guadalajara Line 3',
    'GDL airport to Guadalajara',
    'Guadalajara fan zones World Cup 2026',
    'Guadalajara itinerary World Cup 2026',
    'Guadalajara safety tips for tourists',
    'Guadalajara tequila day trip',
    'Guadalajara nightlife Chapultepec',
    'Guadalajara family friendly neighborhoods'
  ],
  openGraph: {
    title: 'Guadalajara World Cup 2026 Guide: Local Matchday Playbook',
    description: 'Guadalajara World Cup 2026 guide with Estadio Akron logistics, neighborhoods, transport hacks, safety, weather, budgets, and local food picks.',
    url: 'https://stadiumport.com/world-cup-2026-guadalajara-guide',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/guadalajara-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Guadalajara World Cup 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guadalajara World Cup 2026 Guide: Local Matchday Playbook',
    description: 'Guadalajara World Cup 2026 guide with Estadio Akron logistics, neighborhoods, transport hacks, safety, weather, budgets, and local food picks.',
    images: ['/images/cities/guadalajara-world-cup-2026.webp'],
  },
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-guadalajara-guide',
  },
};

export default function GuadalajaraCityGuide() {
  const jsonLd = generateArticleSchema('guadalajara-city-guide', '/world-cup-2026-guadalajara-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Guadalajara Guide', item: '/world-cup-2026-guadalajara-guide' }
  ]);

  const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'Where is Guadalajara Stadium (Estadio Akron) for World Cup 2026?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Guadalajara Stadium (Estadio Akron) sits in Zapopan, on the west side of the Guadalajara metro area. Matchday traffic is real, so plan extra time and use dedicated transit options when available.',
 },
 },
 {
 '@type': 'Question',
 name: 'Is Guadalajara safe for World Cup 2026 visitors?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Most fans stick to tourist-heavy zones like Providencia, Chapultepec/Colonia Americana, Centro, and Zapopan and have a smooth trip. Use rideshare at night, keep valuables low-key, and avoid wandering unfamiliar outskirts late.',
 },
 },
 {
 '@type': 'Question',
 name: 'What’s the best way to get to Estadio Akron on matchday?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Use Mi Macro Periférico to the Estadio Chivas stop when it fits your route, then follow the matchday pedestrian flow. Rideshare works too, but expect surge pricing and pickup zones after the final whistle.',
 },
 },
 {
 '@type': 'Question',
 name: 'Which neighborhoods are best for World Cup 2026 in Guadalajara?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'For easiest stadium logistics: Zapopan (especially around Andares/Puerta de Hierro) and the Vallarta corridor. For nightlife: Colonia Americana and Avenida Chapultepec. For sights and museums: Centro Histórico and Tlaquepaque.',
 },
 },
 {
 '@type': 'Question',
 name: 'What will the weather be like in Guadalajara in June and July 2026?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Expect warm days and a real rainy season pattern: sunny mornings, then afternoon or evening storms. Pack breathable clothes plus a compact rain layer for match weeks.',
 },
 },
 {
 '@type': 'Question',
 name: 'Do I need cash in Guadalajara during World Cup 2026?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Cards work in most hotels, malls, and many restaurants, but you’ll want some pesos for street food, small bars, and quick purchases. Use ATMs inside banks or large malls.',
 },
 },
 {
 '@type': 'Question',
 name: 'How do I get from Guadalajara Airport (GDL) to the city?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'The simplest option is an authorized taxi or a pre-booked transfer to your hotel. Rideshare rules can change by zone, so confirm pickup points before you land.',
 },
 },
 ],
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



