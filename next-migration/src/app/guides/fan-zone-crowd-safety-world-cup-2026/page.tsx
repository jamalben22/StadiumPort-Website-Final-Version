import React from 'react';
import { Metadata } from 'next';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import FanZoneSafetyClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Fan Zone & Crowd Safety: World Cup 2026 Guide',
  description: 'Expert guide to World Cup 2026 fan zone safety. Navigate crowds, enjoy the atmosphere, and stay safe at official viewing parties in USA, Canada & Mexico.',
  keywords: [
    'World Cup 2026 fan zone safety',
    'crowd safety World Cup',
    'fan zone guide 2026',
    'safe World Cup experience',
    'World Cup public viewing safety',
    'fan zone security',
    'crowd management World Cup',
    'FIFA Fan Festival 2026',
    'stadium crowd safety',
    'fan fest safety tips'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/guides/fan-zone-crowd-safety-world-cup-2026',
  },
  openGraph: {
    title: 'Fan Zone & Crowd Safety: World Cup 2026 Guide',
    description: 'Expert guide to World Cup 2026 fan zone safety. Navigate crowds, enjoy the atmosphere, and stay safe at official viewing parties in USA, Canada & Mexico.',
    url: 'https://stadiumport.com/guides/fan-zone-crowd-safety-world-cup-2026',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/safety-guide/A_realistic_high-detail_photo_representing_overall_fan_safety_for_World_Cup_2026.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Fan Zone Crowd Safety',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fan Zone & Crowd Safety: World Cup 2026 Guide',
    description: 'Expert guide to World Cup 2026 fan zone safety. Navigate crowds, enjoy the atmosphere, and stay safe at official viewing parties in USA, Canada & Mexico.',
    images: ['/images/safety-guide/A_realistic_high-detail_photo_representing_overall_fan_safety_for_World_Cup_2026.webp'],
  },
};

export default function FanZoneSafetyPage() {
  const articleSchema = generateArticleSchema('fan-zone-crowd-safety-world-cup-2026', '/guides/fan-zone-crowd-safety-world-cup-2026');
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Guides', item: '/guides' },
    { name: 'Fan Zone Safety', item: '/guides/fan-zone-crowd-safety-world-cup-2026' }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "Are World Cup 2026 fan zones safe?",
      answer: "Yes, official FIFA Fan Festivals and host city fan zones are designed with high security standards, including bag checks, capacity limits, and medical presence. However, crowds can be dense, so personal awareness is essential."
    },
    {
      question: "What items are prohibited in World Cup fan zones?",
      answer: "Common prohibited items include large bags, weapons, fireworks, alcohol (brought from outside), professional cameras without accreditation, and glass containers. Always check specific venue rules before attending."
    },
    {
      question: "How early should I arrive at a fan zone?",
      answer: "For popular matches, arrive at least 2-3 hours before kickoff to ensure entry, as capacity limits are strictly enforced. Early arrival also allows you to find a safe and comfortable viewing spot."
    },
    {
      question: "Is alcohol served in World Cup 2026 fan zones?",
      answer: "Yes, alcohol sales are generally permitted in fan zones in the USA, Canada, and Mexico, subject to local laws and drinking ages (21 in USA, 18/19 in Canada, 18 in Mexico)."
    },
    {
      question: "What should I do if I get separated from my group?",
      answer: "Establish a specific meeting point outside the crowd density before entering. If separated, move to that point. Use timestamped text messages as cell service may be unreliable in large crowds."
    },
    {
      question: "Are fan zones accessible for people with disabilities?",
      answer: "Official fan zones are required to be accessible, offering designated viewing areas, accessible restrooms, and entrances. However, navigating dense crowds to reach these areas can still be challenging."
    },
    {
      question: "Can I bring children to World Cup fan zones?",
      answer: "Yes, fan zones are generally family-friendly, especially during the day. However, evening matches and high-stakes games can become rowdy. We recommend ear protection for children and using ID wristbands."
    },
    {
      question: "What is the difference between official and unofficial fan zones?",
      answer: "Official fan zones are FIFA-sanctioned with high-level security and amenities. Unofficial zones are bars, parks, or street parties which may vary significantly in security, crowd control, and medical support."
    }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FanZoneSafetyClientPage />
    </>
  );
}

