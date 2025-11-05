
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateCityGuideSchema, generateBreadcrumbSchema, generateImageObjectSchema } from '../../../components/seo/SchemaOrg';
import { OptimizedImage } from '../../../components/base/OptimizedImage';
import { KansasCityCityGuide } from '../components/KansasCityCityGuide';
import { AtlantaCityGuide } from '../components/AtlantaCityGuide';
import { PhiladelphiaCityGuide } from '../components/PhiladelphiaCityGuide';
import { SeattleCityGuide } from '../components/SeattleCityGuide';
import { SanFranciscoCityGuide } from '../components/SanFranciscoCityGuide';
import { BostonCityGuide } from '../components/BostonCityGuide';
import { TorontoCityGuide } from '../components/TorontoCityGuide';
import { VancouverCityGuide } from '../components/VancouverCityGuide';
import { MexicoCityGuide } from '../components/MexicoCityGuide';
import { GuadalajaraCityGuide } from '../components/GuadalajaraCityGuide';
import { MonterreyCityGuide } from '../components/MonterreyCityGuide';

export default function CityDetailPage() {
  const { cityId } = useParams<{ cityId: string }>();
  // Normalize route param to ensure robust matching
  const normalizedId = (cityId || '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cityId]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Kansas City City Guide - Part 1/5 Implementation
  if (normalizedId === 'kansas-city') {
    return <KansasCityCityGuide />;
  }

  // Atlanta City Guide - Part 1/5 Implementation
  if (normalizedId === 'atlanta') {
    return <AtlantaCityGuide />;
  }

  // Philadelphia City Guide - Part 1/5 Implementation
  if (normalizedId === 'philadelphia') {
    return <PhiladelphiaCityGuide />;
  }

  // Seattle City Guide - Part 1/5 Implementation
  if (normalizedId === 'seattle') {
    return <SeattleCityGuide />;
  }

  // San Francisco City Guide - Part 1/5 Implementation
  if (normalizedId === 'san-francisco') {
    return <SanFranciscoCityGuide />;
  }

  // Boston City Guide - Part 1/5 Implementation
  if (normalizedId === 'boston') {
    return <BostonCityGuide />;
  }

  // Toronto City Guide - Part 1/5 Implementation
  if (normalizedId === 'toronto') {
    return <TorontoCityGuide />;
  }

  // Vancouver City Guide - Part 1/5 Implementation
  if (normalizedId === 'vancouver') {
    return <VancouverCityGuide />;
  }

  // Mexico City City Guide - Part 1/5 Implementation
  if (normalizedId === 'mexico-city') {
    return <MexicoCityGuide />;
  }

  // Guadalajara City Guide - Part 1/5 Implementation
  if (normalizedId === 'guadalajara') {
    return <GuadalajaraCityGuide />;
  }

  // Monterrey City Guide - Part 1/5 Implementation
  if (normalizedId === 'monterrey') {
    return <MonterreyCityGuide />;
  }

  // Houston City Guide - Part 1/5 Implementation
  if (normalizedId === 'houston') {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
        <Header />
        <SchemaOrg
          schema={[
            generateCityGuideSchema(
              'Houston – World Cup 2026 Guide',
              'Comprehensive Houston travel guide for FIFA World Cup 2026: NRG Stadium details, match schedule, transportation, and where to stay.',
              `${import.meta.env.VITE_SITE_URL || 'http://localhost:3000'}/world-cup-2026-cities/houston`
            ),
            generateBreadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Host Cities', url: '/world-cup-2026-cities' },
              { name: 'Houston', url: '/world-cup-2026-cities/houston' }
            ]),
            generateImageObjectSchema('/images/cities/houston-world-cup-2026.webp', {
              width: 1600,
              height: 900,
              caption: 'Houston skyline – World Cup 2026'
            })
          ]}
        />
        
        {/* Editorial Hero — cohesive with NYC guide styling */}
        <section className="editorial-hero">
          <div className="editorial-hero-media">
            <OptimizedImage
              src="/images/cities/houston-world-cup-2026.webp"
              alt="Houston skyline – World Cup 2026"
              className="editorial-hero-image-wrapper"
              imgClassName="editorial-hero-image"
              width={1600}
              height={900}
              priority={true}
              placeholder="blur"
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
              <h1 className="editorial-hero-title">Houston</h1>
              <div className="editorial-hero-meta">
                <div className="meta-item flex items-center gap-2">
                  <i className="ri-map-pin-line"></i>
                  <span>Houston, Texas</span>
                </div>
                <div className="meta-item flex items-center gap-2">
                  <i className="ri-building-line"></i>
                  <span>NRG Stadium</span>
                </div>
                <div className="meta-item flex items-center gap-2">
                  <i className="ri-group-line"></i>
                  <span>72,220 capacity</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content — Editorial presentation aligned with NYC */}
        <main className="editorial-article py-12">
          
          {/* Introduction Section */}
          <article className="editorial-body editorial-dropcap">
            <h2 className="editorial-h2 animate-fade-up mb-4 flex items-center gap-3">
              <i className="ri-star-line text-emerald-500"></i>
              Space City Takes Center Stage on Football's Biggest Stage
            </h2>
            <div>
              <p className="leading-relaxed mb-6">
                Everything's bigger in Texas—including the welcome Houston is about to roll out for the 2026 FIFA World Cup. From June 14 through July 4, NRG Stadium will host seven matches in what promises to be one of the tournament's most electric atmospheres. This isn't Houston's first rodeo with major events (Super Bowls, Final Fours, and the Copa América have all called this place home), but hosting the World Cup brings something different: the entire planet showing up at once, bringing every imaginable language, culture, and football tradition straight to the heart of Texas.
              </p>
              <p className="leading-relaxed mb-6">
                If you've never been to Houston, prepare to have your assumptions shattered. This is America's most diverse city, where you'll hear more languages spoken than anywhere else in the U.S., where authentic food from every continent sits on every street corner, and where the term "Southern hospitality" gets supercharged by Texan pride and international flair. Match that energy with NRG Stadium's retractable roof that can open or close in just seven minutes, air conditioning that makes 100-degree days irrelevant, and you've got the perfect recipe for an unforgettable World Cup experience.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* The Stadium: NRG Stadium (Houston Stadium for FIFA 2026) */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <i className="ri-building-line text-emerald-500"></i>
              The Stadium: NRG Stadium (Houston Stadium for FIFA 2026)
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-star-line text-emerald-500"></i>
                  Texas-Sized Venue, World-Class Experience
                </h3>
                <div>
                  <p className="leading-relaxed mb-6">
                    NRG Stadium opened in 2002 at a cost of $352 million and has a seating capacity of 72,220, making it one of the largest and most versatile venues in the United States. It was the first NFL facility to have a retractable roof—a game-changer for Houston's unpredictable summer weather and blazing heat.
                  </p>
                  
                  <p className="leading-relaxed">
                    During the World Cup, FIFA will refer to the venue as "Houston Stadium" due to sponsorship guidelines. The stadium has undergone specific upgrades for the tournament, including new chillers, LED lights, upgrades to parking lots and adding in a grass field, which is expected to be installed after the 2026 Rodeo season.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-calendar-event-line text-emerald-500"></i>
                  Match Schedule at NRG Stadium
                </h3>
                <div>
                  <p className="leading-relaxed mb-6">
                    Houston will host five group stage matches and two knockout round games, beginning June 14 and running through Independence Day—yes, the city will be celebrating July 4th with a Round of 16 knockout match, adding American fireworks to global football fever.
                  </p>
                  <div className="space-y-2 mb-6">
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-calendar-check-line text-emerald-500"></i>
                      Match Dates:
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <i className="ri-checkbox-circle-line text-emerald-500"></i>
                        <span><strong>Group Stage</strong>: June 14, 17, 20, 23, 26</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-checkbox-circle-line text-emerald-500"></i>
                        <span><strong>Round of 32</strong>: June 29</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-checkbox-circle-line text-emerald-500"></i>
                        <span><strong>Round of 16</strong>: July 4, 2026</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="leading-relaxed">
                    That Independence Day game will be the last one to take place in Houston for the tournament. Imagine experiencing World Cup knockout football while the entire country celebrates its birthday—that's the kind of collision of cultures and celebrations only Houston can deliver.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-star-line text-emerald-500"></i>
                  What Makes This Stadium Special
                </h3>
                <div>
                  <p className="leading-relaxed mb-6">
                    NRG Stadium isn't just about football. The stadium has hosted six Super Bowls, major soccer friendlies, and concerts featuring Taylor Swift, Beyoncé, and the Rolling Stones. It's also the permanent home of the Houston Livestock Show and Rodeo, the world's largest livestock exhibition, which draws over two million visitors annually.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    But here's what matters for World Cup fans: the stadium's retractable, fabric roof provides a very flexible rigging configuration for major audio and visual presentations, and the climate control means you'll be comfortable even when it's 95°F outside. The stadium boasts a retractable roof, essential air-conditioning (a Texas necessity!), and seating for over 70,000 spectators.
                  </p>
                  
                  <p className="leading-relaxed">
                    The venue sits in NRG Park, conveniently served by Houston's METRORail (Stadium Park/Astrodome station), making it genuinely accessible from downtown and surrounding neighborhoods.
                  </p>
                </div>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Transportation Section */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <i className="ri-plane-line text-emerald-500"></i>
              Getting There: Transportation Made Easy
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-plane-line text-emerald-500"></i>
                  From the Airports
                </h3>
                <div>
                  <p className="leading-relaxed mb-6">
                    Houston is served by two major airports, both with excellent international connections:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                        <i className="ri-plane-line text-emerald-500"></i>
                        George Bush Intercontinental Airport (IAH)
                      </h4>
                      <p>
                        Located approximately 22 miles north of downtown Houston, this is the primary international gateway with flights connecting to over 180 countries
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                        <i className="ri-plane-line text-emerald-500"></i>
                        William P. Hobby Airport (HOU)
                      </h4>
                      <p>
                        Located 11 miles southeast of downtown Houston, mainly serving domestic and some Latin American destinations
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-subway-line text-emerald-500"></i>
                  Getting to NRG Stadium from Downtown
                </h3>
                <div>
                  <div className="mb-6">
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-train-line text-emerald-500"></i>
                      METRORail (The Best Budget Option)
                    </h4>
                    <p className="mb-4">
                      NRG Stadium is conveniently served by Houston's METRORail (Stadium Park/Astrodome station). The Red Line runs from downtown Houston through the Museum District and Medical Center directly to the stadium. On match days, expect trains running frequently with additional service.
                    </p>
                    <p>
                      Below are fares to ride. Discounted fares apply to students, seniors 65-69, or people with disabilities. A single ride costs $1.25, making it one of the most affordable World Cup stadium transportation options in North America. Consider purchasing a day pass for unlimited rides.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <i className="ri-plane-line text-emerald-500 text-xl mt-1"></i>
                      <div>
                        <h4 className="editorial-h4 mb-2">From IAH Airport to NRG Stadium</h4>
                        <p>
                          METRO's 102 Bush IAH Express provides service to and from George Bush Intercontinental Airport approximately every 30 minutes, taking you to downtown where you can transfer to the Red Line toward NRG Stadium. Total journey time: approximately 90 minutes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <i className="ri-plane-line text-emerald-500 text-xl mt-1"></i>
                      <div>
                        <h4 className="editorial-h4 mb-2">From Hobby Airport to NRG Stadium</h4>
                        <p>
                          METRO Bus 40 provides local service and continues to downtown Houston. From downtown, catch the METRORail Red Line to Stadium Park/Astrodome station. Transit time to downtown can run one hour, plus another 30 minutes on the rail.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <i className="ri-taxi-line text-emerald-500 text-xl mt-1"></i>
                      <div>
                        <h4 className="editorial-h4 mb-2">Rideshares and Taxis</h4>
                        <p>
                          Uber and Lyft operate throughout Houston with reliable service. Expect surge pricing on match days, particularly in the hours before kickoff and immediately after the final whistle. Budget $25-40 from downtown hotels to NRG Stadium.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-lightbulb-line text-emerald-500"></i>
                      Pro Traveler Tip
                    </h4>
                    <p>
                      Download the METRO app before you arrive. Houston's public transit is straightforward, affordable, and air-conditioned—essential when dealing with summer heat. Plan to arrive at least 90 minutes before kickoff to undergo security checks and explore the vibrant fan zones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Accommodation Section */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <i className="ri-hotel-line text-emerald-500"></i>
              Where to Stay: Neighborhood Guide for World Cup Visitors
            </h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Houston is massive—849 square miles—but most visitors gravitate toward a handful of walkable, well-connected neighborhoods. Here's where to base yourself.
              </p>
            </div>

            <div className="space-y-8">
              {/* Downtown Houston */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-building-2-line text-emerald-500"></i>
                  Downtown Houston: Maximum Convenience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="editorial-h4 mb-2">Why Stay Here</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      Direct METRORail access to NRG Stadium, walking distance to theater district and dining, and the energy of the city's core. Downtown transforms on match days with fan zones and spontaneous celebrations.
                    </p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2">Hotel Options</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      The JW Marriott Houston Downtown and Four Seasons Hotel Houston offer luxury with prime locations. For mid-range comfort, the Cambria Hotel Houston Downtown Convention Center puts you near George R. Brown Convention Center and Discovery Green park.
                    </p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2">Perfect For</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      Business travelers, visitors who want to be in the thick of the action, and anyone who values transit convenience over neighborhood charm.
                    </p>
                  </div>
                  <div className="mt-2">
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-bookmark-line text-emerald-500"></i>
                      Book Smart
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 mb-2">
                      Expect premium pricing during World Cup weeks. Reservations should be made 6-12 months in advance. Use <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.booking.com</a> or <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.hotels.com</a> to compare rates and find package deals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Midtown */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-community-line text-emerald-500"></i>
                  Midtown: Trendy and Transit-Connected
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="editorial-h4 mb-2">Why Stay Here</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      Just south of downtown, Midtown offers a younger vibe with craft breweries, indie restaurants, and a thriving arts scene. The METRORail Red Line runs straight through Midtown to NRG Stadium.
                    </p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2">What You'll Find</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      Midtown brims with trendy bars, craft breweries, and diverse eateries offering everything from Texas BBQ to international cuisine. The neighborhood is home to the Ensemble Theatre and the Midtown Arts & Theater Center Houston (MATCH).
                    </p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2">Perfect For</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      Travelers in their 20s-40s, groups wanting nightlife options, and anyone seeking a more local, less corporate hotel experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Galleria/Uptown */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-shopping-bag-line text-emerald-500"></i>
                  The Galleria/Uptown: Shop, Dine, Luxuriate
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="editorial-h4 mb-2">Why Stay Here</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      If you're combining World Cup matches with luxury shopping and high-end dining, this is your neighborhood. The Galleria is America's fourth-largest mall, and the surrounding area offers some of Houston's best restaurants.
                    </p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2">Hotel Options</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      The Post Oak Hotel at Uptown is Houston's only Forbes Five-Star hotel. For value near luxury, the Hilton Houston Post Oak by the Galleria sits half a mile from The Galleria with easy highway access.
                    </p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2">Perfect For</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      Families wanting more space, shoppers, and travelers seeking upscale accommodations outside downtown's density.
                    </p>
                  </div>
                  <div className="mt-2">
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-car-line text-emerald-500"></i>
                      Getting to Matches
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      You'll need a rideshare or rental car from this area, as it's about 15 minutes from NRG Stadium by car. Budget extra time on match days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Heights/Montrose */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-leaf-line text-emerald-500"></i>
                  Heights/Montrose: Local Flavor, Character-Filled
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="editorial-h4 mb-2">Why Stay Here</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      These adjacent neighborhoods northwest of downtown offer tree-lined streets, Victorian homes converted to boutiques and cafés, and Houston's best independent restaurant scene. Think Brooklyn or Portland vibes in the heart of Texas.
                    </p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2">Food Scene</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      This is where locals eat. From brunch spots to craft cocktail bars, you'll find Houston's most creative dining in these neighborhoods.
                    </p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2">Perfect For</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      Foodies, couples, and travelers who prioritize neighborhood exploration over proximity to tourist attractions.
                    </p>
                  </div>
                  <div className="mt-2">
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-subway-line text-emerald-500"></i>
                      Transit Note
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      You'll need rideshares to reach NRG Stadium from Heights/Montrose, but both neighborhoods connect to downtown via bus or bike.
                    </p>
                  </div>
                </div>
              </div>

              {/* Near NRG Stadium */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-hospital-line text-emerald-500"></i>
                  Near NRG Stadium: Medical Center Area
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="editorial-h4 mb-2">Why Stay Here</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      If attending multiple matches or prioritizing proximity to the stadium, consider hotels near the Texas Medical Center. Several mid-range chains offer good value and you're literally minutes from kickoff.
                    </p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2">Trade-Off</h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      You'll sacrifice walkable dining and nightlife for convenience to the stadium. Great for families, groups attending multiple matches, or anyone on a tighter budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Attractions Section */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <i className="ri-compass-line text-emerald-500"></i>
              Beyond the Match: What to Do in Houston
            </h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Let's be real—Houston doesn't have the Eiffel Tower or Big Ben. But what it does have is authenticity, diversity, and experiences you won't find anywhere else.
              </p>
            </div>

            <div className="space-y-8">
              {/* Space Center Houston */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-rocket-line text-emerald-500"></i>
                  Space Center Houston: NASA's Crown Jewel
                </h3>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Space Center Houston is a science museum that serves as the official visitor center of NASA Johnson Space Center, displaying over 400 space artifacts, including the Mercury 9, Gemini 5, and Apollo 17 flown space capsules.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    The NASA Tram Tour is included in general admission and takes guests to see the enormous Saturn V rocket at Rocket Park as well as across the 650-hectare campus, including the historic Mission Control room (the "Houston" in "Houston, we have a problem").
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                        <i className="ri-map-pin-line text-emerald-500"></i>
                        Logistics
                      </h4>
                      <p className="text-slate-700 dark:text-slate-200 text-sm">
                        Located about 30 minutes southeast of downtown. Tickets to Space Center Houston start at $29.95 for adults (12 and older), $27.95 for seniors and $24.95 for children ages 4 to 11. Budget 4-5 hours for the full experience, including tram tours.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                        <i className="ri-lightbulb-line text-emerald-500"></i>
                        Pro Tip
                      </h4>
                      <p className="text-slate-700 dark:text-slate-200 text-sm">
                        Get in line as soon as you arrive at the center for tram tours as they fill up quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Museum District */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-gallery-line text-emerald-500"></i>
                  The Museum District: World-Class Culture
                </h3>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Houston's expansive Museum District features 19 museums in four walkable zones, which include popular spots like the Houston Museum of Natural Science, the Contemporary Arts Museum Houston, The Menil Collection and The Museum of Fine Arts, Houston.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Consider visiting on a Thursday, when many of the museums offer free admission in the afternoon and evening. The district is directly served by the METRORail Red Line, making it easy to hop between venues.
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-time-line text-emerald-500"></i>
                      Budget Time
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200">
                      You could spend an entire day (or three) exploring world-class art, natural history exhibits, and cutting-edge contemporary galleries. The Menil Collection, housed in a Renzo Piano-designed building, is always free.
                    </p>
                  </div>
                </div>
              </div>

              {/* Buffalo Bayou Park */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-tree-line text-emerald-500"></i>
                  Buffalo Bayou Park: Houston's Green Heart
                </h3>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Houston's green heart—160 acres of trails, kayaking, and outdoor art installations with stunning views of the downtown skyline.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                        <i className="ri-run-line text-emerald-500"></i>
                        Activities
                      </h4>
                      <p className="text-slate-700 dark:text-slate-200 text-sm">
                        Kayak rentals, hiking/biking trails, outdoor fitness equipment
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                        <i className="ri-camera-line text-emerald-500"></i>
                        Best Views
                      </h4>
                      <p className="text-slate-700 dark:text-slate-200 text-sm">
                        Police Officers Memorial and Rosemont Bridge
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-time-line text-emerald-500"></i>
                      When to Go
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">
                      Early morning or late afternoon to avoid peak heat. Sunset views of the downtown skyline are spectacular.
                    </p>
                  </div>
                </div>
              </div>

              {/* Day Trip to Galveston */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-ship-line text-emerald-500"></i>
                  Day Trip to Galveston
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  If you have a rest day between matches, drive an hour southeast to Galveston Island for Gulf Coast beaches, historic architecture, and seafood straight off the boat. It's the perfect counterpoint to big-city Houston.
                </p>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Food Scene Section */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <i className="ri-restaurant-line text-emerald-500"></i>
              Food: From Food Trucks to Michelin-Level Excellence
            </h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Houston's food scene rivals any city in America for diversity and quality. This is a place where you can eat your way around the world without leaving a five-mile radius.
              </p>
            </div>

            <div className="space-y-8">
              {/* BBQ Section */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-2">
                  <i className="ri-fire-line text-emerald-500"></i>
                  BBQ: The Texas Way
                </h3>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Pappas Bar-B-Q</h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">Multiple locations serving mesquite-smoked brisket, ribs, and sausage. It's accessible, affordable, and genuinely good.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Goode Company Barbeque</h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">Celebrating deep intermingling of cultures and cuisines, Goode Company has been serving mesquite-smoked BBQ since 1977 with multiple locations and a relaxed, Texas-casual atmosphere.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">The Pit Room</h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">Located in Montrose, this spot brings Central Texas-style BBQ (post oak-smoked brisket, pork ribs) with modern twists and craft beer.</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-restaurant-2-line text-emerald-500"></i>
                    What to Order
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 text-sm">Start with brisket—it's the benchmark of Texas BBQ. Add jalapeño-cheese sausage, pork ribs, and sides like mac and cheese or jalapeño creamed corn.</p>
                </div>
              </div>

              {/* Tex-Mex Section */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-heart-line text-emerald-500"></i>
                  Tex-Mex: Houston's Soul Food
                </h3>
                
                <div className="mb-6">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Tex-Mex isn't Mexican food—it's its own glorious category, born in Texas with influences from both sides of the border. Houston does it better than anywhere.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">The Original Ninfa's on Navigation</h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">Celebrated for its authentic Tex-Mex cuisine that has set the standard for over 50 years, this iconic establishment is revered for its legendary fajitas, tacos al carbon, and mouthwatering enchiladas.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Candente</h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">Houston's only Tex-Mex restaurant in the Michelin Guide serves wood-grilled meats, classic Tex-Mex enchiladas, and signature birria tacos in Montrose with a modern, elevated approach.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">El Tiempo Cantina</h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">Multiple locations serving sizzling fajitas, tableside guacamole, and margaritas that pack a punch. This is where locals celebrate.</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-restaurant-2-line text-emerald-500"></i>
                    What to Order
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 text-sm">Beef fajitas (cooked over mesquite), cheese enchiladas with chili con carne, tableside guacamole, and a frozen margarita. Queso (melted cheese dip) is mandatory.</p>
                </div>
              </div>

              {/* Beyond BBQ and Tex-Mex */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-global-line text-emerald-500"></i>
                  Beyond BBQ and Tex-Mex
                </h3>
                
                <div className="mb-6">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Houston's food scene extends far beyond its two most famous categories:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Vietnamese</h4>
                        <p className="text-slate-700 dark:text-slate-200 text-sm">Houston has one of the largest Vietnamese populations outside Vietnam. Head to Midtown or the Bellaire Chinatown area for phenomenal phở and bánh mì.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Indian</h4>
                        <p className="text-slate-700 dark:text-slate-200 text-sm">The Hillcroft area southwest of downtown is Houston's Little India, packed with authentic restaurants and grocery stores.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Soul Food/Southern</h4>
                        <p className="text-slate-700 dark:text-slate-200 text-sm">This Sassy Soul Café and Lucille's offer fried chicken, shrimp and grits, and collard greens that'll make you understand Southern comfort food.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">International Food Trucks</h4>
                        <p className="text-slate-700 dark:text-slate-200 text-sm">From Nigerian to Peruvian to Korean, Houston's food truck scene brings the world to street corners across the city.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-emerald-500"></i>
                    Foodie Strategy
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 text-sm">Eat breakfast tacos from a neighborhood truck, lunch at a BBQ joint, and dinner at a Tex-Mex institution. Repeat for seven days and you'll barely scratch the surface.</p>
                </div>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Weather & Packing Section */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <i className="ri-sun-line text-emerald-500"></i>
              Weather & What to Pack
            </h2>

            <div className="space-y-8">
              {/* June and July Weather */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-temp-hot-line text-emerald-500"></i>
                  June and July in Houston: Embrace the Heat
                </h3>
                
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Let's not sugarcoat it: Houston in summer is hot and humid. But the stadium has air conditioning, hotels are climate-controlled, and locals have perfected the art of staying comfortable.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Houston summers, from June through August, are characterized as hot and humid, with temperatures that can exceed 100 degrees at times. High temperatures are in the 90s, and the lows are in the low to mid-70s.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-calendar-line text-emerald-500"></i>
                      June Weather
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">
                      Houston averages 82°F in June with high temperatures reaching 90°F and lows around 73°F. Humidity can reach up to 90% in the mornings. June is the wettest month of the year in Houston, with an average rainfall of 5.93 inches, meaning afternoon thunderstorms are common.
                    </p>
                  </div>
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-calendar-line text-emerald-500"></i>
                      July Weather
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">
                      In July, average temperatures record a high of 93.4°F (34.1°C) and a low of 77.2°F (25.1°C). July offers the year's sunniest weather for Houston, with intense sunshine and high humidity creating a heat index that makes it feel even hotter.
                    </p>
                  </div>
                </div>
              </div>

              {/* What This Means for You */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-suitcase-line text-emerald-500"></i>
                  What This Means for You
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                        <i className="ri-shirt-line text-emerald-500"></i>
                        Clothing
                      </h4>
                      <p className="text-slate-700 dark:text-slate-200 text-sm">Light, breathable fabrics (cotton, linen, moisture-wicking synthetics). Shorts and t-shirts are standard. Dress codes are relaxed in Houston—even nice restaurants rarely require more than "smart casual."</p>
                    </div>
                    <div>
                      <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                        <i className="ri-sun-cloudy-line text-emerald-500"></i>
                        Sun Protection
                      </h4>
                      <p className="text-slate-700 dark:text-slate-200 text-sm">Sunglasses, sunscreen (SPF 30+), and a hat are essential for any outdoor time. The sun is intense.</p>
                    </div>
                    <div>
                      <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                        <i className="ri-umbrella-line text-emerald-500"></i>
                        Rain Gear
                      </h4>
                      <p className="text-slate-700 dark:text-slate-200 text-sm">Pack a compact umbrella or light rain jacket for afternoon thunderstorms, especially in June.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                        <i className="ri-t-shirt-air-line text-emerald-500"></i>
                        Layers
                      </h4>
                      <p className="text-slate-700 dark:text-slate-200 text-sm">Bring one light jacket or long-sleeve shirt. Indoor air conditioning can be aggressive, and the contrast from 95°F outside to 68°F inside is jarring.</p>
                    </div>
                    <div>
                      <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                        <i className="ri-drop-line text-emerald-500"></i>
                        Hydration
                      </h4>
                      <p className="text-slate-700 dark:text-slate-200 text-sm">Drink water constantly. Houston humidity causes you to sweat more than you realize. Carry a refillable water bottle.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                    <i className="ri-shield-check-line text-emerald-500"></i>
                    Stadium Policies
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200 text-sm">Check NRG Stadium's official bag policy before you go—clear bags are typically required for security. Plan accordingly and travel light on match days.</p>
                </div>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Practical Tips Section */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <i className="ri-compass-line text-emerald-500"></i>
              Practical Tips for International Visitors
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-2">
                  <i className="ri-money-dollar-circle-line text-emerald-500"></i>
                  Money Matters
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Currency:</span>
                      <span className="text-slate-700 dark:text-slate-200 ml-1">US Dollar (USD)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Cards:</span>
                      <span className="text-slate-700 dark:text-slate-200 ml-1">Credit cards accepted everywhere; contactless payment widely available</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Tipping:</span>
                      <span className="text-slate-700 dark:text-slate-200 ml-1">18-20% at restaurants, $1-2 per drink at bars, 15-20% for taxis and rideshares</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">ATMs:</span>
                      <span className="text-slate-700 dark:text-slate-200 ml-1">Widely available; use bank-affiliated machines to avoid excessive fees</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                 <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-2">
                   <i className="ri-shield-check-line text-emerald-500"></i>
                   Safety & Getting Around
                 </h3>
                 <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                   Houston is generally safe for visitors, especially in tourist areas and well-traveled neighborhoods. Basic street smarts apply: be aware of your surroundings, keep valuables secure, and stick to well-lit areas at night.
                 </p>

                 <div className="space-y-4">
                   <div>
                     <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                       <i className="ri-car-line text-emerald-500"></i>
                       Driving in Houston
                     </h4>
                     <p className="text-slate-700 dark:text-slate-200 text-sm">
                       If you rent a car, know that Houston is sprawling and car-centric. Highways (I-10, I-45, I-610, Beltway 8) connect everything, but traffic can be heavy during rush hours (7-9 AM, 4-7 PM).
                     </p>
                   </div>

                   <div>
                     <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                       <i className="ri-bus-line text-emerald-500"></i>
                       Public Transit
                     </h4>
                     <p className="text-slate-700 dark:text-slate-200 text-sm">
                       METRORail and bus service covers major corridors. All METRO buses are ADA accessible, offer free Wi-Fi, and are equipped with video surveillance security cameras. Each ride is just $1.25.
                     </p>
                   </div>

                   <div>
                     <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                       <i className="ri-walk-line text-emerald-500"></i>
                       Walking
                     </h4>
                     <p className="text-slate-700 dark:text-slate-200 text-sm">
                       Downtown, Midtown, Museum District, and Heights/Montrose are walkable. Everywhere else, you'll need wheels.
                     </p>
                   </div>
                 </div>
               </div>
             </div>
             <hr className="editorial-divider" />
           </article>

          {/* Language & Connectivity Section */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <i className="ri-global-line text-emerald-500"></i>
              Language & Connectivity
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-translate-2 text-emerald-500"></i>
                  Language Diversity
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  English is primary, but you'll hear Spanish extensively. Houston is America's most linguistically diverse city—over 145 languages are spoken here. You'll feel right at home no matter where you're from.
                </p>
              </div>

              <div>
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-wifi-line text-emerald-500"></i>
                  Connectivity
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Free Wi-Fi is available in many cafés, hotels, and public spaces. Consider a US SIM card or international data plan for navigation and communication.
                </p>
              </div>
            </div>

            {/* Heat Management */}
            <div className="mt-8">
              <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                <i className="ri-temp-cold-line text-emerald-500"></i>
                Heat Management
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Houstonians live in air conditioning from May through September. Plan your outdoor activities for early morning or evening. Take advantage of indoor attractions (museums, shopping) during peak afternoon heat.
              </p>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Ticket Information Section */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <i className="ri-ticket-line text-emerald-500"></i>
              Ticket Information & Booking Strategy
            </h2>

            <div className="space-y-8">
              {/* How to Get Tickets */}
              <div className="space-y-4">
                <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-2">
                  <i className="ri-shopping-cart-line text-emerald-500"></i>
                  How to Get World Cup Tickets
                </h3>
                
                <div className="space-y-4 mb-6">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Tickets for the 2026 World Cup are sold in four phases. The first application to purchase general tickets went live Sept. 10 and closed Sept. 19. Subsequent phases will be announced on <span className="font-mono text-blue-600 dark:text-sky-400">https://www.fifa.com/tickets</span>.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    FIFA World Cup tickets at NRG Stadium in Houston will start at $60, with prices increasing for premium seating and knockout rounds.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-vip-crown-line text-emerald-500"></i>
                      Hospitality Packages
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">
                      If you miss the general ticket lottery, hospitality packages start at $1,450 per match with venue series packages for Houston starting at $10,350. These include premium seating, access to exclusive lounges, and food and beverage service.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="editorial-h4 mb-2 flex items-center gap-2">
                      <i className="ri-gift-line text-emerald-500"></i>
                      Verizon Promotion
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm">
                      Verizon is giving away free tickets to the World Cup to U.S. customers, with the first round opening Oct. 2 including the first match being played in Houston.
                    </p>
                  </div>
                </div>
              </div>

              {/* Alternative Premium Experiences */}
              <div className="space-y-2">
                <h3 className="editorial-h3 animate-fade-up mb-4 flex items-center gap-2">
                  <i className="ri-vip-diamond-line text-emerald-500"></i>
                  Alternative: Hospitality & Premium Experiences
                </h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  For those wanting guaranteed access and VIP treatment, official hospitality packages through FIFA's partner On Location offer bundled tickets with hotels, transportation, and exclusive experiences. These cost significantly more but eliminate lottery uncertainty.
                </p>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Why Houston Section */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <i className="ri-heart-line text-emerald-500"></i>
              Why Houston Will Make Your World Cup Unforgettable
            </h2>

            <div className="space-y-6">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
                  This is the most popular and prestigious sporting event in the world, and these matches will put our community on the global stage.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Houston doesn't try to be like other cities—it's confidently, unapologetically itself. You'll experience Tex-Mex breakfast tacos made by a vendor who speaks Vietnamese, attend a match in a climate-controlled dome while it's 98°F outside, and celebrate with supporters from six continents in a city where diversity isn't a buzzword—it's the daily reality.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  The matches themselves? They'll be electric. Over five million fans and hospitality guests will have the opportunity to experience the world's game in stadiums across North America, and Houston's portion of that celebration will showcase Texas hospitality on steroids.
                </p>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  From the moment you step off the plane (into air conditioning, naturally) to your last breakfast taco before heading home, Houston offers something no guidebook can capture: the feeling of being welcomed into a city that's genuinely excited to show you what it's got. No pretense. No attitude. Just "Welcome to Houston—y'all ready for some football?"
                </p>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

          {/* Start Planning Section */}
          <article className="editorial-body">
            <h2 className="editorial-h2 animate-fade-up mb-8 flex items-center gap-3">
              <i className="ri-calendar-check-line text-emerald-500"></i>
              Start Planning Your 2026 World Cup Trip to Houston
            </h2>

            <div className="space-y-6">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
                The countdown is on. Hotels are booking up. Flights are being reserved. And Houston is preparing to host the world.
              </p>

              <div className="space-y-2">
                <h3 className="editorial-h3 animate-fade-up mb-6 flex items-center gap-2">
                  <i className="ri-task-line text-emerald-500"></i>
                  Your Action Plan
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Register for FIFA tickets</span>
                      <span className="text-slate-700 dark:text-slate-200 ml-1">at <span className="font-mono text-blue-600 dark:text-sky-400">https://www.fifa.com/tickets</span> for future phases</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Book accommodations early</span>
                      <span className="text-slate-700 dark:text-slate-200 ml-1">via <span className="font-mono text-blue-600 dark:text-sky-400">https://www.booking.com</span> or <span className="font-mono text-blue-600 dark:text-sky-400">https://www.hotels.com</span>—6-12 months in advance recommended</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Research flights</span>
                      <span className="text-slate-700 dark:text-slate-200 ml-1">to Houston (IAH or HOU) through <span className="font-mono text-blue-600 dark:text-sky-400">https://www.skyscanner.com</span> or <span className="font-mono text-blue-600 dark:text-sky-400">https://www.google.com/flights</span></span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Download the METRO app</span>
                      <span className="text-slate-700 dark:text-slate-200 ml-1">for public transit and plan your stadium transportation</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Make restaurant reservations</span>
                      <span className="text-slate-700 dark:text-slate-200 ml-1">for Houston's top spots—places like The Original Ninfa's and Goode Company fill up during big events</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">6</div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Plan rest-day activities</span>
                      <span className="text-slate-700 dark:text-slate-200 ml-1">Space Center Houston, Museum District, Buffalo Bayou Park</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  Houston will host seven matches during the 2026 FIFA World Cup at NRG Stadium, including five group-stage matches and a pair of matches in the knockout round, with the final Houston match falling on Independence Day—July 4, 2026. There's no more American way to celebrate the Fourth of July than watching the world's game in Texas.
                </p>
              </div>

              <div>
                <p className="text-slate-900 dark:text-slate-100 text-lg font-semibold leading-relaxed">
                  <strong>See you in Space City. Bring your appetite, your team colors, and your sense of adventure. Houston's ready to show the world what Texas hospitality looks like.</strong>
                </p>
              </div>
            </div>
            <hr className="editorial-divider" />
          </article>

        </main>
        <Footer />
      </div>
    );
  }

  // City data with full content
  const cityData: { [key: string]: any } = {
    'new-york': {
      name: 'New York / New Jersey',
      country: '🇺🇸',
      stadium: 'MetLife Stadium, East Rutherford, NJ',
      capacity: '82,500',
      matches: '8 Matches Including Final',
      finalDate: 'July 19, 2026 Final',
      description: "Where champions are crowned. The 2026 Final comes to the world's biggest stage—82,500 fans, 30 minutes from Times Square, and football's ultimate moment. Navigate NJ Transit from Manhattan, explore diverse NYC neighborhoods where every nation has a home, and discover why this metropolitan area delivers the World Cup's most electric atmosphere.",
      image: '/images/cities/new-york-new-jersey-world-cup-2026.webp',
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



    // Houston content intentionally removed to fully clear the page's rendered content.

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

  const city = cityData[normalizedId || ''];

  if (!city) {
    return (
      <div className="min-h-screen bg-white dark:bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">City Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">The city you're looking for doesn't exist or is coming soon.</p>
          <Link
            to="/world-cup-2026-host-cities"
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
    { name: 'Host Cities', url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/world-cup-2026-host-cities` },
    { name: city.name, url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/world-cup-2026-host-cities/${normalizedId}` }
  ]);

  const cityGuideSchema = generateCityGuideSchema(
    `${city.name} World Cup 2026 Guide`,
    city.description,
    `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/world-cup-2026-host-cities/${normalizedId}`
  );

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={cityGuideSchema} />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <OptimizedImage
          src={city.image}
          alt={`${city.name} World Cup 2026`}
          className="absolute inset-0"
          imgClassName="object-cover object-center"
          width={1600}
          height={900}
          priority={true}
          placeholder="blur"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
            
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                to="/world-cup-2026-host-cities"
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
            <h2 className="font-space font-bold text-5xl text-navy-900 dark:text-white mb-12">
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
              to="/world-cup-2026-host-cities"
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
