import React, { useMemo, useRef, useEffect } from 'react'
import { useGame } from '../context/GameContext'
import { TEAMS, TEAM_MAP } from '../lib/wc26-data'
import { generateBracketMatches, Match } from '../lib/bracket-logic'

export const PredictionSummary = () => {
  const { groupStandings, thirdPlacePicks, knockoutPicks, setCurrentStep } = useGame()

  const { rounds } = useMemo(() => {
    const { roundOf32 } = generateBracketMatches(groupStandings, thirdPlacePicks || [])

    const r16: Match[] = []
    for (let i = 1; i <= 8; i++) {
      const id = `R16-${i.toString().padStart(2, '0')}`
      const feeders = roundOf32.filter(m => m.nextMatchId === id)
      const f1 = feeders[0]?.id
      const f2 = feeders[1]?.id
      const team1Id = (f1 ? knockoutPicks[f1] : null) || null
      const team2Id = (f2 ? knockoutPicks[f2] : null) || null
      r16.push({ id, team1Id, team2Id, nextMatchId: `QF-${Math.ceil(i/2).toString().padStart(2, '0')}` })
    }

    const qf: Match[] = []
    for (let i = 1; i <= 4; i++) {
      const id = `QF-${i.toString().padStart(2, '0')}`
      const feeders = r16.filter(m => m.nextMatchId === id)
      const f1 = feeders[0]?.id
      const f2 = feeders[1]?.id
      const team1Id = (f1 ? knockoutPicks[f1] : null) || null
      const team2Id = (f2 ? knockoutPicks[f2] : null) || null
      qf.push({ id, team1Id, team2Id, nextMatchId: `SF-${Math.ceil(i/2).toString().padStart(2, '0')}` })
    }

    const sf: Match[] = []
    for (let i = 1; i <= 2; i++) {
      const id = `SF-${i.toString().padStart(2, '0')}`
      const feeders = qf.filter(m => m.nextMatchId === id)
      const f1 = feeders[0]?.id
      const f2 = feeders[1]?.id
      const team1Id = (f1 ? knockoutPicks[f1] : null) || null
      const team2Id = (f2 ? knockoutPicks[f2] : null) || null
      sf.push({ id, team1Id, team2Id, nextMatchId: 'F-01' })
    }

    return { rounds: { roundOf32, r16, qf, sf } }
  }, [groupStandings, thirdPlacePicks, knockoutPicks])

  const getTeam = (id?: string | null) => (id ? TEAM_MAP.get(id) : undefined)
  const champion = getTeam(knockoutPicks['F-01'])
  const tpWinner = getTeam(knockoutPicks['TP-01'])
  const sf1LoserId = (() => {
    const m = rounds.sf[0]
    if (!m) return null
    const win = knockoutPicks[m.id]
    return win === m.team1Id ? m.team2Id : m.team1Id
  })()
  const sf2LoserId = (() => {
    const m = rounds.sf[1]
    if (!m) return null
    const win = knockoutPicks[m.id]
    return win === m.team1Id ? m.team2Id : m.team1Id
  })()
  const tpLoser = getTeam(tpWinner?.id === sf1LoserId ? sf2LoserId : sf1LoserId)
  const runnerUp = (() => {
    const final = { id: 'F-01', team1Id: rounds.sf[0]?.id ? knockoutPicks[rounds.sf[0].id] : null, team2Id: rounds.sf[1]?.id ? knockoutPicks[rounds.sf[1].id] : null }
    const champId = knockoutPicks['F-01']
    const ruId = final.team1Id === champId ? final.team2Id : final.team1Id
    return getTeam(ruId)
  })()

  const floaterRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = floaterRef.current
    if (!el) return
    const parent = el.parentElement as HTMLElement
    if (!parent) return
    let current = 0
    const margin = 24
    const step = () => {
      const parentTop = parent.getBoundingClientRect().top + window.scrollY
      const height = el.offsetHeight
      const maxY = Math.max(0, parent.scrollHeight - height - margin)
      const target = Math.min(maxY, window.scrollY - parentTop + window.innerHeight - height - margin)
      current += (target - current) * 0.2
      el.style.transform = `translate(-50%, ${current}px)`
      raf = requestAnimationFrame(step)
    }
    let raf = requestAnimationFrame(step)
    const onResize = () => {}
    window.addEventListener('scroll', onResize, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onResize)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/95 border border-white/40 backdrop-blur-xl shadow-sm">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#01b47d] shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
          <span className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.22em] font-['Rajdhani']">Step 4 of 6: Prediction Summary</span>
        </div>
        <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-slate-900 uppercase tracking-tighter drop-shadow-sm">Review Your Full Tournament Picks</h2>
        <p className="text-slate-900 font-mono text-xs uppercase tracking-widest mt-2">Double-check everything before you continue.</p>
      </div>

      {/* Group Stage */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-px flex-1 bg-white/40"></div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani'] text-slate-900">Group Stage Selections</span>
          <div className="h-px flex-1 bg-white/40"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {Object.entries(groupStandings).map(([gid, teamIds]) => {
            return (
              <div key={gid} className="bg-white/40 border border-white/50 rounded-lg p-3 backdrop-blur-md shadow-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-900/10">
                  <span className="text-[10px] font-bold text-slate-900 font-['Rajdhani']">GROUP {gid}</span>
                </div>
                <div className="mt-2 space-y-1">
                  {teamIds.map((tid, idx) => {
                    const t = getTeam(tid)
                    const rankLabel = idx === 0 ? '1st' : idx === 1 ? '2nd' : idx === 2 ? '3rd' : '4th'
                    const advanceLabel = idx < 2 ? 'Advances' : (idx === 2 ? (thirdPlacePicks?.includes(tid) ? '3rd Qualifier' : 'Eliminated') : 'Eliminated')
                    return (
                      <div key={tid} className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          {t?.flagUrl && <img src={t.flagUrl} className="w-5 h-4 rounded shadow-sm ring-1 ring-black/10" />}
                          <span className="text-xs font-['Teko'] uppercase text-slate-900 font-bold">{t?.name || 'TBD'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-slate-800 font-bold">{rankLabel}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded border ${advanceLabel === 'Advances' ? 'border-[#01b47d]/40 text-[#01b47d] bg-[#01b47d]/10 font-bold' : advanceLabel === '3rd Qualifier' ? 'border-amber-600/40 text-amber-700 bg-amber-500/10 font-bold' : 'border-slate-400 text-slate-500 font-medium'}`}>{advanceLabel}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Knockout Rounds */}
      {([
        { title: 'Round of 32', list: rounds.roundOf32 },
        { title: 'Round of 16', list: rounds.r16 },
        { title: 'Quarter-Finals', list: rounds.qf },
        { title: 'Semi-Finals', list: rounds.sf },
      ] as { title: string; list: Match[] }[]).map(section => (
        <div key={section.title} className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px flex-1 bg-white/40"></div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani'] text-slate-800">{section.title}</span>
            <div className="h-px flex-1 bg-white/40"></div>
          </div>
          <div className={`${section.title === 'Semi-Finals' ? 'grid grid-cols-1 md:grid-cols-2 md:max-w-2xl mx-auto' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'} gap-3`}>
            {section.list.map(m => {
              const wId = knockoutPicks[m.id]
              const t1 = getTeam(m.team1Id || '')
              const t2 = getTeam(m.team2Id || '')
              return (
                <div key={m.id} className="bg-white/40 border border-white/50 rounded-lg p-3 backdrop-blur-md shadow-sm">
                  <div className={`flex items-center justify-between p-1.5 rounded transition-all ${wId === t1?.id ? 'bg-[#01b47d]/10 ring-1 ring-[#01b47d]/40 shadow-sm' : ''}`}>
                    <div className="flex items-center gap-2">
                      {t1?.flagUrl && <img src={t1.flagUrl} className="w-6 h-4 rounded shadow-sm ring-1 ring-black/10" />}
                      <span className={`text-xs font-['Teko'] uppercase ${wId === t1?.id ? 'text-black font-bold' : 'text-slate-900 font-medium'}`}>{t1?.name || 'TBD'}</span>
                    </div>
                  </div>
                  <div className={`flex items-center justify-between p-1.5 rounded mt-1 transition-all ${wId === t2?.id ? 'bg-[#01b47d]/10 ring-1 ring-[#01b47d]/40 shadow-sm' : ''}`}>
                    <div className="flex items-center gap-2">
                      {t2?.flagUrl && <img src={t2.flagUrl} className="w-6 h-4 rounded shadow-sm ring-1 ring-black/10" />}
                      <span className={`text-xs font-['Teko'] uppercase ${wId === t2?.id ? 'text-slate-900 font-bold' : 'text-slate-800 font-medium'}`}>{t2?.name || 'TBD'}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Third Place & Final */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-px flex-1 bg-white/40"></div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] font-['Rajdhani'] text-slate-900">Final Standings</span>
          <div className="h-px flex-1 bg-white/40"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/40 border border-white/50 rounded-xl p-4 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Third Place Match</span>
            </div>
            <div className={`flex items-center justify-between p-2 rounded ${tpWinner?.id === (sf1LoserId || '') ? 'bg-[#01b47d]/10 ring-1 ring-[#01b47d]/40' : ''}`}>
              <div className="flex items-center gap-3">
                {sf1LoserId && getTeam(sf1LoserId)?.flagUrl && <img src={getTeam(sf1LoserId)!.flagUrl} className="w-6 h-4 rounded shadow-sm ring-1 ring-black/10" />}
                <span className="font-['Teko'] text-lg uppercase text-slate-900 font-bold">{getTeam(sf1LoserId || '')?.name || 'TBD'}</span>
              </div>
              {tpWinner?.id === sf1LoserId && <span className="text-[10px] font-bold bg-[#01b47d] text-white px-2 py-0.5 rounded">WIN</span>}
            </div>
            <div className={`mt-2 flex items-center justify-between p-2 rounded ${tpWinner?.id === (sf2LoserId || '') ? 'bg-[#01b47d]/10 ring-1 ring-[#01b47d]/40' : ''}`}>
              <div className="flex items-center gap-3">
                {sf2LoserId && getTeam(sf2LoserId)?.flagUrl && <img src={getTeam(sf2LoserId)!.flagUrl} className="w-6 h-4 rounded shadow-sm ring-1 ring-black/10" />}
                <span className="font-['Teko'] text-lg uppercase text-slate-900 font-bold">{getTeam(sf2LoserId || '')?.name || 'TBD'}</span>
              </div>
              {tpWinner?.id === sf2LoserId && <span className="text-[10px] font-bold bg-[#01b47d] text-white px-2 py-0.5 rounded">WIN</span>}
            </div>
            <div className="mt-3 text-[10px] text-slate-700 font-bold">4th: {tpLoser?.name || 'TBD'}</div>
          </div>

          <div className="bg-gradient-to-b from-white/40 to-white/60 border border-[#FBBF24]/50 rounded-xl p-4 shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-900">Final Match</span>
            </div>
            <div className={`flex items-center justify-between p-2 rounded ${champion?.id === (rounds.sf[0] ? knockoutPicks[rounds.sf[0].id] : '') ? 'bg-[#FBBF24]/20 ring-1 ring-[#FBBF24]/50' : ''}`}>
              <div className="flex items-center gap-3">
                {rounds.sf[0] && knockoutPicks[rounds.sf[0].id] && getTeam(knockoutPicks[rounds.sf[0].id])?.flagUrl && <img src={getTeam(knockoutPicks[rounds.sf[0].id])!.flagUrl} className="w-6 h-4 rounded ring-1 ring-[#FBBF24]/40 shadow-sm" />}
                <span className="font-['Teko'] text-lg uppercase text-slate-900 font-bold">{getTeam(rounds.sf[0] ? knockoutPicks[rounds.sf[0].id] : '')?.name || 'TBD'}</span>
              </div>
              {champion?.id === (rounds.sf[0] ? knockoutPicks[rounds.sf[0].id] : '') && <span className="text-[10px] font-bold bg-[#FBBF24] text-black px-2 py-0.5 rounded">WINNER</span>}
            </div>
            <div className={`mt-2 flex items-center justify-between p-2 rounded ${champion?.id === (rounds.sf[1] ? knockoutPicks[rounds.sf[1].id] : '') ? 'bg-[#FBBF24]/20 ring-1 ring-[#FBBF24]/50' : ''}`}>
              <div className="flex items-center gap-3">
                {rounds.sf[1] && knockoutPicks[rounds.sf[1].id] && getTeam(knockoutPicks[rounds.sf[1].id])?.flagUrl && <img src={getTeam(knockoutPicks[rounds.sf[1].id])!.flagUrl} className="w-6 h-4 rounded ring-1 ring-[#FBBF24]/40 shadow-sm" />}
                <span className="font-['Teko'] text-lg uppercase text-slate-900 font-bold">{getTeam(rounds.sf[1] ? knockoutPicks[rounds.sf[1].id] : '')?.name || 'TBD'}</span>
              </div>
              {champion?.id === (rounds.sf[1] ? knockoutPicks[rounds.sf[1].id] : '') && <span className="text-[10px] font-bold bg-[#FBBF24] text-black px-2 py-0.5 rounded">WINNER</span>}
            </div>
            <div className="mt-3 text-[10px] text-slate-900 font-bold">Runner-Up: {runnerUp?.name || 'TBD'}</div>
          </div>
        </div>
      </div>

      <div ref={floaterRef} className="absolute top-0 left-1/2 z-50 pointer-events-none" style={{ transform: 'translate(-50%, 0px)' }}>
        <div className="pointer-events-auto h-12 px-1 flex items-center bg-white/95 backdrop-blur-3xl border border-white/40 shadow-lg rounded-full">
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-black/5 text-slate-700 hover:text-black cursor-pointer"
            onClick={() => setCurrentStep(2)}
            aria-label="Back to Edit"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 18l-6-6 6-6"></path></svg>
          </button>
          <button
            className="rounded-full h-10 px-6 text-xs font-bold tracking-widest uppercase transition-all duration-200 flex items-center justify-center whitespace-nowrap bg-black text-white shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => setCurrentStep(4)}
            aria-label="Confirm & Submit"
            type="button"
          >
            Confirm & Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default PredictionSummary
