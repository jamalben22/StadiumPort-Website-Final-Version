import React, { useMemo, useRef, useEffect } from 'react'
import Image from 'next/image'
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
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FBBF24] shadow-[0_0_8px_#FBBF24]"></span>
          <span className="text-[11px] font-bold text-white uppercase tracking-[0.25em] font-['Rajdhani']">Step 4 of 6: Prediction Summary</span>
        </div>
        <h2 className="mt-6 text-4xl md:text-6xl font-['Teko'] font-bold text-white uppercase tracking-tight drop-shadow-2xl">Review Your Full Tournament Picks</h2>
        <p className="text-slate-400 font-['Rajdhani'] text-xs uppercase tracking-[0.3em] mt-3 font-bold">Double-check everything before you continue.</p>
      </div>

      {/* Group Stage */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-['Rajdhani'] text-amber-500/80">Group Stage Selections</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {Object.entries(groupStandings).map(([gid, teamIds]) => {
            return (
              <div key={gid} className="relative group overflow-hidden bg-[#0A0A0C] border border-white/10 rounded-2xl p-4 shadow-2xl isolate">
                {/* Background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b] -z-10" />
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay -z-10" />
                
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <span className="text-xs font-bold text-amber-400 font-['Rajdhani'] tracking-[0.2em] uppercase">GROUP {gid}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 blur-[2px]"></div>
                </div>
                <div className="space-y-2">
                  {teamIds.map((tid, idx) => {
                    const t = getTeam(tid)
                    const rankLabel = idx === 0 ? '1st' : idx === 1 ? '2nd' : idx === 2 ? '3rd' : '4th'
                    const advanceLabel = idx < 2 ? 'Advances' : (idx === 2 ? (thirdPlacePicks?.includes(tid) ? '3rd Qualifier' : 'Eliminated') : 'Eliminated')
                    const isAdvancing = idx < 2 || (idx === 2 && thirdPlacePicks?.includes(tid))
                    
                    return (
                      <div key={tid} className="flex items-center justify-between gap-3 p-1 rounded-lg transition-colors hover:bg-white/5">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-bold text-slate-500 w-4">{idx + 1}</span>
                          {t?.flagUrl && (
                            <div className="relative w-6 h-4 flex-shrink-0">
                              <Image 
                                src={t.flagUrl} 
                                alt={t.name}
                                fill
                                className="rounded shadow-sm ring-1 ring-white/10 object-cover" 
                              />
                            </div>
                          )}
                          <span className={`text-sm font-['Teko'] uppercase tracking-wide ${isAdvancing ? 'text-white font-bold' : 'text-slate-400 font-medium'}`}>{t?.name || 'TBD'}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{rankLabel}</span>
                          <span className={`text-[9px] px-2 py-0.5 rounded-full border uppercase tracking-widest font-bold font-['Rajdhani'] ${
                            isAdvancing 
                              ? 'border-amber-500/40 text-amber-400 bg-amber-500/10 shadow-[0_0_8px_rgba(245,158,11,0.1)]' 
                              : 'border-white/5 text-slate-600'
                          }`}>{advanceLabel}</span>
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
        { title: 'Round of 32', list: rounds.roundOf32, subtitle: 'The First Cut' },
        { title: 'Round of 16', list: rounds.r16, subtitle: 'Elite Contenders' },
        { title: 'Quarter-Finals', list: rounds.qf, subtitle: 'The Final Eight' },
        { title: 'Semi-Finals', list: rounds.sf, subtitle: 'Final Four' },
      ] as { title: string; list: Match[]; subtitle: string }[]).map(section => (
        <div key={section.title} className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="flex flex-col items-center">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] font-['Rajdhani'] text-amber-500/60 mb-1">{section.subtitle}</span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] font-['Teko'] text-white">{section.title}</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
          <div className={`${section.title === 'Semi-Finals' ? 'grid grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'} gap-4`}>
            {section.list.map(m => {
              const wId = knockoutPicks[m.id]
              const t1 = getTeam(m.team1Id || '')
              const t2 = getTeam(m.team2Id || '')
              return (
                <div key={m.id} className="relative group overflow-hidden bg-[#0A0A0C] border border-white/10 rounded-2xl p-3 shadow-2xl isolate">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b] -z-10" />
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay -z-10" />

                  <div className="space-y-1.5">
                    {[t1, t2].map((t, i) => {
                      const isWinner = wId === t?.id;
                      return (
                        <div key={i} className={`flex items-center justify-between p-2 rounded-xl transition-all border ${
                          isWinner 
                            ? 'bg-amber-500/10 border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.1)]' 
                            : 'bg-white/[0.02] border-white/5'
                        }`}>
                          <div className="flex items-center gap-3">
                            {t?.flagUrl && (
                              <div className="relative w-6 h-4 flex-shrink-0">
                                <Image 
                                  src={t.flagUrl} 
                                  alt={t.name}
                                  fill
                                  className={`rounded shadow-sm object-cover ring-1 ${isWinner ? 'ring-amber-500/30' : 'ring-white/10'}`} 
                                />
                              </div>
                            )}
                            <span className={`text-sm font-['Teko'] uppercase tracking-wide ${isWinner ? 'text-amber-400 font-bold' : 'text-slate-400 font-medium'}`}>
                              {t?.name || 'TBD'}
                            </span>
                          </div>
                          {isWinner && (
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Third Place & Final */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] font-['Rajdhani'] text-amber-500">The Championship Podium</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden bg-[#0A0A0C] border border-white/10 rounded-3xl p-6 shadow-2xl isolate">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b] -z-10" />
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay -z-10" />
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 font-['Rajdhani']">Bronze Medal Match</span>
              <div className="w-8 h-px bg-white/10"></div>
            </div>

            <div className="space-y-3">
              {[sf1LoserId, sf2LoserId].map((tid, i) => {
                const t = getTeam(tid)
                const isWinner = tpWinner?.id === tid
                return (
                  <div key={i} className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                    isWinner 
                      ? 'bg-amber-500/10 border-amber-500/40 shadow-xl' 
                      : 'bg-white/[0.02] border-white/5 opacity-40 grayscale'
                  }`}>
                    <div className="flex items-center gap-4">
                      {t?.flagUrl && (
                        <div className="relative w-8 h-5 flex-shrink-0">
                          <Image 
                            src={t.flagUrl} 
                            alt={t.name}
                            fill
                            className="rounded shadow-sm object-cover ring-1 ring-white/10" 
                          />
                        </div>
                      )}
                      <span className={`font-['Teko'] text-xl uppercase tracking-wider ${isWinner ? 'text-white font-bold' : 'text-slate-300 font-bold'}`}>{t?.name || 'TBD'}</span>
                    </div>
                    {isWinner && <span className="text-[10px] font-black text-amber-950 bg-amber-400 px-2.5 py-1 rounded-full uppercase tracking-widest font-['Rajdhani'] shadow-[0_0_15px_rgba(245,158,11,0.3)]">Bronze</span>}
                  </div>
                )
              })}
            </div>
            <div className="mt-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest font-['Rajdhani'] text-center">4th Place: {tpLoser?.name || 'TBD'}</div>
          </div>

          <div className="relative overflow-hidden bg-[#0A0A0C] border-2 border-amber-500/30 rounded-3xl p-6 shadow-[0_0_50px_rgba(245,158,11,0.1)] isolate group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#0A0A0C] to-[#0f172a] -z-10" />
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay -z-10" />
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-amber-500 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000"></div>

            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-amber-500 font-['Rajdhani']">The Grand Final</span>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></div>
                <div className="w-1 h-1 rounded-full bg-amber-500 animate-pulse delay-75"></div>
                <div className="w-1 h-1 rounded-full bg-amber-500 animate-pulse delay-150"></div>
              </div>
            </div>

            <div className="space-y-3">
              {[rounds.sf[0] ? knockoutPicks[rounds.sf[0].id] : null, rounds.sf[1] ? knockoutPicks[rounds.sf[1].id] : null].map((tid, i) => {
                const t = getTeam(tid)
                const isWinner = champion?.id === tid
                return (
                  <div key={i} className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-500 ${
                    isWinner 
                      ? 'bg-amber-500/20 border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.15)] scale-[1.02]' 
                      : 'bg-white/[0.02] border-white/5 opacity-30 grayscale hover:opacity-50'
                  }`}>
                    <div className="flex items-center gap-4">
                      {t?.flagUrl && (
                        <div className="relative w-10 h-6 flex-shrink-0">
                          <Image 
                            src={t.flagUrl} 
                            alt={t.name}
                            fill
                            className={`rounded shadow-lg object-cover ring-1 ${isWinner ? 'ring-amber-500/40' : 'ring-white/10'}`} 
                          />
                        </div>
                      )}
                      <span className={`font-['Teko'] text-2xl uppercase tracking-wider ${isWinner ? 'text-white font-bold' : 'text-slate-300 font-bold'}`}>{t?.name || 'TBD'}</span>
                    </div>
                    {isWinner && <span className="text-[10px] font-black bg-amber-500 text-black px-3 py-1.5 rounded-full uppercase tracking-[0.2em] font-['Rajdhani'] shadow-[0_0_20px_rgba(245,158,11,0.4)]">Champion</span>}
                  </div>
                )
              })}
            </div>
            <div className="mt-4 text-[10px] text-amber-500/70 font-bold uppercase tracking-widest font-['Rajdhani'] text-center">Runner-Up: {runnerUp?.name || 'TBD'}</div>
          </div>
        </div>
      </div>

      <div ref={floaterRef} className="absolute top-0 left-1/2 z-50 pointer-events-none" style={{ transform: 'translate(-50%, 0px)' }}>
        <div className="pointer-events-auto h-14 px-2 flex items-center bg-[#0A0A0C]/80 border border-white/10 shadow-2xl rounded-full backdrop-blur-2xl">
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/5 text-slate-400 hover:text-white cursor-pointer"
            onClick={() => setCurrentStep(2)}
            aria-label="Back to Edit"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 18l-6-6 6-6"></path></svg>
          </button>
          <div className="w-px h-6 bg-white/10 mx-2" />
          <button
            className="rounded-full h-10 px-8 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center whitespace-nowrap bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105 active:scale-95 cursor-pointer font-['Rajdhani']"
            onClick={() => setCurrentStep(5)}
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

