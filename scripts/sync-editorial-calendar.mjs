import fs from 'node:fs'
import path from 'node:path'

async function run() {
  const url = process.env.CALENDAR_URL
  if (!url) return
  const res = await fetch(url)
  if (!res.ok) return
  const data = await res.json()
  const target = path.join(process.cwd(), 'public', 'editorial-calendar.json')
  const next = JSON.stringify(data, null, 2) + '\n'
  let prev = ''
  try { prev = fs.readFileSync(target, 'utf8') } catch {}
  if (prev !== next) {
    fs.writeFileSync(target, next, 'utf8')
    console.log('calendar updated')
  } else {
    console.log('no changes')
  }
}

run().catch(() => {})