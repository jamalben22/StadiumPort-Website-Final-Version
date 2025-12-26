import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
 title: '2026 World Cup Host Cities: Complete Guide to All 16 Locations',
 description: 'Explore the 16 host cities for the 2026 FIFA World Cup in USA, Canada, and Mexico. Get stadium details, travel tips, and tourist guides for every location.',
 alternates: {
 canonical: '/world-cup-2026-host-cities',
 },
 openGraph: {
 title: '2026 World Cup Host Cities: Complete Guide to All 16 Locations',
 description: 'Explore the 16 host cities for the 2026 FIFA World Cup in USA, Canada, and Mexico. Get stadium details, travel tips, and tourist guides for every location.',
 url: 'https://stadiumport.com/world-cup-2026-host-cities',
 type: 'article',
 images: [
 {
 url: 'https://stadiumport.com/images/cities/new-york-new-jersey-world-cup-2026-1024.webp',
 width: 1024,
 height: 683,
 alt: 'World Cup 2026 Host Cities',
 },
 ],
 },
};

export default function Page() {
 // JSON-LD for Breadcrumbs
 const breadcrumbJsonLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
 {
 "@type": "ListItem",
 "position": 1,
 "name": "Home",
 "item": "https://stadiumport.com"
 },
 {
 "@type": "ListItem",
 "position": 2,
 "name": "World Cup 2026 Host Cities",
 "item": "https://stadiumport.com/world-cup-2026-host-cities"
 }
 ]
 };

 // JSON-LD for FAQs
 const faqJsonLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "When is the 2026 World Cup?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The 2026 FIFA World Cup is scheduled to take place from June 11 to July 19, 2026."
 }
 },
 {
 "@type": "Question",
 "name": "How many cities are hosting the 2026 World Cup?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "16 cities across three countries will host matches: 11 in the USA, 3 in Mexico, and 2 in Canada."
 }
 },
 {
 "@type": "Question",
 "name": "Which city hosts the final?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The 2026 World Cup Final will be hosted by New York/New Jersey at MetLife Stadium on July 19, 2026."
 }
 },
 {
 "@type": "Question",
 "name": "How to get tickets for the 2026 World Cup?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Tickets are expected to go on sale in 2025 via the official FIFA website. Sign up for alerts to stay updated."
 }
 },
 {
 "@type": "Question",
 "name": "What are the best host cities to visit for tourists?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Top tourist destinations among host cities include New York City, Los Angeles, Mexico City, Toronto, and Miami, offering diverse cultural experiences and major attractions."
 }
 },
 {
 "@type": "Question",
 "name": "Do I need a visa to travel between host countries?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, depending on your citizenship, you may need separate visas for the USA, Canada, and Mexico. Check official government websites for specific requirements."
 }
 }
 ]
 };

 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
 />
 <ClientPage />
 </>
 );
}




