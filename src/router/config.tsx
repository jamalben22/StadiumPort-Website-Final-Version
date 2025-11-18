
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// Lazy load components for better performance
const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const CitiesPage = lazy(() => import('../pages/cities/page'));
import CityDetailPage from '../pages/cities/[cityId]/page';
const DealsPage = lazy(() => import('../pages/deals/page'));
const DealAlertsPage = lazy(() => import('../pages/deal-alerts/page'));
const AccommodationPage = lazy(() => import('../pages/accommodation/page'));
const AccommodationArticlePage = lazy(() => import('../pages/accommodation/article/page'));
const TransportationPage = lazy(() => import('../pages/transportation/page'));
const TravelGuidesPage = lazy(() => import('../pages/travel-guides/page'));
const TravelGuideArticlePage = lazy(() => import('../pages/travel-guides/article/page'));
const SafetyGuideArticlePage = lazy(() => import('../pages/safety-guide/article/page'));
const GuidesArticlePage = lazy(() => import('../pages/guides/article/page'));
const GuidesPage = lazy(() => import('../pages/guides/page'));
const EmergencyPlanningPage = lazy(() => import('../pages/guides/emergency-planning/page'));
const DigitalSecurityPrivacyProtectionPage = lazy(() => import('../pages/guides/digital-security-privacy-protection/page'));
const TransportationSafetyGuideArticlePage = lazy(() => import('../pages/safety-guide/article/transportation-safety-guidelines/page'));
const NewYorkCityArticlePage = lazy(() => import('../pages/cities/new-york-new-jersey/page'));
const LosAngelesArticlePage = lazy(() => import('../pages/cities/los-angeles/page'));
const MiamiArticlePage = lazy(() => import('../pages/cities/miami/page'));
const DallasArticlePage = lazy(() => import('../pages/cities/dallas/page'));
const TravelTipsPage = lazy(() => import('../pages/travel-tips/page'));
const TravelTipsArticlePage = lazy(() => import('../pages/travel-tips/article/page'));
const TravelRoutesPage = lazy(() => import('../pages/travel-routes/page'));
const TravelRoutesArticlePage = lazy(() => import('../pages/travel-routes/article/page'));
const TransportationArticlePage = lazy(() => import('../pages/transportation/article/page'));
const BudgetGuidesPage = lazy(() => import('../pages/budget-guides/page'));
const BudgetGuideArticlePage = lazy(() => import('../pages/budget-guides/article/page'));
const PackingListsPage = lazy(() => import('../pages/packing-lists/page'));
const SafetyGuidePage = lazy(() => import('../pages/safety-guide/page'));
const LuxuryTravelPage = lazy(() => import('../pages/luxury-travel/page'));
const LuxuryTravelArticlePage = lazy(() => import('../pages/luxury-travel/article/page'));
const VenuesPage = lazy(() => import('../pages/world-cup-2026-stadiums/page'));
const StadiumDetailPage = lazy(() => import('../pages/world-cup-2026-stadiums/[stadiumId]/page'));
const CityComparisonsPage = lazy(() => import('../pages/city-comparisons/page'));
const CityComparisonsArticlePage = lazy(() => import('../pages/city-comparisons/article/page'));
// Direct imports for legal pages to ensure they load properly
import PrivacyPage from '../pages/legal/privacy/page';
import TermsPage from '../pages/legal/terms/page';
import AffiliateDisclaimerPage from '../pages/legal/affiliate-disclaimer/page';
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
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/world-cup-2026-host-cities',
    element: <CitiesPage />
  },
  {
    path: '/world-cup-2026-cities',
    element: <Navigate to="/world-cup-2026-host-cities" replace />
  },
  {
    path: '/world-cup-2026-host-cities/:cityId',
    element: <CityDetailPage />
  },
  {
    path: '/world-cup-2026-cities/:cityId',
    element: <Navigate to="/world-cup-2026-host-cities/:cityId" replace />
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
    path: '/accommodation/:slug',
    element: <AccommodationArticlePage />
  },
  {
    path: '/transportation',
    element: <TransportationPage />
  },
  {
    path: '/transportation/multi-city-travel-passes-maximum-savings',
    element: <Navigate to="/transportation/atlanta-world-cup-2026-your-complete-transportation-guide-to-mercedes-benz-stadium" replace />
  },
  {
    path: '/transportation/philadelphia-world-cup-2026-transportation-guide-to-lincoln-financial-field',
    element: <Navigate to="/transportation/guadalajara-world-cup-2026-complete-transportation-guide-to-estadio-akron" replace />
  },
  {
    path: '/transportation/houston-world-cup-2026-transportation-guide-to-nrg-stadium',
    element: <Navigate to="/transportation/monterrey-world-cup-2026-complete-transportation-guide-to-estadio-bbva" replace />
  },
  {
    path: '/transportation/:slug',
    element: <TransportationArticlePage />
  },
  {
    path: '/travel-guides',
    element: <TravelGuidesPage />
  },
  {
    path: '/world-cup-2026-host-cities/new-york-new-jersey',
    element: <NewYorkCityArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/los-angeles',
    element: <LosAngelesArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/miami',
    element: <MiamiArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/dallas',
    element: <DallasArticlePage />
  },
  {
    path: '/travel-guides/:slug',
    element: <TravelGuideArticlePage />
  },
  {
    path: '/guides',
    element: <Navigate to="/guides/health-&-medical-guide-for-world-cup-2026-travelers" replace />
  },
  {
    path: '/guides/health-&-medical-guide-for-world-cup-2026-travelers',
    element: <GuidesPage />
  },
  {
    path: '/guides/Health & Medical Guide for World Cup 2026 Travelers',
    element: <GuidesPage />
  },
  {
    path: '/guides/:slug',
    element: <GuidesArticlePage />
  },
  {
    path: '/guides/accommodation-safety-checklist',
    element: <Navigate to="/guides/solo-travel-safety-guide-attending-world-cup-2026-alone" replace />
  },
  {
    path: '/guides/safe-transportation-rideshare-taxi-transit',
    element: <Navigate to="/guides/world-cup-2026-emergency-contacts-resources-guide" replace />
  },
  {
    path: '/guides/matchday-crowd-safety-essentials',
    element: <Navigate to="/guides/world-cup-2026-scams-how-to-avoid-ticket-travel-fraud" replace />
  },
  {
    path: '/guides/local-scams-spot-and-avoid',
    element: <Navigate to="/guides/family-safety-guide-taking-kids-to-world-cup-2026" replace />
  },
  {
    path: '/guides/stadium-safety-at-world-cup-2026-security-rules-what-to-expect',
    element: <EmergencyPlanningPage />
  },
  {
    path: '/guides/emergency-planning-before-you-go',
    element: <Navigate to="/guides/stadium-safety-at-world-cup-2026-security-rules-what-to-expect" replace />
  },
  {
    path: '/guides/health-and-medical-preparedness',
    element: <Navigate to="/guides" replace />
  },
  {
    path: '/guides/transportation-safety-getting-around-world-cup-2026-host-cities',
    element: <DigitalSecurityPrivacyProtectionPage />
  },
  {
    path: '/guides/digital-security-and-privacy-protection',
    element: <Navigate to="/guides/transportation-safety-getting-around-world-cup-2026-host-cities" replace />
  },
  {
    path: '/safety-guide/:slug',
    element: <SafetyGuideArticlePage />
  },
  {
    path: '/safety-guide/world-cup-2026-safety-guide-everything-fans-need-to-know',
    element: <TransportationSafetyGuideArticlePage />
  },
  {
    path: '/travel-tips/world-cup-2026-connectivity-guide-phone-plans-sim-cards-and-wifi',
    element: <NotFoundPage />
  },
  {
    path: '/travel-tips/airfare-deal-window-timing',
    element: <Navigate to="/world-cup-2026-travel-tips/world-cup-2026-connectivity-guide-phone-plans-sim-cards-wifi" replace />
  },
  {
    path: '/world-cup-2026-travel-tips',
    element: <TravelTipsPage />
  },
  {
    path: '/world-cup-2026-travel-tips/:slug',
    element: <TravelTipsArticlePage />
  },
  {
    path: '/travel-routes',
    element: <TravelRoutesPage />
  },
  {
    path: '/travel-routes/:slug',
    element: <TravelRoutesArticlePage />
  },
  {
    path: '/budget-guides',
    element: <BudgetGuidesPage />
  },
  {
    path: '/budget-guides/:slug',
    element: <BudgetGuideArticlePage />
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
    path: '/luxury-travel/:slug',
    element: <LuxuryTravelArticlePage />
  },
  {
    path: '/world-cup-2026-stadiums',
    element: <VenuesPage />
  },
  {
    path: '/venues',
    element: <Navigate to="/world-cup-2026-stadiums" replace />
  },
  {
    path: '/world-cup-2026-stadiums/:stadiumId',
    element: <StadiumDetailPage />
  },
  {
    path: '/city-comparisons',
    element: <CityComparisonsPage />
  },
  {
    path: '/city-comparisons/:slug',
    element: <CityComparisonsArticlePage />
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
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;
