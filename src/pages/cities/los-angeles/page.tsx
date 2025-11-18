import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { getEditorialEntry } from '../../../components/seo/EditorialCalendar';

// Helper: convert **...** emphasis to <strong> while preserving text and spacing
const renderBoldText = (input: string) => {
  const parts = input.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default function LosAngelesArticlePage() {
  const pageUrl = '/world-cup-2026-host-cities/los-angeles';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';

  useEffect(() => {
    const title = 'Los Angeles – World Cup 2026 Guide';
    const description = 'Comprehensive Los Angeles travel guide for FIFA World Cup 2026: SoFi Stadium details, match schedule, transportation, and where to stay.';
    const fullUrl = `${siteUrl}${pageUrl}`;
    const ogImage = `${siteUrl}/images/cities/los-angeles-world-cup-2026.webp`;
    const entry = getEditorialEntry('city','los-angeles')
    setPageMeta({ title, description, url: fullUrl, image: ogImage, locale: 'en_US', publishedTime: entry?.isPublished ? entry.datePublished : undefined, modifiedTime: new Date().toISOString(), section: entry?.section || 'Host Cities', tags: ['World Cup 2026', 'Host Cities', 'Los Angeles', 'SoFi Stadium', ...(entry?.keywords||[])] })
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Los Angeles – World Cup 2026 Guide',
            'Comprehensive Los Angeles travel guide for FIFA World Cup 2026: SoFi Stadium details, match schedule, transportation, and where to stay.',
            `${siteUrl}${pageUrl}`,
            { datePublished: (getEditorialEntry('city','los-angeles')?.datePublished), dateModified: new Date().toISOString(), inLanguage: 'en-US', articleSection: 'Host Cities', keywords: ['World Cup 2026', 'Los Angeles', 'SoFi Stadium'] }
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: siteUrl },
            { name: 'Host Cities', url: `${siteUrl}/world-cup-2026-host-cities` },
            { name: 'Los Angeles', url: `${siteUrl}${pageUrl}` }
          ]),
          generateImageObjectSchema(
            '/images/cities/los-angeles-world-cup-2026.webp',
            { width: 1600, height: 900, caption: 'Los Angeles skyline – World Cup 2026' }
          )
        ]}
      />

      <Header />

      {/* Editorial Hero — cohesive with article style */}
      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src="/images/cities/los-angeles-world-cup-2026.webp"
            alt="Los Angeles skyline"
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
              <span>World Cup 2026</span>
            </div>
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb navigation for Los Angeles World Cup 2026 Guide" className="breadcrumb-ultra-premium mt-2">
              <ol>
                <li className="breadcrumb-item">
                  <Link to="/" className="breadcrumb-link" title="Home">
                    <svg className="breadcrumb-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="truncate">Home</span>
                  </Link>
                </li>
                <li className="breadcrumb-separator" aria-hidden="true">›</li>
                <li className="breadcrumb-item">
                  <Link to="/world-cup-2026-host-cities" className="breadcrumb-link" title="Host Cities">
                    <span className="truncate">Host Cities</span>
                  </Link>
                </li>
                <li className="breadcrumb-separator" aria-hidden="true">›</li>
                <li className="breadcrumb-item">
                  <span className="breadcrumb-current" title="Los Angeles World Cup 2026 Guide">
                    <span className="truncate">Los Angeles World Cup 2026 Guide</span>
                  </span>
                </li>
              </ol>
            </nav>
            <h1 className="editorial-hero-title">Los Angeles</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                <span>USA</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-building-line"></i>
                <span>SoFi Stadium</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-group-line"></i>
                <span>70,240 capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections — Editorial presentation */}
      <section className="editorial-article py-12">
        {/* Introduction */}
        <article className="editorial-body editorial-dropcap">
          <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-trophy-line text-emerald-500"></i>
            Where World Cup Dreams Meet Hollywood Magic
          </h2>
          <p>
            As one of the <Link to="/world-cup-2026-host-cities" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">World Cup 2026 host cities</Link>, Los Angeles will welcome fans from around the globe with a mix of football energy and California sunshine.
          </p>
          <p className="whitespace-pre-line">
            {`Get ready for the opening kick: The U.S. Men's National Team launches their World Cup journey at `}
            <Link to="/world-cup-2026-stadiums/sofi-stadium" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">SoFi Stadium</Link>
            {` on June 12, 2026`}
          </p>
          <p className="whitespace-pre-line">
            {`Los Angeles isn't just hosting the World Cup—it's throwing the party to end all parties. When the U.S. opens their 2026 campaign on June 12 at the gleaming SoFi Stadium in Inglewood, the City of Angels will welcome the world with 39 consecutive days of football fever, eight must-see matches, and a soccer culture that pulses through every corner of this sprawling metropolis. This is where beach vibes collide with championship ambitions, where tacos fuel pregame rituals, and where 3.6 million Mexican-Americans help create the most electric football atmosphere in North America.`}
          </p>
          <p className="whitespace-pre-line">
            {`Forget everything you think you know about LA. The traffic? Manageable with the right strategy. The sprawl? Part of the adventure. The stereotypes? Shattered the moment you step into a packed supporters' section at BMO Stadium or watch the sun set over the Pacific after a match day. Los Angeles has been preparing for this moment since 1994, when the Rose Bowl hosted the World Cup final. Three decades later, the city's newest architectural marvel is ready to prove why LA is the undisputed soccer capital of the United States.`}
          </p>

          {/* Essential Links Module */}
          <div class="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:bg-navy-800 dark:border-navy-700">
            <div class="font-inter font-semibold text-slate-900 dark:text-slate-100 mb-2">🔗 Essential Los Angeles Links</div>
            <div class="space-y-1 text-slate-800 dark:text-slate-200">
              <div>🏟️ <strong>Stadium:</strong> <a class="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500" href="/world-cup-2026-stadiums/sofi-stadium" data-discover="true">SoFi Stadium Guide</a></div>
              <div>🗺️ <strong>All Host Cities:</strong> <a class="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500" href="/world-cup-2026-host-cities" data-discover="true">Explore All 16 Cities</a></div>
              <div>✈️ <strong>Nearby Cities:</strong> <a class="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500" href="/world-cup-2026-host-cities/san-francisco" data-discover="true">San Francisco Bay Area</a> | <a class="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500" href="/world-cup-2026-host-cities/seattle" data-discover="true">Seattle</a> | <a class="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500" href="/world-cup-2026-host-cities/vancouver" data-discover="true">Vancouver</a></div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* SoFi Stadium */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-4-line text-emerald-500"></i>
            SoFi Stadium: The $5 Billion Cathedral of Sport
          </h3>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-star-line text-emerald-500"></i>
                The Venue That Redefined Spectacular
              </h4>
              <p className="whitespace-pre-line">
                {`Built in 2020 at a jaw-dropping cost that makes it the most expensive stadium ever constructed, SoFi Stadium in Inglewood isn't just a venue—it's a destination experience. The translucent ETFE canopy hovers like a spaceship over the field, open on the sides to let coastal breezes flow through while protecting 70,240 fans (expandable to 100,240 for major events) from the elements. The Infinity Screen, a double-sided 4K marvel weighing 1,000 tonnes, dangles overhead with 260 speakers delivering crystal-clear replays from every angle.

For the World Cup, SoFi undergoes a fascinating transformation. FIFA's strict requirements mean the stadium's artificial turf gets replaced with natural grass, and clever engineering expands the pitch dimensions to regulation size by rolling back corner sections of the lower bowl. When match officials refer to it as "Los Angeles Stadium" (FIFA bans corporate naming during tournaments), you'll know you're witnessing something historic.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-calendar-event-line text-emerald-500"></i>
                Eight Matches That Matter
              </h4>
              <p className="whitespace-pre-line">
                {`Los Angeles scores big in the match allocation lottery:

- June 12: USA's opening match kicks off the American World Cup journey (and quite possibly sets attendance records)
- June 15, 18, 21: Three additional group stage clashes featuring teams battling for knockout spots
- June 25: USA returns for their critical third group match—qualification or heartbreak territory
- June 28 & July 2: Two Round of 32 knockout fixtures where favorites get tested
- July 10: A quarterfinal showdown with a semifinal berth on the line

The tournament schedule means you could theoretically attend multiple matches across different dates, building your own World Cup odyssey through Southern California's perfect June weather.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-information-line text-emerald-500"></i>
                Match Day Intel: What You Need to Know
              </h4>
              <p className="whitespace-pre-line">
                {`Getting In: SoFi operates on mobile-only ticketing through FIFA's official app. Print-outs won't work, so charge that phone and have your QR code ready. Gates typically open 2-4 hours before kickoff—arrive early, because security screenings can stretch longer than you'd expect when 70,000 fans converge on Inglewood.

What to Bring: Clear bags only (FIFA's security protocols are strict). Sunscreen is non-negotiable even under the canopy—LA's June sun is relentless. A light layer for evening matches makes sense; coastal air cools down after sunset, and you'll feel the temperature drop as the ocean breeze picks up.

What to Leave Behind: No large bags, no smoking devices (the entire campus is smoke-free), no poles or flag sticks that block views. Don't test security—they've hosted Super Bowls and know their business.

Stadium Vibe: SoFi sits inside the Hollywood Park entertainment complex, meaning pre-match energy spills across restaurants, bars, and public spaces surrounding the stadium. The newly opened Kali Hotel and Rooftop (launching 2026) anchors a fan village atmosphere that European visitors will recognize and Americans will embrace.`}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Transportation */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-train-line text-emerald-500"></i>
            Getting to SoFi: Transportation That Actually Works
          </h3>
          <p className="whitespace-pre-line mb-6">
            {`Here's the good news LA doesn't advertise enough: You absolutely don't need a car for World Cup matches. In fact, you probably shouldn't drive.`}
          </p>
          <p className="whitespace-pre-line mb-6">
            Los Angeles is well-connected to other host cities like
            {' '}<Link to="/world-cup-2026-host-cities/san-francisco" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">San Francisco Bay Area</Link>
            {' '}and{' '}
            <Link to="/world-cup-2026-host-cities/seattle" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Seattle</Link>
            , making multi-city itineraries easy via air or rail.
          </p>
          
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-subway-line text-emerald-500"></i>
                Metro: Your Best Bet
              </h4>
              <p className="whitespace-pre-line">
                {`LA Metro rolls out a dedicated SoFi Stadium Shuttle connecting from the LAX/Metro Transit Center station. Here's how it works:

1. Take the C Line (Green) or K Line (Crenshaw) to LAX/Metro Transit Center
2. Board the free SoFi Shuttle at Bus Bay 8 (runs every 5-8 minutes on event days)
3. Arrive at the stadium in approximately 10 minutes

The system connects seamlessly from Downtown LA (Metro B Line to Willowbrook/Rosa Parks, transfer to C Line), Hollywood (same route), Santa Monica (Expo Line to Downtown, then transfer), and virtually anywhere on the Metro network. A regular adult fare costs just $1.75, valid for two hours of transfers. Load it on a TAP card (available at station machines) or use the TAP app on your smartphone.

Pro Tip: Park-and-ride lots at various C Line stations offer free parking on weekends. Check Metro's real-time service updates via the Transit app to avoid delays.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-bus-line text-emerald-500"></i>
                Alternative Options for Strategic Travelers
              </h4>
              <p className="whitespace-pre-line">
                {`Municipal Transit: GTrans operates Line 7X Stadium Express from Harbor Gateway Transit Center for $4 roundtrip on event days. Torrance Transit also runs special service on select dates.

Rideshare Reality: Uber and Lyft work, but expect surge pricing and pickup chaos post-match. Designated zones help organize the madness, though waiting 30-45 minutes isn't unusual after major events. Split the cost with friends or embrace the Metro—you'll save money and arrive happier.

Driving & Parking: If you must drive, pre-purchase parking through the stadium's official provider. Zones (color-coded: Orange, Green, Purple) open 2-4 hours pre-match and cost significantly more than Metro fare. ADA parking available with valid permits.`}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Related Destinations */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-route-line text-emerald-500"></i>
            Plan Your West Coast World Cup Journey
          </h3>
          <div className="space-y-4">
            <p>
              Los Angeles is perfectly positioned for an epic West Coast World Cup adventure. Many fans combine multiple cities for the ultimate 2026 experience.
            </p>
            <p className="font-inter text-slate-900 dark:text-white font-semibold">Popular Combinations:</p>
            <p>
              <strong>Pacific Coast Circuit</strong>
              {' '}Start in Los Angeles, head north to{' '}
              <Link to="/world-cup-2026-host-cities/san-francisco" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">San Francisco Bay Area</Link>
              {' '}for its tech culture and iconic landmarks, then continue to{' '}
              <Link to="/world-cup-2026-host-cities/seattle" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Seattle</Link>
              {' '}for Pacific Northwest charm.
            </p>
            <p>
              <strong>Southern California & Beyond</strong>
              {' '}Combine LA's beaches and entertainment and, if time allows, venture to Las Vegas for world-class shows between matches.
            </p>
            <p>
              <strong>Cross-Border Adventure</strong>
              {' '}Connect Los Angeles with{' '}
              <Link to="/world-cup-2026-host-cities/mexico-city" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Mexico City</Link>
              ,{' '}
              <Link to="/world-cup-2026-host-cities/guadalajara" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Guadalajara</Link>
              , or{' '}
              <Link to="/world-cup-2026-host-cities/monterrey" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Monterrey</Link>
              {' '}for an incredible cultural contrast.
            </p>
            <p>
              <Link to="/world-cup-2026-host-cities" className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Browse All World Cup 2026 Host Cities</Link>
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-emerald-500"></i>
            Where to Stay: Neighborhoods for Every Football Fan
          </h3>
          <p className="whitespace-pre-line mb-6">
            {`Los Angeles sprawls across 1,302 square kilometers, making neighborhood choice critical. Here's your insider breakdown based on budget, vibe, and what you actually want to experience.`}
          </p>
          
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-map-pin-user-line text-emerald-500"></i>
                West Hollywood: The Central Command ($$-$$$)
              </h4>
              <p className="whitespace-pre-line">
                {`Why Stay Here: Centrally located between Hollywood and Beverly Hills, WeHo puts you walking distance from incredible restaurants, bars, and LA's vibrant LGBTQ+ scene. It's the Goldilocks zone—close enough to everything without being stuck in one corner of the city.

The Vibe: Trendy, walkable, energetic. Sunset Strip nightlife meets excellent coffee shops and the city's best boutique hotels. You'll spot celebrities at Chateau Marmont and find killer Korean BBQ in adjacent Koreatown.

World Cup Bonus: Easy Metro access via Hollywood/Western or Vermont/Sunset stations (15 minutes to Downtown, connect to C Line for SoFi). Uber to the stadium runs $25-35 without surge.

Book Smart: The Charlie West Hollywood offers spacious suites with personality. The Hollywood Roosevelt (technically Hollywood, but close enough) sits steps from Walk of Fame and delivers old-school glamour at surprisingly fair rates.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-sun-line text-emerald-500"></i>
                Santa Monica: Beach Town Bliss ($$$-$$$$)
              </h4>
              <p className="whitespace-pre-line">
                {`Why Stay Here: If you're treating the World Cup as part of a larger California adventure, Santa Monica delivers quintessential SoCal vibes. The beach, the pier, the sunshine—it's what you pictured when you booked that flight.

The Vibe: Laid-back beachside community with excellent restaurants, Third Street Promenade shopping, and sunset views that'll dominate your Instagram. Families love it; so do couples seeking romance with waves as soundtrack.

World Cup Reality Check: You're 45 minutes from SoFi by Metro (Expo Line to Downtown, transfer to C Line), longer by car during rush hour. Factor travel time carefully—you don't want to miss kickoff because you lingered over brunch.

Book Smart: Shore Hotel sits across from the sand with eco-conscious amenities and modern style. Casa Del Mar oozes Renaissance Revival luxury for those with budgets to match.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-building-2-line text-emerald-500"></i>
                Downtown LA: Arts, Culture & Connection ($$-$$$)
              </h4>
              <p className="whitespace-pre-line">
                {`Why Stay Here: Downtown puts you at the Metro hub (Union Station), near arts attractions (The Broad, MOCA, Walt Disney Concert Hall), and in the middle of LA's best public transit connections. The Arts District specifically offers warehouse-chic dining and breweries.

The Vibe: Urban, artistic, diverse. Less touristy than Hollywood, grittier than Westside, but culturally rich. Night Market brings Filipino street food, Grand Central Market serves world cuisine, and Little Tokyo neighbors the convention center.

World Cup Advantage: Best Metro access in the city. C Line direct from several DTLA stations to SoFi. Multiple hotel options from business-class (InterContinental) to design-forward (Freehand Los Angeles with rooftop pool).

Book Smart: Downtown LA Proper delivers boutique style in the historic district. Avoid Skid Row areas (east of Alameda Street) and stick to Arts District, Financial District, or near Grand Park.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-movie-line text-emerald-500"></i>
                Hollywood: Tourist Central with Purpose ($-$$)
              </h4>
              <p className="whitespace-pre-line">
                {`Why Stay Here: You came to LA, you want Hollywood Boulevard, Chinese Theatre, Watch of Fame, Griffith Observatory access. First-timers often regret skipping the classics.

The Vibe: Touristy, yes. But also energetic, affordable (compared to beaches), and better than its reputation suggests. Hollywood & Highland area cleans up well; Hills neighborhoods offer canyon views.

World Cup Value: Metro B Line (Red) connects directly to downtown transfers for SoFi access. Hostels exist for budget travelers; mid-range hotels cluster near Highland Avenue.

Book Smart: Magic Castle Hotel delivers character without breaking the bank. The Hollywood Roosevelt offers poolside glamour where Marilyn Monroe once sunbathed.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-vip-crown-line text-emerald-500"></i>
                Beverly Hills: Luxury with Star Power ($$$$)
              </h4>
              <p className="whitespace-pre-line">
                {`Why Stay Here: You want to see where movie stars shop, dine at Michelin-starred restaurants, and possibly spot a Ferrari or three on Rodeo Drive. Beverly Hills sells a fantasy, and sometimes fantasies are worth funding.

The Vibe: Polished, manicured, expensive. Palm tree-lined streets, luxury boutiques, old Hollywood elegance. Not walkable to much beyond its own borders, but Uber makes anywhere accessible.

World Cup Consideration: You're paying for prestige, not proximity. Budget 30-40 minutes to SoFi by car, slightly more by Metro (no direct line; requires transfers).

Book Smart: Four Seasons Beverly Hills justifies the splurge with impeccable service and that "I made it" feeling. Alternatively, Airbnb offers homes that sleep groups in nearby neighborhoods like Culver City or Marina del Rey for better value.`}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* LA Football Culture */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-football-line text-emerald-500"></i>
            Beyond the Pitch: What Makes LA Football Culture Special
          </h3>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-trophy-line text-emerald-500"></i>
                El Tráfico: The Rivalry That Defines LA Soccer
              </h4>
              <p className="whitespace-pre-line">
                 {renderBoldText(`Los Angeles isn't just hosting the World Cup—it's already living and breathing football culture year-round through one of MLS's fiercest rivalries: El Tráfico. When LA Galaxy (founded 1996, five-time MLS champions, based in suburban Carson at Dignity Health Sports Park) face Los Angeles FC (launched 2018, MLS Cup 2022 winners, downtown at Banc of California Stadium), the city splits down supporter lines.

**The Galaxy Way**: Legacy, history, "Since '96" pride. They brought David Beckham to MLS, hosted Zlatan Ibrahimović, and represent suburban family-friendly football culture. Their supporters believe in earned respect through decades of championships.

**The LAFC Difference**: Downtown energy, The 3252 supporters' section, Black Army ultras culture, and a stadium built specifically for soccer in the heart of the city. They're the scrappy upstart that won everything fast and made Galaxy fans nervous.

Visit BMO Stadium (formerly Banc of California, LAFC's home) before or after World Cup matches to understand what American soccer can be when done right. The 22,000-seat venue sits adjacent to USC campus, accessible via Expo Line Metro, and hosts some of the most passionate supporters in North American sports.`)}
               </p>
             </div>

             <div>
               <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                 <i className="ri-tv-line text-emerald-500"></i>
                 Where to Watch With Locals
               </h4>
               <p className="whitespace-pre-line">
                 {renderBoldText(`Los Angeles boasts nearly 40 **LAFC-affiliated pubs** plus countless Galaxy bars, giving you authentic matchday experiences even when you're not at SoFi:

- **La Chuperia** (Lincoln Heights): LAFC stronghold with micheladas and carne asada
- **The Sunset Room** (Hacienda Heights): East LA Galaxy faithful
- **Underdogs** (Glendale): Barcelona fans converge here
- **Britannia Pub** (Santa Monica): Leeds United supporters' west-side haven
- **La Cita Bar** (Downtown): Mexican national team watch parties with full mariachi energy

During the World Cup, expect official FIFA Fan Festivals at **Exposition Park** (near Downtown, accessible via Expo Line) with big screens, food vendors, and cultural programming. Additional fan zones will dot Hollywood Park around SoFi and LA Live entertainment complex downtown.`)}
               </p>
             </div>

             <div>
               <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                 <i className="ri-women-line text-emerald-500"></i>
                 Angel City FC: Women's Game Rising
               </h4>
               <p className="whitespace-pre-line">
                 {renderBoldText(`Don't sleep on **Angel City FC** (NWSL), LA's women's professional team that proves the city's football passion extends beyond MLS. Founded in 2020 with ownership including actress Natalie Portman, tennis legend Serena Williams, and 13 former USWNT players, ACFC brings Banc of California Stadium alive with The Angel City Brigade supporters and matches that deserve your attention. With the USWNT scheduled to face Brazil at SoFi on April 5, 2026 (testing the World Cup grass installation), women's soccer momentum builds toward the tournament.`)}
               </p>
             </div>
           </div>
          <hr className="editorial-divider" />
        </article>

         {/* What to Do When You're Not at Matches */}
         <article className="editorial-body">
           <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
             <i className="ri-compass-3-line text-emerald-500"></i>
             What to Do When You're Not at Matches
           </h3>
           
           <div className="mt-6 space-y-6">
             <div>
               <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                 <i className="ri-sun-line text-emerald-500"></i>
                 Sun, Sand & Surf
               </h4>
               <p className="whitespace-pre-line">
                 {renderBoldText(`**Santa Monica & Venice Beach**: Connected by a gorgeous bike/walk path, these beaches define California cool. Rent bikes ($10-15/day via Metro Bike Share), watch surfers at Venice Pier, people-watch on Venice Boardwalk's funky scene, and catch sunset from Santa Monica Pier's amusement park.

**Manhattan & Hermosa Beach**: South Bay beaches offer mellower vibes, better for families. Small aquariums, pedestrian-friendly downtown areas, and beach volleyball culture that's pure SoCal.

**Malibu**: Drive north on Pacific Coast Highway for dramatic coastline, celebrity homes (from a distance), and beaches that feel like undiscovered gems despite Malibu's reputation.`)}
               </p>
             </div>

             <div>
               <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                 <i className="ri-building-4-line text-emerald-500"></i>
                 Cultural Heavy-Hitters
               </h4>
               <p className="whitespace-pre-line">
                 {renderBoldText(`**Griffith Observatory**: Perched in Griffith Park, this 1935 art deco beauty offers free admission (parking $10), planetarium shows, and the best views of the Hollywood Sign and LA basin. Go at sunset, stay for city lights. Metro doesn't reach it directly; rideshare or DASH shuttle from Hollywood/Western Metro.

**The Getty Center**: Free admission (parking $20) to this architectural masterpiece in Brentwood showcasing European art, stunning gardens, and panoramic valley views. Worth a half-day minimum.

**LACMA (Los Angeles County Museum of Art)**: Massive collection spanning ancient to contemporary art. The Urban Light installation (those iconic vintage streetlamps) anchors Miracle Mile's Museum Row. Walking distance from Fairfax District's Farmers Market.

**The Broad** (Downtown): Free contemporary art museum (reservations recommended) featuring Kusama's Infinity Mirrors and works by Basquiat, Warhol, and Koons. Walkable from Grand Park and Disney Concert Hall.`)}
               </p>
             </div>

             <div>
               <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                 <i className="ri-road-map-line text-emerald-500"></i>
                 Neighborhood Explorations
               </h4>
               <p className="whitespace-pre-line">
                 {renderBoldText(`**Los Feliz & Silver Lake**: Hipster havens northeast of Hollywood with vintage shops, excellent brunch spots (Pine & Crane for Taiwanese, All Day Baby for new American), and Barnsdall Art Park's Frank Lloyd Wright Hollyhock House.

**Koreatown**: Dense, 24-hour energy with insane Korean BBQ (open late for post-match gorging), karaoke bars, spas, and The Line Hotel's rooftop for cocktails with views.

**Arts District** (Downtown): Warehouse-turned-gallery neighborhood with street art murals, Bestia (possibly LA's best Italian), Angel City Brewery, and Hauser & Wirth contemporary art gallery.

**Hollywood Hills Hikes**: Runyon Canyon (crowded but convenient), Griffith Park trails (to the Observatory or beyond), and Bronson Canyon (where the Batcave was filmed) offer workout-with-views experiences.`)}
               </p>
             </div>

             <div>
               <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                 <i className="ri-restaurant-line text-emerald-500"></i>
                 Food Scenes You Can't Miss
               </h4>
               <p className="whitespace-pre-line">
                 {renderBoldText(`Los Angeles is arguably America's best food city, rivaling New York with deeper Mexican, Korean, Japanese, and Thai options:

**Tacos**: LA's taco trucks operate 24/7. Leo's Tacos (Hollywood), Tacos El Gordo (Chula Vista with LA outpost), and literally hundreds of neighborhood spots serve authenticity.

**Korean BBQ**: Kang Ho-Dong Baekjeong or Park's BBQ in Koreatown—order beef bulgogi, pork belly, and banchan sides. Go with a group, go hungry.

**Japanese Ramen**: Tsujita LA (Sawtelle), Silverlake Ramen, Daikokuya (Little Tokyo)—lines are common, worth it.

**High-End Splurge**: Providence (Michelin two-star seafood), Bestia (Arts District Italian), or République (French bistro in Hancock Park).

**Grand Central Market** (Downtown): Historic food hall with everything from Eggslut breakfast sandwiches to Sarita's Pupuseria to G&B Coffee's minimalist espresso.`)}
               </p>
             </div>
           </div>
           <hr className="editorial-divider" />
         </article>

        {/* Practical Travel Tips */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-lightbulb-line text-emerald-500"></i>
            Practical Travel Tips for World Cup Visitors
          </h3>
          
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-sun-cloudy-line text-emerald-500"></i>
                Weather & What to Pack
              </h4>
              <p className="whitespace-pre-line">
                {renderBoldText(`**June in LA**: Near-perfect. Daytime highs average 26-27°C (79-81°F), dropping to 15-17°C (59-63°F) at night. Virtually zero rain (June averages just 3mm total precipitation). Ten hours of sunshine daily. Coastal areas might experience "June Gloom"—morning fog that burns off by noon.

**July heats up** to 28-30°C (82-86°F) days, 18-20°C (64-68°F) nights. Still dry, still sunny, slightly warmer for later matches.

**Pack**: Sunscreen (SPF 50+), sunglasses, hat, light layers for evening, comfortable walking shoes (you'll log serious steps), team jerseys, and that camera. Evening matches under SoFi's canopy with ocean breezes can feel surprisingly cool—throw a light jacket in your bag.`)}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-shield-check-line text-emerald-500"></i>
                Safety & Street Smarts
              </h4>
              <p className="whitespace-pre-line">
                {renderBoldText(`LA is generally safe for tourists in main areas, but street smarts apply:

- **Avoid**: Skid Row (Downtown east of Alameda), walking alone late at night in deserted areas near stadiums post-match
- **Watch**: Belongings on Metro (pickpocketing happens); car break-ins if you drive (don't leave visible valuables)
- **Stay aware**: In Hollywood, some blocks feel sketchy at night beyond the main tourist drag
- **Use common sense**: Groups are safer; well-lit areas are better; Uber/Lyft after late matches beats walking unknown neighborhoods

Popular tourist neighborhoods (Santa Monica, West Hollywood, Beverly Hills, Hollywood tourist zone) are well-patrolled and designed for visitors.`)}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-money-dollar-circle-line text-emerald-500"></i>
                Money Matters
              </h4>
              <p className="whitespace-pre-line">
                {`Credit cards work everywhere; most places don't accept cash-only. ATMs abound. Tipping culture is strong: 18-20% restaurants, $1-2 per drink at bars, round up for rideshares.

Costs add up fast in LA. Budget $15-25 for casual meals, $40-80 for mid-range dinners, $25-50 for Uber to SoFi from beach areas. Metro saves significant money—embrace public transit.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-passport-line text-emerald-500"></i>
                Visa Requirements
              </h4>
              <p className="whitespace-pre-line">
                {renderBoldText(`International visitors (except Canadian and some visa waiver countries): Apply for **B-2 tourist visa** well in advance. Processing can take weeks during World Cup surge. Visa waiver program (ESTA) applies to many European, Asian, and Latin American countries—check eligibility at travel.state.gov.`)}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-smartphone-line text-emerald-500"></i>
                Phone & Connectivity
              </h4>
              <p className="whitespace-pre-line">
                {`Rent a US SIM at LAX airport convenience stores, or use providers like Airalo for e-SIMs. T-Mobile and AT&T dominate; Verizon works well too. Public WiFi exists at Metro stations, Starbucks, and most public spaces.`}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* World Cup Booking Strategy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-calendar-check-line text-emerald-500"></i>
            Your World Cup Booking Strategy
          </h3>
          
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-time-line text-emerald-500"></i>
                When to Book
              </h4>
              <p className="whitespace-pre-line">
                {renderBoldText(`**Now**. Seriously. Los Angeles hotel inventory gets crushed during major events, and the World Cup dwarfs typical demand. June 2026 accommodation prices will soar as dates approach.

**Flight Strategy**: LAX is America's third-busiest airport with direct international connections from everywhere. Book 6-9 months out for best fares. Consider flying into Burbank (BUR) for Hollywood-area stays or Long Beach (LGB) for South Bay access—both smaller airports with less chaos.

**Hotel Bundles**: Many travel booking platforms offer flight+hotel packages that save 10-20% versus separate bookings. Look for deals that include Metro passes or airport transfers.`)}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-search-line text-emerald-500"></i>
                Where to Hunt Deals
              </h4>
              <p className="whitespace-pre-line">
                {renderBoldText(`**Comparison Sites**: Start with the usual suspects (Booking.com, Expedia, Hotels.com) but cross-reference prices directly on hotel websites—sometimes they beat third-party rates or include perks like breakfast or parking.

**Alternative Accommodation**: Airbnb and VRBO offer apartments and homes, especially valuable for groups splitting costs. Filter by neighborhoods: West Hollywood, Culver City, and neighborhoods near Metro stations for convenience.

**Loyalty Programs**: If you're already deep in hotel points ecosystems (Marriott, Hilton, IHG), LA has robust properties in every loyalty chain. Redeem those points for championship matches.`)}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-medal-line text-emerald-500"></i>
                The Affiliate Advantage
              </h4>
              <p className="whitespace-pre-line">
                {renderBoldText(`Smart travelers use price comparison tools that scan hundreds of booking sites simultaneously. You're already planning an expensive trip—why not save hundreds on accommodation by letting technology find the best rates? Many booking platforms offer:

- **Price match guarantees**: Find it cheaper elsewhere? They'll match or refund the difference
- **Member-only discounts**: Sign up for booking sites' free loyalty programs for instant 10% off
- **Bundled savings**: Flight+hotel packages, match ticket + accommodation deals (when FIFA releases official packages)
- **Flexible cancellation**: World Cup plans change—book now with free cancellation options to lock rates

Check trusted booking partners that specialize in major sporting events—they often negotiate group rates and exclusive access to sold-out properties.`)}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Your Los Angeles World Cup Story Starts Here */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-trophy-line text-emerald-500"></i>
            Your Los Angeles World Cup Story Starts Here
          </h3>
          
          <div className="space-y-4">
            <p className="">
              Twenty years ago, the Rose Bowl hosted the last World Cup final on American soil. Now it's SoFi's turn to write history, starting with the U.S. opening match that'll send seismic hope through every American football fan. Eight matches. Thirty-nine days of festival atmosphere. A city that's hosted Olympics, Super Bowls, and Beyoncé residencies—finally getting its moment on soccer's biggest stage.
            </p>
            
            <p className="">
              Los Angeles doesn't do anything small. The beaches stretch forever, the food scene never sleeps, the culture mixes in ways you won't find anywhere else. This isn't just a World Cup host city; it's the city where dreams get chased under palm trees and championship runs begin with that first nervous kick on June 12.
            </p>
            
            <p className="">
              The Metro's running. The stadiums are ready. The tacos are waiting. And somewhere in West Hollywood, Silver Lake, or a beach parking lot in Santa Monica, fans from 48 nations are about to discover what locals already know: Los Angeles is the world's city, and in summer 2026, the world's game comes home.
            </p>
            
            <blockquote>
              <p className="font-semibold text-center">
                <strong>Book smart. Travel Metro. Arrive early. And when that first whistle blows at SoFi Stadium, you'll know exactly why LA was built for this moment.</strong>
              </p>
            </blockquote>
            
            <p className="italic flex items-start gap-2">
              <i className="ri-lightbulb-line text-emerald-500 mt-0.5"></i>
              <span><strong>Pro Travel Tip:</strong> Download the LA Metro Trip Planner app, load your TAP card before arrival, and screenshot your FIFA mobile tickets—phone batteries die at the worst moments. See you at kickoff.</span>
            </p>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Back CTA */}
        <div className="mt-8 flex justify-end">
          <Link to="/world-cup-2026-host-cities" className="font-inter font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">
            <i className="ri-check-line mr-2"></i>
            Got It
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}