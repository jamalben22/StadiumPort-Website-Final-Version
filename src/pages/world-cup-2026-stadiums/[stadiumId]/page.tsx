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

  // Set OG/Twitter meta images based on stadium
  useEffect(() => {
    const img = stadiumId ? stadiumImages[stadiumId] : '/images/metlife-stadium-east-rutherford-world-cup-2026.webp';
    if (!img) return;

    // og:image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', img);

    // twitter:image
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', img);
  }, [stadiumId]);
  
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

  return (
    <div className="min-h-screen w-full bg-white dark:bg-navy-900">
      <Header />
      <SchemaOrg 
        schema={[
          generateStadiumSchema({
            name: stadium.name,
            city: stadium.city,
            country: stadium.country,
            capacity: stadium.capacity,
            matches: stadium.matches
          }),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Venues', url: '/world-cup-2026-stadiums' },
            { name: stadium.name, url: `/world-cup-2026-stadiums/${stadiumId}` }
          ]),
          generateImageObjectSchema(heroImage, {
            width: 1600,
            height: 900,
            caption: `${stadium.name} – World Cup 2026`,
            description: altText
          })
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
              <span>FIFA World Cup 2026</span>
            </div>
            <h1 className="editorial-hero-title">{stadium.name}</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                <span>{stadium.city}, {stadium.country}</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-calendar-event-line"></i>
                <span>Matches: {stadium.matches}</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-group-line"></i>
                <span>{stadium.capacity.toLocaleString()} capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Stadium Guide Content */}
      <StadiumComponent showHeader={false} hideHero={true} />
    </div>
  );
}