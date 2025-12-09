
import { lazy } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// Critical homepage imports directly to avoid white screen on first paint
import HomePage from '../pages/home/page';
const AboutPage = lazy(() => import('../pages/about/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const CitiesPage = lazy(() => import('../pages/cities/page'));
const CityDetailPage = lazy(() => import('../pages/cities/[cityId]/page'));
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
const HoustonArticlePage = lazy(() => import('../pages/cities/houston/page'));
const AtlantaArticlePage = lazy(() => import('../pages/cities/atlanta/page'));
const PhiladelphiaArticlePage = lazy(() => import('../pages/cities/philadelphia/page'));
const SeattleArticlePage = lazy(() => import('../pages/cities/seattle/page'));
const KansasCityArticlePage = lazy(() => import('../pages/cities/kansas-city/page'));
const SanFranciscoArticlePage = lazy(() => import('../pages/cities/san-francisco/page'));
const BostonArticlePage = lazy(() => import('../pages/cities/boston/page'));
const TorontoArticlePage = lazy(() => import('../pages/cities/toronto/page'));
const VancouverArticlePage = lazy(() => import('../pages/cities/vancouver/page'));
const MexicoCityArticlePage = lazy(() => import('../pages/cities/mexico-city/page'));
const GuadalajaraArticlePage = lazy(() => import('../pages/cities/guadalajara/page'));
const MonterreyArticlePage = lazy(() => import('../pages/cities/monterrey/page'));
const TravelTipsPage = lazy(() => import('../pages/travel-tips/page'));
const TravelTipsArticlePage = lazy(() => import('../pages/travel-tips/article/page'));
const TravelTipsBudgetGuidePage = lazy(() => import('../pages/travel-tips/article/BudgetGuideArticle'));
const TravelTipsBestTimePage = lazy(() => import('../pages/travel-tips/article/BestTimeBookArticle'));
const TravelTipsHostCityPage = lazy(() => import('../pages/travel-tips/article/HostCityGuideArticle'));
const TravelTipsAccommodationGuidePage = lazy(() => import('../pages/travel-tips/article/AccommodationGuideArticle'));
const TravelTipsFlightBookingPage = lazy(() => import('../pages/travel-tips/article/FlightBookingGuideArticle'));
const TravelTipsItineraryPlanningPage = lazy(() => import('../pages/travel-tips/article/ItineraryPlanningArticle'));
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
const EditorialPolicyPage = lazy(() => import('../pages/legal/editorial-policy/page'));
const AuthorsPage = lazy(() => import('../pages/about/authors/page'));
const PrivacyPage = lazy(() => import('../pages/legal/privacy/page'));
const ContestPrivacyPage = lazy(() => import('../pages/legal/contest-privacy/page'));
const TermsPage = lazy(() => import('../pages/legal/terms/page'));
const ContestTermsPage = lazy(() => import('../pages/legal/contest-terms/page'));
const ContestSupportPage = lazy(() => import('../pages/legal/contest-support/page'));
const AffiliateDisclaimerPage = lazy(() => import('../pages/legal/affiliate-disclaimer/page'));
const PredictPage = lazy(() => import('../pages/PredictPage'));
const DrawHubPage = lazy(() => import('../pages/draw-hub/page'));
const GroupsSchedulePage = lazy(() => import('../pages/groups/page'));
const GroupAPage = lazy(() => import('../pages/groups/group-a/page'));
const GroupBPage = lazy(() => import('../pages/groups/group-b/page'));
const GroupCPage = lazy(() => import('../pages/groups/group-c/page'));
const GroupDPage = lazy(() => import('../pages/groups/group-d/page'));
const GroupEPage = lazy(() => import('../pages/groups/group-e/page'));
const GroupFPage = lazy(() => import('../pages/groups/group-f/page'));
const GroupGPage = lazy(() => import('../pages/groups/group-g/page'));
const GroupHPage = lazy(() => import('../pages/groups/group-h/page'));
const GroupIPage = lazy(() => import('../pages/groups/group-i/page'));
const GroupJPage = lazy(() => import('../pages/groups/group-j/page'));
const GroupKPage = lazy(() => import('../pages/groups/group-k/page'));
const GroupLPage = lazy(() => import('../pages/groups/group-l/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const AdminPredictionsPage = lazy(() => import('../pages/admin/predictions/page'));
const MyPredictionPage = lazy(() => import('../pages/my-prediction/page'));
const PredictResultsPage = lazy(() => import('../pages/predict-results/page'));
const PredictSharePage = lazy(() => import('../pages/predict-share/page'));

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
    path: '/world-cup-2026-prediction-game',
    element: <PredictPage />
  },
  {
    path: '/world-cup-2026-prediction-game/:step',
    element: <PredictPage />
  },
  {
    path: '/world-cup-2026-prediction-game/entry',
    element: <PredictResultsPage />
  },
  {
    path: '/world-cup-2026-prediction-game/entry/:code',
    element: <PredictResultsPage />
  },
  {
    path: '/world-cup-2026-prediction-game/results',
    element: <Navigate to="/world-cup-2026-prediction-game/entry" replace />
  },
  {
    path: '/world-cup-2026-prediction-game/results/:code',
    element: (() => {
      const ResultsRedirect = () => {
        const { code } = useParams();
        return <Navigate to={`/world-cup-2026-prediction-game/entry/${code || ''}`} replace />;
      };
      return <ResultsRedirect />;
    })()
  },
  {
    path: '/world-cup-2026-prediction-game/share/:code',
    element: <PredictSharePage />
  },
  {
    path: '/2026-world-cup-draw-travel-hub',
    element: <DrawHubPage />
  },
  {
    path: '/draw-travel-hub',
    element: <Navigate to="/2026-world-cup-draw-travel-hub" replace />
  },
  {
    path: '/world-cup-2026-groups',
    element: <GroupsSchedulePage />
  },
  {
    path: '/groups',
    element: <Navigate to="/world-cup-2026-groups" replace />
  },
  {
    path: '/2026-world-cup-group-a-travel-guide',
    element: <GroupAPage />
  },
  {
    path: '/groups/group-a',
    element: <Navigate to="/2026-world-cup-group-a-travel-guide" replace />
  },
  {
    path: '/2026-world-cup-group-b-travel-guide',
    element: <GroupBPage />
  },
  {
    path: '/groups/group-b',
    element: <Navigate to="/2026-world-cup-group-b-travel-guide" replace />
  },
  {
    path: '/2026-world-cup-group-c-travel-guide',
    element: <GroupCPage />
  },
  {
    path: '/groups/group-c',
    element: <Navigate to="/2026-world-cup-group-c-travel-guide" replace />
  },
  {
    path: '/2026-world-cup-group-d-travel-guide',
    element: <GroupDPage />
  },
  {
    path: '/groups/group-d',
    element: <Navigate to="/2026-world-cup-group-d-travel-guide" replace />
  },
  {
    path: '/2026-world-cup-group-e-travel-guide',
    element: <GroupEPage />
  },
  {
    path: '/groups/group-e',
    element: <Navigate to="/2026-world-cup-group-e-travel-guide" replace />
  },
  {
    path: '/2026-world-cup-group-f-travel-guide',
    element: <GroupFPage />
  },
  {
    path: '/groups/group-f',
    element: <Navigate to="/2026-world-cup-group-f-travel-guide" replace />
  },
  {
    path: '/2026-world-cup-group-g-travel-guide',
    element: <GroupGPage />
  },
  {
    path: '/groups/group-g',
    element: <Navigate to="/2026-world-cup-group-g-travel-guide" replace />
  },
  {
    path: '/2026-world-cup-group-h-travel-guide',
    element: <GroupHPage />
  },
  {
    path: '/groups/group-h',
    element: <Navigate to="/2026-world-cup-group-h-travel-guide" replace />
  },
  {
    path: '/2026-world-cup-group-i-travel-guide',
    element: <GroupIPage />
  },
  {
    path: '/groups/group-i',
    element: <Navigate to="/2026-world-cup-group-i-travel-guide" replace />
  },
  {
    path: '/2026-world-cup-group-j-travel-guide',
    element: <GroupJPage />
  },
  {
    path: '/groups/group-j',
    element: <Navigate to="/2026-world-cup-group-j-travel-guide" replace />
  },
  {
    path: '/2026-world-cup-group-k-travel-guide',
    element: <GroupKPage />
  },
  {
    path: '/groups/group-k',
    element: <Navigate to="/2026-world-cup-group-k-travel-guide" replace />
  },
  {
    path: '/2026-world-cup-group-l-travel-guide',
    element: <GroupLPage />
  },
  {
    path: '/groups/group-l',
    element: <Navigate to="/2026-world-cup-group-l-travel-guide" replace />
  },

  {
    path: '/group-j-travel-guide',
    element: <Navigate to="/groups/group-j" replace />
  },
  {
    path: '/group-i-travel-guide',
    element: <Navigate to="/groups/group-i" replace />
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
    path: '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide',
    element: <NewYorkCityArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/new-york-new-jersey',
    element: <Navigate to="/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide',
    element: <LosAngelesArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/los-angeles',
    element: <Navigate to="/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/miami-world-cup-2026-guide',
    element: <MiamiArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/miami',
    element: <Navigate to="/world-cup-2026-host-cities/miami-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/dallas-world-cup-2026-guide',
    element: <DallasArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/dallas',
    element: <Navigate to="/world-cup-2026-host-cities/dallas-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide',
    element: <KansasCityArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/kansas-city',
    element: <Navigate to="/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/houston-world-cup-2026-guide',
    element: <HoustonArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/houston',
    element: <Navigate to="/world-cup-2026-host-cities/houston-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/atlanta-world-cup-2026-guide',
    element: <AtlantaArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/atlanta',
    element: <Navigate to="/world-cup-2026-host-cities/atlanta-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide',
    element: <PhiladelphiaArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/philadelphia',
    element: <Navigate to="/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/seattle-world-cup-2026-guide',
    element: <SeattleArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/seattle',
    element: <Navigate to="/world-cup-2026-host-cities/seattle-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide',
    element: <SanFranciscoArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/san-francisco',
    element: <Navigate to="/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/boston-world-cup-2026-guide',
    element: <BostonArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/boston',
    element: <Navigate to="/world-cup-2026-host-cities/boston-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/toronto-world-cup-2026-guide',
    element: <TorontoArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/toronto',
    element: <Navigate to="/world-cup-2026-host-cities/toronto-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide',
    element: <VancouverArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/vancouver',
    element: <Navigate to="/world-cup-2026-host-cities/vancouver-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide',
    element: <MexicoCityArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/mexico-city',
    element: <Navigate to="/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide',
    element: <GuadalajaraArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/guadalajara',
    element: <Navigate to="/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide" replace />
  },
  {
    path: '/world-cup-2026-host-cities/monterrey-world-cup-2026-guide',
    element: <MonterreyArticlePage />
  },
  {
    path: '/world-cup-2026-host-cities/monterrey',
    element: <Navigate to="/world-cup-2026-host-cities/monterrey-world-cup-2026-guide" replace />
  },
  {
    path: '/travel-guides/:slug',
    element: <TravelGuideArticlePage />
  },
  {
    path: '/guides',
    element: <Navigate to="/guides/health-and-medical-guide-for-world-cup-2026-travelers" replace />
  },
  {
    path: '/guides/health-and-medical-guide-for-world-cup-2026-travelers',
    element: <GuidesPage />
  },
  {
    path: '/guides/health-&-medical-guide-for-world-cup-2026-travelers',
    element: <Navigate to="/guides/health-and-medical-guide-for-world-cup-2026-travelers" replace />
  },
  {
    path: '/guides/Health & Medical Guide for World Cup 2026 Travelers',
    element: <Navigate to="/guides/health-and-medical-guide-for-world-cup-2026-travelers" replace />
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
    path: '/world-cup-2026-safety-guide/:slug',
    element: <SafetyGuideArticlePage />
  },
  {
    path: '/safety-guide/:slug',
    element: <SafetyGuideArticlePage />
  },
  {
    path: '/world-cup-2026-safety-guide/world-cup-2026-safety-guide-everything-fans-need-to-know',
    element: <TransportationSafetyGuideArticlePage />
  },
  {
    path: '/safety-guide/world-cup-2026-safety-guide-everything-fans-need-to-know',
    element: <Navigate to="/world-cup-2026-safety-guide/world-cup-2026-safety-guide-everything-fans-need-to-know" replace />
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
    path: '/world-cup-2026-travel-tips/world-cup-2026-budget-guide-complete-cost-breakdown-&-savings-startegies',
    element: <TravelTipsBudgetGuidePage />
  },
  {
    path: '/world-cup-2026-travel-tips/complete-cost-breakdown-and-savings-strategies',
    element: <TravelTipsBudgetGuidePage />
  },
  {
    path: '/world-cup-2026-travel-tips/best-time-to-book-world-cup-2026-tickets-flights-and-hotels',
    element: <TravelTipsBestTimePage />
  },
  {
    path: '/world-cup-2026-travel-tips/multi-city-tournament-planning',
    element: <TravelTipsBestTimePage />
  },
  {
    path: '/world-cup-2026-travel-tips/world-cup-2026-host-city-guide-which-cities-should-you-visit',
    element: <TravelTipsHostCityPage />
  },
  {
    path: '/world-cup-2026-travel-tips/dynamic-pricing-mastery',
    element: <TravelTipsHostCityPage />
  },
  {
    path: '/world-cup-2026-travel-tips/which-cities-should-you-visit',
    element: <TravelTipsHostCityPage />
  },
  {
    path: '/world-cup-2026-travel-tips/world-cup-2026-accommodation-guide-where-to-stay-for-every-budget',
    element: <TravelTipsAccommodationGuidePage />
  },
  {
    path: '/world-cup-2026-travel-tips/where-to-stay-for-every-budget',
    element: <TravelTipsAccommodationGuidePage />
  },
  {
    path: '/world-cup-2026-travel-tips/world-cup-2026-flight-booking-guide-routes-airlines-and-strategies',
    element: <TravelTipsFlightBookingPage />
  },
  {
    path: '/world-cup-2026-travel-tips/world-cup-2026-flight-booking-guide-routes-airlines-strategies',
    element: <TravelTipsFlightBookingPage />
  },
  {
    path: '/world-cup-2026-travel-tips/rideshare-pickup-zone-strategy',
    element: <TravelTipsFlightBookingPage />
  },
  {
    path: '/world-cup-2026-travel-tips/world-cup-2026-itinerary-planning-1-2-or-3-week-sample-itineraries',
    element: <TravelTipsItineraryPlanningPage />
  },
  {
    path: '/world-cup-2026-travel-tips/1-2-or-3-week-sample-itineraries',
    element: <TravelTipsItineraryPlanningPage />
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
    path: '/world-cup-2026-safety-guide',
    element: <SafetyGuidePage />
  },
  {
    path: '/safety-guide',
    element: <Navigate to="/world-cup-2026-safety-guide" replace />
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
    path: '/world-cup-2026-stadiums/estadio-azteca',
    element: <Navigate to="/world-cup-2026-stadiums/estadio-azteca-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/metlife-stadium',
    element: <Navigate to="/world-cup-2026-stadiums/metlife-stadium-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/att-stadium',
    element: <Navigate to="/world-cup-2026-stadiums/att-stadium-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/arrowhead-stadium',
    element: <Navigate to="/world-cup-2026-stadiums/arrowhead-stadium-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/estadio-bbva',
    element: <Navigate to="/world-cup-2026-stadiums/estadio-bbva-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/nrg-stadium',
    element: <Navigate to="/world-cup-2026-stadiums/nrg-stadium-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/mercedes-benz-stadium',
    element: <Navigate to="/world-cup-2026-stadiums/mercedes-benz-stadium-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/sofi-stadium',
    element: <Navigate to="/world-cup-2026-stadiums/sofi-stadium-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/lumen-field',
    element: <Navigate to="/world-cup-2026-stadiums/lumen-field-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/levis-stadium',
    element: <Navigate to="/world-cup-2026-stadiums/levis-stadium-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/lincoln-financial-field',
    element: <Navigate to="/world-cup-2026-stadiums/lincoln-financial-field-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/gillette-stadium',
    element: <Navigate to="/world-cup-2026-stadiums/gillette-stadium-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/hard-rock-stadium',
    element: <Navigate to="/world-cup-2026-stadiums/hard-rock-stadium-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/bmo-field',
    element: <Navigate to="/world-cup-2026-stadiums/bmo-field-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/bc-place-stadium',
    element: <Navigate to="/world-cup-2026-stadiums/bc-place-stadium-guide" replace />
  },
  {
    path: '/world-cup-2026-stadiums/estadio-akron',
    element: <Navigate to="/world-cup-2026-stadiums/estadio-akron-guide" replace />
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
    path: '/world-cup-2026-prediction-contest-privacy',
    element: <ContestPrivacyPage />
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
    path: '/world-cup-2026-prediction-contest-terms',
    element: <ContestTermsPage />
  },
  {
    path: '/world-cup-2026-prediction-contest-support',
    element: <ContestSupportPage />
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
    path: '/editorial-policy',
    element: <EditorialPolicyPage />
  },
  {
    path: '/about/authors',
    element: <AuthorsPage />
  },
  {
    path: '/admin/predictions',
    element: <AdminPredictionsPage />
  },
  {
    path: '/my-prediction',
    element: <MyPredictionPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;
