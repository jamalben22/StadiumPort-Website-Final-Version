import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TournamentOverview } from '../components/home/TournamentOverview';
import { HostCitiesSection } from '../components/home/HostCitiesSection';
import { PlanningHub } from '../components/home/PlanningHub';
import { LatestUpdates } from '../components/home/LatestUpdates';
import { TrustSection } from '../components/home/TrustSection';
import { FAQSection } from '../components/home/FAQSection';
import { CTASection } from '../components/home/CTASection';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { 
  generateSportsEventSchema, 
  generateFAQSchema, 
  generateOrganizationSchema, 
  generateWebsiteSchema,
  generateBreadcrumbSchema
} from '@/lib/schema';

export const metadata = constructMetadata({
  title: 'World Cup 2026 Travel Guide | StadiumPort Official',
  description: 'The #1 World Cup 2026 travel guide. Expert tips for all 16 host cities & stadiums in USA, Mexico, Canada. Complete match schedule, tickets & hotel deals.',
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
});

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




