import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { MetLifeStadiumGuide } from '../../../components/feature/MetLifeStadiumGuide';
import { EstadioAztecaGuide } from '../../../components/feature/EstadioAztecaGuide';
import { ArrowheadStadiumGuide } from '../../../components/feature/ArrowheadStadiumGuide';
import { ATTStadiumGuide } from '../../../components/feature/ATTStadiumGuide';
import { NRGStadiumGuide } from '../../../components/feature/NRGStadiumGuide';
import { SchemaOrg, generateStadiumSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { EstadioBBVAGuide } from '../../../components/feature/EstadioBBVAGuide';
import { SoFiStadiumGuide } from '../../../components/feature/SoFiStadiumGuide';
import { MercedesBenzStadiumGuide } from '../../../components/feature/MercedesBenzStadiumGuide';
import { LevisStadiumGuide } from '../../../components/feature/LevisStadiumGuide';
import { LumenFieldGuide } from '../../../components/feature/LumenFieldGuide';
import { GilletteStadiumGuide } from '../../../components/feature/GilletteStadiumGuide';
import { LincolnFinancialFieldGuide } from '../../../components/feature/LincolnFinancialFieldGuide';
import { BMOFieldGuide } from '../../../components/feature/BMOFieldGuide';
import { HardRockStadiumGuide } from '../../../components/feature/HardRockStadiumGuide';
import { EstadioAkronGuide } from '../../../components/feature/EstadioAkronGuide';
import { BCPlaceStadiumGuide } from '../../../components/feature/BCPlaceStadiumGuide';
import { Header } from '../../../components/feature/Header';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

// Stadium data mapping
const stadiumData = {
  'metlife-stadium': {
    id: 2,
    name: 'MetLife Stadium',
    city: 'New York',
    country: 'USA',
    flag: '🇺🇸',
    capacity: 82500,
    matches: 8,
    component: MetLifeStadiumGuide
  },
  'estadio-azteca': {
    id: 1,
    name: 'Estadio Azteca',
    city: 'Mexico City',
    country: 'Mexico',
    flag: '🇲🇽',
    capacity: 87523,
    matches: 5,
    component: EstadioAztecaGuide
  },
  'arrowhead-stadium': {
    id: 4,
    name: 'Arrowhead Stadium',
    city: 'Kansas City',
    country: 'USA',
    flag: '🇺🇸',
    capacity: 76416,
    matches: 6,
    component: ArrowheadStadiumGuide
  },
  'att-stadium': {
    id: 3,
    name: 'AT&T Stadium',
    city: 'Arlington (Dallas–Fort Worth)',
    country: 'USA',
    flag: '🇺🇸',
    capacity: 80000,
    matches: 9,
    component: ATTStadiumGuide
  },
  'nrg-stadium': {
    id: 6,
    name: 'NRG Stadium',
    city: 'Houston',
    country: 'USA',
    flag: '🇺🇸',
    capacity: 72220,
    matches: 4,
    component: NRGStadiumGuide
  }
  ,
  'estadio-bbva': {
    id: 5,
    name: 'Estadio BBVA',
    city: 'Monterrey',
    country: 'Mexico',
    flag: '🇲🇽',
    capacity: 53500,
    matches: 4,
    component: EstadioBBVAGuide
  }
  ,
  'sofi-stadium': {
    id: 8,
    name: 'SoFi Stadium',
    city: 'Los Angeles',
    country: 'USA',
    flag: '🇺🇸',
    capacity: 70240,
    matches: 8,
    component: SoFiStadiumGuide
  }
  ,
  'mercedes-benz-stadium': {
    id: 7,
    name: 'Mercedes-Benz Stadium',
    city: 'Atlanta',
    country: 'USA',
    flag: '🇺🇸',
    capacity: 75000,
    matches: 8,
    component: MercedesBenzStadiumGuide
  }
  ,
  'levis-stadium': {
    id: 10,
    name: "Levi's Stadium",
    city: 'Santa Clara (San Francisco Bay Area)',
    country: 'USA',
    flag: '🇺🇸',
    capacity: 68500,
    matches: 6,
    component: LevisStadiumGuide
  }
  ,
  'lumen-field': {
    id: 11,
    name: 'Lumen Field',
    city: 'Seattle',
    country: 'USA',
    flag: '🇺🇸',
    capacity: 69000,
    matches: 6,
    component: LumenFieldGuide
  }
  ,
  'gillette-stadium': {
    id: 12,
    name: 'Gillette Stadium',
    city: 'Foxborough (Boston metro)',
    country: 'USA',
    flag: '🇺🇸',
    capacity: 64628,
    matches: 7,
    component: GilletteStadiumGuide
  }
  ,
  'hard-rock-stadium': {
    id: 13,
    name: 'Hard Rock Stadium',
    city: 'Miami',
    country: 'USA',
    flag: '🇺🇸',
    capacity: 67518,
    matches: 7,
    component: HardRockStadiumGuide
  }
  ,
  'lincoln-financial-field': {
    id: 11,
    name: 'Lincoln Financial Field',
    city: 'Philadelphia',
    country: 'USA',
    flag: '🇺🇸',
    capacity: 67594,
    matches: 6,
    component: LincolnFinancialFieldGuide
  }
  ,
  'bmo-field': {
    id: 14,
    name: 'BMO Field',
    city: 'Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    capacity: 45736,
    matches: 6,
    component: BMOFieldGuide
  }
  ,
  'bc-place-stadium': {
    id: 15,
    name: 'BC Place Stadium',
    city: 'Vancouver',
    country: 'Canada',
    flag: '🇨🇦',
    capacity: 54000,
    matches: 7,
    component: BCPlaceStadiumGuide
  }
  ,
  'estadio-akron': {
    id: 16,
    name: 'Estadio Akron',
    city: 'Guadalajara',
    country: 'Mexico',
    flag: '🇲🇽',
    capacity: 49850,
    matches: 4,
    component: EstadioAkronGuide
  }
};

export default function StadiumDetailPage() {
  const { stadiumId } = useParams<{ stadiumId: string }>();
  
  const stadium = stadiumId ? stadiumData[stadiumId as keyof typeof stadiumData] : null;

  // Map stadium slug to its host city slug for CTA linking
  const citySlugByStadiumId: Record<string, string> = {
    // Use the dedicated NYC/NJ article route to avoid a 404 on the dynamic city page
    'metlife-stadium': 'new-york-new-jersey',
    'estadio-azteca': 'mexico-city',
    'arrowhead-stadium': 'kansas-city',
    'att-stadium': 'dallas',
    'nrg-stadium': 'houston',
    'estadio-bbva': 'monterrey',
    'sofi-stadium': 'los-angeles',
    'mercedes-benz-stadium': 'atlanta',
    'levis-stadium': 'san-francisco',
    'lumen-field': 'seattle',
    'gillette-stadium': 'boston',
    'hard-rock-stadium': 'miami',
    'bmo-field': 'toronto',
    'bc-place-stadium': 'vancouver',
    'estadio-akron': 'guadalajara',
    'lincoln-financial-field': 'philadelphia'
  };
  const hostCitySlug = stadiumId ? citySlugByStadiumId[stadiumId] : undefined;

  // Stadium slug -> image mapping for social previews
  const stadiumImages: Record<string, string> = {
    'estadio-azteca': '/images/stadiums/estadio-azteca-mexico-city-world-cup-2026.webp',
    'metlife-stadium': '/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp',
    'att-stadium': '/images/stadiums/att-stadium-arlington-texas-world-cup-2026.webp',
    'arrowhead-stadium': '/images/stadiums/arrowhead-stadium-kansas-city-world-cup-2026.webp',
    'estadio-bbva': '/images/stadiums/estadio-bbva-monterrey-world-cup-2026.webp',
    'nrg-stadium': '/images/stadiums/nrg-stadium-houston-texas-world-cup-2026.webp',
    'mercedes-benz-stadium': '/images/stadiums/mercedes-benz-stadium-atlanta-world-cup-2026.webp',
    'sofi-stadium': '/images/stadiums/sofi-stadium-los-angeles-world-cup-2026.webp',
    'lumen-field': '/images/stadiums/lumen-field-seattle-world-cup-2026.webp',
    'levis-stadium': '/images/stadiums/levis-stadium-santa-clara-world-cup-2026.webp',
    'lincoln-financial-field': '/images/stadiums/lincoln-financial-field-philadelphia-world-cup-2026.webp',
    'gillette-stadium': '/images/stadiums/gillette-stadium-foxborough-world-cup-2026.webp',
    'hard-rock-stadium': '/images/stadiums/hard-rock-stadium-miami-world-cup-2026.webp',
    'bmo-field': '/images/stadiums/bmo-field-toronto-world-cup-2026.webp',
    'bc-place-stadium': '/images/stadiums/bc-place-vancouver-world-cup-2026.webp',
    'estadio-akron': '/images/stadiums/estadio-akron-guadalajara-world-cup-2026.webp'
  };

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
    const pageUrl = stadiumId ? `${siteUrl}/world-cup-2026-stadiums/${stadiumId}` : `${siteUrl}/world-cup-2026-stadiums`
    const title = stadium ? `${stadium.name} – World Cup 2026 Stadium Guide` : 'World Cup 2026 Stadiums'
    const description = stadium
      ? `${stadium.name} stadium guide: matches, capacity, transportation, and fan tips.`
      : 'Comprehensive stadiums guide for FIFA World Cup 2026: matches, venues, and travel.'
    const imgPath = stadiumId ? stadiumImages[stadiumId] : '/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp'
    const image = `${siteUrl}${imgPath}`
    const entry = stadiumId ? getEditorialEntry('stadium', stadiumId) : undefined
    setPageMeta({ title, description, url: pageUrl, image, locale: 'en_US', publishedTime: entry?.isPublished ? entry.datePublished : undefined, modifiedTime: new Date().toISOString(), section: entry?.section || 'Stadiums', tags: ['World Cup 2026', 'Stadium Guide', stadium?.name || '', ...(entry?.keywords || [])] })
  }, [stadiumId, stadium])
  
  if (!stadium) {
    return (
      <div className="min-h-screen bg-white dark:bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">
            Stadium Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The stadium you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/world-cup-2026-stadiums" 
            className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Venues
          </Link>
        </div>
      </div>
    );
  }

  const StadiumComponent = stadium.component;
  const heroImage = stadiumId ? stadiumImages[stadiumId] : '/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp';
  const altText = `Inside view of ${stadium?.name} – World Cup 2026`;
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const heroImageAbs = `${siteUrl}${heroImage}`;

  return (
    <div className="min-h-screen w-full bg-white dark:bg-navy-900">
      <Header />
      <SchemaOrg 
        schema={[
          generateBreadcrumbSchema([
            { name: 'Home', url: siteUrl },
            { name: 'Venues', url: `${siteUrl}/world-cup-2026-stadiums` },
            { name: stadium.name, url: `${siteUrl}/world-cup-2026-stadiums/${stadiumId}` }
          ]),
          generateImageObjectSchema(heroImageAbs, {
            width: 1600,
            height: 900,
            caption: `${stadium.name} – World Cup 2026`,
            description: altText
          }),
          {
            "@context": "https://schema.org",
            "@type": "StadiumOrArena",
            "name": stadium.name,
            "description": `${stadium.name} in ${stadium.city} is a featured World Cup 2026 venue offering world-class infrastructure, seating and access.`,
            "image": heroImageAbs,
            "address": {
              "@type": "PostalAddress",
              ...(stadiumId && {
                ...(function(){
                  const meta: Record<string, any> = {
                    'metlife-stadium': { streetAddress: '1 MetLife Stadium Dr', addressLocality: 'East Rutherford', addressRegion: 'NJ', postalCode: '07073', addressCountry: 'USA', latitude: 40.8135, longitude: -74.0745 },
                    'estadio-azteca': { streetAddress: 'Calz. de Tlalpan 3465, Santa Úrsula Coapa', addressLocality: 'Ciudad de México', addressRegion: 'CDMX', postalCode: '04650', addressCountry: 'Mexico', latitude: 19.3029, longitude: -99.1506 },
                    'arrowhead-stadium': { streetAddress: '1 Arrowhead Dr', addressLocality: 'Kansas City', addressRegion: 'MO', postalCode: '64129', addressCountry: 'USA', latitude: 39.0490, longitude: -94.4839 },
                    'att-stadium': { streetAddress: '1 AT&T Way', addressLocality: 'Arlington', addressRegion: 'TX', postalCode: '76011', addressCountry: 'USA', latitude: 32.7473, longitude: -97.0945 },
                    'nrg-stadium': { streetAddress: 'NRG Pkwy', addressLocality: 'Houston', addressRegion: 'TX', postalCode: '77054', addressCountry: 'USA', latitude: 29.6847, longitude: -95.4107 },
                    'estadio-bbva': { streetAddress: 'Av. Pablo Livas 2011, La Pastora', addressLocality: 'Guadalupe', addressRegion: 'Nuevo León', postalCode: '67140', addressCountry: 'Mexico', latitude: 25.6720, longitude: -100.2436 },
                    'sofi-stadium': { streetAddress: '1001 S Stadium Dr', addressLocality: 'Inglewood', addressRegion: 'CA', postalCode: '90301', addressCountry: 'USA', latitude: 33.9535, longitude: -118.3391 },
                    'mercedes-benz-stadium': { streetAddress: '1 AMB Dr NW', addressLocality: 'Atlanta', addressRegion: 'GA', postalCode: '30313', addressCountry: 'USA', latitude: 33.7554, longitude: -84.4009 },
                    'levis-stadium': { streetAddress: '4900 Marie P DeBartolo Way', addressLocality: 'Santa Clara', addressRegion: 'CA', postalCode: '95054', addressCountry: 'USA', latitude: 37.4030, longitude: -121.9690 },
                    'lumen-field': { streetAddress: '800 Occidental Ave S', addressLocality: 'Seattle', addressRegion: 'WA', postalCode: '98134', addressCountry: 'USA', latitude: 47.5952, longitude: -122.3316 },
                    'gillette-stadium': { streetAddress: '1 Patriot Pl', addressLocality: 'Foxborough', addressRegion: 'MA', postalCode: '02035', addressCountry: 'USA', latitude: 42.0909, longitude: -71.2643 },
                    'lincoln-financial-field': { streetAddress: '1 Lincoln Financial Field Way', addressLocality: 'Philadelphia', addressRegion: 'PA', postalCode: '19148', addressCountry: 'USA', latitude: 39.9008, longitude: -75.1675 },
                    'hard-rock-stadium': { streetAddress: '347 Don Shula Dr', addressLocality: 'Miami Gardens', addressRegion: 'FL', postalCode: '33056', addressCountry: 'USA', latitude: 25.9580, longitude: -80.2389 },
                    'bmo-field': { streetAddress: "170 Princes' Blvd", addressLocality: 'Toronto', addressRegion: 'ON', postalCode: 'M6K 3C3', addressCountry: 'Canada', latitude: 43.6332, longitude: -79.4186 },
                    'bc-place-stadium': { streetAddress: '777 Pacific Blvd', addressLocality: 'Vancouver', addressRegion: 'BC', postalCode: 'V6B 4Y8', addressCountry: 'Canada', latitude: 49.2768, longitude: -123.1119 },
                    'estadio-akron': { streetAddress: 'Anillo Periférico Manuel Gómez Morin 5000, El Bajío', addressLocality: 'Zapopan', addressRegion: 'Jalisco', postalCode: '45019', addressCountry: 'Mexico', latitude: 20.7369, longitude: -103.4621 },
                  };
                  const m = meta[stadiumId];
                  return m ? { streetAddress: m.streetAddress, addressLocality: m.addressLocality, addressRegion: m.addressRegion, postalCode: m.postalCode, addressCountry: m.addressCountry } : {};
                })()
              })
            },
            ...(stadiumId && (function(){
              const meta: Record<string, any> = {
                'metlife-stadium': { latitude: 40.8135, longitude: -74.0745 },
                'estadio-azteca': { latitude: 19.3029, longitude: -99.1506 },
                'arrowhead-stadium': { latitude: 39.0490, longitude: -94.4839 },
                'att-stadium': { latitude: 32.7473, longitude: -97.0945 },
                'nrg-stadium': { latitude: 29.6847, longitude: -95.4107 },
                'estadio-bbva': { latitude: 25.6720, longitude: -100.2436 },
                'sofi-stadium': { latitude: 33.9535, longitude: -118.3391 },
                'mercedes-benz-stadium': { latitude: 33.7554, longitude: -84.4009 },
                'levis-stadium': { latitude: 37.4030, longitude: -121.9690 },
                'lumen-field': { latitude: 47.5952, longitude: -122.3316 },
                'gillette-stadium': { latitude: 42.0909, longitude: -71.2643 },
                'lincoln-financial-field': { latitude: 39.9008, longitude: -75.1675 },
                'hard-rock-stadium': { latitude: 25.9580, longitude: -80.2389 },
                'bmo-field': { latitude: 43.6332, longitude: -79.4186 },
                'bc-place-stadium': { latitude: 49.2768, longitude: -123.1119 },
                'estadio-akron': { latitude: 20.7369, longitude: -103.4621 },
              };
              const m = meta[stadiumId];
              return m ? { "geo": { "@type": "GeoCoordinates", latitude: m.latitude, longitude: m.longitude } } : {};
            })()),
          },
          {
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            "name": `FIFA World Cup 2026 Matches at ${stadium.name}`,
            "description": `World Cup 2026 matches at ${stadium.name} in ${stadium.city}. This venue hosts international fixtures with modern amenities, strong transit access and an electric atmosphere.`,
            "startDate": "2026-06-11",
            "endDate": "2026-07-19",
            "eventStatus": "https://schema.org/EventScheduled",
            "image": heroImageAbs,
            "organizer": {
              "@type": "Organization",
              "name": "FIFA",
              "url": "https://www.fifa.com"
            },
            "performer": [
              { "@type": "SportsTeam", "name": "TBD Team A" },
              { "@type": "SportsTeam", "name": "TBD Team B" }
            ],
            "location": {
              "@type": "SportsActivityLocation",
              "name": stadium.name,
              "address": {
                "@type": "PostalAddress",
                ...(function(){
                  const meta: Record<string, any> = {
                    'metlife-stadium': { streetAddress: '1 MetLife Stadium Dr', addressLocality: 'East Rutherford', addressRegion: 'NJ', postalCode: '07073', addressCountry: 'USA' },
                    'estadio-azteca': { streetAddress: 'Calz. de Tlalpan 3465, Santa Úrsula Coapa', addressLocality: 'Ciudad de México', addressRegion: 'CDMX', postalCode: '04650', addressCountry: 'Mexico' },
                    'arrowhead-stadium': { streetAddress: '1 Arrowhead Dr', addressLocality: 'Kansas City', addressRegion: 'MO', postalCode: '64129', addressCountry: 'USA' },
                    'att-stadium': { streetAddress: '1 AT&T Way', addressLocality: 'Arlington', addressRegion: 'TX', postalCode: '76011', addressCountry: 'USA' },
                    'nrg-stadium': { streetAddress: 'NRG Pkwy', addressLocality: 'Houston', addressRegion: 'TX', postalCode: '77054', addressCountry: 'USA' },
                    'estadio-bbva': { streetAddress: 'Av. Pablo Livas 2011, La Pastora', addressLocality: 'Guadalupe', addressRegion: 'Nuevo León', postalCode: '67140', addressCountry: 'Mexico' },
                    'sofi-stadium': { streetAddress: '1001 S Stadium Dr', addressLocality: 'Inglewood', addressRegion: 'CA', postalCode: '90301', addressCountry: 'USA' },
                    'mercedes-benz-stadium': { streetAddress: '1 AMB Dr NW', addressLocality: 'Atlanta', addressRegion: 'GA', postalCode: '30313', addressCountry: 'USA' },
                    'levis-stadium': { streetAddress: '4900 Marie P DeBartolo Way', addressLocality: 'Santa Clara', addressRegion: 'CA', postalCode: '95054', addressCountry: 'USA' },
                    'lumen-field': { streetAddress: '800 Occidental Ave S', addressLocality: 'Seattle', addressRegion: 'WA', postalCode: '98134', addressCountry: 'USA' },
                    'gillette-stadium': { streetAddress: '1 Patriot Pl', addressLocality: 'Foxborough', addressRegion: 'MA', postalCode: '02035', addressCountry: 'USA' },
                    'lincoln-financial-field': { streetAddress: '1 Lincoln Financial Field Way', addressLocality: 'Philadelphia', addressRegion: 'PA', postalCode: '19148', addressCountry: 'USA' },
                    'hard-rock-stadium': { streetAddress: '347 Don Shula Dr', addressLocality: 'Miami Gardens', addressRegion: 'FL', postalCode: '33056', addressCountry: 'USA' },
                    'bmo-field': { streetAddress: "170 Princes' Blvd", addressLocality: 'Toronto', addressRegion: 'ON', postalCode: 'M6K 3C3', addressCountry: 'Canada' },
                    'bc-place-stadium': { streetAddress: '777 Pacific Blvd', addressLocality: 'Vancouver', addressRegion: 'BC', postalCode: 'V6B 4Y8', addressCountry: 'Canada' },
                    'estadio-akron': { streetAddress: 'Anillo Periférico Manuel Gómez Morin 5000, El Bajío', addressLocality: 'Zapopan', addressRegion: 'Jalisco', postalCode: '45019', addressCountry: 'Mexico' },
                  };
                  return meta[stadiumId] || {};
                })()
              },
              ...(function(){
                const meta: Record<string, any> = {
                  'metlife-stadium': { latitude: 40.8135, longitude: -74.0745 },
                  'estadio-azteca': { latitude: 19.3029, longitude: -99.1506 },
                  'arrowhead-stadium': { latitude: 39.0490, longitude: -94.4839 },
                  'att-stadium': { latitude: 32.7473, longitude: -97.0945 },
                  'nrg-stadium': { latitude: 29.6847, longitude: -95.4107 },
                  'estadio-bbva': { latitude: 25.6720, longitude: -100.2436 },
                  'sofi-stadium': { latitude: 33.9535, longitude: -118.3391 },
                  'mercedes-benz-stadium': { latitude: 33.7554, longitude: -84.4009 },
                  'levis-stadium': { latitude: 37.4030, longitude: -121.9690 },
                  'lumen-field': { latitude: 47.5952, longitude: -122.3316 },
                  'gillette-stadium': { latitude: 42.0909, longitude: -71.2643 },
                  'lincoln-financial-field': { latitude: 39.9008, longitude: -75.1675 },
                  'hard-rock-stadium': { latitude: 25.9580, longitude: -80.2389 },
                  'bmo-field': { latitude: 43.6332, longitude: -79.4186 },
                  'bc-place-stadium': { latitude: 49.2768, longitude: -123.1119 },
                  'estadio-akron': { latitude: 20.7369, longitude: -103.4621 },
                };
                const m = meta[stadiumId];
                return m ? { "geo": { "@type": "GeoCoordinates", latitude: m.latitude, longitude: m.longitude } } : {};
              })()
            },
          "offers": {
            "@type": "AggregateOffer",
            "url": "https://www.fifa.com/tickets",
            "priceCurrency": "USD",
            "lowPrice": 60,
            "highPrice": 1500,
            "offerCount": 1000,
            "availability": "https://schema.org/InStock",
            "validFrom": "2025-09-10T00:00:00Z"
          }
          },
          (function(){
            const entry = stadiumId ? getEditorialEntry('stadium', stadiumId) : undefined
            const published = entry?.isPublished ? entry.datePublished : undefined
            return published ? {
              "@context": "https://schema.org",
              "@type": ["WebPage", "Article"],
              "headline": `${stadium.name} – World Cup 2026 Stadium Guide`,
              "url": `${siteUrl}/world-cup-2026-stadiums/${stadiumId}`,
              "datePublished": published,
              "dateModified": new Date().toISOString(),
              "inLanguage": "en-US",
              "keywords": ["World Cup 2026", stadium.name, stadium.city, ...((entry?.keywords)||[])],
              "about": {
                "@type": "StadiumOrArena",
                "name": stadium.name
              }
            } : {}
          })()
        ]}
      />

      {/* Editorial Hero — cohesive with NYC guide styling */}
      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src={heroImage}
            alt={altText}
            className="editorial-hero-image-wrapper"
            imgClassName="editorial-hero-image"
            width={1600}
            height={900}
            priority={true}
            placeholder="empty"
            sizes="100vw"
          />
          <div className="editorial-hero-overlay"></div>
        </div>
        <div className="editorial-hero-content">
          <div className="editorial-hero-inner">
            <div className="editorial-hero-eyebrow">
              <span className="editorial-hero-pulse"></span>
              <span>World Cup 2026</span>
            </div>
            <h1 className="editorial-hero-title">{stadium.name}</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                <span>{stadium.city}, {stadium.country}</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-calendar-event-line"></i>
                <span>{stadium.matches} matches</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-group-line"></i>
                <span>{stadium.capacity.toLocaleString()} capacity</span>
              </div>
              {hostCitySlug && (
                <div className="mt-6">

                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Stadium Guide Content */}
      <StadiumComponent showHeader={false} hideHero={true} />
    </div>
  );
}