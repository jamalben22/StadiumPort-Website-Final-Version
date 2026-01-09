'use client';

import React, { useMemo, useEffect, useState } from 'react';
import { usePredictionByCode } from '../../../../features/game/hooks/usePrediction';
import { ShareDashboard } from '../../../../features/game/components/ShareDashboard';
import { GameHeader } from '../../../../features/game/components/GameHeader';
import { GameLayout } from '../../../../features/game/components/GameLayout';
import { TEAMS } from '../../../../features/game/lib/wc26-data';
import { generateBreadcrumbSchema } from '@/lib/schema';

interface ShareClientProps {
  uniqueId: string;
  initialPrediction?: any;
}

export default function ShareClient({ uniqueId, initialPrediction }: ShareClientProps) {
  const nonce = useMemo(() => {
    if (typeof document === "undefined") return undefined;
    return document.querySelector('meta[name="csp-nonce"]')?.getAttribute("content") ?? undefined;
  }, []);

  // If we have initial data (from server), use it. Otherwise fetch.
  const { prediction: fetchedPrediction, loading: hookLoading, error: hookError } = usePredictionByCode(initialPrediction ? undefined : uniqueId);

  const prediction = initialPrediction || fetchedPrediction;
  const loading = !initialPrediction && hookLoading;
  const error = !initialPrediction ? hookError : (initialPrediction ? '' : 'Prediction not found');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Prediction Game', item: '/world-cup-2026-prediction-game' },
    { name: 'Share', item: `/world-cup-2026-prediction-game/share/${uniqueId}` }
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
        nonce={nonce}
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
