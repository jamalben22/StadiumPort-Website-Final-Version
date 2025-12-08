import { useState, useRef, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlightCompareWidget } from '../../../components/widgets/FlightCompareWidget';

// --- Inline Widgets ---
// Keeping the widget implementations as they are functional, but wrapping them in better containers

const TPUnifiedWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.getAttribute('data-tp-loaded') === 'true' || container.hasChildNodes()) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?trs=468014&shmarker=679735&locale=en&curr=USD&powered_by=true&border_radius=20&plain=false&color_button=%2301b47d&color_button_text=%23ffffff&color_border=%2301b47d&promo_id=4132&campaign_id=121';
    script.charset = 'utf-8';
    container.appendChild(script);
    container.setAttribute('data-tp-loaded', 'true');
  }, []);
  return <div ref={containerRef} data-tp-loaded="false" className="w-full" />;
});

const TPDestinationWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.getAttribute('data-tp-loaded') === 'true' || container.hasChildNodes()) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?currency=usd&trs=468014&shmarker=679735&powered_by=true&locale=en&destination=77&lowest_price=&highest_price=&min_lines=4&color_button=%2301b47d&promo_id=5850&campaign_id=47';
    script.charset = 'utf-8';
    container.appendChild(script);
    container.setAttribute('data-tp-loaded', 'true');
  }, []);
  return <div ref={containerRef} data-tp-loaded="false" className="w-full" />;
});

const TPEventsWidget = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.getAttribute('data-tp-loaded') === 'true' || container.hasChildNodes()) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgts.com/content?trs=468014&shmarker=679735&start_date=2025-11-22&country=US&event_type=Sport&keyword=fifa%20world%20cup&sort=date%2Cdesc&powered_by=true&min_lines=5&width=800&promo_id=5448&campaign_id=183';
    script.charset = 'utf-8';
    container.appendChild(script);
    container.setAttribute('data-tp-loaded', 'true');
  }, []);
  return <div ref={containerRef} data-tp-loaded="false" className="w-full" />;
});

const VrboWidget = memo(() => {
  const VRBO_URL_NYNJ = import.meta.env.VITE_VRBO_URL_NYNJ || 'https://vrbo.tpo.li/8ffslPwi';
  const VRBO_URL_LA = import.meta.env.VITE_VRBO_URL_LA || 'https://vrbo.tpo.li/mglbKB1J';
  const VRBO_URL_GENERAL = import.meta.env.VITE_VRBO_URL_GENERAL || 'https://vrbo.tpo.li/Sj3x6Mp4';
  
  return (
    <div className="w-full h-full">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0E214B] to-[#050f24] p-8 text-white shadow-2xl h-full border border-white/5 group hover:border-white/10 transition-colors">
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
            <div className="text-left">
              <h3 className="font-space font-bold text-2xl md:text-3xl mb-2">Find Your Base Camp</h3>
              <p className="font-inter text-slate-300">Book verified stays near stadiums before they're gone.</p>
            </div>
            <img src="/images/brands/vrbo-white.svg" alt="Vrbo" className="h-8 opacity-80" onError={(e) => e.currentTarget.style.display = 'none'} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-auto">
             <a
              href={VRBO_URL_NYNJ}
              target="_blank"
              rel="nofollow noopener sponsored"
              className="group/btn relative flex items-center justify-center px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl transition-all duration-300"
            >
              <span className="font-semibold text-white">Check NY/NJ Stays</span>
              <i className="ri-arrow-right-line ml-2 group-hover/btn:translate-x-1 transition-transform"></i>
            </a>
            <a
              href={VRBO_URL_LA}
              target="_blank"
              rel="nofollow noopener sponsored"
              className="group/btn relative flex items-center justify-center px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl transition-all duration-300"
            >
              <span className="font-semibold text-white">Check LA Stays</span>
              <i className="ri-arrow-right-line ml-2 group-hover/btn:translate-x-1 transition-transform"></i>
            </a>
          </div>
          
           <a
              href={VRBO_URL_GENERAL}
              target="_blank"
              rel="nofollow noopener sponsored"
              className="mt-6 flex items-center justify-center w-full px-6 py-4 bg-[#01b47d] hover:bg-[#009f6e] text-white rounded-2xl font-bold transition-all duration-300 shadow-glow hover:shadow-glow-lg"
            >
              <i className="ri-search-line mr-2"></i>
              Search All Cities on Vrbo
            </a>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#01b47d]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 animate-pulse-soft"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
});

// --- Main Planning Hub Component ---

type TabType = 'flights' | 'hotels' | 'tickets' | 'packages';

export const PlanningHub = () => {
  const [activeTab, setActiveTab] = useState<TabType>('flights');

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'flights', label: 'Flights', icon: 'ri-plane-fill' },
    { id: 'hotels', label: 'Stays', icon: 'ri-hotel-bed-fill' },
    { id: 'tickets', label: 'Tickets', icon: 'ri-ticket-2-fill' },
    { id: 'packages', label: 'Packages', icon: 'ri-suitcase-2-fill' },
  ];

  return (
    <section className="py-32 bg-slate-50 dark:bg-navy-950 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-navy-900/5 to-transparent dark:from-white/5 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-space font-bold text-4xl md:text-6xl text-navy-900 dark:text-white mb-6 tracking-tight">
              One Platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01b47d] to-emerald-400">Complete Control.</span>
            </h2>
            <p className="font-inter text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Plan your entire World Cup journey from a single dashboard. 
              Compare prices, book stays, and secure seats.
            </p>
          </motion.div>
        </div>

        {/* Floating Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-2 rounded-full bg-white dark:bg-navy-800 shadow-premium border border-slate-100 dark:border-navy-700 backdrop-blur-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 z-10
                  ${activeTab === tab.id ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white'}
                `}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-navy-900 dark:bg-[#01b47d] rounded-full shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <i className={tab.icon}></i>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area - Glassmorphism Card */}
        <motion.div 
          layout
          className="bg-white/80 dark:bg-navy-900/60 backdrop-blur-2xl rounded-[40px] shadow-glass-lg p-8 md:p-12 border border-white/50 dark:border-white/5 min-h-[500px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-6xl mx-auto"
            >
              {activeTab === 'flights' && (
                <div className="space-y-12">
                  <div className="text-center">
                    <h3 className="text-3xl font-space font-bold dark:text-white mb-2">Compare 500+ Airlines</h3>
                    <p className="text-slate-500 font-inter text-lg">Find the best routes to all 16 host cities.</p>
                  </div>
                  <div className="bg-white dark:bg-navy-950 rounded-3xl p-6 shadow-inner-glow border border-slate-100 dark:border-navy-800">
                    <FlightCompareWidget />
                  </div>
                  <div className="mt-8">
                     <TPUnifiedWidget />
                  </div>
                </div>
              )}
              
              {activeTab === 'hotels' && (
                <div className="space-y-12">
                  <div className="text-center">
                    <h3 className="text-3xl font-space font-bold dark:text-white mb-2">Official & Verified Accommodations</h3>
                    <p className="text-slate-500 font-inter text-lg">Stay close to the action. Book early to save.</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <VrboWidget />
                    <div className="bg-slate-50 dark:bg-navy-800 rounded-3xl p-8 flex flex-col justify-center border border-slate-200 dark:border-navy-700 h-full">
                        <div className="mb-6">
                            <h4 className="font-bold text-2xl mb-2 dark:text-white font-space">Quick City Search</h4>
                            <p className="text-slate-500">Find hotels in specific host cities.</p>
                        </div>
                        <div className="flex-1 flex items-center">
                            <TPDestinationWidget />
                        </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'tickets' && (
                <div className="space-y-12">
                   <div className="text-center">
                    <h3 className="text-3xl font-space font-bold dark:text-white mb-2">Match Tickets & Events</h3>
                    <p className="text-slate-500 font-inter text-lg">Secure your seat for history.</p>
                  </div>
                  <div className="bg-white dark:bg-navy-950 rounded-3xl p-2 shadow-inner-glow border border-slate-100 dark:border-navy-800">
                    <TPEventsWidget />
                  </div>
                </div>
              )}
              
              {activeTab === 'packages' && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-emerald-500 blur-3xl opacity-20 rounded-full animate-pulse-soft"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-3xl flex items-center justify-center border border-emerald-200 dark:border-emerald-700/50">
                        <i className="ri-vip-crown-fill text-4xl text-emerald-600 dark:text-emerald-400"></i>
                    </div>
                  </div>
                  <h3 className="text-4xl font-space font-bold dark:text-white mb-4">VIP Packages</h3>
                  <p className="text-slate-500 max-w-lg text-lg mb-10">
                    We are curating exclusive hospitality packages including match tickets, 5-star accommodation, and private transfers.
                  </p>
                  <button className="group relative px-8 py-4 bg-navy-900 dark:bg-white text-white dark:text-navy-900 rounded-full font-bold overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                    <span className="relative">Join Priority Waitlist</span>
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
