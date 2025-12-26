import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { HostCitiesSection } from '../components/home/HostCitiesSection';
import { PlanningHub } from '../components/home/PlanningHub';
import { TrustSection } from '../components/home/TrustSection';
import { CTASection } from '../components/home/CTASection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'World Cup 2026 Travel Guide | Host Cities & Stadiums',
  description: 'The ultimate guide to the FIFA World Cup 2026. Explore all 16 host cities, stadium guides, match schedules, travel tips, and accommodation.',
  keywords: ['World Cup 2026', 'FIFA World Cup 2026', 'World Cup Host Cities', 'World Cup Stadiums', 'World Cup Travel Guide'],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HostCitiesSection />
      <PlanningHub />
      <TrustSection />
      <CTASection />
    </>
  );
}




