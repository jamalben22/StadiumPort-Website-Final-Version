import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { MapPin, Plane, ArrowRight, Search, Shield, AlertCircle, Clock, TrendingUp, Hotel, BookOpen, Check } from 'lucide-react';

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
    link: '/groups/group-g'
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
    link: '/groups/group-h'
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
    link: '/groups/group-i'
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
    link: '/groups/group-j'
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
      
      <div className="min-h-screen bg-white dark:bg-navy-900 font-sans text-[#1D1D1F] dark:text-[#F5F5F7] overflow-x-hidden selection:bg-[#01b47d]/30">
        
        <main className="pt-28 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto">
          
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#01b47d]/10 dark:bg-[#008f63]/40 text-[#008f63] dark:text-[#01b47d] font-bold border border-[#01b47d]/20 dark:border-[#008f63] mb-8">
              🏆 DRAW RESULTS & TRAVEL GUIDES
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400">
              The Official Draw Is Complete. <br />
              Your Travel Strategy Starts Now.
            </h1>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 max-w-4xl mx-auto">
              <p>
                The FIFA World Cup 2026 draw has allocated all 48 teams into 12 groups, and every group now has a defined travel footprint across North America.
              </p>
              <p>
                This page transforms the draw results into <strong>actionable travel intelligence</strong>—showing you exactly where to fly, where to stay, how to move between host cities, and how to avoid the expensive, chaotic mistakes most fans make.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
                  <p className="text-sm text-slate-500 dark:text-slate-400 uppercase font-bold mb-1">Draw Date</p>
                  <p className="font-bold text-lg">December 5, 2025</p>
                </div>
                <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
                  <p className="text-sm text-slate-500 dark:text-slate-400 uppercase font-bold mb-1">Draw Location</p>
                  <p className="font-bold text-lg">To be announced by FIFA</p>
                </div>
                <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
                  <p className="text-sm text-slate-500 dark:text-slate-400 uppercase font-bold mb-1">Tournament Dates</p>
                  <p className="font-bold text-lg">June 11 - July 19, 2026</p>
                </div>
              </div>

              
            </div>
          </div>

          {/* Wallchart Figure */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <figure className="group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-2xl border border-white/90 dark:border-slate-700/60 shadow-2xl shadow-slate-500/20 dark:shadow-navy-500/20 hover:shadow-3xl hover:shadow-[#01b47d]/30 dark:hover:shadow-[#01b47d]/30 transition-all duration-700 transform-gpu hover:-translate-y-1">
              <div className="relative w-full aspect-video max-h-[420px] sm:max-h-[520px] lg:max-h-[560px]">
                <img
                  src="/images/Hub Pages/FIFA-World-Cup-26-qualified-teams-wallchart-graphic.webp"
                  alt="FIFA World Cup 26 Qualified Teams Wallchart – Stadiumport"
                  className="object-contain w-full h-full transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 via-transparent to-transparent dark:from-black/10 group-hover:from-black/10 group-hover:via-transparent transition-all duration-700"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#01b47d]/5 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#01b47d]/5 via-transparent to-transparent"></div>
                </div>
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-tl-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-tl from-white/20 to-transparent rounded-br-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#008f63]/20 dark:group-hover:border-[#008f63]/30 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
              <div className="absolute inset-0 rounded-3xl shadow-inner shadow-white/20 dark:shadow-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </figure>
          </div>

          <div className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 mb-12">
            <p>
              Stadiumport doesn't just track the matches. We track the logistics that get you to the matches. Use this hub as your master dashboard to explore every group's city cluster, recommended base camps, flight paths, and ideal travel routes.
            </p>
          </div>

          <div className="my-12 border-t border-slate-200 dark:border-slate-800" />

          {/* What You Need to Know */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">🏆 2026 FIFA World Cup Draw: What You Need to Know</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">How the World Cup 2026 Draw Works</h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  The 2026 FIFA World Cup draw determines which teams play in which groups and host cities. Unlike previous tournaments, this expanded 48-team format creates unique travel challenges and opportunities:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
                    <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Draw Structure</h4>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#01b47d] flex-shrink-0" />
                        <span><strong>48 teams</strong> divided into <strong>12 groups</strong> of 4 teams each</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#01b47d] flex-shrink-0" />
                        <span><strong>4 pots</strong> based on FIFA rankings and qualification performance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#01b47d] flex-shrink-0" />
                        <span><strong>Geographic separation rules</strong> prevent multiple teams from the same confederation in one group (with exceptions for UEFA)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#01b47d] flex-shrink-0" />
                        <span><strong>Host nation advantage:</strong> USA, Canada, and Mexico received top seeding</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
                    <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">What Makes 2026 Different</h4>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#01b47d] flex-shrink-0" />
                        <span>First 48-team World Cup in history</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#01b47d] flex-shrink-0" />
                        <span>Matches spread across <strong>3 countries</strong> and <strong>16 cities</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#01b47d] flex-shrink-0" />
                        <span>Group stage spans <strong>5,000+ miles</strong> from Vancouver to Miami</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#01b47d] flex-shrink-0" />
                        <span>Each group assigned to a specific <strong>travel corridor</strong> of 3-4 host cities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Understanding the Groups of Death vs Easy Groups</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-red-600 dark:text-red-400 mb-3">Hardest Travel Groups (Logistically)</h4>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500">•</span>
                        <span>Groups requiring 2,000+ miles of travel between matches</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500">•</span>
                        <span>Groups mixing Pacific Coast + Gulf Coast cities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500">•</span>
                        <span>Groups with limited direct flight connections</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-green-600 dark:text-green-400 mb-3">Easiest Travel Groups</h4>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="text-green-500">•</span>
                        <span>Concentrated in single regions (Northeast Corridor, Pacific Northwest)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500">•</span>
                        <span>Multiple daily flights between host cities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500">•</span>
                        <span>Short travel times (under 3 hours between matches)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-slate-500 dark:text-slate-400 italic">
                  *Full group-by-group analysis and team allocations will be updated immediately after the December 5, 2025 draw.*
                </p>
              </div>
            </div>
          </section>

          <div className="my-12 border-t border-slate-200 dark:border-slate-800" />

          {/* Group Routes Section */}
          <section className="mb-16">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Group to Unlock Optimized Travel Routes</h2>
              
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <p className="font-bold text-slate-900 dark:text-white mb-4">Each group page includes:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">✈️ Base camp city recommendations</li>
                  <li className="flex items-center gap-2">🏨 Closest airports & cheapest flight paths</li>
                  <li className="flex items-center gap-2">📏 Distance and travel time between stadiums</li>
                  <li className="flex items-center gap-2">🗺️ Smart routing based on your team's likely knockout path</li>
                  <li className="flex items-center gap-2">💰 Hotel zones with availability + lower pricing</li>
                  <li className="flex items-center gap-2">🔗 Internal links to stadium & host city guides</li>
                </ul>
              </div>
              
              <p className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Click your group to begin:</p>
            </div>

            <div className="space-y-12">
              {groupsData.map((group) => (
                <div key={group.id} className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/60 dark:border-slate-800/60 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                      {group.name}
                    </h3>
                    {/* Removed legacy solid button; Apple-style CTA preserved below */}
                  </div>

                  <div className="mb-8">
                    <div className="flex flex-wrap items-baseline gap-2 mb-4">
                      <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">City Cluster:</span>
                      <div className="flex flex-wrap gap-2 text-[#01b47d] dark:text-[#01b47d] font-medium">
                        {group.cityCluster.map((city, idx) => (
                          <React.Fragment key={idx}>
                            <Link to={city.url} className="hover:underline">
                              {city.name}
                            </Link>
                            {idx < group.cityCluster.length - 1 && <span className="text-slate-300 dark:text-slate-700">·</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Key Stadiums</h4>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-slate-700 dark:text-slate-300">
                        {group.keyStadiums.map((stadium, idx) => (
                          <React.Fragment key={idx}>
                            <Link to={stadium.url} className="hover:text-[#008f63] dark:hover:text-[#008f63] transition-colors font-medium">
                              {stadium.name}
                            </Link>
                            {idx < group.keyStadiums.length - 1 && <span className="text-slate-300 dark:text-slate-700">·</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Travel Highlights</h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        {group.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <Link 
                      to={group.link}
                      className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-[#01b47d]/50 dark:border-[#01b47d]/50 text-[#01b47d] dark:text-[#01b47d] font-bold shadow-sm hover:bg-[#008f63] hover:text-white hover:shadow-lg transition-all"
                    >
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      <span>View Complete {group.name.split('–')[0]} Travel Guide</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Planning Timeline Section */}
          <div className="my-12 border-t border-slate-200 dark:border-slate-800" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">🎟️ From Draw Results to Match Day: Your Complete Planning Timeline</h2>
            
            <div className="relative border-l-4 border-[#01b47d]/20 dark:border-[#008f63] ml-4 space-y-10 pl-8 py-4">
              <div className="relative">
                <div className="absolute -left-[42px] top-1 h-6 w-6 rounded-full bg-[#01b47d] border-4 border-white dark:border-[#000000]" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">December 2025 (The Draw)</h3>
                <ul className="space-y-2 text-lg text-slate-700 dark:text-slate-300">
                  <li><strong>Day 1:</strong> Check your team's group assignment.</li>
                  <li><strong>Day 2:</strong> Identify the "base camp" city (the one with the most matches or best flight hub).</li>
                  <li><strong>Day 3:</strong> Book refundable hotels in your base camp city.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[42px] top-1 h-6 w-6 rounded-full bg-[#01b47d] border-4 border-white dark:border-[#000000]" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">January 2026 (Flight Release)</h3>
                <p className="text-lg text-slate-700 dark:text-slate-300">
                  Flight schedules open ~11 months in advance. Set price alerts immediately.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[42px] top-1 h-6 w-6 rounded-full bg-[#01b47d] border-4 border-white dark:border-[#000000]" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">February 2026 (Ticket Allocation)</h3>
                <p className="text-lg text-slate-700 dark:text-slate-300">
                  FIFA ticket lottery results are announced. Confirm your specific match dates.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[42px] top-1 h-6 w-6 rounded-full bg-[#01b47d] border-4 border-white dark:border-[#000000]" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">March–April 2026 (The Logistics Gap)</h3>
                <p className="text-lg text-slate-700 dark:text-slate-300">
                  This is when prices spike. If you haven’t booked inter-city travel (trains/flights), do it now.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[42px] top-1 h-6 w-6 rounded-full bg-[#01b47d] border-4 border-white dark:border-[#000000]" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">June 2026 (Tournament Starts)</h3>
                <p className="text-lg text-slate-700 dark:text-slate-300">
                  Arrive in your base camp city 48 hours before the first match to acclimate.
                </p>
              </div>
            </div>
          </section>

          <div className="my-12 border-t border-slate-200 dark:border-slate-800" />

          {/* Why Smart Fans Use Stadiumport Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">💰 Why Smart Fans Use Stadiumport</h2>
            
            <div className="bg-gradient-to-br from-[#008f63] to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#01b47d]/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl leading-relaxed mb-8 font-medium text-[#01b47d]/10">
                  Most fans book a round-trip flight to one city and get stuck paying $500+ for last-minute connection flights.
                </p>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-white">Stadiumport Strategy:</h3>
                  <ul className="space-y-4 text-lg text-[#01b47d]/5">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>We identify <strong>regional hubs</strong> (like Dallas, Atlanta, or Toronto) where you can stay for 2 weeks and reach 3-4 different stadiums with short, cheap flights or trains.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span><strong>Result:</strong> You save ~30% on travel costs and see more football.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="my-12 border-t border-slate-200 dark:border-slate-800" />

          {/* FAQ Section */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">🔍 World Cup 2026 Draw: Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
                <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Q: When is the World Cup 2026 Draw?</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  A: The official draw will take place on <strong>December 5, 2025</strong>.
                </p>
              </div>

              <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
                <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Q: How many groups are in the 2026 World Cup?</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  A: There are <strong>12 groups (A through L)</strong>, each containing 4 teams.
                </p>
              </div>

              <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
                <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Q: Can I buy tickets before the draw?</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  A: Yes, you can apply for team-specific tickets (TSTs) during the initial ballot, but you won't know the locations until the draw is complete.
                </p>
              </div>

              <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
                <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Q: Which group has the easiest travel schedule?</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  A: <strong>Group A (West Coast)</strong> and <strong>Group C (East Coast)</strong> generally offer the most compact travel schedules with short flights or train connections.
                </p>
              </div>

              <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md md:col-span-2">
                <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Q: Which group has the worst travel schedule?</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  A: <strong>Group I (The Gulf Coast Scramble)</strong> involves longer flights and humid summer weather, making logistics more challenging.
                </p>
              </div>

              <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md md:col-span-2">
                <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Q: How much does it cost to attend World Cup 2026 group stage matches?</h3>
                <div className="text-slate-700 dark:text-slate-300 space-y-2">
                  <p className="font-medium">Budget estimates per person (flights + hotels + tickets for 3 group matches):</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Budget option:</strong> $2,000-3,000 (economy flights, budget hotels, Category 3 tickets)</li>
                    <li><strong>Mid-range:</strong> $4,000-6,000 (direct flights, 3-star hotels, Category 2 tickets)</li>
                    <li><strong>Premium:</strong> $8,000-15,000+ (business class, 4-5 star hotels, Category 1 tickets or hospitality packages)</li>
                  </ul>
                  <p className="text-sm text-slate-500 mt-2">Costs vary significantly based on your home country, group location, and how far in advance you book.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="my-12 border-t border-slate-200 dark:border-slate-800" />

          {/* Start Booking Section */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">🚀 Start Booking Your World Cup 2026 Travel</h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-12">
              The second the draw is final, flights and hotels begin disappearing. Stadiumport makes sure you are ahead—not catching up.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Flights */}
              <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-md flex flex-col">
                <div className="mb-6 bg-[#01b47d]/10 dark:bg-[#008f63]/30 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl">✈️</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Compare Flights to All 16 Host Cities</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
                  Search and compare flights across all major booking platforms. Multi-city routes are essential for group stage travel—book these early as prices rise dramatically closer to the tournament.
                </p>
                <div className="mb-6 p-4 bg-[#01b47d]/5 dark:bg-[#008f63]/20 rounded-xl border border-[#01b47d]/10 dark:border-[#008f63]">
                  <p className="text-sm font-bold text-[#008f63] dark:text-[#01b47d]/20">Pro Tip:</p>
                  <p className="text-sm text-[#008f63] dark:text-[#01b47d]">Book flexible or refundable tickets when possible. If your team doesn't qualify or you don't secure match tickets, you'll want the option to cancel or modify.</p>
                </div>
                <a href="#" className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#01b47d] hover:brightness-110 text-white font-bold transition-colors">
                  Search Flights Now →
                </a>
              </div>

              {/* Hotels */}
              <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-md flex flex-col">
                <div className="mb-6 bg-[#01b47d]/10 dark:bg-[#008f63]/30 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl">🏨</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Hotels Near Every Stadium</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
                  Find accommodation in strategic zones near stadiums but outside the most expensive tourist districts. Our city guides identify the best neighborhoods for World Cup travelers.
                </p>
                <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800">
                  <p className="text-sm font-bold text-amber-800 dark:text-amber-200">Availability Alert:</p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">Hotels within 5 miles of stadiums are already 40-60% booked for June 2026 in cities like Los Angeles, New York, and Miami. Secondary zones still have good inventory.</p>
                </div>
                <a href="#" className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#01b47d] hover:brightness-110 text-white font-bold transition-colors">
                  Search Hotels & Vacation Rentals →
                </a>
              </div>

              {/* Hospitality */}
              <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-md flex flex-col">
                <div className="mb-6 bg-purple-100 dark:bg-purple-900/30 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl">🎟️</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Official FIFA Hospitality Packages</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  FIFA Hospitality packages bundle guaranteed match tickets with hotels and sometimes flights. These premium packages are the only way to guarantee tickets before the public lottery.
                </p>
                <div className="mb-6 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <p><strong>Standard Hospitality:</strong> Category 1 tickets + match day lounge access</p>
                  <p><strong>Premium Hospitality:</strong> VIP seats + pre-match meals + premium lounge</p>
                  <p><strong>Suite Packages:</strong> Private suites + full food & beverage service</p>
                </div>
                <div className="mt-auto">
                <a href="#" className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#01b47d] hover:brightness-110 text-white font-bold transition-colors">
                    View Hospitality Packages →
                  </a>
                </div>
              </div>

              {/* Ground Transport */}
              <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-md flex flex-col">
                <div className="mb-6 bg-orange-100 dark:bg-orange-900/30 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl">🚗</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Ground Transportation & Rentals</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
                  For groups concentrated in nearby cities (like Group G: Seattle-Vancouver-LA), rental cars can be more cost-effective than flying. Book early for tournament rates.
                </p>
                <div className="mt-auto">
                <a href="#" className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#01b47d] hover:brightness-110 text-white font-bold transition-colors">
                    Compare Car Rentals →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Reading Section */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Essential Reading Before You Travel</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link to="/world-cup-2026-travel-tips" className="group bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md hover:shadow-lg transition-all flex items-center gap-4">
                <div className="bg-[#01b47d]/10 dark:bg-[#008f63]/30 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-[#01b47d] dark:text-[#01b47d]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-[#008f63] dark:group-hover:text-[#008f63] transition-colors">Travel Tips Guide</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Safety protocols, airport navigation, transportation options, SIM cards for travelers, currency exchange, and money-saving hacks for all three host countries.</p>
                </div>
              </Link>

              <Link to="/world-cup-2026-host-cities" className="group bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md hover:shadow-lg transition-all flex items-center gap-4">
                <div className="bg-[#01b47d]/10 dark:bg-[#008f63]/30 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-[#01b47d] dark:text-[#01b47d]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-[#008f63] dark:group-hover:text-[#008f63] transition-colors">Host City Guides</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">In-depth destination pages covering where to stay, what to do, local transportation, safety zones, and the best neighborhoods for World Cup visitors.</p>
                </div>
              </Link>

              <Link to="/world-cup-2026-stadiums" className="group bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md hover:shadow-lg transition-all flex items-center gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                  <Hotel className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Stadium Guides</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Premium travel-focused stadium breakdowns including how to get there, where to sit, what to eat, stadium entry procedures, and nearby accommodation.</p>
                </div>
              </Link>

              <Link to="/world-cup-2026-travel-tips" className="group bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md hover:shadow-lg transition-all flex items-center gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl">
                  <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Visa & Border Entry Basics</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Essential documentation requirements for entering the USA, Canada, and Mexico. Processing times, costs, and application procedures by nationality.</p>
                </div>
              </Link>
            </div>
          </div>

          <hr className="border-slate-200 dark:border-slate-800 mb-24" />

          {/* Internal Linking SEO Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-10 text-center">Explore All Host Cities & Stadiums</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Host Cities Column */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-[#01b47d] dark:text-[#01b47d]">
                  <MapPin className="w-5 h-5" />
                  Host City Guides
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {cityLinks.map((city) => (
                    <Link 
                      key={city.name} 
                      to={city.url}
                      className="text-slate-600 dark:text-slate-400 hover:text-[#008f63] dark:hover:text-[#008f63] transition-colors text-sm font-medium"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Stadiums Column */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-purple-600 dark:text-purple-400">
                  <Hotel className="w-5 h-5" />
                  Stadium Guides
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4">
                  {stadiumLinks.map((stadium) => (
                    <Link 
                      key={stadium.name} 
                      to={stadium.url}
                      className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium"
                    >
                      {stadium.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="my-12 border-t border-slate-200 dark:border-slate-800" />

          {/* Final Travel Planning Checklist */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">🎯 Final Travel Planning Checklist</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
              <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-[#01b47d] dark:text-[#01b47d]">6 Months Before Tournament</h3>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Confirm your team qualified</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Review group draw results</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Apply for match tickets through FIFA</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Book refundable flights and hotels</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Apply for required visas/travel authorizations</li>
                  </ul>
                </div>

                <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-[#01b47d] dark:text-[#01b47d]">3 Months Before Tournament</h3>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Confirm ticket allocation from FIFA lottery</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Finalize accommodation (convert to non-refundable for better rates)</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Book ground transportation between cities</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Purchase travel insurance</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Research stadium entry requirements and prohibited items</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-[#01b47d] dark:text-[#01b47d]">1 Month Before Tournament</h3>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Download mobile tickets to FIFA app</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Verify passport expiration dates (must be valid 6 months beyond travel)</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Set up international phone plan or buy local SIM</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Notify bank/credit card of travel to avoid blocked transactions</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Review Stadiumport city and stadium guides for last-minute tips</li>
                  </ul>
                </div>

                <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md border-l-4 border-l-green-500">
                  <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Tournament Week</h3>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Arrive 2-3 hours early for matches (security lines are long)</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Use public transport when possible (parking is limited and expensive)</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Stay hydrated and use sunscreen for outdoor stadiums</li>
                    <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#34C759] text-white shadow-sm"><Check className="w-3.5 h-3.5" /></span> Follow @Stadiumport for real-time travel updates and tips</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="mb-16 text-center text-sm text-slate-500 dark:text-slate-400 space-y-2">
            <p><strong>Last Updated:</strong> December 5, 2025</p>
            <p className="italic">Stadiumport is an independent travel guide and is not affiliated with FIFA. All match schedules, ticket information, and official tournament details are subject to FIFA's final confirmation.</p>
          </div>

        </main>
      </div>
      <Footer />
    </>
  );
}
