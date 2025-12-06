import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { motion } from 'framer-motion';
import { MapPin, Plane, ArrowRight, Search, Shield, AlertCircle, Clock, TrendingUp, Hotel, BookOpen, Check, ChevronRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const groupsData = [
  {
    id: 'A',
    name: 'Group A – The Aztec Heartland',
    cityCluster: [
      { name: 'Mexico City', url: '/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide' },
      { name: 'Guadalajara', url: '/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide' },
      { name: 'Monterrey', url: '/world-cup-2026-host-cities/monterrey-world-cup-2026-guide' },
      { name: 'Atlanta', url: '/world-cup-2026-host-cities/atlanta-world-cup-2026-guide' }
    ],
    description: 'A compact, Mexico-heavy travel footprint with excellent domestic flight links and two affordable base camps. This group offers some of the tournament\'s lowest travel costs with short flights between Mexican cities and a single US connection.',
    keyStadiums: [
      { name: 'Estadio Azteca', url: '/world-cup-2026-stadiums/estadio-azteca-guide' },
      { name: 'Estadio Akron', url: '/world-cup-2026-stadiums/estadio-akron-guide' },
      { name: 'Estadio BBVA', url: '/world-cup-2026-stadiums/estadio-bbva-guide' },
      { name: 'Mercedes-Benz Stadium', url: '/world-cup-2026-stadiums/mercedes-benz-stadium-guide' }
    ],
    highlights: [
      '🛫 Average flight time: 2.5 hours between cities',
      '💵 Estimated base cost: $850-1,200 for all group matches',
      '⭐ Best base camp: Mexico City (central hub with daily flights to all three cities)'
    ],
    link: '/groups/group-a'
  },
  {
    id: 'B',
    name: 'Group B – Pacific Coast & Canada Blend',
    cityCluster: [
      { name: 'Vancouver', url: '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide' },
      { name: 'Seattle', url: '/world-cup-2026-host-cities/seattle-world-cup-2026-guide' },
      { name: 'San Francisco', url: '/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide' },
      { name: 'Toronto', url: '/world-cup-2026-host-cities/toronto-world-cup-2026-guide' }
    ],
    description: 'Long but smooth routes with major airport hubs; ideal for fans who enjoy scenic West Coast movement. The Vancouver-Seattle leg offers cheap bus and train alternatives to flying.',
    keyStadiums: [
      { name: 'BC Place', url: '/world-cup-2026-stadiums/bc-place-stadium-guide' },
      { name: 'Lumen Field', url: '/world-cup-2026-stadiums/lumen-field-guide' },
      { name: 'Levi\'s Stadium', url: '/world-cup-2026-stadiums/levis-stadium-guide' },
      { name: 'BMO Field', url: '/world-cup-2026-stadiums/bmo-field-guide' }
    ],
    highlights: [
      '🛫 Average flight time: 3.5 hours (West Coast) / 5 hours (Toronto connection)',
      '💵 Estimated base cost: $1,400-1,800 for all group matches',
      '⭐ Best base camp: Seattle or Vancouver (close proximity, then fly to Bay Area/Toronto)'
    ],
    link: '/groups/group-b'
  },
  {
    id: 'C',
    name: 'Group C – East Coast Corridor',
    cityCluster: [
      { name: 'Boston', url: '/world-cup-2026-host-cities/boston-world-cup-2026-guide' },
      { name: 'New York City', url: '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide' },
      { name: 'Miami', url: '/world-cup-2026-host-cities/miami-world-cup-2026-guide' },
      { name: 'Atlanta', url: '/world-cup-2026-host-cities/atlanta-world-cup-2026-guide' }
    ],
    description: 'High-speed domestic flights, deep hotel availability, and the densest transport network in WC26. Multiple daily flights on every route make this group ideal for flexible travelers.',
    keyStadiums: [
      { name: 'Gillette Stadium', url: '/world-cup-2026-stadiums/gillette-stadium-guide' },
      { name: 'MetLife Stadium', url: '/world-cup-2026-stadiums/metlife-stadium-guide' },
      { name: 'Hard Rock Stadium', url: '/world-cup-2026-stadiums/hard-rock-stadium-guide' },
      { name: 'Mercedes-Benz Stadium', url: '/world-cup-2026-stadiums/mercedes-benz-stadium-guide' }
    ],
    highlights: [
      '🛫 Average flight time: 2 hours (except Miami: 3 hours)',
      '💵 Estimated base cost: $1,300-1,700 for all group matches',
      '⭐ Best base camp: New York or Atlanta (maximum flight connectivity)'
    ],
    link: '/groups/group-c'
  },
  {
    id: 'D',
    name: 'Group D – West Coast Pure',
    cityCluster: [
      { name: 'Los Angeles', url: '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide' },
      { name: 'Seattle', url: '/world-cup-2026-host-cities/seattle-world-cup-2026-guide' },
      { name: 'Vancouver', url: '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide' },
      { name: 'San Francisco', url: '/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide' }
    ],
    description: 'Minimal time-zone stress and clean linear routing along the Pacific coast. This is one of the easiest groups to navigate with consistent weather and straightforward logistics.',
    keyStadiums: [
      { name: 'SoFi Stadium', url: '/world-cup-2026-stadiums/sofi-stadium-guide' },
      { name: 'Lumen Field', url: '/world-cup-2026-stadiums/lumen-field-guide' },
      { name: 'BC Place', url: '/world-cup-2026-stadiums/bc-place-stadium-guide' },
      { name: "Levi's Stadium", url: '/world-cup-2026-stadiums/levis-stadium-guide' }
    ],
    highlights: [
      '🛫 Average flight time: 2 hours between cities',
      '💵 Estimated base cost: $1,200-1,600 for all group matches',
      '⭐ Best base camp: Los Angeles or San Francisco (central Pacific hub)'
    ],
    link: '/groups/group-d'
  },
  {
    id: 'E',
    name: 'Group E – Central & East Mix',
    cityCluster: [
      { name: 'Philadelphia', url: '/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide' },
      { name: 'Houston', url: '/world-cup-2026-host-cities/houston-world-cup-2026-guide' },
      { name: 'Kansas City', url: '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide' },
      { name: 'New York', url: '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide' },
      { name: 'Toronto', url: '/world-cup-2026-host-cities/toronto-world-cup-2026-guide' }
    ],
    description: 'A balanced spread with flexible base camp options depending on match intensity. Expect moderate travel times with some longer connections to Houston.',
    keyStadiums: [
      { name: 'Lincoln Financial Field', url: '/world-cup-2026-stadiums/lincoln-financial-field-guide' },
      { name: 'NRG Stadium', url: '/world-cup-2026-stadiums/nrg-stadium-guide' },
      { name: 'Arrowhead Stadium', url: '/world-cup-2026-stadiums/arrowhead-stadium-guide' },
      { name: 'MetLife Stadium', url: '/world-cup-2026-stadiums/metlife-stadium-guide' },
      { name: 'BMO Field', url: '/world-cup-2026-stadiums/bmo-field-guide' }
    ],
    highlights: [
      '🛫 Average flight time: 3 hours',
      '💵 Estimated base cost: $1,100-1,500 for all group matches',
      '⭐ Best base camp: Houston or Kansas City (lower accommodation costs)'
    ],
    link: '/groups/group-e'
  },
  {
    id: 'F',
    name: 'Group F – The Tex-Mex Route',
    cityCluster: [
      { name: 'Dallas', url: '/world-cup-2026-host-cities/dallas-world-cup-2026-guide' },
      { name: 'Monterrey', url: '/world-cup-2026-host-cities/monterrey-world-cup-2026-guide' },
      { name: 'Houston', url: '/world-cup-2026-host-cities/houston-world-cup-2026-guide' },
      { name: 'Kansas City', url: '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide' }
    ],
    description: 'Fast transfers and low-cost flight corridors across Texas and Northern Mexico. This group offers excellent value for budget-conscious fans with affordable hotels and short flights.',
    keyStadiums: [
      { name: 'AT&T Stadium', url: '/world-cup-2026-stadiums/att-stadium-guide' },
      { name: 'Estadio BBVA', url: '/world-cup-2026-stadiums/estadio-bbva-guide' },
      { name: 'NRG Stadium', url: '/world-cup-2026-stadiums/nrg-stadium-guide' },
      { name: 'Arrowhead Stadium', url: '/world-cup-2026-stadiums/arrowhead-stadium-guide' }
    ],
    highlights: [
      '🛫 Average flight time: 1.5 hours (Texas routes) / 2 hours (Mexico)',
      '💵 Estimated base cost: $900-1,300 for all group matches',
      '⭐ Best base camp: Dallas or Houston (major hub airports, affordable hotels)'
    ],
    link: '/groups/group-f'
  },
  {
    id: 'G',
    name: 'Group G – Cascadia & SoFi Circuit',
    cityCluster: [
      { name: 'Seattle', url: '/world-cup-2026-host-cities/seattle-world-cup-2026-guide' },
      { name: 'Vancouver', url: '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide' },
      { name: 'Los Angeles', url: '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide' }
    ],
    description: 'Short hops with some of the easiest travel distances in the tournament. Three cities, minimal stress, and strong public transportation options between Seattle and Vancouver.',
    keyStadiums: [
      { name: 'Lumen Field', url: '/world-cup-2026-stadiums/lumen-field-guide' },
      { name: 'BC Place', url: '/world-cup-2026-stadiums/bc-place-stadium-guide' },
      { name: 'SoFi Stadium', url: '/world-cup-2026-stadiums/sofi-stadium-guide' }
    ],
    highlights: [
      '🛫 Average flight time: 2 hours',
      '💵 Estimated base cost: $1,100-1,500 for all group matches',
      '⭐ Best base camp: Seattle (central location with easy access north and south)'
    ],
    link: '/2026-world-cup-group-g-travel-guide'
  },
  {
    id: 'H',
    name: 'Group H – Southern Heat Trail',
    cityCluster: [
      { name: 'Miami', url: '/world-cup-2026-host-cities/miami-world-cup-2026-guide' },
      { name: 'Atlanta', url: '/world-cup-2026-host-cities/atlanta-world-cup-2026-guide' },
      { name: 'Houston', url: '/world-cup-2026-host-cities/houston-world-cup-2026-guide' },
      { name: 'Guadalajara', url: '/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide' }
    ],
    description: 'Hot weather, high energy, and long-haul connections—but affordable hotel zones. This group requires strategic planning due to the Miami-Guadalajara distance.',
    keyStadiums: [
      { name: 'Hard Rock Stadium', url: '/world-cup-2026-stadiums/hard-rock-stadium-guide' },
      { name: 'Mercedes-Benz Stadium', url: '/world-cup-2026-stadiums/mercedes-benz-stadium-guide' },
      { name: 'NRG Stadium', url: '/world-cup-2026-stadiums/nrg-stadium-guide' },
      { name: 'Estadio Akron', url: '/world-cup-2026-stadiums/estadio-akron-guide' }
    ],
    highlights: [
      '🛫 Average flight time: 3 hours (US routes) / 4 hours (Mexico connection)',
      '💵 Estimated base cost: $1,200-1,600 for all group matches',
      '⭐ Best base camp: Houston (central between all four cities)'
    ],
    link: '/2026-world-cup-group-h-travel-guide'
  },
  {
    id: 'I',
    name: 'Group I – Northeast Shuttle Route',
    cityCluster: [
      { name: 'Boston', url: '/world-cup-2026-host-cities/boston-world-cup-2026-guide' },
      { name: 'New York City', url: '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide' },
      { name: 'Philadelphia', url: '/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide' },
      { name: 'Toronto', url: '/world-cup-2026-host-cities/toronto-world-cup-2026-guide' }
    ],
    description: 'Excellent rail, bus, and multi-airport combinations with minimal travel friction. This is the only group where you could realistically use Amtrak for some legs instead of flying.',
    keyStadiums: [
      { name: 'Gillette Stadium', url: '/world-cup-2026-stadiums/gillette-stadium-guide' },
      { name: 'MetLife Stadium', url: '/world-cup-2026-stadiums/metlife-stadium-guide' },
      { name: 'Lincoln Financial Field', url: '/world-cup-2026-stadiums/lincoln-financial-field-guide' },
      { name: 'BMO Field', url: '/world-cup-2026-stadiums/bmo-field-guide' }
    ],
    highlights: [
      '🛫 Average flight time: 1.5 hours',
      '🚆 Alternative: Amtrak Northeast Corridor (Boston-NYC-Philly)',
      '💵 Estimated base cost: $1,300-1,700 for all group matches',
      '⭐ Best base camp: New York City (ultimate connectivity)'
    ],
    link: '/2026-world-cup-group-i-travel-guide'
  },
  {
    id: 'J',
    name: 'Group J – The Long Haul Group',
    cityCluster: [
      { name: 'Kansas City', url: '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide' },
      { name: 'Dallas', url: '/world-cup-2026-host-cities/dallas-world-cup-2026-guide' },
      { name: 'San Francisco', url: '/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide' },
      { name: 'Atlanta', url: '/world-cup-2026-host-cities/atlanta-world-cup-2026-guide' }
    ],
    description: 'Expect larger distances—best suited to fans who plan efficiently and book early. This group spans the entire continental US and requires careful flight scheduling.',
    keyStadiums: [
      { name: 'Arrowhead Stadium', url: '/world-cup-2026-stadiums/arrowhead-stadium-guide' },
      { name: 'AT&T Stadium', url: '/world-cup-2026-stadiums/att-stadium-guide' },
      { name: "Levi's Stadium", url: '/world-cup-2026-stadiums/levis-stadium-guide' },
      { name: 'Mercedes-Benz Stadium', url: '/world-cup-2026-stadiums/mercedes-benz-stadium-guide' }
    ],
    highlights: [
      '🛫 Average flight time: 3.5 hours',
      '💵 Estimated base cost: $1,400-1,900 for all group matches',
      '⭐ Best base camp: Dallas (central hub, lower hotel costs than SF or Atlanta)'
    ],
    link: '/2026-world-cup-group-j-travel-guide'
  },
  {
    id: 'K',
    name: 'Group K – Southern Scatter Path',
    cityCluster: [
      { name: 'Houston', url: '/world-cup-2026-host-cities/houston-world-cup-2026-guide' },
      { name: 'Mexico City', url: '/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide' },
      { name: 'Miami', url: '/world-cup-2026-host-cities/miami-world-cup-2026-guide' },
      { name: 'Atlanta', url: '/world-cup-2026-host-cities/atlanta-world-cup-2026-guide' }
    ],
    description: 'South-focused travel with two major mega-hubs and strong hotel supply. The Houston-Mexico City connection is well-served with multiple daily flights.',
    keyStadiums: [
      { name: 'NRG Stadium', url: '/world-cup-2026-stadiums/nrg-stadium-guide' },
      { name: 'Estadio Azteca', url: '/world-cup-2026-stadiums/estadio-azteca-guide' },
      { name: 'Hard Rock Stadium', url: '/world-cup-2026-stadiums/hard-rock-stadium-guide' },
      { name: 'Mercedes-Benz Stadium', url: '/world-cup-2026-stadiums/mercedes-benz-stadium-guide' }
    ],
    highlights: [
      '🛫 Average flight time: 2.5 hours',
      '💵 Estimated base cost: $1,100-1,500 for all group matches',
      '⭐ Best base camp: Houston or Atlanta (central location, good hotel availability)'
    ],
    link: '/groups/group-k'
  },
  {
    id: 'L',
    name: 'Group L – The Major Metros Pathway',
    cityCluster: [
      { name: 'Toronto', url: '/world-cup-2026-host-cities/toronto-world-cup-2026-guide' },
      { name: 'Dallas', url: '/world-cup-2026-host-cities/dallas-world-cup-2026-guide' },
      { name: 'New York City', url: '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide' },
      { name: 'Boston', url: '/world-cup-2026-host-cities/boston-world-cup-2026-guide' }
    ],
    description: 'Big cities, big energy, and a premium-priced but smooth logistics cluster. Expect higher accommodation costs but flawless infrastructure and connectivity.',
    keyStadiums: [
      { name: 'BMO Field', url: '/world-cup-2026-stadiums/bmo-field-guide' },
      { name: 'AT&T Stadium', url: '/world-cup-2026-stadiums/att-stadium-guide' },
      { name: 'MetLife Stadium', url: '/world-cup-2026-stadiums/metlife-stadium-guide' },
      { name: 'Gillette Stadium', url: '/world-cup-2026-stadiums/gillette-stadium-guide' }
    ],
    highlights: [
      '🛫 Average flight time: 2.5 hours',
      '💵 Estimated base cost: $1,500-2,000 for all group matches',
      '⭐ Best base camp: New York City or Dallas (flight hub advantage)'
    ],
    link: '/groups/group-l'
  }
];

const cityLinks = [
  { name: 'Mexico City', url: '/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide' },
  { name: 'Guadalajara', url: '/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide' },
  { name: 'Monterrey', url: '/world-cup-2026-host-cities/monterrey-world-cup-2026-guide' },
  { name: 'Atlanta', url: '/world-cup-2026-host-cities/atlanta-world-cup-2026-guide' },
  { name: 'Vancouver', url: '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide' },
  { name: 'Seattle', url: '/world-cup-2026-host-cities/seattle-world-cup-2026-guide' },
  { name: 'San Francisco', url: '/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide' },
  { name: 'Toronto', url: '/world-cup-2026-host-cities/toronto-world-cup-2026-guide' },
  { name: 'Boston', url: '/world-cup-2026-host-cities/boston-world-cup-2026-guide' },
  { name: 'New York/New Jersey', url: '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide' },
  { name: 'Miami', url: '/world-cup-2026-host-cities/miami-world-cup-2026-guide' },
  { name: 'Los Angeles', url: '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide' },
  { name: 'Houston', url: '/world-cup-2026-host-cities/houston-world-cup-2026-guide' },
  { name: 'Dallas', url: '/world-cup-2026-host-cities/dallas-world-cup-2026-guide' },
  { name: 'Kansas City', url: '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide' },
  { name: 'Philadelphia', url: '/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide' }
];

const stadiumLinks = [
  { name: 'Estadio Azteca', url: '/world-cup-2026-stadiums/estadio-azteca-guide' },
  { name: 'Estadio Akron', url: '/world-cup-2026-stadiums/estadio-akron-guide' },
  { name: 'Estadio BBVA', url: '/world-cup-2026-stadiums/estadio-bbva-guide' },
  { name: 'Mercedes-Benz Stadium', url: '/world-cup-2026-stadiums/mercedes-benz-stadium-guide' },
  { name: 'BC Place', url: '/world-cup-2026-stadiums/bc-place-stadium-guide' },
  { name: 'Lumen Field', url: '/world-cup-2026-stadiums/lumen-field-guide' },
  { name: "Levi's Stadium", url: '/world-cup-2026-stadiums/levis-stadium-guide' },
  { name: 'BMO Field', url: '/world-cup-2026-stadiums/bmo-field-guide' },
  { name: 'Gillette Stadium', url: '/world-cup-2026-stadiums/gillette-stadium-guide' },
  { name: 'MetLife Stadium', url: '/world-cup-2026-stadiums/metlife-stadium-guide' },
  { name: 'Hard Rock Stadium', url: '/world-cup-2026-stadiums/hard-rock-stadium-guide' },
  { name: 'SoFi Stadium', url: '/world-cup-2026-stadiums/sofi-stadium-guide' },
  { name: 'NRG Stadium', url: '/world-cup-2026-stadiums/nrg-stadium-guide' },
  { name: 'AT&T Stadium', url: '/world-cup-2026-stadiums/att-stadium-guide' },
  { name: 'Arrowhead Stadium', url: '/world-cup-2026-stadiums/arrowhead-stadium-guide' },
  { name: 'Lincoln Financial Field', url: '/world-cup-2026-stadiums/lincoln-financial-field-guide' }
];

export default function DrawHubPage() {
  const groupSchemaItems = groupsData.map((group, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": group.name,
    "url": `https://stadiumport.com${group.link}`
  }));

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://stadiumport.com/2026-world-cup-draw-travel-hub",
        "url": "https://stadiumport.com/2026-world-cup-draw-travel-hub",
        "name": "World Cup 2026 Draw Results & Group Stage Travel Guides",
        "headline": "World Cup 2026 Draw Results: Complete Travel & Logistics Hub",
        "description": "The definitive guide to the FIFA World Cup 2026 draw. Explore travel itineraries for all 12 groups, host city logistics, flight tips, and accommodation strategies for fans.",
        "datePublished": "2025-12-05",
        "dateModified": "2025-12-05",
        "publisher": {
          "@type": "Organization",
          "name": "Stadiumport",
          "logo": {
            "@type": "ImageObject",
            "url": "https://stadiumport.com/logo.png"
          }
        },
        "isPartOf": {
          "@id": "https://stadiumport.com/#website"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When is the World Cup 2026 Draw?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The official draw will take place on December 5, 2025."
            }
          },
          {
            "@type": "Question",
            "name": "How many groups are in the 2026 World Cup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There are 12 groups (A through L), each containing 4 teams, for a total of 48 participating nations."
            }
          },
          {
            "@type": "Question",
            "name": "Can I buy tickets before the draw?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can apply for team-specific tickets (TSTs) during the initial ballot, but specific match locations won't be confirmed until the draw is complete."
            }
          },
          {
            "@type": "Question",
            "name": "Which group has the easiest travel schedule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Group A (West Coast) and Group C (East Coast) generally offer the most compact travel schedules with short flights or train connections."
            }
          },
          {
            "@type": "Question",
            "name": "Which group has the worst travel schedule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Group I (The Gulf Coast Scramble) involves longer flights and humid summer weather, making logistics more challenging."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to attend World Cup 2026 group stage matches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Budget estimates per person for 3 group matches (flights + hotels + tickets) range from $2,000-$3,000 for budget travelers, $4,000-$6,000 for mid-range, and $8,000-$15,000+ for premium experiences."
            }
          }
        ]
      },
      {
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
            "name": "Draw Travel Hub",
            "item": "https://stadiumport.com/2026-world-cup-draw-travel-hub"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "World Cup 2026 Groups",
        "itemListElement": groupSchemaItems
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>World Cup 2026 Draw: Groups, Schedule & Travel Planning Hub | Stadiumport</title>
        <meta name="description" content="Complete guide to FIFA World Cup 2026 Draw results. Detailed travel itineraries for all 12 groups (A-L), host city logistics, flight tips, and accommodation strategies for fans." />
        <meta name="keywords" content="World Cup 2026 draw results, FIFA World Cup 2026 groups, World Cup 2026 travel guide, WC26 group stage logistics, Group A to Group L travel, host city flights, World Cup hotel booking, World Cup 2026 tickets price, World Cup 2026 cities map, best base camp world cup 2026, USA Canada Mexico World Cup schedule" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="World Cup 2026 Draw: Groups, Schedule & Travel Planning Hub" />
        <meta property="og:description" content="Complete guide to FIFA World Cup 2026 Draw results. Detailed travel itineraries for all 12 groups (A-L), host city logistics, flight tips, and accommodation strategies for fans." />
        <meta property="og:url" content="https://stadiumport.com/2026-world-cup-draw-travel-hub" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://stadiumport.com/images/draw-hub-og.jpg" />
        <meta property="og:site_name" content="Stadiumport" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="World Cup 2026 Draw: Groups, Schedule & Travel Planning Hub" />
        <meta name="twitter:description" content="Complete guide to FIFA World Cup 2026 Draw results. Detailed travel itineraries for all 12 groups (A-L), host city logistics, flight tips, and accommodation strategies for fans." />
        <meta name="twitter:image" content="https://stadiumport.com/images/draw-hub-og.jpg" />

        <link rel="canonical" href="https://stadiumport.com/2026-world-cup-draw-travel-hub" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Header />
      
      <div className="min-h-screen bg-slate-50 dark:bg-navy-950 font-sans text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#01b47d]/30">
        
        {/* Hero Section */}
        <div className="relative w-full bg-[#0f172a] dark:bg-black overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#01b47d,transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
            </div>

            <div className="relative max-w-[1440px] mx-auto pt-32 pb-24 px-6 md:px-12 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/5 border border-white/10 text-[#01b47d] font-bold text-sm uppercase tracking-widest mb-8 backdrop-blur-md"
                >
                    🏆 Draw Results & Travel Guides
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-[1.1]"
                >
                    The Official Draw Is Complete. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-[#34D399]">Your Travel Strategy Starts Now.</span>
                </motion.h1>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-12">
                        The FIFA World Cup 2026 draw has allocated all 48 teams into 12 groups, and every group now has a defined travel footprint across North America.
                    </p>
                    
                    {/* Key Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Draw Date</p>
                            <p className="font-bold text-xl text-white">December 5, 2025</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Location</p>
                            <p className="font-bold text-xl text-white">Washington, D.C</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Dates</p>
                            <p className="font-bold text-xl text-white">June 11 - July 19, 2026</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

        <main className="max-w-[1440px] mx-auto px-6 md:px-12 -mt-12 relative z-10">
          
          {/* Wallchart Figure */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <figure className="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-black/50">
              <div className="relative w-full aspect-video max-h-[600px] bg-slate-100 dark:bg-slate-900">
                <img
                  src="/images/Hub Pages/FIFA-World-Cup-26-qualified-teams-wallchart-graphic.webp"
                  alt="FIFA World Cup 26 Qualified Teams Wallchart – Stadiumport"
                  className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute inset-0 border-4 border-white/10 rounded-[2rem] pointer-events-none"></div>
            </figure>
          </motion.div>

          {/* Intro Text */}
          <div className="max-w-4xl mx-auto text-center mb-32">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-800 dark:text-slate-200">
              This page transforms the draw results into <strong className="text-[#01b47d]">actionable travel intelligence</strong>—showing you exactly where to fly, where to stay, how to move between host cities, and how to avoid the expensive, chaotic mistakes most fans make.
            </p>
            <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Stadiumport doesn't just track the matches. We track the logistics that get you to the matches. Use this hub as your master dashboard to explore every group's city cluster, recommended base camps, flight paths, and ideal travel routes.
            </p>
          </div>

          {/* What You Need to Know */}
          <section className="mb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-200 dark:border-slate-800 pb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Draw Essentials
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mt-4 md:mt-0">
                    Understanding the mechanics of the 48-team format and how it impacts your travel plans.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Draw Structure Card */}
                <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-xl shadow-slate-100/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#01b47d]/10 flex items-center justify-center text-[#01b47d]">
                            <TrendingUp size={20} />
                        </div>
                        How the Draw Works
                    </h3>
                    <div className="space-y-6">
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            The 2026 FIFA World Cup draw determines which teams play in which groups and host cities. Unlike previous tournaments, this expanded 48-team format creates unique travel challenges.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <span className="w-6 h-6 rounded-full bg-[#01b47d] text-white flex items-center justify-center text-xs font-bold mt-1">1</span>
                                <span className="text-slate-700 dark:text-slate-200 text-lg"><strong>48 teams</strong> divided into <strong>12 groups</strong> of 4 teams each.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-6 h-6 rounded-full bg-[#01b47d] text-white flex items-center justify-center text-xs font-bold mt-1">2</span>
                                <span className="text-slate-700 dark:text-slate-200 text-lg"><strong>Geographic separation</strong> ensures diversity in each group.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-6 h-6 rounded-full bg-[#01b47d] text-white flex items-center justify-center text-xs font-bold mt-1">3</span>
                                <span className="text-slate-700 dark:text-slate-200 text-lg"><strong>Host nation advantage:</strong> USA, Canada, and Mexico top seeded.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Logistics Analysis Card */}
                <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-xl shadow-slate-100/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                     <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                            <MapPin size={20} />
                        </div>
                        Travel Logistics
                    </h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-lg font-bold text-red-600 dark:text-red-400 mb-4 uppercase tracking-wide text-sm">Challenging Groups</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <AlertCircle size={18} className="text-red-500" />
                                    <span>Groups requiring 2,000+ miles of travel between matches</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <AlertCircle size={18} className="text-red-500" />
                                    <span>Groups mixing Pacific Coast + Gulf Coast cities</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-4 uppercase tracking-wide text-sm">Optimal Groups</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <Check size={18} className="text-emerald-500" />
                                    <span>Concentrated in single regions (Northeast, Pacific NW)</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <Check size={18} className="text-emerald-500" />
                                    <span>Short travel times (under 3 hours between matches)</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-sm text-slate-400 italic border-t border-slate-100 dark:border-slate-800 pt-4">
                            *Full group-by-group analysis and team allocations will be updated immediately after the December 5, 2025 draw.*
                        </p>
                    </div>
                </div>
            </div>
          </section>

          {/* Group Routes Section */}
          <section className="mb-32">
             <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
                    Group Travel Hubs
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
                    Choose your group to unlock optimized travel routes, base camp recommendations, and logistics strategies.
                </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {groupsData.map((group) => (
                <motion.div 
                    key={group.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-lg shadow-slate-100/50 dark:shadow-none border border-slate-100 dark:border-slate-800 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#01b47d] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl font-bold text-slate-100 dark:text-slate-800 group-hover:text-[#01b47d]/10 transition-colors duration-300">
                        {group.id}
                    </span>
                    <Link 
                      to={group.link}
                      className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-[#01b47d] group-hover:text-white transition-all duration-300"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#01b47d] transition-colors">
                    {group.name}
                  </h3>

                  <div className="space-y-6 mb-8">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      {group.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        {group.cityCluster.map((city, idx) => (
                            <span key={idx} className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                {city.name}
                            </span>
                        ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-800 pt-6 mt-auto">
                    <div className="space-y-3">
                         <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <Plane className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" />
                            <span>{group.highlights[0].split(':')[1]}</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <Hotel className="w-4 h-4 text-[#01b47d] mt-0.5 shrink-0" />
                            <span>{group.highlights[2].split(':')[1]}</span>
                        </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Planning Timeline Section */}
          <section className="mb-32 bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white">
                Your Strategic Timeline
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
              
              <div className="space-y-16">
                  {[
                      { title: "December 2025", subtitle: "The Draw", items: ["Check group assignment", "Identify base camp", "Book refundable hotels"], color: "bg-[#01b47d]" },
                      { title: "January 2026", subtitle: "Flight Release", text: "Flight schedules open ~11 months in advance. Set price alerts immediately.", color: "bg-blue-500" },
                      { title: "February 2026", subtitle: "Ticket Allocation", text: "FIFA ticket lottery results are announced. Confirm your specific match dates.", color: "bg-purple-500" },
                      { title: "March–April 2026", subtitle: "The Logistics Gap", text: "Prices spike. Book inter-city travel (trains/flights) now if you haven't.", color: "bg-orange-500" },
                      { title: "June 2026", subtitle: "Tournament Starts", text: "Arrive in your base camp city 48 hours before the first match to acclimate.", color: "bg-slate-800 dark:bg-white" }
                  ].map((item, idx) => (
                      <div key={idx} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 shadow-lg">
                                <div className={`w-6 h-6 rounded-full ${item.color}`} />
                          </div>
                          <div className="md:w-1/2 pl-20 md:pl-0 md:px-12">
                              <div className={`bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 ${idx % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 ${item.color}`}>{item.title}</span>
                                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.subtitle}</h3>
                                  {item.items ? (
                                      <ul className={`space-y-2 text-slate-600 dark:text-slate-400 ${idx % 2 !== 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                          {item.items.map((li, i) => <li key={i} className="flex items-center gap-2">{idx % 2 === 0 ? <Check size={14} className="text-[#01b47d]" /> : null}{li}{idx % 2 !== 0 ? <Check size={14} className="text-[#01b47d] hidden md:block" /> : null}</li>)}
                                      </ul>
                                  ) : (
                                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
                                  )}
                              </div>
                          </div>
                          <div className="md:w-1/2" />
                      </div>
                  ))}
              </div>
            </div>
          </section>

          {/* Why Smart Fans Use Stadiumport */}
          <section className="mb-32 relative overflow-hidden rounded-[3rem] bg-slate-900 text-white p-12 md:p-24 text-center">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#01b47d] opacity-20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600 opacity-20 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12">Why Smart Fans Use Stadiumport</h2>
                <p className="text-xl md:text-2xl text-slate-300 mb-16 font-light leading-relaxed">
                  Most fans book a round-trip flight to one city and get stuck paying $500+ for last-minute connection flights.
                </p>
                
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-14">
                    <h3 className="text-2xl font-bold mb-8">The Strategy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-full bg-[#01b47d] flex items-center justify-center shrink-0 text-white font-bold text-xl">1</div>
                            <div>
                                <p className="text-lg text-slate-200 leading-relaxed">We identify <strong>regional hubs</strong> (like Dallas or Atlanta) where you can stay for 2 weeks.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-full bg-[#01b47d] flex items-center justify-center shrink-0 text-white font-bold text-xl">2</div>
                            <div>
                                <p className="text-lg text-slate-200 leading-relaxed">Reach 3-4 different stadiums with short, cheap flights or trains, saving ~30% on travel costs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-32 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { q: "When is the World Cup 2026 Draw?", a: "The official draw will take place on December 5, 2025." },
                    { q: "How many groups are in the 2026 World Cup?", a: "There are 12 groups (A through L), each containing 4 teams." },
                    { q: "Can I buy tickets before the draw?", a: "Yes, you can apply for team-specific tickets (TSTs), but locations aren't confirmed until the draw." },
                    { q: "Which group has the easiest travel schedule?", a: "Group A (West Coast) and Group C (East Coast) generally offer the most compact travel schedules." },
                    { q: "Which group has the worst travel schedule?", a: "Group I (The Gulf Coast Scramble) involves longer flights and humid summer weather." },
                    { q: "How much does it cost to attend?", a: "Budget $2,000-$3,000 for budget trips, up to $15,000+ for premium experiences per person." }
                ].map((faq, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{faq.q}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                    </div>
                ))}
            </div>
          </section>

          {/* Start Booking Section */}
          <section className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Start Your Journey</h2>
                <p className="text-xl text-slate-600 dark:text-slate-400">The second the draw is final, inventory disappears. Be ahead.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {[
                    { icon: Plane, title: "Flights", desc: "Compare flights to all 16 host cities. Book multi-city routes early.", action: "Search Flights", color: "bg-blue-500", textColor: "text-blue-500" },
                    { icon: Hotel, title: "Hotels", desc: "Find accommodation in strategic zones near stadiums but outside tourist traps.", action: "Find Hotels", color: "bg-[#01b47d]", textColor: "text-[#01b47d]" },
                    { icon: Shield, title: "Hospitality", desc: "Official packages guaranteeing match tickets with hotels and premium service.", action: "View Packages", color: "bg-purple-500", textColor: "text-purple-500" },
                    { icon: TrendingUp, title: "Transport", desc: "Rental cars and ground transport for regional travel clusters.", action: "Compare Rentals", color: "bg-orange-500", textColor: "text-orange-500" }
                ].map((card, idx) => (
                    <div key={idx} className="group bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-2xl ${card.color} bg-opacity-10 flex items-center justify-center mb-6 ${card.textColor} group-hover:scale-110 transition-transform`}>
                            <card.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{card.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{card.desc}</p>
                        <button className="group/btn px-6 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-transparent hover:border-[#01b47d]/30 text-slate-900 dark:text-white font-bold text-sm hover:bg-white dark:hover:bg-slate-700 transition-all w-full flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                            {card.action}
                            <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 text-[#01b47d]" />
                        </button>
                    </div>
                ))}
            </div>
          </section>

          {/* Essential Reading & Links */}
          <div className="mb-32 border-t border-slate-200 dark:border-slate-800 pt-24">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <MapPin className="text-[#01b47d]" /> Host City Guides
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {cityLinks.map((city) => (
                            <Link key={city.name} to={city.url} className="text-slate-600 dark:text-slate-400 hover:text-[#01b47d] transition-colors text-sm py-1 block">
                                {city.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Hotel className="text-purple-500" /> Stadium Guides
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {stadiumLinks.map((stadium) => (
                            <Link key={stadium.name} to={stadium.url} className="text-slate-600 dark:text-slate-400 hover:text-purple-500 transition-colors text-sm py-1 block">
                                {stadium.name}
                            </Link>
                        ))}
                    </div>
                </div>
             </div>
          </div>

          {/* Final Checklist */}
          <section className="mb-24 bg-[#01b47d] rounded-[3rem] p-12 md:p-24 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready for Kickoff?</h2>
            <p className="text-xl text-emerald-50 mb-12 max-w-2xl mx-auto">
                Double check your travel requirements, visa status, and ticket allocations before you fly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link to="/world-cup-2026-travel-tips" className="bg-white text-[#01b47d] px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors">
                    View Travel Checklist
                </Link>
            </div>
          </section>

          <div className="mb-16 text-center text-sm text-slate-500 dark:text-slate-400 space-y-2">
            <p><strong>Last Updated:</strong> December 5, 2025</p>
            <p className="italic">Stadiumport is an independent travel guide and is not affiliated with FIFA.</p>
          </div>

        </main>
      </div>
      <Footer />
    </>
  );
}
