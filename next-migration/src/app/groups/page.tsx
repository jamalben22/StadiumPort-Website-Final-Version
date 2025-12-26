import React from 'react';
import type { Metadata } from 'next';
import ClientPage from './ClientPage';

const faqs = [
 {
 question: "How many groups are in the 2026 World Cup?",
 answer: "The 2026 World Cup will feature 12 groups of 4 teams each, totaling 48 participating nations. This is an expansion from the previous 32-team format."
 },
 {
 question: "Who advances from the group stage in 2026?",
 answer: "The top two teams from each of the 12 groups, plus the 8 best third-place teams, will advance to the Round of 32 knockout stage."
 },
 {
 question: "When will the 2026 World Cup group draw take place?",
 answer: "The official group draw for the FIFA World Cup 2026 is expected to take place in late 2025, once all qualifying matches have concluded."
 },
 {
 question: "Where will the 2026 World Cup group stage matches be played?",
 answer: "Group stage matches will be hosted across 16 cities in three countries: USA (11 cities), Mexico (3 cities), and Canada (2 cities)."
 }
];

export const metadata: Metadata = {
 title: 'FIFA World Cup 2026 Groups: Official 48-Team Draw & Match Schedule',
 description: 'Complete guide to the 2026 FIFA World Cup groups. Track all 48 teams across Groups A-L, view match fixtures, and explore host cities in USA, Mexico, and Canada.',
 keywords: 'World Cup 2026 groups, FIFA World Cup 2026 schedule, 48 teams format, group draw results, USA Mexico Canada 2026, match fixtures, Group A teams, Group L teams',
 alternates: {
 canonical: 'https://stadiumport.com/world-cup-2026-groups',
 },
 openGraph: {
 title: 'FIFA World Cup 2026 Groups: Official 48-Team Draw & Match Schedule',
 description: 'See the full 48-team breakdown for the 2026 World Cup. Detailed analysis of Groups A-L, team guides, and match schedules for the biggest tournament in history.',
 url: 'https://stadiumport.com/world-cup-2026-groups',
 type: 'article',
 images: [
 {
 url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
 },
 ],
 },
};

export default function Page() {
 const structuredData = {
 "@context": "https://schema.org",
 "@type": "SportsEvent",
 "name": "FIFA World Cup 2026",
 "description": "The 23rd FIFA World Cup, a quadrennial international football tournament contested by the men's national teams of the member associations of FIFA.",
 "startDate": "2026-06-11",
 "endDate": "2026-07-19",
 "location": {
 "@type": "Place",
 "name": "North America",
 "address": {
 "@type": "PostalAddress",
 "addressCountry": ["US", "MX", "CA"]
 }
 },
 "organizer": {
 "@type": "Organization",
 "name": "FIFA",
 "url": "https://www.fifa.com"
 }
 };

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.answer
 }
 }))
 };

 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />
 <ClientPage />
 </>
 );
}




