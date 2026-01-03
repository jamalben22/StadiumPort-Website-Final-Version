import React from 'react';
import { Metadata } from 'next';
import { HeroSection } from '../components/home/HeroSection';
import { TournamentOverview } from '../components/home/TournamentOverview';
import { HostCitiesSection } from '../components/home/HostCitiesSection';
import { PlanningHub } from '../components/home/PlanningHub';
import { LatestUpdates } from '../components/home/LatestUpdates';
import { TrustSection } from '../components/home/TrustSection';
import { FAQSection } from '../components/home/FAQSection';
import { CTASection } from '../components/home/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { 
  generateSportsEventSchema, 
  generateFAQSchema, 
  generateOrganizationSchema, 
  generateWebsiteSchema,
  generateBreadcrumbSchema
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Travel Guide: USA, Canada & Mexico | StadiumPort',
  description: 'The #1 World Cup 2026 travel guide. Expert planning resources for all 16 host cities, stadiums, tickets & match schedules. Plan your 2026 trip now!',
  keywords: [
    'World Cup 2026',
    'World Cup 2026 Travel Guide',
    'FIFA World Cup 2026',
    'World Cup Host Cities',
    'World Cup 2026 Stadiums',
    'World Cup 2026 Tickets',
    'USA Mexico Canada World Cup',
    'StadiumPort',
    'World Cup 2026 Hotels',
    'World Cup 2026 Flights'
  ],
  alternates: {
    canonical: 'https://stadiumport.com',
  },
  openGraph: {
    title: 'World Cup 2026 Travel Guide: USA, Canada & Mexico',
    description: 'The ultimate World Cup 2026 travel resource. Detailed guides for all 16 host cities, stadium seating charts, ticket info, and match schedules.',
    url: 'https://stadiumport.com',
    siteName: 'StadiumPort',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/cities/new-york-new-jersey-world-cup-2026-1600.webp', // Using a high-quality hero image
        width: 1600,
        height: 900,
        alt: 'World Cup 2026 Travel Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Travel Guide: USA, Canada & Mexico',
    description: 'The ultimate World Cup 2026 travel resource. Detailed guides for all 16 host cities, stadium seating charts, ticket info, and match schedules.',
    images: ['/images/cities/new-york-new-jersey-world-cup-2026-1600.webp'],
  },
};

const faqSchema = generateFAQSchema([
  {
    question: "When is the World Cup 2026?",
    answer: "The 2026 FIFA World Cup will take place from June 11 to July 19, 2026."
  },
  {
    question: "Where is the World Cup 2026 being held?",
    answer: "It is being jointly hosted by 16 cities across the United States, Mexico, and Canada."
  },
  {
    question: "How many teams are in the 2026 World Cup?",
    answer: "The tournament will feature 48 teams, expanded from the previous 32-team format."
  },
  {
    question: "What are the World Cup 2026 host cities?",
    answer: "The 16 host cities are: Atlanta, Boston, Dallas, Houston, Kansas City, Los Angeles, Miami, New York/New Jersey, Philadelphia, San Francisco Bay Area, Seattle (USA); Guadalajara, Mexico City, Monterrey (Mexico); Toronto, Vancouver (Canada)."
  }
]);

const eventSchema = generateSportsEventSchema();
const orgSchema = generateOrganizationSchema();
const websiteSchema = generateWebsiteSchema();
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', item: '/' }
]);

export default function HomePage() {
  return (
    <>
      <JsonLd schema={websiteSchema} />
      <JsonLd schema={orgSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={eventSchema} />
      <HeroSection />
      <TournamentOverview />
      <HostCitiesSection />
      <PlanningHub />
      <LatestUpdates />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </>
  );
}




