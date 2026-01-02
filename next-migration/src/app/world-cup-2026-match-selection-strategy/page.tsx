import React from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import ClientPage from './ClientPage';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Match Selection Strategy: Which Games to Attend | StadiumPort',
  description: 'Maximize your World Cup 2026 experience. Expert guide on which matches to attend, ticket value ratings, and strategic planning for every budget.',
  keywords: 'World Cup 2026 matches, best games to attend, ticket strategy, match schedule analysis, group stage vs knockout, World Cup travel planning',
  openGraph: {
    title: 'World Cup 2026 Match Selection Strategy: Which Games to Attend',
    description: 'Group stage value vs. knockout drama. How to build a match schedule that delivers unforgettable moments.',
    url: 'https://stadiumport.com/world-cup-2026-match-selection-strategy',
    type: 'article',
    images: [
      {
        url: '/images/travel-tips/World Cup 2026 Match Selection Strategy Illustration.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Match Selection Strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Match Selection Strategy: Which Games to Attend',
    description: 'Group stage value vs. knockout drama. How to build a match schedule that delivers unforgettable moments.',
    images: ['/images/travel-tips/World Cup 2026 Match Selection Strategy Illustration.webp'],
  },
};

export default function Page() {
  const articleSchema = generateArticleSchema(
    'world-cup-2026-match-selection-strategy',
    '/world-cup-2026-match-selection-strategy'
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://stadiumport.com' },
    { name: 'Travel Tips', item: 'https://stadiumport.com/travel-tips' },
    { name: 'Match Selection Strategy', item: 'https://stadiumport.com/world-cup-2026-match-selection-strategy' }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "How many matches should I attend?",
      answer: "For a standard 2-week trip, 3-4 matches is the sweet spot. It allows for travel days and sightseeing without burnout."
    },
    {
      question: "Which round offers the best value?",
      answer: "The Round of 32 or Round of 16. The stakes are high (knockout), tickets are cheaper than later rounds, and the atmosphere is desperate."
    },
    {
      question: "Is the Final worth the price?",
      answer: "If you have the budget ($1,500+), yes. It is a bucket-list event. If that money would fund an entire 2-week trip otherwise, then no."
    },
    {
      question: "What if I don't know who is playing?",
      answer: "That is the World Cup! Buy for the venue, the date, or the round. The atmosphere makes it special regardless of the teams."
    },
    {
      question: "Can I resell tickets if plans change?",
      answer: "Yes, via the official FIFA Resale Platform (face value) or secondary markets (market value). Always use verified platforms to avoid bans."
    },
    {
      question: "Are hospitality packages worth it?",
      answer: "They are the only way to GUARANTEE a ticket to big matches without winning a lottery. You pay for certainty and comfort."
    },
    {
      question: "Should I follow one team or visit one city?",
      answer: "Following a team is risky (logistics, elimination). Staying in a hub (like NY/Philly/Boston) and seeing whoever plays there is much easier logistically."
    }
  ]);

  return (
    <>
      <JsonLd schema={articleSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <JsonLd schema={faqSchema} />
      <ClientPage />
    </>
  );
}
