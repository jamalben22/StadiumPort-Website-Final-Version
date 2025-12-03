import React, { useState } from 'react';
import { SchemaOrg } from '../seo/SchemaOrg';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: string | JSX.Element;
}

interface PremiumFAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function PremiumFAQ({ faqs, title = "Frequently Asked Questions", subtitle = "Everything you need to know" }: PremiumFAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-full">
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": typeof f.answer === 'string' ? f.answer : jsxToText(f.answer)
          }
        }))
      }} />
      {/* Apple-Level Luxury Header */}
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#01b47d] via-[#01b47d] to-[#01b47d] rounded-3xl mb-8 shadow-2xl shadow-[#01b47d]/30 backdrop-blur-xl border border-white/20">
          <i className="ri-question-line text-3xl md:text-4xl text-white"></i>
        </div>
        <h2 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-navy-900 dark:text-white mb-6 bg-gradient-to-r from-navy-900 via-[#01b47d] to-[#01b47d] bg-clip-text text-transparent tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="font-inter text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl mx-auto font-light">
            {subtitle}
          </p>
        )}
      </div>

      {/* FIFA-Grade Premium FAQ Cards */}
      <div className="space-y-4 md:space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = openItems.includes(faq.id);
          
          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              <div className="
                relative overflow-hidden
                bg-white/90 dark:bg-navy-800/90
                backdrop-blur-2xl
                border border-white/40 dark:border-navy-700/40
                rounded-3xl
                hover:border-[#008f63]/50 dark:hover:border-[#008f63]/50
                hover:bg-white dark:hover:bg-navy-800
                hover:shadow-3xl hover:shadow-[#01b47d]/20
                transition-all duration-700 ease-out
                cursor-pointer
                transform hover:-translate-y-1
              ">
                {/* Premium Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#01b47d]/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#01b47d]/15 to-transparent rounded-full blur-3xl group-hover:from-[#01b47d]/25 group-hover:scale-110 transition-all duration-700"></div>
                
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="
                    relative z-10
                    w-full p-8 md:p-10
                    flex items-center justify-between
                    text-left
                    group-hover:scale-[1.02]
                    transition-transform duration-500 ease-out
                  "
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex-1 pr-8">
                    <h3 className="
                      font-space font-bold text-xl md:text-2xl lg:text-3xl
                      text-navy-900 dark:text-white
                      leading-tight
                      group-hover:text-[#008f63] dark:group-hover:text-[#008f63]
                      transition-colors duration-500
                    ">
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* FIFA-Grade Premium Plus Icon */}
                  <div className="
                    flex-shrink-0 w-12 h-12 md:w-14 md:h-14
                    flex items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br from-[#01b47d] via-[#01b47d] to-[#01b47d]
                    text-white
                    group-hover:from-[#01b47d] group-hover:via-[#01b47d] group-hover:to-[#01b47d]
                    transition-all duration-500 ease-out
                    transform group-hover:scale-110 group-hover:rotate-3
                    shadow-2xl shadow-[#01b47d]/30
                  ">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-6 h-6 md:w-7 md:h-7"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.6, ease: "easeInOut" },
                        opacity: { duration: 0.4, delay: 0.2 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 md:px-10 pb-8 md:pb-10 pt-2">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="
                            border-t border-slate-200/30 dark:border-navy-700/30
                            pt-8 md:pt-10
                          "
                        >
                          <div className="
                            font-inter text-lg md:text-xl
                            text-slate-700 dark:text-slate-300
                            leading-relaxed
                            space-y-6 md:space-y-8
                            font-light
                          ">
                            {typeof faq.answer === 'string' ? (
                              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            ) : (
                              faq.answer
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function jsxToText(node: any): string {
  if (node == null) return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(jsxToText).join(' ')
  if (React.isValidElement(node)) return jsxToText((node as any).props?.children)
  return ''
}