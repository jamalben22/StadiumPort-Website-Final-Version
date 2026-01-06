import React from 'react';
import type { Metadata } from 'next';
import ClientPage from './ClientPage';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Play World Cup 2026 Predictor: Win $1k & Official Jersey',
  description: 'Win $1,000 + Jersey in the Free World Cup 2026 Predictor! Predict the full bracket. Open globally 13+. 100% Free. Beat the experts & win big!',
  keywords: ["World Cup 2026 predictor", "World Cup 2026 bracket challenge", "free World Cup prediction game", "World Cup 2026 contest", "soccer prediction game", "FIFA World Cup 2026 bracket", "win World Cup prizes"],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-prediction-game',
  },
  openGraph: {
    title: 'Play World Cup 2026 Predictor: Win $1k & Official Jersey',
    description: 'Win $1,000 + Jersey in the Free World Cup 2026 Predictor! Predict the full bracket. Open globally 13+. 100% Free. Beat the experts & win big!',
    url: 'https://stadiumport.com/world-cup-2026-prediction-game',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hub-pages/FIFA-World-Cup-26-qualified-teams-wallchart-graphic.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Predictor Game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Play World Cup 2026 Predictor: Win $1k & Official Jersey',
    description: 'Win $1,000 + Jersey in the Free World Cup 2026 Predictor! Predict the full bracket. Open globally 13+. 100% Free. Beat the experts & win big!',
    images: ['/images/hub-pages/FIFA-World-Cup-26-qualified-teams-wallchart-graphic.webp'],
  },
};

export default function Page() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "World Cup 2026 Predictor Game",
      "applicationCategory": "GameApplication",
      "operatingSystem": "Any",
      "url": "https://stadiumport.com/world-cup-2026-prediction-game",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Play the #1 World Cup 2026 Predictor Game. Free to enter, open globally (13+). Win $1,000 cash, official jersey & match ball. Predict the full 48-team bracket.",
      "featureList": "48-team group stage simulation, Third-place qualifier logic, Knockout bracket predictor, Social sharing, Global leaderboard",
      "browserRequirements": "Requires JavaScript. Works on modern browsers.",
      "softwareVersion": "2.1",
      "audience": {
        "@type": "PeopleAudience",
        "suggestedMinAge": "13"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "World Cup 2026 Predictor Challenge - Win $1000 & Jersey",
      "description": "Join the global World Cup 2026 Prediction Contest. 100% Free to play. Open to ages 13+ worldwide. Grand Prize: $1,000 USD + Official World Cup Jersey + Match Ball. Predict the Group Stage, Knockout Bracket, and Final Champion. Predictions lock on June 11, 2026.",
      "startDate": "2024-06-11T09:00:00Z",
      "endDate": "2026-06-11T09:00:00Z",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "VirtualLocation",
        "url": "https://stadiumport.com/world-cup-2026-prediction-game"
      },
      "organizer": {
        "@type": "Organization",
        "name": "stadiumport",
        "url": "https://stadiumport.com"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://stadiumport.com/world-cup-2026-prediction-game",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-06-11T09:00:00Z"
      },
      "performer": {
        "@type": "Organization",
        "name": "stadiumport"
      }
    },
 {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "How do I win the World Cup 2026 Predictor Contest?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Earn points for every correct prediction: 1 point for group winners, 2 points for Round of 32, up to 10 points for the Champion. The user with the highest total score on July 19, 2026 wins the Grand Prize."
 }
 },
 {
 "@type": "Question",
 "name": "What are the prizes?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Grand Prize: Authentic World Cup 2026 Jersey of your choice, Official Match Ball, and $1,000 Cash. Runner-up prizes include gift cards and team merchandise."
 }
 },
 {
 "@type": "Question",
 "name": "Is the contest free to enter?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, the stadiumport Predictor is 100% free to play. No purchase necessary to enter or win."
 }
 },
 {
 "@type": "Question",
 "name": "Who can play?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Anyone worldwide aged 13+ (parental consent required for minors)."
 }
 },
 {
 "@type": "Question",
 "name": "Who can win prizes?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Anyone worldwide aged 13+ can win. We ship prizes internationally to all countries."
 }
 },
 {
 "@type": "Question",
 "name": "Do you ship prizes internationally?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes! We ship all physical prizes (jerseys, official match ball) to winners anywhere in the world at no cost to the winner. Cash prizes are sent via PayPal or international wire transfer."
 }
 },
 {
 "@type": "Question",
 "name": "What if I'm under 18 and win?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Parent/guardian must claim prize on your behalf."
 }
 }
 ]
 },
 {
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
 "name": "World Cup 2026 Predictor",
 "item": "https://stadiumport.com/world-cup-2026-prediction-game"
 }
 ]
 },
 {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to Play the World Cup 2026 Prediction Game",
 "description": "Step-by-step guide to creating your winning World Cup 2026 bracket.",
 "step": [
 {
 "@type": "HowToStep",
 "name": "Predict Group Winners",
 "text": "Select the Winner and Runner-up for each of the 12 groups. These 24 teams automatically advance to the Round of 32.",
 "position": 1
 },
 {
 "@type": "HowToStep",
 "name": "Select Third-Place Qualifiers",
 "text": "Choose the 8 best third-place teams from the remaining pool to complete the Round of 32.",
 "position": 2
 },
 {
 "@type": "HowToStep",
 "name": "Navigate Knockout Bracket",
 "text": "Predict the winner of every match from the Round of 32 to the Final on July 19, 2026.",
 "position": 3
 },
 {
 "@type": "HowToStep",
 "name": "Submit Prediction",
 "text": "Enter your name and email to lock in your bracket and enter the contest for a chance to win prizes.",
 "position": 4
 }
 ]
 }
 ];

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Prediction Game', item: '/world-cup-2026-prediction-game' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
 />
 <ClientPage />
 </>
 );
}





