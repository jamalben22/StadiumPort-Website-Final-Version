
import { lazy } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// Critical homepage imports directly to avoid white screen on first paint
import HomePage from '../pages/home/page';
// Simplified safeLazy - just a wrapper around lazy for now to debug
const safeLazy = (importer: () => Promise<any>, _timeoutMs?: number) => lazy(importer);
const AboutPage = safeLazy(() => import('../pages/about/page'));
const ContactPage = safeLazy(() => import('../pages/contact/page'));
const DealsPage = safeLazy(() => import('../pages/deals/page'));
const DealAlertsPage = safeLazy(() => import('../pages/deal-alerts/page'));
const AccommodationPage = safeLazy(() => import('../pages/accommodation/page'));
const AccommodationArticlePage = safeLazy(() => import('../pages/accommodation/article/page'));
const TravelGuidesPage = safeLazy(() => import('../pages/travel-guides/page'));
const TravelGuideArticlePage = safeLazy(() => import('../pages/travel-guides/article/page'));
const TravelRoutesPage = safeLazy(() => import('../pages/travel-routes/page'));
const TravelRoutesArticlePage = safeLazy(() => import('../pages/travel-routes/article/page'));
const BudgetGuidesPage = safeLazy(() => import('../pages/budget-guides/page'));
const BudgetGuideArticlePage = safeLazy(() => import('../pages/budget-guides/article/page'));
const PackingListsPage = safeLazy(() => import('../pages/packing-lists/page'));
const LuxuryTravelPage = safeLazy(() => import('../pages/luxury-travel/page'));
const LuxuryTravelArticlePage = safeLazy(() => import('../pages/luxury-travel/article/page'));
const CityComparisonsPage = safeLazy(() => import('../pages/city-comparisons/page'));
const CityComparisonsArticlePage = safeLazy(() => import('../pages/city-comparisons/article/page'));
const EditorialPolicyPage = safeLazy(() => import('../pages/legal/editorial-policy/page'));
const AuthorsPage = safeLazy(() => import('../pages/about/authors/page'));
const PrivacyPage = safeLazy(() => import('../pages/legal/privacy/page'));
const ContestPrivacyPage = safeLazy(() => import('../pages/legal/contest-privacy/page'));
const TermsPage = safeLazy(() => import('../pages/legal/terms/page'));
const ContestTermsPage = safeLazy(() => import('../pages/legal/contest-terms/page'));
const ContestSupportPage = safeLazy(() => import('../pages/legal/contest-support/page'));
const AffiliateDisclaimerPage = safeLazy(() => import('../pages/legal/affiliate-disclaimer/page'));
const PredictPage = safeLazy(() => import('../pages/PredictPage'));
const DrawHubPage = safeLazy(() => import('../pages/draw-hub/page'));
const GroupsSchedulePage = safeLazy(() => import('../pages/groups/page'));
const GroupAPage = safeLazy(() => import('../pages/groups/group-a/page'));
const GroupBPage = safeLazy(() => import('../pages/groups/group-b/page'));
const GroupCPage = safeLazy(() => import('../pages/groups/group-c/page'));
const GroupDPage = safeLazy(() => import('../pages/groups/group-d/page'));
const GroupEPage = safeLazy(() => import('../pages/groups/group-e/page'));
const GroupFPage = safeLazy(() => import('../pages/groups/group-f/page'));
const GroupGPage = safeLazy(() => import('../pages/groups/group-g/page'));
const GroupHPage = safeLazy(() => import('../pages/groups/group-h/page'));
const GroupIPage = safeLazy(() => import('../pages/groups/group-i/page'));
const GroupJPage = safeLazy(() => import('../pages/groups/group-j/page'));
const GroupKPage = safeLazy(() => import('../pages/groups/group-k/page'));
const GroupLPage = safeLazy(() => import('../pages/groups/group-l/page'));
const NotFoundPage = safeLazy(() => import('../pages/NotFound'));
const AdminPredictionsPage = safeLazy(() => import('../pages/admin/predictions/page'));
const MyPredictionPage = safeLazy(() => import('../pages/my-prediction/page'));
const PredictResultsPage = safeLazy(() => import('../pages/predict-results/page'));
const PredictSharePage = safeLazy(() => import('../pages/predict-share/page'));

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
    path: '/travel-tips',
    element: <TravelTipsPage />
  },
  {
    path: '/safety-guide',
    element: <SafetyGuidePage />
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
