import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { GameProvider, useGame } from '../../features/game/context/GameContext'
import { ResultDashboard } from '../../features/game/components/ResultDashboard'
import { TEAMS } from '../../features/game/lib/wc26-data'
import { supabase } from '../../lib/supabase'
import { SEO } from '../../components/common/SEO'
import { SchemaOrg } from '../../components/seo/SchemaOrg'
import { GameLayout } from '../../features/game/components/GameLayout'
import { Share2, Copy, CheckCircle2, ArrowLeft, Home } from 'lucide-react'

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

      // 1) Try Supabase if configured
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

      // 2) Fallback to localStorage (client-side persistence)
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        const map = raw ? JSON.parse(raw) : {}
        const local = map[code]
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

export const PredictResultsPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [search] = useSearchParams()
  const code = params.code || search.get('code') || (typeof window !== 'undefined' ? (localStorage.getItem('sp_wc26_last_id') || '') : '')
  const { prediction, loading, error } = usePredictionByCode(code || undefined)

  const ResultsView = ({ prediction }: { prediction: any }) => {
    const { updateGroupStandings, setThirdPlacePicks, updateKnockoutPicks, setCurrentStep } = useGame()
    useEffect(() => {
      if (!prediction || !prediction.predictions) return
      const { groupStandings, thirdPlacePicks, knockoutPicks } = prediction.predictions
      Object.entries(groupStandings || {}).forEach(([groupId, teams]: any) => {
        updateGroupStandings(groupId, teams as string[])
      })
      if (thirdPlacePicks) setThirdPlacePicks(thirdPlacePicks)
      if (knockoutPicks) updateKnockoutPicks(knockoutPicks)
      setCurrentStep(4)
    }, [prediction])

    return (
      <ResultDashboard 
        champion={champion}
        runnerUp={runnerUp}
        userName={prediction.name}
        userEmail={prediction.email}
        userCountry={prediction.country}
        uniqueId={prediction.unique_id || code}
        disableSEO={true}
      />
    )
  }

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

  const pageTitle = prediction ? `World Cup 2026 Official Entry • ${prediction.name}` : 'World Cup 2026 Official Entry'
  const pageDesc = 'Your official World Cup 2026 prediction entry with champion highlight, full bracket, and shareable card.'
  const pageUrl = code ? `/world-cup-2026-prediction-game/entry/${code}` : '/world-cup-2026-prediction-game/entry'

  const pageHref = typeof window !== 'undefined' ? window.location.href : `https://stadiumport.com${pageUrl}`
  const shareHref = (typeof window !== 'undefined')
    ? `${window.location.origin}/world-cup-2026-prediction-game/share/${code || ''}`
    : `https://stadiumport.com/world-cup-2026-prediction-game/share/${code || ''}`
  const shareText = prediction ? `Check out ${prediction.name}'s World Cup 2026 Predictions!` : 'My World Cup 2026 prediction'
  

  

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareHref)
    } catch {}
  }
  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent('My World Cup 2026 prediction')}&url=${encodeURIComponent(pageHref)}`
    window.open(url, '_blank')
  }
  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageHref)}`
    window.open(url, '_blank')
  }
  const handleShareInstagram = () => {
    handleShareNative()
  }
  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${shareHref}`)}`
    window.open(url, '_blank')
  }
  const handleShareNative = async () => {
    if ((navigator as any).share) {
      try {
        await (navigator as any).share({ title: pageTitle, text: 'My World Cup 2026 prediction', url: pageHref })
      } catch {}
    } else {
      await handleCopyLink()
      const btn = document.getElementById('share-link-btn')
      if (btn) {
        const original = btn.innerHTML
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
        setTimeout(() => { btn.innerHTML = original }, 1500)
      }
    }
  }
  const handlePlayAgain = () => navigate('/world-cup-2026-prediction-game')

  return (
    <GameLayout>
      <SEO title={pageTitle} description={pageDesc} url={pageUrl} image={`https://stadiumport.com/share/wc26-${(prediction?.predictions?.knockoutPicks || {})['F-01'] || 'default'}.png`} />
      <SchemaOrg schema={{
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: pageTitle,
        description: pageDesc,
        url: `https://stadiumport.com${pageUrl}`
      }} />
      <SchemaOrg schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stadiumport.com' },
          { '@type': 'ListItem', position: 2, name: 'World Cup 2026 Predictor', item: 'https://stadiumport.com/world-cup-2026-prediction-game' },
          { '@type': 'ListItem', position: 3, name: 'Official Entry', item: `https://stadiumport.com${pageUrl}` }
        ]
      }} />
      <div className="relative z-10 w-full h-full flex flex-col">
      <div className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-6 pt-4 pb-3 bg-gradient-to-b from-black/60 to-transparent">
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate('/'); }}
          className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/8 border border-white/15 hover:bg-white/12 transition-all ring-1 ring-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(255,255,255,0.06)] active:scale-[0.98]"
          title="Return to Home"
        >
          <img src="/images/Logos/Desktop Header SP Logo 2400 x 600 px Night mode.svg" alt="Stadiumport" className="h-5 w-auto opacity-90 group-hover:opacity-100" />
          <span className="text-[11px] font-inter font-medium uppercase tracking-[0.12em] text-white/85 group-hover:text-white">Home</span>
        </button>

        <div className="inline-flex items-center gap-2 px-2 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(255,255,255,0.06)]">
          <button id="share-link-btn" type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShareNative(); }} aria-label="Copy Link" className="px-2.5 py-1.5 rounded-full bg-white/8 border border-white/15 hover:bg-white/12 transition-colors flex items-center gap-1 ring-1 ring-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-white/85" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </button>
          <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShareWhatsApp(); }} aria-label="Share on WhatsApp" className="px-2.5 py-1.5 rounded-full bg-white/8 border border-white/15 hover:bg-white/12 transition-colors ring-1 ring-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 text-white/85" fill="currentColor">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </button>
          <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShareInstagram(); }} aria-label="Share on Instagram" className="px-2.5 py-1.5 rounded-full bg-white/8 border border-white/15 hover:bg-white/12 transition-colors ring-1 ring-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 text-white/85" fill="currentColor">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </button>
          <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShareFacebook(); }} aria-label="Share on Facebook" className="px-2.5 py-1.5 rounded-full bg-white/8 border border-white/15 hover:bg-white/12 transition-colors ring-1 ring-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 text-white/85" fill="currentColor">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </button>
          <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShareTwitter(); }} aria-label="Share on X" className="px-2.5 py-1.5 rounded-full bg-white/8 border border-white/15 hover:bg-white/12 transition-colors ring-1 ring-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 text-white/85" fill="currentColor">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </button>
        </div>
      </div>

      <main className="relative z-10 flex-1 overflow-y-auto no-scrollbar p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {loading && (
            <div className="flex items-center justify-center py-16">
              <div className="w-16 h-16 border-4 border-slate-200 dark:border-white/10 border-t-[#FBBF24] rounded-full animate-spin" />
            </div>
          )}
          {!loading && error && (
            <div className="max-w-xl mx-auto bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-200 rounded-xl p-6 text-center">
              <p className="font-medium">{error}</p>
              <p className="mt-2 text-sm">Double-check your prediction code or try again later.</p>
            </div>
          )}
          {!loading && prediction && (
            <GameProvider>
              <ResultsView prediction={prediction} />

              {/* Action Island */}
              <div className="mt-8 flex justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/6 border border-white/12 ring-1 ring-white/8 backdrop-blur-xl shadow-[0_8px_30px_rgba(255,255,255,0.06)]">
                  <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handlePlayAgain(); }} className="px-3.5 py-2 rounded-full bg-[#01b47d] hover:bg-emerald-500 text-white text-[12px] font-inter font-medium uppercase tracking-[0.12em] shadow-[0_0_30px_rgba(1,180,125,0.25)]">
                    Play Again
                  </button>
                  <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShareNative(); }} className="px-3.5 py-2 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/15 transition-colors flex items-center gap-2 text-[12px] font-inter font-medium uppercase tracking-[0.12em]">
                    <Share2 className="w-4 h-4" />
                    <span>Share Your Results</span>
                  </button>
                </div>
              </div>

              
            </GameProvider>
          )}
        </div>
      </main>
      <div className="relative z-20 px-6 pb-6 text-center">
        <span className="text-[10px] text-white/30 font-['Rajdhani'] tracking-[0.3em]">
          © 2026 StadiumPort • <a href="/privacy" className="underline hover:no-underline">Privacy</a>
        </span>
      </div>
      </div>
    </GameLayout>
  )
}

export default PredictResultsPage
