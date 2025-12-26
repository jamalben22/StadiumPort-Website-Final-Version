import React from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';

export default function SafetyGuidePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <main className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 font-space">
            Safety Guide for Fans
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Your safety is paramount. Here is a comprehensive guide to staying safe while enjoying the World Cup 2026 festivities across North America.
          </p>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                <i className="ri-alert-line text-[#01b47d] mr-2"></i>
                Emergency Numbers
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-100 dark:border-red-900/30 text-center">
                  <div className="text-3xl font-black text-red-600 dark:text-red-400 mb-2">911</div>
                  <div className="font-bold text-slate-900 dark:text-white">USA & Canada</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Police, Fire, Ambulance</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-100 dark:border-red-900/30 text-center">
                  <div className="text-3xl font-black text-red-600 dark:text-red-400 mb-2">911</div>
                  <div className="font-bold text-slate-900 dark:text-white">Mexico</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">General Emergency</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                <i className="ri-shield-check-line text-[#01b47d] mr-2"></i>
                General Safety Tips
              </h2>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="bg-[#01b47d]/10 text-[#01b47d] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span><strong>Stay Aware:</strong> Keep an eye on your belongings in crowded areas like Fan Fests and public transport.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-[#01b47d]/10 text-[#01b47d] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span><strong>Official Taxis/Rideshare:</strong> Use official taxi stands or reputable rideshare apps (Uber, Lyft). Avoid unmarked taxis, especially in Mexico.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-[#01b47d]/10 text-[#01b47d] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span><strong>Hydration:</strong> Summer heat can be intense, especially in cities like Dallas, Houston, and Miami. Drink plenty of water.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-[#01b47d]/10 text-[#01b47d] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                    <span><strong>Travel Insurance:</strong> Ensure you have comprehensive travel insurance that covers medical emergencies.</span>
                  </li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                <i className="ri-hospital-line text-[#01b47d] mr-2"></i>
                Medical Assistance
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Healthcare standards are high in all three countries, but costs in the USA can be extremely high without insurance.
                In an emergency, go to the nearest hospital emergency room (ER).
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
