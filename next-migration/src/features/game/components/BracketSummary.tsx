import React, { useMemo, useContext } from 'react'
import { GameContext } from '../context/GameContext'
import { TEAM_MAP } from '../lib/wc26-data'
import { generateBracketMatches, Match } from '../lib/bracket-logic'
import { Trophy } from 'lucide-react'

const EMPTY_GROUP_STANDINGS: Record<string, string[]> = {}
const EMPTY_THIRD_PLACE_PICKS: string[] = []
const EMPTY_KNOCKOUT_PICKS: Record<string, string> = {}

interface BracketSummaryProps {
  groupStandings?: Record<string, string[]>;
  thirdPlacePicks?: string[];
  knockoutPicks?: Record<string, string>;
}

export const BracketSummary = ({ 
  groupStandings: propGroupStandings,
  thirdPlacePicks: propThirdPlacePicks,
  knockoutPicks: propKnockoutPicks
}: BracketSummaryProps = {}) => {
  const gameContext = useContext(GameContext)
  
  const rawGroupStandings = propGroupStandings || gameContext?.groupStandings
  const rawThirdPlacePicks = propThirdPlacePicks || gameContext?.thirdPlacePicks
  const rawKnockoutPicks = propKnockoutPicks || gameContext?.knockoutPicks
  const hasPredictionData = Boolean(rawGroupStandings && rawKnockoutPicks)

  const groupStandings = rawGroupStandings ?? EMPTY_GROUP_STANDINGS
  const thirdPlacePicks = rawThirdPlacePicks ?? EMPTY_THIRD_PLACE_PICKS
  const knockoutPicks = rawKnockoutPicks ?? EMPTY_KNOCKOUT_PICKS

  const { rounds } = useMemo(() => {
    if (!hasPredictionData) {
      return { rounds: { roundOf32: [], r16: [], qf: [], sf: [] } }
    }

    const { roundOf32 } = generateBracketMatches(groupStandings, thirdPlacePicks)

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
  }, [groupStandings, thirdPlacePicks, knockoutPicks, hasPredictionData])

  if (!hasPredictionData) {
    return <div className="p-4 text-center text-slate-500">No prediction data available.</div>
  }

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
    const champId = knockoutPicks['F-01']
    const finalMatch = {
      team1Id: rounds.sf[0]?.id ? knockoutPicks[rounds.sf[0].id] : null,
      team2Id: rounds.sf[1]?.id ? knockoutPicks[rounds.sf[1].id] : null
    }
    const ruId = finalMatch.team1Id === champId ? finalMatch.team2Id : finalMatch.team1Id
    return getTeam(ruId)
  })()

  return (
    <div className="w-full space-y-16">
      {/* Group Stage Summary */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-xl font-['Teko'] font-bold uppercase text-slate-900 tracking-wider">Group Stage</h3>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(groupStandings).map(([gid, teamIds]) => (
            <div key={gid} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 font-['Rajdhani'] uppercase tracking-widest">Group {gid}</span>
              </div>
              <div className="space-y-2">
                {teamIds.map((tid, idx) => {
                  const t = getTeam(tid)
                  const isAdvancing = idx < 2 || thirdPlacePicks?.includes(tid)
                  return (
                    <div key={tid} className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-400 w-4">{idx + 1}</span>
                        {t?.flagUrl && (
                          <img 
                            src={t.flagUrl} 
                            alt={t.name}
                            className="w-5 h-3.5 rounded-sm object-cover ring-1 ring-slate-200" 
                          />
                        )}
                        <span className={`text-xs font-['Teko'] uppercase ${isAdvancing ? 'text-slate-900 font-bold' : 'text-slate-400'}`}>
                          {t?.name || 'TBD'}
                        </span>
                      </div>
                      {isAdvancing && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#01b47d]"></div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Knockout Summary */}
      <section>
        <div className="flex items-end justify-between mb-8 px-2">
          <div>
            <h3 className="text-3xl font-['Teko'] font-bold uppercase text-slate-900 leading-none">Knockout Stage</h3>
            <p className="text-slate-600 font-['Rajdhani'] font-semibold text-sm tracking-wider uppercase">The Path to Glory</p>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent ml-6 mb-2"></div>
        </div>
        
        <div className="space-y-12">
          {[
            { title: 'Round of 32', subtitle: 'First Knockout Round', list: rounds.roundOf32, cols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' },
            { title: 'Round of 16', subtitle: 'Sweet Sixteen', list: rounds.r16, cols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' },
            { title: 'Quarter-Finals', subtitle: 'Elite Eight', list: rounds.qf, cols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' },
            { title: 'Semi-Finals', subtitle: 'Final Four', list: rounds.sf, cols: 'grid-cols-1 md:grid-cols-2' },
          ].map((section) => (
            <div key={section.title} className="relative">
              <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl py-4 mb-6 border-b border-slate-100/50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between px-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#01b47d]"></div>
                      <span className="text-[10px] font-['Rajdhani'] font-bold text-slate-600 uppercase tracking-[0.2em]">
                        {section.subtitle}
                      </span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-['Teko'] font-bold uppercase text-slate-900 leading-none tracking-tight">
                      {section.title}
                    </h4>
                  </div>
                  
                  <div className="hidden sm:flex items-center gap-3">
                    <div className="h-px w-12 bg-gradient-to-r from-slate-200 to-transparent"></div>
                    <span className="text-[10px] font-['Rajdhani'] font-bold text-slate-600 uppercase tracking-widest">
                      Knockout Phase
                    </span>
                  </div>
                </div>
              </div>
              
              <div className={`grid ${section.cols} gap-3`}>
                {section.list.map(m => {
                  const wId = knockoutPicks[m.id]
                  const t1 = getTeam(m.team1Id)
                  const t2 = getTeam(m.team2Id)
                  return (
                    <div key={m.id} className="group bg-white border border-slate-200 rounded-xl p-1 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
                      <div className="space-y-0.5">
                        {[t1, t2].map((t, i) => {
                          const isWinner = wId === t?.id;
                          return (
                            <div 
                              key={i}
                              className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                                isWinner 
                                  ? 'bg-slate-900 text-white' 
                                  : 'bg-transparent text-slate-500 hover:bg-slate-50'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                {t?.flagUrl && (
                                  <img 
                                    src={t.flagUrl} 
                                    alt={t.name}
                                    className={`w-5 h-3.5 rounded-[2px] object-cover ring-1 ${isWinner ? 'ring-white/20' : 'ring-slate-200'}`} 
                                  />
                                )}
                                <span className={`text-sm font-['Teko'] uppercase tracking-wide ${isWinner ? 'font-bold' : 'font-medium'}`}>
                                  {t?.name || 'TBD'}
                                </span>
                              </div>
                              {isWinner && (
                                <div className="w-1.5 h-1.5 rounded-full bg-[#01b47d] shadow-[0_0_8px_#01b47d]"></div>
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

          {/* Final Standings - The Crown Jewel */}
          <div className="pt-8">
             <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl py-4 mb-8 border-b border-slate-100/50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between px-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]"></div>
                      <span className="text-[10px] font-['Rajdhani'] font-bold text-slate-600 uppercase tracking-[0.2em]">
                        The Final Verdict
                      </span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-['Teko'] font-bold uppercase text-slate-900 leading-none tracking-tight">
                      Championship Results
                    </h4>
                  </div>
                  
                  <div className="hidden sm:flex items-center gap-3">
                    <div className="h-px w-12 bg-gradient-to-r from-slate-200 to-transparent"></div>
                    <span className="text-[10px] font-['Rajdhani'] font-bold text-slate-600 uppercase tracking-widest">
                      Podium Finish
                    </span>
                  </div>
                </div>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Third Place Card */}
              <div className="md:col-span-1 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="text-6xl font-['Teko'] font-bold text-slate-900">3</div>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 block font-['Rajdhani']">Bronze Medal Match</span>
                
                <div className="space-y-3 relative z-10">
                  {[sf1LoserId, sf2LoserId].map((tid, i) => {
                    const t = getTeam(tid)
                    const isWinner = tpWinner?.id === tid
                    return (
                      <div key={i} className={`flex items-center justify-between p-3 rounded-xl border ${isWinner ? 'bg-white border-slate-200 shadow-md transform scale-[1.02]' : 'bg-transparent border-transparent opacity-60'} transition-all`}>
                        <div className="flex items-center gap-3">
                          {t?.flagUrl && <img src={t.flagUrl} className="w-8 h-5 rounded shadow-sm" />}
                          <span className={`font-['Teko'] text-lg uppercase ${isWinner ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>{t?.name || 'TBD'}</span>
                        </div>
                        {isWinner && <span className="text-[10px] font-bold text-[#b45309] bg-amber-50 px-2 py-1 rounded-full uppercase tracking-wider border border-amber-100">Bronze</span>}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* The Final Card */}
              <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900"></div>
                <div className="absolute -right-12 -top-12 w-64 h-64 bg-[#01b47d] rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-[#01b47d] font-['Rajdhani'] font-bold uppercase tracking-[0.3em] text-xs mb-2 block">The Grand Final</span>
                      <h3 className="text-4xl font-['Teko'] font-bold uppercase leading-none">World Champion</h3>
                    </div>
                    <Trophy className="w-12 h-12 text-[#fbbf24] drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]" />
                  </div>

                  <div className="space-y-4">
                    {[rounds.sf[0] ? knockoutPicks[rounds.sf[0].id] : null, rounds.sf[1] ? knockoutPicks[rounds.sf[1].id] : null].map((tid, i) => {
                      const t = getTeam(tid)
                      const isWinner = champion?.id === tid
                      return (
                        <div key={i} className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-500 ${
                          isWinner 
                            ? 'bg-white/10 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-sm' 
                            : 'bg-transparent border-transparent opacity-50 hover:opacity-75'
                        }`}>
                          <div className="flex items-center gap-4">
                            {t?.flagUrl && <img src={t.flagUrl} className={`w-12 h-8 rounded shadow-lg ${isWinner ? 'ring-2 ring-white/20' : ''}`} />}
                            <div>
                              <span className={`font-['Teko'] text-2xl uppercase block leading-none ${isWinner ? 'text-white font-bold' : 'text-slate-300'}`}>
                                {t?.name || 'TBD'}
                              </span>
                              {isWinner && <span className="text-[10px] text-[#01b47d] font-bold uppercase tracking-wider font-['Rajdhani']">Winner</span>}
                            </div>
                          </div>
                          {isWinner && (
                            <div className="w-10 h-10 rounded-full bg-[#fbbf24] flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.4)] text-slate-900">
                              <Trophy className="w-5 h-5" />
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
