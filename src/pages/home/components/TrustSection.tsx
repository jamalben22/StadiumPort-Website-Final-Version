import { motion } from 'framer-motion';

export const TrustSection = () => {
  const trustIndicators = [
    { icon: 'ri-shield-check-fill', text: 'Secure Booking', description: 'Verified Partners' },
    { icon: 'ri-customer-service-2-fill', text: '24/7 Support', description: 'Expert Assistance' },
    { icon: 'ri-vip-diamond-fill', text: 'Curated Deals', description: 'Best Value' },
    { icon: 'ri-book-open-fill', text: 'Expert Guides', description: 'Local Insights' }
  ];

  const brands = ['Travel Weekly', 'Lonely Planet', 'Forbes', 'CNN Travel', 'The Points Guy', 'Bleacher Report', 'ESPN', 'The Athletic'];

  return (
    <section className="py-24 border-t border-slate-100 dark:border-navy-800 bg-white dark:bg-navy-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {trustIndicators.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-navy-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm dark:shadow-none border border-slate-100 dark:border-navy-800">
                <i className={`${item.icon} text-2xl text-[#01b47d]`}></i>
              </div>
              <h3 className="font-space font-bold text-lg text-navy-900 dark:text-white mb-2">
                {item.text}
              </h3>
              <p className="font-inter text-sm text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 pt-16 border-t border-slate-100 dark:border-navy-800">
            <p className="text-center text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-12">
                Trusted by Readers Of
            </p>
            
            <div className="relative flex overflow-x-hidden group">
               <motion.div 
                 className="flex whitespace-nowrap gap-16 md:gap-32"
                 animate={{ x: ["0%", "-50%"] }}
                 transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
               >
                 {[...brands, ...brands].map((brand, i) => (
                   <span key={i} className="text-2xl md:text-3xl font-bold font-serif text-slate-300 dark:text-navy-700 grayscale hover:grayscale-0 hover:text-navy-900 dark:hover:text-slate-500 transition-colors duration-500 cursor-default">
                     {brand}
                   </span>
                 ))}
               </motion.div>
               <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-navy-950 to-transparent pointer-events-none"></div>
               <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-navy-950 to-transparent pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
};
