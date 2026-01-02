"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export const FAQSection = () => {
  const faqs = [
    {
      question: "When is the World Cup 2026?",
      answer: "The 2026 FIFA World Cup is scheduled to take place from June 11 to July 19, 2026. It will be the first World Cup hosted by three nations: the United States, Mexico, and Canada."
    },
    {
      question: "Where is the World Cup 2026 being held?",
      answer: "The tournament will be hosted across 16 cities in North America. USA host cities include Atlanta, Boston, Dallas, Houston, Kansas City, Los Angeles, Miami, New York/New Jersey, Philadelphia, San Francisco, and Seattle. Mexico will host in Guadalajara, Mexico City, and Monterrey. Canada will host in Toronto and Vancouver."
    },
    {
      question: "How can I buy World Cup 2026 tickets?",
      answer: "Official tickets will be sold exclusively through FIFA.com. Sales typically occur in phases, starting with a random selection draw followed by first-come, first-served phases. We expect the first sales phase to begin in late 2025. Sign up for our newsletter to get alerted immediately when ticket windows open."
    },
    {
      question: "How many teams will play in 2026?",
      answer: "The 2026 tournament will be the first to feature an expanded 48-team format (up from 32). This means there will be 104 matches in total, offering more opportunities for fans to see games."
    },
    {
      question: "Do I need a visa to travel for the World Cup?",
      answer: "Visa requirements depend on your citizenship and which host countries you plan to visit. You may need separate visas for the USA, Canada, and Mexico. We strongly recommend checking the official government travel sites for each country well in advance of your trip."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F5F5F7] dark:bg-[#0A0A0A] border-t border-slate-200 dark:border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Everything you need to know about the biggest event in football history.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-[#0A0A0A] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <span className="shrink-0 text-slate-400 dark:text-slate-500">
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
