'use client';

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { usePredictionByCode } from '../../../../features/game/hooks/usePrediction';
import { ShareDashboard } from '../../../../features/game/components/ShareDashboard';
import { GameHeader } from '../../../../features/game/components/GameHeader';
import { GameLayout } from '../../../../features/game/components/GameLayout';
import { TEAMS } from '../../../../features/game/lib/wc26-data';

export default function SharePage() {
  const params = useParams();
  const code = params?.uniqueId as string;
  const { prediction, loading, error } = usePredictionByCode(code);

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
