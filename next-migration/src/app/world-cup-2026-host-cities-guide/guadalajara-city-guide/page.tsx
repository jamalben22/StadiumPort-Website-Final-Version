import React from 'react';
import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
 title: 'Guadalajara World Cup 2026 City Guide | Stadiumport',
 description: 'The ultimate guide to World Cup 2026 in Guadalajara. Stadium info, transport tips, where to stay, and the best tequila and mariachi experiences.',
 keywords: 'Guadalajara World Cup 2026, Estadio Akron guide, Guadalajara travel guide, World Cup 2026 Mexico, Guadalajara hotels, Estadio Akron tickets',
 openGraph: {
 title: 'Guadalajara World Cup 2026 City Guide | Stadiumport',
 description: 'The ultimate guide to World Cup 2026 in Guadalajara. Stadium info, transport tips, where to stay, and the best tequila and mariachi experiences.',
 url: 'https://stadiumport.com/world-cup-2026-host-cities-guide/guadalajara-city-guide',
 siteName: 'Stadiumport',
 images: [
 {
 url: '/images/cities/guadalajara-world-cup-2026.webp',
 width: 1200,
 height: 630,
 alt: 'Guadalajara World Cup 2026',
 },
 ],
 locale: 'en_US',
 type: 'article',
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Guadalajara World Cup 2026 City Guide | Stadiumport',
 description: 'The ultimate guide to World Cup 2026 in Guadalajara. Stadium info, transport tips, where to stay, and the best tequila and mariachi experiences.',
 images: ['/images/cities/guadalajara-world-cup-2026.webp'],
 },
 alternates: {
 canonical: 'https://stadiumport.com/world-cup-2026-host-cities-guide/guadalajara-city-guide',
 },
};

import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export default function GuadalajaraCityGuide() {
  const jsonLd = generateArticleSchema('guadalajara-city-guide', '/world-cup-2026-host-cities-guide/guadalajara-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'World Cup 2026 Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Guadalajara City Guide', item: '/world-cup-2026-host-cities-guide/guadalajara-city-guide' }
  ]);

  const faqLd = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: 'Where is the World Cup stadium in Guadalajara?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Estadio Akron is located in the Zapopan area, about 30-45 minutes from Guadalajara\'s historic center. It is known for its distinctive volcano-like design.',
 },
 },
 {
 '@type': 'Question',
 name: 'Is Guadalajara safe for World Cup tourists?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Generally, yes, especially in tourist areas like Centro Histórico, Chapultepec, and Zapopan. However, standard precautions should be taken, and visitors should avoid non-tourist areas at night.',
 },
 },
 {
 '@type': 'Question',
 name: 'What is the best way to get to Estadio Akron?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Rideshare apps like Uber are the most convenient option. There will also be special shuttle buses (Mi Macro Periférico) running from key points in the city on match days.',
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




