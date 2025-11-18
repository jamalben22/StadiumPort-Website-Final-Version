type CalendarKind = 'city' | 'stadium' | 'article'

type CalendarEntry = {
  isPublished: boolean
  datePublished?: string
  keywords?: string[]
  section?: string
}

type CalendarData = Record<CalendarKind, Record<string, CalendarEntry>>

let calendarCache: CalendarData = { city: {}, stadium: {}, article: {} }
let initialized = false

function normalizeKey(k: string) {
  return (k || '').toLowerCase().trim().replace(/\s+/g, '-')
}

export async function initEditorialCalendar() {
  if (initialized) return
  initialized = true
  const url = (import.meta.env.VITE_EDITORIAL_CALENDAR_URL as string) || '/editorial-calendar.json'
  try {
    const res = await fetch(url, { method: 'GET' })
    if (!res.ok) throw new Error('calendar fetch failed')
    const data = (await res.json()) as CalendarData
    const normalized: CalendarData = { city: {}, stadium: {}, article: {} }
    for (const kind of ['city', 'stadium', 'article'] as CalendarKind[]) {
      const entries = (data[kind] || {})
      for (const key of Object.keys(entries)) {
        normalized[kind][normalizeKey(key)] = entries[key]
      }
    }
    calendarCache = normalized
  } catch {
    // keep empty cache; pages will still render with defaults
  }

  // Periodic refresh for long-lived sessions
  if (typeof window !== 'undefined') {
    window.setInterval(async () => {
      try {
        const res = await fetch(url, { method: 'GET', cache: 'no-store' })
        if (!res.ok) return
        const data = (await res.json()) as CalendarData
        const normalized: CalendarData = { city: {}, stadium: {}, article: {} }
        for (const kind of ['city', 'stadium', 'article'] as CalendarKind[]) {
          const entries = (data[kind] || {})
          for (const key of Object.keys(entries)) {
            normalized[kind][normalizeKey(key)] = entries[key]
          }
        }
        calendarCache = normalized
      } catch {}
    }, 10 * 60 * 1000)
  }
}

export function getEditorialEntry(kind: CalendarKind, key: string): CalendarEntry | undefined {
  return calendarCache[kind]?.[normalizeKey(key)]
}

export function getEditorialCalendar(): CalendarData {
  return calendarCache
}

// kick off loader
void initEditorialCalendar()