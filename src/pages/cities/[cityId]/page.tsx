
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema } from '../../../components/seo/SchemaOrg';

export default function CityDetailPage() {
  const { cityId } = useParams<{ cityId: string }>();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cityId]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // City data with full content
  const cityData: { [key: string]: any } = {
    'new-york': {
      name: 'New York City',
      country: '🇺🇸',
      stadium: 'MetLife Stadium',
      capacity: '82,500',
      matches: '8 Matches Including Final',
      finalDate: 'July 19, 2026 Final',
      description: 'The ultimate World Cup 2026 destination hosting the Final on July 19, 2026. Where football history meets the city that never sleeps.',
      image: 'https://readdy.ai/api/search-image?query=New%20York%20City%20Manhattan%20skyline%20at%20golden%20hour%20with%20iconic%20skyscrapers%2C%20modern%20urban%20architecture%2C%20dramatic%20lighting%2C%20metropolitan%20cityscape%2C%20Empire%20State%20Building%20and%20One%20World%20Trade%20Center%20visible&width=1920&height=800&seq=nyc-hero&orientation=landscape',
      content: {
        overview: `New York City will host the FIFA World Cup 2026 Final at MetLife Stadium on July 19, 2026. As the most populous city in the United States and a global hub for finance, arts, fashion, and culture, NYC offers an unparalleled World Cup experience.

The tournament will feature 8 matches at MetLife Stadium in East Rutherford, New Jersey, just 8 miles from Manhattan. With its world-class infrastructure, diverse neighborhoods, and iconic landmarks, New York provides the perfect backdrop for football's greatest celebration.

From the bright lights of Times Square to the green spaces of Central Park, from Broadway theaters to world-renowned museums, New York City promises an unforgettable experience for every World Cup visitor.`,
        
        stadium: `MetLife Stadium, home to both the New York Giants and New York Jets, will host 8 World Cup matches including the Final on July 19, 2026. Located in East Rutherford, New Jersey, the stadium opened in 2010 and features:

• Capacity: 82,500 (largest in the NFL)
• Retractable roof sections for weather protection
• State-of-the-art LED lighting and video boards
• Premium hospitality suites and club seating
• Accessible design with elevators and ramps throughout

The stadium is easily accessible via NJ Transit trains, buses, and the Lincoln Tunnel. Special World Cup shuttles will operate from Manhattan hotels and transportation hubs.

Ticket prices range from $200 for group stage matches to $2,500+ for Final premium seating. VIP packages include hospitality suites, premium dining, and exclusive access areas.`,

        transportation: `Getting around New York during the World Cup:

**To/From MetLife Stadium:**
• NJ Transit trains from Penn Station (30 minutes)
• Dedicated World Cup shuttle buses from Midtown
• Private car service and ride-sharing available
• Special fan trains on match days

**Within NYC:**
• Subway system covers all five boroughs ($2.90 per ride)
• Yellow taxis and ride-sharing (Uber/Lyft)
• Citi Bike sharing system throughout Manhattan and Brooklyn
• Walking is often fastest in Midtown Manhattan

**Airports:**
• JFK International (45 minutes to Manhattan)
• LaGuardia (30 minutes to Manhattan)
• Newark Liberty (45 minutes to Manhattan)
• All airports connected by AirTrain and subway/bus`,

        accommodation: `New York offers accommodations for every budget:

**Luxury Hotels ($400-800/night):**
• The Plaza, The St. Regis, The Carlyle
• Four Seasons, The Ritz-Carlton, The Peninsula
• Mandarin Oriental, The Greenwich Hotel

**Mid-Range Hotels ($200-400/night):**
• Pod Hotels (multiple locations)
• citizenM, Arlo Hotels, The High Line Hotel
• Hampton Inn, Courtyard by Marriott

**Budget Options ($80-200/night):**
• HI New York City Hostel
• The Local NYC, Brooklyn neighborhoods
• Airbnb in Queens, Brooklyn, or New Jersey

**World Cup Packages:**
Many hotels offer special World Cup packages including:
• Match tickets and transportation
• Welcome receptions and fan events
• Concierge services for restaurant reservations
• Group rates for international visitors`,

        attractions: `Must-see attractions during your World Cup visit:

**Iconic Landmarks:**
• Statue of Liberty and Ellis Island
• Empire State Building and Top of the Rock
• One World Trade Center and 9/11 Memorial
• Brooklyn Bridge and Central Park

**Culture & Arts:**
• Metropolitan Museum of Art
• Museum of Modern Art (MoMA)
• Broadway shows in the Theater District
• Lincoln Center for performing arts

**Neighborhoods to Explore:**
• Times Square and Midtown Manhattan
• Greenwich Village and SoHo
• Williamsburg and DUMBO in Brooklyn
• Chinatown and Little Italy

**Food & Dining:**
• Classic New York pizza and bagels
• Fine dining in Michelin-starred restaurants
• Food trucks and street vendors
• Rooftop bars with skyline views

**Shopping:**
• Fifth Avenue luxury boutiques
• SoHo designer stores
• Brooklyn Flea Markets
• Century 21 and outlet shopping`,

        localTips: `Insider tips for World Cup visitors:

**Best Times to Visit Attractions:**
• Early morning (8-10 AM) for popular sites
• Weekday afternoons for museums
• Evening for rooftop bars and skyline views

**Money-Saving Tips:**
• Many museums have "pay-what-you-wish" hours
• Happy hour specials at bars and restaurants
• Free events in Central Park and Bryant Park
• Walking tours often work on tips only

**Safety & Etiquette:**
• NYC is generally very safe for tourists
• Keep valuables secure in crowded areas
• Tip 18-20% at restaurants and bars
• Stand right, walk left on escalators

**Weather Preparation:**
• July temperatures: 70-85°F (21-29°C)
• Afternoon thunderstorms possible
• Comfortable walking shoes essential
• Light layers for air-conditioned buildings

**Local Soccer Culture:**
• New York City FC plays at Yankee Stadium
• New York Red Bulls play at Red Bull Arena
• Soccer bars: Legends, Football Factory, The Blind Pig
• Pick-up games in Central Park and Prospect Park`,

      }
    },

    'miami': {
      name: 'Miami',
      country: '🇺🇸',
      stadium: 'Hard Rock Stadium',
      capacity: '65,326',
      matches: '7 Matches Including Bronze Final',
      finalDate: 'July 13, 2026 Bronze Final',
      description: 'Where football passion meets Latin culture, beach paradise, and non-stop energy.',
      image: 'https://readdy.ai/api/search-image?query=Miami%20skyline%20at%20golden%20hour%20with%20modern%20skyscrapers%20reflecting%20in%20Biscayne%20Bay%2C%20tropical%20palm%20trees%2C%20vibrant%20sunset%20colors%2C%20luxury%20waterfront%20cityscape%2C%20Art%20Deco%20architecture%20visible%20in%20distance&width=1920&height=800&seq=miami-hero&orientation=landscape',
      content: {
        overview: `Miami will host 7 World Cup matches including the Bronze Final on July 13, 2026, at Hard Rock Stadium. Known for its stunning beaches, vibrant nightlife, and rich Latin American culture, Miami offers a unique tropical World Cup experience.

The Magic City combines the energy of a major metropolitan area with the relaxed atmosphere of a beach destination. From the Art Deco architecture of South Beach to the cultural richness of Little Havana, Miami provides an unforgettable backdrop for the world's greatest football tournament.

With year-round sunshine, world-class dining, and a passionate soccer culture, Miami promises to deliver one of the most exciting and colorful World Cup experiences in tournament history.`,

        stadium: `Hard Rock Stadium, home to the Miami Dolphins and Miami Hurricanes, will host 7 World Cup matches including the Bronze Final. Located in Miami Gardens, the stadium features:

• Capacity: 65,326 with potential expansion
• Partial roof canopy for sun and rain protection
• State-of-the-art cooling systems and misting fans
• Premium club levels and luxury suites
• Extensive food and beverage options

The stadium underwent a $500 million renovation completed in 2016, making it one of the most modern venues in the tournament. Special features include:
• Open-air design with natural ventilation
• HD video boards and premium sound system
• Multiple club and hospitality areas
• Accessible seating and facilities throughout

Transportation includes dedicated shuttle services from Miami Beach, downtown Miami, and major hotels. Parking is available on-site with pre-paid options recommended.`,

        transportation: `Getting around Miami during the World Cup:

**To/From Hard Rock Stadium:**
• Metrobus routes from downtown and beach areas
• Dedicated World Cup shuttle services
• Ride-sharing pickup/drop-off zones
• Private car service and taxi options

**Within Miami:**
• Metromover (free downtown circulator)
• Metrobus system throughout Miami-Dade
• Brightline train to Fort Lauderdale and Orlando
• Water taxis and ferry services
• Citi Bike Miami sharing program

**Miami Beach:**
• Free trolley service on Miami Beach
• Art Deco District easily walkable
• Lincoln Road pedestrian mall
• Ocean Drive beachfront promenade

**Airports:**
• Miami International Airport (MIA) - 20 minutes to downtown
• Fort Lauderdale Airport (FLL) - 45 minutes to Miami Beach
• Both airports connected by Metrobus and shuttle services`,

        accommodation: `Miami accommodations for every style:

**Luxury Beach Resorts ($500-1200/night):**
• The Setai Miami Beach, Four Seasons at The Surf Club
• Faena Hotel Miami Beach, The Ritz-Carlton South Beach
• W South Beach, SLS Hotel South Beach

**Boutique Hotels ($250-500/night):**
• The Betsy Hotel, Casa Faena
• Kimpton Angler's Hotel, The Confidante
• Art Deco hotels on Ocean Drive

**Mid-Range Options ($150-300/night):**
• Aloft Miami Brickell, Hampton Inn Miami Beach
• Holiday Inn Express, Courtyard by Marriott
• Boutique properties in Wynwood and Design District

**Budget-Friendly ($80-150/night):**
• Hostels in South Beach and downtown
• Airbnb in residential neighborhoods
• Extended stay hotels in Coral Gables

**World Cup Packages:**
Many properties offer special packages including:
• Match tickets and stadium transportation
• Beach club access and pool parties
• Art Basel and cultural event tickets
• Group rates for international visitors`,

        attractions: `Must-experience Miami attractions:

**Beaches & Waterfront:**
• South Beach and Ocean Drive
• Key Biscayne and Crandon Park Beach
• Venetian Pool in Coral Gables
• Bayside Marketplace and marina

**Cultural Districts:**
• Art Deco Historic District
• Wynwood Walls street art district
• Design District luxury shopping
• Little Havana and Calle Ocho

**Museums & Arts:**
• Pérez Art Museum Miami (PAMM)
• Bass Museum of Art
• Vizcaya Museum and Gardens
• Institute of Contemporary Art

**Nightlife & Entertainment:**
• Lincoln Road pedestrian mall
• Rooftop bars with ocean views
• Salsa clubs in Little Havana
• Beach clubs and pool parties

**Food Scene:**
• Cuban cuisine in Little Havana
• Fresh seafood and ceviche
• Michelin-starred restaurants
• Food trucks and beachside cafes

**Day Trips:**
• Everglades National Park
• Key Largo and the Florida Keys
• Fort Lauderdale beaches
• Biscayne National Park`,

        localTips: `Essential Miami tips for World Cup visitors:

**Weather & What to Wear:**
• July temperatures: 75-90°F (24-32°C)
• High humidity and afternoon thunderstorms
• Lightweight, breathable clothing
• Sunscreen and hydration essential
• Beach attire for daytime, dress up for nightlife

**Cultural Etiquette:**
• Spanish widely spoken, especially in Little Havana
• Tipping 18-20% at restaurants and bars
• Beach clubs often have dress codes
• Respect for Latin American cultures

**Money-Saving Tips:**
• Happy hour specials at beachfront bars
• Free events at Bayfront Park
• Public beach access is free
• Metromover downtown transportation is free

**Safety & Practical:**
• South Beach can be crowded, watch belongings
• Ocean swimming: be aware of currents
• Parking is expensive, use public transit when possible
• Many attractions offer online discounts

**Local Soccer Scene:**
• Inter Miami CF plays at DRV PNK Stadium
• Soccer bars: Batch Gastropub, The Pub, Blackbird Ordinary
• Beach soccer games on South Beach
• Youth soccer leagues throughout Miami-Dade`,

      }
    },

    'los-angeles': {
      name: 'Los Angeles',
      country: '🇺🇸',
      stadium: 'SoFi Stadium',
      capacity: '70,240',
      matches: '8 Matches Including USMNT Opener',
      finalDate: 'June 12, 2026 USMNT Opener',
      description: 'Where the World Cup meets Hollywood magic. The opening kickoff heard around the world starts here on June 12, 2026.',
      image: 'https://readdy.ai/api/search-image?query=Los%20Angeles%20skyline%20at%20golden%20hour%20with%20downtown%20skyscrapers%2C%20palm%20trees%2C%20Hollywood%20Hills%20in%20background%2C%20California%20sunshine%2C%20modern%20urban%20landscape%2C%20vibrant%20sunset%20colors%20over%20the%20city&width=1920&height=800&seq=la-hero&orientation=landscape',
      content: {
        overview: `Los Angeles will host 8 World Cup matches including the highly anticipated USMNT opener on June 12, 2026, at the state-of-the-art SoFi Stadium. As the entertainment capital of the world, LA offers a unique blend of Hollywood glamour, beach culture, and diverse communities.

The City of Angels spans from the Pacific Ocean to the San Gabriel Mountains, encompassing iconic neighborhoods like Hollywood, Beverly Hills, Santa Monica, and Venice. With its year-round perfect weather, world-class dining scene, and endless entertainment options, LA provides an unmatched World Cup experience.

From the glitz of the Sunset Strip to the laid-back vibes of Manhattan Beach, from the cultural richness of East LA to the luxury of Rodeo Drive, Los Angeles offers something for every World Cup visitor.`,

        stadium: `SoFi Stadium, the crown jewel of sports venues, will host 8 World Cup matches including the USMNT opener. Located in Inglewood, this architectural marvel features:

• Capacity: 70,240 (expandable to 100,000)
• Translucent ETFE roof with natural lighting
• 360-degree 4K HDR video board (largest in sports)
• Advanced climate control and air circulation
• Premium clubs, suites, and hospitality areas

Opened in 2020 at a cost of $5.5 billion, SoFi Stadium is home to both the Los Angeles Rams and Los Angeles Chargers. Special features include:
• Sustainable design with solar panels and water recycling
• Multiple levels of premium seating options
• Extensive food and beverage offerings
• State-of-the-art sound and lighting systems

The stadium is connected to LAX airport via the upcoming People Mover and offers multiple transportation options including Metro lines, shuttles, and ride-sharing zones.`,

        transportation: `Getting around Los Angeles during the World Cup:

**To/From SoFi Stadium:**
• Metro K Line (Crenshaw/LAX) to Stadium/Expo Park
• Dedicated shuttle services from major hotels
• Ride-sharing pickup zones and private car service
• LAX People Mover connection (opening 2024)

**Metro System:**
• Red/Purple Lines: Hollywood to Downtown
• Blue Line: Downtown to Long Beach
• Expo Line: Downtown to Santa Monica
• Gold Line: Pasadena to East LA

**Other Transportation:**
• Extensive freeway system (expect traffic)
• Ride-sharing (Uber/Lyft) widely available
• Metro Bike Share in downtown and beach areas
• Airport shuttles and private car services

**Airports:**
• LAX (Los Angeles International) - 15 minutes to SoFi Stadium
• Burbank Airport - 45 minutes to downtown
• Long Beach Airport - 30 minutes to downtown
• All airports connected by shuttles and public transit`,

        accommodation: `Los Angeles accommodations across all areas:

**Luxury Hotels ($400-1000/night):**
• The Beverly Hills Hotel, Chateau Marmont
• Four Seasons Beverly Hills, The Ritz-Carlton
• Shutters on the Beach, Casa del Mar (Santa Monica)
• The Peninsula Beverly Hills, SLS Hotel

**Mid-Range Hotels ($200-400/night):**
• Hollywood Roosevelt Hotel
• Kimpton Hotels (multiple locations)
• Marriott and Hilton properties
• Boutique hotels in West Hollywood

**Beach Area Hotels ($250-600/night):**
• Santa Monica and Venice Beach properties
• Manhattan Beach luxury resorts
• Redondo Beach and El Segundo options
• Marina del Rey waterfront hotels

**Budget Options ($100-200/night):**
• Hostels in Hollywood and Santa Monica
• Extended stay hotels near LAX
• Airbnb in residential neighborhoods
• Motels along major corridors

**World Cup Packages:**
Special offerings include:
• Match tickets with VIP transportation
• Studio tours and entertainment packages
• Beach club and rooftop party access
• Group rates for international visitors`,

        attractions: `Must-see Los Angeles attractions:

**Hollywood & Entertainment:**
• Hollywood Walk of Fame and TCL Chinese Theatre
• Universal Studios Hollywood
• Warner Bros. and Sony Pictures studio tours
• Dolby Theatre and Hollywood Bowl

**Beaches & Coastal Areas:**
• Santa Monica Pier and Third Street Promenade
• Venice Beach Boardwalk and Muscle Beach
• Manhattan Beach and Hermosa Beach
• Malibu beaches and Point Dume

**Museums & Culture:**
• Getty Center and Getty Villa
• Los Angeles County Museum of Art (LACMA)
• California Science Center and Space Shuttle Endeavour
• Walt Disney Concert Hall

**Neighborhoods to Explore:**
• Beverly Hills and Rodeo Drive
• West Hollywood and Sunset Strip
• Downtown LA Arts District
• Pasadena and Old Town

**Outdoor Activities:**
• Griffith Observatory and Hollywood Sign hikes
• Runyon Canyon and hiking trails
• Santa Monica Mountains
• Beach volleyball and surfing

**Food Scene:**
• Food trucks and street tacos
• Michelin-starred restaurants
• Farmers markets (Santa Monica, Hollywood)
• Rooftop dining with city views`,

        localTips: `Essential LA tips for World Cup visitors:

**Weather & Clothing:**
• June temperatures: 65-80°F (18-27°C)
• Marine layer (fog) in mornings near coast
• Layers recommended for temperature changes
• Sunscreen essential year-round

**Transportation Tips:**
• Avoid rush hours (7-9 AM, 4-7 PM)
• Use apps like Waze for traffic updates
• Metro day passes available for tourists
• Parking can be expensive, plan ahead

**Cultural Insights:**
• Casual dress code in most areas
• Tipping 18-20% at restaurants
• Many attractions offer online discounts
• Celebrity sightings common in Beverly Hills/West Hollywood

**Money-Saving Strategies:**
• Happy hour specials at rooftop bars
• Free events at Griffith Observatory
• Beach access is free at all public beaches
• Many museums have free admission days

**Local Soccer Culture:**
• LAFC plays at Banc of California Stadium
• LA Galaxy plays at Dignity Health Sports Park
• Soccer bars: The Greyhound Bar, Casey's Irish Pub
• Beach soccer leagues in Santa Monica and Manhattan Beach
• Youth soccer prevalent throughout the region`,

      }
    },

    'kansas-city': {
      name: 'Kansas City',
      country: '🇺🇸',
      stadium: 'GEHA Field at Arrowhead',
      capacity: '76,640',
      matches: '6 Matches Including Semifinal',
      finalDate: 'July 9, 2026 Semifinal',
      description: 'Welcome to the Heart of America. Where genuine Midwestern hospitality meets world-class BBQ and electric soccer culture.',
      image: 'https://readdy.ai/api/search-image?query=Kansas%20City%20skyline%20at%20golden%20hour%20with%20modern%20downtown%20skyscrapers%2C%20Missouri%20River%2C%20urban%20architecture%2C%20Midwest%20metropolitan%20cityscape%2C%20dramatic%20lighting%2C%20American%20heartland%20atmosphere&width=1920&height=800&seq=kc-hero&orientation=landscape',
      content: {
        overview: `Kansas City will host 6 World Cup matches including a semifinal on July 9, 2026, at the legendary GEHA Field at Arrowhead Stadium. Known as the Heart of America, Kansas City offers authentic Midwestern hospitality, world-famous BBQ, and a passionate soccer culture that rivals any city in the world.

The city straddles the Missouri-Kansas border and is renowned for its jazz heritage, fountains, and boulevards. With Sporting Kansas City's dedicated fanbase and the city's growing soccer infrastructure, Kansas City provides an intimate and electric World Cup atmosphere.

From the historic Jazz District to the trendy Crossroads Arts District, from legendary BBQ joints to craft breweries, Kansas City delivers an authentic American experience with genuine warmth and hospitality.`,

        stadium: `GEHA Field at Arrowhead Stadium, home of the Kansas City Chiefs, will host 6 World Cup matches including a semifinal. Known for having the loudest crowd noise in the NFL, Arrowhead features:

• Capacity: 76,640 with excellent sightlines
• Historic venue opened in 1972, renovated in 2010
• Natural grass playing surface
• Premium club seating and luxury suites
• Extensive tailgating areas and fan amenities

The stadium is famous for its incredible atmosphere and passionate fanbase. Special features include:
• Ring of Honor celebrating Chiefs legends
• Multiple concourse levels with local food vendors
• State-of-the-art video boards and sound system
• Accessible seating and facilities throughout

Located in the Truman Sports Complex, the stadium offers ample parking and is easily accessible from downtown Kansas City via Interstate 70. Special World Cup shuttles will operate from major hotels and the downtown area.`,

        transportation: `Getting around Kansas City during the World Cup:

**To/From Arrowhead Stadium:**
• Interstate 70 East from downtown (20 minutes)
• Dedicated World Cup shuttle services
• RideKC bus routes with special match day service
• Ample parking available at the stadium complex

**Within Kansas City:**
• RideKC bus system throughout metro area
• Kansas City Streetcar (free downtown service)
• Ride-sharing and taxi services
• B-Cycle bike sharing program
• Most attractions within walking distance downtown

**Regional Transportation:**
• Amtrak service to Chicago, St. Louis, and Los Angeles
• Greyhound and Megabus connections
• Easy driving access to other Midwest cities

**Airport:**
• Kansas City International Airport (MCI) - 30 minutes to downtown
• New single terminal opened in 2023
• Rental cars, shuttles, and ride-sharing available
• Direct flights to major US and international cities`,

        accommodation: `Kansas City accommodations with Midwestern charm:

**Luxury Hotels ($200-400/night):**
• The Fontaine, Hotel Kansas City
• InterContinental Kansas City at the Plaza
• The Raphael Hotel, Autograph Collection
• 21c Museum Hotel Kansas City

**Historic Properties ($150-300/night):**
• The Westin Kansas City at Crown Center
• Hilton President Kansas City
• Hotel Phillips, Curio Collection
• Marriott Kansas City Downtown

**Mid-Range Options ($100-200/night):**
• Hampton Inn & Suites, Holiday Inn Express
• Courtyard by Marriott locations
• Drury Hotels (multiple locations)
• Best Western Plus properties

**Budget-Friendly ($60-120/night):**
• Extended Stay America locations
• Comfort Inn and Quality Inn properties
• Airbnb in residential neighborhoods
• Hostels and budget motels

**World Cup Packages:**
Local hotels offer special packages including:
• Match tickets and stadium transportation
• BBQ restaurant tours and tastings
• Jazz District and cultural experiences
• Group rates for international visitors`,

        attractions: `Must-experience Kansas City attractions:

**BBQ & Food Scene:**
• Joe's Kansas City Bar-B-Que (original gas station location)
• LC's Bar-B-Q, Gates Bar-B-Q, Arthur Bryant's
• Burnt end tours and BBQ competitions
• Local craft breweries and distilleries

**Jazz & Music Heritage:**
• American Jazz Museum and Negro Leagues Baseball Museum
• Historic 18th & Vine Jazz District
• Blue Room jazz club and live music venues
• Charlie Parker Memorial and jazz walking tours

**Arts & Culture:**
• Nelson-Atkins Museum of Art (free admission)
• Kauffman Center for the Performing Arts
• Crossroads Arts District galleries and studios
• Union Station and Science City

**Sports & Recreation:**
• Sporting Kansas City at Children's Mercy Park
• Kansas City Royals at Kauffman Stadium
• Country Club Plaza shopping and dining
• Crown Center and entertainment district

**Unique Kansas City:**
• City of Fountains (more than Rome)
• Boulevard Brewing Company tours
• Kansas City Zoo and Aquarium
• Legoland Discovery Center

**Day Trips:**
• Independence and Harry S. Truman sites
• Lawrence, Kansas (University of Kansas)
• St. Joseph, Pony Express history
• Weston, Missouri wine country`,

        localTips: `Essential Kansas City tips for World Cup visitors:

**Weather & Preparation:**
• July temperatures: 70-90°F (21-32°C)
• Afternoon thunderstorms possible
• Humidity can be high in summer
• Comfortable walking shoes for downtown

**Local Culture & Etiquette:**
• Genuine Midwestern friendliness and hospitality
• Tipping 18-20% at restaurants
• BBQ is serious business - try multiple places
• Jazz heritage is deeply respected

**Money-Saving Tips:**
• Many museums offer free or discounted admission
• Happy hour specials at local bars and restaurants
• Free events at Crown Center and Union Station
• Public transportation is affordable

**Food & Dining:**
• Burnt ends are a Kansas City invention
• Try local favorites: Z-Man sandwich, LC's burnt ends
• Craft beer scene is thriving
• Food trucks offer great value

**Soccer Culture:**
• Sporting Kansas City has incredibly passionate fans
• Children's Mercy Park is considered one of MLS's best venues
• Soccer bars: Johnny's Tavern, Char Bar, The Cauldron
• Youth soccer is huge throughout the metro area
• Tailgating culture extends to soccer matches

**Getting Around:**
• Kansas is spread out - plan transportation
• Traffic can be heavy during rush hours
• METRORail is efficient for major destinations
• Uber/Lyft widely available and affordable
• Downtown tunnel system useful during hot weather`,

      }
    },

    'houston': {
      name: 'Houston',
      country: '🇺🇸',
      stadium: 'NRG Stadium',
      capacity: '72,220',
      matches: '7 Matches Including Round of 16',
      finalDate: 'Round of 16 Matches',
      description: 'Space City welcomes the world with Texas-sized hospitality, incredible BBQ, and a passionate soccer culture.',
      image: 'https://readdy.ai/api/search-image?query=Houston%20Texas%20skyline%20at%20golden%20hour%20with%20modern%20downtown%20skyscrapers%2C%20urban%20architecture%2C%20dramatic%20lighting%2C%20Space%20City%20metropolitan%20landscape%2C%20vibrant%20sunset%20colors%20over%20the%20city&width=1920&height=800&seq=houston-hero&orientation=landscape',
      content: {
        overview: `Houston will host 7 World Cup matches including Round of 16 matches at NRG Stadium. As the fourth-largest city in the United States and home to NASA's Johnson Space Center, Houston offers a unique blend of space-age innovation, Texas culture, and international diversity.

Space City is known for its world-class medical center, energy industry leadership, and incredible culinary scene that reflects its multicultural population. With the Houston Dynamo's passionate fanbase and the city's growing soccer infrastructure, Houston provides an authentic Texas World Cup experience.

From the historic Heights to the trendy Montrose district, from NASA's Space Center to the bustling downtown theater district, Houston delivers Texas-sized hospitality with a cosmopolitan flair.`,

        stadium: `NRG Stadium, home of the Houston Texans, will host 7 World Cup matches including Round of 16 matches. The first NFL stadium with a retractable roof, NRG Stadium features:

• Capacity: 72,220 with excellent sightlines
• Retractable roof for climate control
• Natural grass playing surface
• Premium club seating and luxury suites
• Extensive parking and tailgating areas

Opened in 2002, the stadium is part of the NRG Park complex. Special features include:
• Climate-controlled environment with retractable roof
• State-of-the-art video boards and sound system
• Multiple concourse levels with local food vendors
• Accessible seating and facilities throughout
• Adjacent to the Astrodome (historic landmark)

Located in the NRG Park complex, the stadium is easily accessible from downtown Houston via major highways. The METRORail Red Line provides direct service to the stadium, and special World Cup shuttles will operate from major hotels.`,

        transportation: `Getting around Houston during the World Cup:

**To/From NRG Stadium:**
• METRORail Red Line direct to NRG Stadium/Astrodome
• Interstate 610 and Highway 288 access
• Dedicated World Cup shuttle services
• Ample parking available at NRG Park complex

**Within Houston:**
• METRO bus system throughout Harris County
• METRORail Red, Purple, and Green lines
• Ride-sharing and taxi services widely available
• BCycle bike sharing program
• Downtown tunnel system for pedestrians

**Regional Transportation:**
• Amtrak service to New Orleans, Los Angeles, and Chicago
• Greyhound and Megabus connections
• Easy driving access to Dallas, Austin, and San Antonio

**Airports:**
• George Bush Intercontinental Airport (IAH) - 45 minutes to downtown
• William P. Hobby Airport (HOU) - 20 minutes to downtown
• Both airports connected by METRO bus and rail services
• Rental cars, shuttles, and ride-sharing available`,

        accommodation: `Houston accommodations with Texas hospitality:

**Luxury Hotels ($250-500/night):**
• The Post Oak Hotel at Uptown Houston
• Four Seasons Hotel Houston, The St. Regis Houston
• Hotel Granduca Houston, JW Marriott Houston Downtown
• Marriott Marquis Houston, Hilton Americas-Houston

**Historic Properties ($150-300/night):**
• Hotel ZaZa Houston Museum District
• The Lancaster Hotel, Sam Houston Hotel
• Magnolia Hotel Houston, Hotel ICON Autograph Collection
• Westin Houston Medical Center

**Mid-Range Options ($100-200/night):**
• Hampton Inn & Suites locations, Holiday Inn Express
• Courtyard by Marriott properties
• Drury Inn & Suites, Embassy Suites
• Homewood Suites and Residence Inn

**Budget-Friendly ($60-120/night):**
• Extended Stay America locations
• Comfort Inn and Quality Inn properties
• Airbnb in residential neighborhoods like The Heights
• Budget motels near major highways

**World Cup Packages:**
Houston hotels offer special packages including:
• Match tickets and stadium transportation
• Space Center Houston tours
• BBQ and Tex-Mex restaurant experiences
• Group rates for international visitors`,

        attractions: `Must-experience Houston attractions:

**Space & Science:**
• Space Center Houston (NASA's official visitor center)
• Johnson Space Center tours and astronaut training
• Moon rocks, space shuttles, and Mission Control
• Interactive space exploration exhibits

**Museums & Culture:**
• Museum of Fine Arts Houston
• Houston Museum of Natural Science
• Contemporary Arts Museum Houston
• Buffalo Soldiers National Museum

**Food Scene:**
• Tex-Mex cuisine and authentic Mexican food
• BBQ joints: Killen's Barbecue, Truth BBQ, The Pit Room
• Vietnamese cuisine in Chinatown
• Food truck parks and farmers markets

**Neighborhoods to Explore:**
• The Heights (historic homes and trendy shops)
• Montrose (arts district and nightlife)
• Rice Village (shopping and dining)
• Downtown Theater District

**Outdoor Activities:**
• Buffalo Bayou Park and kayaking
• Hermann Park and Houston Zoo
• Galveston beaches (45 minutes away)
• Discovery Green downtown park

**Sports & Entertainment:**
• Houston Dynamo FC at PNC Stadium
• Houston Astros at Minute Maid Park
• Houston Rockets at Toyota Center
• Rodeo Houston (world's largest livestock show)`,

        localTips: `Essential Houston tips for World Cup visitors:

**Weather & Preparation:**
• June/July temperatures: 75-95°F (24-35°C)
• High humidity and afternoon thunderstorms
• Air conditioning everywhere - bring light layers
• Sunscreen and hydration essential

**Local Culture & Etiquette:**
• Texas-sized hospitality and friendliness
• Tipping 18-20% at restaurants
• "Y'all" is commonly used and welcomed
• Respect for Texas pride and independence

**Money-Saving Tips:**
• Many museums offer free admission days
• Happy hour specials at local bars and restaurants
• Free events at Discovery Green and Miller Outdoor Theatre
• Public transportation day passes available

**Food & Dining:**
• Tex-Mex is different from Mexican food
• Try local favorites: breakfast tacos, kolaches, crawfish
• Food truck culture is huge
• BYOB restaurants are common

**Soccer Culture:**
• Houston Dynamo FC has passionate supporters (Texian Army)
• PNC Stadium atmosphere is electric
• Soccer bars: Pitch 25, The Phoenix on Westheimer, Truck Yard Houston
• Youth soccer leagues throughout Greater Houston area
• International soccer community due to diverse population

**Getting Around:**
• Houston is spread out - plan transportation
• Traffic can be heavy during rush hours
• METRORail is efficient for major destinations
• Uber/Lyft widely available and affordable
• Downtown tunnel system useful during hot weather`,

      }
    },

    'dallas': {
      name: 'Dallas',
      country: '🇺🇸',
      stadium: 'AT&T Stadium',
      capacity: '80,000',
      matches: '9 Matches Including Semifinal',
      finalDate: 'July 14, 2026 Semifinal',
      description: 'Welcome to the Big D. Dallas is hosting more 2026 FIFA World Cup matches than any other city in North America—nine matches at the legendary AT&T Stadium, including a semifinal.',
      image: 'https://readdy.ai/api/search-image?query=Dallas Texas skyline at golden hour with modern downtown skyscrapers, AT&T Stadium visible, cowboy culture meets World Cup atmosphere, dramatic lighting, Big D metropolitan landscape&width=1920&height=800&seq=dallas-hero&orientation=landscape',
      content: {
        overview: `Welcome to the Big D. Dallas is hosting more 2026 FIFA World Cup matches than any other city in North America—nine matches at the legendary AT&T Stadium, including a semifinal. This is Texas-sized football on the world stage, and Dallas is ready to show the planet what American soccer culture looks like when everything's bigger.

Dallas will host nine matches between June 14 and July 14: five group-stage matches, two Round of 32 matches, one Round of 16 match, and one semifinal. AT&T Stadium's retractable roof and climate-controlled interior mean perfect conditions regardless of how intense the Texas summer heat gets outside.

From the Sixth Floor Museum to world-class BBQ brisket, from FC Dallas's passionate supporters to the nation's largest urban arts district, Dallas delivers authentic American energy wrapped in Southern hospitality. This city doesn't just talk big—it delivers on a massive scale.`,

        stadium: `Matches will be played at AT&T Stadium, renamed "Dallas Stadium" for the tournament. Built in 2009 at a cost of $1.3 billion, this architectural marvel is one of the world's most impressive sports venues, seating 80,000 fans with the ability to expand to over 100,000.

**Key Stadium Facts:**
• Capacity: 80,000 for World Cup matches (expandable to 105,000)
• Location: Arlington, approximately 20 miles west of downtown Dallas
• Unique Features: Retractable roof opening in just 12 minutes, world's largest HD video board (160 feet long by 72 feet high)
• Major Events: Hosted Super Bowls XXXVIII (2004) and LI (2017), plus the 2024 College Football Playoff National Championship

AT&T Stadium is often called "Jerry World" after Cowboys owner Jerry Jones. With its massive arches spanning 300 feet high, climate control, and legendary video board suspended 90 feet above the field, this is premium American sports infrastructure at its finest.`,

        transportation: `**DART Light Rail (Best for Downtown):**
DART operates 93 miles of light rail on four lines (Red, Blue, Green, Orange) serving 65 stations. All lines pass through downtown Dallas, connecting to major attractions, hotels, and entertainment districts. Trains run 7 days a week starting at 4:30 AM.

**Trinity Railway Express (TRE):**
This 34-mile commuter rail connects downtown Dallas with Fort Worth. Service operates Monday-Saturday with 30-60 minute headways. Perfect for exploring the broader metroplex.

**Stadium Access:**
AT&T Stadium has 26,000 parking spaces on-site. For public transit, limited bus connections are available, though rideshare services are most convenient for match days.

**Dallas/Fort Worth International (DFW):**
Major international hub approximately 20 miles northwest of downtown with connections to global destinations.

**Dallas Love Field (DAL):**
Smaller airport closer to downtown, primarily serving domestic flights.

**Pro Tip:** Downtown and Uptown are walkable neighborhoods. For stadium access, book parking or rideshare in advance—match day traffic will be legendary.`,

        accommodation: `Dallas spans over 340 square miles across multiple distinct neighborhoods, so choosing the right area matters. From downtown skyscrapers to artsy Deep Ellum, there's a perfect base for every World Cup traveler.

**Best Neighborhoods**

**Downtown Dallas**  
Urban energy, walkable arts district, 20 miles from stadium, DART rail hub

**Uptown**  
Trendy dining, nightlife, boutique shopping, leafy parks, local character

**Deep Ellum**  
Bohemian vibes, live music venues, street art, craft breweries, creative spirit

**Arlington (Near Stadium)**  
Closest access to AT&T Stadium, limited urban amenities, match-day convenience

**Budget**  
$77 per night

**Mid-Tier**  
$121 per night

**Luxury**  
$193+ per night

**Match Schedule**

Dallas hosts group-stage matches on June 14, 17, 22, 25, and 27; Round of 32 matches on June 30 and July 3; Round of 16 on July 6; and semifinal on July 14.

Team matchups will be assigned at the Final Draw on December 5, 2025, in Washington, D.C.

**Tickets & Hospitality Packages**

**Ticket Pricing:**
Group-stage seats start around $60, with prices increasing for knockout rounds and the semifinal. FIFA uses dynamic pricing, so costs may fluctuate.

**How to Buy:**
Fans 18 or older can enter ticket drawings through FIFA's official site. Visa cardholders had priority access in September 2025, with additional drawings after the December draw.

**Hospitality Options:**
Premium packages for Dallas matches start around $1,400, offering VIP experiences with premium seating, dining, and exclusive access.`,

        attractions: `**Sixth Floor Museum at Dealey Plaza:** The nation's most significant JFK museum, located in the former Texas School Book Depository. Stand at the sniper's window and walk the grassy knoll where history changed forever.

**Dallas Arts District:** The largest contiguous urban arts district in America, spanning 68 acres across 19 blocks. Includes the Dallas Museum of Art (free admission, 22,000+ works), Nasher Sculpture Center, Perot Museum of Nature and Science, and Crow Museum of Asian Art.

**Deep Ellum:** Historic neighborhood that birthed Dallas blues and jazz culture. Today it's a creative hub with 30+ live music venues, street art murals, craft breweries, and eclectic dining.

**Bishop Arts District:** South Dallas's bohemian gem featuring indie boutiques, vintage shops, contemporary galleries, and trendy restaurants in a walkable several-block area.

**Dallas BBQ:** World-class Texas BBQ is everywhere. Must-try spots: Pecan Lodge, Cattleack Barbecue, Lockhart Smokehouse, and Terry Black's Barbecue. Arrive early—lines form fast.

**Reunion Tower GeO-Deck:** 470-foot observation deck offering 360-degree views of Dallas. Perfect for sunset.

**Dallas Arboretum and Botanical Garden:** 66 acres of seasonal blooms on the shores of White Rock Lake. One of the nation's finest public gardens.

**George W. Bush Presidential Library:** Located on SMU campus, featuring interactive exhibits including a replica Oval Office and Decision Theater.

**Soccer Culture: A City That Lives Football**

Dallas has deep soccer roots. FC Dallas was founded in 1996 as the Dallas Burn, one of MLS's original ten charter clubs. The team won the U.S. Open Cup in 1997 and again in 2016, plus captured the Supporters' Shield in 2016 with the league's best regular-season record.

FC Dallas plays at Toyota Stadium in suburban Frisco, a 20,500-seat soccer-specific venue that opened in 2005. The club is renowned for its elite youth academy, which has produced major talents including Weston McKennie, Ricardo Pepi, and Chris Richards—players now starring in Europe's top leagues.

The club's supporters groups—Dallas Beer Guardians and El Matador—bring authentic passion to every match. AT&T Stadium has hosted major international fixtures including Gold Cup matches and USA-Mexico clashes, creating electric atmospheres that showcase Dallas's diverse Latino population and deep football culture.

**Don't Miss:** If your schedule allows, catch an FC Dallas match at Toyota Stadium. The atmosphere is pure Texas soccer passion.`,

        localTips: `**Weather & What to Pack**

June in Dallas brings hot, humid weather with average highs around 93°F (34°C) and lows near 72°F (22°C). June typically sees 7-8 rainy days with afternoon thunderstorms. High UV index requires serious sun protection.

July is even hotter, with highs reaching 96°F (36°C) and peak summer heat. Expect intense sunshine and occasional afternoon storms.

**Pack Smart:**
• Lightweight, breathable clothing (moisture-wicking fabrics recommended)
• Sunscreen (SPF 50+), sunglasses, wide-brimmed hat
• Portable umbrella for afternoon thunderstorms
• Refillable water bottle—hydration is critical
• Light jacket for aggressive indoor AC

**Stadium Tip:** AT&T Stadium is climate-controlled with a retractable roof. You'll be comfortable inside regardless of outdoor temperatures.

**Essential Dallas Travel Tips**

**Currency:** US Dollar (USD). Credit cards widely accepted.

**Tipping:** 18-20% at restaurants, $1-2 per drink at bars, $2-5 per bag for hotel porters.

**Language:** English and Spanish widely spoken. Dallas is highly diverse.

**Safety:** Downtown, Uptown, Deep Ellum, and Arts District are safe and well-trafficked. Use common sense after dark in unfamiliar areas.

**Transportation Apps:** Uber and Lyft widely available. Download GoPass app for DART transit.

**Local Food Culture:** Portions are Texas-sized. Don't skip breakfast tacos, Tex-Mex, and BBQ brisket.

**Heat Advisory:** Take summer heat seriously. Drink water constantly, seek shade, pace yourself during midday.

**Power & Outlets:** 120V, Type A/B plugs (same as rest of USA).

**Emergency Numbers:** 911 for police, fire, medical emergencies.

**Best Museum Strategy:** Many museums offer free admission on specific days—check individual websites.

**Stadium Parking:** Book in advance. With 26,000 on-site spaces, parking fills fast on match days.

**Ready to Experience Dallas?**

From thunderous crowds at AT&T Stadium to world-class museums, from Deep Ellum's live music to brisket that'll change your life, Dallas delivers American soccer culture wrapped in Texas-sized hospitality. This isn't just a tournament stop—it's a city that invented "go big or go home."`
      }
    }

    // ... existing code ...

  };

  const city = cityData[cityId || ''];

  if (!city) {
    return (
      <div className="min-h-screen bg-white dark:bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">City Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">The city you're looking for doesn't exist or is coming soon.</p>
          <Link
            to="/cities"
            className="inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer px-6 py-3 text-base bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Host Cities
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    document.title = `${city.name} World Cup 2026 Guide - Complete Travel Information | StadiumPort`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `Complete ${city.name} World Cup 2026 travel guide. ${city.description} Find hotels, transportation, attractions, and insider tips.`);
    }
  }, [city]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://example.com' },
    { name: 'Host Cities', url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/cities` },
    { name: city.name, url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/cities/${cityId}` }
  ]);

  const cityGuideSchema = generateCityGuideSchema(
    `${city.name} World Cup 2026 Guide`,
    city.description,
    `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/cities/${cityId}`
  );

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={cityGuideSchema} />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={city.image}
          alt={`${city.name} World Cup 2026`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
            
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                to="/cities"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200 text-lg"
              >
                <i className="ri-arrow-left-line mr-3 text-xl"></i>
                Back to Host Cities
              </Link>
            </div>

            {/* Hero Content */}
            <div className="max-w-5xl">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl">{city.country}</span>
                <h1 className="font-space font-bold text-6xl md:text-8xl text-white drop-shadow-lg">
                  {city.name}
                </h1>
              </div>

              <div className="flex items-center space-x-8 text-white/90 text-xl mb-8">
                <div className="flex items-center">
                  <i className="ri-map-pin-line mr-3 text-2xl"></i>
                  <span className="font-semibold">{city.stadium}</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-group-line mr-3 text-2xl"></i>
                  <span className="font-semibold">{city.capacity}</span>
                </div>
              </div>

              <div className="inline-flex items-center space-x-3 bg-emerald-500/90 backdrop-blur-sm border border-emerald-400/30 rounded-full px-8 py-4 mb-8">
                <i className="ri-football-line text-white text-xl"></i>
                <span className="text-white font-bold text-lg">{city.matches}</span>
              </div>

              <p className="text-2xl text-white/95 leading-relaxed max-w-4xl font-medium">
                {city.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-slate-50 dark:bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview */}
          <div className="mb-20">
            <h2 className="font-space font-bold text-5xl text-navy-900 dark:text-white mb-12 text-center">
              Complete City Guide
            </h2>
            <div className="bg-white dark:bg-navy-900 rounded-3xl shadow-xl border border-slate-200 dark:border-navy-700 p-12">
              <div className="prose prose-xl max-w-none text-slate-600 dark:text-slate-400">
                {city.content?.overview?.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-8 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Expandable Sections */}
          <div className="space-y-8">
            
            {/* Stadium Section */}
            <div className="bg-white dark:bg-navy-900 rounded-3xl shadow-xl border border-slate-200 dark:border-navy-700 overflow-hidden">
              <button
                onClick={() => toggleSection('stadium')}
                className="w-full p-10 text-left hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center">
                      <i className="ri-building-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-2">
                        Stadium Information
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Everything about {city.stadium}
                      </p>
                    </div>
                  </div>
                  <i className={`ri-arrow-${expandedSection === 'stadium' ? 'up' : 'down'}-line text-3xl text-slate-400`}></i>
                </div>
              </button>
              
              {expandedSection === 'stadium' && (
                <div className="px-10 pb-10">
                  <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400">
                    {city.content?.stadium?.split('\n\n').map((paragraph: string, index: number) => (
                      <div key={index} className="mb-8">
                        {paragraph.includes('•') ? (
                          <ul className="list-disc list-inside space-y-3 text-lg">
                            {paragraph.split('\n').filter(line => line.includes('•')).map((item: string, itemIndex: number) => (
                              <li key={itemIndex} className="leading-relaxed">
                                {item.replace('• ', '')}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="leading-relaxed text-lg">{paragraph}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Transportation Section */}
            <div className="bg-white dark:bg-navy-900 rounded-3xl shadow-xl border border-slate-200 dark:border-navy-700 overflow-hidden">
              <button
                onClick={() => toggleSection('transportation')}
                className="w-full p-10 text-left hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                      <i className="ri-bus-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-2">
                        Transportation
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Getting around the city and to the stadium
                      </p>
                    </div>
                  </div>
                  <i className={`ri-arrow-${expandedSection === 'transportation' ? 'up' : 'down'}-line text-3xl text-slate-400`}></i>
                </div>
              </button>
              
              {expandedSection === 'transportation' && (
                <div className="px-10 pb-10">
                  <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400">
                    {city.content?.transportation?.split('\n\n').map((paragraph: string, index: number) => (
                      <div key={index} className="mb-8">
                        {paragraph.includes('**') ? (
                          <div>
                            <h4 className="font-bold text-navy-900 dark:text-white mb-4 text-xl">
                              {paragraph.split('**')[1]}
                            </h4>
                            {paragraph.includes('•') && (
                              <ul className="list-disc list-inside space-y-3 text-lg">
                                {paragraph.split('\n').filter(line => line.includes('•')).map((item: string, itemIndex: number) => (
                                  <li key={itemIndex} className="leading-relaxed">
                                    {item.replace('• ', '')}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : paragraph.includes('•') ? (
                          <ul className="list-disc list-inside space-y-3 text-lg">
                            {paragraph.split('\n').filter(line => line.includes('•')).map((item: string, itemIndex: number) => (
                              <li key={itemIndex} className="leading-relaxed">
                                {item.replace('• ', '')}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="leading-relaxed text-lg">{paragraph}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Accommodation Section */}
            <div className="bg-white dark:bg-navy-900 rounded-3xl shadow-xl border border-slate-200 dark:border-navy-700 overflow-hidden">
              <button
                onClick={() => toggleSection('accommodation')}
                className="w-full p-10 text-left hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                      <i className="ri-hotel-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-2">
                        Accommodation
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Where to stay during your visit
                      </p>
                    </div>
                  </div>
                  <i className={`ri-arrow-${expandedSection === 'accommodation' ? 'up' : 'down'}-line text-3xl text-slate-400`}></i>
                </div>
              </button>
              
              {expandedSection === 'accommodation' && (
                <div className="px-10 pb-10">
                  <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400">
                    {city.content?.accommodation?.split('\n\n').map((paragraph: string, index: number) => (
                      <div key={index} className="mb-8">
                        {paragraph.includes('**') ? (
                          <div>
                            <h4 className="font-bold text-navy-900 dark:text-white mb-4 text-xl">
                              {paragraph.split('**')[1]}
                            </h4>
                            {paragraph.includes('•') && (
                              <ul className="list-disc list-inside space-y-3 text-lg">
                                {paragraph.split('\n').filter(line => line.includes('•')).map((item: string, itemIndex: number) => (
                                  <li key={itemIndex} className="leading-relaxed">
                                    {item.replace('• ', '')}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : paragraph.includes('•') ? (
                          <ul className="list-disc list-inside space-y-3 text-lg">
                            {paragraph.split('\n').filter(line => line.includes('•')).map((item: string, itemIndex: number) => (
                              <li key={itemIndex} className="leading-relaxed">
                                {item.replace('• ', '')}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="leading-relaxed text-lg">{paragraph}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Attractions Section */}
            <div className="bg-white dark:bg-navy-900 rounded-3xl shadow-xl border border-slate-200 dark:border-navy-700 overflow-hidden">
              <button
                onClick={() => toggleSection('attractions')}
                className="w-full p-10 text-left hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                      <i className="ri-camera-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-2">
                        Attractions & Activities
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg">
                        What to see and do in {city.name}
                      </p>
                    </div>
                  </div>
                  <i className={`ri-arrow-${expandedSection === 'attractions' ? 'up' : 'down'}-line text-3xl text-slate-400`}></i>
                </div>
              </button>
              
              {expandedSection === 'attractions' && (
                <div className="px-10 pb-10">
                  <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400">
                    {city.content?.attractions?.split('\n\n').map((paragraph: string, index: number) => (
                      <div key={index} className="mb-8">
                        {paragraph.includes('**') ? (
                          <div>
                            <h4 className="font-bold text-navy-900 dark:text-white mb-4 text-xl">
                              {paragraph.split('**')[1]}
                            </h4>
                            {paragraph.includes('•') && (
                              <ul className="list-disc list-inside space-y-3 text-lg">
                                {paragraph.split('\n').filter(line => line.includes('•')).map((item: string, itemIndex: number) => (
                                  <li key={itemIndex} className="leading-relaxed">
                                    {item.replace('• ', '')}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : paragraph.includes('•') ? (
                          <ul className="list-disc list-inside space-y-3 text-lg">
                            {paragraph.split('\n').filter(line => line.includes('•')).map((item: string, itemIndex: number) => (
                              <li key={itemIndex} className="leading-relaxed">
                                {item.replace('• ', '')}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="leading-relaxed text-lg">{paragraph}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Local Tips Section */}
            <div className="bg-white dark:bg-navy-900 rounded-3xl shadow-xl border border-slate-200 dark:border-navy-700 overflow-hidden">
              <button
                onClick={() => toggleSection('localTips')}
                className="w-full p-10 text-left hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center">
                      <i className="ri-lightbulb-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-2">
                        Local Tips & Insights
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Insider knowledge for your visit
                      </p>
                    </div>
                  </div>
                  <i className={`ri-arrow-${expandedSection === 'localTips' ? 'up' : 'down'}-line text-3xl text-slate-400`}></i>
                </div>
              </button>
              
              {expandedSection === 'localTips' && (
                <div className="px-10 pb-10">
                  <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400">
                    {city.content?.localTips?.split('\n\n').map((paragraph: string, index: number) => (
                      <div key={index} className="mb-8">
                        {paragraph.includes('**') ? (
                          <div>
                            <h4 className="font-bold text-navy-900 dark:text-white mb-4 text-xl">
                              {paragraph.split('**')[1]}
                            </h4>
                            {paragraph.includes('•') && (
                              <ul className="list-disc list-inside space-y-3 text-lg">
                                {paragraph.split('\n').filter(line => line.includes('•')).map((item: string, itemIndex: number) => (
                                  <li key={itemIndex} className="leading-relaxed">
                                    {item.replace('• ', '')}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : paragraph.includes('•') ? (
                          <ul className="list-disc list-inside space-y-3 text-lg">
                            {paragraph.split('\n').filter(line => line.includes('•')).map((item: string, itemIndex: number) => (
                              <li key={itemIndex} className="leading-relaxed">
                                {item.replace('• ', '')}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="leading-relaxed text-lg">{paragraph}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Back to Cities Button */}
          <div className="text-center mt-20">
            <Link
              to="/cities"
              className="inline-flex items-center justify-center font-bold rounded-3xl transition-all duration-300 whitespace-nowrap cursor-pointer px-12 py-6 text-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <i className="ri-arrow-left-line mr-4 text-2xl"></i>
              Explore {city.name}
              <i className="ri-map-pin-line ml-4 text-2xl"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
