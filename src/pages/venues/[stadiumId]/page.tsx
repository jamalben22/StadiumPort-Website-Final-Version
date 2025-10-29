import { useParams, Link } from 'react-router-dom';
import { MetLifeStadiumGuide } from '../../../components/feature/MetLifeStadiumGuide';
import { EstadioAztecaGuide } from '../../../components/feature/EstadioAztecaGuide';
import { ArrowheadStadiumGuide } from '../../../components/feature/ArrowheadStadiumGuide';
import { SchemaOrg, generateStadiumSchema, generateBreadcrumbSchema } from '../../../components/seo/SchemaOrg';

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