import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema, generateEventSchema, generateFAQSchema, generateLocalBusinessSchema, generateTouristDestinationSchema } from '@/lib/schema';
import { HOST_CITIES } from '@/data/host-cities';

export const metadata: Metadata = {
  title: 'Kansas City World Cup 2026 Guide: Local Tips + Arrowhead',
  description: 'Kansas City World Cup 2026 guide: Arrowhead matchday plan, best areas to stay, BBQ & jazz picks, transport hacks, budgets, safety, FAQs.',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-kansas-city-guide',
  },
  openGraph: {
    title: 'Kansas City World Cup 2026 Guide: Local Tips + Arrowhead',
    description: 'Kansas City World Cup 2026 guide: Arrowhead matchday plan, best areas to stay, BBQ & jazz picks, transport hacks, budgets, safety, FAQs.',
    url: 'https://stadiumport.com/world-cup-2026-kansas-city-guide',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/cities/kansas-city-world-cup-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Kansas City World Cup 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kansas City World Cup 2026 Guide - Local Tips + Arrowhead',
    description: 'Kansas City World Cup 2026 guide: Arrowhead matchday plan, best areas to stay, BBQ & jazz picks, transport hacks, budgets, safety, FAQs.',
    images: ['/images/cities/kansas-city-world-cup-2026.webp'],
  },
  keywords: [
    'Kansas City World Cup 2026 guide',
    'Kansas City World Cup 2026 travel guide',
    'Arrowhead Stadium World Cup 2026',
    'GEHA Field at Arrowhead Stadium',
    'Kansas City Stadium World Cup',
    'Kansas City World Cup hotels',
    'best area to stay in Kansas City for World Cup',
    'Power & Light District watch parties',
    'KC Streetcar free',
    'RideKC zero fare',
    'Kansas City BBQ',
    '18th and Vine jazz district',
    'Kansas City itinerary',
    'World Cup 2026 Kansas City schedule',
    'World Cup 2026 quarterfinal Kansas City',
    'Kansas City airport to downtown',
  ],
};

export default function Page() {
  const jsonLd = generateArticleSchema('kansas-city-city-guide', '/world-cup-2026-kansas-city-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Host Cities', item: '/world-cup-2026-host-cities' },
    { name: 'Kansas City Guide', item: '/world-cup-2026-kansas-city-guide' }
  ]);

  const faqLd = generateFAQSchema([
    {
      question: 'When are the World Cup matches in Kansas City?',
      answer: 'Kansas City hosts six matches: June 16, June 20, June 25, June 27 (Group Stage), July 3 (Round of 32), and July 11, 2026 (Quarterfinal). Kickoff times are in Central Time (CT).'
    },
    {
      question: 'What stadium hosts World Cup 2026 in Kansas City?',
      answer: 'Matches are at GEHA Field at Arrowhead Stadium (Truman Sports Complex), 1 Arrowhead Dr, Kansas City, MO 64129. FIFA branding may refer to it as “Kansas City Stadium.”'
    },
    {
      question: 'How do I get to Arrowhead without a car?',
      answer: 'There’s no rail line to the stadium. Your realistic options are rideshare, pre-booked shuttles if offered for the tournament, or joining a group transfer from Downtown.'
    },
    {
      question: 'Is the KC Streetcar free?',
      answer: 'Yes. The KC Streetcar is fare-free and is the easiest way to move around the Downtown core (River Market ↔ Downtown ↔ Crossroads ↔ Union Station/area).'
    },
    {
      question: 'Where should I stay for the best World Cup experience?',
      answer: 'Downtown (Power & Light / Crossroads) is best for watch parties, walkability, and first-timers. The Plaza is best for a calmer, more upscale base. Stadium-area hotels are only worth it for pure matchday convenience.'
    },
    {
      question: 'How early should I arrive at the stadium?',
      answer: 'If you want tailgating, arrive 3–4 hours before kickoff. If you don’t, plan for 90 minutes pre-kick because the walk from lots/drop-off to gates takes time.'
    },
    {
      question: 'What’s the weather like during World Cup dates?',
      answer: 'Expect hot, humid days and occasional thunderstorms. Arrowhead is open-air, so plan for sun and rain on the same day.'
    },
    {
      question: 'Is Kansas City safe for visitors?',
      answer: 'In the main visitor areas (Downtown, Crossroads, River Market, Plaza), most travelers feel comfortable. Use rideshare late at night, avoid empty blocks, and keep valuables out of sight—especially in parked cars.'
    },
    {
      question: 'Where are the best fan zones and watch parties?',
      answer: 'Power & Light District is the most likely “big screen” hub. Get there early for marquee matches because capacity fills.'
    },
    {
      question: 'Do I need travel insurance for a World Cup trip?',
      answer: 'If you’re traveling internationally, yes—medical costs in the U.S. can be brutal. Look for coverage for medical, trip delay, and interruption.'
    },
    {
      question: 'What BBQ should I prioritize if I only have one day?',
      answer: 'Go for the classics: Joe’s KC for the Z-Man, Q39 for a modern take, and Arthur Bryant’s for old-school KC history. Order burnt ends at least once.'
    },
    {
      question: 'What’s the easiest airport-to-downtown option?',
      answer: 'Fastest is rideshare or a rental car. Budget option: RideKC’s airport bus route connects KCI and Downtown (check the current schedule before you rely on it).'
    },
    {
      question: 'Kansas City, Kansas or Kansas City, Missouri—what’s the difference?',
      answer: 'They’re two different cities in two different states, connected as one metro. Most big visitor areas and the World Cup stadium are in Kansas City, Missouri (KCMO).'
    },
    {
      question: 'How does tipping work in Kansas City?',
      answer: 'At full-service restaurants and bars, 18–22% is standard. For counter service, tipping is appreciated but more flexible.'
    },
    {
      question: 'What’s the best way to buy tickets?',
      answer: 'Start with FIFA’s official ticket platform. If you use resale, stick to reputable marketplaces and avoid social media DMs.'
    }
  ]);

  const eventLd = generateEventSchema({
    name: 'FIFA World Cup 2026 Matches in Kansas City',
    startDate: '2026-06-16T20:00:00-05:00',
    endDate: '2026-07-11T23:00:00-05:00',
    location: {
      name: 'GEHA Field at Arrowhead Stadium',
      address: 'Kansas City, MO 64129'
    },
    image: '/images/cities/kansas-city-world-cup-2026.webp',
    description: 'Kansas City hosts six FIFA World Cup 2026 matches at GEHA Field at Arrowhead Stadium, including four group-stage matches, a Round of 32 match, and a quarterfinal.'
  });

  const city = HOST_CITIES.find(c => c.id === 'kansas-city');
  const destinationLd = city ? generateTouristDestinationSchema({
    name: city.name,
    description: city.description,
    image: city.image,
    url: '/world-cup-2026-kansas-city-guide',
    country: city.country,
    address: {
      addressRegion: city.region,
      addressCountry: city.country
    },
    geo: {
      latitude: city.coordinates.lat,
      longitude: city.coordinates.lng
    }
  }) : null;

  return (
    <>
      <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      <JsonLd schema={faqLd} />
      <JsonLd schema={eventLd} />
      {destinationLd && <JsonLd schema={destinationLd} />}
      <ClientPage />
    </>
  );
}





