import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Header } from '../../../components/feature/Header'
import { Footer } from '../../../components/feature/Footer'
import { OptimizedImage } from '../../../components/base/OptimizedImage'
import { SchemaOrg, generateBreadcrumbSchema, generateTravelGuideSchema } from '../../../components/seo/SchemaOrg'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function toTitleCase(slug?: string) {
  if (!slug) return 'Transport Guide'
  return slug
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export default function TransportationArticlePage() {
  const { slug } = useParams()

  const guides = [
    {
      title: 'New York / New Jersey World Cup 2026: Your Complete Getting Around Guide',
      category: 'Flights',
      author: 'Michael Rodriguez',
      readTime: '18 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20airport%20terminal%20with%20departure%20boards%2C%20travelers%20with%20luggage%2C%20clean%20contemporary%20design%2C%20international%20travel%20atmosphere%2C%20professional%20aviation%20setting&width=1600&height=900&seq=trans1&orientation=landscape',
      intro: 'Comprehensive guide to booking flights, finding deals, and navigating airports in all 16 World Cup host cities.'
    },
    {
      title: 'Los Angeles World Cup 2026: Your Complete Transportation Guide to SoFi Stadium',
      category: 'Trains',
      author: 'Sarah Chen',
      readTime: '14 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20high-speed%20train%20at%20station%20platform%2C%20sleek%20design%2C%20comfortable%20passenger%20seating%2C%20efficient%20rail%20transportation%2C%20contemporary%20travel%20infrastructure&width=1600&height=900&seq=trans2&orientation=landscape',
      intro: 'Navigate efficient train systems connecting host cities, including booking tips, schedules, and comfort classes.'
    },
    {
      title: 'Budget Bus Travel: Intercity Connections',
      category: 'Buses',
      author: 'David Thompson',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=comfortable%20modern%20bus%20interior%20with%20reclining%20seats%2C%20clean%20design%2C%20budget%20travel%20option%2C%20efficient%20intercity%20transportation%2C%20passenger%20comfort&width=1600&height=900&seq=trans3&orientation=landscape',
      intro: 'Affordable bus routes between host cities with comfort ratings, booking platforms, and money-saving strategies.'
    },
    {
      title: 'Car Rental Guide: Freedom to Explore',
      category: 'Car Rentals',
      author: 'Emma Wilson',
      readTime: '16 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20car%20rental%20facility%20with%20various%20vehicles%2C%20professional%20service%20counter%2C%20clean%20automotive%20showroom%2C%20travel%20convenience%2C%20rental%20car%20selection&width=1600&height=900&seq=trans4&orientation=landscape',
      intro: 'Complete car rental comparison, insurance options, driving tips, and scenic routes between host cities.'
    },
    {
      title: 'Airport Transfer Options: Seamless Arrivals',
      category: 'Airport Transfers',
      author: 'James Park',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=airport%20shuttle%20service%20with%20professional%20driver%2C%20comfortable%20passenger%20seating%2C%20efficient%20transfer%20vehicle%2C%20travel%20convenience%2C%20airport%20transportation&width=1600&height=900&seq=trans5&orientation=landscape',
      intro: 'Compare taxis, rideshares, shuttles, and public transport from airports to city centers and stadiums.'
    },
    {
      title: 'Local Transport Mastery: Navigate Like a Local',
      category: 'Local Transport',
      author: 'Lisa Martinez',
      readTime: '13 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20metro%20station%20with%20clean%20platforms%2C%20digital%20information%20displays%2C%20efficient%20urban%20transportation%2C%20contemporary%20public%20transit%20design%2C%20passenger%20convenience&width=1600&height=900&seq=trans6&orientation=landscape',
      intro: 'Master metro systems, buses, trams, and bike-sharing in each host city with apps, tickets, and insider tips.'
    },
    {
      title: 'Multi-City Travel Passes: Maximum Savings',
      category: 'Flights',
      author: 'Robert Kim',
      readTime: '15 min read',
      image: 'https://readdy.ai/api/search-image?query=travel%20planning%20with%20multiple%20tickets%20and%20passes%2C%20organized%20travel%20documents%2C%20efficient%20multi-city%20journey%20planning%2C%20transportation%20coordination%2C%20travel%20savings&width=1600&height=900&seq=trans7&orientation=landscape',
      intro: 'Discover rail passes, flight packages, and transport bundles for visiting multiple host cities efficiently.'
    },
    {
      title: 'Accessible Transportation Options',
      category: 'Local Transport',
      author: 'Maria Gonzalez',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=accessible%20transportation%20vehicle%20with%20wheelchair%20ramp%2C%20inclusive%20design%2C%20barrier-free%20travel%20options%2C%20mobility%20assistance%2C%20universal%20access%20transportation&width=1600&height=900&seq=trans8&orientation=landscape',
      intro: 'Comprehensive guide to wheelchair-accessible transport, special assistance services, and mobility solutions.'
    }
  ]

  const slugify = (title: string) => title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')
  const guide = guides.find(g => slugify(g.title) === slug)
  const title = guide?.title || toTitleCase(slug)
  const description = guide?.intro || 'Transportation guide with premium editorial layout.'

  useEffect(() => {
    const pageTitle = `${title} – Transportation | StadiumPort`
    document.title = pageTitle
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)
  }, [title])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg schema={[
        generateTravelGuideSchema(title || 'Transport Guide', description || 'Transport guide', `/transportation/${slug}`),
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Transportation', url: '/transportation' },
          { name: title || 'Transport Guide', url: `/transportation/${slug}` }
        ])
      ]} />
      <Header />

      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src={guide?.image || '/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp'}
            alt={`${title} – Transportation Guide`}
            className="editorial-hero-image-wrapper"
            imgClassName="editorial-hero-image"
            width={1600}
            height={900}
            priority={true}
            placeholder="empty"
            sizes="100vw"
          />
          <div className="editorial-hero-overlay"></div>
        </div>
        <div className="editorial-hero-content">
          <div className="editorial-hero-inner">
            <div className="editorial-hero-eyebrow">
              <span className="editorial-hero-pulse"></span>
              <span>FIFA World Cup 2026</span>
            </div>
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <li><Link to="/" className="hover:underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Home</Link></li>
                <li><span aria-hidden>›</span></li>
                <li><Link to="/transportation" className="hover:underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Transportation</Link></li>
                <li><span aria-hidden>›</span></li>
                <li className="text-slate-900 dark:text-white font-semibold">{title}</li>
              </ol>
            </nav>
            <h1 className="editorial-hero-title">{
              slug === 'new-york-new-jersey-world-cup-2026-your-complete-getting-around-guide'
                ? 'Your Complete Getting Around Guide'
                : slug === 'los-angeles-world-cup-2026-your-complete-transportation-guide-to-sofi-stadium'
                ? 'Los Angeles: Transportation Guide to SoFi Stadium'
                : title
            }</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2"><i className="ri-route-line"></i><span>Transportation</span></div>
              <div className="meta-item flex items-center gap-2"><i className="ri-time-line"></i><span>{guide?.readTime || 'Read time: TBD'}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-article py-12">
        <article className="editorial-body editorial-dropcap">
          {slug === 'new-york-new-jersey-world-cup-2026-your-complete-getting-around-guide' ? (
            <div className="space-y-8">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">When MetLife Stadium hosts the 2026 FIFA World Cup Final on July 19, 2026—plus seven other matches throughout the tournament—the New York/New Jersey region will welcome over 1 million international visitors to the world's biggest sporting event. But here's what most travel guides won't tell you: getting to MetLife Stadium in East Rutherford, New Jersey, from Manhattan takes roughly the same time whether you're 5 miles away or 15 miles away. Traffic, not distance, rules transportation decisions during major events in this region.</p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">This guide arms you with battle-tested strategies for navigating one of the world's most complex transit networks during the World Cup's most intense moments. You'll discover exactly which transportation mode saves you money for your specific scenario, which routes avoid the post-match crush, and how to move seamlessly between New York's five boroughs and New Jersey's World Cup venues.</p>

              <h3 id="quick-navigation" className="editorial-h3">Quick Navigation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="#understanding-the-ny-nj-transit-landscape" className="hover:underline">Understanding the NY/NJ Transit Landscape</a></li>
                <li><a href="#airport-to-stadium-connections" className="hover:underline">Airport to Stadium Connections</a></li>
                <li><a href="#new-jersey-transit-your-primary-stadium-link" className="hover:underline">New Jersey Transit: Your Primary Stadium Link</a></li>
                <li><a href="#nyc-subway-path-manhattan-connections" className="hover:underline">NYC Subway & PATH: Manhattan Connections</a></li>
                <li><a href="#ride-share-taxis" className="hover:underline">Ride-Share & Taxis</a></li>
                <li><a href="#driving-parking-reality-check" className="hover:underline">Driving & Parking Reality Check</a></li>
                <li><a href="#bike-share-options" className="hover:underline">Bike Share Options</a></li>
                <li><a href="#match-day-transportation-strategies" className="hover:underline">Match-Day Transportation Strategies</a></li>
                <li><a href="#money-saving-transit-passes" className="hover:underline">Money-Saving Transit Passes</a></li>
              </ul>

              <h3 id="understanding-the-ny-nj-transit-landscape" className="editorial-h3">Understanding the NY/NJ Transit Landscape</h3>
              <h4 className="editorial-h4">What Makes This Region Unique</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">The New York/New Jersey metropolitan area operates multiple independent transit systems that don't always connect seamlessly. MetLife Stadium sits in East Rutherford, New Jersey—technically just 10 miles from Manhattan but requiring transfers between different transit authorities.</p>
              <p className="font-semibold">The System Players:</p>
              <ul className="space-y-2">
                <li><span className="font-semibold">NJ Transit</span>: Controls rail and bus service throughout New Jersey, including the critical Meadowlands Rail Line directly to MetLife Stadium</li>
                <li><span className="font-semibold">MTA (Metropolitan Transportation Authority)</span>: Operates NYC subways, buses, and commuter rails (Metro-North, Long Island Rail Road)</li>
                <li><span className="font-semibold">PATH (Port Authority Trans-Hudson)</span>: Connects Lower and Midtown Manhattan to New Jersey cities (Newark, Jersey City, Hoboken)</li>
                <li><span className="font-semibold">Port Authority</span>: Manages major bridges, tunnels, bus terminals, and three regional airports</li>
              </ul>

              <h4 className="editorial-h4">World Cup Transportation Enhancements</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">According to New Jersey Transportation Commissioner Francis K. O'Connor, the state has allocated $38.5 million for New Jersey Transit to expand transportation options around MetLife Stadium specifically for the World Cup. NJ Transit and officials plan to move 20,000 people per hour out of MetLife Stadium after each World Cup game via mass transit, including a rail connection between the stadium and Secaucus Junction.</p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">The state is also working to set up dedicated bus lanes along Route 120 during peak demand times, which should significantly improve bus travel on match days.</p>

              <h3 id="airport-to-stadium-connections" className="editorial-h3">Airport to Stadium Connections</h3>
              <h4 className="editorial-h4">Newark Liberty International Airport (EWR) — Closest Airport</h4>
              <p><span className="font-semibold">Distance to MetLife Stadium</span>: 10 miles</p>
              <p><span className="font-semibold">Best For</span>: International arrivals, direct stadium access</p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">Newark is your strategic choice for World Cup matches. It's the closest of the three major airports and connects directly to NJ Transit's rail network.</p>
              <p className="font-semibold">Public Transit Route (75-90 minutes, $6-10):</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>From any Newark Airport terminal, follow "AirTrain" signs</li>
                <li>Take the free AirTrain monorail to "Newark Liberty International Airport Station"</li>
                <li>Purchase NJ Transit Rail ticket to "Secaucus Junction" ($5.50 one-way)</li>
                <li>Board any train marked "SEC" (trains run every 15-30 minutes)</li>
                <li>Travel time to Secaucus: 20 minutes</li>
                <li>At Secaucus, transfer to Meadowlands Rail Line (operates on event days only)</li>
                <li>Direct service to MetLife Stadium (10-minute ride, included in your rail ticket)</li>
              </ol>
              <p className="font-semibold">Pro Tip</p>
              <p className="text-slate-700 dark:text-slate-300">The Meadowlands Rail Line only operates during events at MetLife Stadium. On non-event days, you'll need alternative transportation from Secaucus Junction.</p>
              <p className="font-semibold">Private Transfer/Ride-Share ($38-75):</p>
              <ul className="space-y-2">
                <li>Uber/Lyft: $38-60 (20-30 minutes without traffic, 45+ minutes during rush hour)</li>
                <li>Private car service: $176+ (pre-booked airport shuttles)</li>
                <li>Yellow taxi: $60-75 flat rate zones apply</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">For Groups of 4+: A private transfer often costs less per person than four separate rail tickets, especially factoring in convenience. Pre-booking through services like Welcome Pickups or Jayride guarantees your ride and typically includes flight tracking.</p>

              <h4 className="editorial-h4">John F. Kennedy International Airport (JFK)</h4>
              <p><span className="font-semibold">Distance to MetLife Stadium</span>: 26 miles</p>
              <p><span className="font-semibold">Best For</span>: International arrivals preferring Manhattan-based accommodations</p>
              <p className="font-semibold">Public Transit Route (2-2.5 hours, $15-20):</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Take AirTrain JFK from your terminal to Jamaica Station ($8.25)</li>
                <li>Transfer to Long Island Rail Road (LIRR) toward Penn Station Manhattan ($10.75 peak, $7.75 off-peak)</li>
                <li>From Penn Station, take NJ Transit to Secaucus Junction, then Meadowlands Rail Line (as described above)</li>
              </ol>
              <p className="font-semibold">Alternative via Subway (2.5-3 hours, $11.15):</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>AirTrain JFK to Jamaica or Howard Beach ($8.25)</li>
                <li>NYC subway to Times Square-42nd Street</li>
                <li>Walk to Port Authority Bus Terminal</li>
                <li>NJ Transit bus 160 or 163 to stadium area</li>
              </ol>
              <p className="text-slate-700 dark:text-slate-300">Ride-Share Direct: $75-95 (45-75 minutes depending on traffic)</p>

              <h4 className="editorial-h4">LaGuardia Airport (LGA)</h4>
              <p><span className="font-semibold">Distance to MetLife Stadium</span>: 18 miles</p>
              <p><span className="font-semibold">Best For</span>: Domestic arrivals, shortest distance from Manhattan</p>
              <p className="font-semibold">Public Transit Route (2-2.5 hours, $5.90-15):</p>
              <p className="text-slate-700 dark:text-slate-300">LaGuardia lacks direct rail connections, complicating transit access.</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Q70 SBS bus (free) to 74th Street-Roosevelt Avenue subway station (20-25 minutes)</li>
                <li>Take subway to Times Square-42nd Street</li>
                <li>Walk to Port Authority Bus Terminal</li>
                <li>NJ Transit bus 160 to MetLife Stadium area</li>
              </ol>
              <p className="text-slate-700 dark:text-slate-300">Ride-Share Direct: $52-70 (30-60 minutes depending on traffic)</p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">Airport Transfer Recommendation: For all three airports, consider pre-booking airport shuttles through GetYourGuide or Viator if traveling with luggage on match day. Services typically cost $25-40 per person but eliminate the stress of navigating multiple transfers with bags.</p>

              <h3 id="new-jersey-transit-your-primary-stadium-link" className="editorial-h3">New Jersey Transit: Your Primary Stadium Link</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">NJ Transit provides the most reliable World Cup transportation, operating trains and buses directly to MetLife Stadium. NJ Transit operates the Meadowlands Rail Line, providing direct service to New York New Jersey Stadium from Secaucus Junction.</p>
              <h4 className="editorial-h4">How the Meadowlands Rail Line Works</h4>
              <p className="font-semibold">Critical Information</p>
              <p className="text-slate-700 dark:text-slate-300">This rail line operates ONLY during events at MetLife Stadium. It's not a regular commuter line.</p>
              <p className="font-semibold">Service Pattern:</p>
              <ul className="space-y-2">
                <li>Trains run from approximately 4 hours before kickoff through 1 hour after event ends</li>
                <li>Frequency: Every 10-15 minutes during peak times</li>
                <li>Journey time from Secaucus Junction: 10 minutes</li>
                <li>You can connect to Secaucus Junction via the Main/Bergen County, Montclair-Boonton, Morris & Essex, Northeast Corridor, North Jersey Coast, Raritan Valley, Pascack Valley, or Port Jervis lines</li>
              </ul>
              <p className="font-semibold">Fares (as of July 2025):</p>
              <ul className="space-y-2">
                <li>One-zone NJ Transit bus or light rail: $1.85</li>
                <li>Rail tickets start at $1.70 for a one-way trip</li>
                <li>Newark Penn Station to New York Penn Station: $6.15 one-way, $61.50 for 10-trip ticket</li>
                <li>Round-trip to Meadowlands from Manhattan: approximately $12-15</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300">Important: NJ Transit implemented a 3% fare increase in July 2025, with additional annual 3% increases planned through 2027.</p>
              <h4 className="editorial-h4">Connecting from Manhattan</h4>
              <p className="font-semibold">From Penn Station Manhattan:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Take any NJ Transit train marked "SEC" toward Secaucus Junction</li>
                <li>Most frequent service: Northeast Corridor Line (every 15-20 minutes)</li>
                <li>Transfer at Secaucus to Meadowlands Rail Line</li>
                <li>Total journey: 35-45 minutes</li>
              </ol>
              <p className="font-semibold">From Port Authority Bus Terminal:</p>
              <p>Multiple bus routes serve MetLife Stadium area on event days:</p>
              <ul className="space-y-1">
                <li>Routes 160, 163: Direct service to stadium area</li>
                <li>Buses begin running 3-4 hours before events</li>
                <li>One-way bus tickets from NYC to stadium area: approximately $4-5</li>
              </ul>
              <h4 className="editorial-h4">NJ Transit Apps & Payment</h4>
              <p>Download the <span className="font-semibold">NJ Transit Mobile App</span> before arrival:</p>
              <ul className="space-y-1">
                <li>Purchase tickets directly in app</li>
                <li>Real-time service updates</li>
                <li>Trip planning with exact schedules</li>
                <li>Mobile tickets accepted by conductors</li>
              </ul>
              <p className="font-semibold">Payment Methods:</p>
              <ul className="space-y-1">
                <li>Mobile app (recommended)</li>
                <li>Ticket vending machines at stations</li>
                <li>Cash accepted on buses (exact change may be required on some routes)</li>
                <li>Credit/debit cards via app or machines</li>
              </ul>
              <h4 className="editorial-h4">Match-Day Crowd Management</h4>
              <p>Based on major event patterns at MetLife Stadium:</p>
              <p className="font-semibold">Arriving:</p>
              <ul className="space-y-1">
                <li>Board trains at Secaucus 90-120 minutes before kickoff for comfortable seating</li>
                <li>Final trains typically depart Secaucus 30 minutes before kickoff</li>
                <li>Expect crowded platforms; trains add extra cars for major events</li>
              </ul>
              <p className="font-semibold">Departing:</p>
              <ul className="space-y-1">
                <li>Post-match crowds can fill 6-8 trains before clearing</li>
                <li>Exiting immediately after final whistle: 45-60 minute wait for trains</li>
                <li>Strategy: Wait 20-30 minutes in stadium area (use restrooms, grab food) for shorter lines</li>
                <li>Last trains typically run 60 minutes after event conclusion</li>
              </ul>

              <h3 id="nyc-subway-path-manhattan-connections" className="editorial-h3">NYC Subway & PATH: Manhattan Connections</h3>
              <h4 className="editorial-h4">Current NYC Subway Fares</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">As of January 2026, the base fare for subways and local buses increased from $2.90 to $3.00. The reduced fare increased from $1.45 to $1.50.</p>
              <p className="font-semibold">Payment Options:</p>
              <ul className="space-y-1">
                <li>OMNY contactless payment (tap credit/debit card, smartphone, Apple/Google Pay)</li>
                <li>MetroCard (sales ending December 31, 2025; still accepted through 2026)</li>
                <li>OMNY seven-day fare cap: ride free after paying for 12 trips in 7 days (maximum $35 per week)</li>
              </ul>
              <h4 className="editorial-h4">PATH Train Service</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">PATH trains connect Lower and Midtown Manhattan to Newark, Harrison, Jersey City, and Hoboken in New Jersey, running 24 hours a day, 365 days a year.</p>
              <p className="font-semibold">Current PATH Fares:</p>
              <p>As of January 2025, one-way PATH fare increased to $3.00 (up from $2.75)</p>
              <p>Seniors (65+): $1.50 (up from $1.25)</p>
              <p className="font-semibold">Manhattan Stations:</p>
              <ul className="space-y-1">
                <li>World Trade Center</li>
                <li>Christopher Street</li>
                <li>9th Street</li>
                <li>14th Street</li>
                <li>23rd Street</li>
                <li>33rd Street (Penn Station area)</li>
              </ul>
              <p className="font-semibold">Key Route for World Cup:</p>
              <p>Take PATH from Manhattan to Newark Penn Station, then transfer to NJ Transit:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>PATH to Newark Penn Station (25-35 minutes from Midtown)</li>
                <li>Transfer to NJ Transit rail to Secaucus Junction</li>
                <li>Transfer to Meadowlands Rail Line</li>
                <li>Total journey: 70-90 minutes</li>
              </ol>
              <p className="font-semibold">Payment</p>
              <p>SmartLink Card, pay-per-ride MetroCard, or contactless TAPP system at stations. Note: PATH does not accept MTA OMNY cards.</p>
              <h4 className="editorial-h4">Recommended Manhattan-to-Stadium Routes</h4>
              <p className="font-semibold">From Midtown Manhattan (Times Square, Herald Square):</p>
              <ul className="space-y-1">
                <li>Option A (simplest): Walk to Port Authority Bus Terminal → NJ Transit bus 160/163 (1 hour 15 min, ~$5)</li>
                <li>Option B: Subway/walk to Penn Station → NJ Transit rail to Secaucus → Meadowlands Rail Line (1 hour, ~$12-15)</li>
              </ul>
              <p className="font-semibold">From Lower Manhattan (Financial District, World Trade Center):</p>
              <ul className="space-y-1">
                <li>PATH to Newark Penn Station → NJ Transit rail to Secaucus → Meadowlands Rail Line (1 hour 30 min, ~$15-18)</li>
              </ul>
              <p className="font-semibold">From Upper Manhattan (Central Park, Upper West/East Side):</p>
              <ul className="space-y-1">
                <li>Subway to Penn Station → NJ Transit rail option (1 hour 15 min)</li>
                <li>Subway to Port Authority → Bus option (1 hour 30 min)</li>
              </ul>

              <h3 id="ride-share-taxis" className="editorial-h3">Ride-Share & Taxis</h3>
              <h4 className="editorial-h4">Uber & Lyft Availability</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">Both Uber and Lyft operate extensively throughout New York City and New Jersey. In New York City, Uber is generally cheaper than Lyft—sometimes by 20% or more, though you should always compare fares before booking.</p>
              <p className="font-semibold">Typical Stadium Fares (2025 estimates):</p>
              <ul className="space-y-1">
                <li>From Midtown Manhattan: $45-70 (30-50 minutes, traffic-dependent)</li>
                <li>From Newark Airport: $38-60 (20-30 minutes)</li>
                <li>From JFK Airport: $75-95 (45-75 minutes)</li>
                <li>From LaGuardia: $52-70 (30-60 minutes)</li>
              </ul>
              <p className="font-semibold">Surge Pricing Alert</p>
              <p>Expect significant price increases before and after matches. Post-match surge can double or triple normal rates.</p>
              <p className="font-semibold">Match-Day Reality Check</p>
              <p>Leaving the stadium via Uber/Lyft after a World Cup Final presents serious challenges:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Requests can take 30-60 minutes during peak surge</li>
                <li>Pickup locations get extremely congested</li>
                <li>Costs can reach $150-200 from stadium to Manhattan during surge</li>
              </ol>
              <p className="font-semibold">Better Strategy</p>
              <p>Walk 10-15 minutes away from the stadium to nearby hotels or the American Dream shopping complex for easier, cheaper pickup.</p>

              <h4 className="editorial-h4">Traditional Taxis</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">Yellow cabs operate throughout Manhattan but rarely serve New Jersey directly. For stadium trips:</p>
              <ul className="space-y-1">
                <li>Flat-rate zones don't apply to New Jersey destinations</li>
                <li>Meter + tolls + 20% tip</li>
                <li>Estimated Manhattan to MetLife Stadium: $60-80 plus tolls ($16-18)</li>
                <li>Finding return taxi from stadium: extremely difficult</li>
              </ul>
              <h4 className="editorial-h4">Group Transportation Value Calculation</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">For groups of 4 or more, private car services often provide better value than individual transit:</p>
              <p className="font-semibold">Example</p>
              <p>4 friends from Times Square to MetLife Stadium</p>
              <ul className="space-y-1">
                <li>NJ Transit per person: $12-15 × 4 = $48-60</li>
                <li>Uber/Lyft (no surge): $45-70 split 4 ways = $11-18 per person</li>
                <li>Private car service (pre-booked): $100-150 ÷ 4 = $25-38 per person with guaranteed pickup</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300">Pre-book through services like Blacklane, Jayride, or Welcome Pickups for reliable group transport with flight/train tracking.</p>

              <h3 id="driving-parking-reality-check" className="editorial-h3">Driving & Parking Reality Check</h3>
              <h4 className="editorial-h4">Should You Drive to MetLife Stadium?</h4>
              <p><span className="font-semibold">Short answer for World Cup matches</span>: No, unless you're traveling from distant suburbs with 4+ people and departing very early.</p>
              <p className="font-semibold">The Reality:</p>
              <ul className="space-y-1">
                <li>Parking costs: $40-60 per vehicle on event days (prices set by stadium authority)</li>
                <li>Traffic congestion: 2-3 hours to exit parking lots after major events</li>
                <li>New Jersey Turnpike tolls: $4-8 depending on entry point</li>
                <li>NYC congestion pricing: $9 daily charge for driving below 60th Street in Manhattan (started January 2025)</li>
              </ul>
              <h4 className="editorial-h4">If You Must Drive</h4>
              <p className="font-semibold">Parking Options:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Stadium Official Parking: Book in advance through Ticketmaster or stadium website</li>
                <li>Pre-Paid Parking Apps: SpotHero and ParkWhiz offer advance reservations at 20-30% below game-day rates</li>
                <li>American Dream Mall: Adjacent to stadium; fills quickly but offers overflow on major events</li>
              </ol>
              <p className="font-semibold">Driving Directions:</p>
              <p>From Manhattan: Take Lincoln Tunnel ($17 toll) or George Washington Bridge ($17.63 toll) → New Jersey Turnpike South → Exit 16W → Follow signs to MetLife Stadium</p>
              <p className="font-semibold">Post-Match Exit Strategy:</p>
              <ul className="space-y-1">
                <li>Stay in stadium area 45-60 minutes after final whistle to avoid parking lot gridlock</li>
                <li>Use this time for restrooms, food, merchandise shopping</li>
                <li>Parking exits operate on first-in, last-out principle during crush periods</li>
              </ul>
              <h4 className="editorial-h4">Park-and-Ride Option</h4>
              <p>Smart alternative for drivers:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Park at Secaucus Junction NJ Transit station (cheaper daily rates)</li>
                <li>Take Meadowlands Rail Line to stadium (included in parking fee or low-cost addition)</li>
                <li>Avoid stadium parking congestion entirely</li>
              </ol>

              <h3 id="bike-share-options" className="editorial-h3">Bike Share Options</h3>
              <h4 className="editorial-h4">Citi Bike NYC</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">Citi Bike operates throughout New York City's five boroughs (except Staten Island) plus Jersey City and Hoboken.</p>
              <p className="font-semibold">Current Pricing (2025):</p>
              <ul className="space-y-2">
                <li><span className="font-semibold">Annual Membership</span>: $219.99/year</li>
                <li>E-bike fees for members: $0.25 per minute</li>
                <li>Unlimited 45-minute classic bike rides included</li>
                <li>Overage fees: $0.25 per minute for rides exceeding 45 minutes</li>
                <li><span className="font-semibold">Single Ride Pass</span>: $4.99 (effective January 2025)</li>
                <li>E-bike and overage fees: $0.38 per minute for non-members</li>
                <li><span className="font-semibold">Day Pass</span>: $25 (effective February 3, 2025)</li>
                <li>E-bike fees: $0.38 per minute</li>
                <li><span className="font-semibold">Reduced Fare Program</span>: $5/month for NYCHA residents and SNAP recipients with unlimited classic rides and reduced e-bike rates</li>
              </ul>
              <h4 className="editorial-h4">Is Citi Bike Useful for World Cup Transportation?</h4>
              <p className="font-semibold">Within NYC</p>
              <p>Excellent for getting around Manhattan, Brooklyn, Queens during non-match hours.</p>
              <p className="font-semibold">To MetLife Stadium</p>
              <p>Not practical. The stadium is 10 miles from the nearest Citi Bike station and not connected to bike-friendly routes. No Citi Bike stations exist in East Rutherford.</p>
              <p className="font-semibold">Best Use Case</p>
              <p>Commuting between your Manhattan/Brooklyn hotel and Penn Station or Port Authority to catch stadium transport.</p>

              <h3 id="match-day-transportation-strategies" className="editorial-h3">Match-Day Transportation Strategies</h3>
              <h4 className="editorial-h4">Timing Your Arrival</h4>
              <p className="font-semibold">For 3 PM kickoffs</p>
              <ul className="space-y-1">
                <li>Depart Manhattan accommodation: 12:00-12:30 PM</li>
                <li>Arrive Penn Station/Port Authority: 12:30 PM</li>
                <li>Board stadium-bound transport: 12:45-1:00 PM</li>
                <li>Arrive MetLife Stadium: 1:30-2:00 PM (90 minutes before kickoff)</li>
              </ul>
              <p className="font-semibold">For 7 PM kickoffs</p>
              <ul className="space-y-1">
                <li>Depart accommodation: 4:30-5:00 PM</li>
                <li>Account for rush hour congestion (add 15-20 minutes)</li>
                <li>Arrive stadium: 5:45-6:15 PM</li>
              </ul>
              <p className="font-semibold">World Cup Final (July 19, 2026)</p>
              <p>Plan to arrive 2-3 hours early. Security screening will be more extensive, and crowds will be at maximum capacity.</p>
              <h4 className="editorial-h4">Weather Contingencies</h4>
              <p className="font-semibold">Summer Heat (expected in July):</p>
              <ul className="space-y-1">
                <li>Afternoon temperatures: 80-95°F (27-35°C)</li>
                <li>Bring water; limited shade on NJ Transit platforms</li>
                <li>Consider morning or evening matches for cooler temps</li>
              </ul>
              <p className="font-semibold">Rain Scenarios:</p>
              <ul className="space-y-1">
                <li>NJ Transit trains continue in rain; buses may experience delays</li>
                <li>Stadium has covered seating areas but open sections</li>
                <li>Bring compact rain gear</li>
              </ul>
              <h4 className="editorial-h4">Post-Match Exit Strategies</h4>
              <p className="font-semibold">Beating the Crowds:</p>
              <p className="font-semibold">Strategy 1 - Wait It Out (Recommended):</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Stay in stadium 30-45 minutes after final whistle</li>
                <li>Use restrooms, browse merchandise, grab food</li>
                <li>Crowds on Meadowlands Rail Line decrease 60-70%</li>
                <li>Board less crowded train with seating available</li>
              </ol>
              <p className="font-semibold">Strategy 2 - Alternative Route:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Walk 15 minutes to American Dream shopping/entertainment complex</li>
                <li>Request Uber/Lyft from there (less surge, easier pickup)</li>
                <li>Or wait for NJ Transit bus services that stop nearby</li>
              </ol>
              <p className="font-semibold">Strategy 3 - Extended Celebration:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>If evening match, plan post-match dinner at American Dream or nearby restaurants</li>
                <li>Depart stadium area 2-3 hours after conclusion</li>
                <li>Virtually no transit crowds; normal ride-share pricing</li>
              </ol>
              <h4 className="editorial-h4">Multiple Match Attendance</h4>
              <p>Attending matches across different cities?</p>
              <p className="font-semibold">Between NY/NJ and Philadelphia (95 miles):</p>
              <ul className="space-y-1">
                <li>Amtrak: 1 hour 15 minutes, $49-120 depending on train type</li>
                <li>NJ Transit + SEPTA: 2-2.5 hours, $25-35 (requires transfers)</li>
                <li>Megabus/FlixBus: 2-3 hours, $15-30 if booked early</li>
              </ul>
              <p className="font-semibold">Between NY/NJ and Boston (215 miles):</p>
              <ul className="space-y-1">
                <li>Amtrak: 3.5-4 hours, $75-150</li>
                <li>Bus: 4.5-5 hours, $20-50</li>
              </ul>
              <p className="font-semibold">Between NY/NJ and Toronto (490 miles):</p>
              <ul className="space-y-1">
                <li>Flight: 1.5 hours flight time, book early for deals</li>
                <li>Train/bus: 11-13 hours (not recommended)</li>
              </ul>

              <h3 id="money-saving-transit-passes" className="editorial-h3">Money-Saving Transit Passes</h3>
              <h4 className="editorial-h4">NJ Transit Multi-Ride Savings</h4>
              <p className="font-semibold">10-Trip Tickets:</p>
              <ul className="space-y-1">
                <li>Example: Newark Penn to NYC Penn 10-trip ticket: $61.50 (saves ~10% vs. single fares)</li>
                <li>Valid for 30 days from purchase</li>
                <li>Can be shared among travelers on same route</li>
              </ul>
              <p className="font-semibold">Monthly Passes:</p>
              <ul className="space-y-1">
                <li>One-zone monthly bus pass: $67</li>
                <li>Makes sense if taking 45+ trips per month</li>
                <li>Not worth it for short World Cup visits</li>
              </ul>

              <h3 className="editorial-h3">NYC Unlimited Options</h3>
              <p><span className="font-semibold">7-Day Subway/Bus Cap</span>:</p>
              <p>OMNY's automatic fare cap: ride free after 12 trips in 7 days (maximum $35 spent)</p>
              <p>This is perfect for World Cup visitors making frequent NYC trips:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Day 1-2: Pay per ride ($3 each)</li>
                <li>After trip #12 in week: Free rides rest of week</li>
                <li>No advance purchase needed; happens automatically with same payment method</li>
              </ul>

              <h3 className="editorial-h3">Visitor Transportation Budget</h3>
              <p><span className="font-semibold">Sample 5-Day NYC/World Cup Trip</span> (2 matches attended):</p>
              <p><span className="font-semibold">Baseline Transit Costs</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Airport transfer (Newark to Manhattan): $10</li>
                <li>Daily NYC subway (capped after 12 rides): $35 per week maximum</li>
                <li>Two round-trips to MetLife Stadium: $25-30 each = $50-60</li>
                <li>Return airport transfer: $10</li>
                <li><span className="font-semibold">Total: $105-115</span></li>
              </ul>
              <p><span className="font-semibold">Add-Ons</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Occasional Uber/Lyft: $50-100</li>
                <li>Citi Bike day passes (2 days exploring): $50</li>
                <li><span className="font-semibold">Realistic Total: $205-265</span></li>
              </ul>
              <p><span className="font-semibold">Value Tip</span>: The 7-day OMNY cap saves money if you're taking 13+ subway/bus rides during your stay. For World Cup visitors exploring NYC between matches, you'll easily hit this threshold.</p>

              <h3 className="editorial-h3">Essential Transportation Apps</h3>
              <p><span className="font-semibold">Must-Download Before Arrival</span>:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <span className="font-semibold">NJ Transit Mobile App</span>
                  <ul className="list-disc pl-6">
                    <li>Buy tickets, check schedules, service alerts</li>
                    <li>Works offline after downloading schedules</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">MTA Official App</span> (for NYC)
                  <ul className="list-disc pl-6">
                    <li>Real-time subway/bus arrivals</li>
                    <li>Service advisories</li>
                    <li>Built-in trip planner</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Google Maps</span>
                  <ul className="list-disc pl-6">
                    <li>Most accurate NYC/NJ transit routing</li>
                    <li>Real-time updates across all systems</li>
                    <li>Integrates NJ Transit, PATH, MTA</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Uber & Lyft</span>
                  <ul className="list-disc pl-6">
                    <li>Compare prices before booking</li>
                    <li>Save favorite locations (stadium, hotel)</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Citymapper</span> (optional but excellent)
                  <ul className="list-disc pl-6">
                    <li>Multi-modal trip planning</li>
                    <li>Shows cheapest, fastest, easiest routes</li>
                    <li>Real-time disruption alerts</li>
                  </ul>
                </li>
              </ol>

              <h3 className="editorial-h3">Safety & Accessibility</h3>
              <h4 className="editorial-h4">Transit Safety Tips</h4>
              <p><span className="font-semibold">General Safety</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>NJ Transit and NYC subways are generally safe; millions ride daily</li>
                <li>Stay alert; avoid empty subway cars late at night</li>
                <li>Keep belongings secure; watch for pickpockets in crowded areas</li>
                <li>Well-lit main platforms are safest for waiting</li>
              </ul>
              <p><span className="font-semibold">Match-Day Crowds</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Large crowds increase minor crime opportunity</li>
                <li>Use front pockets or secure bags for valuables</li>
                <li>Travel in groups when possible post-match</li>
              </ul>
              <p><span className="font-semibold">Late-Night Travel</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>NJ Transit reduces service after midnight</li>
                <li>NYC subway runs 24/7 but frequency decreases</li>
                <li>Rideshare is safer option for very late returns</li>
              </ul>

              <h4 className="editorial-h4">Accessibility Information</h4>
              <p><span className="font-semibold">MetLife Stadium</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>ADA-compliant with elevators, ramps, accessible seating</li>
                <li>Accessible parking in designated lots close to entrances</li>
                <li>Request accessibility assistance through stadium website</li>
              </ul>
              <p><span className="font-semibold">NJ Transit</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Meadowlands Rail Line: Accessible platforms and trains</li>
                <li>Secaucus Junction: Full elevator access between platforms</li>
                <li>Request assistance: 973-275-5555 (48 hours advance notice recommended)</li>
              </ul>
              <p><span className="font-semibold">NYC Subway</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Not all stations are accessible; check MTA website for elevator-equipped stations</li>
                <li>Accessible stations marked with wheelchair symbol</li>
                <li>OMNY works for reduced-fare accessibility customers</li>
              </ul>
              <p><span className="font-semibold">PATH</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>All stations wheelchair accessible with elevators</li>
                <li>Platform gap warnings announced</li>
                <li>Visual and audio stop announcements</li>
              </ul>

              <h4 className="editorial-h4">Family Travel Considerations</h4>
              <p><span className="font-semibold">Traveling with Young Children</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Up to three children under 44 inches tall ride free when with a fare-paying adult on NYC subway and buses</li>
                <li>NJ Transit: Children ages 5-11 pay reduced fares; under 5 ride free with adult</li>
                <li>Stroller access: Elevators available at major stations; fold strollers during rush hour crowding</li>
              </ul>
              <p><span className="font-semibold">Baby-Changing Facilities</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Available at MetLife Stadium (family restrooms)</li>
                <li>Major transit hubs (Penn Station, Secaucus Junction) have limited facilities</li>
                <li>American Dream complex has extensive family amenities</li>
              </ul>

              <h3 className="editorial-h3">World Cup Final Transportation—The Complete Plan</h3>
              <p>For the July 19, 2026 World Cup Final at MetLife Stadium, expect unprecedented crowds. The final match will bring an estimated 1 million visitors to the region, including non-ticketholders.</p>
              <p><span className="font-semibold">Your Final Match Day Timeline</span>:</p>
              <p><span className="font-semibold">6:00 AM - Morning of Final</span></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Confirm NJ Transit service status via app</li>
                <li>Check for any special security announcements</li>
                <li>Verify your ticket and ID documents</li>
              </ul>
              <p><span className="font-semibold">11:00 AM - Pre-Game (for evening final)</span></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Light breakfast near accommodation</li>
                <li>Final gear check (sunscreen, hat, portable charger)</li>
              </ul>
              <p><span className="font-semibold">12:30 PM - Departure</span></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Leave Manhattan accommodation</li>
                <li>Head to Penn Station or Port Authority</li>
                <li>Avoid lunch rush at transit hubs (11:30 AM-1:00 PM)</li>
              </ul>
              <p><span className="font-semibold">1:00 PM - Transit Boarding</span></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Board NJ Transit to Secaucus</li>
                <li>Already crowded; expect standing room</li>
                <li>Keep ticket accessible for conductor</li>
              </ul>
              <p><span className="font-semibold">1:45 PM - Arrive Secaucus Junction</span></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Follow crowd flow to Meadowlands Rail platform</li>
                <li>Trains every 5-10 minutes for Final</li>
                <li>May need to wait for 2-3 trains before boarding</li>
              </ul>
              <p><span className="font-semibold">2:15 PM - Arrive MetLife Stadium</span></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Enhanced security screening (allow extra time)</li>
                <li>Stadium gates typically open 2-3 hours before kickoff</li>
                <li>Explore fan zones, grab early meal</li>
              </ul>
              <p><span className="font-semibold">5:30 PM - Head to Seats</span></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Kickoff time varies; check official schedule</li>
                <li>Concessions lines peak 30 minutes before start</li>
              </ul>
              <p><span className="font-semibold">Post-Match (10:00 PM+)</span></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>DO NOT rush to exit</li>
                <li>Stay for closing ceremony</li>
                <li>Wait 45 minutes minimum before joining transit crowds</li>
                <li>Consider American Dream dining for 2-hour delay</li>
                <li>Meadowlands Rail runs until midnight or later for Final</li>
              </ul>
              <p><span className="font-semibold">Return to Manhattan</span> (11:00 PM - 12:30 AM)</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Much lighter crowds</li>
                <li>Reasonable ride-share pricing returns</li>
                <li>NJ Transit operates extra late trains for Final</li>
              </ul>

              <h3 className="editorial-h3">Critical Reminders for World Cup Transportation Success</h3>
              <ol className="list-decimal pl-6 space-y-1">
                <li><span className="font-semibold">Download NJ Transit app</span> and buy tickets before traveling to station</li>
                <li><span className="font-semibold">The Meadowlands Rail Line only runs during stadium events</span>—verify operation times</li>
                <li><span className="font-semibold">Post-match crowds are brutal</span>—waiting 30-45 minutes saves hours of frustration</li>
                <li><span className="font-semibold">Compare Uber/Lyft prices</span>—one is often 20%+ cheaper at any given moment</li>
                <li><span className="font-semibold">Groups of 4+</span>: Do the math on private transfers vs. individual transit</li>
                <li><span className="font-semibold">OMNY fare cap rewards frequent riders</span>—use same card for all trips</li>
                <li><span className="font-semibold">NJ Transit and MTA are separate payment systems</span>—you can't use the same pass</li>
                <li><span className="font-semibold">July in NY/NJ is hot and humid</span>—dress accordingly and stay hydrated</li>
                <li><span className="font-semibold">Allow double your expected travel time for World Cup Final</span>—unprecedented crowds</li>
                <li><span className="font-semibold">Plan your backup route</span>—if trains are too crowded, know your bus/rideshare alternative</li>
              </ol>

              <h3 className="editorial-h3">Final Thoughts</h3>
              <p>The New York/New Jersey transportation network is complex but comprehensive. Unlike many World Cup host regions where you depend on taxis or long walks, this region offers multiple ways to reach MetLife Stadium efficiently. Your biggest advantage is information—know your options before stepping off the plane, and you'll navigate like a local.</p>
              <p>The World Cup Final on July 19, 2026, will create once-in-a-lifetime transportation challenges and memories. The tournament is projected to generate over $2 billion in economic impact for the region and support over 14,000 jobs. You're not just attending matches; you're participating in one of the largest logistical operations in U.S. sporting history.</p>
              <p>Start with public transit as your primary plan. Layer in ride-share as your backup. Budget for the occasional splurge on convenience. And remember: the journey from Times Square to the World Cup Final whistle is part of the adventure. Embrace the organized chaos, chat with fellow fans from around the world on the train platform, and arrive ready to witness soccer history.</p>
              <p>See you at MetLife Stadium.</p>
              <hr className="editorial-divider" />
              <p><em>This guide reflects transportation information current as of November 2025. All fares, schedules, and services are subject to change. Verify details through official sources—NJ Transit (njtransit.com), MTA (mta.info), and FIFA World Cup 2026 (fifa.com)—closer to your travel dates. World Cup-specific transportation programs may be announced in spring 2026.</em></p>
            </div>
          ) : slug === 'los-angeles-world-cup-2026-your-complete-transportation-guide-to-sofi-stadium' ? (
            <div className="space-y-8">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: () => null,
                  h2: ({ node, ...props }) => (
                    <h3 className="editorial-h3" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h4 className="editorial-h4" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-6 space-y-2" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal pl-6 space-y-2" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="text-slate-700 dark:text-slate-300" {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-slate-900 dark:text-white" {...props} />
                  ),
                }}
              >
{`# Los Angeles World Cup 2026: Your Complete Transportation Guide to SoFi Stadium

When SoFi Stadium in Inglewood hosts eight World Cup 2026 matches—including the United States Men's National Team opener on June 12, 2026, and a quarterfinal on July 10—Los Angeles will welcome millions of international soccer fans to one of the world's most impressive sporting venues. But here's what you need to understand immediately: Los Angeles operates completely differently from other World Cup host cities. The transit system is vast but decentralized, traffic is legendary, and your transportation strategy determines whether you arrive relaxed or stressed.

SoFi Stadium sits just three miles from Los Angeles International Airport (LAX) in Inglewood, making it the closest World Cup venue to a major airport anywhere in North America. This geographic advantage creates unique opportunities—if you know how to leverage them. This guide reveals the transportation secrets that turn LA's notorious traffic into a manageable challenge, ensuring you're in your seat when the ref blows that opening whistle.

## Quick Navigation
- [Understanding LA's Transit Landscape](#understanding-las-transit-landscape)
- [The SoFi Shuttle: Your Secret Weapon](#the-sofi-shuttle-your-secret-weapon)
- [LAX Airport to SoFi Stadium](#lax-airport-to-sofi-stadium)
- [Metro Rail: C Line & K Line](#metro-rail-c-line-k-line)
- [Ride-Share & Taxis](#ride-share-taxis)
- [Metrolink Commuter Rail](#metrolink-commuter-rail)
- [Driving & Parking](#driving-parking)
- [Match-Day Strategy](#match-day-strategy)
- [Money-Saving Transit Options](#money-saving-transit-options)

## Understanding LA's Transit Landscape

### What Makes Los Angeles Transportation Unique

Los Angeles County sprawls across 4,753 square miles with 88 cities—each originally developed around car culture. Unlike New York's single unified transit authority, LA operates multiple independent systems:

**The Key Players:**
- **LA Metro**: Operates six rail lines (B, D subways; A, C, E, K light rail) and extensive bus network
- **Metrolink**: Regional commuter rail connecting five Southern California counties to Union Station
- **LAX FlyAway**: Express bus service between LAX and downtown Los Angeles/Van Nuys
- **Municipal Systems**: Multiple city bus services (Big Blue Bus, Culver City Bus, etc.)

**World Cup Game-Changer:**

Metro operates a free SoFi Stadium Shuttle that runs between the LAX/Metro Transit Center and the stadium on event days, providing the most reliable connection for World Cup matches. This shuttle transforms stadium access, bypassing the parking nightmares that plague car-dependent venues.

### FIFA Name Change

During the 2026 World Cup, SoFi Stadium will be called "Los Angeles Stadium" following FIFA's requirement to use neutral stadium names that don't promote commercial brands during international tournaments. Don't be confused when you see both names.

## The SoFi Shuttle: Your Secret Weapon

### How It Works

The free SoFi Shuttle operates between the LAX/Metro Transit Center and SoFi Stadium on event days, running frequently to handle match-day crowds. This is THE optimal transportation solution for most World Cup visitors.

**Service Details:**
- **Cost**: FREE (included with your Metro fare to LAX/Metro Transit Center)
- **Frequency**: Every 5-10 minutes during peak event times
- **Journey Time**: 10-15 minutes from LAX/Metro Transit Center to stadium
- **Operating Hours**: Begins approximately 4 hours before kickoff; runs until 90 minutes after match conclusion
- **Capacity**: High-capacity buses designed for stadium crowds

**Where to Board:**
- At LAX/Metro Transit Center, board the SoFi Shuttle from Bus Bay 8
- Clear signage directs passengers to the correct boarding area
- Dedicated queue management on match days

**Why This Beats Everything Else:**
1. **No parking stress**: Zero parking fees or post-match traffic jams
2. **Predictable timing**: Dedicated shuttle lanes bypass congestion
3. **Cost-effective**: Free shuttle + low Metro fare = best value
4. **Sustainable**: Environmentally friendly option FIFA promotes
5. **Reliable**: Purpose-built for event crowds

## LAX Airport to SoFi Stadium

Los Angeles International Airport (LAX) sits just 3 miles from SoFi Stadium—the shortest airport-to-stadium distance in the entire World Cup 2026 tournament.

### Option 1: LAX Airport Shuttle + Metro + SoFi Shuttle (Budget Champion)

**Total Cost**: $1.75 + FREE shuttle = $1.75  
**Total Time**: 60-75 minutes  
**Best For**: Budget travelers, solo visitors, environmentally conscious fans

**Step-by-Step:**

1. **From LAX Terminals (All terminals)**:
   - Exit to ground transportation level
   - Follow signs to "LAX Shuttle Route M" or "Metro Transit Center"
   - Board the free LAX Shuttle (Bus Route M)—runs every 10-15 minutes
   - Journey to LAX/Metro Transit Center: 10-15 minutes

2. **At LAX/Metro Transit Center**:
   - This station opened June 6, 2025, as the western terminus for both C and K Metro lines
   - From LAX/Metro Transit Center, board the free SoFi Stadium Shuttle from Bus Bay 8, which operates on event days
   - No fare required for shuttle (already covered by your Metro fare or available free with event)
   - Journey to stadium: 10-15 minutes

**Payment**:
Metro base fare is $1.75 one-way, which includes 2 hours of free transfers to other Metro lines using a TAP card

**Pro Tip**: Download the TAP app before arrival to load your fare digitally and avoid ticket machine lines.

### Option 2: LAX FlyAway Bus + Metro + SoFi Shuttle (Downtown Route)

**Total Cost**: $12.75 + $1.75 = $14.50 one-way  
**Total Time**: 90-110 minutes  
**Best For**: Visitors staying downtown, those connecting to regional trains

**The Route:**

1. **LAX to Union Station**:
   - LAX FlyAway costs $12.75 one-way as of April 2025
   - Buses depart from the Lower/Arrivals Level at blue FlyAway columns outside each terminal, operating 24/7
   - Journey time: 35-50 minutes (traffic-dependent)
   - Metrolink Monthly Pass holders can ride FlyAway to/from LAX free with a valid boarding pass for that day

2. **Union Station to LAX/Metro Transit Center**:
   - Take Metro E Line toward Santa Monica to Expo/Crenshaw station
   - Transfer to K Line toward Redondo Beach
   - Ride to LAX/Metro Transit Center
   - Board SoFi Shuttle

**When This Makes Sense**: If you're attending matches on consecutive days and staying downtown, the FlyAway provides comfortable airport transfer with luggage space, then use Metro for stadium trips.

### Option 3: Ride-Share Direct (Fastest but Priciest)

**Cost**: $27 average for Uber/Lyft from LAX to SoFi Stadium  
**Time**: 15-20 minutes (no traffic); 30-45 minutes (typical traffic)  
**Best For**: Groups of 3-4, travelers with lots of luggage, premium convenience

**Match-Day Reality Check**:
- Normal pricing applies for LAX-to-stadium trips before matches
- Uber charged a $20 event fee for pickups and $10 for drop-offs near SoFi Stadium during Super Bowl LVI, on top of surge pricing
- Expect similar charges for World Cup matches
- Post-match surge can double or triple base fares

**Smart Strategy for Ride-Share**:
- Use ride-share TO the stadium (reasonable pricing)
- Take Metro + SoFi Shuttle home (avoid surge pricing and pickup chaos)
- Pre-book Uber Reserve 2-4 hours in advance for guaranteed pickup

### Option 4: Private Airport Transfer (Premium Solution)

**Cost**: $40-75 pre-booked  
**Time**: 15-25 minutes direct  
**Best For**: Groups of 4+, families with children, business travelers

Services like Welcome Pickups, Jayride, and GO Airport Shuttle offer:
- Meet-and-greet at baggage claim
- Flight tracking (adjusts for delays)
- Fixed pricing (no surge)
- Luggage assistance
- Direct door-to-stadium service

**Value Calculation for Groups**:
- 4 people taking Metro: $1.75 × 4 = $7 (budget option)
- 4 people sharing pre-booked transfer: $60 ÷ 4 = $15 per person (convenience premium)

## Metro Rail: C Line & K Line

Los Angeles Metro Rail connects SoFi Stadium to neighborhoods across the city via the LAX/Metro Transit Center hub.

### Current Metro Fares (2025)

Base fare: $1.75 one-way with 2 hours of free transfers between Metro lines using a TAP card

**Fare Capping** (Game-Changer for Multi-Day Visitors):
Metro introduced fare capping in July 2023, meaning passengers never pay more than $5 for unlimited rides in one day or $18 for unlimited rides within seven days

**How Fare Capping Works**:
- Use the same TAP card or payment method for all trips
- After your 3rd trip in a day ($5.25 total), rides are FREE for the rest of that day
- After 11 trips in 7 days ($18.75 total), rides are FREE for the rest of that week
- Perfect for World Cup visitors making multiple stadium trips and sightseeing

### Key Metro Routes to SoFi Stadium

All routes funnel through LAX/Metro Transit Center, where you board the free SoFi Shuttle.

**From Downtown Los Angeles** (45-60 minutes):
- Take E Line from 7th St/Metro Center toward Santa Monica to Expo/Crenshaw station, transfer to K Line toward Redondo Beach, ride to LAX/Metro Transit Center
- Board SoFi Shuttle at Bus Bay 8

**From Hollywood/North Hollywood** (75-95 minutes):
- Take B Line toward Union Station to 7th St/Metro Center downtown, transfer to E Line toward Santa Monica to Expo/Crenshaw, transfer to K Line to LAX/Metro Transit Center
- Board SoFi Shuttle

**From Santa Monica/Westside** (50-65 minutes):
- Take E Line from Downtown Santa Monica Station toward East LA to Expo/Crenshaw, transfer to K Line toward Redondo Beach to LAX/Metro Transit Center
- Board SoFi Shuttle

**From Long Beach/South Bay** (30-50 minutes):
- Take C Line from any station toward LAX, ride directly to LAX/Metro Transit Center (C and K Lines share tracks from Aviation/Century to LAX/Metro Transit Center)
- Board SoFi Shuttle

### Operating Hours & Frequency

C and K Lines run every day including holidays from approximately 4 AM until just after midnight, with trains every 10 minutes during most of the day and every 20 minutes early mornings/late evenings

### Payment Methods

**TAP Card** (Recommended):
- Physical card: $2 deposit at vending machines, reloadable
- TAP App: Digital payment via smartphone (no physical card needed)
- Apple Wallet integration available

**Coming for World Cup 2026**:
Metro will enable riders to pay fares by tapping credit cards or phones directly at turnstiles, eliminating the need for TAP cards

### Essential Metro Apps

1. **TAP App**: Purchase fares, manage account, reload funds
2. **Metro's Official App**: Real-time arrivals, service alerts, trip planning
3. **Google Maps**: Accurate multi-modal routing across all LA transit
4. **Transit or Moovit Apps**: Alternative trip planners with real-time updates

## Ride-Share & Taxis

### Uber & Lyft Availability

Both services operate extensively across Los Angeles with dedicated SoFi Stadium zones.

**Typical Fares (Non-Event Pricing)**:
- LAX to SoFi Stadium: $27 average
- LAX-area hotels to SoFi: $14-15 average
- Downtown LA to SoFi: $40 average

**World Cup Match-Day Pricing**:
During Super Bowl LVI at SoFi Stadium, Uber charged an additional $20 event fee for pickups and $10 event fee for drop-offs in the stadium vicinity, on top of surge pricing

**Realistic World Cup Costs**:
- **Arriving at stadium**: Normal pricing + $10 drop-off fee = $25-50 from LAX area
- **Leaving after match**: Surge pricing (2-3x) + $20 pickup fee = $60-120 to LAX area

### Smart Ride-Share Strategies

**Arrival Strategy**:
- Pre-book Uber Reserve 3-4 hours before match
- Drop-off at designated zones (clearly marked on stadium grounds)
- Arrive 90-120 minutes before kickoff to avoid drop-off congestion

**Departure Strategy** (Critical):
DO NOT request ride immediately after the final whistle. Here's why:

1. During Super Bowl LVI, thousands of fans requested rides simultaneously, causing extreme wait times and surge pricing
2. Surge multipliers can reach 3-4x normal rates
3. Pickup zones become parking lots of stationary traffic

**Better Post-Match Plan**:
- **Option A**: Wait 45-60 minutes inside stadium area (use restrooms, browse merchandise, grab food)
- **Option B**: Walk 15-20 minutes to nearby Hollywood Park (American Dream complex) and request pickup there—less congestion, lower surge
- **Option C**: Take SoFi Shuttle + Metro home (no surge, guaranteed transport)

### Group Transportation Value

**For 4+ people**, compare these real costs:

**Example: LAX Hotel to SoFi Stadium**
- **Metro + Shuttle**: $1.75 × 4 = $7 total
- **Uber/Lyft (one vehicle)**: $15-20 base + $10 drop-off fee = $25-30 total = $6-8 per person
- **Private car service**: $60-80 pre-booked = $15-20 per person

**For match departure with 4 people**:
- **Metro + Shuttle**: $1.75 × 4 = $7 total (no surge!)
- **Uber/Lyft post-match**: $80-150 = $20-38 per person

The math clearly favors public transit for departures and makes ride-share competitive for convenient arrivals.

## Metrolink Commuter Rail

For visitors staying outside Los Angeles County (Orange County, Ventura, San Bernardino, Riverside), Metrolink provides regional rail connections.

### How Metrolink Connects to SoFi

**The Route**: Metrolink → Union Station → Metro E Line → Metro K Line → SoFi Shuttle

**Fares** (as of July 2025):
Metrolink simplified its fare structure in July 2025 with distance-based one-way tickets, SoCal Day Pass ($10 weekends), and monthly passes at lower prices

**Sample Routes**:
- **Orange County** (Anaheim, Fullerton, Irvine): Metrolink to Union Station ($8-15), then Metro as described above
- **Ventura County**: Metrolink to Union Station ($10-18), then Metro
- **San Bernardino/Riverside**: Metrolink to Union Station ($12-20), then Metro

### Metrolink Benefits

Valid Metrolink tickets include free local transit connections on participating systems, including free Metro rides with your Metrolink ticket on the same day

**LAX FlyAway Partnership**:
Metrolink tickets can add $12.75 for LAX FlyAway access, and Monthly Pass holders ride FlyAway free with a flight boarding pass

## Driving & Parking

### Should You Drive to SoFi Stadium?

**Short Answer for World Cup Matches**: Only if absolutely necessary or traveling with 5+ people from distant suburbs.

**The Reality**:
- Parking at SoFi Stadium costs $40-100 per space depending on location and event, with reservations strongly recommended for World Cup matches
- Post-match exit times: 60-90 minutes minimum to exit parking lots
- Los Angeles traffic on match days creates unpredictable delays

### If You Must Drive

**Parking Options**:

1. **Official SoFi Parking** (Advance Reservation Required):
   - Book through SoFi Stadium website or Ticketmaster
   - Prices: $40-60 for standard lots, $75-100 for premium proximity
   - Lots open 4 hours before kickoff
   - Parking zones close approximately 1 hour after event conclusion

2. **SpotHero/ParkWhiz Pre-Booking**:
   - Reserve in advance at 20-30% below game-day rates
   - Nearby private lots and garages
   - Guaranteed space eliminates stress

3. **American Dream Complex**:
   - Adjacent shopping/entertainment complex
   - Overflow parking available (fills quickly)
   - Option to shop/dine before or after match

### The Park-and-Ride Alternative

**Smarter Strategy**: Park at a Metro station, take rail + shuttle to stadium.

**Best Park-and-Ride Locations**:
- **Redondo Beach Station** (K Line): Free/low-cost parking, direct K Line to LAX/Metro Transit Center
- **Norwalk Station** (C Line): Large parking structure, frequent C Line service
- **Any Metro Station with Parking**: Check metro.net for parking availability and fees

**Why This Works**:
- Parking costs: $0-8 per day (vs. $40-100 at stadium)
- No post-match traffic jam
- Return to your car in 30 minutes (vs. 90+ minute stadium lot exit)

## Match-Day Strategy

### Timing Your Journey

**For Afternoon Matches (12 PM - 3 PM Kickoffs)**:

**Departing LAX Hotel Area**:
- Leave accommodation: 10:00 AM
- Account for 15-minute walk/shuttle to LAX/Metro Transit Center
- Board Metro C or K Line: 10:30 AM
- Transfer to SoFi Shuttle: 11:00 AM
- Arrive stadium: 11:15 AM (75 minutes before kickoff)

**Departing Downtown LA**:
- Leave accommodation: 9:45 AM
- Arrive 7th St/Metro Center: 10:00 AM
- Board E Line, transfer K Line: 10:15 AM
- Arrive LAX/Metro Transit Center: 11:00 AM
- Board SoFi Shuttle: 11:15 AM
- Arrive stadium: 11:30 AM (90 minutes before kickoff)

**For Evening Matches (6 PM - 9 PM Kickoffs)**:

Add 20-30 minutes to all journey times due to evening rush hour congestion (3 PM - 7 PM). If your match starts at 7 PM, depart by 4:30 PM.

### Weather Considerations

**June-July in Los Angeles**:
- Average temperatures: 70-85°F (21-29°C)
- Minimal rainfall expected
- SoFi Stadium features an indoor-outdoor design with a fixed translucent canopy that provides shade while allowing coastal breezes through open sides
- Bring sunscreen and light layers for evening temperature drops

### Post-Match Exit Strategy

**The Waiting Game Pays Off**:

During Super Bowl LVI, Metro operated free shuttles from Hawthorne/Lennox C Line station every 5-8 minutes, with service continuing 1.5 hours after the game

**Recommended Timeline**:
1. **Final whistle**: Stay seated, enjoy the atmosphere
2. **+15 minutes**: Use restrooms, hydrate, discuss the match
3. **+30 minutes**: Exit stadium toward SoFi Shuttle pickup area
4. **+40 minutes**: Board shuttle (much shorter lines than immediate exit)
5. **+50 minutes**: Arrive LAX/Metro Transit Center, board Metro
6. **+75-90 minutes post-match**: Return to your accommodation

**Alternative**: Visit American Dream complex (adjacent to stadium) for dinner and entertainment. Depart 2-3 hours post-match with zero crowds and normal ride-share pricing.

## Money-Saving Transit Options

### The Fare Capping Strategy (Best Value for Multi-Day Visitors)

Metro's fare capping ensures you never pay more than $5 in one day or $18 within seven days—rides become free once you hit these caps

**Sample 5-Day LA Visit with 2 World Cup Matches**:

**Day 1** (Arrival):
- LAX to hotel (Metro): $1.75
- Hotel to Hollywood sight-seeing (Metro): $1.75
- Hollywood to hotel: $1.75
- **Daily total**: $5.25 → $5 (capped, 4th ride free)

**Day 2** (First match):
- Hotel to stadium: $1.75
- Stadium to Venice Beach: $1.75
- Beach to hotel: $1.75
- **Daily total**: $5.25 → Rides 4+ free (already hit weekly cap of $18)

**Days 3-5**: All Metro rides FREE (weekly cap reached)

**Total Transit Cost for 5 Days**: $18 maximum

Compare this to:
- Uber/Lyft for same trips: $150-250+
- Rental car + parking: $200-350+`}
              </ReactMarkdown>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h2 className="editorial-h3" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h3 className="editorial-h3" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h4 className="editorial-h4" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-6 space-y-2" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal pl-6 space-y-2" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="text-slate-700 dark:text-slate-300" {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-slate-900 dark:text-white" {...props} />
                  ),
                }}
              >
{`### Transit Pass Options

**TAP Card Basics**:
- No monthly pass needed—fare capping works automatically
- Just keep using the same TAP card or payment method
- Perfect for visitors (no commitment required)

**K-12 Students & College Students**:
Students at participating GoPass schools ride Metro for FREE

**Seniors (65+), Disabled, Medicare Holders**:
50% discount on most Metro and Metrolink tickets

### Budget Transportation Summary

**Most Economical 3-Day World Cup Visit**:

**Transportation Budget**:
- Metro fare capping (unlimited rides): $18 maximum
- SoFi Shuttle (all match days): FREE
- **Total**: $18

**Upgraded Budget** (occasional ride-share):
- Metro fare capping: $18
- 2 strategic Uber rides (avoiding surge): $40
- **Total**: $58

**Premium Budget** (flexibility):
- Metro for regular transport: $18
- Uber for convenience (4-5 rides): $100
- **Total**: $118

## Essential Transportation Apps & Tools

### Must-Download Before Arrival

1. **TAP App**
   - Purchase Metro fares digitally
   - Track fare capping progress
   - Avoid ticket machine lines
   - Works offline after loading

2. **Metro Official App**
   - Real-time train/bus arrivals
   - Service alerts and disruptions
   - Built-in trip planner
   - Station maps

3. **Google Maps**
   - Most accurate LA transit routing
   - Integrates all systems (Metro, Metrolink, buses)
   - Real-time traffic and delays
   - Walking directions to stations

4. **Uber & Lyft**
   - Compare prices before requesting
   - Pre-book rides up to 90 days in advance (Uber Reserve)
   - Save frequent locations (LAX/Metro Transit Center, hotel, stadium)

5. **Transit or Moovit** (Optional)
   - Alternative trip planning
   - Crowdsourced real-time updates
   - Works well for LA's complex system

### Digital Payment Setup

**Before You Arrive**:
- Add TAP to Apple Wallet (iPhone users)
- Download TAP Android app (Android users)
- Load $10-20 to start (fare capping handles the rest)
- Link credit card for automatic reloading

## Accessibility & Family Travel

### Accessible Transportation

**SoFi Stadium Accessibility**:
- SoFi Stadium offers extensive accessible parking in designated lots close to entrances, with ADA-compliant elevators, ramps, and accessible seating throughout
- Request accessibility services through stadium website

**Metro Rail Accessibility**:
- All C and K Line stations feature elevators, ramps, and platform gap accommodations
- Stations have tactile warning strips, audio/visual announcements, and accessibility features
- Some older Metro stations may have elevator outages—check metro.net before traveling

**SoFi Shuttle Accessibility**:
- Wheelchair-accessible buses
- Priority boarding for passengers with disabilities
- Assistance available from Metro Ambassadors

### Traveling with Children

**Family-Friendly Metro Tips**:
- Children under 5 ride free with paying adult (up to 3 children per adult)
- Strollers allowed; fold during crowded periods for others' comfort
- SoFi Stadium's LAX/Metro Transit Center has Throne restrooms and free water stations

**Family Transportation Strategy**:
For families with young children (under 7), consider:
- Uber/Lyft to stadium (avoid transfers, restroom emergencies)
- Metro + Shuttle home (kids tired, less meltdown risk when you're not rushing)
- Pack snacks, entertainment for 60-75 minute Metro journeys

## Inter-City Travel: Visiting Multiple Host Cities

### Los Angeles to Other California World Cup City

**Los Angeles to San Francisco Bay Area** (Levi's Stadium hosts 6 matches):

**By Air**:
- Flight time: 1 hour 20 minutes
- LAX to San Francisco (SFO) or San Jose (SJC)
- Book 2-3 months early for $80-150 round-trip

**By Train (Amtrak Coast Starlight)**:
- Journey time: 11-12 hours (overnight)
- Cost: $60-150 depending on class
- Scenic route along Pacific coast
- Not practical for tight match schedules

**By Car**:
- Distance: 380 miles (6-7 hours driving)
- Rental car: $40-80 per day
- Makes sense for groups of 4+ attending multiple matches

### Los Angeles to Western US Host Cities

**To Seattle** (Lumen Field, 6 matches):
- Flight: 2 hours 45 minutes, $150-300
- Drive: 1,135 miles, 18 hours (not recommended)

**To Vancouver** (BC Place, 7 matches):
- Flight: 2 hours 50 minutes, $200-400
- Drive: 1,278 miles, 20+ hours (not recommended)

**Strategic Multi-City Planning**:
Book flights immediately after World Cup schedule announcement. West Coast corridor (LA-SF-Seattle-Vancouver) offers best routing for multiple matches.

## Safety & Security

### General Transit Safety

**Metro Rail Safety**:
- Well-lit stations and trains
- Metro Rail stations are patrolled by LA County Sheriff's Department, LAPD, and Long Beach Police under contract, with CCTV monitoring and Metro Ambassadors providing assistance
- Travel in groups when possible after late evening matches
- Avoid empty subway cars late at night; stay near other passengers

**Match-Day Crowds**:
- Large crowds create pickpocketing opportunities
- Use front pockets or secure bags for phones, wallets, passports
- Keep tickets/credentials easily accessible but secure

### Emergency Contacts

- **Metro Customer Service**: 323-GO-METRO (323-466-3876)
- **LAX FlyAway 24-Hour Service**: 1-866-435-9529
- **Metrolink Customer Service**: 800-371-5465
- **SoFi Stadium Info**: Check official website for match-day hotlines
- **Emergency Services**: 911 (police, fire, medical)

## Critical Transportation Tips

1. **Download TAP app** and load $20 before your first Metro ride
2. **The SoFi Shuttle is FREE and the best option**—use it instead of driving
3. **Fare capping saves money**—$18 buys unlimited weekly rides
4. **Post-match patience pays off**—wait 45 minutes to avoid chaos
5. **LAX is 3 miles from the stadium**—closest airport-stadium connection in the tournament
6. **Pre-book airport transfers** for groups of 3+ (better value than individual rides)
7. **Uber surge pricing is brutal**—take Metro home after matches
8. **SoFi Shuttle runs 4 hours before to 90 minutes after**—plan within this window
9. **June/July weather is ideal**—70-85°F, bring sunscreen
10. **LAX/Metro Transit Center opened June 2025**—brand new, easy connections

## Your World Cup Transportation Plan

Los Angeles rewards preparation. The city's sprawling geography and car culture create challenges, but the 2025 opening of LAX/Metro Transit Center specifically for major events like the World Cup transformed SoFi Stadium accessibility.

Your winning strategy: Stay near LAX or along the C/K Metro lines. Use the free SoFi Shuttle for every match. Let Metro's fare capping handle your transportation budget automatically. Save ride-share for strategic moments (arrivals with luggage, late dinners in specific neighborhoods).

The United States' World Cup opener on June 12, 2026, will create unprecedented demand. The quarterfinal on July 10 brings even higher stakes. Between matches, Los Angeles offers world-class beaches, entertainment, dining, and culture—all accessible via the same Metro system that delivers you to soccer history.

See you at SoFi Stadium (officially "Los Angeles Stadium" during the tournament). When that opening whistle blows and 70,000 fans roar, you'll be in your seat—relaxed, on time, and ready for the beautiful game.

---

*Information current as of November 2025. All fares, schedules, and services subject to change. Verify details through official sources—LA Metro (metro.net), LAX Official (flylax.com), Metrolink (metrolinktrains.com), and FIFA World Cup 2026 (fifa.com)—closer to your travel dates. Match-specific transportation programs may be announced in spring 2026.*`}
              </ReactMarkdown>
            </div>
          ) : (
            <div>
              <p className="whitespace-pre-line">{guide?.intro || 'Detailed transportation guide coming soon.'}</p>
              <hr className="editorial-divider" />
            </div>
          )}
        </article>
      </section>

      <Footer />
    </div>
  )
}
