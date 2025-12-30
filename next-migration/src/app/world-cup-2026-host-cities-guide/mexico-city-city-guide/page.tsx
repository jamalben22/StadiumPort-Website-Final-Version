import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
 title: 'Mexico City World Cup 2026 Guide: Matches, Hotels & Travel',
 description: 'Complete Mexico City World Cup 2026 guide: match schedule, best hotels, transportation, things to do, and insider tips for the ultimate fan experience.',
 alternates: {
 canonical: '/world-cup-2026-host-cities-guide/mexico-city-city-guide',
 },
 openGraph: {
 title: 'Mexico City World Cup 2026 Guide: Matches, Hotels & Travel',
 description: 'Complete Mexico City World Cup 2026 guide: match schedule, best hotels, transportation, things to do, and insider tips for the ultimate fan experience.',
 url: 'https://stadiumport.com/world-cup-2026-host-cities-guide/mexico-city-city-guide',
 type: 'article',
 images: [
 {
 url: '/images/cities/mexico-city-world-cup-2026.webp',
 width: 1200,
 height: 630,
 alt: 'Mexico City skyline with Estadio Azteca during World Cup 2026',
 },
 ],
 },
};

import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export default function MexicoCityGuide() {
  const jsonLd = generateArticleSchema('mexico-city-city-guide', '/world-cup-2026-host-cities-guide/mexico-city-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'World Cup 2026 Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Mexico City Guide', item: '/world-cup-2026-host-cities-guide/mexico-city-city-guide' }
  ]);

  const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'When are World Cup matches in Mexico City?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Mexico City will host five matches, starting with the historic Opening Match on June 11, 2026, featuring the Mexican National Team. Other group stage matches are on June 17 and June 24. The city also hosts a Round of 32 match on June 30 and a Round of 16 match on July 5, 2026.'
 }
 },
 {
 '@type': 'Question',
 name: 'How do I get tickets to matches in Mexico City?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Tickets are sold exclusively through the official FIFA website. The registration phase usually begins 9-12 months before the tournament. We strongly recommend signing up for FIFA official alerts and checking our comprehensive ticket guide for strategies on the lottery and resale phases.'
 }
 },
 {
 '@type': 'Question',
 name: 'What is the best area to stay in Mexico City for the World Cup?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'For the best balance of safety, dining, and atmosphere, stay in Roma Norte, Condesa, or Polanco. While these areas are 45-60 minutes from Estadio Azteca, they offer a far superior visitor experience compared to the neighborhoods directly surrounding the stadium.'
 }
 },
 {
 '@type': 'Question',
 name: 'How far is the stadium from downtown?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Estadio Azteca is located in the Santa Úrsula neighborhood, approximately 15-20 km (9-12 miles) south of the historic city center (Zócalo) and Roma/Condesa. In Mexico City traffic, this drive can take anywhere from 45 minutes to over 90 minutes. The Light Rail (Tren Ligero) is often a more reliable option on match days.'
 }
 },
 {
 '@type': 'Question',
 name: 'Is it safe to walk around at night in Mexico City?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'In neighborhoods like Roma Norte, Condesa, and Polanco, walking at night is generally safe, especially on main streets. However, in Centro Histórico and areas around the stadium, it is recommended to use Uber or authorized taxis after dark. Always remain aware of your surroundings.'
 }
 },
 {
 '@type': 'Question',
 name: 'Do I need to speak Spanish to visit Mexico City?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'While you can get by with English in major tourist areas, hotels, and fine dining restaurants, speaking basic Spanish is extremely helpful for street food, taxis, and local markets. We recommend learning key phrases or using a translation app.'
 }
 },
 {
 '@type': 'Question',
 name: 'Can I pay with dollars in Mexico City?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'No, the official currency is the Mexican Peso (MXN). While some tourist traps might accept dollars at a poor exchange rate, you should always pay in Pesos. Credit cards are widely accepted, but carry cash for street tacos and small vendors.'
 }
 }
 ]
 };

 const eventLd = {
 '@context': 'https://schema.org',
 '@type': 'Event',
 name: 'World Cup 2026 Opening Match - Mexico City',
 startDate: '2026-06-11T12:00:00-06:00',
 endDate: '2026-06-11T15:00:00-06:00',
 eventStatus: 'https://schema.org/EventScheduled',
 eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
 location: {
 '@type': 'SportsActivityLocation',
 name: 'Estadio Azteca',
 address: {
 '@type': 'PostalAddress',
 streetAddress: 'Calz. de Tlalpan 3465, Santa Úrsula Coapa',
 addressLocality: 'Coyoacán',
 addressRegion: 'CDMX',
 postalCode: '04650',
 addressCountry: 'MX'
 }
 },
 image: [
 '/images/cities/mexico-city-world-cup-2026.webp'
 ],
 description: 'The historic opening match of the FIFA World Cup 2026 featuring the Mexican National Team at the legendary Estadio Azteca.',
 performer: {
 '@type': 'SportsTeam',
 name: 'Mexico National Football Team'
 },
 organizer: {
 '@type': 'Organization',
 name: 'FIFA',
 url: 'https://www.fifa.com'
 }
 };

 const stadiumLd = {
 '@context': 'https://schema.org',
 '@type': 'SportsActivityLocation',
 name: 'Estadio Azteca',
 image: '/images/cities/mexico-city-world-cup-2026.webp',
 address: {
 '@type': 'PostalAddress',
 streetAddress: 'Calz. de Tlalpan 3465, Santa Úrsula Coapa',
 addressLocality: 'Coyoacán',
 addressRegion: 'CDMX',
 postalCode: '04650',
 addressCountry: 'MX'
 },
 geo: {
 '@type': 'GeoCoordinates',
 latitude: 19.3029,
 longitude: -99.1505
 },
 url: 'https://www.estadioazteca.com.mx/',
 telephone: '+525554873100',
 openingHoursSpecification: [
 {
 '@type': 'OpeningHoursSpecification',
 dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
 opens: '09:00',
 closes: '17:00'
 }
 ]
 };

 return (
 <>
 <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      <JsonLd schema={faqLd} />
      <JsonLd schema={eventLd} />
      <JsonLd schema={stadiumLd} />
 <ClientPage />
 </>
 );
}




