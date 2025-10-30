import { useParams, Link } from 'react-router-dom';
import { MetLifeStadiumGuide } from '../../../components/feature/MetLifeStadiumGuide';
import { EstadioAztecaGuide } from '../../../components/feature/EstadioAztecaGuide';
import { ArrowheadStadiumGuide } from '../../../components/feature/ArrowheadStadiumGuide';
import { ATTStadiumGuide } from '../../../components/feature/ATTStadiumGuide';
import { NRGStadiumGuide } from '../../../components/feature/NRGStadiumGuide';
import { SchemaOrg, generateStadiumSchema, generateBreadcrumbSchema } from '../../../components/seo/SchemaOrg';
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
            to="/venues" 
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

  return (
    <div className="min-h-screen w-full">
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
            { name: 'Venues', url: '/venues' },
            { name: stadium.name, url: `/venues/${stadiumId}` }
          ])
        ]}
      />
      
      <StadiumComponent />
    </div>
  );
}