import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function NewYorkCityArticlePage() {
  const pageUrl = '/travel-guides/new-york-city';

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
    const ogImageUrl = `${siteUrl}/images/cities/new-york-new-jersey-world-cup-2026.webp`;
    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('og:image', ogImageUrl);
    setMeta('twitter:image', ogImageUrl);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg
        schema={[
          generateCityGuideSchema(
            'New York City – World Cup 2026 Guide',
            'Comprehensive New York City travel guide for FIFA World Cup 2026: MetLife Stadium details, match schedule, transportation, and where to stay.',
            `${import.meta.env.VITE_SITE_URL || 'http://localhost:3000'}${pageUrl}`
          ),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Travel Guides', url: '/travel-guides' },
            { name: 'New York City', url: pageUrl }
          ]),
          generateImageObjectSchema('/images/cities/new-york-new-jersey-world-cup-2026.webp', {
            width: 1600,
            height: 900,
            caption: 'New York / New Jersey – World Cup 2026'
          })
        ]}
      />

      <Header />

      {/* Editorial Hero — cohesive with article style */}
      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src="/images/cities/new-york-new-jersey-world-cup-2026.webp"
            alt="New York City skyline"
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
            {/* Breadcrumbs */}
            <nav className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">›</span>
              <Link to="/world-cup-2026-host-cities" className="hover:underline">Host Cities</Link>
              <span className="mx-2">›</span>
              <span className="text-slate-500 dark:text-slate-400">New York/New Jersey World Cup 2026 Guide</span>
            </nav>
            <h1 className="editorial-hero-title">New York City</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                <span>USA</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-building-line"></i>
                <Link to="/world-cup-2026-stadiums/metlife-stadium" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500 text-emerald-700 dark:text-emerald-400">MetLife Stadium</Link>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-group-line"></i>
                <span>82,500 capacity</span>
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
            The World's Biggest Game Comes to the World's Biggest Stage
          </h2>
          <p className="whitespace-pre-line">
            {`When the final whistle blows on July 19, 2026, football history will be made just across the Hudson River from Manhattan. New York and New Jersey are hosting the FIFA World Cup Final—and seven other matches—making this region the epicenter of the beautiful game's most anticipated summer in decades.`}
            {` New York/New Jersey is one of the 16 host cities for the 2026 World Cup—`}
            <Link to="/world-cup-2026-host-cities" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">explore the host cities hub</Link>
            {`. Whether you're here to witness the crowning moment or soak up the electric atmosphere across multiple match days, the New York metropolitan area offers everything a football fan could dream of: world-class infrastructure, unbeatable energy, and a cultural experience that extends far beyond the pitch.`}
          </p>

          {/* Essential Links module */}
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:bg-navy-800 dark:border-navy-700">
            <div className="font-inter font-semibold text-slate-900 dark:text-slate-100 mb-2">🔗 Essential New York/New Jersey Links</div>
            <div className="space-y-1 text-slate-800 dark:text-slate-200">
              <div>
                🏟️ <strong>Stadium:</strong> <Link to="/world-cup-2026-stadiums/metlife-stadium" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">MetLife Stadium Guide</Link>
              </div>
              <div>
                🗺️ <strong>All Host Cities:</strong> <Link to="/world-cup-2026-host-cities" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Explore All 16 Cities</Link>
              </div>
              <div>
                ✈️ <strong>Nearby Cities:</strong> <Link to="/world-cup-2026-host-cities/philadelphia" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Philadelphia</Link> | <Link to="/world-cup-2026-host-cities/boston" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Boston</Link> | <Link to="/world-cup-2026-host-cities/toronto" className="underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Toronto</Link>
              </div>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Why NY/NJ Won */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-medal-2-line text-emerald-500"></i>
            Why New York/New Jersey Won the World Cup Final
          </h3>
          <p className="whitespace-pre-line">
            {`MetLife Stadium in East Rutherford, New Jersey, beat out Los Angeles and Dallas to host the ultimate match on July 19, 2026. The region will host eight total matches throughout the tournament, with projections of over $2 billion in economic impact and more than 1 million visitors expected.

This isn't just about a stadium—it's about the entire New York experience. The region has five airports servicing 181 countries, more hotels under construction than exist in other candidate cities combined, and MetLife Stadium's proven track record of hosting two million guests annually. FIFA knew what every traveler knows: there's no place on Earth quite like New York City.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium info */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-building-4-line text-emerald-500"></i>
            The Stadium: MetLife Stadium (New York New Jersey Stadium)
          </h3>
          <p className="whitespace-pre-line">
            {`The Venue That Broke Records

MetLife Stadium opened in 2010 with a construction cost of $1.6 billion, making it the most expensive stadium in U.S. history at completion. With a capacity of 82,500 seats for World Cup matches (including 10,005 club seats and approximately 218 luxury suites), it's the largest NFL stadium and the biggest World Cup venue in the United States.

During the tournament, FIFA will refer to the venue as "New York New Jersey Stadium" due to sponsorship policies. The stadium underwent significant renovations specifically for the World Cup. In January 2024, officials announced plans to remove 1,740 permanent seats to widen the field to meet FIFA regulations, replacing them with modular seating after the tournament.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Match Schedule */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-calendar-event-line text-emerald-500"></i>
            Match Schedule at MetLife Stadium
          </h3>
          <p className="whitespace-pre-line">
            {`Eight matches will be played here, beginning June 13 and culminating with the Final on July 19, 2026. The schedule includes:

- Group Stage Matches: June 13, 16, 22, 26, 29
- Round of 32: July 3
- Round of 16: July 8
- The Final: July 19, 2026

FIFA has confirmed the final will feature an elaborate halftime show modeled after the Super Bowl, with Times Square serving as a central hub for celebrations during the final weekend.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* What Makes Stadium Special */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-star-line text-emerald-500"></i>
            What Makes This Stadium Special
          </h3>
          <p className="whitespace-pre-line">
            {`MetLife Stadium has hosted six Super Bowls, major soccer friendlies, and concerts featuring Taylor Swift, Beyoncé, and the Rolling Stones. The stadium hosted nine matches during the 2025 FIFA Club World Cup, including the final, and previously hosted the Copa América Centenario final in 2016—proving it can handle the world's biggest football moments.

The stadium sits just 10 miles from Midtown Manhattan, making it genuinely accessible. Located in East Rutherford, New Jersey, MetLife Stadium is situated 10 miles west of New York City, connected by direct public transit that runs specifically for major events.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Transportation */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-train-line text-emerald-500"></i>
            Getting There: Transportation Made Easy
          </h3>
          <p className="whitespace-pre-line">
            {`From International Airports

New York's three major airports make this one of the most accessible World Cup destinations globally:

- John F. Kennedy International (JFK): The primary international gateway, about 26 miles from MetLife Stadium 
- Newark Liberty International (EWR): The closest major airport, approximately 15-20 miles from the stadium 
- LaGuardia (LGA): Mainly domestic flights, about 18 miles from the stadium 

All three airports connect to Manhattan via various options, where you can then catch direct transit to MetLife Stadium.

Direct Stadium Access: The Smart Way

The Best Option: NJ Transit Train

The fastest and most cost-effective route is taking an NJ Transit train from Penn Station New York (located at 32nd Street between 7th and 8th Avenues) to Secaucus Junction, then transferring to a shuttle train directly to Meadowlands Rail Station. For large events, NJ Transit offers special train service from Secaucus Junction directly to Meadowlands Rail Station, just steps away from MetLife Stadium. 

The entire journey takes roughly 30 minutes from Midtown Manhattan, and trains run frequently on match days. NJ Transit operates the Meadowlands Rail Service for events with anticipated attendance above 50,000, delivering guests directly to the front door of MetLife Stadium. 

Budget-Friendly Bus Option 

The Coach USA 351 Meadowlands Express provides door-to-door round-trip transportation from the Port Authority Bus Terminal in New York City to MetLife Sports Complex. Bus service begins three hours prior to event start time, making it perfect for pre-match atmosphere-building. 

Pro Traveler Tip: Book your NJ Transit tickets through their mobile app ahead of time. On match days, expect crowds but efficient service—New Yorkers know how to move people.`}
          </p>
          <p className="mt-4">
            Planning a multi-city trip? The Northeast Corridor makes it easy to add <Link to="/world-cup-2026-host-cities/philadelphia" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Philadelphia</Link> and <Link to="/world-cup-2026-host-cities/boston" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Boston</Link> by Amtrak. For an international angle, <Link to="/world-cup-2026-host-cities/toronto" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">Toronto</Link> is a short flight from NYC.
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Where to Stay */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-hotel-line text-emerald-500"></i>
            Where to Stay: Neighborhood Guide for World Cup Visitors
          </h3>
          <p className="whitespace-pre-line">
            {`The beauty of New York is choice. You can stay in the heart of Manhattan's buzz or opt for quieter Brooklyn brownstone neighborhoods—both offer excellent transit connections to MetLife Stadium. 

Midtown Manhattan: Maximum Convenience 

Why Stay Here: Direct access to Penn Station means you're 30 minutes from kickoff. You're also in the center of everything NYC offers—Broadway, restaurants, Central Park, and more.`}
          </p>

          {/* PART 2/5 additions */}
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-map-pin-user-line text-emerald-500"></i>
                Hotel Strategy
              </h4>
              <p className="whitespace-pre-line">
                {`Lodging options near Penn Station include Moxy Times Square (boutique and budget-friendly), Refinery Hotel (mid-range), and Pendry Manhattan West (luxury), all less than half a mile from Penn Station.
 
This is where most international visitors gravitate, and for good reason. You'll pay premium prices during World Cup weeks, but the convenience and atmosphere are unmatched.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-calendar-check-line text-emerald-500"></i>
                Book Early
              </h4>
              <p>
                Hotels in this area will sell out quickly. Consider booking 6–12 months in advance for best rates and availability. Use comparison sites like
                {' '}<a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Booking.com</a>{' '}and{' '}
                <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Hotels.com</a>{' '}to find the best deals, and don't overlook boutique properties that offer personality alongside location.
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-store-2-line text-emerald-500"></i>
                SoHo & Greenwich Village: Style Meets Access
              </h4>
              <p className="whitespace-pre-line">
                {`Why Stay Here: If you don't mind a short subway ride to Penn Station, consider staying in SoHo at properties like the Dominick, offering sleek accommodations with epic views and an upscale vibe.
 
These neighborhoods offer cobblestone streets, independent boutiques, incredible restaurants, and that quintessential New York neighborhood feel. You're still just 15–20 minutes from Penn Station via subway.
 
Perfect For: Travelers who want to experience authentic New York between matches, with world-class dining and nightlife at your doorstep.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-building-2-line text-emerald-500"></i>
                Brooklyn: Local Vibes, Better Value
              </h4>
              <p className="whitespace-pre-line">
                {`Why Stay Here: Hoboken and Jersey City in New Jersey, as well as Manhattan and Brooklyn in New York City, offer excellent bases for World Cup visitors, with Brooklyn providing a more laid-back alternative without losing excitement.
 
Neighborhoods like Williamsburg, DUMBO, and Park Slope offer character, craft breweries, waterfront parks, and often better value than Manhattan hotels. The subway connects you to Penn Station in 30–40 minutes.
 
Perfect For: Budget-conscious travelers, families wanting more space, and anyone who wants to see the "real" New York beyond tourist central.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-community-line text-emerald-500"></i>
                Hoboken & Jersey City: Closest to the Stadium
              </h4>
              <p className="whitespace-pre-line">
                {`Why Stay Here: Hoboken is a scenic, walkable city just across the Hudson River from Manhattan, offering a laid-back alternative with PATH train access to Midtown Manhattan or World Cup festivities in minutes.
 
These New Jersey cities offer shorter commutes to MetLife Stadium, waterfront views of Manhattan, and a thriving food scene. You're technically closer to the action than most Manhattan hotels.
 
Perfect For: Groups wanting apartment-style rentals, visitors attending multiple matches, and anyone prioritizing proximity to the stadium.
 
Rental Alert: Short-term rentals in New York City face strict regulations, so book through reputable platforms and verify legality. Jersey City and Hoboken have more flexible rental options.`}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* Beyond the Match */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-map-2-line text-emerald-500"></i>
            Beyond the Match: What to Do in New York City
          </h3>
          <p className="whitespace-pre-line">
            {`Let's be honest—you're coming for football, but you're staying in one of the world's greatest cities. Here's how to make the most of your non-match hours.`}
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-landscape-line text-emerald-500"></i>
                Iconic Attractions You Can't Miss
              </h4>
              <p className="whitespace-pre-line">
                {`Statue of Liberty & Ellis Island  
Take the ferry from Battery Park and experience America's most iconic symbol up close. Book tickets in advance—this is one of the world's most visited monuments.

Central Park  
843 acres of green space in the heart of Manhattan. Rent a bike, pack a picnic, or just wander. In July, you'll find free concerts and outdoor movies.

Empire State Building & Top of the Rock  
Two observation decks offering stunning 360-degree views of the city. Top of the Rock (at Rockefeller Center) offers better photo opportunities of the Empire State Building itself.

Times Square & Broadway  
Times Square will serve as a central hub for celebrations during the final weekend of the tournament. Catch a Broadway show—musicals like Hamilton or classics like Chicago are quintessentially New York experiences.

9/11 Memorial & Museum  
A powerful, moving tribute. Allow 2–3 hours for the full experience.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-restaurant-2-line text-emerald-500"></i>
                Food: A World of Flavors in Five Boroughs
              </h4>
              <p className="whitespace-pre-line">
                {`New York's food scene is legendary because it's the most diverse on the planet. Here's where to eat like a local:

Classic New York Experiences  
- Pizza: Grab a slice from Joe's Pizza (multiple locations), or sit down for a coal-oven pie at Lombardi's (Little Italy) or Juliana's (Brooklyn)  
- Bagels: Russ & Daughters (Lower East Side) or Ess-a-Bagel (Midtown) for the perfect New York bagel  
- Pastrami: Katz's Delicatessen has been serving its legendary Pastrami on Rye since 1888  
- Hot Dogs: Nathan's Famous at Coney Island (make a day trip of it)

Neighborhood Food Tours  
East 32nd Street between 5th and 6th Avenues features New York City's Koreatown, with authentic Korean fried chicken and kimchi stew. Manhattan's Chinatown (roughly between Broadway, Bowery, Grand and Worth Streets) was one of the first places in the United States to popularize Chinese cuisine, with Cantonese-style dishes and dim sum prominent.

Splurge-Worthy Dinners  
Le Bernardin in Midtown Manhattan continues to define luxury seafood dining, while Carbone in Greenwich Village offers theatrical Italian-American dining with its famous Spicy Rigatoni Vodka.

Football Fan Gathering Spots  
NYC has soccer bars for every nation. Bar 43, known as the "home of soccer in Queens," attracts numerous fan communities from the diverse Sunnyside neighborhood. Search for your national team's official supporters club—they'll have watch parties for matches you're not attending.`}
              </p>
            </div>

            <div>
              <h4 className="editorial-h4 animate-fade-up flex items-center gap-2">
                <i className="ri-calendar-todo-line text-emerald-500"></i>
                Match Day in NYC: Fan Zones & Atmosphere
              </h4>
              <p className="whitespace-pre-line">
                {`Expect the city to transform during the World Cup. NYC will host FIFA Fan Festivals, sports bar screenings, and neighborhood celebrations throughout the tournament. Every match day will feel like a global street party, with fans from dozens of nations filling Manhattan's streets, subway cars, and parks.`}
              </p>
            </div>
          </div>
          <hr className="editorial-divider" />
        </article>

        {/* PART 3/5: Pickup games & Fan gatherings */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-football-line text-emerald-500"></i>
            Matchday Pickup Games & Fan Gatherings
          </h3>
          <p className="whitespace-pre-line">
            {`Head to Washington Square Park or Central Park's Great Lawn early on match days to see impromptu pickup games and fan gatherings. The diversity of New York means you'll encounter supporters from every competing nation—it's the World Cup atmosphere amplified by the city's international character.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Weather & What to Pack */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-sun-line text-emerald-500"></i>
            Weather & What to Pack
          </h3>
          <h4 className="editorial-h4 animate-fade-up mb-2">July in New York: Hot, Humid, and Glorious</h4>
          <p className="whitespace-pre-line mb-4">
            {`July in New York experiences average temperatures around 24-26°C (75-78°F), with highs reaching 29-30°C (84-86°F). About 6-7 days each month see afternoon highs at 32°C (90°F) or higher, and humidity is high throughout the summer months.`}
          </p>
          <p className="whitespace-pre-line">
            {`What This Means for You:  
- Stay hydrated: MetLife Stadium allows factory-sealed water bottles or empty reusable bottles that you can fill inside
- Dress light: Cotton t-shirts, shorts, breathable fabrics
- Sun protection: Sunglasses, sunscreen, and a hat are essential
- Rain gear: July sees occasional thunderstorms, so carry a compact umbrella
- Layers: Air conditioning indoors can be aggressive—bring a light jacket for restaurants and transit`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Stadium Bag Policy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-briefcase-2-line text-emerald-500"></i>
            Stadium Bag Policy
          </h3>
          <p className="whitespace-pre-line">
            {`MetLife Stadium permits clear bags measuring 12 x 6 x 12 inches or less, and small purses or handbags (clutch type) measuring 4.5 x 6.5 inches or less—one bag per person. Backpacks and large tote bags are not permitted. Plan accordingly.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Practical Tips for International Visitors */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-passport-line text-emerald-500"></i>
            Practical Tips for International Visitors
          </h3>
          <h4 className="editorial-h4 animate-fade-up mb-2">Money Matters</h4>
          <p className="whitespace-pre-line">
            {`- Currency: US Dollar (USD)
- Cards: Credit cards accepted everywhere; contactless payment widely available
- Tipping: Expected 18-20% at restaurants, $1-2 per drink at bars, 15-20% for taxis and rideshares
- ATMs: Widely available, but use bank-affiliated machines to avoid high fees`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* PART 4/5: Safety & Getting Around */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-shield-check-line text-emerald-500"></i>
            Safety & Getting Around
          </h3>
          <p className="whitespace-pre-line mb-4">
            {`New York is one of the safest large cities in America. Basic street smarts apply: be aware of your surroundings, especially late at night, and keep valuables secure in crowded areas.`}
          </p>
          <h4 className="editorial-h4 animate-fade-up mb-2">Subway Strategy</h4>
          <p className="whitespace-pre-line mb-4">
            {`The NYC subway runs 24/7 and is the fastest way to navigate Manhattan and Brooklyn. Buy a 7-day unlimited MetroCard ($34) if you're staying a week—it pays for itself after 12 rides. Google Maps provides excellent real-time subway directions.`}
          </p>
          <h4 className="editorial-h4 animate-fade-up mb-2">Walking City</h4>
          <p className="whitespace-pre-line mb-4">
            {`Manhattan is incredibly walkable. Many attractions are just 20-30 minutes apart on foot, and you'll discover the city's personality between destinations.`}
          </p>
          <h4 className="editorial-h4 animate-fade-up mb-2">Rideshares & Taxis</h4>
          <p className="whitespace-pre-line">
            {`Uber and Lyft operate city-wide. Traditional yellow taxis are also plentiful in Manhattan. Expect surge pricing on match days and weekend evenings.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Language & Connectivity */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-global-line text-emerald-500"></i>
            Language & Connectivity
          </h3>
          <p className="whitespace-pre-line">
            {`English is the primary language, but you'll hear dozens of languages on any given subway ride—New York is home to over 8 million people from every corner of the planet.

Free Wi-Fi is available in many public spaces, cafes, and all subway stations (in Manhattan). Consider purchasing a US SIM card or international data plan for navigation and communication.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Ticket Information & Booking Strategy */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-ticket-2-line text-emerald-500"></i>
            Ticket Information & Booking Strategy
          </h3>
          <h4 className="editorial-h4 animate-fade-up mb-2">How to Get World Cup Tickets</h4>
          <p className="whitespace-pre-line mb-4">
            {`Tickets for the 2026 World Cup are sold in three phases, with the first phase presale draw beginning September 10, 2025, open to people 18 and older with FIFA accounts and Visa cardholders. Prices for group stage match tickets begin at $60, with prices rising to $6,730 for Category 1 final tickets at MetLife Stadium.

Register at https://www.fifa.com/tickets  to enter the ticket lottery. If you miss the first phase, a second phase is expected in late October with the "Early Ticket Draw".

Pro Tip: Don't rely solely on the lottery. Look into hospitality packages, which bundle tickets with hotels and travel services. These cost more but guarantee access—worth considering for once-in-a-lifetime matches like the final.`}
          </p>
          <h4 className="editorial-h4 animate-fade-up mb-2">Alternative: Hospitality Packages</h4>
          <p className="whitespace-pre-line">
            {`MetLife Stadium offers hospitality packages featuring premium tickets, entertainment, food & beverage, available across all three host nations for single matches and venue series. These packages are sold through FIFA's official hospitality partner and include guaranteed tickets, premium seating, and VIP experiences.

For the World Cup Final, expect premium packages to range from $3,000-$10,000+ per person. Book early through official channels only to avoid scams.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Why New York Will Make Your World Cup Unforgettable */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-sparkling-2-line text-emerald-500"></i>
            Why New York Will Make Your World Cup Unforgettable
          </h3>
          <p className="whitespace-pre-line">
            {`This isn't just about 90 minutes of football. It's about experiencing the world's most electrifying tournament in the world's most electrifying city. 

More than 1.2 million visitors are expected to travel to the New York/New Jersey area for the World Cup—and they'll all be here for the same reason you are: to witness history. The energy will be contagious. The diversity will mirror the tournament itself. And the memories? Those last forever.

From the subway ride to the stadium where you're sitting next to fans from Brazil, Nigeria, and South Korea, to post-match celebrations in Times Square where 200,000 people from every nation on Earth are gathered—this is the World Cup experience amplified by New York's unmatched scale and diversity.

You'll arrive a football fan. You'll leave with stories no other city could provide.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* Start Planning CTA */}
        {/* Related Destinations */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-route-line text-emerald-500"></i>
            Plan Your East Coast World Cup Journey
          </h3>
          <p>
            New York/New Jersey is the gateway to an unforgettable East Coast World Cup experience, with multiple host cities easily accessible by train, car, or short flights.
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="editorial-h4">Popular Combinations:</h4>
            </div>
            <div>
              <h4 className="editorial-h4">Northeast Corridor</h4>
              <p>
                Experience the best of the East Coast: Start in New York/New Jersey (current), take the train to <Link to="/world-cup-2026-host-cities/philadelphia" className="underline">Philadelphia</Link> for history and cheesesteaks, then continue to <Link to="/world-cup-2026-host-cities/boston" className="underline">Boston</Link> for New England charm.
              </p>
            </div>
            <div>
              <h4 className="editorial-h4">Cross-Border Connection</h4>
              <p>
                Combine NY/NJ with <Link to="/world-cup-2026-host-cities/toronto" className="underline">Toronto</Link> for an international experience, just a short flight or scenic drive away.
              </p>
            </div>
            <div>
              <h4 className="editorial-h4">Eastern Seaboard</h4>
              <p>
                Extend your journey south to <Link to="/world-cup-2026-host-cities/atlanta" className="underline">Atlanta</Link> or <Link to="/world-cup-2026-host-cities/miami" className="underline">Miami</Link> for completely different cultural vibes.
              </p>
            </div>
          </div>
          <p className="mt-6">
            <Link to="/world-cup-2026-host-cities" className="font-inter font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Browse All World Cup 2026 Host Cities</Link>
          </p>
          <hr className="editorial-divider" />
        </article>

        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-flag-line text-emerald-500"></i>
            Start Planning Your 2026 World Cup Trip to New York
          </h3>
          <p className="whitespace-pre-line">
            {`The countdown is on. Hotels are booking up. Flights are being reserved. And the world is preparing to descend on the New York metropolitan area for the biggest sporting event on the planet.`}
          </p>
          <hr className="editorial-divider" />
        </article>

        {/* PART 5/5: Your Action Plan (exact text preserved) */}
        <article className="editorial-body">
          <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-3">
            <i className="ri-check-double-line text-emerald-500"></i>
            Your Action Plan
          </h3>
          <p className="whitespace-pre-line">
            {`1. **Register for FIFA tickets** at <a href="https://www.fifa.com/tickets" target="_blank" rel="noopener noreferrer" class="text-emerald-500 hover:underline">https://www.fifa.com/tickets</a> 
2. **Book accommodations early** via <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="text-emerald-500 hover:underline">https://www.booking.com</a> or <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" class="text-emerald-500 hover:underline">https://www.hotels.com</a> —aim for 6-12 months in advance
3. **Reserve flights** through <a href="https://www.skyscanner.com" target="_blank" rel="noopener noreferrer" class="text-emerald-500 hover:underline">https://www.skyscanner.com</a> or <a href="https://www.google.com/flights" target="_blank" rel="noopener noreferrer" class="text-emerald-500 hover:underline">https://www.google.com/flights</a> to compare prices across airlines
4. **Research neighborhoods** and plan your non-match activities
5. **Download the NJ Transit app** for seamless stadium transportation
6. **Join your national team's supporters group** for watch parties and meetups
 
The 2026 FIFA World Cup Final will be played at MetLife Stadium in New Jersey. But the experience? That belongs to New York City—the only place big enough, diverse enough, and electric enough to host the world's biggest game.
 
**See you in July 2026. Come for the football. Stay for the experience of a lifetime.**`}
          </p>
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