import { useEffect } from 'react';

export default function HealthMedicalPreparednessPage() {
  const title = 'Health & Medical Preparedness'
  const url = '/guides/health-and-medical-preparedness'
  
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": "Comprehensive health and medical guide for World Cup 2026 travelers, covering extreme heat safety, vaccination requirements, and medical insurance essentials.",
      "author": {
        "@type": "Person",
        "name": "Dr. Lina Chen"
      },
      "publisher": {
        "@type": "Organization",
        "name": "StadiumPort",
        "logo": {
          "@type": "ImageObject",
          "url": "https://stadiumport.com/logo.png"
        }
      },
      "datePublished": "2025-11-13",
      "dateModified": "2025-11-13"
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-sm font-medium mb-6">
              <i className="ri-heart-pulse-line mr-2"></i>
              Health & Medical Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white mb-6 leading-tight">
              Health & Medical Preparedness
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Essential health and medical guidance for World Cup 2026 travelers, including extreme heat safety, vaccination requirements, and comprehensive medical insurance coverage.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white dark:bg-navy-800 border-b border-slate-200 dark:border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 py-4 text-sm">
            <a href="/" className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400">
              <i className="ri-home-line"></i>
            </a>
            <span className="text-slate-400 dark:text-slate-500">/</span>
            <a href="/guides" className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400">
              Guides
            </a>
            <span className="text-slate-400 dark:text-slate-500">/</span>
            <span className="text-slate-900 dark:text-slate-200 font-medium">Health & Medical Preparedness</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 mb-8">
            <div className="flex items-start">
              <i className="ri-temp-hot-line text-orange-500 text-xl mr-3 mt-1"></i>
              <div>
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-200 mb-2">Extreme Heat Warning</h3>
                <p className="text-orange-800 dark:text-orange-300 mb-0">
                  The 2026 FIFA World Cup will be the first tournament where extreme heat presents a medically verified threat to every attendee. Climate scientists warn that 14 out of 16 host cities frequently exceed dangerous heat thresholds during June and July.
                </p>
              </div>
            </div>
          </div>

          <div className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 space-y-6">
            <p>
              The 2026 FIFA World Cup will be the first tournament where extreme heat presents a medically verified threat to every attendee. During the 2024 Copa América, a Guatemalan referee collapsed on the pitch in Kansas City when temperatures reached 33°C (91°F) with 50% humidity—conditions that 14 out of 16 World Cup 2026 host locations will experience on an average June or July day.
            </p>

            <p>
              Queen's University Belfast analyzed 20 years of meteorological data and delivered a stark warning: six host cities—Atlanta, Dallas, Houston, Kansas City, Miami, and Monterrey—pose an "extremely high risk" of heat-stress injury, with at least 75% of June and July afternoons in Dallas, Houston, Monterrey, and Miami expected to exceed dangerous heat thresholds.
            </p>

            <p>
              England defender Reece James, who captained Chelsea through the 2025 Club World Cup heat wave, warned his teammates to prepare for "super difficult conditions" after experiencing temperatures that forced players to cut training short and left some feeling dizzy on the field.
            </p>

            <p>
              This isn't hypothetical. The health risks are real, documented, and waiting for unprepared travelers. But with proper medical preparation, heat safety knowledge, and adequate insurance coverage, you can protect yourself and your family while experiencing the tournament safely.
            </p>

            <p>
              This comprehensive guide reveals the specific medical threats you'll face, which health preparations are essential, how to recognize and respond to heat emergencies, and what medical coverage you absolutely need. Based on verified research from climate scientists, medical experts, and health authorities, here's how to stay healthy during World Cup 2026.
            </p>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8 flex items-center">
              <i className="ri-temp-hot-line text-red-500 mr-3"></i>
              The Extreme Heat Crisis: Understanding the Threat
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-navy-800 dark:text-white mb-4">The Science of Dangerous Heat</h3>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    The wet bulb globe temperature (WBGT) measures how effectively bodies can cool through sweating when conditions are hot and humid. Medical authorities recommend delaying or postponing football matches when WBGT exceeds 28°C (82.4°F).
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 mb-0">
                    Queen's University Belfast's analysis of 20 years of data shows that 14 out of 16 host cities frequently exceed this threshold during June and July afternoons, with six locations reaching "extremely high risk" levels.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-3 flex items-center">
                  <i className="ri-warning-line mr-2"></i>
                  What This Means for Your Body
                </h4>
                <p className="text-red-800 dark:text-red-300 mb-4">
                  When external temperature and humidity prevent effective sweating, your core body temperature rises. The highest wet-bulb temperature humans can survive when exposed to the elements for at least six hours is about 35°C (95°F).
                </p>
                <p className="text-red-800 dark:text-red-300 mb-0">
                  Medical researcher Julien Périard from the University of Canberra explains: "When players experience hyperthermia, they also experience an increase in cardiovascular strain. If core temperature increases excessively, exertional heat illness can occur"—leading to muscle cramping, heat exhaustion, and potentially life-threatening heat stroke.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-navy-800 dark:text-white mb-4">The High-Risk Cities</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Research published in Scientific Reports identified the highest-risk locations as Monterrey, Mexico; Arlington (Dallas area), Texas; and Houston, with suggested average hourly temperatures above 49.5°C (121.1°F).
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-xl border border-red-200 dark:border-red-800">
                    <h4 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-4 flex items-center">
                      <i className="ri-alert-line mr-2"></i>
                      Extreme Risk Cities
                    </h4>
                    <ul className="space-y-2 text-red-800 dark:text-red-300">
                      <li><strong>Monterrey, Mexico</strong> - Highest overall risk</li>
                      <li><strong>Dallas/Arlington, Texas</strong> - 5% of June/July days exceed 32°C WBGT at 2 PM</li>
                      <li><strong>Houston, Texas</strong> - Severe heat + extreme humidity</li>
                      <li><strong>Miami, Florida</strong> - Unique pattern with highest WBGT between 11 AM-noon</li>
                      <li><strong>Atlanta, Georgia</strong> - Heat dome events common</li>
                      <li><strong>Kansas City, Missouri</strong> - 8% exceedance rate at 3-5 PM in hot years</li>
                    </ul>
                  </div>

                  <div className="bg-orange-100 dark:bg-orange-900/30 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                    <h4 className="text-lg font-semibold text-orange-900 dark:text-orange-200 mb-4 flex items-center">
                      <i className="ri-error-warning-line mr-2"></i>
                      Very High Risk Cities
                    </h4>
                    <ul className="space-y-2 text-orange-800 dark:text-orange-300">
                      <li><strong>Philadelphia, Pennsylvania</strong> - 8% exceedance rate at 2 PM in hot years</li>
                      <li><strong>Boston, Massachusetts</strong></li>
                      <li><strong>New York/New Jersey</strong></li>
                    </ul>

                    <h4 className="text-lg font-semibold text-green-900 dark:text-green-200 mb-4 mt-6 flex items-center">
                      <i className="ri-shield-check-line mr-2"></i>
                      Lower Risk Cities
                    </h4>
                    <ul className="space-y-2 text-green-800 dark:text-green-300">
                      <li>Los Angeles, California</li>
                      <li>San Francisco, California</li>
                      <li>Seattle, Washington</li>
                      <li>Vancouver, Canada</li>
                      <li>Toronto, Canada</li>
                      <li>Guadalajara, Mexico</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
                <h4 className="text-lg font-semibold text-yellow-900 dark:text-yellow-200 mb-3 flex items-center">
                  <i className="ri-information-line mr-2"></i>
                  Real-World Evidence from the 2025 Club World Cup
                </h4>
                <p className="text-yellow-800 dark:text-yellow-300 mb-4">
                  During the 2025 Club World Cup held across U.S. cities from June 14 to July 13, extreme heat and thunderstorms forced FIFA to implement emergency protocols including extra cooling breaks, additional water stations, shaded benches, and air fans.
                </p>
                <p className="text-yellow-800 dark:text-yellow-300 mb-4">
                  Chelsea manager Enzo Maresca said it was "impossible" to train properly in Philadelphia's 98.6°F weather. Midfielder Enzo Fernández described the 96°F heat during a 3 PM kickoff as "very dangerous," reporting he felt "really dizzy" and "had to lie down on the ground".
                </p>
                <p className="text-yellow-800 dark:text-yellow-300 mb-0">
                  Benfica forward Andreas Schjelderup stated after playing in Group C: "I don't think I have ever played in such heat. I don't think it's healthy, to be honest".
                </p>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8 flex items-center">
              <i className="ri-first-aid-kit-line text-red-500 mr-3"></i>
              Heat-Related Illnesses: Recognition and Response
            </h2>

            <div className="space-y-8">
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-orange-900 dark:text-orange-200 mb-4 flex items-center">
                  <i className="ri-error-warning-line mr-2"></i>
                  Heat Exhaustion
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">What It Is:</h4>
                    <p className="text-orange-800 dark:text-orange-300">Your body loses excessive water and salt through sweating, compromising its ability to regulate temperature.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">Symptoms:</h4>
                    <ul className="text-orange-800 dark:text-orange-300 space-y-1">
                      <li>• Heavy sweating</li>
                      <li>• Pale, clammy skin</li>
                      <li>• Muscle cramps</li>
                      <li>• Weakness or fatigue</li>
                      <li>• Dizziness or lightheadedness</li>
                      <li>• Nausea or vomiting</li>
                      <li>• Headache</li>
                      <li>• Rapid, weak pulse</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">Immediate Action:</h4>
                    <ol className="text-orange-800 dark:text-orange-300 space-y-1">
                      <li>1. Move to air-conditioned or shaded area immediately</li>
                      <li>2. Remove excess clothing</li>
                      <li>3. Apply cool, wet cloths to skin or sit in cool bath</li>
                      <li>4. Sip water slowly (avoid alcohol or caffeine)</li>
                      <li>5. Seek medical attention if symptoms worsen or last longer than 1 hour</li>
                    </ol>
                  </div>
                </div>
                <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg mt-4">
                  <p className="text-orange-900 dark:text-orange-200 font-medium mb-0">
                    <i className="ri-alert-line mr-2"></i>
                    Warning: Heat exhaustion can rapidly progress to heat stroke if untreated.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-red-900 dark:text-red-200 mb-4 flex items-center">
                  <i className="ri-hospital-line mr-2"></i>
                  Heat Stroke (MEDICAL EMERGENCY)
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">What It Is:</h4>
                    <p className="text-red-800 dark:text-red-300">Your body's temperature regulation system fails. Core temperature rises to dangerous levels (104°F/40°C or higher). This is life-threatening and requires immediate emergency medical attention.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Symptoms:</h4>
                    <ul className="text-red-800 dark:text-red-300 space-y-1">
                      <li>• Body temperature 104°F (40°C) or higher</li>
                      <li>• Hot, dry skin (sweating has stopped) OR profuse sweating</li>
                      <li>• Rapid, strong pulse OR weak pulse</li>
                      <li>• Confusion, altered mental state, or slurred speech</li>
                      <li>• Loss of consciousness</li>
                      <li>• Seizures</li>
                      <li>• Severe headache</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Immediate Action:</h4>
                    <ol className="text-red-800 dark:text-red-300 space-y-1">
                      <li>1. <strong>Call 911 (or local emergency number) immediately</strong></li>
                      <li>2. Move person to cool area</li>
                      <li>3. Cool the person rapidly using whatever methods available:</li>
                      <li className="ml-6">• Immerse in cool bath or shower</li>
                      <li className="ml-6">• Spray with garden hose</li>
                      <li className="ml-6">• Apply ice packs to neck, armpits, and groin</li>
                      <li className="ml-6">• Fan while misting with water</li>
                      <li>4. Do NOT give fluids if person is unconscious</li>
                      <li>5. Continue cooling until emergency responders arrive</li>
                    </ol>
                  </div>
                </div>
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg mt-4">
                  <p className="text-red-900 dark:text-red-200 font-medium mb-0">
                    <i className="ri-alert-line mr-2"></i>
                    Critical: Heat stroke kills. Survival depends on how quickly body temperature is reduced. Minutes matter.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-yellow-900 dark:text-yellow-200 mb-4 flex items-center">
                  <i className="ri-run-line mr-2"></i>
                  Heat Cramps
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">What It Is:</h4>
                    <p className="text-yellow-800 dark:text-yellow-300">Painful muscle spasms caused by loss of salt and minerals through heavy sweating.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Symptoms:</h4>
                    <ul className="text-yellow-800 dark:text-yellow-300 space-y-1">
                      <li>• Painful cramps in legs, arms, or abdomen</li>
                      <li>• Muscle spasms during or after intense activity in heat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Immediate Action:</h4>
                    <ol className="text-yellow-800 dark:text-yellow-300 space-y-1">
                      <li>1. Stop activity and rest in cool location</li>
                      <li>2. Drink water or sports drink with electrolytes</li>
                      <li>3. Gently stretch and massage cramped muscles</li>
                      <li>4. Do NOT resume activity for several hours</li>
                      <li>5. Seek medical attention if cramps last longer than 1 hour or if you have heart problems</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-200 mb-4 flex items-center">
                  <i className="ri-user-heart-line mr-2"></i>
                  Who Is at Highest Risk?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">High-Risk Groups:</h4>
                    <ul className="text-blue-800 dark:text-blue-300 space-y-2">
                      <li>• Adults over 65 years old</li>
                      <li>• Infants and young children</li>
                      <li>• People with chronic medical conditions (heart disease, diabetes, obesity)</li>
                      <li>• Those taking medications affecting heat regulation (diuretics, beta-blockers, antihistamines)</li>
                      <li>• People not acclimated to heat</li>
                      <li>• Those with previous heat illness</li>
                      <li>• People consuming alcohol</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">Risk Factors:</h4>
                    <ul className="text-blue-800 dark:text-blue-300 space-y-2">
                      <li>• Dehydration</li>
                      <li>• Excessive sun exposure</li>
                      <li>• Overdressing for conditions</li>
                      <li>• Vigorous activity during peak heat hours</li>
                      <li>• Lack of sleep</li>
                      <li>• Recent illness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8 flex items-center">
              <i className="ri-shield-check-line text-green-500 mr-3"></i>
              Essential Heat Safety Strategies
            </h2>

            <div className="space-y-8">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-green-900 dark:text-green-200 mb-4 flex items-center">
                  <i className="ri-calendar-line mr-2"></i>
                  Pre-Tournament Heat Acclimatization
                </h3>
                <div className="space-y-4">
                  <p className="text-green-800 dark:text-green-300">
                    Medical research shows that heat acclimatization significantly reduces risk of heat illness. Ollie Jay, professor at the University of Sydney, notes that by 2023, athletes faced 28% more exposure to moderate or higher heat risk than in the 1990s.
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Acclimatization Protocol (2 Weeks Before Travel):</h4>
                    <p className="text-green-800 dark:text-green-300 mb-4">
                      If you live in cooler climates and will attend matches in high-risk cities, prepare your body:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-900 dark:text-green-200 mb-2">Days 1-3:</h5>
                        <ul className="text-green-800 dark:text-green-300 space-y-1">
                          <li>• Exercise 20-30 minutes daily in warm conditions (if safely available)</li>
                          <li>• Or use sauna/steam room sessions (15-20 minutes)</li>
                          <li>• Hydrate before, during, and after</li>
                        </ul>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-900 dark:text-green-200 mb-2">Days 4-7:</h5>
                        <ul className="text-green-800 dark:text-green-300 space-y-1">
                          <li>• Increase to 40-45 minutes of warm-weather activity</li>
                          <li>• Practice the hydration routine you'll use at matches</li>
                          <li>• Monitor how your body responds</li>
                        </ul>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-900 dark:text-green-200 mb-2">Days 8-14:</h5>
                        <ul className="text-green-800 dark:text-green-300 space-y-1">
                          <li>• Extend to 60+ minutes of activity in heat</li>
                          <li>• Test your clothing choices for matches</li>
                          <li>• Identify your personal warning signs of overheating</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg mt-4">
                      <p className="text-blue-900 dark:text-blue-200 font-medium mb-0">
                        <i className="ri-information-line mr-2"></i>
                        Upon Arrival: Schedule at least 1-2 days in your host city before attending matches to adjust to local conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-200 mb-4 flex items-center">
                  <i className="ri-drop-line mr-2"></i>
                  Hydration Strategy
                </h3>
                <div className="space-y-4">
                  <p className="text-blue-800 dark:text-blue-300">
                    Standard advice says "drink plenty of water," but medical experts recommend specific protocols:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">Pre-Match Hydration:</h4>
                      <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-sm">
                        <li>• Drink 16-20 oz (500-600 ml) of water 2-3 hours before match</li>
                        <li>• Drink another 8-10 oz (250-300 ml) 20-30 minutes before entering stadium</li>
                        <li>• Your urine should be pale yellow—if dark, you're already dehydrated</li>
                      </ul>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">During Match:</h4>
                      <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-sm">
                        <li>• Drink 7-10 oz (200-300 ml) every 15-20 minutes</li>
                        <li>• Don't wait until you feel thirsty—thirst signals you're already dehydrating</li>
                        <li>• Alternate water with electrolyte beverages (sports drinks) if sweating heavily</li>
                        <li>• Stadium water fountains are available—bring empty reusable bottle</li>
                      </ul>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">Post-Match:</h4>
                      <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-sm">
                        <li>• Drink 16-24 oz (500-700 ml) for every pound of body weight lost through sweating</li>
                        <li>• Continue electrolyte replacement</li>
                        <li>• Avoid alcohol until fully rehydrated</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Warning Signs of Dehydration:</h4>
                    <ul className="text-yellow-800 dark:text-yellow-300 grid md:grid-cols-2 gap-2 text-sm">
                      <li>• Dark yellow or amber urine</li>
                      <li>• Decreased urination frequency</li>
                      <li>• Dry mouth and lips</li>
                      <li>• Dizziness or lightheadedness</li>
                      <li>• Extreme thirst</li>
                      <li>• Fatigue</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-purple-900 dark:text-purple-200 mb-4 flex items-center">
                  <i className="ri-t-shirt-line mr-2"></i>
                  Clothing and Sun Protection
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">Optimal Clothing Choices:</h4>
                    <ul className="text-purple-800 dark:text-purple-300 space-y-2">
                      <li>• Light-colored, loose-fitting clothing (reflects heat, allows air circulation)</li>
                      <li>• Moisture-wicking fabrics (polyester, nylon blends)</li>
                      <li>• Wide-brimmed hat or cap (shields face and neck)</li>
                      <li>• Sunglasses with UV protection</li>
                      <li>• Avoid: dark colors, tight clothing, heavy fabrics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">Sunscreen Protocol:</h4>
                    <ul className="text-purple-800 dark:text-purple-300 space-y-2">
                      <li>• Apply broad-spectrum SPF 30+ sunscreen 30 minutes before sun exposure</li>
                      <li>• Reapply every 2 hours or after sweating heavily</li>
                      <li>• Don't forget ears, neck, backs of hands, and tops of feet</li>
                      <li>• Stadium security prohibits aerosol sunscreen—use lotion only</li>
                      <li>• Consider lip balm with SPF protection</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">Additional Cooling Strategies:</h4>
                  <ul className="text-purple-800 dark:text-purple-300 grid md:grid-cols-2 gap-2 text-sm">
                    <li>• Cooling towels (wet and drape around neck)</li>
                    <li>• Small handheld fans (battery-powered, permitted in most stadiums)</li>
                    <li>• Apply cold water to wrists and neck periodically</li>
                    <li>• Seek shade during breaks (concourses, covered seating if available)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center">
                  <i className="ri-time-line mr-2"></i>
                  Timing and Activity Management
                </h3>
                <div className="space-y-4">
                  <p className="text-indigo-800 dark:text-indigo-300">
                    The highest thermal stress at all stadiums occurs from 2 PM to 5 PM local time, with Miami experiencing its peak between 11 AM and noon.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3">Smart Scheduling:</h4>
                      <ul className="text-indigo-800 dark:text-indigo-300 space-y-2">
                        <li>• Request tickets for evening matches when possible (cooler temperatures)</li>
                        <li>• Avoid afternoon matches in extreme-risk cities if you have health concerns</li>
                        <li>• Plan indoor activities during peak heat hours on non-match days</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3">Stadium Arrival Strategy:</h4>
                      <ul className="text-indigo-800 dark:text-indigo-300 space-y-2">
                        <li>• Arrive during cooler morning hours (2-3 hours before kickoff)</li>
                        <li>• Spend time in air-conditioned indoor areas before moving to seats</li>
                        <li>• Take frequent breaks in shaded or indoor concourse areas</li>
                        <li>• Don't feel obligated to remain in direct sun for entire pre-match period</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Post-Match Recovery:</h4>
                    <ul className="text-indigo-800 dark:text-indigo-300 space-y-1 text-sm">
                      <li>• Don't rush out into parking lot heat immediately</li>
                      <li>• Allow time to cool down in stadium</li>
                      <li>• Rehydrate before leaving venue</li>
                      <li>• If driving, run air conditioning before entering hot vehicle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8 flex items-center">
              <i className="ri-syringe-line text-blue-500 mr-3"></i>
              Vaccination and Preventive Health Requirements
            </h2>

            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-200 mb-4 flex items-center">
                  <i className="ri-passport-line mr-2"></i>
                  Current Entry Requirements
                </h3>
                <p className="text-blue-800 dark:text-blue-300 mb-0">
                  As of November 2025, COVID-19 vaccination is no longer a requirement for immigrant or tourist visas to the U.S., and Canada eliminated COVID-19 border measures in October 2022. However, travelers are encouraged to carry proof of vaccination for contingency purposes.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-green-900 dark:text-green-200 mb-4 flex items-center">
                  <i className="ri-shield-check-line mr-2"></i>
                  Recommended Vaccinations
                </h3>
                <p className="text-green-800 dark:text-green-300 mb-6">
                  The CDC recommends ensuring the following vaccinations are up to date before international travel:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Routine Vaccinations:</h4>
                    <ul className="text-green-800 dark:text-green-300 space-y-2">
                      <li>• <strong>Measles-Mumps-Rubella (MMR)</strong> - Measles cases are rising globally, and all international travelers should be fully vaccinated</li>
                      <li>• <strong>Tetanus-Diphtheria-Pertussis (Tdap)</strong></li>
                      <li>• <strong>Influenza (seasonal flu)</strong></li>
                      <li>• <strong>COVID-19</strong> (recommended but not required)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">For Travel to Mexico:</h4>
                    <ul className="text-green-800 dark:text-green-300 space-y-2">
                      <li>• <strong>Hepatitis A</strong> (recommended for all travelers)</li>
                      <li>• <strong>Hepatitis B</strong> (if exposure to blood/bodily fluids possible)</li>
                      <li>• <strong>Typhoid</strong> (if eating at small restaurants or street food vendors)</li>
                      <li>• <strong>Rabies</strong> (if extensive outdoor activities or animal contact expected)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg mt-4">
                  <p className="text-green-900 dark:text-green-200 font-medium mb-0">
                    <i className="ri-time-line mr-2"></i>
                    Timing: Schedule vaccination appointments 4-6 weeks before departure. Some vaccines require multiple doses over several weeks.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-purple-900 dark:text-purple-200 mb-4 flex items-center">
                  <i className="ri-pills-line mr-2"></i>
                  Prescription Medications
                </h3>
                <div className="space-y-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">If You Take Regular Medications:</h4>
                    <ul className="text-purple-800 dark:text-purple-300 space-y-1">
                      <li>• Bring sufficient supply for entire trip plus 3-5 extra days</li>
                      <li>• Keep medications in original prescription containers with labels</li>
                      <li>• Carry doctor's letter listing medications and medical conditions</li>
                      <li>• Pack medications in carry-on luggage (never checked bags)</li>
                      <li>• Research medication legality in host countries—some U.S.-legal drugs are banned elsewhere</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">Controlled Substances:</h4>
                    <p className="text-red-800 dark:text-red-300 mb-3">If your medication is a controlled substance (narcotics, stimulants, etc.):</p>
                    <ul className="text-red-800 dark:text-red-300 space-y-1">
                      <li>• Contact embassies of host countries to verify entry rules</li>
                      <li>• Carry original prescription and doctor's letter</li>
                      <li>• Bring only necessary amounts</li>
                      <li>• Never share medication with others</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Time Zone Adjustments:</h4>
                    <p className="text-blue-800 dark:text-blue-300 mb-0">If medications are time-sensitive, calculate proper dosing times based on time zone changes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8 flex items-center">
              <i className="ri-hospital-line text-blue-500 mr-3"></i>
              Medical Care Access in Host Countries
            </h2>

            <div className="space-y-8">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-red-900 dark:text-red-200 mb-4 flex items-center">
                  <i className="ri-flag-line mr-2"></i>
                  United States
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Healthcare System:</h4>
                    <p className="text-red-800 dark:text-red-300">High-quality care but extremely expensive for those without insurance. Emergency room visits can cost thousands of dollars.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Emergency Care:</h4>
                    <ul className="text-red-800 dark:text-red-300 space-y-1">
                      <li>• Dial 911 for life-threatening emergencies</li>
                      <li>• Emergency rooms required to treat regardless of ability to pay (but will bill afterward)</li>
                      <li>• Urgent care centers available for non-emergencies (cheaper than ER)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Costs Without Insurance:</h4>
                    <ul className="text-red-800 dark:text-red-300 space-y-1">
                      <li>• Emergency room visit: $1,500-$3,000+</li>
                      <li>• Hospital admission: $10,000-$50,000+ per day</li>
                      <li>• Ambulance transport: $500-$2,000+</li>
                      <li>• Prescription medications: Often much more expensive than other countries</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Finding Care:</h4>
                    <ul className="text-red-800 dark:text-red-300 space-y-1">
                      <li>• Most stadiums have on-site medical staff for match days</li>
                      <li>• Hotel concierges can recommend nearby urgent care or doctors</li>
                      <li>• Apps like ZocDoc or Healthgrades locate nearby providers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-red-900 dark:text-red-200 mb-4 flex items-center">
                  <i className="ri-flag-line mr-2"></i>
                  Canada
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Healthcare System:</h4>
                    <p className="text-red-800 dark:text-red-300">Universal healthcare for Canadian residents. Visitors must pay for services.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Emergency Care:</h4>
                    <ul className="text-red-800 dark:text-red-300 space-y-1">
                      <li>• Dial 911 for emergencies</li>
                      <li>• Walk-in clinics available for non-urgent issues</li>
                      <li>• Hospital emergency departments for serious conditions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Costs for Visitors:</h4>
                    <ul className="text-red-800 dark:text-red-300 space-y-1">
                      <li>• Emergency room visit: CAD $1,000-$3,000</li>
                      <li>• Hospital admission: CAD $3,000-$10,000+ per day</li>
                      <li>• Generally less expensive than U.S. but still significant</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Finding Care:</h4>
                    <ul className="text-red-800 dark:text-red-300 space-y-1">
                      <li>• Health811 hotline for medical advice (available in most provinces)</li>
                      <li>• Walk-in clinics widely available in cities</li>
                      <li>• Pharmacists can help with minor ailments</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-green-900 dark:text-green-200 mb-4 flex items-center">
                  <i className="ri-flag-line mr-2"></i>
                  Mexico
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">Healthcare System:</h4>
                    <p className="text-green-800 dark:text-green-300">Mix of public and private facilities. Private hospitals offer excellent care, especially in major cities. Quality varies significantly.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">Emergency Care:</h4>
                    <ul className="text-green-800 dark:text-green-300 space-y-1">
                      <li>• Dial 911 for emergencies</li>
                      <li>• Private hospitals generally provide higher quality care</li>
                      <li>• Language barriers possible in public facilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">Costs for Visitors:</h4>
                    <ul className="text-green-800 dark:text-green-300 space-y-1">
                      <li>• Significantly cheaper than U.S./Canada</li>
                      <li>• Emergency room visit: $50-$300</li>
                      <li>• Hospital admission: $500-$2,000+ per day at private hospitals</li>
                      <li>• Prescription medications often available without prescription and inexpensive</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">Finding Care:</h4>
                    <ul className="text-green-800 dark:text-green-300 space-y-1">
                      <li>• Ask your hotel to recommend nearby private clinics or hospitals</li>
                      <li>• U.S. Embassy maintains list of doctors and hospitals in major cities</li>
                      <li>• Tourist areas have English-speaking medical staff</li>
                      <li>• Mexican pharmacies often have doctors on-site for consultations</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Safety Considerations:</h4>
                    <ul className="text-yellow-800 dark:text-yellow-300 space-y-1">
                      <li>• Use only reputable private hospitals in major cities</li>
                      <li>• Verify credentials of medical providers</li>
                      <li>• Keep all receipts and medical documentation for insurance claims</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8 flex items-center">
              <i className="ri-shield-star-line text-green-500 mr-3"></i>
              Travel Medical Insurance: Essential Coverage
            </h2>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-start">
                <i className="ri-alert-line text-red-500 text-xl mr-3 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-2">Critical Warning</h3>
                  <p className="text-red-800 dark:text-red-300 mb-0">
                    Your domestic health insurance likely provides limited or zero coverage outside your home country. International medical care and especially medical evacuation can cost hundreds of thousands of dollars without proper insurance.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-200 mb-4 flex items-center">
                  <i className="ri-shield-check-line mr-2"></i>
                  Required Coverage Components
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Emergency Medical Treatment:</h4>
                    <p className="text-blue-800 dark:text-blue-300 mb-0">Minimum $100,000 coverage per person. Recommended $150,000-$250,000 for comprehensive protection.</p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Medical Evacuation:</h4>
                    <p className="text-blue-800 dark:text-blue-300 mb-0">Minimum $250,000 for U.S./Canada-only travel. Minimum $500,000-$1,000,000 if traveling to Mexico or crossing multiple borders.</p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Emergency Dental:</h4>
                    <p className="text-blue-800 dark:text-blue-300 mb-0">$500-$1,000 coverage for dental emergencies.</p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Repatriation:</h4>
                    <p className="text-blue-800 dark:text-blue-300 mb-0">Return of remains coverage if death occurs during travel.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-green-900 dark:text-green-200 mb-6 flex items-center">
                  <i className="ri-star-line mr-2"></i>
                  Top Medical Insurance Providers for World Cup 2026
                </h3>
                <div className="space-y-6">
                  <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="text-xl font-semibold text-green-900 dark:text-green-200 mb-3">For Comprehensive Medical Protection: GeoBlue Voyager</h4>
                    <p className="text-green-800 dark:text-green-300 mb-4 font-medium">Best for U.S. citizens traveling to Mexico and Canada.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Key Benefits:</h5>
                        <ul className="text-green-800 dark:text-green-300 space-y-1 text-sm">
                          <li>• Top-rated U.S. network access upon return</li>
                          <li>• Comprehensive pre-existing conditions coverage</li>
                          <li>• Emergency evacuation included</li>
                          <li>• No maximum age limit</li>
                          <li>• Will pay hospitals directly (no upfront payment required)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Why It Works:</h5>
                        <p className="text-green-800 dark:text-green-300 text-sm">Specifically designed for Americans crossing into Mexico/Canada with emphasis on emergency evacuation. The direct payment feature eliminates the stress of upfront costs.</p>
                      </div>
                    </div>
                    <div className="bg-green-200 dark:bg-green-800/30 p-3 rounded mt-4">
                      <p className="text-green-900 dark:text-green-200 font-medium text-sm mb-0">
                        <i className="ri-external-link-line mr-2"></i>
                        Get a Quote: <a href="https://www.geo-blue.com" className="underline hover:no-underline">https://www.geo-blue.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-3">For Maximum Medical Limits: IMG Global</h4>
                    <p className="text-blue-800 dark:text-blue-300 mb-4 font-medium">Best for families and those with health concerns.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Key Benefits:</h5>
                        <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-sm">
                          <li>• Coverage up to $500,000 for medical expenses</li>
                          <li>• $1,000,000 medical evacuation</li>
                          <li>• Pre-existing conditions covered (with requirements met)</li>
                          <li>• Includes emergency reunion benefits</li>
                          <li>• 24/7 multilingual assistance</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Why It Works:</h5>
                        <p className="text-blue-800 dark:text-blue-300 text-sm">The high medical limits provide genuine peace of mind for extended trips across multiple countries. Excellent reputation for paying claims.</p>
                      </div>
                    </div>
                    <div className="bg-blue-200 dark:bg-blue-800/30 p-3 rounded mt-4">
                      <p className="text-blue-900 dark:text-blue-200 font-medium text-sm mb-0">
                        <i className="ri-external-link-line mr-2"></i>
                        Get a Quote: <a href="https://www.imglobal.com" className="underline hover:no-underline">https://www.imglobal.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-100 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="text-xl font-semibold text-orange-900 dark:text-orange-200 mb-3">For Budget-Conscious Travelers: World Nomads</h4>
                    <p className="text-orange-800 dark:text-orange-300 mb-4 font-medium">Best for younger, healthy travelers wanting basic protection.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Key Benefits:</h5>
                        <ul className="text-orange-800 dark:text-orange-300 space-y-1 text-sm">
                          <li>• Affordable premiums for ages under 40</li>
                          <li>• Covers adventure activities</li>
                          <li>• Simple online purchase process</li>
                          <li>• Emergency medical and evacuation included</li>
                          <li>• Extend coverage while traveling if needed</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Why It Works:</h5>
                        <p className="text-orange-800 dark:text-orange-300 text-sm">Solid basic coverage at lower cost. Can be purchased even after leaving home (unlike most providers).</p>
                      </div>
                    </div>
                    <div className="bg-orange-200 dark:bg-orange-800/30 p-3 rounded mt-4">
                      <p className="text-orange-900 dark:text-orange-200 font-medium text-sm mb-0">
                        <i className="ri-external-link-line mr-2"></i>
                        Get a Quote: <a href="https://www.worldnomads.com" className="underline hover:no-underline">https://www.worldnomads.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="text-xl font-semibold text-purple-900 dark:text-purple-200 mb-3">For Pre-Existing Conditions: Allianz OneTrip Premier</h4>
                    <p className="text-purple-800 dark:text-purple-300 mb-4 font-medium">Best for travelers with chronic health conditions.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Key Benefits:</h5>
                        <ul className="text-purple-800 dark:text-purple-300 space-y-1 text-sm">
                          <li>• Robust pre-existing condition coverage</li>
                          <li>• Up to $250,000 emergency medical</li>
                          <li>• Up to $1,000,000 emergency medical transportation</li>
                          <li>• "A+" rated underwriter</li>
                          <li>• Includes trip cancellation benefits</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Why It Works:</h5>
                        <p className="text-purple-800 dark:text-purple-300 text-sm">More flexible pre-existing condition waivers than competitors. The massive evacuation limit covers worst-case scenarios.</p>
                      </div>
                    </div>
                    <div className="bg-purple-200 dark:bg-purple-800/30 p-3 rounded mt-4">
                      <p className="text-purple-900 dark:text-purple-200 font-medium text-sm mb-0">
                        <i className="ri-external-link-line mr-2"></i>
                        Get a Quote: <a href="https://www.allianztravelinsurance.com" className="underline hover:no-underline">https://www.allianztravelinsurance.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-yellow-900 dark:text-yellow-200 mb-4 flex items-center">
                  <i className="ri-calendar-line mr-2"></i>
                  When to Purchase Insurance
                </h3>
                <div className="space-y-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Optimal Timing:</h4>
                    <p className="text-yellow-800 dark:text-yellow-300 mb-0">Within 14-21 days of making your first trip payment (usually when buying tickets).</p>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Why This Matters:</h4>
                    <ul className="text-yellow-800 dark:text-yellow-300 space-y-1">
                      <li>• Activates pre-existing condition waivers</li>
                      <li>• Ensures coverage for events between purchase and departure</li>
                      <li>• May enable cancel-for-any-reason add-ons</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8 flex items-center">
              <i className="ri-shield-check-line text-blue-500 mr-3"></i>
              What Travel Medical Insurance Covers
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-200 mb-4 flex items-center">
                  <i className="ri-check-line mr-2"></i>
                  Covered Medical Situations
                </h3>
                <ul className="text-green-800 dark:text-green-300 space-y-2">
                  <li>• Emergency illness or injury</li>
                  <li>• Emergency dental work</li>
                  <li>• Emergency prescription medications</li>
                  <li>• Hospital stays and surgery</li>
                  <li>• Ambulance transport</li>
                  <li>• Medical evacuation to adequate facility</li>
                  <li>• COVID-19 treatment (if sudden and unexpected)</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-red-900 dark:text-red-200 mb-4 flex items-center">
                  <i className="ri-close-line mr-2"></i>
                  NOT Covered
                </h3>
                <ul className="text-red-800 dark:text-red-300 space-y-2">
                  <li>• Pre-existing conditions (unless waiver obtained)</li>
                  <li>• Routine medical care or check-ups</li>
                  <li>• Elective procedures</li>
                  <li>• Injuries while intoxicated</li>
                  <li>• Injuries during illegal activities</li>
                  <li>• Non-emergency care</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8 flex items-center">
              <i className="ri-user-heart-line text-purple-500 mr-3"></i>
              Special Health Considerations
            </h2>

            <div className="space-y-8">
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-purple-900 dark:text-purple-200 mb-6 flex items-center">
                  <i className="ri-heart-pulse-line mr-2"></i>
                  Traveling with Chronic Conditions
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-3">Diabetes:</h4>
                    <ul className="text-purple-800 dark:text-purple-300 space-y-1 text-sm">
                      <li>• Pack twice as much insulin and testing supplies as you think you'll need</li>
                      <li>• Carry medical ID bracelet or card</li>
                      <li>• Account for time zone changes in dosing schedules</li>
                      <li>• Know how to say "I have diabetes" and "I need sugar" in local languages</li>
                      <li>• Heat can affect blood sugar—monitor more frequently</li>
                    </ul>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-3">Heart Conditions:</h4>
                    <ul className="text-purple-800 dark:text-purple-300 space-y-1 text-sm">
                      <li>• Carry full medication supply plus extra</li>
                      <li>• Have recent EKG copy in travel documents</li>
                      <li>• Know location of cardiac care facilities in host cities</li>
                      <li>• Avoid extreme heat exposure—watch matches in covered/indoor stadiums if possible</li>
                      <li>• Recognize that high altitude (Mexico City, Monterrey) affects cardiovascular system</li>
                    </ul>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-3">Asthma:</h4>
                    <ul className="text-purple-800 dark:text-purple-300 space-y-1 text-sm">
                      <li>• Carry inhalers and spacers in carry-on</li>
                      <li>• Air quality can vary—monitor pollution levels</li>
                      <li>• Stadium crowds and outdoor heat may trigger symptoms</li>
                      <li>• Know how to access emergency care</li>
                    </ul>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-3">High Blood Pressure:</h4>
                    <ul className="text-purple-800 dark:text-purple-300 space-y-1 text-sm">
                      <li>• Heat increases cardiovascular strain—monitor blood pressure</li>
                      <li>• Maintain medication schedule despite travel</li>
                      <li>• Limit alcohol and sodium intake</li>
                      <li>• Stay hydrated</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-pink-900 dark:text-pink-200 mb-4 flex items-center">
                  <i className="ri-women-line mr-2"></i>
                  Pregnancy Considerations
                </h3>
                <div className="space-y-4">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-900 dark:text-pink-200 mb-2">Travel Safety:</h4>
                    <p className="text-pink-800 dark:text-pink-300 mb-3">Most airlines allow travel through 36 weeks, but World Cup travel during third trimester is not recommended due to:</p>
                    <ul className="text-pink-800 dark:text-pink-300 space-y-1 text-sm">
                      <li>• Limited medical facilities at stadiums</li>
                      <li>• Heat exposure risks</li>
                      <li>• Crowd density and potential injury</li>
                      <li>• Distance from prenatal care provider</li>
                    </ul>
                  </div>
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-900 dark:text-pink-200 mb-2">If Traveling While Pregnant:</h4>
                    <ul className="text-pink-800 dark:text-pink-300 space-y-1 text-sm">
                      <li>• Consult your obstetrician before booking</li>
                      <li>• Carry prenatal records and emergency contacts</li>
                      <li>• Verify travel insurance covers pregnancy complications</li>
                      <li>• Stay extremely vigilant about hydration and heat</li>
                      <li>• Avoid high-altitude cities (Mexico City, Monterrey)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-200 mb-4 flex items-center">
                  <i className="ri-parent-line mr-2"></i>
                  Traveling with Children
                </h3>
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
                  <p className="text-blue-800 dark:text-blue-300 mb-0">
                    Children are particularly vulnerable to heat illness because they produce more metabolic heat per body mass, sweat less efficiently, are less aware of overheating symptoms, and depend on adults for hydration.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">Child Heat Safety:</h4>
                    <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-sm">
                      <li>• Dress children in very light, loose clothing</li>
                      <li>• Force hydration every 20 minutes (don't rely on thirst)</li>
                      <li>• Apply sunscreen generously and frequently</li>
                      <li>• Watch for signs of overheating (flushed face, lethargy, irritability)</li>
                      <li>• Take frequent indoor/shaded breaks</li>
                      <li>• Consider attending only evening matches</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">Medical Preparation:</h4>
                    <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-sm">
                      <li>• Pack children's pain/fever medication</li>
                      <li>• Bring thermometer</li>
                      <li>• Have pediatrician contact information</li>
                      <li>• Ensure vaccinations current</li>
                      <li>• Carry medical consent forms if traveling without both parents</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-orange-900 dark:text-orange-200 mb-4 flex items-center">
                  <i className="ri-mountain-line mr-2"></i>
                  Altitude Considerations
                </h3>
                <div className="space-y-4">
                  <p className="text-orange-800 dark:text-orange-300">
                    Mexico City sits at 7,350 feet (2,240 meters) elevation. Monterrey is at 1,765 feet (538 meters).
                  </p>
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">Altitude Sickness Symptoms:</h4>
                    <ul className="text-orange-800 dark:text-orange-300 space-y-1 text-sm">
                      <li>• Headache</li>
                      <li>• Nausea</li>
                      <li>• Fatigue</li>
                      <li>• Shortness of breath</li>
                      <li>• Sleep disturbances</li>
                    </ul>
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">Prevention:</h4>
                    <ul className="text-orange-800 dark:text-orange-300 space-y-1 text-sm">
                      <li>• Arrive 2-3 days before matches to acclimatize</li>
                      <li>• Drink extra water (altitude increases dehydration)</li>
                      <li>• Avoid alcohol for first 24-48 hours</li>
                      <li>• Avoid strenuous activity first day</li>
                      <li>• Consider medication (acetazolamide) if history of altitude sickness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8 flex items-center">
              <i className="ri-restaurant-line text-green-500 mr-3"></i>
              Food and Water Safety
            </h2>

            <div className="space-y-8">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-green-900 dark:text-green-200 mb-4 flex items-center">
                  <i className="ri-flag-line mr-2"></i>
                  United States and Canada
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Water Safety:</h4>
                    <p className="text-green-800 dark:text-green-300">Tap water is safe to drink throughout U.S. and Canada. Bottled water unnecessary but available.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Food Safety:</h4>
                    <p className="text-green-800 dark:text-green-300 mb-2">Restaurant standards generally high. Standard food safety precautions apply:</p>
                    <ul className="text-green-800 dark:text-green-300 space-y-1 text-sm">
                      <li>• Avoid food sitting at room temperature</li>
                      <li>• Ensure meat cooked thoroughly</li>
                      <li>• Wash fruits and vegetables</li>
                      <li>• Check restaurant health ratings (available online)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-yellow-900 dark:text-yellow-200 mb-4 flex items-center">
                  <i className="ri-flag-line mr-2"></i>
                  Mexico
                </h3>
                <div className="space-y-6">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Water Safety:</h4>
                    <ul className="text-yellow-800 dark:text-yellow-300 space-y-1 text-sm">
                      <li>• Do NOT drink tap water</li>
                      <li>• Use bottled water for drinking and brushing teeth</li>
                      <li>• Avoid ice in beverages (may be made with tap water)</li>
                      <li>• Bottled water widely available and inexpensive</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Food Safety:</h4>
                    <ul className="text-yellow-800 dark:text-yellow-300 space-y-1 text-sm">
                      <li>• Eat at busy, reputable establishments</li>
                      <li>• Avoid street food unless very fresh and cooked to order</li>
                      <li>• Choose cooked foods over raw</li>
                      <li>• Peel fruits yourself</li>
                      <li>• Hot food should be served hot, cold food cold</li>
                      <li>• "Boil it, cook it, peel it, or forget it"</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">Traveler's Diarrhea:</h4>
                    <p className="text-red-800 dark:text-red-300 mb-2">Very common among visitors to Mexico. Pack:</p>
                    <ul className="text-red-800 dark:text-red-300 space-y-1 text-sm">
                      <li>• Loperamide (Imodium) for symptom relief</li>
                      <li>• Oral rehydration salts</li>
                      <li>• Antibiotics (ciprofloxacin or azithromycin) with doctor's prescription</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">Prevention:</h4>
                    <ul className="text-green-800 dark:text-green-300 space-y-1 text-sm">
                      <li>• Bismuth subsalicylate (Pepto-Bismol) taken prophylactically can reduce risk</li>
                      <li>• Probiotics may help</li>
                      <li>• Hand washing crucial</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8 flex items-center">
              <i className="ri-first-aid-kit-line text-red-500 mr-3"></i>
              Emergency Action Plan
            </h2>

            <div className="space-y-8">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-red-900 dark:text-red-200 mb-4 flex items-center">
                  <i className="ri-hospital-line mr-2"></i>
                  Medical Emergency Response
                </h3>
                <div className="space-y-6">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">Minor Issues (Heat Cramps, Mild Dehydration, Cuts):</h4>
                    <ol className="text-orange-800 dark:text-orange-300 space-y-1 text-sm">
                      <li>1. Alert nearest stadium medical staff or usher</li>
                      <li>2. Move to shaded/air-conditioned area</li>
                      <li>3. Rest and rehydrate</li>
                      <li>4. Monitor for worsening symptoms</li>
                    </ol>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Moderate Issues (Heat Exhaustion, Severe Pain, Allergic Reactions):</h4>
                    <ol className="text-yellow-800 dark:text-yellow-300 space-y-1 text-sm">
                      <li>1. Alert stadium medical immediately</li>
                      <li>2. Call 911 if outside stadium</li>
                      <li>3. Follow first aid procedures</li>
                      <li>4. Call travel insurance emergency hotline</li>
                      <li>5. Document all care received (photos of receipts, medical reports)</li>
                    </ol>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">Severe Issues (Heat Stroke, Chest Pain, Loss of Consciousness):</h4>
                    <ol className="text-red-800 dark:text-red-300 space-y-1 text-sm">
                      <li>1. <strong>Call 911 immediately</strong> (or local emergency number)</li>
                      <li>2. Alert those around you to get help</li>
                      <li>3. Begin first aid if trained</li>
                      <li>4. Call travel insurance emergency hotline as soon as possible</li>
                      <li>5. Have someone contact your emergency contact back home</li>
                      <li>6. Keep all medical documentation for insurance claims</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-200 mb-4 flex items-center">
                  <i className="ri-file-list-line mr-2"></i>
                  Insurance Claims Process
                </h3>
                <div className="space-y-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">During Medical Emergency:</h4>
                    <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-sm">
                      <li>• Call insurance company's 24/7 emergency assistance line BEFORE treatment if possible</li>
                      <li>• They may guarantee payment to hospital directly</li>
                      <li>• Follow their instructions for claims process</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">If You Must Pay Upfront:</h4>
                    <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-sm">
                      <li>• Keep ALL receipts (hospital, ambulance, prescriptions, medical equipment)</li>
                      <li>• Get detailed itemized bills in English if possible</li>
                      <li>• Obtain full medical reports and diagnoses</li>
                      <li>• Take photos of all documentation</li>
                      <li>• Get doctor's statement explaining medical necessity</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Filing Claims:</h4>
                    <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-sm">
                      <li>• Submit claims within 30-90 days (check your policy)</li>
                      <li>• Include all documentation and receipts</li>
                      <li>• Provide translation of foreign documents if required</li>
                      <li>• Follow up persistently if denied</li>
                      <li>• Appeal with additional evidence if necessary</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-green-900 dark:text-green-200 mb-4 flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  Essential Contact Information to Carry
                </h3>
                <div className="space-y-6">
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">Emergency Numbers:</h4>
                    <ul className="text-green-800 dark:text-green-300 space-y-1 text-sm">
                      <li>• <strong>U.S./Canada:</strong> 911</li>
                      <li>• <strong>Mexico:</strong> 911</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">U.S. Embassy Contacts:</h4>
                    <ul className="text-green-800 dark:text-green-300 space-y-1 text-sm">
                      <li>• <strong>Mexico City:</strong> +52-55-5080-2000</li>
                      <li>• <strong>Monterrey:</strong> +52-81-8047-3100</li>
                      <li>• <strong>Guadalajara:</strong> +52-33-3268-2100</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">Your Medical Information Card:</h4>
                    <p className="text-green-800 dark:text-green-300 mb-2">Create a card with:</p>
                    <ul className="text-green-800 dark:text-green-300 space-y-1 text-sm">
                      <li>• Blood type</li>
                      <li>• Chronic conditions</li>
                      <li>• Current medications</li>
                      <li>• Allergies</li>
                      <li>• Emergency contact name and phone</li>
                      <li>• Travel insurance company and policy number</li>
                      <li>• Travel insurance emergency hotline</li>
                    </ul>
                    <p className="text-green-800 dark:text-green-300 text-sm mt-2 mb-0">Carry this card in your wallet and have a digital copy on your phone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8 flex items-center">
              <i className="ri-calendar-check-line text-blue-500 mr-3"></i>
              Your Medical Preparation Timeline
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-4 flex items-center">
                  <i className="ri-time-line mr-2"></i>
                  90 Days Before First Match
                </h3>
                <ul className="text-blue-800 dark:text-blue-300 space-y-2">
                  <li>☐ Schedule appointment with doctor for travel health consultation</li>
                  <li>☐ Begin recommended vaccinations</li>
                  <li>☐ Obtain prescriptions for full trip duration plus extra</li>
                  <li>☐ Purchase comprehensive travel medical insurance</li>
                  <li>☐ Research medical facilities in host cities you'll visit</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-200 mb-4 flex items-center">
                  <i className="ri-time-line mr-2"></i>
                  60 Days Before
                </h3>
                <ul className="text-green-800 dark:text-green-300 space-y-2">
                  <li>☐ Complete vaccination series</li>
                  <li>☐ Fill all prescriptions</li>
                  <li>☐ Create medical information card</li>
                  <li>☐ Start heat acclimatization if from cool climate</li>
                  <li>☐ Purchase heat safety supplies (cooling towels, reusable water bottle, sunscreen)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-200 mb-4 flex items-center">
                  <i className="ri-time-line mr-2"></i>
                  30 Days Before
                </h3>
                <ul className="text-yellow-800 dark:text-yellow-300 space-y-2">
                  <li>☐ Verify insurance card/documentation received</li>
                  <li>☐ Save insurance emergency hotline in phone</li>
                  <li>☐ Pack first aid kit with all medications</li>
                  <li>☐ Research hospital locations near stadiums and hotels</li>
                  <li>☐ Make copies of prescriptions and medical records</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-200 mb-4 flex items-center">
                  <i className="ri-time-line mr-2"></i>
                  1 Week Before
                </h3>
                <ul className="text-orange-800 dark:text-orange-300 space-y-2">
                  <li>☐ Recheck medication supply</li>
                  <li>☐ Print insurance policy and emergency contacts</li>
                  <li>☐ Pack medical information card with travel documents</li>
                  <li>☐ Download offline maps showing nearby hospitals</li>
                  <li>☐ Inform travel companions of any medical conditions</li>
                  <li>☐ Take "before" photos of all prescription bottles for documentation</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-red-900 dark:text-red-200 mb-4 flex items-center">
                  <i className="ri-time-line mr-2"></i>
                  Upon Arrival
                </h3>
                <ul className="text-red-800 dark:text-red-300 space-y-2">
                  <li>☐ Locate nearest hospital/medical facility</li>
                  <li>☐ Begin heat acclimatization protocol</li>
                  <li>☐ Test local emergency number on phone</li>
                  <li>☐ Adjust medication schedule for time zone</li>
                  <li>☐ Identify pharmacy locations for any emergency needs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-12">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl border border-red-200 dark:border-red-800">
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-6 flex items-center">
                <i className="ri-shield-star-line text-red-500 mr-3"></i>
                The Bottom Line: Prevention Saves Lives
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-slate-700 dark:text-slate-300">
                  The 2026 World Cup will be played during what climatologist Friederike Otto from Imperial College London calls potentially deadly conditions: "If you want to play football for 10 hours a day, they'll have to be the hours of the early morning and late evening if you don't want to have players and fans die from heatstroke or get severely ill with heat exhaustion."
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  University of Pennsylvania climate scientist Michael Mann frames it starkly: "This is symbolic of something bigger—not just the danger and inconvenience to fans and players, but the fundamentally disruptive nature of climate change when it comes to our current way of life".
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  The health risks are real and documented. But they're also manageable with proper preparation:
                </p>
                <div className="bg-white/50 dark:bg-navy-800/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-4">Essential Actions:</h3>
                  <ul className="text-slate-700 dark:text-slate-300 space-y-2">
                    <li>• Understand heat illness symptoms and response protocols</li>
                    <li>• Hydrate aggressively before, during, and after matches</li>
                    <li>• Dress appropriately and use sun protection</li>
                    <li>• Consider match timing when booking tickets</li>
                    <li>• Ensure comprehensive medical insurance with adequate limits</li>
                    <li>• Carry necessary medications and medical documentation</li>
                    <li>• Know how to access emergency care in each host country</li>
                  </ul>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium">
                  The statistics are clear: properly prepared travelers can attend World Cup 2026 safely even in extreme heat. Those who ignore the risks face genuine medical emergencies.
                </p>
                <p className="text-slate-700 dark:text-slate-300 font-medium">
                  Protect yourself. Protect your family. Prepare properly. The beautiful game is worth experiencing safely.
                </p>
              </div>
            </div>
          </div>

          <div className="my-12">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-6 flex items-center">
                <i className="ri-phone-line text-blue-500 mr-3"></i>
                Quick Reference: Medical Emergency Contacts
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-navy-800 dark:text-white mb-3">Emergency Services:</h3>
                  <ul className="text-slate-700 dark:text-slate-300 space-y-1">
                    <li>• <strong>U.S./Canada:</strong> 911</li>
                    <li>• <strong>Mexico:</strong> 911</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-800 dark:text-white mb-3">U.S. Embassies in Mexico:</h3>
                  <ul className="text-slate-700 dark:text-slate-300 space-y-1">
                    <li>• <strong>Mexico City:</strong> +52-55-5080-2000</li>
                    <li>• <strong>Monterrey:</strong> +52-81-8047-3100</li>
                    <li>• <strong>Guadalajara:</strong> +52-33-3268-2100</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-800 dark:text-white mb-3">Poison Control:</h3>
                  <ul className="text-slate-700 dark:text-slate-300 space-y-1">
                    <li>• <strong>U.S.:</strong> 1-800-222-1222</li>
                    <li>• <strong>Canada:</strong> Contact local poison control through 911</li>
                    <li>• <strong>Mexico:</strong> 800-00-21400</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-800 dark:text-white mb-3">Travel Insurance Emergency Hotlines:</h3>
                  <p className="text-slate-700 dark:text-slate-300">Save your specific provider's 24/7 number before traveling</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-6 flex items-center">
                <i className="ri-links-line text-blue-500 mr-3"></i>
                Related World Cup 2026 Safety Guides
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="#" className="block text-blue-600 dark:text-blue-400 hover:underline text-sm">• Main Safety Hub: Comprehensive overview of all safety considerations</a>
                  <a href="#" className="block text-blue-600 dark:text-blue-400 hover:underline text-sm">• Travel Insurance Guide: Detailed coverage comparison and buying strategies</a>
                  <a href="#" className="block text-blue-600 dark:text-blue-400 hover:underline text-sm">• Stadium Security Guide: What to expect at venue security checkpoints</a>
                </div>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-600 dark:text-blue-400 hover:underline text-sm">• Scam Prevention Guide: Avoid ticket fraud and travel scams</a>
                  <a href="#" className="block text-blue-600 dark:text-blue-400 hover:underline text-sm">• Transportation Safety: Moving safely between host cities</a>
                  <a href="#" className="block text-blue-600 dark:text-blue-400 hover:underline text-sm">• Emergency Resources: Complete contact directory for all venues</a>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12">
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                <strong>Disclosure:</strong> This article contains affiliate links to travel medical insurance providers we recommend based on coverage quality and claims handling reputation. We may earn a commission if you purchase through these links at no additional cost to you. All recommendations are based on objective evaluation of policy terms and medical coverage adequacy. Your health is our priority.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 mb-0">
                <strong>Last Updated:</strong> November 2025 | This guide incorporates the latest climate research, medical recommendations, and entry requirements. Information is subject to change as the tournament approaches. Consult official health authorities and your physician for personalized medical advice.
              </p>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-navy-700">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">DLC</span>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 dark:text-white">Dr. Lina Chen</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Medical Advisor specializing in travel medicine and emergency preparedness for international sporting events.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}