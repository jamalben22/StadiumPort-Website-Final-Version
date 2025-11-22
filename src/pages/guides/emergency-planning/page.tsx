import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Header } from '../../../components/feature/Header'
import { Footer } from '../../../components/feature/Footer'
import { OptimizedImage } from '../../../components/base/OptimizedImage'
import { SchemaOrg, generateBreadcrumbSchema, generateTravelGuideSchema } from '../../../components/seo/SchemaOrg'
import { setPageMeta } from '../../../components/seo/MetaUtils'

function toTitle(slug?: string) {
  if (!slug) return 'Guide Article'
  return slug
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export default function EmergencyPlanningPage() {
  const { slug } = useParams()
  const [visible, setVisible] = useState(false)
  const title = 'Stadium Safety at World Cup 2026: Security Rules & What to Expect'
  const url = '/guides/stadium-safety-at-world-cup-2026-security-rules-what-to-expect'

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'
    const desc = 'Comprehensive World Cup 2026 safety and emergency planning guidance with structured content blocks.'
    setPageMeta({ title: `${title}`, description: desc, url: `${siteUrl}${url}` })
    const t = setTimeout(() => setVisible(true), 20)
    return () => clearTimeout(t)
  }, [title])

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/guides' },
    { name: title, url },
  ])

  const guideSchema = generateTravelGuideSchema(title, 'Guide article placeholder content', url)

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={guideSchema} />
      <Header />

      <section className={`editorial-hero ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} transition-all duration-700`}>
        <div className="editorial-hero-media">
          <OptimizedImage
            src="/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp"
            alt={`${title} – Guide`}
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
            <nav aria-label="Breadcrumb" className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">›</span>
              <Link to="/guides" className="hover:underline">Guides</Link>
              <span className="mx-2">›</span>
              <Link to={url} className="hover:underline">{title}</Link>
            </nav>
            <h1 className="editorial-hero-title">{title}</h1>
            <div className="editorial-hero-meta">
              <div className="meta-item flex items-center gap-2">
                <i className="ri-book-mark-line"></i>
                <span>Guide</span>
              </div>
              <div className="meta-item flex items-center gap-2">
                <i className="ri-time-line"></i>
                <span>Read time: TBD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" className="editorial-article py-12">
        <article className="editorial-body editorial-dropcap">
          <p className="whitespace-pre-line">
            You've secured World Cup tickets and booked your travel. Now comes the crucial question most fans overlook: what actually happens when you arrive at the stadium?
          </p>
          <p className="whitespace-pre-line">
            The 2026 FIFA World Cup will implement the most comprehensive stadium security operation in tournament history. After the chaos of the 2024 Copa América final at Hard Rock Stadium—where thousands of fans without tickets breached gates, climbed fences, and entered through ventilation systems—host cities are implementing Super Bowl-level security protocols to prevent similar disasters.
          </p>
          <p className="whitespace-pre-line">
            Former Seattle Police Chief John Diaz, now Chief Security Officer for Seattle's World Cup operations, confirms what fans should expect: multilayered security perimeters starting 150-200 meters from stadium gates, airport-style screening at multiple checkpoints, strict clear bag policies, and a visible law enforcement presence that includes police patrols, private security, World Cup ambassadors, and volunteers.
          </p>
          <p className="whitespace-pre-line">
            The U.S. Department of Homeland Security has designated the 2026 World Cup a SEAR 2 event—just one level below the Super Bowl's SEAR 1 classification. This means federal, state, and local agencies are coordinating extensive security measures to protect over 5.5 million fans attending 104 matches across 16 stadiums.
          </p>
          <p className="whitespace-pre-line">
            This guide reveals exactly what security procedures await you, which items are prohibited, how to navigate entry efficiently, and what happens if something goes wrong. Based on confirmed protocols from FIFA, stadium officials, and law enforcement agencies, here's everything you need to know to experience World Cup 2026 safely.
          </p>

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-shield-line"></i> The Security Perimeter System: What Changed After Copa América</h2>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-alert-line"></i> The Copa América Disaster That Changed Everything</h3>
          <p className="whitespace-pre-line">
            On July 14, 2024, the Copa América final at Miami's Hard Rock Stadium descended into chaos. An estimated 7,000 people without tickets entered the stadium by overwhelming security, climbing fences, and forcing their way through gates. Legitimate ticket holders were locked out. Dozens were injured. The match was delayed 82 minutes.
          </p>
          <p className="whitespace-pre-line">
            Miami-Dade Police Chief Carmen Castro's after-action report identified the critical failure: fans and cars entered interior parking lots without prior screening because there was no outer security perimeter. This allowed un-ticketed fans direct access to stadium gates, where they overwhelmed security in crushing numbers.
          </p>
          <p className="whitespace-pre-line">
            FIFA President Gianni Infantino addressed the incident directly at the Safety and Security Information Workshop in Atlanta, emphasizing that FIFA has a special responsibility to not only set requirements and standards but also to provide support and expert advice on safety and security.
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-shield-check-line"></i> The 2026 Solution: Multiple Security Rings</h3>
          <p className="whitespace-pre-line">
            For World Cup 2026, every stadium will implement what security experts call "layered perimeter defense"—a system FIFA has used at previous World Cups but which CONMEBOL failed to implement during Copa América.
          </p>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-map-pin-line"></i> Outer Perimeter (Primary Checkpoint):</h4>
          <p className="whitespace-pre-line">
            Located 150-200 meters (492-656 feet) from stadium gates, this is where your World Cup experience really begins. Security personnel will:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Verify you have a valid match ticket via the FIFA mobile app</li>
            <li>Check that tickets match the specific entry gate assigned to your seat</li>
            <li>Inspect bags for compliance with clear bag policy</li>
            <li>Screen individuals through metal detectors</li>
            <li>Deny entry to anyone without valid credentials</li>
          </ul>

          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
            <p className="whitespace-pre-line text-sm">
              <strong>Hard Rock Stadium officials, responding to the Copa América failures, have confirmed they will implement three checkpoints enclosing the stadium campus for World Cup 2026, with ticket screening at each checkpoint and a significant law enforcement and security footprint in and around the stadium.</strong>
            </p>
          </div>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-home-line"></i> Secondary Perimeter (Fan Festival Zone):</h4>
          <p className="whitespace-pre-line">
            Between the outer checkpoint and stadium gates, FIFA creates secure fan festival areas where ticketed fans can:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Watch other World Cup matches on large screens</li>
            <li>Purchase official merchandise and food</li>
            <li>Use restrooms before entering stadium</li>
            <li>Enjoy entertainment and activities</li>
          </ul>
          <p className="whitespace-pre-line">
            This zone serves dual purposes: it creates a controlled environment for fans while reducing pressure at stadium gates.
          </p>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-door-open-line"></i> Stadium Entry Gates (Final Checkpoint):</h4>
          <p className="whitespace-pre-line">
            Your ticket will be scanned again at stadium gates. Seats are assigned specific entrance points—you cannot enter at alternative gates. This prevents overcrowding at any single location and speeds overall entry.
          </p>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-building-line"></i> Inside the Stadium:</h4>
          <p className="whitespace-pre-line">
            Concourses, stairways, and hallways will have visible security personnel monitoring for crowd surges, emergency situations, and security threats. Emergency exits remain unlocked but are staffed by stewards.
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-shield-star-line"></i> Why This System Works</h3>
          <p className="whitespace-pre-line">
            JP Hayslip, VP of Security at Lincoln Financial Field in Philadelphia (a World Cup 2026 host venue), explains the philosophy: <em>We don't want somebody that doesn't have a ticket to even get close to our building.</em>
          </p>
          <p className="whitespace-pre-line">
            The layered perimeter system accomplishes three critical objectives:
          </p>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li><strong>Prevents Unauthorized Entry:</strong> Screening happens far from stadium, eliminating the pressure points where crowds can overwhelm gates</li>
            <li><strong>Enables Crowd Management:</strong> Security personnel can monitor and control crowd density at each layer</li>
            <li><strong>Creates Response Time:</strong> If problems develop at outer perimeters, inner security has time to adapt and respond</li>
          </ol>
          <p className="whitespace-pre-line">
            Stadiums will also utilize switchback barriers—zigzagging queue lines that prevent straight-line crowd rushes and maintain orderly movement through checkpoints.
          </p>

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-bag-line"></i> The Clear Bag Policy: What You Can and Cannot Bring</h2>

          <p className="whitespace-pre-line">
            Every World Cup 2026 stadium will enforce strict clear bag policies designed to accelerate security screening while maintaining safety. These policies mirror NFL standards but with FIFA-specific additions.
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-check-line"></i> Approved Bags</h3>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-shopping-bag-line"></i> Clear Plastic, Vinyl, or PVC Bags:</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Maximum dimensions: 12" x 6" x 12" (30cm x 15cm x 30cm)</li>
            <li>Must be transparent—tinted or frosted bags prohibited</li>
            <li>Can have one or two compartments</li>
            <li>Zippers and closures allowed</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-handbag-line"></i> Small Clutch Bags (Non-Clear):</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Maximum dimensions: 4.5" x 6.5" (approximately palm-sized)</li>
            <li>Cannot have handles or straps</li>
            <li>Can be carried in addition to clear bag</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-first-aid-kit-line"></i> Medical and Diaper Bags:</h4>
          <p className="whitespace-pre-line">
            Exceptions exist for medical necessities and parents with infants:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Must still be clear or semi-transparent when possible</li>
            <li>Subject to additional inspection</li>
            <li>May require documentation for certain medical equipment</li>
            <li>Arrive early to allow extra screening time</li>
          </ul>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-information-line"></i> Why Clear Bags Matter</h3>
          <p className="whitespace-pre-line">
            Security expert Mark Gorrie, Managing Director APAC at Norton, explains that clear bag policies reduce the time security personnel need to inspect contents, allowing thousands of fans to enter efficiently while maintaining safety standards. In previous tournaments without clear bag policies, security lines backed up for hours, creating dangerous crowd density at entry points.
          </p>
          <p className="whitespace-pre-line">
            During the 2024 Copa América, lack of standardized bag policies contributed to confusion and delays that allowed the security breakdown to occur.
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-prohibited-line"></i> Prohibited Items: The Complete List</h3>
          <p className="whitespace-pre-line">
            Based on confirmed FIFA protocols and venue-specific policies, these items are banned from all World Cup 2026 stadiums:
          </p>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-backpack-line"></i> Bags and Containers:</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>❌ Backpacks of any size</li>
            <li>❌ Large purses or totes</li>
            <li>❌ Hard-sided bags or luggage</li>
            <li>❌ Opaque bags (non-clear)</li>
            <li>❌ Coolers or ice chests</li>
            <li>❌ Briefcases</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-sword-line"></i> Weapons and Dangerous Items:</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>❌ Firearms (even with permits)</li>
            <li>❌ Knives, pocket knives, multi-tools</li>
            <li>❌ Pepper spray, mace, or similar items</li>
            <li>❌ Tasers or stun guns</li>
            <li>❌ Explosives or fireworks</li>
            <li>❌ Any item that could be used as a projectile</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-camera-line"></i> Electronics and Recording Equipment:</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>❌ Professional cameras (detachable lenses)</li>
            <li>❌ Video cameras</li>
            <li>❌ Drones</li>
            <li>❌ Tripods or monopods</li>
            <li>❌ Selfie sticks</li>
            <li>❌ Laptops or tablets (phones permitted)</li>
            <li>❌ GoPros or action cameras</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-restaurant-line"></i> Food and Beverages:</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>❌ Outside food or snacks</li>
            <li>❌ Alcohol of any kind</li>
            <li>❌ Glass containers</li>
            <li>❌ Metal cans</li>
            <li>❌ Thermoses or insulated bottles</li>
            <li>❌ Sealed water bottles (empty bottles allowed)</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-volume-up-line"></i> Noise and Disturbance Items:</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>❌ Air horns or vuvuzelas</li>
            <li>❌ Whistles</li>
            <li>❌ Musical instruments</li>
            <li>❌ Laser pointers</li>
            <li>❌ Bullhorns or megaphones</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-flag-line"></i> Flags, Banners, and Signs:</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>❌ Flagpoles or sticks</li>
            <li>❌ Banners larger than 3' x 5'</li>
            <li>❌ Signs with offensive language or images</li>
            <li>❌ Anything that obstructs views</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-more-line"></i> Other Prohibited Items:</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>❌ Umbrellas (small, collapsible may be allowed at some venues)</li>
            <li>❌ Strollers or rolling bags</li>
            <li>❌ Animals (except certified service animals)</li>
            <li>❌ Illegal drugs or substances</li>
            <li>❌ Beach balls or inflatable items</li>
            <li>❌ Aerosol cans (including sunscreen spray)</li>
          </ul>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-check-double-line"></i> What You CAN Bring</h3>

          <p className="whitespace-pre-line">
            To help fans navigate the restrictions, here's what IS allowed:
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Permitted Items:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
              <li>✅ Mobile phones and chargers</li>
              <li>✅ Small personal cameras (non-professional, no detachable lenses)</li>
              <li>✅ Binoculars</li>
              <li>✅ Small flags without poles (12" x 18" maximum)</li>
              <li>✅ Sunscreen (lotion only, not spray)</li>
              <li>✅ Sunglasses and hats</li>
              <li>✅ Hand sanitizer (small, personal size)</li>
              <li>✅ Prescription medications in original containers</li>
              <li>✅ Baby formula and baby food (in clear bags)</li>
              <li>✅ Empty reusable water bottles (fill at stadium fountains)</li>
              <li>✅ Light jackets or sweatshirts (no oversized items)</li>
              <li>✅ Blankets (at some outdoor venues, stadium-dependent)</li>
              <li>✅ Seat cushions without pockets or zippers</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 p-4 rounded-lg mb-4">
            <p className="whitespace-pre-line text-sm">
              <strong>Pro Tip:</strong> Wear clothing with pockets. Many fans minimize bag use by distributing essentials (phone, ID, credit card, tickets) in pockets to avoid bag screening delays.
            </p>
          </div>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-archive-line"></i> Bag Storage Options</h3>
          <p className="whitespace-pre-line">
            Most World Cup 2026 venues will not offer bag check services. Mercedes-Benz Stadium in Atlanta partners with The Mobile Locker Company, which provides paid bag storage at trucks outside the stadium (available 2 hours before events, closing 1.5 hours after events end).
          </p>
          <p className="whitespace-pre-line">
            Other stadiums may offer similar third-party services, but availability varies. Check your specific venue's website before match day.
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 p-4 rounded-lg mb-4">
            <p className="whitespace-pre-line text-sm">
              <strong>Best Practice:</strong> Leave prohibited items at your hotel. Don't risk confiscation or having to return to your car.
            </p>
          </div>

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-time-line"></i> Arrival Timeline: When Should You Get to the Stadium?</h2>

          <p className="whitespace-pre-line">
            Security officials universally recommend arriving 2-3 hours before kickoff. Here's why that's not an exaggeration:
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-calculator-line"></i> The Processing Math</h3>
          <p className="whitespace-pre-line">
            Consider MetLife Stadium in New Jersey, which hosts the World Cup 2026 final with capacity for 82,500 fans:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>82,500 fans entering through approximately 40 gates</li>
            <li>Each fan requires 30-45 seconds for screening (metal detector, bag check, ticket scan)</li>
            <li>This equals 688-1,031 hours of cumulative screening time</li>
          </ul>
          <p className="whitespace-pre-line">
            Even with parallel processing across multiple gates, screening 80,000+ fans takes hours. Late arrivals compound delays because security cannot simply "speed up"—every person must be properly screened.
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-timer-line"></i> Recommended Timeline</h3>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">3 Hours Before Kickoff:</h4>
              <p className="text-sm whitespace-pre-line">
                Ideal for families, fans with limited mobility, or anyone who wants to avoid stress. Benefits include:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                <li>Minimal lines at security checkpoints</li>
                <li>Best selection at concessions and merchandise stands</li>
                <li>Time to explore stadium and locate seats</li>
                <li>Opportunity to watch fan festival activities</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">2 Hours Before Kickoff:</h4>
              <p className="text-sm whitespace-pre-line">
                Minimum recommendation for most fans. This provides buffer for:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                <li>Unexpected delays (traffic, parking, rideshare)</li>
                <li>Longer-than-expected security lines</li>
                <li>Bathroom breaks before entering stadium</li>
                <li>Finding seats and settling in</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">90 Minutes Before Kickoff:</h4>
              <p className="text-sm whitespace-pre-line">
                Cutting it close. You'll likely:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                <li>Encounter significant security lines</li>
                <li>Miss pre-match festivities</li>
                <li>Rush to find seats</li>
                <li>Experience stress rather than enjoyment</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">60 Minutes or Less:</h4>
              <p className="text-sm whitespace-pre-line">
                High risk of missing kickoff entirely. Security will not expedite screening for late fans—everyone waits their turn. During Qatar 2022, thousands of fans missed the opening 20 minutes of matches due to underestimating security processing times.
              </p>
            </div>
          </div>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-lightbulb-line"></i> Additional Considerations</h3>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-time-line"></i> Peak Arrival Times:</h4>
          <p className="whitespace-pre-line">
            Most fans arrive 60-90 minutes before kickoff, creating the longest security lines. Arriving earlier or later than this window reduces wait time.
          </p>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-cloud-line"></i> Weather Impact:</h4>
          <p className="whitespace-pre-line">
            Rain, extreme heat, or cold slows screening as fans handle umbrellas, remove layers, or deal with weather-related issues.
          </p>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-trophy-line"></i> High-Profile Matches:</h4>
          <p className="whitespace-pre-line">
            Knockout rounds, finals, and matches involving popular teams draw more fans, creating longer processing times.
          </p>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-map-line"></i> Stadium Familiarity:</h4>
          <p className="whitespace-pre-line">
            First-time visitors to a stadium take longer to navigate. Research your venue's layout in advance.
          </p>

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-shield-user-line"></i> The Screening Process: Step-by-Step</h2>

          <p className="whitespace-pre-line">
            Understanding what happens at each security checkpoint reduces stress and speeds your entry.
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-map-pin-2-line"></i> Outer Perimeter (First Checkpoint)</h3>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-arrow-right-line"></i> Step 1: Queue Formation</h4>
          <p className="whitespace-pre-line">
            Follow signage to your designated entry point. Stadiums use color-coded or numbered gate systems matching your ticket.
          </p>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-ticket-line"></i> Step 2: Ticket Verification</h4>
          <p className="whitespace-pre-line">
            Security personnel scan your FIFA mobile ticket. Ensure your phone is:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Fully charged (carry portable charger if needed)</li>
            <li>Downloaded with tickets before arriving (don't rely on cell service near stadium)</li>
            <li>Set to maximum brightness for easy scanning</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-eye-line"></i> Step 3: Initial Visual Inspection</h4>
          <p className="whitespace-pre-line">
            Security conducts quick visual scan for obviously prohibited items or suspicious behavior.
          </p>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-shield-keyhole-line"></i> Step 4: Credential Check</h4>
          <p className="whitespace-pre-line">
            Verify your ticket matches the entry gate you're approaching. Wrong gate = denied entry, must reroute.
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-scan-line"></i> Secondary Screening (Metal Detectors)</h3>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-timer-line"></i> Step 5: Prepare for Screening</h4>
          <p className="whitespace-pre-line">
            Before reaching metal detectors:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Remove metal items from pockets (keys, coins, phones)</li>
            <li>Take off belts with large buckles</li>
            <li>Remove hats if requested</li>
            <li>Place items in clear bag for scanning</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-door-open-line"></i> Step 6: Walk-Through Metal Detector</h4>
          <p className="whitespace-pre-line">
            Pass through detector one person at a time. If alarm sounds:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Security conducts hand-wand screening</li>
            <li>You may need to remove additional items (watches, jewelry)</li>
            <li>Comply calmly—arguing causes delays for everyone</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-search-line"></i> Step 7: Bag Inspection</h4>
          <p className="whitespace-pre-line">
            Security visually inspects clear bag contents. They may:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Open compartments</li>
            <li>Ask about specific items</li>
            <li>Request removal of suspicious items</li>
            <li>Confiscate prohibited items</li>
          </ul>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-door-open-fill"></i> Stadium Gate (Final Entry)</h3>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-qr-code-line"></i> Step 8: Final Ticket Scan</h4>
          <p className="whitespace-pre-line">
            Your ticket is scanned a second time at the actual stadium entrance. This prevents:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Ticket fraud</li>
            <li>Re-entry with invalidated tickets</li>
            <li>Overcrowding in specific sections</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-check-line"></i> Step 9: Entry Confirmed</h4>
          <p className="whitespace-pre-line">
            Once inside, follow signage to your seating section. Ushers can help you locate seats.
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-user-star-line"></i> Special Screening Situations</h3>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-first-aid-kit-line"></i> Medical Equipment and Medications:</h4>
          <p className="whitespace-pre-line">
            Alert security immediately upon approach. Have documentation ready:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Doctor's note for medical equipment</li>
            <li>Prescription bottles in original packaging</li>
            <li>List of necessary supplies</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-wheelchair-line"></i> Mobility Assistance:</h4>
          <p className="whitespace-pre-line">
            Wheelchair users, fans with walking aids, and those requiring assistance can use priority screening lanes at most venues. Contact stadium accessibility services in advance.
          </p>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-parent-line"></i> Families with Young Children:</h4>
          <p className="whitespace-pre-line">
            Parents may bring diaper bags and baby supplies (formula, baby food). These receive additional scrutiny but are permitted. Strollers typically must be checked—they're not allowed inside seating areas.
          </p>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-vip-diamond-line"></i> VIP and Premium Ticket Holders:</h4>
          <p className="whitespace-pre-line">
            Club seats, suites, and premium areas often have separate, expedited security entrances. Check your ticket information for specific instructions.
          </p>

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-computer-line"></i> Technology and Surveillance</h2>

          <p className="whitespace-pre-line">
            Modern stadium security extends far beyond metal detectors. Here's what operates behind the scenes:
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-ai"></i> AI-Powered Crowd Monitoring</h3>
          <p className="whitespace-pre-line">
            The 2024 UEFA Euro tournament tested "Escape Pro" software, which tracks crowd flow by calculating the number of people entering and exiting areas, as well as overall crowd density and movement patterns. This software provides real-time data on stadium conditions and crowd dynamics to optimize the deployment of emergency resources and identify congestion points to prevent overcrowding.
          </p>
          <p className="whitespace-pre-line">
            World Cup 2026 stadiums are evaluating similar systems that:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Track crowd density in concourses and exits</li>
            <li>Predict dangerous congestion before it occurs</li>
            <li>Alert security personnel to redirect crowds</li>
            <li>Monitor egress during emergencies</li>
          </ul>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-face-recognition-line"></i> Facial Recognition and Biometrics</h3>
          <p className="whitespace-pre-line">
            While controversial, some stadiums may deploy facial recognition technology for:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>VIP and credentialed personnel identification</li>
            <li>Watchlist screening for banned individuals</li>
            <li>Enhanced security in sensitive areas</li>
          </ul>
          <p className="whitespace-pre-line">
            Privacy advocates have raised concerns, but FIFA prioritizes security given terrorism and violence threats at international events.
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-radio-line"></i> Integrated Communication Networks</h3>
          <p className="whitespace-pre-line">
            Former Seattle Police Chief John Diaz emphasizes that <em>collaboration is key to securing events of this magnitude. Here in this state, it's going to require all the resources that we bring in—mutual aid and others from both the police and our fire, our state local and our federal resources.</em>
          </p>
          <p className="whitespace-pre-line">
            Security operations centers coordinate:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Multiple law enforcement agencies</li>
            <li>Private security firms</li>
            <li>Fire and medical emergency services</li>
            <li>Stadium operations personnel</li>
            <li>FIFA security teams</li>
          </ul>
          <p className="whitespace-pre-line">
            Real-time information sharing allows rapid response to developing situations.
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-drone-line"></i> Drone Surveillance</h3>
          <p className="whitespace-pre-line">
            Prohibited for fans, drones with crowd-monitoring capabilities are utilized by security teams to:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Monitor exterior perimeters</li>
            <li>Track crowd movements in parking areas</li>
            <li>Provide aerial views of fan zones</li>
            <li>Detect potential security breaches</li>
          </ul>

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-first-aid-kit-line"></i> Emergency Procedures and Evacuation</h2>

          <p className="whitespace-pre-line">
            Despite comprehensive preventive measures, emergencies can occur. Here's what security teams have planned:
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-hospital-line"></i> Types of Emergency Protocols</h3>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-heart-pulse-line"></i> Medical Emergencies:</h4>
          <p className="whitespace-pre-line">
            Stadiums have medical stations staffed by trained professionals with first-aid supplies. For serious medical issues:
          </p>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li>Alert nearest usher or security personnel</li>
            <li>Medical teams respond within minutes</li>
            <li>Ambulance standby available at every match</li>
            <li>Helicopter medical evacuation possible for critical cases</li>
          </ol>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-thunderstorms-line"></i> Weather Emergencies:</h4>
          <p className="whitespace-pre-line">
            June and July bring severe weather risks to many host cities:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Lightning:</strong> Matches pause, fans directed to covered areas</li>
            <li><strong>Extreme Heat:</strong> Medical stations prepared for heat exhaustion</li>
            <li><strong>Tornadoes:</strong> Fans directed to interior concourses (safest areas)</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-shield-flash-line"></i> Security Threats:</h4>
          <p className="whitespace-pre-line">
            In the event of credible threats:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Public address system provides instructions</li>
            <li>Security personnel direct evacuation routes</li>
            <li>Law enforcement secures perimeter</li>
            <li>Fans must follow all instructions without delay</li>
          </ul>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-run-line"></i> Evacuation Routes and Procedures</h3>
          <p className="whitespace-pre-line">
            Every stadium has multiple evacuation routes tested through regular drills. In emergencies:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2"><i className="ri-check-line"></i> Do:</h4>
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                <li>Listen to public address announcements</li>
                <li>Follow lighted exit signs</li>
                <li>Obey security personnel instructions</li>
                <li>Help those around you who need assistance</li>
                <li>Move quickly but don't run or push</li>
                <li>Proceed to designated assembly areas outside stadium</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2"><i className="ri-close-line"></i> Don't:</h4>
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                <li>Re-enter the stadium without clearance</li>
                <li>Attempt to retrieve belongings</li>
                <li>Use elevators during evacuations</li>
                <li>Ignore security personnel</li>
                <li>Post to social media during active emergencies (can spread misinformation)</li>
              </ul>
            </div>
          </div>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-radio-line"></i> Communication During Emergencies</h3>
          <p className="whitespace-pre-line">
            Exterior speakers communicate with crowds outside the stadium. After the Copa América incident, police departments recommended stadiums better utilize these systems.
          </p>

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-building-line"></i> Venue-Specific Security Notes</h2>

          <p className="whitespace-pre-line">
            While FIFA requires baseline security standards, individual stadiums have unique characteristics:
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-stadium-line"></i> Hard Rock Stadium (Miami)</h3>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
            <p className="whitespace-pre-line mb-2">
              After Copa América failures, Hard Rock has implemented the most aggressive security enhancements:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
              <li>Three separate checkpoints enclosing entire campus</li>
              <li>Ticket scanning at each checkpoint</li>
              <li>Significant law enforcement and security footprint</li>
              <li>Stronger screening process along exterior gates</li>
              <li>Multiple security and ticket checkpoints to enter property</li>
            </ul>
          </div>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-trophy-line"></i> MetLife Stadium (New York/New Jersey)</h3>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
            <p className="whitespace-pre-line mb-2">
              Home to the World Cup 2026 final:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
              <li>Super Bowl-level security protocols</li>
              <li>Extensive coordination with New Jersey State Police and federal agencies</li>
              <li>Enhanced perimeter security due to high-profile status</li>
              <li>Allow factory-sealed canned or plastic bottles of water/soft drinks (20oz max)</li>
            </ul>
          </div>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-football-line"></i> Mercedes-Benz Stadium (Atlanta)</h3>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
            <p className="whitespace-pre-line mb-2">
              Known for fan-friendly policies:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
              <li>Clear bag policy strictly enforced</li>
              <li>Mobile locker company provides paid bag storage</li>
              <li>Fans encouraged to arrive bagless when possible</li>
              <li>Accessible drop-off locations for guests needing assistance</li>
            </ul>
          </div>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-lightbulb-line"></i> Lumen Field (Seattle)</h3>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
            <p className="whitespace-pre-line mb-2">
              Experienced with international events:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
              <li>Standard NFL clear bag policy</li>
              <li>Extra staff to assist international visitors</li>
              <li>Expanded signage and entry points</li>
              <li>Nine designated fan zones across Washington state</li>
            </ul>
          </div>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-map-pin-line"></i> Azteca Stadium (Mexico City)</h3>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
            <p className="whitespace-pre-line mb-2">
              Unique considerations for international venue:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
              <li>Language barriers—bring translation app</li>
              <li>Different security protocols than U.S./Canada venues</li>
              <li>Heightened security due to Mexico's crime concerns</li>
              <li>Strong police presence throughout stadium area</li>
            </ul>
          </div>

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-user-line"></i> Behavior and Conduct Expectations</h2>

          <p className="whitespace-pre-line">
            Security doesn't end after you clear checkpoints. Stadiums enforce codes of conduct designed to maintain safe, enjoyable environments.
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-prohibited-line"></i> Prohibited Behaviors</h3>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-alert-line"></i> Zero Tolerance Policies:</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Fighting or physical altercations</li>
            <li>Throwing objects onto field or at other fans</li>
            <li>Pitch invasions or attempts to enter restricted areas</li>
            <li>Racist, homophobic, or discriminatory language/gestures</li>
            <li>Excessive alcohol consumption or public intoxication</li>
            <li>Smoking or vaping (most stadiums entirely smoke-free)</li>
            <li>Unauthorized vending or solicitation</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-gavel-line"></i> Consequences:</h4>
          <p className="whitespace-pre-line">
            Violations result in:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Immediate ejection from stadium</li>
            <li>Ban from future FIFA events</li>
            <li>Potential arrest and criminal charges</li>
            <li>Lifetime stadium bans for severe offenses</li>
          </ul>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-football-line"></i> Celebrating Safely</h3>
          <p className="whitespace-pre-line">
            FIFA encourages fans to express enthusiasm, but within limits:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Chants and songs welcome</li>
            <li>National flags and scarves permitted</li>
            <li>Standing and cheering during play allowed (in standing sections)</li>
            <li>Obscene or offensive displays prohibited</li>
          </ul>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-police-line"></i> Reporting Suspicious Activity</h3>
          <p className="whitespace-pre-line">
            Security depends on fan cooperation. If you observe:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Unattended bags or packages</li>
            <li>Suspicious behavior</li>
            <li>Prohibited items</li>
            <li>Medical emergencies</li>
            <li>Criminal activity</li>
          </ul>
          <p className="whitespace-pre-line">
            <strong>Immediately report to:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Nearest usher or security personnel</li>
            <li>Text security hotline (posted throughout stadium)</li>
            <li>Stadium mobile app (most venues offer this)</li>
          </ul>
          <p className="whitespace-pre-line">
            Don't assume someone else will report. Your action could prevent serious incidents.
          </p>

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-accessibility-line"></i> Special Populations and Accessibility</h2>

          <p className="whitespace-pre-line">
            World Cup 2026 stadiums must accommodate diverse fan populations:
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-wheelchair-line"></i> Accessibility Services</h3>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-wheelchair-line"></i> Physical Accessibility:</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Wheelchair and companion seating on all levels</li>
            <li>Accessible parking with pre-purchase options</li>
            <li>Elevator access to all seating areas</li>
            <li>Accessible restrooms and concessions</li>
            <li>Assistive listening devices available</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-ear-line"></i> Sensory Accommodations:</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Quiet rooms for fans with sensory sensitivities</li>
            <li>Assistive listening systems for hearing impaired</li>
            <li>Braille and large-print signage</li>
            <li>Service animals permitted (with documentation)</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 p-4 rounded-lg mb-4">
            <p className="whitespace-pre-line text-sm">
              <strong>Contact Accessibility Services:</strong> Each stadium has dedicated accessibility coordinators. Contact them weeks before your match to arrange necessary accommodations.
            </p>
          </div>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-global-line"></i> International Visitors</h3>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-translate"></i> Language Barriers:</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Multilingual signage throughout stadiums</li>
            <li>Translation apps recommended</li>
            <li>Volunteer ambassadors speak multiple languages</li>
            <li>FIFA mobile app offers multiple language options</li>
          </ul>

          <h4 className="editorial-h4 mb-4 flex items-center gap-3"><i className="ri-handshake-line"></i> Cultural Considerations:</h4>
          <p className="whitespace-pre-line">
            Different fan cultures have different customs. Security personnel receive training on international fan behavior to distinguish cultural celebration from security threats.
          </p>

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-checkbox-multiple-line"></i> Your Stadium Security Checklist</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2"><i className="ri-calendar-line"></i> 1 Week Before Match:</h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                <li>☐ Download FIFA mobile app and tickets</li>
                <li>☐ Review venue-specific bag policy and prohibited items</li>
                <li>☐ Purchase clear bag if needed (widely available online)</li>
                <li>☐ Research stadium layout and your entry gate</li>
                <li>☐ Plan transportation and parking</li>
                <li>☐ Check weather forecast and dress appropriately</li>
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2"><i className="ri-calendar-2-line"></i> Day Before Match:</h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                <li>☐ Charge phone fully and bring portable charger</li>
                <li>☐ Screenshot tickets (backup if no cell service)</li>
                <li>☐ Pack permitted items only in clear bag</li>
                <li>☐ Lay out outfit (pockets helpful, no metal)</li>
                <li>☐ Identify what you're leaving at hotel</li>
                <li>☐ Review emergency contacts and procedures</li>
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2"><i className="ri-home-line"></i> Match Day (Before Leaving Accommodation):</h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                <li>☐ Double-check clear bag contents</li>
                <li>☐ Bring only essentials (ID, credit card, phone, tickets)</li>
                <li>☐ Apply sunscreen before departure (aerosols prohibited)</li>
                <li>☐ Wear comfortable shoes for walking and standing</li>
                <li>☐ Leave prohibited items secured in hotel</li>
                <li>☐ Verify phone battery at 100%</li>
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2"><i className="ri-stadium-line"></i> At Stadium:</h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                <li>☐ Arrive 2-3 hours before kickoff</li>
                <li>☐ Have mobile ticket ready before reaching checkpoint</li>
                <li>☐ Remove metal items before security screening</li>
                <li>☐ Follow all security personnel instructions</li>
                <li>☐ Note exit locations near your seats</li>
                <li>☐ Locate nearest restrooms and concessions</li>
                <li>☐ Save emergency contact number in phone</li>
              </ul>
            </div>
          </div>

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-shield-star-line"></i> The Bottom Line: Security Is Your Ally</h2>

          <p className="whitespace-pre-line">
            The extensive security measures at World Cup 2026 stadiums exist for one reason: to ensure millions of fans can celebrate football safely. The protocols may seem burdensome, but they're the result of decades of lessons learned from security failures at mega-events worldwide.
          </p>

          <p className="whitespace-pre-line">
            The Copa América disaster demonstrated what happens when proper security isn't implemented. World Cup 2026 will not repeat those failures.
          </p>

          <h3 className="editorial-h3 mb-4 flex items-center gap-3"><i className="ri-lightbulb-line"></i> What This Means for You:</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Expect the Process:</h4>
              <p className="text-sm whitespace-pre-line">Security screening takes time. Don't fight it. Plan for it.</p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Follow the Rules:</h4>
              <p className="text-sm whitespace-pre-line">Clear bag policies and prohibited items lists aren't suggestions. Compliance speeds entry for everyone.</p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Arrive Early:</h4>
              <p className="text-sm whitespace-pre-line">2-3 hours before kickoff isn't excessive. It's necessary. Fans who arrive late risk missing the match they traveled thousands of miles to see.</p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Cooperate with Security:</h4>
              <p className="text-sm whitespace-pre-line">Security personnel aren't obstacles. They're protecting you. Courtesy and cooperation make everyone's experience better.</p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Stay Aware:</h4>
              <p className="text-sm whitespace-pre-line">Know where exits are located. Have emergency contacts saved. Report suspicious activity. Your vigilance contributes to collective safety.</p>
            </div>
          </div>

          <p className="whitespace-pre-line text-lg font-semibold text-center my-8">
            The 2026 FIFA World Cup represents a once-in-a-generation opportunity to witness history. With proper preparation and understanding of security procedures, you'll spend your energy on celebration rather than stress.
          </p>

          <p className="whitespace-pre-line text-center font-medium">
            See you at the stadiums. Stay safe. Enjoy the beautiful game.
          </p>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-question-line"></i> Quick Reference: Stadium Security FAQs</h2>

          <div className="space-y-4 mb-8">
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Q: Can I bring my phone?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">A: Yes. Phones are permitted and required for mobile tickets.</p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Q: Are professional cameras allowed?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">A: No. Cameras with detachable lenses are prohibited. Small personal cameras (point-and-shoot) are typically allowed.</p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Q: Can I bring an empty water bottle?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">A: Yes. Empty reusable water bottles are permitted. Fill at stadium fountains.</p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Q: What if I have a medical condition requiring medication?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">A: Bring medications in original prescription containers. Have doctor's note if possible. Alert security for expedited screening.</p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Q: Can I re-enter the stadium if I leave?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">A: No. Most stadiums prohibit re-entry. Plan to stay inside for entire match.</p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Q: What happens to confiscated items?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">A: Items are typically discarded. Valuable items may be held for retrieval after the match, but policies vary. Don't risk bringing prohibited items.</p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Q: Are there bag storage options?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">A: Limited. Some stadiums partner with third-party bag storage companies outside venues. Check your specific stadium's website.</p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Q: How early can I enter the stadium?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">A: Gates typically open 2 hours before kickoff. Times vary by stadium—check your venue.</p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Q: What if I have accessibility needs?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">A: Contact stadium accessibility services weeks before your match to arrange accommodations.</p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Q: Can I bring food allergies or dietary restrictions items?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">A: Outside food is generally prohibited. Contact stadium guest services in advance to discuss accommodations for severe allergies.</p>
            </div>
          </div>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <h2 className="editorial-h2 mb-4 flex items-center gap-3"><i className="ri-book-line"></i> Related World Cup 2026 Safety Guides</h2>

          <ul className="list-disc list-inside ml-4 space-y-1 mb-6">
            <li><strong>Main Safety Hub:</strong> Comprehensive overview of all safety considerations</li>
            <li><strong>Travel Insurance Guide:</strong> Protect your investment and ensure medical coverage</li>
            <li><strong>Scam Prevention Guide:</strong> Avoid ticket fraud and travel scams</li>
            <li><strong>Health and Medical Guide:</strong> Vaccinations, heat safety, and emergency medical care</li>
            <li><strong>Transportation Safety:</strong> Moving safely between host cities</li>
            <li><strong>Emergency Resources:</strong> Critical contacts for all venues</li>
          </ul>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <p className="whitespace-pre-line text-sm text-slate-600 dark:text-slate-400">
            <strong>Disclosure:</strong> This article may contain affiliate links to safety products and services we recommend based on their effectiveness for travelers. We may earn a commission if you purchase through these links at no additional cost to you. All recommendations are based on objective evaluation and traveler needs.
          </p>

          <p className="whitespace-pre-line text-sm text-slate-600 dark:text-slate-400">
            <strong>Last Updated:</strong> November 2025 | Information based on confirmed FIFA protocols, stadium policies, and law enforcement briefings. Specific procedures may be updated as match dates approach. Check official FIFA and venue websites for final details.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  )
}
