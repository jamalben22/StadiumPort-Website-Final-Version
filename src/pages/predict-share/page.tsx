import React, { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GameProvider, useGame } from '../../features/game/context/GameContext'
import { ResultDashboard } from '../../features/game/components/ResultDashboard'
import { TEAMS } from '../../features/game/lib/wc26-data'
import { supabase } from '../../lib/supabase'
import { SEO } from '../../components/common/SEO'
import { SchemaOrg } from '../../components/seo/SchemaOrg'
import { GameLayout } from '../../features/game/components/GameLayout'

const STORAGE_KEY = 'sp_wc26_predictions'

function usePredictionByCode(code?: string) {
  const [prediction, setPrediction] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      if (!code) return
      setLoading(true)
      setError('')
      setPrediction(null)

      if (supabase) {
        const { data, error } = await supabase
          .from('predictions')
          .select('*')
          .eq('unique_id', code)
          .single()
        if (!error && data) {
          setPrediction(data)
          setLoading(false)
          return
        }
      }

      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        const map = raw ? JSON.parse(raw) : {}
        const local = map[code!]
        if (local) {
          setPrediction(local)
        } else {
          setError('Prediction not found')
        }
      } catch {
        setError('Prediction not found')
      }
      setLoading(false)
    }
    fetchData()
  }, [code])

  return { prediction, loading, error }
}

export default function PredictSharePage() {
  const { code } = useParams()
  const navigate = useNavigate()
  const { prediction, loading, error } = usePredictionByCode(code)

  const champion = useMemo(() => {
    const champId = prediction?.predictions?.knockoutPicks?.['F-01']
    return TEAMS.find(t => t.id === champId) || TEAMS[0]
  }, [prediction])

  const runnerUp = useMemo(() => {
    const picks = prediction?.predictions?.knockoutPicks || {}
    const championId = picks['F-01']
    const finalist1 = picks['SF-01']
    const finalist2 = picks['SF-02']
    const ruId = finalist1 === championId ? finalist2 : finalist1
    return TEAMS.find(t => t.id === ruId)
  }, [prediction])

  const pageTitle = prediction ? `Shared Prediction • ${prediction.name}` : 'Shared Prediction'
  const pageDesc = 'View a shared World Cup 2026 prediction — read-only presentation.'
  const pageUrl = `/world-cup-2026-prediction-game/share/${code || ''}`

  const goPlay = () => navigate('/world-cup-2026-prediction-game')

  return (
    <GameLayout>
      <SEO title={pageTitle} description={pageDesc} url={pageUrl} image={`https://stadiumport.com/share/wc26-${champion?.id || 'default'}.png`} />
      <SchemaOrg schema={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: pageTitle,
        description: pageDesc,
        url: `https://stadiumport.com${pageUrl}`
      }} />

      <main className="relative z-10 h-full overflow-y-auto px-4 md:px-6 py-6">
        <div className="max-w-7xl mx-auto">
          {loading && (
            <div className="flex items-center justify-center py-16">
              <div className="w-16 h-16 border-4 border-white/10 border-t-[#FBBF24] rounded-full animate-spin" />
            </div>
          )}
          {!loading && error && (
            <div className="max-w-xl mx-auto bg-red-500/10 border border-red-500/20 text-red-300 rounded-xl p-6 text-center">
              <p className="font-medium">{error}</p>
            </div>
          )}
          {!loading && prediction && (
            <GameProvider>
              {(() => {
                const HydrateGame: React.FC<{ data: any }> = ({ data }) => {
                  const { updateGroupStandings, setThirdPlacePicks, updateKnockoutPicks } = useGame();
                  React.useEffect(() => {
                    const preds = data?.predictions || {};
                    const gs: Record<string, string[]> = preds.groupStandings || {};
                    Object.entries(gs).forEach(([gid, teams]) => {
                      if (Array.isArray(teams)) updateGroupStandings(gid, teams);
                    });
                    const tp: string[] = preds.thirdPlacePicks || [];
                    if (Array.isArray(tp)) setThirdPlacePicks(tp);
                    const ko: Record<string, string> = preds.knockoutPicks || {};
                    if (ko && typeof ko === 'object') updateKnockoutPicks(ko);
                  }, [data]);
                  return null;
                };
                return <HydrateGame data={prediction} />;
              })()}
              

              <ResultDashboard 
                champion={champion}
                runnerUp={runnerUp}
                userName={prediction.name}
                userEmail={prediction.email}
                userCountry={prediction.country}
                uniqueId={prediction.unique_id || code}
                headlineOverride={`Check out ${prediction.name}'s World Cup 2026 Predictions!`}
                participantMinimal={true}
                disableSEO={true}
              />

              

              
            </GameProvider>
          )}
        </div>
      </main>
    </GameLayout>
  )
}
