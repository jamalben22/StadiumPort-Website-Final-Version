import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { HostCitiesSection } from '../components/home/HostCitiesSection';
import { PlanningHub } from '../components/home/PlanningHub';
import { TrustSection } from '../components/home/TrustSection';
import { CTASection } from '../components/home/CTASection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Stadiumport | World Cup 2026 Travel Guide & Host Cities',
  description: 'The definitive World Cup 2026 resource. Plan your journey with expert stadium guides, host city insights, match schedules, and travel tips for USA, Mexico, and Canada.',
  keywords: ['Stadiumport', 'World Cup 2026', 'FIFA World Cup 2026', 'World Cup Host Cities', 'World Cup Stadiums', 'World Cup Travel Guide'],
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




