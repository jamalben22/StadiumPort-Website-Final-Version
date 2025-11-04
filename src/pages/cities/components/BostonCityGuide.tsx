import { useEffect } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';

export function BostonCityGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'Boston World Cup 2026 – Gillette Stadium & City Guide',
            "Highlight Boston’s mix of history and sports passion, showcasing its skyline and Gillette Stadium’s nearby location in Foxborough.",
            `${import.meta.env.VITE_SITE_URL || 'http://localhost:3000'}/world-cup-2026-cities/boston`
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Host Cities', url: '/world-cup-2026-cities' },
            { name: 'Boston', url: '/world-cup-2026-cities/boston' }
          ]),
          generateImageObjectSchema('/images/cities/boston-world-cup-2026.webp', {
            width: 1600,
            height: 900,
            caption: 'Boston skyline – World Cup 2026 host city'
          })
        ]}
      />

      {/* Dynamic Meta Tags for OG/Twitter */}
      {(() => {
        const pageUrl = `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/world-cup-2026-cities/boston`;
        const ogImage = `${import.meta.env.VITE_SITE_URL || ''}/images/cities/boston-world-cup-2026.webp`;
        const title = 'Boston World Cup 2026 – Gillette Stadium & City Guide';
        const description = "Highlight Boston’s mix of history and sports passion, showcasing its skyline and Gillette Stadium’s nearby location in Foxborough.";

        // useEffect is safe in client components
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          document.title = title;

          const setMeta = (selector: string, attr: string, value: string) => {
            const el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
            if (el) el.setAttribute(attr, value);
          };

          setMeta('meta[name="description"]', 'content', description);
          setMeta('link[rel="canonical"]', 'href', pageUrl);

          setMeta('meta[property="og:title"]', 'content', title);
          setMeta('meta[property="og:description"]', 'content', description);
          setMeta('meta[property="og:url"]', 'content', pageUrl);
          setMeta('meta[property="og:image"]', 'content', ogImage);

          setMeta('meta[property="twitter:title"]', 'content', title);
          setMeta('meta[property="twitter:description"]', 'content', description);
          setMeta('meta[property="twitter:url"]', 'content', pageUrl);
          setMeta('meta[property="twitter:image"]', 'content', ogImage);
        }, []);
        return null;
      })()}

      {/* Hero Section with Optimized Image */}
      <section className="relative">
        <div className="relative h-[360px] md:h-[440px] overflow-hidden">
          <OptimizedImage
            src="/images/cities/boston-world-cup-2026.webp"
            alt="Boston skyline – World Cup 2026 host city"
            className="absolute inset-0"
            imgClassName="object-cover object-center"
            width={1600}
            height={900}
            priority={true}
            placeholder="blur"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-300 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Boston</h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base font-medium">
                <div className="flex items-center gap-2">
                  <i className="ri-map-pin-line text-emerald-300"></i>
                  <span>USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-building-line text-emerald-300"></i>
                  <span>Gillette Stadium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Part 1/5 verbatim */}
      <main className="p-8 md:p-12 space-y-12">
        {/* Introduction and Match Schedule */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="prose prose-lg max-w-none dark:prose-invert dark:text-white space-y-6">
            <p>
              <strong>Match Schedule:</strong> June 13, 16, 19, 23, 26 (Group Stage) | June 29 (Round of 32) | July 9 (Quarter-Final)
            </p>
            <p>
              When the 2026 FIFA World Cup kicks off in Boston, the city that launched a revolution will welcome the world for <strong>seven matches</strong> spanning four weeks—including five group stage encounters, a Round of 32 showdown, and a <strong>quarter-final</strong> on July 9 that guarantees elite football drama. This isn't Boston's first World Cup rodeo. In 1994, the then-Foxboro Stadium hosted six matches including quarterfinal action, helping plant American soccer culture that eventually blossomed into MLS.
            </p>
            <p>
              But 2026 is different. Boston hosts more than just matches—the city becomes the epicenter of a once-in-a-lifetime sports trifecta. <strong>Sail Boston</strong> (July 11-16), the largest maritime celebration ever to visit the United States, arrives days after the quarter-final. <strong>America 250</strong> commemorations celebrating the nation's founding run throughout summer. Add seven World Cup matches to the mix, and Boston delivers the perfect storm of international football, nautical spectacle, and patriotic celebration.
            </p>
            <p>
              Whether you're watching matches at Gillette Stadium 25 miles southwest or exploring Revolutionary War history along the Freedom Trail, Boston promises a World Cup experience wrapped in red-brick charm, championship pedigree (17 titles across major sports since 2000), and that unmistakable New England pride.
            </p>
            <p>
              This guide delivers the real intel: stadium access via commuter rail, neighborhood strategies, revolutionary history tours, and what to do when you're not watching 65,000 fans roar inside the home of the six-time Super Bowl champion Patriots.
            </p>
          </div>
        </div>

        {/* The Stadium: Gillette Stadium (Boston Stadium) */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-building-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            The Stadium: Gillette Stadium (Boston Stadium)
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              Boston's World Cup action unfolds at <strong>Gillette Stadium</strong> in Foxborough, Massachusetts—temporarily rebranded "Boston Stadium" for FIFA compliance. Located at <strong>1 Patriot Place, Foxborough, MA 02035</strong>, this isn't a suburban afterthought—it's a purpose-built sports cathedral <strong>22 miles southwest of downtown Boston</strong> that's hosted six Super Bowls, MLS Cup finals, international soccer friendlies, and the 2024 Copa América Final.
            </p>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">The Stadium Specs:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>64,628 seats</strong> for NFL/soccer configuration (expandable to 68,756 for special events)</li>
                <li><strong>Natural grass</strong> will replace artificial turf specifically for World Cup</li>
                <li><strong>Open-air design</strong> with partial roof coverage</li>
                <li><strong>Opened July 2002</strong> with $325 million private financing (no taxpayer money)</li>
                <li><strong>Designed by HOK Sport</strong> (now Populous), modeled after Baltimore's M&T Bank Stadium</li>
              </ul>
            </div>
            <p>
              Here's what makes Gillette Stadium World Cup-ready: Owner Robert Kraft built this venue as a dual-purpose football/soccer stadium from day one. The New England Revolution (MLS) has played here since 2002, regularly drawing 20,000+ fans and setting the 65,612 attendance record when Inter Miami brought Lionel Messi to town in April 2024. When FIFA officials evaluated U.S. venues, they saw a stadium that already understands the beautiful game, not an NFL-only facility awkwardly learning soccer on the fly.
            </p>
            <p>
              The stadium's track record speaks volumes: It hosted the 1994 World Cup predecessor Foxboro Stadium (demolished after 31 years to make room for Gillette), multiple CONCACAF Gold Cup finals, international friendlies between global powers, and MLS Cup finals that proved New England could deliver world-class football atmosphere. The <strong>iconic lighthouse entrance</strong>—a 218-foot structure offering 360° views—and the <strong>connected Patriot Place</strong> shopping/entertainment district create infrastructure ready for 65,000+ international visitors arriving simultaneously.
            </p>
            <p>
              <strong>Important context:</strong> Foxborough is a Boston suburb, not downtown. While the stadium technically sits 22 miles southwest, the entire Greater Boston region functions as one interconnected metro area. You'll need to plan transportation rather than walking from your hotel, but the MBTA commuter rail delivers you practically to the stadium gates—something few American venues can claim.
            </p>
          </div>
        </div>

        {/* The Match Schedule: Seven Games Including a Quarter-Final */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-calendar-event-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            The Match Schedule: Seven Games Including a Quarter-Final
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              Boston's seven-match allocation spans four tournament weeks, culminating in a quarter-final that delivers must-watch knockout football:
            </p>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Group Stage (Five Matches)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Friday, June 13, 2026</strong> – Group Stage (Boston's tournament opener)</li>
                <li><strong>Tuesday, June 16, 2026</strong> – Group Stage</li>
                <li><strong>Friday, June 19, 2026</strong> – Group Stage</li>
                <li><strong>Tuesday, June 23, 2026</strong> – Group Stage</li>
                <li><strong>Friday, June 26, 2026</strong> – Group Stage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Knockout Stage (Two Matches)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Monday, June 29, 2026</strong> – Round of 32</li>
                <li><strong>Thursday, July 9, 2026</strong> – <strong>QUARTER-FINAL</strong></li>
              </ul>
            </div>
            <p>
              That <strong>quarter-final on July 9</strong> is the crown jewel. Only eight teams remain worldwide. Four advance to semi-finals. 65,000+ witnesses watch two footballing giants battle for survival. If you can only attend one match, aim for this one—the intensity, talent level, and stakes dwarf group stage encounters.
            </p>
            <p>
              <strong>Timing advantage:</strong> Boston's quarter-final falls <strong>two days before Sail Boston</strong> (July 11-16), meaning international visitors can combine World Cup football with the largest maritime celebration in U.S. history. Tall ships from 25+ nations will sail into Boston Harbor for the first time since 2017—a once-in-a-decade spectacle timed perfectly with America's 250th birthday celebrations. You're not just attending a World Cup; you're witnessing multiple once-in-a-lifetime events converging on one city.
            </p>
          </div>
        </div>

        {/* Getting to Gillette Stadium: The Commuter Rail Advantage */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-train-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Getting to Gillette Stadium: The Commuter Rail Advantage
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              Here's Boston's World Cup secret weapon: <strong>dedicated MBTA Commuter Rail service</strong> directly to Foxboro Station, a 10-minute walk from the stadium. Unlike sprawling Sunbelt cities where you're hostage to traffic and surge pricing, Boston delivers efficient, affordable rail transit purpose-built for major events.
            </p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Your Best Options</h3>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">1. MBTA Commuter Rail Event Trains (Recommended for Most Visitors)</h4>
              <p>
                The Massachusetts Bay Transportation Authority operates <strong>special World Cup event trains</strong> from Boston's South Station and Providence, Rhode Island directly to <strong>Foxboro Station</strong> for every match.
              </p>
              <p><strong>Route from Boston:</strong><br/> South Station → Back Bay Station → Dedham Corporate Center → Foxboro Station (10-minute walk to stadium)</p>
              <p><strong>Route from Providence:</strong><br/> Providence → Pawtucket/Central Falls → Attleboro → Mansfield → Foxboro Station</p>
              <p><strong>Cost:</strong> $20 round-trip from Boston; $20 round-trip from Providence</p>
              <p><strong>Schedule:</strong> Trains arrive ~90 minutes before kickoff; depart 30 minutes after match ends</p>
              <p><strong>Tickets:</strong> Purchase <strong>only through mTicket app</strong>—limited capacity, buy 2+ weeks before match</p>

              <div>
                <p className="font-bold m-0">Critical details:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Regular MBTA tickets/passes <strong>not valid</strong> for event trains—you must buy separate World Cup tickets</li>
                  <li>Tickets sell out fast (9,000 fans per Taylor Swift concert; expect 20,000 per World Cup match)</li>
                  <li>The MBTA plans <strong>permanent high-level platform upgrades</strong> by April 2026 to handle crowds</li>
                </ul>
              </div>

              <p>
                The MBTA expects to transport up to 20,000 fans per match via expanded commuter rail service, with new permanent platforms completed by April 2026. Event trains typically arrive about an hour before events and depart 30 minutes after they end, with Boston trains stopping at South Station, Back Bay, and Dedham Corporate Center.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">2. Weekday Commuter Rail (If Match Falls Tuesday-Friday)</h4>
              <p>
                Regular weekday service runs between Foxboro and Boston's South Station via the Franklin/Foxboro Line, serving local stops. Budget 60-75 minutes. <strong>Note:</strong> Weekend service is limited—verify schedules for Saturday/Sunday matches.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">3. Rideshare/Taxi (Most Flexible, Most Expensive)</h4>
              <p>
                Uber and Lyft work from downtown Boston or surrounding areas, but expect <strong>$50-80 each way</strong> with surge pricing doubling post-match rates. Designated rideshare pickup is at <strong>Lot 15</strong> near CVS Health Gate—expect 30-60 minute waits after final whistle as 65,000 people simultaneously request rides.
              </p>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/40">
                <p className="m-0"><strong>Smart hack:</strong> Take commuter rail TO the match (cheap, reliable), then split rideshare home with fellow fans when you're tired and willing to pay for door-to-door convenience.</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">4. Driving + Pre-Booked Parking</h4>
              <p>
                If you rent a car to explore New England beyond Boston, driving works—<strong>with advance parking reservations</strong> purchased weeks ahead online.
              </p>
              <p><strong>Stadium parking:</strong> $40-60 standard lots (pre-purchase online); VIP lots reach $100+</p>
              <p><strong>Free parking:</strong> Available across Route 1 for Patriots games (verify World Cup policy)</p>
              <p><strong>Reality:</strong> Post-match exodus takes 60-90 minutes. I-95, Route 1, and I-495 become parking lots.</p>
              <p><strong>Alternative strategy:</strong> Park at outer MBTA stations with free/cheap parking ($4.50/day), take commuter rail to stadium. Saves money and post-match stress.</p>
            </div>
          </div>
        </div>

        {/* Where to Stay: Downtown Boston vs. Suburban Strategy */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-hotel-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Where to Stay: Downtown Boston vs. Suburban Strategy
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              Boston's compact geography makes most neighborhoods viable World Cup bases, but the 22-mile stadium distance creates a strategic choice: stay in Boston's historic core (culture, attractions, energy) and commute to matches, or stay near Foxborough (convenience) and sacrifice urban charm.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Downtown Boston / Back Bay (Best for Full Experience)</h3>
            <p><strong>Why stay here:</strong> You're in the heart of Revolutionary history—<strong>Freedom Trail</strong>, <strong>Boston Common</strong>, <strong>Faneuil Hall</strong> all within walking distance. The <strong>MBTA</strong> converges at South Station for direct commuter rail to matches. FIFA Fan Festivals will center downtown, likely at <strong>City Hall Plaza</strong> or near the harbor. World Cup atmosphere concentrates where international visitors naturally gather.</p>
            <p><strong>Getting to stadium:</strong> Commuter rail from South Station (60 minutes + 10-minute walk), or rideshare ($50-80 each way).</p>
            <p><strong>Accommodation vibe:</strong> Historic landmarks meet modern luxury. <strong>Fairmont Copley Plaza</strong> delivers Gilded Age elegance; <strong>Omni Parker House</strong> (JFK proposed to Jackie here) offers downtown convenience; <strong>Liberty Hotel</strong> occupies a converted 1851 jail in Beacon Hill with original cell bars still visible. Expect <strong>$300-500/night</strong> for mid-range during World Cup; waterfront properties reach <strong>$500-750/night</strong>.</p>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Best neighborhoods:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Back Bay:</strong> Victorian brownstones, Newbury Street shopping, Boston Public Library, walkable to everything</li>
                <li><strong>Beacon Hill:</strong> Gas-lit streets, Federal-style architecture, <strong>Acorn Street</strong> (Boston's most photographed street)</li>
                <li><strong>North End (Little Italy):</strong> Oldest neighborhood, Italian restaurants, Paul Revere House, intimate charm</li>
                <li><strong>Seaport District:</strong> Waterfront views, modern hotels, connected to South Station via Silver Line</li>
              </ul>
            </div>
            <p><strong>Reality check:</strong> The 60-minute commuter rail journey is real. Budget 2+ hours each way factoring in early arrival for security. But you'll experience authentic Boston—not suburban Foxborough parking lots.</p>
            <p><strong>Book through comparison sites:</strong> Properties near South Station (Seaport, downtown), Back Bay Station, or other commuter rail stops offer best transit access. Check multiple platforms—identical rooms often vary 15-25% across booking sites.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Foxborough / Mansfield / Attleboro (Best for Stadium Proximity)</h3>
            <p><strong>Why stay here:</strong> Minimize transit stress entirely. You're <strong>10-20 minutes from Gillette Stadium</strong> by car or short commuter rail ride.</p>
            <p><strong>Getting to stadium:</strong> Drive (15 minutes), rideshare ($20-30), or local commuter rail stations.</p>
            <p><strong>Accommodation vibe:</strong> <strong>Renaissance Boston Patriot Place Hotel</strong> connects directly to the stadium entertainment district—literally walk to matches. <strong>Hampton Inn Foxborough</strong> and <strong>Residence Inn Foxborough</strong> offer family-friendly options. <strong>Mansfield</strong> and <strong>Attleboro</strong> (both on Providence commuter rail line) have budget chains. Expect <strong>$200-375/night</strong> during World Cup.</p>

            <p><strong>Reality check:</strong> These are suburban New England towns, not tourist destinations. You'll find chain restaurants, strip malls, and stadium parking—not Revolutionary War history or brownstone charm. Perfect for hardcore fans attending multiple matches who prioritize logistics over sightseeing.</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Cambridge (Best for University Atmosphere)</h3>
            <p><strong>Why stay here:</strong> Across the Charles River, Cambridge offers <strong>Harvard University</strong>, <strong>MIT</strong>, bookstores, coffeehouses, and intellectual energy without downtown tourist crowds.</p>
            <p><strong>Getting to stadium:</strong> Red Line subway to South Station (15 minutes) → commuter rail to Foxborough. Total 75-90 minutes.</p>
            <p><strong>Accommodation vibe:</strong> <strong>Hotel Marlowe</strong> (Kimpton boutique near MIT), <strong>Le Meridien Cambridge-MIT</strong> (modern, tech-adjacent). Expect <strong>$275-450/night</strong>.</p>
            <p><strong>Best for:</strong> Travelers who want Boston access minus chaos; university campus nostalgia; quieter base between matches.</p>
          </div>
        </div>

        {/* Beyond the Matches: What to Do in Boston */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-compass-3-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Beyond the Matches: What to Do in Boston
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              You didn't cross an ocean (or a continent) to only see 90 minutes of football. Boston delivers world-class history and culture between matches:
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Must-Do Attractions</h3>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">The Freedom Trail</h4>
            <p>
              The famous Freedom Trail is a 2.5-mile red-brick trail through Boston's historic neighborhoods that tells the story of the American Revolution, from the Old North Church to Faneuil Hall. Start at <strong>Boston Common Visitor Center</strong> (139 Tremont Street), follow the red-brick path embedded in sidewalks to 16 historic sites including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Boston Common</strong>: America's oldest public park (1634)</li>
              <li><strong>Granary Burying Ground</strong>: Final resting place of John Hancock, Samuel Adams, Paul Revere</li>
              <li><strong>Old State House</strong>: Site of the Boston Massacre (1770)</li>
              <li><strong>Faneuil Hall</strong>: "Cradle of Liberty" where colonists protested British taxation</li>
              <li><strong>Paul Revere House</strong>: Oldest structure in downtown Boston (1680)</li>
              <li><strong>Old North Church</strong>: "One if by land, two if by sea" (1775)</li>
              <li><strong>USS Constitution</strong>: World's oldest commissioned naval vessel still afloat (1797)</li>
            </ul>
            <p>
              The Freedom Trail can easily be walked in a day, but seeing all historical sites thoroughly requires two to three full days. <strong>Free self-guided</strong> via smartphone app, or <strong>$15-20 guided tours</strong> with costumed historical interpreters.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Fenway Park</h4>
            <p>
              Fenway Park opened in 1912 and is the oldest MLB stadium, offering an authentic look at Boston's beloved baseball legacy. Catch a <strong>Boston Red Sox game</strong> (season runs April-October, check June/July schedule), or take <strong>guided stadium tours</strong> ($25, daily) exploring the Green Monster, Pesky's Pole, and championship history. Tours book online weeks ahead during summer.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Faneuil Hall Marketplace</h4>
            <p>
              Built as a center of commerce in 1741, Faneuil Hall served as an open forum meeting hall and marketplace for more than 270 years. Today's marketplace offers street performers, food stalls (try clam chowder at <strong>Boston Chowda</strong>), Quincy Market shopping, and people-watching central. Free, always open. Can get touristy but genuinely entertaining.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">New England Aquarium</h4>
            <p>
              Giant Ocean Tank featuring sea turtles, sharks, and 2,000 animals, plus <strong>penguin colony</strong> and <strong>IMAX theater</strong>. <strong>Admission: $38 adults</strong>. Located on waterfront near Faneuil Hall; combine with harbor walk.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Museum of Fine Arts</h4>
            <p>
              One of America's great art museums: Egyptian mummies, Impressionist masterpieces, American art, Asian collections spanning 5,000 years. <strong>Admission: $27</strong>; free entry on select Wednesday evenings. Accessible via Green Line.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Boston Public Library</h4>
            <p>
              The Boston Public Library in Back Bay is America's first public library, featuring murals, rare books, and tranquil reading rooms with stunning architecture. Free admission, free tours. Copley Square location is architectural marvel—don't miss John Singer Sargent murals.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Duck Tours</h4>
            <p>
              Boston Duck Tours use World War II-style amphibious landing crafts that travel on both land and water, providing an entertaining way to see historic sites. 90-minute tours depart from Prudential Center or Museum of Science. <strong>$50 adults</strong>. Cheesy but genuinely fun—the land-to-water transition into Charles River gets everyone laughing.
            </p>
          </div>
        </div>

        {/* Boston Food Scene: Fuel for Match Days */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-restaurant-2-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Boston Food Scene: Fuel for Match Days
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-8 dark:text-white">
            <p>
              Boston's culinary identity centers on seafood, Italian-American tradition (North End), and New England comfort food.
            </p>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Pre-Match Fueling</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Union Oyster House</strong> (Downtown): America's oldest restaurant (1826), serving oysters and clam chowder since before the Civil War.</li>
                <li><strong>Mike's Pastry</strong> (North End): Legendary Italian bakery. Cannoli wars with Modern Pastry next door—try both, pick a side.</li>
                <li><strong>Flour Bakery</strong> (multiple locations): Joanne Chang's pastries, sandwiches, sticky buns. Fuel for match-day transit.</li>
                <li><strong>The Paramount</strong> (Beacon Hill): Classic diner breakfast. Get there early or face lines.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Post-Match Celebrating</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Neptune Oyster</strong> (North End): Tiny restaurant, massive reputation. Best lobster roll in Boston (warm with butter or cold with mayo). No reservations—arrive at 11 AM opening or 5 PM dinner.</li>
                <li><strong>Ostra</strong> (Back Bay): Upscale Mediterranean seafood. Perfect victory celebration. Reserve weeks ahead.</li>
                <li><strong>Giacomo's Ristorante</strong> (North End): No-frills Italian, huge portions, always packed. Cash only. Worth the wait.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Budget-Friendly</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Sam LaGrassa's</strong> (Downtown): Pastrami sandwiches, overstuffed, legendary. Lunch crowd insane but fast-moving. <strong>$15-18</strong>.</li>
                <li><strong>Quincy Market Food Colonnade</strong> (Faneuil Hall): Multiple vendors, grab-and-go options, outdoor seating. Budget-friendly variety.</li>
                <li><strong>Santarpio's Pizza</strong> (East Boston): Old-school pizza near airport. Locals' favorite since 1903. Cash only.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Coffee Culture</h3>
              <p>Boston takes coffee seriously—blame the universities.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Thinking Cup</strong> (multiple locations): Stumptown Coffee roaster, quality beans</li>
                <li><strong>Pavement Coffeehouse</strong> (multiple locations): Local chain, college-student vibe</li>
                <li><strong>Tatte Bakery & Cafe</strong> (multiple locations): Israeli-inspired, gorgeous pastries, Instagram-worthy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practical Information: What You Need to Know */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-information-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Practical Information: What You Need to Know
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-8 dark:text-white">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Getting to Boston</h3>
              <p>
                Boston Logan International Airport (BOS) sits approximately 3 miles northeast of downtown, welcoming over 43 million passengers in 2024. The airport opened in 1923 and is the largest airport in Massachusetts and New England, serving as a transatlantic hub for Delta Air Lines and a focus city for JetBlue.
              </p>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Ground transportation from Logan:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>MBTA Silver Line SL1 provides free direct service between all airport terminals and South Station downtown, taking approximately 20-25 minutes</li>
                <li>MBTA Blue Line subway connects via free shuttle buses between terminals and Airport station, operating 6 AM to 12:30 AM daily</li>
                <li><strong>Taxi:</strong> $25-45 to downtown (10-15 minutes with light traffic)</li>
                <li><strong>Rideshare:</strong> $20-35 to downtown from designated pickup zones</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Weather & What to Pack</h3>
              <p>June/July in Boston delivers <strong>warm, humid summer</strong> with occasional afternoon thunderstorms:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Highs: 75-85°F (24-29°C)</li>
                <li>Lows: 60-68°F (16-20°C)</li>
                <li>Humidity: 60-75%</li>
                <li>Rain: Possible but usually brief showers</li>
              </ul>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Pack:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lightweight breathable clothing (humidity is real)</li>
                <li>Light rain jacket or umbrella</li>
                <li>Comfortable walking shoes (cobblestone streets, Freedom Trail = 15,000+ steps daily)</li>
                <li>Layers for air-conditioned indoor spaces</li>
                <li>Sunscreen and sunglasses</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Money & Costs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stadium parking: $40-60 (pre-purchased)</li>
                <li>Commuter rail event train: $20 round-trip</li>
                <li>Mid-range hotel (Downtown): $300-500/night</li>
                <li>Mid-range hotel (Foxborough area): $200-375/night</li>
                <li>Meals: $15-25 (casual), $35-60 (mid-range), $100+ (upscale)</li>
                <li>Attractions: $25-40 for major museums</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">MBTA Transit Passes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>CharlieCard</strong> (reloadable smart card): $2.75 subway ride, $1.70 bus</li>
                <li><strong>CharlieTicket</strong> (paper): $3.00 subway, $2.00 bus</li>
                <li><strong>7-Day Pass:</strong> $22.50 (unlimited subway/bus, not valid on commuter rail event trains)</li>
                <li>Purchase at subway stations or load via <strong>MBTA mTicket app</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Safety & Street Smarts</h3>
              <p>Boston is generally safe for tourists in popular areas (Back Bay, Beacon Hill, North End, downtown, Cambridge). Standard urban precautions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Some downtown areas (parts of Downtown Crossing late at night) require awareness</li>
                <li>Dorchester, Roxbury, Mattapan are residential neighborhoods off tourist paths—no safety concerns if using rideshare through them</li>
                <li>Boston drivers are notoriously aggressive—look both ways even on one-way streets</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Language & Culture</h3>
              <p>English dominates. Boston culture trends:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Sports obsession</strong> is real: Patriots, Red Sox, Celtics, Bruins. Championships are religion.</li>
                <li><strong>"Wicked"</strong> is an adverb: "That's wicked good" = high praise</li>
                <li><strong>Dropping R's</strong>: "Pahk the cah in Hahvahd Yahd" stereotypes persist but younger generations less pronounced</li>
                <li><strong>Irish heritage</strong> runs deep: 21% of metro Boston claims Irish ancestry</li>
                <li><strong>College town energy</strong>: 35+ universities mean young, educated, transient population</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FIFA Fan Festival & Match Day Atmosphere */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-football-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            FIFA Fan Festival & Match Day Atmosphere
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-8 dark:text-white">
            <p>
              While official locations await confirmation, Boston's <strong>FIFA Fan Festival</strong> will likely occupy <strong>City Hall Plaza</strong> (central location, existing infrastructure) or <strong>Harborwalk</strong> waterfront area. Expect <strong>30,000-50,000 daily visitors</strong> during matches, with giant screens, live music, food vendors, and 25+ national flags creating festival atmosphere.
            </p>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Neighborhood Watch Parties:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Faneuil Hall area</strong>: Outdoor screens, street performers, international crowd</li>
                <li><strong>Seaport District</strong>: Waterfront bars with harbor views install projectors</li>
                <li><strong>North End</strong>: Italian cafes transform into viewing zones (expect pro-Italian national team bias)</li>
                <li><strong>Cambridge</strong>: Harvard Square bars host diverse international student crowds</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Boston's Soccer Culture:</h3>
              <p>
                Gillette Stadium's soccer attendance record was set on April 27, 2024, when 65,612 fans watched the New England Revolution host Inter Miami CF featuring Lionel Messi. The Revolution regularly draw 20,000+ for MLS matches, and the region's passionate supporters groups create authentic football atmosphere American cities often lack.
              </p>
              <p>
                Boston hosted six 1994 World Cup matches at old Foxboro Stadium. The city understands the tournament's significance and will deliver accordingly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Match Day at Gillette Stadium:</h3>
              <p>Arrive <strong>2-3 hours early</strong> for smooth entry. Security screening for 65,000 people takes time. Foxboro Station is accessible via pedestrian walkway that runs under an access road to the stadium's north end. Clear bag policy requires bags measuring 12" x 12" x 6" maximum, with women's clutches not exceeding 7" x 4" x 2".</p>
              <p><strong>Patriot Place</strong> shopping/entertainment district adjacent to stadium offers pre-match bars, restaurants, and Bass Pro Shops (yes, really). Expect thousands milling around outdoor spaces before kickoff.</p>
            </div>
          </div>
        </div>

        {/* Sail Boston & America 250: The Perfect Storm */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-ship-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Sail Boston & America 250: The Perfect Storm
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-8 dark:text-white">
            <p>
              From June 13 to July 9, 2026, Boston will host seven FIFA World Cup matches while Sail Boston (July 11-16, 2026) brings tall ships from around the globe and America 250 commemorations continue all summer.
            </p>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Why this matters:</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>FIFA World Cup Quarter-Final</strong> (July 9)</li>
                <li><strong>Sail Boston</strong> (July 11-16): Tall ships parade into Boston Harbor for first time since 2017</li>
                <li><strong>America 250</strong>: Celebrating United States' 250th birthday (July 4, 1776 - July 4, 2026)</li>
              </ol>
            </div>
            <p>
              Sail Boston brings 50+ tall ships, naval vessels, and maritime displays from 25+ nations. The harbor becomes a living museum of naval history—frigates, schooners, and training vessels from navies worldwide. It's the largest maritime gathering in U.S. history, perfectly timed with Revolutionary War nostalgia.
            </p>
          </div>
        </div>

        {/* Planning strategy */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
            <i className="ri-lightbulb-line text-amber-400 dark:text-amber-300 text-4xl"></i>
            Planning strategy
          </h2>
          <p className="prose prose-lg max-w-none dark:prose-invert dark:text-white">
            Planning strategy: Extend your Boston stay through mid-July. Attend the quarter-final, explore the city for two days, then witness Sail Boston's opening parade. You'll combine World Cup football with maritime spectacle in America's most historically significant city during its 250th birthday celebration.
          </p>
        </div>

        {/* Booking Strategy: How to Plan Your Boston World Cup Trip */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-calendar-check-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Booking Strategy: How to Plan Your Boston World Cup Trip
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-8 dark:text-white">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Timeline That Works:</h3>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Now Through Late 2025:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monitor FIFA for ticket sale announcements (lottery opens late 2025)</li>
                <li>Research accommodation but wait for ticket confirmation</li>
                <li>Set flight alerts for Boston (BOS)</li>
                <li>Join Boston World Cup communities online for real-time updates</li>
              </ul>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Immediately After Securing Tickets:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Book hotels within 24 hours</strong> (Downtown and Back Bay sell out fastest)</li>
                <li>Finalize flights—Logan offers direct international connections from Europe, Asia, South America</li>
                <li><strong>Download mTicket app</strong> and set alerts for commuter rail event train tickets (go on sale 2-4 weeks before matches)</li>
                <li>Pre-purchase stadium parking if driving (sells out weeks ahead)</li>
              </ul>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">2-4 Weeks Before Travel:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Purchase commuter rail event train tickets</strong> via mTicket app (capacity limited, first-come)</li>
                <li>Book popular restaurant reservations (Neptune Oyster, Ostra, Giacomo's)</li>
                <li>Purchase attraction tickets online (Alcatraz-style: Fenway tours, Duck Tours book ahead)</li>
                <li>Confirm stadium clear bag policy compliance</li>
                <li>Download <strong>MBTA mTicket app</strong> and <strong>Transit app</strong> for real-time updates</li>
              </ul>
              <p>
                Affiliate booking moment: When comparing hotel prices, check <strong>Booking.com</strong>, <strong>Hotels.com</strong>, <strong>Expedia</strong>, and <strong>direct hotel websites</strong>—rates vary 15-25% for identical rooms. Properties near South Station (Seaport, downtown) or Back Bay Station offer best commuter rail access to stadium. Membership programs (Hotels.com One Key, Expedia rewards) provide additional savings on multi-night bookings.
              </p>
            </div>
          </div>
        </div>

        {/* Why Boston Wins the World Cup Experience */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-trophy-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
            Why Boston Wins the World Cup Experience
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <p>
              Let's be honest: The stadium isn't downtown. That 22-mile distance to Foxborough frustrates visitors expecting compact European-style geography. But here's what Boston offers that nowhere else can:
            </p>
            <p>
              You get <strong>world-class football</strong> at Gillette Stadium (proven infrastructure, passionate Revolution fans, 65,000+ capacity) <strong>plus</strong> America's most historically significant city (Revolutionary War sites, colonial architecture, intellectual energy) <strong>plus</strong> Championship pedigree (17 major sports titles since 2000) <strong>plus</strong> once-in-a-lifetime Sail Boston maritime spectacle (July 11-16) <strong>plus</strong> America 250 celebrations—all converging summer 2026.
            </p>
            <p>
              Seven matches over four weeks means sustained World Cup energy, not a weekend blitz. The <strong>quarter-final on July 9</strong> guarantees elite football—eight teams remaining worldwide, four advancing to semi-finals. If you secure tickets to this match plus Sail Boston, you've won the summer 2026 lottery.
            </p>
            <p>
              The commuter rail system works. Unlike sprawling Sun Belt cities where you're hostage to traffic, Boston delivers dedicated rail service directly to stadium gates. The 60-minute journey becomes part of the experience—trains packed with singing supporters, flags waving, collective anticipation building.
            </p>
            <p>
              <strong>Book MBTA-accessible Boston accommodation, download the mTicket app, embrace revolutionary history, and prepare to discover why they call it the City of Champions—then take the train to Foxborough to watch the world's best football.</strong>
            </p>
          </div>
        </div>

        {/* Final Checklist: Your Boston World Cup Essentials */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <i className="ri-check-double-line text-blue-400 dark:text-sky-300 text-4xl"></i>
            Final Checklist: Your Boston World Cup Essentials
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6 dark:text-white">
            <ul className="list-disc pl-6 space-y-2">
              <li>✅ <strong>Match tickets secured through FIFA official channels</strong></li>
              <li>✅ <strong>Hotel booked near South Station or Back Bay</strong> (commuter rail access)</li>
              <li>✅ <strong>Flights confirmed to Logan (BOS)</strong></li>
              <li>✅ <strong>MBTA mTicket app downloaded</strong> for commuter rail event trains</li>
              <li>✅ <strong>Event train tickets purchased</strong> 2-4 weeks before match</li>
              <li>✅ <strong>Freedom Trail walking plan</strong> (2.5 miles, 2-3 hours minimum)</li>
              <li>✅ <strong>Fenway Park tour or Red Sox game tickets</strong> (if schedule permits)</li>
              <li>✅ <strong>Stadium-compliant clear bag</strong> (12" x 12" x 6" max)</li>
              <li>✅ <strong>Comfortable walking shoes</strong> (cobblestones = ankle hazard)</li>
              <li>✅ <strong>Light rain jacket packed</strong> (June/July afternoon showers possible)</li>
              <li>✅ <strong>Sail Boston dates noted</strong> (July 11-16 if extending trip)</li>
            </ul>
            <p>
              The 2026 FIFA World Cup in Boston isn't just football at a stadium—it's the chance to witness elite knockout football (quarter-final July 9) in America's most historically significant city during its 250th birthday celebration, followed by the largest maritime gathering in U.S. history (Sail Boston July 11-16).
            </p>
            <p>
              Whether you're here for the quarter-final, Revolutionary War history, championship sports energy, or all three, Boston delivers what few cities can: <strong>world-class football wrapped in 400 years of American history, served with championship attitude and New England pride.</strong>
            </p>
            <p><strong>Welcome to the City of Champions. The Revolution starts here—again.</strong> ⚽🇺🇸🚢</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}