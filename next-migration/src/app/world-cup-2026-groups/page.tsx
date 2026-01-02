import React from 'react';
import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'World Cup 2026 Groups: Complete Guide to Teams, Draw & Schedule',
  description: 'The definitive guide to World Cup 2026 groups. Comprehensive analysis of all 48 teams, 12 groups, match schedules, host cities, and advancement scenarios for USA, Mexico, and Canada.',
  keywords: 'World Cup 2026 groups, World Cup 2026 group stage, FIFA 2026 groups, World Cup groups 2026, World Cup 2026 teams by group, World Cup 2026 schedule, FIFA World Cup 48 teams format',
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-groups',
  },
  openGraph: {
    title: 'World Cup 2026 Groups: Complete Guide to Teams, Draw & Schedule',
    description: 'The definitive guide to World Cup 2026 groups. Comprehensive analysis of all 48 teams, 12 groups, match schedules, and host cities.',
    url: 'https://stadiumport.com/world-cup-2026-groups',
    type: 'article',
    images: [
      {
        url: 'https://stadiumport.com/assets/wc26-groups-og.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Groups Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Groups: Complete Guide',
    description: 'Detailed breakdown of all World Cup 2026 groups, teams, and match schedules.',
    images: ['https://stadiumport.com/assets/wc26-groups-og.jpg'],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "FIFA World Cup 2026 Group Stage",
    "description": "The group stage of the 2026 FIFA World Cup featuring 48 teams competing in 12 groups across USA, Mexico, and Canada.",
    "startDate": "2026-06-11",
    "endDate": "2026-06-27",
    "location": {
      "@type": "Place",
      "name": "North America (USA, Mexico, Canada)",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US, MX, CA"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "FIFA",
      "url": "https://www.fifa.com"
    }
  };

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
        "name": "Groups",
        "item": "https://stadiumport.com/world-cup-2026-groups"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ClientPage />
    </>
  );
}




