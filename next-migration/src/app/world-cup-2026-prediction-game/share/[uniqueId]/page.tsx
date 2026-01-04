'use client';

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { usePredictionByCode } from '../../../../features/game/hooks/usePrediction';
import { ShareDashboard } from '../../../../features/game/components/ShareDashboard';
import { GameHeader } from '../../../../features/game/components/GameHeader';
import { GameLayout } from '../../../../features/game/components/GameLayout';
import { TEAMS } from '../../../../features/game/lib/wc26-data';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export default function SharePage() {
  const params = useParams();
  const code = params?.uniqueId as string;
  const { prediction, loading, error } = usePredictionByCode(code);

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Prediction Game', item: '/world-cup-2026-prediction-game' },
    { name: 'Share', item: `/world-cup-2026-prediction-game/share/${code}` }
  ]);

  const champion = useMemo(() => {
    if (!prediction?.predictions?.knockoutPicks) return undefined;
    const champId = prediction.predictions.knockoutPicks['F-01'];
    return TEAMS.find(t => t.id === champId);
  }, [prediction]);

  if (loading) {
    return (
      <GameLayout allowScroll={true}>
        <GameHeader />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
        </div>
      </GameLayout>
    );
  }

  if (error || !prediction) {
    return (
      <GameLayout allowScroll={true}>
        <GameHeader />
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold text-slate-900">Prediction Not Found</h1>
          <p className="text-slate-600">The prediction you are looking for does not exist or has been removed.</p>
        </div>
      </GameLayout>
    );
  }

  return (
    <GameLayout allowScroll={true}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <GameHeader />
      
      {/* Breadcrumbs */}
      <div className="w-full max-w-5xl mx-auto px-4 pt-4 pb-0">
        <Breadcrumb 
          items={[
            { label: 'Prediction Game', href: '/world-cup-2026-prediction-game' },
            { label: 'Shared Prediction', href: '#' }
          ]} 
          variant="light"
          className="mb-8"
        />
      </div>

      <ShareDashboard 
        champion={champion}
        userName={prediction.name}
        groupStandings={prediction.predictions.groupStandings}
        thirdPlacePicks={prediction.predictions.thirdPlacePicks}
        knockoutPicks={prediction.predictions.knockoutPicks}
      />
    </GameLayout>
  );
}
