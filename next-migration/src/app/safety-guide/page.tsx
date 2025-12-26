import React from 'react';
import SafetyGuideClientPage from './ClientPage';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'World Cup 2026 Safety Guide | Security & Emergency Resources',
  description: 'The definitive safety guide for World Cup 2026. Expert advice on scams, stadium security, medical preparedness, and emergency contacts for the US, Canada, and Mexico.',
  keywords: ['World Cup 2026 safety guide', 'World Cup 2026 safety tips', 'FIFA World Cup 2026 safety', 'World Cup 2026 travel safety', 'World Cup 2026 fan safety'],
  path: '/safety-guide',
});

export default function SafetyGuidePage() {
  return <SafetyGuideClientPage />;
}
