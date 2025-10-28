
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Lazy load components for better performance
const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const CitiesPage = lazy(() => import('../pages/cities/page'));
import CityDetailPage from '../pages/cities/[cityId]/page';
const DealsPage = lazy(() => import('../pages/deals/page'));
const DealAlertsPage = lazy(() => import('../pages/deal-alerts/page'));
const AccommodationPage = lazy(() => import('../pages/accommodation/page'));
const TransportationPage = lazy(() => import('../pages/transportation/page'));
const TravelGuidesPage = lazy(() => import('../pages/travel-guides/page'));
const TravelGuideArticlePage = lazy(() => import('../pages/travel-guides/article/page'));
const TravelTipsPage = lazy(() => import('../pages/travel-tips/page'));
const TravelRoutesPage = lazy(() => import('../pages/travel-routes/page'));
const BudgetGuidesPage = lazy(() => import('../pages/budget-guides/page'));
const PackingListsPage = lazy(() => import('../pages/packing-lists/page'));
const SafetyGuidePage = lazy(() => import('../pages/safety-guide/page'));
const LuxuryTravelPage = lazy(() => import('../pages/luxury-travel/page'));
const VenuesPage = lazy(() => import('../pages/venues/page'));
const StadiumDetailPage = lazy(() => import('../pages/venues/[stadiumId]/page'));
const CityComparisonsPage = lazy(() => import('../pages/city-comparisons/page'));
// Direct imports for legal pages to ensure they load properly
import PrivacyPage from '../pages/legal/privacy/page';
import TermsPage from '../pages/legal/terms/page';
import AffiliateDisclaimerPage from '../pages/legal/affiliate-disclaimer/page';
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/cities',
    element: <CitiesPage />
  },
  {
    path: '/cities/:cityId',
    element: <CityDetailPage />
  },
  {
    path: '/deals',
    element: <DealsPage />
  },
  {
    path: '/deal-alerts',
    element: <DealAlertsPage />
  },
  {
    path: '/accommodation',
    element: <AccommodationPage />
  },
  {
    path: '/transportation',
    element: <TransportationPage />
  },
  {
    path: '/travel-guides',
    element: <TravelGuidesPage />
  },
  {
    path: '/travel-guides/:slug',
    element: <TravelGuideArticlePage />
  },
  {
    path: '/travel-tips',
    element: <TravelTipsPage />
  },
  {
    path: '/travel-routes',
    element: <TravelRoutesPage />
  },
  {
    path: '/budget-guides',
    element: <BudgetGuidesPage />
  },
  {
    path: '/packing-lists',
    element: <PackingListsPage />
  },
  {
    path: '/safety-guide',
    element: <SafetyGuidePage />
  },
  {
    path: '/luxury-travel',
    element: <LuxuryTravelPage />
  },
  {
    path: '/venues',
    element: <VenuesPage />
  },
  {
    path: '/venues/:stadiumId',
    element: <StadiumDetailPage />
  },
  {
    path: '/city-comparisons',
    element: <CityComparisonsPage />
  },
  {
    path: '/legal/privacy',
    element: <PrivacyPage />
  },
  {
    path: '/privacy',
    element: <PrivacyPage />
  },
  {
    path: '/legal/terms',
    element: <TermsPage />
  },
  {
    path: '/terms',
    element: <TermsPage />
  },
  {
    path: '/legal/affiliate-disclaimer',
    element: <AffiliateDisclaimerPage />
  },
  {
    path: '/affiliate-disclaimer',
    element: <AffiliateDisclaimerPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;
