'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { 
  ArrowRight, ChevronDown, Globe, Shield, Map, Clock, CreditCard, Smartphone,
  Calendar, Ticket, Plane, Train, Car, DollarSign, AlertTriangle, Info, 
  CheckCircle, Users, Sun, Utensils, Wifi
} from 'lucide-react';

const guides = [
  {
    title: "World Cup 2026 Budget Guide: Complete Cost Breakdown & Savings Strategies",
    teaser: "A realistic look at what you'll spend—and how to save thousands without compromising the experience.",
    icon: CreditCard,
    link: "/world-cup-2026-budget-guide",
    image: "/images/travel-tips/World Cup 2026 Budget Guide Cover Illustration.webp"
  },
  {
    title: "Best Time to Book World Cup 2026: Tickets, Flights & Hotels",
    teaser: "Timing is everything. Learn the exact booking windows to secure the best rates and availability.",
    icon: Clock,
    link: "/best-time-book-world-cup-2026",
    image: "/images/travel-tips/Best Time to Book World Cup 2026 Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Accommodation Guide: Where to Stay for Every Budget",
    teaser: "From luxury hotels to strategic hostels. How to find a bed when millions descend on North America.",
    icon: Map,
    link: "/world-cup-2026-accommodation-guide",
    image: "/images/travel-tips/World Cup 2026 Accommodation Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Flight Booking Guide: Routes, Airlines & Strategies",
    teaser: "Master the art of multi-city travel. Hub strategies, open-jaw tickets, and regional carriers explained.",
    icon: Globe,
    link: "/world-cup-2026-flight-booking-guide",
    image: "/images/travel-tips/World Cup 2026 Flight Booking Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Itinerary Planning: 1, 2, or 3 Week Sample Itineraries",
    teaser: "Don't waste time in transit. Optimized routes for seeing the most football with the least stress.",
    icon: Map,
    link: "/world-cup-2026-itinerary-planning",
    image: "/images/travel-tips/World Cup 2026 Itinerary Planning Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Packing Guide: Ultimate Checklist for All Weather",
    teaser: "From Mexican heat to Canadian cool. What to bring for a continent-spanning adventure.",
    icon: Shield,
    link: "/world-cup-2026-packing-guide",
    image: "/images/travel-tips/World Cup 2026 Packing Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Match Selection Strategy: Which Games to Attend",
    teaser: "Group stage value vs. knockout drama. How to build a match schedule that delivers unforgettable moments.",
    icon: ArrowRight,
    link: "/world-cup-2026-match-selection-strategy",
    image: "/images/travel-tips/World Cup 2026 Match Selection Strategy Illustration.webp"
  },
  {
    title: "World Cup 2026 Food & Dining Guide: Eating Well on Any Budget",
    teaser: "Street tacos in Mexico City, BBQ in Kansas City, and pizza in NY. Eat like a local champion.",
    icon: Utensils,
    link: "/world-cup-2026-food-dining-guide",
    image: "/images/travel-tips/World Cup 2026 Food & Dining Guide Illustration.webp"
  },
  {
    title: "World Cup 2026 Connectivity Guide: Phone Plans, SIM Cards & WiFi",
    teaser: "Stay connected across borders. The best eSims and roaming plans for seamless 3-country coverage.",
    icon: Smartphone,
    link: "/world-cup-2026-connectivity-guide",
    image: "/images/travel-tips/World Cup 2026 Connectivity Guide Illustration.webp"
  }
];

const timeline = [
  {
    phase: "Research & Budgeting",
    time: "24-18 Months Out",
    desc: "Define your budget, choose target regions (East, Central, West), and start saving.",
    icon: DollarSign
  },
  {
    phase: "Logistics & Flights",
    time: "12-11 Months Out",
    desc: "Book trans-continental flights as soon as schedules open. Reserve refundable accommodation.",
    icon: Plane
  },
  {
    phase: "Visa Applications",
    time: "9-6 Months Out",
    desc: "Apply for US, Canadian, and Mexican visas. Processing times can be long.",
    icon: Shield
  },
  {
    phase: "Tickets & Fine Tuning",
    time: "6-3 Months Out",
    desc: "Apply for FIFA tickets during sales phases. Book inter-city transport (trains/buses).",
    icon: Ticket
  },
  {
    phase: "Final Prep",
    time: "1 Month Out",
    desc: "Buy eSIMs, pack according to weather forecasts, and download offline maps.",
    icon: CheckCircle
  }
];

const faqs = [
  {
    question: "When should I start planning my World Cup 2026 travel?",
    answer: "Start now. With 48 teams and millions of fans, demand will be unprecedented. We recommend securing accommodation 12-18 months in advance and booking flights as soon as schedules are released (typically 11 months out)."
  },
  {
    question: "How expensive will a trip to World Cup 2026 be?",
    answer: "Costs vary wildly by region. A budget traveler might spend $150/day in Mexico, while US cities like New York or San Francisco can easily demand $400+/day. Our Budget Guide breaks down specific tiers for every type of fan."
  },
  {
    question: "Do I need three separate visas?",
    answer: "Likely, yes. There is no 'unified' visa for North America. You must check requirements for the USA, Canada, and Mexico individually based on your citizenship. Some visas (like US B1/B2) facilitate entry to Mexico, but never assume."
  },
  {
    question: "How do I travel between host cities?",
    answer: "Flying is best for long distances (e.g., LA to NYC). For regional travel (e.g., Boston-Philly-NY), trains like Amtrak are excellent. In Mexico, buses are comfortable and affordable. In Canada, flights are often necessary due to distances."
  },
  {
    question: "Is it safe to travel to Mexico for the World Cup?",
    answer: "Yes, millions of tourists visit Mexico safely every year. Host cities like Mexico City, Guadalajara, and Monterrey are major metropolitan areas. Stick to tourist zones, use Uber/official taxis, and follow standard travel safety advice."
  },
  {
    question: "How do match tickets work?",
    answer: "Tickets are sold exclusively via FIFA.com. There are usually three phases: Random Selection Draw (apply and hope), First Come First Served, and Last Minute Sales. Sign up for FIFA alerts now."
  },
  {
    question: "What is the weather like in June/July?",
    answer: "It depends. Dallas and Miami will be hot and humid (30°C+). Vancouver and Seattle will be mild (20°C). Mexico City is temperate but rainy. Pack layers."
  },
  {
    question: "Can I use US Dollars in Canada and Mexico?",
    answer: "Generally, no. Canada uses Canadian Dollars (CAD) and Mexico uses Mexican Pesos (MXN). While some tourist spots accept USD, the exchange rate is poor. Use local currency or credit cards."
  },
  {
    question: "Will my phone work in all three countries?",
    answer: "If you have a global roaming plan, yes. Otherwise, we recommend an eSIM (like Airalo or Holafly) that covers North America regionally to avoid swapping SIM cards."
  },
  {
    question: "Is public transport good in host cities?",
    answer: "It varies. NYC, Toronto, Vancouver, and Mexico City have excellent metro systems. LA, Dallas, and Houston are car-centric, though special shuttles will likely run for the World Cup."
  },
  {
    question: "Can I drive between countries?",
    answer: "Yes, but it can be time-consuming due to border checks. Rental cars often have restrictions on crossing borders, so check with your agency beforehand."
  },
  {
    question: "What is a Fan ID?",
    answer: "A digital identification system often used in World Cups for security and free transport. Details for 2026 aren't finalized, but expect some form of digital registration to be required."
  },
  {
    question: "Where should I stay if hotels are sold out?",
    answer: "Look for suburbs connected by rail. For example, stay in New Jersey for NYC games, or outlying towns for Boston. Airbnb and VRBO are also options, but book early."
  },
  {
    question: "Is the water safe to drink?",
    answer: "In the USA and Canada, tap water is safe. In Mexico, stick to bottled or filtered water exclusively to avoid stomach issues."
  },
  {
    question: "Do I need travel insurance?",
    answer: "Absolutely. Healthcare in the US is extremely expensive. Ensure your policy covers medical emergencies, trip cancellations, and lost luggage."
  },
  {
    question: "What if I don't speak English/Spanish?",
    answer: "English is the primary language in the US and most of Canada (French in Quebec). Spanish is used in Mexico. Translation apps like Google Translate are lifesavers."
  },
  {
    question: "Are stadiums accessible?",
    answer: "Yes, all host stadiums are modern and ADA compliant, offering accessible seating and facilities. Request accessible tickets during the application process."
  },
  {
    question: "Can I bring my family?",
    answer: "World Cups are family-friendly. However, crowds are large and loud. Ear protection for kids is recommended. Choose family-friendly cities like Vancouver or Boston."
  },
  {
    question: "How much is a beer in the stadium?",
    answer: "Expect high prices. Likely $12-$18 USD depending on the venue. Budget accordingly!"
  },
  {
    question: "What is the best city for nightlife?",
    answer: "Miami, Mexico City, and New York are world-renowned for nightlife. For a more laid-back pub culture, try Toronto or Boston."
  }
];

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 dark:text-slate-300 leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <div className="flex items-center gap-3 mb-8">
    {Icon && <Icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
      {children}
    </h2>
  </div>
);

const TravelTipsClientPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: 'Travel Tips', href: '/travel-tips' }]} />
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full border border-slate-300 dark:border-white/30 text-slate-600 dark:text-white/90 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
              Last Updated: January 4, 2026
            </span>
            <span className="px-3 py-1 rounded-full border border-white/30 text-white/90 text-xs font-medium tracking-widest uppercase backdrop-blur-md">
              Essential Advice
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/90 text-slate-900 dark:text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-lg shadow-blue-500/20">
              Global Guide
            </span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            The Ultimate World Cup 2026 Travel Hub.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed"
          >
            Your definitive source for navigating the first three-nation tournament. 
            Smart planning for a complex journey across the USA, Canada, and Mexico.
          </motion.p>
        </div>
      </section>

      {/* Authority Introduction */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Why this tournament is different.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                World Cup 2026 is uniquely complex. Spanning 16 cities across three vast countries, 
                it is not just a sporting event—it is a logistical challenge. 
                Distances are great. Climates vary. 
                The strategies that worked for Qatar 2022 or Russia 2018 will not apply here.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                   <Users className="w-4 h-4" /> 48 Teams
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                   <Map className="w-4 h-4" /> 3 Countries
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                   <Calendar className="w-4 h-4" /> June-July 2026
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-2xl">
               <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-4 flex items-center gap-2">
                 <Info className="w-5 h-5" /> Expert Tip
               </h3>
               <p className="text-emerald-900 dark:text-emerald-200 italic">
                 "Do not underestimate the travel times. A flight from Miami to Vancouver is longer than flying from London to New York. Plan your base camps wisely."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Timeline */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <SectionHeading icon={Calendar}>Your Planning Timeline</SectionHeading>
        <div className="grid md:grid-cols-5 gap-4">
          {timeline.map((item, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-200 dark:border-slate-800 relative">
              <div className="absolute -top-3 left-6 bg-emerald-600 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full">
                {item.time}
              </div>
              <item.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-4 mt-2" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.phase}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visa & Entry Requirements */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <SectionHeading icon={Shield}>Visa & Entry Requirements</SectionHeading>
        <div className="grid md:grid-cols-3 gap-6">
          {/* USA */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🇺🇸</span> USA
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span><strong>ESTA:</strong> For citizens of Visa Waiver Program countries (90 days).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span><strong>B1/B2 Visa:</strong> For most other travelers. Apply 6-12 months early.</span>
              </li>
            </ul>
          </div>
          {/* Canada */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🇨🇦</span> Canada
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
               <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span><strong>eTA:</strong> Required for visa-exempt foreign nationals flying in.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span><strong>Visitor Visa:</strong> For those not eligible for eTA.</span>
              </li>
            </ul>
          </div>
          {/* Mexico */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🇲🇽</span> Mexico
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span><strong>FMM:</strong> Digital tourist card required for all tourists.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span><strong>Exemptions:</strong> Valid US, Canada, UK, Schengen visas often grant entry.</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500 text-center italic">
          *Always verify with official government sources. Rules can change.
        </p>
      </section>

      {/* Core Travel Guides Grid */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <SectionHeading icon={Map}>Essential Travel Guides</SectionHeading>
        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
              <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                 <Image 
                   src={guide.image} 
                   alt={guide.title}
                   fill
                   className="object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 right-6">
                   <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium mb-3 border border-white/20">
                     <guide.icon className="w-3 h-3" />
                     Travel Guide
                   </div>
                   <h3 className="text-2xl font-bold text-white leading-tight">
                     {guide.title}
                   </h3>
                 </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                  {guide.teaser}
                </p>
                <Link 
                  href={guide.link}
                  className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-bold hover:gap-2 transition-all w-fit group/link"
                >
                  Read Guide <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting There & Around */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <SectionHeading icon={Plane}>Getting There & Around</SectionHeading>
        <div className="grid md:grid-cols-2 gap-8">
           <div className="space-y-6">
             <div className="flex gap-4">
               <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg h-fit">
                 <Plane className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Air Travel</h3>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                   The most efficient way to cover long distances. Major hubs include Atlanta (ATL), Dallas (DFW), Los Angeles (LAX), Mexico City (MEX), and Toronto (YYZ). Book open-jaw tickets (arrive in one city, depart from another) to save time.
                 </p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg h-fit">
                 <Train className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Rail & Bus</h3>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                   <strong>Amtrak</strong> connects the US Northeast Corridor (Boston, NY, Philly) efficiently. <strong>VIA Rail</strong> serves Canada. In Mexico, luxury buses (like ADO or ETN) are a fantastic, safe, and comfortable way to travel between cities.
                 </p>
               </div>
             </div>
           </div>
           <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">Inter-City Travel Cheat Sheet</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span className="text-slate-600 dark:text-slate-400">NY to Philly</span>
                  <span className="font-medium text-emerald-600">Train (1.5h)</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span className="text-slate-600 dark:text-slate-400">LA to San Francisco</span>
                  <span className="font-medium text-emerald-600">Flight (1h)</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span className="text-slate-600 dark:text-slate-400">Mexico City to Guadalajara</span>
                  <span className="font-medium text-emerald-600">Flight (1h)</span>
                </li>
                 <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span className="text-slate-600 dark:text-slate-400">Vancouver to Seattle</span>
                  <span className="font-medium text-emerald-600">Bus/Train (3h)</span>
                </li>
              </ul>
           </div>
        </div>
      </section>

      {/* Safety & Well-being */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <SectionHeading icon={AlertTriangle}>Safety & Essentials</SectionHeading>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Emergency Numbers</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
              <strong>911</strong> works in USA, Canada, and Mexico for all emergencies.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Keep your embassy contact info saved on your phone.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Connectivity</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
              Don't rely on free WiFi. Get a regional eSIM (Airalo/Holafly) that covers all 3 countries.
            </p>
            <Link href="/world-cup-2026-connectivity-guide" className="text-emerald-600 text-sm font-medium hover:underline">
              View Connectivity Guide →
            </Link>
          </div>
           <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Weather</h3>
            <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
               <span><Sun className="w-4 h-4 inline mr-1"/> South: Hot (30°C+)</span>
               <span><Users className="w-4 h-4 inline mr-1"/> North: Mild (20°C)</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Hydration is key in host cities like Dallas, Miami, and Monterrey.
            </p>
          </div>
        </div>
      </section>

      {/* Traveler Type Tips */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <SectionHeading icon={Users}>Tips for Every Traveler</SectionHeading>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
             <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">Solo Travelers</h3>
             <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
               Hostels are your best friend for meeting other fans. Cities like Mexico City and New York have vibrant social scenes. Join official fan zones for safe, communal viewing experiences.
             </p>
             <ul className="text-sm text-slate-500 space-y-2">
               <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500"/> Use verified ride-shares at night.</li>
               <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500"/> Book "single supplement" tours.</li>
             </ul>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
             <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">Families</h3>
             <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
               Focus on walkable cities with good public transit like Vancouver, Boston, or Philadelphia to avoid car seat hassles. Book accommodation with kitchenettes to save on food costs.
             </p>
             <ul className="text-sm text-slate-500 space-y-2">
               <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500"/> Bring ear protection for kids.</li>
               <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500"/> Plan rest days between matches.</li>
             </ul>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
             <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">Groups</h3>
             <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
               Coordination is key. Assign a "logistics leader". Renting a large SUV or van is often cheaper than multiple train tickets for regional travel (e.g., California or Texas triangles).
             </p>
             <ul className="text-sm text-slate-500 space-y-2">
               <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500"/> Book accommodation 18 months out.</li>
               <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-500"/> Use split-payment apps.</li>
             </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Quick answers to the most pressing logistical questions for 2026.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-200 dark:border-slate-800">
              {faqs.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals / Footer Note */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-24 text-center">
        <p className="text-sm font-medium text-slate-400 dark:text-slate-600 uppercase tracking-widest">
          Designed for global fans • Built for the journey
        </p>
      </section>
    </div>
  );
}

export default TravelTipsClientPage;


