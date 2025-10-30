import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';

interface BCPlaceStadiumGuideProps {
  onClose?: () => void;
}

export const BCPlaceStadiumGuide: React.FC<BCPlaceStadiumGuideProps> = () => {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleExpanded = () => setExpanded((prev) => !prev);
  const handleGotItClick = () => navigate('/venues');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Header />

      {/* Collapsed Preview Card (MetLife/Azteca-style) */}
      {!expanded && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
            <div className="relative h-56 sm:h-72 md:h-80">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://readdy.ai/api/search-image?query=BC%20Place%20Vancouver%20retractable%20roof%20stadium%20with%20mountain%20and%20ocean%20backdrop%2C%20downtown%20Vancouver%20aerial%20view%2C%20dramatic%20lighting%2C%20Pacific%20Northwest%20atmosphere&width=1200&height=600&seq=bcplace-hero&orientation=landscape')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm">
                  BC Place Stadium: Your Ultimate 2026 FIFA World Cup Guide
                </h1>
                <p className="mt-2 text-white/90 max-w-3xl">
                  Where Mountains Meet Ocean Meet the Pitch
                </p>
              </div>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
                <div className="inline-flex items-center gap-2">
                  <i className="ri-map-pin-line text-emerald-500"></i>
                  <span>Downtown Vancouver, British Columbia</span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-2">
                  <i className="ri-group-line text-sky-500"></i>
                  <span>Capacity: 54,000 (World Cup configuration)</span>
                </div>
              </div>
              <button
                onClick={toggleExpanded}
                className="inline-flex items-center px-4 py-2 rounded-xl bg-navy-900 text-white hover:bg-navy-800 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                <i className="ri-book-open-line mr-2"></i>
                Read Full Guide
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Premium Guide (MetLife/Azteca header language) */}
      {expanded && (
        <div className="animate-fade-in pt-20">
          {/* Header Section — standardized */}
          <div className="bg-white dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900 p-8 md:p-12 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 dark:from-emerald-300 dark:to-sky-300 rounded-full animate-pulse"></div>
              <span className="text-emerald-500 dark:text-emerald-300 font-medium text-sm uppercase tracking-wider">FIFA World Cup 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              BC Place Stadium
            </h1>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-group-line text-xl text-emerald-400 dark:text-emerald-300"></i>
                <span className="font-semibold">54,000 capacity</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-map-pin-line text-xl text-sky-400 dark:text-sky-300"></i>
                <span>Vancouver, Canada</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <i className="ri-sun-line text-xl text-amber-400 dark:text-amber-300"></i>
                <span className="font-semibold">Cable-supported retractable roof</span>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            {/* Title tagline card (preserve exact text) */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                <i className="ri-trophy-line text-gold-400 dark:text-amber-300 text-4xl"></i>
                BC Place Stadium: Your Ultimate 2026 FIFA World Cup Guide
              </h2>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">Where Mountains Meet Ocean Meet the Pitch</h3>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>
                  There's something magical about watching world-class football under a retractable roof that opens to reveal snow-capped mountains and Pacific skies. BC Place isn't just another tournament venue—it's where Canada's World Cup dream becomes reality, where 54,000 fans will roar in a stadium that's hosted everything from Olympic glory to the Women's World Cup Final. Located in the beating heart of downtown Vancouver, this architectural marvel combines cutting-edge technology with West Coast soul, offering international fans an experience that's quintessentially Canadian: sophisticated, stunning, and accessible. When the world descends on Vancouver in June and July 2026, BC Place will prove why it's one of North America's most electrifying football venues.
                </p>
              </div>
            </div>

            {/* Stadium Overview & Fast Facts */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-information-line text-sky-400 dark:text-sky-300 text-4xl"></i>
                Stadium Overview & Fast Facts
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p><strong>Official Name:</strong> BC Place Stadium</p>
                <p><strong>Location:</strong> Downtown Vancouver, British Columbia (777 Pacific Boulevard)</p>
                <p><strong>Opened:</strong> June 19, 1983</p>
                <p><strong>Capacity:</strong> 54,000 (World Cup configuration)</p>
                <p><strong>Primary Tenants:</strong> Vancouver Whitecaps FC (MLS), BC Lions (CFL)</p>
                <p><strong>Original Architect:</strong> Studio Phillips Barratt, Ltd.</p>
                <p><strong>Renovation Architects (2010-2011):</strong> Stantec Architecture Ltd., Geiger Engineers</p>
                <p><strong>Surface Type:</strong> Natural grass (installed for World Cup, FIFA specification)</p>
                <p><strong>Roof Type:</strong> Cable-supported retractable roof (world's largest of its kind)</p>
                <p><strong>Roof Opening:</strong> 100m x 85m (7,500 square metres of open sky)</p>
                <p><strong>Notable Features:</strong> Second-largest centre-hung HD video board in North America, 36-foot LED exterior facade lighting, fully retractable in 20 minutes</p>
              </div>
            </div>

            {/* History & Legacy */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-time-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                History & Legacy
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>
                  When BC Place opened its doors in 1983, it featured the world's largest air-supported dome—a billowing white "marshmallow" that became Vancouver's most recognizable skyline feature. Built for Expo 86 and a then-staggering $126 million, the stadium launched with the Vancouver Whitecaps defeating Seattle 2-1 before 60,342 ecstatic fans. For nearly three decades, it defined Vancouver sports culture, hosting ten Grey Cup championships and countless concerts from U2 to The Rolling Stones.
                </p>
                <p>
                  The stadium's rebirth came between 2010 and 2011 with a transformative $563 million renovation. The aging air-supported roof was replaced with the world's largest cable-supported retractable roof system, inspired by Frankfurt's Commerzbank-Arena. This wasn't just cosmetic—the renovation breathed new life into the venue, improving acoustics, sightlines, and creating the bright, airy atmosphere that defines modern BC Place.
                </p>
                <p>
                  The venue has proven its World Cup credentials. In 2015, BC Place hosted the FIFA Women's World Cup Final, where the United States defeated Japan before a passionate crowd. The stadium also welcomed 61,600 spectators for the 2010 Winter Olympics Opening and Closing Ceremonies—the first Olympic Opening Ceremony held indoors. These moments cemented BC Place's reputation for delivering unforgettable sporting spectacles on the world stage.
                </p>
              </div>
            </div>

            {/* Stadium Architecture & Experience */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-building-3-line text-sky-400 dark:text-sky-300 text-4xl"></i>
                Stadium Architecture & Experience
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>
                  BC Place is architectural theatre. The retractable roof—supported by 18 suspension bridge-like structures—can open or close in just 20 minutes, revealing panoramic mountain and sky views when weather permits. When closed, the translucent Tenara fabric allows 40% light transmission, creating a naturally lit indoor environment unlike traditional domed stadiums. The exterior facade features ETFE panels that transform the building into a 36-foot LED canvas, illuminating downtown Vancouver with customizable light displays.
                </p>
                <p>
                  Inside, the seating bowl wraps tightly around the pitch in two main tiers, creating an intimate atmosphere despite the stadium's size. For World Cup 2026, the upper bowl will be fully configured (unlike Whitecaps matches where it's curtained), maximizing capacity and creating a wall of sound. Sightlines are excellent throughout—the steep rake brings fans close to the action, while the modern seating includes cup holders and comfortable spacing.
                </p>
                <p>
                  The stadium's centre-hung video board ranks as North America's second-largest, with the main panel measuring 68 feet by 38 feet—equivalent to 450 standard 42-inch TVs. Eight distinct colour-coded concourses help with wayfinding, while wide access ramps (no more rotating doors from the old dome days) improve crowd flow. Premium areas include Pacific Rim Suites, Club Lounges, and the newly renovated Edgewater Lounge and Field Club—hospitality upgrades made specifically for FIFA requirements.
                </p>
                <p>
                  Accessibility is comprehensive, with wheelchair seating platforms integrated throughout the bowl, family and universal washrooms on every level, Mamava lactation pods, and a dedicated accessible drop-off with direct elevator access.
                </p>
              </div>
            </div>

            {/* What Matches to Expect */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-calendar-event-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                What Matches to Expect
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>
                  Vancouver will host seven 2026 FIFA World Cup matches across three weeks—five group stage fixtures (June 13, 18, 21, 24, 26) and two knockout rounds (Round of 32 on July 2, Round of 16 on July 7). Expect at least two Canada national team matches, plus one featuring the United States, meaning BC Place will be ground zero for North American football fever.
                </p>
                <p>
                  Given BC Place's proven track record with major tournaments and Vancouver's multicultural population, atmosphere will be extraordinary. The city's diverse communities—with strong connections to every football-playing nation—guarantee that every match will feel like a home game for someone. The retractable roof means FIFA can create optimal conditions, whether that's an open-air summer evening or weather-protected intensity.
                </p>
                <p>
                  Matches are scheduled for 12:00, 15:00, 18:00, and 21:00 Pacific Time, with evening kickoffs likely offering the most spectacular visual experience as the roof opens to twilight skies. This will be only the second time Canada has hosted men's World Cup matches on home soil, making these fixtures genuinely historic moments.
                </p>
              </div>
            </div>

            {/* Getting to the Stadium */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-train-line text-sky-400 dark:text-sky-300 text-4xl"></i>
                Getting to the Stadium
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p><strong>By SkyTrain (Recommended):</strong> 
                Stadium-Chinatown Station on the Expo Line sits just 5 minutes' walk from BC Place's northern gates. Exit at Beatty Street, turn left, and gates A, B, and H are straight ahead. Alternatively, use the lower Expo Boulevard exit for a 5-minute walk to the stadium's south side. SkyTrain runs frequently from early morning until past 1:00 AM, with extended service on event nights. Travel time from downtown Waterfront Station: 4 minutes. From Vancouver International Airport (YVR): take the Canada Line to Waterfront, transfer to Expo Line—total journey approximately 35-40 minutes.</p>
                <p>Yaletown-Roundhouse Station (Canada Line) offers a 10-15 minute scenic walk through Yaletown's heritage warehouses and trendy restaurant district.</p>
                <p><em>Pro tip: Purchase a day pass or load funds onto a Compass Card before match day. Stadium-Chinatown gets extremely busy post-match—consider walking 5-10 minutes to Granville or Waterfront stations to avoid platform crowding.</em></p>

                <p><strong>By Bus:</strong> 
                Multiple TransLink routes service the area: Routes 5, 6, 17, 22, 23, 210, 211, 214, 250, and 257. Buses run frequently but expect delays during rush hours and major events. Check TransLink's trip planner at translink.ca for real-time updates and service adjustments.</p>

                <p><strong>By Car & Parking:</strong> 
                Parking downtown on match days is limited and expensive—lots closest to the stadium range from $10-$30. Plaza of Nations (across Pacific Boulevard) offers additional parking, but use the overhead walkway to cross safely. Alternative strategy: park at suburban SkyTrain stations (park-and-ride lots available at stations like Braid, Lougheed, or King George) and ride transit in—often faster and cheaper than downtown parking.</p>
                <p>Rideshare drop-off is at Parq Vancouver Casino, adjacent to the stadium. Expect surge pricing post-match and potential delays due to downtown traffic congestion. Pre-book your return ride or walk to a less congested pickup zone.</p>

                <p><strong>By Bike:</strong> 
                Complimentary secure bike parking provided by The Bicycle Valet operates at Gate C from gates opening until 30 minutes post-match.</p>

                <p><em>Airport Transfer Tip:</em> Consider booking private airport transfers through `http://booking.com`  or pre-arranging car rentals to explore Vancouver and surrounding areas between matches—the Sea-to-Sky Highway to Whistler is one of the world's most scenic drives.</p>
              </div>
            </div>

            {/* Where to Stay */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-hotel-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                Where to Stay
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p><strong>Downtown Core (Walking Distance):</strong> 
                Staying downtown puts you 10-20 minutes on foot from BC Place while immersing you in Vancouver's energy. The Georgian Court Hotel (just steps from the stadium) offers boutique elegance, while YWCA Hotel Vancouver provides excellent budget-friendly rooms within easy walking distance. Hampton Inn & Suites Vancouver Downtown delivers reliable mid-range comfort with modern amenities.</p>

                <p><strong>Yaletown (10-15 Minute Walk):</strong> 
                Vancouver's trendiest neighborhood combines heritage industrial architecture with upscale dining and nightlife. L'Hermitage Hotel and Rosedale on Robson Suite Hotel offer stylish accommodations with full kitchens—perfect for extended stays. Yaletown's pedestrian-friendly streets and Canada Line access make it ideal for blending stadium access with sightseeing.</p>

                <p><strong>Gastown (15-Minute Walk or Quick Transit):</strong> 
                Vancouver's oldest neighborhood features cobblestone streets, Victorian architecture, and exceptional restaurants. While accommodation options are limited compared to downtown, the location offers authentic Vancouver character and easy Stadium-Chinatown SkyTrain access.</p>

                <p><strong>Budget Options:</strong> 
                HI Vancouver Central and Samesun Vancouver provide hostel accommodations with private rooms available. Both offer social atmospheres perfect for meeting fellow football fans. Slightly outside downtown, these locations connect easily via transit.</p>

                <p><strong>Luxury Experiences:</strong> 
                JW Marriott Parq Vancouver and the DOUGLAS, Autograph Collection combine five-star service with proximity to BC Place (literally adjacent to the stadium). Fairmont Hotel Vancouver and Rosewood Hotel Georgia deliver historic grandeur with modern luxury in the downtown core.</p>

                <p><em>Booking Strategy:</em> Vancouver's peak summer tourism season coincides with the World Cup. Secure accommodation 6-12 months ahead through `http://booking.com`  or Expedia for best selection and rates. Consider Airbnb options in neighborhoods like Mount Pleasant or Main Street—just 10-15 minutes by transit but offering authentic local flavor at lower prices.</p>
              </div>
            </div>

            {/* Matchday Tips & Insider Advice */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-lightbulb-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                Matchday Tips & Insider Advice
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p><strong>Arrival Time:</strong> 
                Gates typically open 2 hours before kickoff. For World Cup matches, arrive 90 minutes early minimum—security screening will be thorough, lines will be long, and you'll want time to soak up the atmosphere. Evening matches during Vancouver's stunning summer twilight are worth experiencing from your seat as the sun sets over English Bay.</p>

                <p><strong>Best Gates & Entrances:</strong> 
                Gates A, B, and H (north side via Beatty Street from Stadium-Chinatown Station) handle the majority of crowd flow. For potentially shorter lines, try Gates F or G on the Pacific Boulevard side, though these require walking around the stadium perimeter.</p>

                <p><strong>Food & Drink:</strong> 
                BC Place is now a cashless venue—all concessions accept debit, credit, and digital payments only. A cash-to-card kiosk operates at Section 235 for currency exchange. Concession options range from classic stadium fare (burgers, hot dogs, nachos) to locally inspired items. Prices are typical stadium rates ($8-15 for food items, $12-16 for beer). Pro tip: eat a substantial meal beforehand at nearby restaurants—you'll save money and time.</p>

                <p>Outside food and beverages aren't permitted, except empty personal water bottles up to 1 liter (refill at fountains located throughout concourses). Water bottle tip: Stay hydrated—Vancouver summer days can be warm, especially if the roof is closed.</p>
              </div>
            </div>

            {/* What to Bring */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-suitcase-line text-emerald-400 dark:text-emerald-300 text-4xl"></i>
                What to Bring
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>BC Place enforces a clear bag policy: one clear bag up to approximately 12"x6"x12" or small clutch, plus medical/childcare items after inspection. Backpacks and large bags are prohibited. Ensure mobile tickets are downloaded before arrival—digital connectivity can be spotty with 54,000 people on networks.</p>

                <p>Weather preparation: Even in summer, bring a light jacket or sweater—Vancouver evenings cool down, and the roof being open means you're exposed to elements. Sunscreen, hat, and sunglasses recommended for day matches with open roof.</p>
              </div>
            </div>

            {/* What NOT to Do */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-close-circle-line text-rose-500 dark:text-rose-400 text-4xl"></i>
                What NOT to Do
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>No selfie sticks, no outside alcohol, no smoking anywhere inside gates. Cameras must be smaller than 6 inches with lens attached. Leave large electronics (laptops, tablets over 12"x12"x6") at your accommodation. No re-entry once you've entered the stadium.</p>
              </div>
            </div>

            {/* Post-Match Transport */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-navigation-line text-sky-400 dark:text-sky-300 text-4xl"></i>
                Post-Match Transport
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>Stadium-Chinatown Station gets absolutely mobbed post-match. Smart alternatives: walk 10 minutes to Granville or Waterfront stations, or head to Yaletown-Roundhouse via the scenic False Creek seawall walk. If using rideshare, walk several blocks away from the immediate stadium area to avoid surge pricing and traffic gridlock—try pickup locations near Yaletown or along Robson Street.</p>
              </div>
            </div>

            {/* Things to Do Nearby */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-compass-3-line text-amber-400 dark:text-amber-300 text-4xl"></i>
                Things to Do Nearby
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Pre-Match Atmosphere:</h3>
                <p>Terry Fox Plaza (immediately outside BC Place) will likely host FIFA Fan Festival activities and big-screen viewing areas. Arrive early to experience the global football party. Parq Vancouver Casino offers dining and entertainment options steps from the stadium.</p>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Yaletown (10-Minute Walk):</h3>
                <p>Explore this converted warehouse district's trendy restaurants and breweries. The Yaletown Keg features a year-round rooftop patio with stadium views, while craft beer enthusiasts should visit Yaletown Brewing Company. Pre-match options range from quick tacos at Tacofino to upscale Italian at Robba da Matti.</p>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Gastown (15 Minutes):</h3>
                <p>Vancouver's historic heart features cobblestone streets, the famous steam clock, and exceptional dining. Alibi Room draws locals with 50+ craft beers, while L'Abattoir delivers French-West Coast fusion in a stunning historic building. Save Gastown exploration for post-match celebrations—its bars and restaurants stay lively late.</p>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">False Creek Seawall:</h3>
                <p>This waterfront pedestrian path connects BC Place to Granville Island Public Market (20-minute walk)—perfect for pre-match food shopping or post-match sunset strolls. Water taxis provide scenic transit across False Creek.</p>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Nearby Attractions:</h3>
                <p>Science World geodesic dome (15-minute walk) offers interactive exhibits. Rogers Arena, home of the Vancouver Canucks, sits adjacent to BC Place. Vancouver Public Library's stunning Colosseum-inspired architecture (5-minute walk) provides a unique photo backdrop.</p>

                <p><strong>Activity Booking Tip:</strong> Consider booking a `http://booking.com`  or Vancouver City Tour for non-match days—these experiences showcase Vancouver's culinary diversity and stunning natural setting. Grouse Mountain gondola rides and Capilano Suspension Bridge offer breathtaking nature experiences just 30 minutes from downtown.</p>
              </div>
            </div>

            {/* PART 4: New Section Title 1 */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-football-line text-blue-500 dark:text-blue-400 text-4xl"></i>
                PART 4: New Section Title 1
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>
                  This is placeholder content for PART 4 of the BC Place guide. The actual content will be integrated here later.
                </p>
              </div>
            </div>

            {/* PART 5: New Section Title 2 */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-trophy-line text-purple-500 dark:text-purple-400 text-4xl"></i>
                PART 5: New Section Title 2
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>
                  This is placeholder content for PART 5 of the BC Place guide. The actual content will be integrated here later.
                </p>
              </div>
            </div>

            {/* Final Verdict & Key Takeaway */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                <i className="ri-check-double-line text-emerald-500 dark:text-emerald-400 text-4xl"></i>
                Final Verdict & Key Takeaway
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert text-slate-700 dark:text-slate-200">
                <p>BC Place delivers everything a World Cup venue should: world-class infrastructure, electric atmosphere, stunning architecture, and seamless urban integration. Unlike stadiums marooned in parking lots, BC Place sits in Vancouver's vibrant downtown core, surrounded by restaurants, hotels, transit, and entertainment. The retractable roof adds a "wow factor" few venues can match—the moment those massive panels pull back to reveal mountains and sky creates an unforgettable connection between football and Vancouver's natural magnificence.</p>

                <p>This stadium is perfect for fans who want the complete World Cup experience: arrive by efficient transit, explore world-class dining and culture, watch football in a technologically advanced venue, then celebrate victory (or commiserate defeat) in nearby bars and restaurants—all without ever needing a car. Vancouver's legendary hospitality, combined with Canada's genuine excitement about hosting the World Cup, guarantees BC Place will be one of 2026's most memorable venues.</p>

                <p>The one unforgettable moment? Being inside BC Place when Canada's national team takes the pitch. The stadium holds the record for largest attendance for any Canadian national team event (any sport, men's or women's), and the atmosphere when 54,000 fans sing "O Canada" will give you goosebumps you'll remember forever.</p>

                <p><strong>Book early.</strong> Vancouver's summer peak tourism season coincides with the World Cup, and accommodation near transit lines fills quickly. Secure your `http://booking.com`  and start planning your Vancouver adventure now—this isn't just about watching world-class football; it's about experiencing one of the planet's most beautiful cities at its proudest moment.</p>

                <p><em>See you under the retractable roof.</em></p>
              </div>
            </div>

            {/* Bottom Controls — single premium button aligned right */}
            <div className="flex justify-end mt-8">
              <button
                onClick={handleGotItClick}
                className="relative inline-flex items-center justify-center font-semibold rounded-3xl transition-all duration-700 whitespace-nowrap cursor-pointer overflow-hidden focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group font-inter ultra-premium-focus hover:scale-105 active:scale-95 hover:-translate-y-1 transform-gpu will-change-transform bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-700 focus:ring-emerald-500/30 shadow-premium hover:shadow-premium-lg border border-emerald-400/20 px-6 py-3"
              >
                <i className="ri-check-line mr-2"></i>
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};