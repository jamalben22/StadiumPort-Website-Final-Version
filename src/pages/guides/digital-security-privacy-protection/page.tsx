import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../../components/feature/Header'
import { OptimizedImage } from '../../../components/base/OptimizedImage'

export default function DigitalSecurityPrivacyProtectionPage() {
  const title = 'Transportation Safety: Getting Around World Cup 2026 Host Cities'
  const url = '/guides/transportation-safety-getting-around-world-cup-2026-host-cities'

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": "Protect accounts, payments, and identity on public Wi-Fi and mobile networks during World Cup 2026.",
      "url": `https://stadiumport.com${url}`,
      "author": {
        "@type": "Person",
        "name": "Nora Patel"
      },
      "publisher": {
        "@type": "Organization",
        "name": "StadiumPort",
        "logo": {
          "@type": "ImageObject",
          "url": "https://stadiumport.com/logo.png"
        }
      },
      "datePublished": "2024-01-15",
      "dateModified": "2024-01-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://stadiumport.com${url}`
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [title, url])

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />
      {/* Hero Section — Editorial Premium */}
      <section className="editorial-hero">
        <div className="editorial-hero-media">
          <OptimizedImage
            src="/images/safety-guide/article mode/A_realistic_high-detail_photo_depicting_safe_transportation_in_a_World_Cup_2026.webp"
            alt={title}
            className="editorial-hero-image-wrapper"
            imgClassName="editorial-hero-image"
            width={1600}
            height={900}
            priority={true}
            placeholder="empty"
            sizes="100vw"
            disableSrcSet={true}
          />
          <div className="editorial-hero-overlay"></div>
        </div>

        <div className="editorial-hero-content">
          <div className="editorial-hero-inner">
            <div className="editorial-hero-eyebrow">
              <span className="editorial-hero-pulse"></span>
              <span>World Cup 2026</span>
            </div>
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex items-center gap-2 text-sm text-slate-200">
                <li>
                  <Link to="/" className="hover:underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">Home</Link>
                </li>
                <li><span aria-hidden>›</span></li>
                <li>
                  <Link to="/safety-guide" className="hover:underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-500">safety guide</Link>
                </li>
                <li><span aria-hidden>›</span></li>
                <li className="text-white font-semibold">{title}</li>
              </ol>
            </nav>
            <h1 className="editorial-hero-title">{title}</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2">
                <i className="ri-book-mark-line"></i>
                <span>Guide</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-shield-line"></i>
                <span>Safety</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-time-line"></i>
                <span>Read time: ~7 min</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content — Premium Editorial Layout */}
      <main id="main-content" className="editorial-article py-12">
        <div className="editorial-body editorial-dropcap">
          

          <div className="mb-16">
            
            
              
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Over 6.5 million fans will move through 16 cities across three countries during the 39-day World Cup 2026 tournament. This unprecedented tri-national format creates the most complex transportation challenge in FIFA history—and the greatest opportunity for things to go wrong.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Transportation agencies began mobility planning years in advance, yet the reality remains: you'll be navigating unfamiliar cities during peak summer travel, competing with millions of other fans for limited transportation resources. FlixBus recently announced they'll connect all host cities across North America, offering fans an alternative to expensive flights. GO Airport Shuttle is coordinating multi-city transfers across their network. Qatar Airways is packaging flights, hotels, and match-day transportation into complete solutions.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                But here's what the official partners won't tell you: transportation is where most World Cup travelers encounter their biggest safety challenges. From rideshare scams in Mexico City to cross-border delays at the U.S.-Canada border, from surge pricing that turns a $20 ride into a $200 nightmare, to unlicensed taxis targeting stadium-bound fans—the risks are real and often expensive.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                This comprehensive guide reveals how to navigate World Cup 2026 transportation safely across all three host nations, which options protect you best, how to avoid common scams, and what to do when transportation plans fail. Based on verified protocols from transportation agencies, security experts, and experienced international travelers, here's how to move confidently between matches.
              </p>
            

              <h4 className="editorial-h3 mb-4 flex items-center">
                <i className="ri-map-pin-line text-red-500 mr-3"></i>
                The Tri-National Transportation Challenge
              </h4>

              <h5 className="editorial-h4 mb-4">Understanding the Scale</h5>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                The 2026 World Cup spans:
              </p>

              <h6 className="editorial-h4 mb-2">16 host cities</h6>
              <p className="text-slate-700 dark:text-slate-300">across three countries</p>
              <h6 className="editorial-h4 mb-2">11 U.S. cities</h6>
              <p className="text-slate-700 dark:text-slate-300">Atlanta, Boston, Dallas, Houston, Kansas City, Los Angeles, Miami, New York/New Jersey, Philadelphia, San Francisco, Seattle</p>
              <h6 className="editorial-h4 mb-2">2 Canadian cities</h6>
              <p className="text-slate-700 dark:text-slate-300">Toronto, Vancouver</p>

              <h6 className="editorial-h4 mb-2">3 Mexican cities</h6>
              <p className="text-slate-700 dark:text-slate-300">Guadalajara, Mexico City, Monterrey</p>

              <h6 className="editorial-h4 mb-2"><i className="ri-passport-line mr-2"></i>Passport Requirements</h6>
              <p className="text-slate-700 dark:text-slate-300">
                Valid passports are required for any cross-border travel between USA, Canada, and Mexico. This isn't like previous World Cups where fans could move freely within a single country—every international movement requires immigration processing.
              </p>

              <h5 className="editorial-h4 mb-4">Official Transportation Coordination Efforts</h5>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                According to the U.S. Department of Transportation's Federal Highway Administration, all host cities have refined their mobility plans and will finalize them by January 2026. Cities are customizing their approach for visitors, workers, volunteers, and media, including those with accessible transportation needs.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Host cities are pursuing infrastructure improvements aligned with FIFA requirements including new transit hubs, enhanced signage, and expanded multilingual support. However, the reality is that no amount of planning can fully prepare existing infrastructure for this surge in demand.
              </p>
            

              <h4 className="editorial-h3 mb-4 flex items-center">
                <i className="ri-car-line text-red-500 mr-3"></i>
                Rideshare Safety: Uber, Lyft, and Regional Alternatives
              </h4>

              <h5 className="editorial-h4 mb-4">United States: Uber and Lyft Dominance</h5>
              
              <h6 className="editorial-h4 mb-3"><i className="ri-shield-check-line mr-2"></i>Overall Safety</h6>
              <p className="text-slate-700 dark:text-slate-300">
                Despite controversies, rideshare services in the U.S. are generally safer than unmarked taxis. Uber's 2022 safety report stated that 99.9% of rides ended with no safety-related issues, though over 3,000 cases of sexual assault were reported on U.S. rides.
              </p>

              <h6 className="font-semibold text-slate-900 dark:text-white mb-3">Safety Features:</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-3">
                  <i className="ri-gps-line text-blue-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Real-time GPS tracking allows you to share trip details with friends/family</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-star-line text-yellow-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Driver and passenger rating systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-bank-card-line text-green-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Cashless transactions reduce robbery risk</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-phone-line text-purple-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">In-app emergency assistance button</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-history-line text-indigo-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Trip history and receipts automatically saved</span>
                </li>
              </ul>

              <h6 className="font-semibold text-slate-900 dark:text-white mb-4">Critical Safety Protocols:</h6>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-door-open-line mr-2"></i>Before Entering Vehicle</h6>
              <ul className="space-y-2">
                <li><span><strong>Verify the vehicle</strong> - Check license plate, make, model, color against app</span></li>
                <li><span><strong>Verify the driver</strong> - Confirm driver's name and photo match</span></li>
                <li><span><strong>Ask driver to confirm your name</strong> - Never volunteer your name first (scammers guess common names)</span></li>
                <li><span><strong>Check driver ratings</strong> - Avoid drivers below 4.7 stars if possible</span></li>
                <li><span><strong>Look for mud-obscured plates</strong> - Red flag for impersonators</span></li>
              </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-route-line mr-2"></i>During Ride</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2"><i className="ri-car-line mt-1"></i><span>Sit in back seat (easier exit, maintains professional distance)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-share-line mt-1"></i><span>Share trip details with emergency contact</span></li>
                <li className="flex items-start space-x-2"><i className="ri-battery-charge-line mt-1"></i><span>Keep phone visible and charged</span></li>
                <li className="flex items-start space-x-2"><i className="ri-seatbelt-line mt-1"></i><span>Wear seatbelt at all times</span></li>
                <li className="flex items-start space-x-2"><i className="ri-alert-line mt-1"></i><span>Trust your instincts - if something feels wrong, end the ride</span></li>
              </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-check-double-line mr-2"></i>After Ride</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2"><i className="ri-time-line mt-1"></i><span>Verify app stopped running (common scam: leaving meter running)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-map-pin-line mt-1"></i><span>Check charged route matches actual route taken</span></li>
                <li className="flex items-start space-x-2"><i className="ri-error-warning-line mt-1"></i><span>Report any issues immediately through app</span></li>
                <li className="flex items-start space-x-2"><i className="ri-star-line mt-1"></i><span>Rate driver honestly to protect other passengers</span></li>
              </ul>

              <h6 className="editorial-h4 mb-2"><i className="ri-route-line mr-2"></i>The Long Route Scam</h6>
              <p className="text-slate-700 dark:text-slate-300 mb-4">Driver takes unnecessarily long route to inflate fare. Protection: Watch GPS navigation, question obvious detours, report to platform.</p>
              <h6 className="editorial-h4 mb-2"><i className="ri-user-forbid-line mr-2"></i>The Fake Driver</h6>
              <p className="text-slate-700 dark:text-slate-300 mb-4">Someone impersonates your actual driver. Protection: Always verify license plate and driver details before entering any vehicle.</p>
              <h6 className="editorial-h4 mb-2"><i className="ri-time-line mr-2"></i>The Continued Meter</h6>
              <p className="text-slate-700 dark:text-slate-300 mb-8">Driver leaves app running after you exit. Protection: Screenshot the "Trip Complete" confirmation.</p>

              <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Canada: Similar to U.S. with Regional Variations</h5>

              <h6 className="font-semibold text-slate-900 dark:text-white mb-3">Available Services:</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-3">
                  <i className="ri-car-line text-blue-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Uber</strong> (Toronto, Vancouver, and most major cities)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-car-line text-purple-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Lyft</strong> (limited availability)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-car-line text-green-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Regional services vary by city</span>
                </li>
              </ul>

              <h6 className="font-semibold text-slate-900 dark:text-white mb-3">Safety Considerations:</h6>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Canadian rideshare services follow similar safety protocols as U.S. operations. The primary differences are:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-green-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Generally lower crime rates mean lower incident frequency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-snowflake-line text-blue-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Cold weather considerations if traveling during shoulder seasons</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-translate-line text-purple-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Bilingual drivers (English/French) in some areas</span>
                </li>
              </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-building-line mr-2"></i>Toronto Specifics</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-subway-line mt-1"></i><span>Excellent public transit (TTC) as alternative to rideshare</span></li>
                <li className="flex items-start space-x-2"><i className="ri-map-pin-line mt-1"></i><span>Designated rideshare pickup zones at BMO Field</span></li>
                <li className="flex items-start space-x-2"><i className="ri-time-line mt-1"></i><span>Heavy traffic during peak hours—allow extra time</span></li>
              </ul>
              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-mountain-line mr-2"></i>Vancouver Specifics</h6>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start space-x-2"><i className="ri-train-line mt-1"></i><span>TransLink SkyTrain provides reliable stadium access</span></li>
                <li className="flex items-start space-x-2"><i className="ri-map-pin-line mt-1"></i><span>BC Place Stadium has designated pickup/drop-off zones</span></li>
                <li className="flex items-start space-x-2"><i className="ri-ship-line mt-1"></i><span>Consider seabus and transit for scenic alternative to rideshare</span></li>
              </ul>

              <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Mexico: Enhanced Vigilance Required</h5>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Rideshare safety in Mexico requires significantly more caution due to elevated crime risks.
              </p>

              <h6 className="font-semibold text-slate-900 dark:text-white mb-3">Available Services:</h6>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">UB</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Uber</span>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Most reliable and widely available</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">DD</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Didi</span>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Chinese rideshare app with growing presence, offers female driver option</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">CB</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Cabify</span>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Charges based on most direct route only</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">BT</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Beat</span>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Popular in Mexico City</p>
                  </div>
                </li>
              </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-shield-star-line mr-2"></i>Why Uber Is Safer in Mexico</h6>
              <p className="text-slate-700 dark:text-slate-300 mb-4">According to experienced Mexico travelers, Uber provides several critical advantages:</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start space-x-2"><i className="ri-money-dollar-circle-line mt-1"></i><span><strong>Transparent pricing</strong> eliminates taxi fare negotiation and scams</span></li>
                <li className="flex items-start space-x-2"><i className="ri-gps-line mt-1"></i><span><strong>GPS tracking</strong> creates accountability and safety documentation</span></li>
                <li className="flex items-start space-x-2"><i className="ri-translate-line mt-1"></i><span><strong>Language barrier mitigation</strong> - destination input without miscommunication</span></li>
                <li className="flex items-start space-x-2"><i className="ri-bank-card-line mt-1"></i><span><strong>Cashless transactions</strong> reduce robbery motivation</span></li>
                <li className="flex items-start space-x-2"><i className="ri-shield-check-line mt-1"></i><span><strong>Safer than Metro</strong> - Mexico City Metro notorious for pickpocketing and crime</span></li>
              </ul>

              <h6 className="font-semibold text-slate-900 dark:text-white mb-4">Mexico-Specific Scams:</h6>

              <h6 className="editorial-h4 mb-2"><i className="ri-group-line mr-2"></i>The Mugging Coordination Scam</h6>
              <p className="text-slate-700 dark:text-slate-300 mb-4">Driver shares your location with accomplices who rob you while waiting for pickup. The driver then reports you as a no-show. Protection: Wait inside secure locations until driver arrives, share live location with contacts.</p>
              <h6 className="editorial-h4 mb-2"><i className="ri-money-dollar-circle-line mr-2"></i>The Cash Demand Scam</h6>
              <p className="text-slate-700 dark:text-slate-300 mb-4">Despite card payment in app, driver insists payment wasn't processed and demands cash. Protection: Show payment confirmation in app, refuse cash payment, exit vehicle if pressured, report immediately.</p>
              <h6 className="editorial-h4 mb-2"><i className="ri-route-line mr-2"></i>The Extended Route Scam</h6>
              <p className="text-slate-700 dark:text-slate-300 mb-8">More common in Mexico than U.S. due to complex city layouts. Protection: Follow GPS navigation, question obviously wrong directions.</p>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-alert-line mr-2"></i>Critical Mexico Rideshare Rules</h6>
              <ul className="space-y-2 mb-8">
                <li><span><strong>NEVER hail street taxis</strong> - Extremely high risk of robbery, kidnapping, or express kidnapping schemes</span></li>
                <li><span><strong>Use only app-based services</strong> - Uber, Didi, Cabify only</span></li>
                <li><span><strong>Request rides from inside buildings</strong> - Never wait on street corners</span></li>
                <li><span><strong>Verify driver details meticulously</strong> - Impersonators are more common</span></li>
                <li><span><strong>Share trip details with contacts</strong> - Real-time location sharing essential</span></li>
                <li><span><strong>Avoid very late night travel</strong> - Especially in areas outside tourist zones</span></li>
                <li><span><strong>Use hotel-arranged transportation</strong> for airport transfers if possible</span></li>
              </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-plane-line mr-2"></i>Mexico City Airport (MEX) Specifics</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-car-line mt-1"></i><span>Uber pickup allowed and safer than airport taxis</span></li>
                <li className="flex items-start space-x-2"><i className="ri-signpost-line mt-1"></i><span>Exit terminal and follow signs to rideshare pickup zones</span></li>
                <li className="flex items-start space-x-2"><i className="ri-time-line mt-1"></i><span>Expect 10-20 minute wait for driver during peak times</span></li>
                <li className="flex items-start space-x-2"><i className="ri-hotel-line mt-1"></i><span>Alternative: Pre-book private transfer through hotel</span></li>
              </ul>
              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-building-2-line mr-2"></i>Guadalajara and Monterrey</h6>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start space-x-2"><i className="ri-shield-check-line mt-1"></i><span>Same safety protocols as Mexico City</span></li>
                <li className="flex items-start space-x-2"><i className="ri-building-line mt-1"></i><span>Smaller cities but crime concerns remain</span></li>
                <li className="flex items-start space-x-2"><i className="ri-car-line mt-1"></i><span>Use only official rideshare apps</span></li>
                <li className="flex items-start space-x-2"><i className="ri-map-pin-line mt-1"></i><span>Avoid traveling outside city centers</span></li>
              </ul>

              <h6 className="editorial-h4 mb-3">Rideshare Cost Management</h6>
              <h6 className="editorial-h4 mb-2"><i className="ri-money-dollar-circle-line mr-2"></i>Surge Pricing Reality</h6>
              <p className="text-slate-700 dark:text-slate-300 mb-4">Match days will trigger extreme surge pricing. A normally $15 ride can surge to $75-150+ after major matches.</p>

              <h6 className="font-semibold text-slate-900 dark:text-white mb-3">Mitigation Strategies:</h6>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <i className="ri-walk-line text-green-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Walk 5-10 minutes away from stadium before requesting ride (reduces surge zone impact)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-time-line text-blue-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Wait 30-60 minutes after match ends (surge subsides as demand drops)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-apps-line text-purple-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Check multiple apps (Uber vs. Lyft vs. regional alternatives)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-calendar-line text-orange-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Consider pre-booking through GO Airport Shuttle or similar services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-subway-line text-indigo-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Use public transit if safe and available</span>
                </li>
              </ul>
            

              <h4 className="editorial-h3 mb-4 flex items-center"><i className="ri-subway-line mr-2"></i>Public Transportation: Metro, Bus, and Rail Systems</h4>
              <h5 className="editorial-h4 mb-4">United States Host Cities</h5>
              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-subway-line mr-2"></i>High-Quality Transit Systems</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-map-pin-line mt-1"></i><span><strong>New York/New Jersey</strong> - Extensive subway and NJ Transit rail connections to MetLife Stadium</span></li>
                <li className="flex items-start space-x-2"><i className="ri-map-pin-line mt-1"></i><span><strong>San Francisco</strong> - BART and Muni provide comprehensive coverage</span></li>
                <li className="flex items-start space-x-2"><i className="ri-map-pin-line mt-1"></i><span><strong>Boston</strong> - MBTA (The T) serves Gillette Stadium area</span></li>
                <li className="flex items-start space-x-2"><i className="ri-map-pin-line mt-1"></i><span><strong>Seattle</strong> - Light rail and bus rapid transit</span></li>
                <li className="flex items-start space-x-2"><i className="ri-map-pin-line mt-1"></i><span><strong>Atlanta</strong> - MARTA rail system with stadium stop</span></li>
                <li className="flex items-start space-x-2"><i className="ri-map-pin-line mt-1"></i><span><strong>Philadelphia</strong> - SEPTA regional rail and subway</span></li>
              </ul>
              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-car-line mr-2"></i>Limited Transit Systems</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-map-pin-line mt-1"></i><span><strong>Dallas, Houston, Miami, Kansas City</strong> - Car-dependent cities with limited public transit</span></li>
                <li className="flex items-start space-x-2"><i className="ri-map-pin-line mt-1"></i><span><strong>Los Angeles</strong> - Improving but still requires rideshare for many connections</span></li>
              </ul>
              <h6 className="editorial-h4 mb-3">Transit Safety Protocols:</h6>
              <h6 className="editorial-h4 mb-2 flex items-center"><i className="ri-shield-check-line mr-2"></i>General Safety</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-sun-line mt-1"></i><span>Travel during daylight/early evening when possible</span></li>
                <li className="flex items-start space-x-2"><i className="ri-lightbulb-line mt-1"></i><span>Stay in well-lit, crowded areas of stations</span></li>
                <li className="flex items-start space-x-2"><i className="ri-shield-keyhole-line mt-1"></i><span>Keep valuables secured and out of sight</span></li>
                <li className="flex items-start space-x-2"><i className="ri-eye-line mt-1"></i><span>Remain aware of surroundings, avoid phone distraction</span></li>
                <li className="flex items-start space-x-2"><i className="ri-arrow-left-right-line mt-1"></i><span>Stand away from platform edges</span></li>
                <li className="flex items-start space-x-2"><i className="ri-backpack-line mt-1"></i><span>Keep bags in front of you to prevent pickpocketing</span></li>
              </ul>
              <h6 className="editorial-h4 mb-2 flex items-center"><i className="ri-football-line mr-2"></i>Match Day Considerations</h6>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start space-x-2"><i className="ri-group-line mt-1"></i><span>Expect extreme crowding on match days</span></li>
                <li className="flex items-start space-x-2"><i className="ri-time-line mt-1"></i><span>Arrive early—trains will be packed</span></li>
                <li className="flex items-start space-x-2"><i className="ri-eye-line mt-1"></i><span>Watch for pickpockets in crowds (they thrive during events)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-route-line mt-1"></i><span>Have backup plan if trains reach capacity</span></li>
                <li className="flex items-start space-x-2"><i className="ri-money-dollar-circle-line mt-1"></i><span>Keep emergency cash for taxi/rideshare alternatives</span></li>
              </ul>

              <h4 className="editorial-h3 mb-4 flex items-center"><i className="ri-maple-leaf mr-2"></i>Canada Host Cities</h4>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-subway-line mr-2"></i>Toronto TTC (Toronto Transit Commission)</h6>
              <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <i className="ri-route-line mt-1"></i>
                    <span>Comprehensive subway, streetcar, and bus network</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-building-line mt-1"></i>
                    <span>Union Station serves as central hub</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-football-line mt-1"></i>
                    <span>BMO Field accessible via 509/510 streetcar</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-shield-check-line mt-1"></i>
                    <span>Generally safe with visible security presence</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-smartphone-line mt-1"></i>
                    <span>Download TTC app for real-time updates</span>
                  </li>
                </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-train-line mr-2"></i>Vancouver TransLink</h6>
              <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <i className="ri-route-line mt-1"></i>
                    <span>SkyTrain, SeaBus, and bus system</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-football-line mt-1"></i>
                    <span>BC Place Stadium accessible via Stadium-Chinatown station</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-shield-check-line mt-1"></i>
                    <span>Excellent safety record</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-ship-line mt-1"></i>
                    <span>Scenic routes include seabus across harbor</span>
                  </li>
                </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-star-line mr-2"></i>Canadian Transit Advantages</h6>
              <ul className="space-y-2 mb-8">
                  <li className="flex items-start space-x-2">
                    <i className="ri-sparkles-line mt-1"></i>
                    <span>Generally cleaner and safer than U.S. transit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-translate-line mt-1"></i>
                    <span>Multilingual announcements and signage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-customer-service-line mt-1"></i>
                    <span>Strong customer service culture</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-wheelchair-line mt-1"></i>
                    <span>Accessible facilities well-maintained</span>
                  </li>
                </ul>
              </div>

              <h4 className="editorial-h3 mb-4 flex items-center"><i className="ri-flag-line mr-2"></i>Mexico Host Cities</h4>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-subway-line mr-2"></i>Mexico City Metro</h6>
              <p className="text-slate-700 dark:text-slate-300 mb-4">Public transportation in Mexico City requires special caution. The Metro is notorious for pickpocketing, crowding, and petty crime—especially during events.</p>
              <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-2">
                    <i className="ri-women-line text-pink-500 mt-1"></i>
                    <span className="text-red-800 dark:text-red-200">Women-only cars exist for good reason (sexual harassment is common)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <i className="ri-hand-coin-line text-orange-500 mt-1"></i>
                    <span className="text-red-800 dark:text-red-200">Pickpocketing is rampant during crowded periods</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <i className="ri-calendar-close-line text-yellow-500 mt-1"></i>
                    <span className="text-red-800 dark:text-red-200">Avoid Metro during match days if possible</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <i className="ri-eye-off-line text-purple-500 mt-1"></i>
                    <span className="text-red-800 dark:text-red-200">Never display valuables or phones</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <i className="ri-backpack-line text-blue-500 mt-1"></i>
                    <span className="text-red-800 dark:text-red-200">Keep bags in front, zipped closed</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <i className="ri-sun-line text-green-500 mt-1"></i>
                    <span className="text-red-800 dark:text-red-200">Consider Metro only for daytime, non-match-day travel</span>
                  </div>
                </div>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-building-line mr-2"></i>Guadalajara and Monterrey Transit</h6>
              <ul className="space-y-2 mb-8">
                  <li className="flex items-start space-x-2">
                    <i className="ri-subway-line mt-1"></i>
                    <span>Limited public transit infrastructure</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-car-line mt-1"></i>
                    <span>Rely primarily on rideshare services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-bus-line mt-1"></i>
                    <span>Public buses exist but not recommended for tourists</span>
                  </li>
                </ul>

              <h6 className="editorial-h4 mb-2 flex items-center"><i className="ri-alert-line mr-2"></i>Recommendation for Mexico</h6>
              <p className="text-slate-700 dark:text-slate-300 mb-8">Use Uber/Didi exclusively. The marginal cost savings of public transit aren't worth the significantly elevated safety risks.</p>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Rental Cars: When They Make Sense (and When They Don't)</h3>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <i className="ri-thumb-up-line text-green-500 mr-3"></i>
                Pros of Renting
              </h4>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-calendar-line mr-2"></i>Flexibility</h6>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start space-x-2"><i className="ri-time-line mt-1"></i><span>Travel on your own schedule</span></li>
                <li className="flex items-start space-x-2"><i className="ri-compass-line mt-1"></i><span>Explore beyond host cities</span></li>
                <li className="flex items-start space-x-2"><i className="ri-backpack-line mt-1"></i><span>Carry luggage and purchases securely</span></li>
                <li className="flex items-start space-x-2"><i className="ri-money-dollar-circle-line mt-1"></i><span>No surge pricing concerns</span></li>
              </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-money-cny-circle-line mr-2"></i>Cost-Effectiveness</h6>
              <p className="mb-8">For groups of 3-4+ people traveling between nearby cities, rental cars can be cheaper than multiple rideshare trips or flights.</p>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <i className="ri-thumb-down-line text-red-500 mr-3"></i>
                Cons and Risks
              </h4>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800 mb-6">
                <h6 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center">
                  <i className="ri-parking-line mr-2"></i>
                  Parking Nightmares
                </h6>
                <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                  <li className="flex items-start space-x-2">
                    <i className="ri-money-dollar-circle-line mt-1"></i>
                    <span>Stadium parking extremely limited and expensive ($50-100+)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-building-line mt-1"></i>
                    <span>Downtown hotel parking adds $30-60/day</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-traffic-light-line mt-1"></i>
                    <span>Traffic congestion on match days horrendous</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-walk-line mt-1"></i>
                    <span>Walking from parking to stadium can be extensive</span>
                  </li>
                </ul>
              </div>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-map-pin-line mr-2"></i>Navigation Challenges</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-map-line mt-1"></i><span>Unfamiliar roads and highway systems</span></li>
                <li className="flex items-start space-x-2"><i className="ri-construction-line mt-1"></i><span>GPS doesn't always reflect real-time construction</span></li>
                <li className="flex items-start space-x-2"><i className="ri-car-line mt-1"></i><span>Aggressive driving in major cities</span></li>
                <li className="flex items-start space-x-2"><i className="ri-money-dollar-circle-line mt-1"></i><span>Tolls and fees vary by location</span></li>
              </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-shield-keyhole-line mr-2"></i>Liability and Insurance</h6>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start space-x-2"><i className="ri-passport-line mt-1"></i><span>International drivers may face licensing issues</span></li>
                <li className="flex items-start space-x-2"><i className="ri-error-warning-line mt-1"></i><span>Accident liability exposure</span></li>
                <li className="flex items-start space-x-2"><i className="ri-shield-keyhole-line mt-1"></i><span>Theft risk when parked (especially in Mexico)</span></li>
              </ul>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <i className="ri-check-line text-green-500 mr-3"></i>
                When Rental Cars Make Sense
              </h4>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-map-pin-line mr-2"></i>U.S. Inter-City Travel</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2"><i className="ri-time-line mt-1"></i><span>Dallas to Houston (4 hours)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-time-line mt-1"></i><span>San Francisco to Los Angeles (6 hours)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-time-line mt-1"></i><span>Boston to New York (4 hours)</span></li>
              </ul>
              <p className="mt-3 mb-8">For fans attending multiple matches in nearby U.S. cities, rental cars provide autonomy and potentially lower costs than flights.</p>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <i className="ri-close-line text-red-500 mr-3"></i>
                When to AVOID Rental Cars
              </h4>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-2"><i className="ri-building-line mt-1"></i><span>Within any single host city (rideshare more practical)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-flag-line mt-1"></i><span>Mexico (safety concerns, aggressive driving, corruption issues)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-passport-line mt-1"></i><span>Cross-border travel (insurance complications, document requirements)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-steering-line mt-1"></i><span>If unfamiliar with left-side driving (Canada/U.S. use right-side; Mexico uses right-side)</span></li>
              </ul>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <i className="ri-shield-check-line text-blue-500 mr-3"></i>
                Rental Car Safety Protocols
              </h4>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-calendar-check-line mr-2"></i>Booking</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-building-line mt-1"></i><span>Use major brands: Enterprise, Hertz, Avis, National, Budget</span></li>
                <li className="flex items-start space-x-2"><i className="ri-links-line mt-1"></i><span>Book through comparison sites: <code className="px-1 rounded">https://www.kayak.com</code>, <code className="px-1 rounded">https://www.costcotravel.com</code> (if member), <code className="px-1 rounded">https://www.autoslash.com</code></span></li>
                <li className="flex items-start space-x-2"><i className="ri-shield-keyhole-line mt-1"></i><span>Verify insurance coverage through credit card or travel insurance</span></li>
                <li className="flex items-start space-x-2"><i className="ri-money-dollar-circle-line mt-1"></i><span>Decline rental company insurance if already covered (can add $30+/day)</span></li>
              </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-time-line mr-2"></i>During Rental</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-camera-line mt-1"></i><span>Inspect vehicle thoroughly before leaving lot, photograph any damage</span></li>
                <li className="flex items-start space-x-2"><i className="ri-eye-off-line mt-1"></i><span>Never leave valuables visible in parked vehicle</span></li>
                <li className="flex items-start space-x-2"><i className="ri-map-line mt-1"></i><span>Use GPS navigation with downloaded offline maps (data coverage varies)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-police-car-line mt-1"></i><span>Obey all traffic laws meticulously (especially in Mexico)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-door-lock-line mt-1"></i><span>Keep doors locked while driving</span></li>
                <li className="flex items-start space-x-2"><i className="ri-lightbulb-line mt-1"></i><span>Park only in well-lit, secure areas</span></li>
                <li className="flex items-start space-x-2"><i className="ri-moon-line mt-1"></i><span>Avoid night driving in unfamiliar areas</span></li>
              </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-alert-line mr-2"></i>Mexico-Specific Warnings</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2"><i className="ri-police-car-line mt-1"></i><span>Police corruption means you may be stopped for "violations" and asked for bribes</span></li>
                <li className="flex items-start space-x-2"><i className="ri-car-line mt-1"></i><span>Carjackings exist, especially outside tourist areas</span></li>
                <li className="flex items-start space-x-2"><i className="ri-shield-keyhole-line mt-1"></i><span>Insurance from Mexican providers required (U.S. insurance invalid)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-road-line mt-1"></i><span>Toll roads (cuotas) are safer but expensive</span></li>
                <li className="flex items-start space-x-2"><i className="ri-road-line mt-1"></i><span>Free roads (libres) are slower and higher crime risk</span></li>
              </ul>
              <p className="mt-3 mb-8"><strong>Honest Assessment:</strong> Unless you're very experienced with international driving and fluent in Spanish, avoid renting cars in Mexico for World Cup travel. The risks outweigh benefits.</p>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cross-Border Travel: U.S., Canada, and Mexico</h3>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <i className="ri-passport-line text-blue-500 mr-3"></i>
                Documentation Requirements
              </h4>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-passport-line mr-2"></i>All International Border Crossings Require</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-passport-line mt-1"></i><span>Valid passport (must be valid for duration of trip)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-visa-line mt-1"></i><span>Visa or eTA depending on citizenship and destination</span></li>
                <li className="flex items-start space-x-2"><i className="ri-file-list-line mt-1"></i><span>Completed customs declarations</span></li>
              </ul>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-flag-line mr-2"></i>U.S. Entry Requirements</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-passport-line mt-1"></i>
                      <span>ESTA (Electronic System for Travel Authorization) for visa waiver countries</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-visa-line mt-1"></i>
                      <span>Traditional visa for other nationalities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-shield-check-line mt-1"></i>
                      <span>CBP (Customs and Border Protection) inspection</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-maple-leaf-line mr-2"></i>Canada Entry Requirements</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-passport-line mt-1"></i>
                      <span>eTA (Electronic Travel Authorization) for visa-exempt foreign nationals</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-visa-line mt-1"></i>
                      <span>Visitor visa for some nationalities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-time-line mt-1"></i>
                      <span>Processing can take weeks—apply 3+ months in advance</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-flag-line mr-2"></i>Mexico Entry Requirements</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-file-list-line mt-1"></i>
                      <span>Tourist card (FMM form) typically issued on arrival for most nationalities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-time-line mt-1"></i>
                      <span>Valid for up to 180 days</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-save-line mt-1"></i>
                      <span>Keep form until departure (required when leaving)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <i className="ri-time-line text-orange-500 mr-3"></i>
                Border Crossing Wait Times
              </h4>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-calendar-line mr-2"></i>Peak Travel Impact</h6>
              <p className="mb-6">World Cup 2026 will coincide with peak summer travel season, creating unprecedented border congestion.</p>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-time-line mr-2"></i>Expected Delays</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-maple-leaf-line mt-1"></i><span><strong>U.S.-Canada border:</strong> 1-3 hours (sometimes longer during peak periods)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-flag-line mt-1"></i><span><strong>U.S.-Mexico border:</strong> 2-5 hours (highly variable)</span></li>
              </ul>

              <h6 className="font-semibold text-slate-900 dark:text-white mb-4">Strategies to Minimize Delays:</h6>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <i className="ri-passport-line text-green-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Use NEXUS (Canada-U.S.) or SENTRI (Mexico-U.S.) trusted traveler programs if eligible</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-time-line text-blue-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Cross during off-peak hours (early morning or late evening)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-smartphone-line text-purple-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Monitor CBP wait time apps for real-time estimates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-calendar-line text-orange-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Build 4-6 extra hours into travel schedules crossing borders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-plane-line text-indigo-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Consider flying rather than driving across borders</span>
                </li>
              </ul>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <i className="ri-plane-line text-blue-500 mr-3"></i>
                Air Travel Between Countries
              </h4>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800 mb-6">
                <h6 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center">
                  <i className="ri-lightbulb-line mr-2"></i>
                  Most Practical Option
                </h6>
                <p className="text-green-800 dark:text-green-200 text-sm mb-0">
                  For attending matches in multiple countries, flying is significantly more practical than ground transportation.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 mb-6">
                <h6 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                  <i className="ri-plane-line mr-2"></i>
                  Major Airports
                </h6>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <span className="font-semibold text-blue-900 dark:text-blue-100 mb-2 block">U.S.:</span>
                    <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                      <li>ATL, DFW, IAH, LAX, MIA, JFK/EWR, SEA</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-900 dark:text-blue-100 mb-2 block">Canada:</span>
                    <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                      <li>YYZ (Toronto), YVR (Vancouver)</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-900 dark:text-blue-100 mb-2 block">Mexico:</span>
                    <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                      <li>MEX (Mexico City), GDL (Guadalajara), MTY (Monterrey)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h6 className="font-semibold text-slate-900 dark:text-white mb-4">Booking Strategies:</h6>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <i className="ri-calendar-line text-green-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Book flights immediately when itinerary finalized</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-up-line text-red-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Prices will only increase as tournament approaches</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-search-line text-blue-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Use flight comparison tools: <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">https://www.google.com/flights</code>, <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">https://www.skyscanner.com</code>, <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">https://www.kayak.com</code></span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-calendar-check-line text-purple-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Consider positioning flights day before matches to avoid delays</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-money-dollar-circle-line text-orange-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Book flexible fares if budget allows (rescheduling fees can exceed savings)</span>
                </li>
              </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-shield-check-line mr-2"></i>Airport Security</h6>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start space-x-2"><i className="ri-time-line mt-1"></i><span>TSA/CATSA/Mexican security will be overwhelmed during tournament</span></li>
                <li className="flex items-start space-x-2"><i className="ri-time-line mt-1"></i><span>Arrive 3 hours before international flights</span></li>
                <li className="flex items-start space-x-2"><i className="ri-passport-line mt-1"></i><span>Enroll in TSA PreCheck or Global Entry if U.S.-based</span></li>
                <li className="flex items-start space-x-2"><i className="ri-smartphone-line mt-1"></i><span>Download airline apps for mobile boarding passes</span></li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Ground Transportation: Buses and Shuttles</h3>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <i className="ri-bus-line text-green-500 mr-3"></i>
                FlixBus: Official Cross-Border Solution
              </h4>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                FlixBus recently announced comprehensive service connecting all 16 World Cup host cities across U.S., Canada, and Mexico, with Guadalajara joining the network in spring 2026.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-thumb-up-line mr-2"></i>Advantages</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-money-dollar-circle-line mt-1"></i>
                      <span>Affordable compared to flights (typically $30-100 vs. $200-500)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-route-line mt-1"></i>
                      <span>Direct routes between host cities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-wifi-line mt-1"></i>
                      <span>Modern amenities (Wi-Fi, power outlets, legroom)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-leaf-line mt-1"></i>
                      <span>Environmentally friendly alternative</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-route-line mt-1"></i>
                      <span>Simplifies logistics for multi-city itineraries</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-thumb-down-line mr-2"></i>Disadvantages</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-time-line mt-1"></i>
                      <span>Long travel times (Dallas to Vancouver: 40+ hours)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-calendar-line mt-1"></i>
                      <span>Limited schedule flexibility</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-time-line mt-1"></i>
                      <span>Border crossing delays can add hours</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-emotion-unhappy-line mt-1"></i>
                      <span>Less comfortable than flying for long distances</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h6 className="font-semibold text-slate-900 dark:text-white mb-4">Best Use Cases:</h6>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <i className="ri-map-pin-line text-green-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Regional travel (nearby cities within 4-6 hours)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-money-dollar-circle-line text-blue-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Budget-conscious travelers with time flexibility</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-group-line text-purple-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Groups traveling together</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-leaf-line text-green-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Reducing carbon footprint</span>
                </li>
              </ul>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-shield-check-line mr-2"></i>Safety Considerations</h6>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start space-x-2"><i className="ri-search-line mt-1"></i><span>Research routes and reviews before booking</span></li>
                <li className="flex items-start space-x-2"><i className="ri-moon-line mt-1"></i><span>Avoid overnight buses through remote areas if possible</span></li>
                <li className="flex items-start space-x-2"><i className="ri-backpack-line mt-1"></i><span>Keep valuables secured and with you (not stored luggage)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-group-line mt-1"></i><span>Travel with companions when possible</span></li>
              </ul>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <i className="ri-shuttle-line text-blue-500 mr-3"></i>
                GO Airport Shuttle: Pre-Booked Reliability
              </h4>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-key-line mr-2"></i>Key Advantage</h6>
              <p className="mb-6">Multi-leg booking system allows coordinating airport transfers and ground transportation for up to four cities within one reservation. This eliminates the uncertainty of match-day surge pricing and availability.</p>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-calendar-line mr-2"></i>Example Itinerary</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-plane-line mt-1"></i><span>Arrival transfer from O'Hare Airport (Chicago) on June 15</span></li>
                <li className="flex items-start space-x-2"><i className="ri-football-line mt-1"></i><span>Local transportation in Miami for match on June 16</span></li>
                <li className="flex items-start space-x-2"><i className="ri-plane-line mt-1"></i><span>Departure transfer to airport for next destination on June 17</span></li>
              </ul>

              <h6 className="font-semibold text-slate-900 dark:text-white mb-4">Why Pre-Book:</h6>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-up-line text-red-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Demand will surge as match dates approach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-green-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Guaranteed availability without surge pricing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-user-star-line text-blue-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Professional drivers, direct door-to-door service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-calendar-line text-purple-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Advance reservations accepted up to a year ahead</span>
                </li>
              </ul>

              <h6 className="editorial-h4 mb-2 flex items-center"><i className="ri-money-dollar-circle-line mr-2"></i>Cost Considerations</h6>
              <p className="mb-8">More expensive than rideshare during normal periods, but potentially cheaper than surge-priced rideshare on match days. The certainty justifies premium.</p>

              <h6 className="editorial-h4 mb-2 flex items-center"><i className="ri-links-line mr-2"></i>Book Transfers</h6>
              <p className="mb-8"><code className="px-2 py-1 rounded">https://gowithus.com</code></p>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <i className="ri-plane-line text-purple-500 mr-3"></i>
                Qatar Airways World Cup Packages
              </h4>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                For fans wanting complete logistics management, Qatar Airways offers packages including:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-plane-line mt-1"></i><span>International and domestic flights between three countries</span></li>
                <li className="flex items-start space-x-2"><i className="ri-hotel-line mt-1"></i><span>Hotel accommodations near venues</span></li>
                <li className="flex items-start space-x-2"><i className="ri-ticket-line mt-1"></i><span>Official match tickets (Category 1 seating)</span></li>
                <li className="flex items-start space-x-2"><i className="ri-car-line mt-1"></i><span>Airport and match-day transportation</span></li>
                <li className="flex items-start space-x-2"><i className="ri-route-line mt-1"></i><span>Transfers between host cities</span></li>
              </ul>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                  <h6 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center">
                    <i className="ri-thumb-up-line mr-2"></i>
                    Advantages
                  </h6>
                  <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                    <li className="flex items-start space-x-2">
                      <i className="ri-calendar-line mt-1"></i>
                      <span>Complete solution eliminates planning stress</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-links-line mt-1"></i>
                      <span>Guaranteed coordination between flights, hotels, matches</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-customer-service-line mt-1"></i>
                      <span>Support infrastructure for multi-country logistics</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-vip-crown-line mt-1"></i>
                      <span>Privilege Club members earn loyalty points</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                  <h6 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center">
                    <i className="ri-thumb-down-line mr-2"></i>
                    Disadvantages
                  </h6>
                  <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                    <li className="flex items-start space-x-2">
                      <i className="ri-money-dollar-circle-line mt-1"></i>
                      <span>Premium pricing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-calendar-line mt-1"></i>
                      <span>Less flexibility for spontaneous changes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-box-line mt-1"></i>
                      <span>Package-based rather than custom itineraries</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h6 className="font-semibold text-slate-900 dark:text-white mb-4">Best For:</h6>
              <ul className="space-y-3 mb-12">
                <li className="flex items-start space-x-3">
                  <i className="ri-user-line text-green-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">First-time World Cup attendees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-earth-line text-blue-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">International travelers unfamiliar with North America</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-calendar-check-line text-purple-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Those prioritizing convenience over cost</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-group-line text-orange-500 mt-1"></i>
                  <span className="text-slate-700 dark:text-slate-300">Groups wanting turnkey solutions</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Match-Day Transportation Strategies</h3>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <i className="ri-football-line text-green-500 mr-3"></i>
                Stadium Access Plans Vary by Venue
              </h4>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Each stadium has unique transportation logistics:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-building-line mr-2"></i>MetLife Stadium (New York/New Jersey)</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-train-line mt-1"></i>
                      <span>NJ Transit rail service from NYC</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-bus-line mt-1"></i>
                      <span>Park-and-ride shuttle options</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-traffic-light-line mt-1"></i>
                      <span>Heavy traffic expected on match days</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-subway-line mt-1"></i>
                      <span>Public transit strongly recommended</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-building-line mr-2"></i>SoFi Stadium (Los Angeles)</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-subway-line mt-1"></i>
                      <span>Limited public transit access</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-parking-line mt-1"></i>
                      <span>Massive parking capacity but expensive</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-car-line mt-1"></i>
                      <span>Rideshare drop-off zones designated</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-hotel-line mt-1"></i>
                      <span>Consider staying in Inglewood area within walking distance</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-building-line mr-2"></i>Lumen Field (Seattle)</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-train-line mt-1"></i>
                      <span>Light rail direct to stadium</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-bus-line mt-1"></i>
                      <span>Numerous bus routes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-parking-line mt-1"></i>
                      <span>Limited parking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-subway-line mt-1"></i>
                      <span>Public transit highly recommended</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-building-line mr-2"></i>AT&T Stadium (Dallas)</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-car-line mt-1"></i>
                      <span>Car-dependent area</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-parking-line mt-1"></i>
                      <span>Parking required</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-route-line mt-1"></i>
                      <span>Limited alternatives to driving</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-hotel-line mt-1"></i>
                      <span>Consider hotel with stadium shuttle</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-building-line mr-2"></i>Mercedes-Benz Stadium (Atlanta)</h6>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2"><i className="ri-subway-line mt-1"></i><span>MARTA rail station at stadium</span></li>
                <li className="flex items-start space-x-2"><i className="ri-subway-line mt-1"></i><span>Excellent public transit access</span></li>
                <li className="flex items-start space-x-2"><i className="ri-parking-line mt-1"></i><span>Parking available but expensive</span></li>
              </ul>
        </div>
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-building-line mr-2"></i>BMO Field (Toronto)</h6>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <i className="ri-train-line mt-1"></i>
                  <span>TTC streetcar direct service</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-subway-line mt-1"></i>
                  <span>GO Transit regional rail</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-circle-line mt-1"></i>
                  <span>Excellent public transit infrastructure</span>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-building-line mr-2"></i>BC Place (Vancouver)</h6>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <i className="ri-train-line mt-1"></i>
                  <span>SkyTrain Stadium-Chinatown station</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-circle-line mt-1"></i>
                  <span>Excellent transit connectivity</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="editorial-h4 mb-3 flex items-center"><i className="ri-building-line mr-2"></i>Estadio Azteca (Mexico City)</h6>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <i className="ri-alert-line mt-1 text-red-600"></i>
                <span>Metro accessible but expect extreme crowds</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-car-line mt-1 text-red-600"></i>
                <span><strong>Uber/Didi strongly recommended</strong></span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-parking-line mt-1 text-red-600"></i>
                <span>Parking limited and area safety concerns</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="editorial-h3 mb-6">The 2-3 Hour Arrival Rule</h3>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Transportation to stadiums on match days will be significantly slower than normal:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <i className="ri-traffic-light-line mt-1 text-blue-600"></i>
                <span>Road congestion from thousands of vehicles converging</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-subway-line mt-1 text-blue-600"></i>
                <span>Public transit at capacity</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-money-dollar-circle-line mt-1 text-blue-600"></i>
                <span>Rideshare surge pricing and longer wait times</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-shield-line mt-1 text-blue-600"></i>
                <span>Security perimeters creating detours</span>
              </li>
            </ul>
            <p className="mt-6"><strong>Plan to leave accommodations 2-3 hours before kickoff</strong> to account for transportation delays and stadium security screening.</p>
          </div>
        </div>

        <div>
          <h3 className="editorial-h3 mb-6">Post-Match Exodus Strategy</h3>
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              The most challenging transportation moment is immediately after matches when tens of thousands of fans simultaneously request rides or flood transit systems.
            </p>
            
            <div>
              <h6 className="editorial-h4 mb-4">Winning Strategy:</h6>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <i className="ri-time-line mt-1 text-green-600"></i>
                  <span><strong>Don't rush out immediately</strong> - Remain in stadium 20-30 minutes after final whistle</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-group-line mt-1 text-green-600"></i>
                  <span>Avoid crush of crowds</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-money-dollar-circle-line mt-1 text-green-600"></i>
                  <span>Allow surge pricing to subside</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-subway-line mt-1 text-green-600"></i>
                  <span>Let transit congestion ease</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-football-line mt-1 text-green-600"></i>
                  <span>Enjoy post-match atmosphere</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-check-double-line mt-1 text-green-600"></i>
                  <span>Then depart with significantly reduced wait times</span>
                </li>
              </ul>
            </div>

            <p><strong>Alternative:</strong> Pre-book return transportation through GO Airport Shuttle or similar service with scheduled pickup time 90 minutes post-match.</p>
          </div>
        </div>

        <div>
          <h3 className="editorial-h3 mb-6">Emergency Transportation Contingencies</h3>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700 dark:text-red-300">What to Do When Plans Fail</h3>
              
              <div className="space-y-6">
            <div>
                  <h6 className="editorial-h4 mb-3">Rideshare App Crashes:</h6>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">During peak demand, apps can become overwhelmed. Have backup:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-smartphone-line mt-1"></i>
                      <span>Multiple rideshare apps installed (Uber AND Lyft in U.S./Canada; Uber, Didi, Cabify in Mexico)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-phone-line mt-1"></i>
                      <span>Taxi company numbers saved (use only licensed taxis)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-hotel-line mt-1"></i>
                      <span>Hotel/venue concierge numbers for assistance</span>
                    </li>
                  </ul>
                </div>

            <div>
                  <h6 className="editorial-h4 mb-3">Missed Connections:</h6>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">If delayed and missing your next transportation leg:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-shield-check-line mt-1"></i>
                      <span>Contact travel insurance immediately (covered if you have comprehensive policy)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-ticket-line mt-1"></i>
                      <span>Rebook on next available option (keep receipts for insurance claim)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-hotel-bed-line mt-1"></i>
                      <span>Hotels near airports offer day-use rates if overnight stay needed</span>
                    </li>
                  </ul>
                </div>

            <div>
                  <h6 className="editorial-h4 mb-3">Vehicle Breakdown or Accident:</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-error-warning-line mt-1"></i>
                      <span>Move to safe location</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-phone-line mt-1"></i>
                      <span>Call local emergency services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-car-line mt-1"></i>
                      <span>Contact rental company roadside assistance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-shield-line mt-1"></i>
                      <span>Notify your insurance provider</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-camera-line mt-1"></i>
                      <span>Document everything with photos</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-file-list-line mt-1"></i>
                      <span>File police report if required</span>
                    </li>
                  </ul>
                </div>

            <div>
                  <h6 className="editorial-h4 mb-3">Lost or Stranded:</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <i className="ri-map-line mt-1"></i>
                      <span>Use offline maps (download Google Maps/Maps.me before traveling)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-police-line mt-1"></i>
                      <span>Ask security personnel or police for assistance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-home-line mt-1"></i>
                      <span>Return to stadium/hotel if nearby</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-government-line mt-1"></i>
                      <span>Contact your embassy if in foreign country</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-hotel-line mt-1"></i>
                      <span>Use hotel concierge or GO Airport Shuttle for emergency pickup</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="editorial-h3 mb-6">Your Transportation Safety Checklist</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h6 className="editorial-h4 mb-4">Before Booking Transportation:</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Research specific host city transportation options</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Compare costs: rideshare vs. rental vs. public transit vs. pre-booked services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Download all relevant transportation apps</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Verify cross-border documentation requirements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Purchase comprehensive travel insurance covering transportation disruptions</span>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="editorial-h4 mb-4">Before Traveling:</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Download offline maps for all host cities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Save emergency transportation contacts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Pre-book airport transfers and critical transportation legs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Verify passport validity and visa requirements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Set up Uber/Lyft/Didi accounts before arriving</span>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="editorial-h4 mb-4">Match Day:</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Leave accommodations 2-3 hours before kickoff</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Charge phone fully and bring portable charger</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Have multiple rideshare apps ready</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Verify vehicle and driver details before entering</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Share trip details with emergency contact</span>
                </li>
                <li className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span>Keep emergency cash for backup transportation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="editorial-h3 mb-6">The Bottom Line: Plan, Book, and Stay Alert</h3>
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              Transportation will make or break your World Cup 2026 experience. The tri-national format, combined with peak summer travel demand and millions of converging fans, creates unprecedented logistical challenges.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h6 className="editorial-h4 mb-3">Plan Early:</h6>
                <p className="text-gray-700 dark:text-gray-300">
                  Book flights, rental cars, and key transportation legs months in advance. Prices only increase, and availability only decreases.
                </p>
              </div>

              <div>
                <h6 className="editorial-h4 mb-3">Use Technology Wisely:</h6>
                <p className="text-gray-700 dark:text-gray-300">
                  Rideshare apps provide safety features that traditional taxis lack—especially real-time tracking and accountability. But verify every detail before entering any vehicle.
                </p>
              </div>

              <div>
                <h6 className="editorial-h4 mb-3">Build in Buffer Time:</h6>
                <p className="text-gray-700 dark:text-gray-300">
                  Every transportation leg will take longer than you expect. The 2-3 hour stadium arrival rule isn't excessive—it's necessary.
                </p>
              </div>

              <div>
                <h6 className="editorial-h4 mb-3">Prioritize Safety Over Cost:</h6>
                <p className="text-gray-700 dark:text-gray-300">
                  In Mexico especially, the few dollars saved taking public transit or street taxis isn't worth the dramatically elevated safety risks. Use Uber/Didi exclusively.
                </p>
              </div>
            </div>

            <div>
              <h6 className="editorial-h4 mb-3">Have Backup Plans:</h6>
              <p className="text-gray-700 dark:text-gray-300">
                Apps crash, rides get canceled, flights get delayed. Expect problems and have alternatives ready.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p>
              The beautiful game deserves a stress-free journey. With proper planning, smart app usage, and vigilant safety practices, you'll navigate the 2026 World Cup transportation network successfully.
            </p>
            <p className="mt-4">
              See you at the matches. Travel safely.
            </p>
          </div>
        </div>

        <div>
          <h3 className="editorial-h3 mb-6">Quick Reference: Transportation Safety Tips</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h6 className="editorial-h4 mb-4">Rideshare Safety:</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Always verify vehicle and driver details before entering</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Sit in back seat</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Share trip details with emergency contact</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Watch for mud-obscured license plates (impersonators)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Report suspicious behavior immediately</span>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="editorial-h4 mb-4">Mexico-Specific:</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <i className="ri-alert-line mt-1 text-red-600"></i>
                  <span><strong>NEVER use street taxis</strong></span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Use only Uber/Didi/Cabify</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Request rides from inside buildings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Share live location with contacts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Avoid very late night travel</span>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="editorial-h4 mb-4">Public Transit:</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Keep valuables secured and out of sight</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Remain aware of surroundings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Avoid displaying phones in crowded areas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Travel during daylight when possible</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Have backup transportation options</span>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="editorial-h4 mb-4">Rental Cars:</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Inspect vehicle and photograph damage before leaving lot</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Never leave valuables visible</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Use GPS with offline maps downloaded</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Keep doors locked while driving</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-checkbox-blank-circle-line mt-1"></i>
                  <span>Park only in well-lit, secure areas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="editorial-h3 mb-6">Essential Transportation Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h6 className="editorial-h4 mb-4">Flight Booking:</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <i className="ri-external-link-line mt-1 text-blue-600"></i>
                  <span><code className="text-sm">https://www.google.com/flights</code> - Best for price comparison and flexible date searching</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-external-link-line mt-1 text-blue-600"></i>
                  <span><code className="text-sm">https://www.skyscanner.com</code> - Multi-airline comparison</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-external-link-line mt-1 text-blue-600"></i>
                  <span><code className="text-sm">https://www.kayak.com</code> - Comprehensive search across airlines and dates</span>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="editorial-h4 mb-4">Ground Transportation:</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <i className="ri-external-link-line mt-1 text-green-600"></i>
                  <span><code className="text-sm">https://www.flixbus.com</code> - Cross-border bus service connecting all host cities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-external-link-line mt-1 text-green-600"></i>
                  <span><code className="text-sm">https://gowithus.com</code> - Pre-booked airport transfers and multi-city coordination</span>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="editorial-h4 mb-4">Rental Cars:</h6>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <i className="ri-external-link-line mt-1 text-purple-600"></i>
                  <span><code className="text-sm">https://www.autoslash.com</code> - Automatically rebooks at lower rates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-external-link-line mt-1 text-purple-600"></i>
                  <span><code className="text-sm">https://www.costcotravel.com</code> - Members-only discounted rentals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-external-link-line mt-1 text-purple-600"></i>
                  <span><code className="text-sm">https://www.kayak.com/cars</code> - Comparison across major brands</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h6 className="editorial-h4 mb-4">Travel Insurance:</h6>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <i className="ri-external-link-line mt-1 text-orange-600"></i>
                <span><code className="text-sm">https://www.worldnomads.com</code> - Coverage for transportation delays and disruptions</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-external-link-line mt-1 text-orange-600"></i>
                <span><code className="text-sm">https://www.allianztravelinsurance.com</code> - Comprehensive trip protection</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-links-line mt-1 text-orange-600"></i>
                <span>See our complete <a href="#" className="text-orange-600 hover:text-orange-700 underline">Travel Insurance Guide</a> for detailed comparison</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="editorial-h3 mb-6">Related World Cup 2026 Safety Guides</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="#" className="block">
              <h6 className="editorial-h4">Main Safety Hub</h6>
              <p>Comprehensive overview of all safety considerations</p>
            </a>
            <a href="#" className="block">
              <h6 className="editorial-h4">Travel Insurance Guide</h6>
              <p>Protect your investment and ensure coverage for travel disruptions</p>
            </a>
            <a href="#" className="block">
              <h6 className="editorial-h4">Stadium Security Guide</h6>
              <p>Security procedures and entry requirements</p>
            </a>
            <a href="#" className="block">
              <h6 className="editorial-h4">Health and Medical Guide</h6>
              <p>Medical preparation and emergency care</p>
            </a>
            <a href="#" className="block">
              <h6 className="editorial-h4">Scam Prevention Guide</h6>
              <p>Avoid ticket fraud and travel scams</p>
            </a>
            <a href="#" className="block">
              <h6 className="editorial-h4">Emergency Resources</h6>
              <p>Critical contacts for all host cities</p>
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4">
            <strong>Disclosure:</strong> This article contains affiliate links to transportation and travel booking services we recommend based on safety, reliability, and value. We may earn a commission if you purchase through these links at no additional cost to you. All recommendations are based on objective evaluation and traveler safety priorities.
          </p>
          <p>
            <strong>Last Updated:</strong> November 2025 | Transportation information based on confirmed services and host city mobility plans. Specific schedules and pricing subject to change as tournament approaches. Check official sources for final details.
          </p>
        </div>
      </main>
    </div>
  )
}
