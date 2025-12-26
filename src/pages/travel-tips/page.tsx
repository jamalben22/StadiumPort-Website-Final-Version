import React from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';

export default function TravelTipsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <main className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 font-space">
            Travel Tips for World Cup 2026
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Prepare for the biggest sporting event in history with our essential travel tips. 
            Covering 16 cities across three countries, planning is key to a smooth experience.
          </p>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                <i className="ri-suitcase-line text-[#01b47d] mr-2"></i>
                Packing Essentials
              </h2>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#01b47d] mt-1"></i>
                    <span><strong>Universal Adapter:</strong> Since you might be traveling between US, Canada, and Mexico, bring a universal travel adapter.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#01b47d] mt-1"></i>
                    <span><strong>Layered Clothing:</strong> Weather varies significantly from Mexico City's altitude to Toronto's northern climate.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#01b47d] mt-1"></i>
                    <span><strong>Comfortable Walking Shoes:</strong> You'll be doing a lot of walking around stadiums and fan zones.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                <i className="ri-passport-line text-[#01b47d] mr-2"></i>
                Visa & Entry Requirements
              </h2>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Ensure your passport is valid for at least 6 months beyond your planned return date. Check visa requirements for:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">USA</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">ESTA or Visa required for most international travelers.</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Canada</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">eTA or Visa required. Check latest entry rules.</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Mexico</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">FMM (Tourist Card) required. Visa may be needed.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                <i className="ri-money-dollar-circle-line text-[#01b47d] mr-2"></i>
                Currency & Payments
              </h2>
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                <p>
                  <strong>USA:</strong> US Dollar (USD). Credit cards widely accepted everywhere.<br/>
                  <strong>Canada:</strong> Canadian Dollar (CAD). Cashless payments are standard.<br/>
                  <strong>Mexico:</strong> Mexican Peso (MXN). Cash is useful for street food and smaller vendors, though cards work in major establishments.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
