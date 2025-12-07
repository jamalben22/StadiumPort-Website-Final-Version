import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import { Footer } from '../../../components/feature/Footer';
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
  const effectiveId =
    stadiumId === 'estadio-azteca-guide' ? 'estadio-azteca' :
    stadiumId === 'metlife-stadium-guide' ? 'metlife-stadium' :
    stadiumId === 'att-stadium-guide' ? 'att-stadium' :
    stadiumId === 'arrowhead-stadium-guide' ? 'arrowhead-stadium' :
    stadiumId === 'estadio-bbva-guide' ? 'estadio-bbva' :
    stadiumId === 'nrg-stadium-guide' ? 'nrg-stadium' :
    stadiumId === 'mercedes-benz-stadium-guide' ? 'mercedes-benz-stadium' :
    stadiumId === 'lumen-field-guide' ? 'lumen-field' :
    stadiumId === 'sofi-stadium-guide' ? 'sofi-stadium' :
    stadiumId === 'levis-stadium-guide' ? 'levis-stadium' :
    stadiumId === 'lincoln-financial-field-guide' ? 'lincoln-financial-field' :
    stadiumId === 'gillette-stadium-guide' ? 'gillette-stadium' :
    stadiumId === 'hard-rock-stadium-guide' ? 'hard-rock-stadium' :
    stadiumId === 'bmo-field-guide' ? 'bmo-field' :
    stadiumId === 'bc-place-stadium-guide' ? 'bc-place-stadium' :
    stadiumId === 'estadio-akron-guide' ? 'estadio-akron' :
    stadiumId;
  const stadium = effectiveId ? stadiumData[effectiveId as keyof typeof stadiumData] : null;

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
  const hostCitySlug = effectiveId ? citySlugByStadiumId[effectiveId] : undefined;

  // Save State
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (effectiveId) {
      const saved = localStorage.getItem(`${effectiveId}_guide_saved`);
      if (saved) setIsSaved(true);
    }
  }, [effectiveId]);

  const toggleSave = () => {
    const newState = !isSaved;
    setIsSaved(newState);
    if (effectiveId) {
      if (newState) {
        localStorage.setItem(`${effectiveId}_guide_saved`, 'true');
      } else {
        localStorage.removeItem(`${effectiveId}_guide_saved`);
      }
    }
  };

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
    const canonicalId =
      effectiveId === 'estadio-azteca' ? 'estadio-azteca-guide' :
      effectiveId === 'metlife-stadium' ? 'metlife-stadium-guide' :
      effectiveId === 'att-stadium' ? 'att-stadium-guide' :
      effectiveId === 'arrowhead-stadium' ? 'arrowhead-stadium-guide' :
      effectiveId === 'estadio-bbva' ? 'estadio-bbva-guide' :
      effectiveId === 'nrg-stadium' ? 'nrg-stadium-guide' :
      effectiveId === 'mercedes-benz-stadium' ? 'mercedes-benz-stadium-guide' :
      effectiveId === 'lumen-field' ? 'lumen-field-guide' :
      effectiveId === 'sofi-stadium' ? 'sofi-stadium-guide' :
      effectiveId === 'levis-stadium' ? 'levis-stadium-guide' :
      effectiveId === 'gillette-stadium' ? 'gillette-stadium-guide' :
      effectiveId === 'lincoln-financial-field' ? 'lincoln-financial-field-guide' :
      effectiveId === 'hard-rock-stadium' ? 'hard-rock-stadium-guide' :
      effectiveId === 'bmo-field' ? 'bmo-field-guide' :
      effectiveId === 'bc-place-stadium' ? 'bc-place-stadium-guide' :
      effectiveId === 'estadio-akron' ? 'estadio-akron-guide' :
      effectiveId || ''
    const pageUrl = effectiveId ? `${siteUrl}/world-cup-2026-stadiums/${canonicalId}` : `${siteUrl}/world-cup-2026-stadiums`
    const title = stadium
      ? (effectiveId === 'estadio-azteca'
          ? 'Estadio Azteca Guide: World Cup 2026 Stadium & Tickets'
          : effectiveId === 'metlife-stadium'
            ? 'MetLife Stadium Guide: World Cup 2026 Final Venue | NY/NJ'
            : effectiveId === 'att-stadium'
              ? 'AT&T Stadium Guide: World Cup 2026 Venue | Dallas Cowboys'
              : effectiveId === 'arrowhead-stadium'
                ? 'Arrowhead Stadium Guide: World Cup 2026 Venue | Kansas City'
                : effectiveId === 'estadio-bbva'
                  ? 'Estadio BBVA Guide: World Cup 2026 Stadium | Monterrey Mexico'
                  : effectiveId === 'nrg-stadium'
                    ? 'NRG Stadium Guide: World Cup 2026 Venue | Houston Texans'
                    : effectiveId === 'mercedes-benz-stadium'
                      ? 'Mercedes-Benz Stadium Guide: World Cup 2026 Venue | Atlanta'
                    : effectiveId === 'lumen-field'
                      ? 'Lumen Field Guide: World Cup 2026 Venue | Seattle Sounders'
                    : effectiveId === 'sofi-stadium'
                      ? 'SoFi Stadium Guide: World Cup 2026 Venue | Los Angeles'
                    : effectiveId === 'levis-stadium'
                      ? 'Levi\'s Stadium Guide: World Cup 2026 Venue | San Francisco Bay'
                    : effectiveId === 'gillette-stadium'
                      ? 'Gillette Stadium Guide: World Cup 2026 Venue | Boston Patriots'
                    : effectiveId === 'lincoln-financial-field'
                      ? 'Lincoln Financial Field Guide: World Cup 2026 | Philadelphia'
                    : effectiveId === 'hard-rock-stadium'
                      ? 'Hard Rock Stadium Guide: World Cup 2026 Venue | Miami Florida'
                    : effectiveId === 'bmo-field'
                      ? 'BMO Field Guide: World Cup 2026 Venue | Toronto Canada'
                : `${stadium.name} – World Cup 2026 Stadium Guide`)
      : 'World Cup 2026 Stadiums'
    const description = stadium
      ? `${stadium.name} stadium guide: matches, capacity, transportation, and fan tips.`
      : 'Comprehensive stadiums guide for FIFA World Cup 2026: matches, venues, and travel.'
    const imgPath = effectiveId ? stadiumImages[effectiveId] : '/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp'
    const image = `${siteUrl}${imgPath}`
    const entry = stadiumId ? getEditorialEntry('stadium', stadiumId) : undefined
    setPageMeta({ title, description, url: pageUrl, image, locale: 'en_US', publishedTime: entry?.isPublished ? entry.datePublished : undefined, modifiedTime: new Date().toISOString(), section: entry?.section || 'Stadiums', tags: ['World Cup 2026', 'Stadium Guide', stadium?.name || '', ...(entry?.keywords || [])] })
  }, [effectiveId, stadium])
  
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
            className="inline-flex items-center px-6 py-3 bg-[#01b47d] text-white rounded-lg hover:bg-[#008f63] transition-colors"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Venues
          </Link>
        </div>
      </div>
    );
  }

  const StadiumComponent = stadium.component;
  const heroImage = effectiveId ? stadiumImages[effectiveId] : '/images/stadiums/metlife-stadium-east-rutherford-world-cup-2026.webp';
  const altText = `Inside view of ${stadium?.name} – World Cup 2026`;
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
  const heroImageAbs = `${siteUrl}${heroImage}`;
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = heroImage
    document.head.appendChild(link)
  }, [heroImage])

  return (
    <div className="min-h-screen w-full bg-white dark:bg-navy-900">
      <Header />
      <SchemaOrg 
        schema={[
          generateBreadcrumbSchema([
            { name: 'Home', url: siteUrl },
            { name: 'Venues', url: `${siteUrl}/world-cup-2026-stadiums` },
            { name: stadium.name, url: `${siteUrl}/world-cup-2026-stadiums/${effectiveId === 'estadio-azteca' ? 'estadio-azteca-guide' : effectiveId === 'metlife-stadium' ? 'metlife-stadium-guide' : effectiveId === 'att-stadium' ? 'att-stadium-guide' : effectiveId === 'arrowhead-stadium' ? 'arrowhead-stadium-guide' : effectiveId === 'estadio-bbva' ? 'estadio-bbva-guide' : effectiveId === 'nrg-stadium' ? 'nrg-stadium-guide' : effectiveId === 'mercedes-benz-stadium' ? 'mercedes-benz-stadium-guide' : effectiveId === 'lumen-field' ? 'lumen-field-guide' : effectiveId === 'sofi-stadium' ? 'sofi-stadium-guide' : effectiveId === 'levis-stadium' ? 'levis-stadium-guide' : effectiveId === 'lincoln-financial-field' ? 'lincoln-financial-field-guide' : effectiveId === 'gillette-stadium' ? 'gillette-stadium-guide' : effectiveId === 'hard-rock-stadium' ? 'hard-rock-stadium-guide' : effectiveId === 'bmo-field' ? 'bmo-field-guide' : effectiveId === 'bc-place-stadium' ? 'bc-place-stadium-guide' : effectiveId === 'estadio-akron' ? 'estadio-akron-guide' : effectiveId}` }
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
              "headline": `${effectiveId === 'estadio-azteca' ? 'Estadio Azteca Guide: World Cup 2026 Stadium & Tickets' : effectiveId === 'metlife-stadium' ? 'MetLife Stadium Guide: World Cup 2026 Final Venue | NY/NJ' : effectiveId === 'att-stadium' ? 'AT&T Stadium Guide: World Cup 2026 Venue | Dallas Cowboys' : effectiveId === 'arrowhead-stadium' ? 'Arrowhead Stadium Guide: World Cup 2026 Venue | Kansas City' : effectiveId === 'estadio-bbva' ? 'Estadio BBVA Guide: World Cup 2026 Stadium | Monterrey Mexico' : effectiveId === 'nrg-stadium' ? 'NRG Stadium Guide: World Cup 2026 Venue | Houston Texans' : effectiveId === 'mercedes-benz-stadium' ? 'Mercedes-Benz Stadium Guide: World Cup 2026 Venue | Atlanta' : effectiveId === 'lumen-field' ? 'Lumen Field Guide: World Cup 2026 Venue | Seattle Sounders' : effectiveId === 'sofi-stadium' ? 'SoFi Stadium Guide: World Cup 2026 Venue | Los Angeles' : effectiveId === 'levis-stadium' ? 'Levi\'s Stadium Guide: World Cup 2026 Venue | San Francisco Bay' : effectiveId === 'lincoln-financial-field' ? 'Lincoln Financial Field Guide: World Cup 2026 | Philadelphia' : effectiveId === 'gillette-stadium' ? 'Gillette Stadium Guide: World Cup 2026 Venue | Boston Patriots' : effectiveId === 'hard-rock-stadium' ? 'Hard Rock Stadium Guide: World Cup 2026 Venue | Miami Florida' : effectiveId === 'bmo-field' ? 'BMO Field Guide: World Cup 2026 Venue | Toronto Canada' : effectiveId === 'bc-place-stadium' ? 'BC Place Stadium Guide: World Cup 2026 Venue | Vancouver Canada' : effectiveId === 'estadio-akron' ? 'Estadio Akron Guide: World Cup 2026 Stadium | Guadalajara Mexico' : `${stadium.name} – World Cup 2026 Stadium Guide`}`,
              "url": `${siteUrl}/world-cup-2026-stadiums/${effectiveId === 'estadio-azteca' ? 'estadio-azteca-guide' : effectiveId === 'metlife-stadium' ? 'metlife-stadium-guide' : effectiveId === 'att-stadium' ? 'att-stadium-guide' : effectiveId === 'arrowhead-stadium' ? 'arrowhead-stadium-guide' : effectiveId === 'estadio-bbva' ? 'estadio-bbva-guide' : effectiveId === 'nrg-stadium' ? 'nrg-stadium-guide' : effectiveId === 'mercedes-benz-stadium' ? 'mercedes-benz-stadium-guide' : effectiveId === 'lumen-field' ? 'lumen-field-guide' : effectiveId === 'sofi-stadium' ? 'sofi-stadium-guide' : effectiveId === 'levis-stadium' ? 'levis-stadium-guide' : effectiveId === 'lincoln-financial-field' ? 'lincoln-financial-field-guide' : effectiveId === 'gillette-stadium' ? 'gillette-stadium-guide' : effectiveId}`,
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

      {/* Editorial Hero — World Class Redesign */}
      <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <OptimizedImage
            src={heroImage}
            alt={altText}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            width={1600}
            height={900}
            priority={true}
            placeholder="empty"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent opacity-90" />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 z-10">
          <div className="max-w-5xl mx-auto w-full">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6 animate-fade-up">
              <ol className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium tracking-widest uppercase text-[#01b47d]">
                <li><Link to="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li><Link to="/world-cup-2026-stadiums" className="hover:text-white transition-colors duration-300">Stadiums</Link></li>
                <li className="text-slate-600" aria-hidden="true">/</li>
                <li><span className="text-white border-b border-[#01b47d]/50 pb-0.5" aria-current="page">{stadium.name}</span></li>
              </ol>
            </nav>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight max-w-4xl drop-shadow-sm animate-fade-up [animation-delay:200ms]">
              {effectiveId === 'estadio-azteca' ? 'Estadio Azteca Guide: World Cup 2026 Stadium & Tickets' : effectiveId === 'metlife-stadium' ? 'MetLife Stadium Guide: World Cup 2026 Final Venue | NY/NJ' : effectiveId === 'att-stadium' ? 'AT&T Stadium Guide: World Cup 2026 Venue | Dallas Cowboys' : effectiveId === 'arrowhead-stadium' ? 'Arrowhead Stadium Guide: World Cup 2026 Venue | Kansas City' : effectiveId === 'estadio-bbva' ? 'Estadio BBVA Guide: World Cup 2026 Stadium | Monterrey Mexico' : effectiveId === 'nrg-stadium' ? 'NRG Stadium Guide: World Cup 2026 Venue | Houston Texans' : effectiveId === 'mercedes-benz-stadium' ? 'Mercedes-Benz Stadium Guide: World Cup 2026 Venue | Atlanta' : effectiveId === 'lumen-field' ? 'Lumen Field Guide: World Cup 2026 Venue | Seattle Sounders' : effectiveId === 'sofi-stadium' ? 'SoFi Stadium Guide: World Cup 2026 Venue | Los Angeles' : effectiveId === 'levis-stadium' ? "Levi's Stadium Guide: World Cup 2026 Venue | San Francisco Bay" : effectiveId === 'lincoln-financial-field' ? 'Lincoln Financial Field Guide: World Cup 2026 | Philadelphia' : effectiveId === 'gillette-stadium' ? 'Gillette Stadium Guide: World Cup 2026 Venue | Boston Patriots' : effectiveId === 'hard-rock-stadium' ? 'Hard Rock Stadium Guide: World Cup 2026 Venue | Miami Florida' : effectiveId === 'bmo-field' ? 'BMO Field Guide: World Cup 2026 Venue | Toronto Canada' : effectiveId === 'bc-place-stadium' ? 'BC Place Stadium Guide: World Cup 2026 Venue | Vancouver Canada' : effectiveId === 'estadio-akron' ? 'Estadio Akron Guide: World Cup 2026 Stadium | Guadalajara Mexico' : stadium.name}
            </h1>

            {/* Meta Data */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-300 text-sm md:text-base font-medium animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>{stadium.city}, {stadium.country}</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-calendar-event-line text-lg"></i>
                </div>
                <span>{stadium.matches} matches</span>
              </div>
              <div className="flex items-center gap-3 group/meta">
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-[#01b47d] group-hover/meta:bg-[#01b47d]/20 transition-colors">
                  <i className="ri-group-line text-lg"></i>
                </div>
                <span>{stadium.capacity.toLocaleString()} capacity</span>
              </div>
              
              {/* Save Guide Button */}
              <button 
                onClick={toggleSave}
                className={`flex items-center gap-3 group/save transition-all duration-300 ${isSaved ? 'text-[#01b47d]' : 'text-slate-300 hover:text-white'}`}
                aria-label={isSaved ? "Remove from saved guides" : "Save this guide"}
              >
                <div className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isSaved ? 'bg-[#01b47d]/20 ring-1 ring-[#01b47d]/50' : 'bg-white/5 group-hover/save:bg-[#01b47d]/20'}`}>
                  <i className={`${isSaved ? 'ri-bookmark-fill' : 'ri-bookmark-line'} text-lg`}></i>
                </div>
                <span className="font-medium">{isSaved ? 'Saved' : 'Save Guide'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Stadium Guide Content */}
      <main id="main-content">
        <StadiumComponent showHeader={false} hideHero={true} />
      </main>

      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4">
          <div className="text-sm text-slate-600 dark:text-slate-300">Last reviewed: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by Stadiumport Team</div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}