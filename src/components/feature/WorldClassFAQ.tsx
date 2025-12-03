import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { SchemaOrg } from '../seo/SchemaOrg';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, X, Hash } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string | JSX.Element;
  category?: string;
  popularity?: number;
  relatedQuestions?: number[];
}

interface WorldClassFAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  showCategories?: boolean;
  showSearch?: boolean;
  locationSpecific?: boolean;
}



function jsxToText(node: any): string {
  if (node == null) return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(jsxToText).join(' ')
  if (React.isValidElement(node)) return jsxToText((node as any).props?.children)
  return ''
}

export function WorldClassFAQ({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know",
  showCategories = true,
  showSearch = true,
  locationSpecific = false
}: WorldClassFAQProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<number[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(faqs.map(faq => faq.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [faqs]);

  // Smart search with natural language processing
  const filteredFAQs = useMemo(() => {
    let filtered = faqs;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    // Smart search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const queryWords = query.split(' ').filter(word => word.length > 2);
      
      filtered = filtered.filter(faq => {
        const question = faq.question.toLowerCase();
        const answer = typeof faq.answer === 'string' ? faq.answer.toLowerCase() : '';
        const category = (faq.category || '').toLowerCase();
        
        // Exact match
        if (question.includes(query) || answer.includes(query) || category.includes(query)) {
          return true;
        }
        
        // Word-based matching
        const searchableText = `${question} ${answer} ${category}`;
        const matchScore = queryWords.reduce((score, word) => {
          if (searchableText.includes(word)) {
            return score + 1;
          }
          return score;
        }, 0);
        
        return matchScore >= Math.ceil(queryWords.length * 0.5); // Match at least 50% of words
      });
    }

    // Sort by popularity and relevance
    return filtered.sort((a, b) => {
      const aPop = a.popularity || 0;
      const bPop = b.popularity || 0;
      return bPop - aPop;
    });
  }, [faqs, searchQuery, selectedCategory]);

  // Toggle FAQ item
  const toggleItem = useCallback((id: number) => {
    setOpenItems(prev => {
      const isOpen = prev.includes(id);
      const newOpen = isOpen 
        ? prev.filter(item => item !== id)
        : [...prev, id];
      
      return newOpen;
    });
  }, []);



  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !searchInputRef.current?.contains(document.activeElement)) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-32 bg-transparent overflow-hidden">
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": filteredFAQs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": typeof f.answer === 'string' ? f.answer : jsxToText(f.answer)
          }
        }))
      }} />
      {/* Skip to FAQ content link for accessibility */}
      <a 
        href="#faq-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#01b47d] text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to FAQ content
      </a>
      
      <div id="faq-content" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 bg-gradient-to-br from-[#01b47d] via-[#01b47d] to-[#01b47d] rounded-2xl md:rounded-3xl mb-6 md:mb-8 shadow-2xl shadow-[#01b47d]/30 backdrop-blur-xl border border-white/20">
            <i className="ri-question-line text-2xl md:text-3xl lg:text-4xl text-white"></i>
          </div>
          <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-navy-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-navy-900 via-[#01b47d] to-[#01b47d] bg-clip-text text-transparent tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="font-inter text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl mx-auto font-light">
              {subtitle}
            </p>
          )}
        </div>

        {/* Search and Controls */}
        {showSearch && (
          <div className="mb-8 md:mb-12">
            <div className="relative max-w-2xl mx-auto mb-6 md:mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 md:pl-6 flex items-center pointer-events-none">
                <Search className="h-4 w-4 md:h-5 md:w-5 text-slate-400" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Ask anything about World Cup 2026... (Press '/' to search)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 md:pl-14 pr-10 md:pr-12 py-3 md:py-4 text-base md:text-lg text-slate-900 dark:text-white bg-white/90 dark:bg-navy-800/90 backdrop-blur-xl border-2 border-slate-200 dark:border-navy-700 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-[#01b47d]/20 focus:border-[#01b47d] transition-all duration-300 placeholder-slate-400 dark:placeholder-slate-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 md:pr-6 flex items-center"
                >
                  <X className="h-4 w-4 md:h-5 md:w-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            {showCategories && categories.length > 2 && (
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-2 md:px-4 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#01b47d] text-white shadow-lg shadow-[#01b47d]/25'
                        : 'bg-white/60 dark:bg-navy-800/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-navy-800'
                    }`}
                  >
                    {category === 'all' ? 'All Questions' : category}
                  </button>
                ))}
              </div>
            )}

          </div>
        )}

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-slate-500 dark:text-slate-400">
            {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 md:space-y-4 lg:space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.map((faq, index) => {
              const isOpen = openItems.includes(faq.id);
              
              return (
                <motion.div
                  key={faq.id}
                  id={`faq-${faq.id}`}
                  data-faq-item
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="group"
                >
                  <div className={`
                    relative overflow-hidden
                    bg-white/80 dark:bg-navy-900/80
                    backdrop-blur-3xl
                    border-2 border-white/40 dark:border-navy-700/40
                    rounded-3xl
                    shadow-2xl
                    hover:border-white/50 dark:hover:border-navy-600/50
                    hover:bg-white/80 dark:hover:bg-navy-900/80
                    hover:shadow-3xl hover:shadow-[#01b47d]/10
                    transition-all duration-700 ease-out
                    transform hover:-translate-y-1
                  `}>
                    {/* Premium Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#01b47d]/5 via-transparent to-purple-500/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#01b47d]/15 to-transparent rounded-full blur-3xl group-hover:from-[#01b47d]/25 group-hover:scale-110 transition-all duration-700"></div>
                    
                    {/* Question Header */}
                    <button
                      onClick={() => toggleItem(faq.id)}
                      data-faq-item="button"
                      data-faq-id={faq.id}
                      className="
                        relative z-10
                        w-full p-5 md:p-8 lg:p-10
                        flex items-center justify-between
                        text-left
                        group-hover:scale-[1.02]
                        transition-transform duration-500 ease-out
                        focus:outline-none focus:ring-4 focus:ring-[#01b47d]/30 focus:ring-offset-2
                        rounded-2xl md:rounded-3xl
                      "
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      tabIndex={0}
                    >
                      <div className="flex-1 pr-4 md:pr-8">
                        <div className="flex items-start space-x-3 md:space-x-4">
                          <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#01b47d] to-[#01b47d] rounded-lg md:rounded-xl flex items-center justify-center">
                            <Hash className="h-3 w-3 md:h-4 md:w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="
                              font-space font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl
                              text-navy-900 dark:text-white
                              leading-tight
                              group-hover:text-[#008f63] dark:group-hover:text-[#008f63]
                              transition-colors duration-500
                              mb-1 md:mb-2
                            ">
                              {faq.question}
                            </h3>
                            {faq.category && (
                              <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">
                                <span className="px-2 py-1 bg-[#01b47d]/10 dark:bg-[#01b47d]/30 text-[#01b47d] dark:text-[#01b47d] rounded-md md:rounded-lg text-xs font-medium">
                                  {faq.category}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated Plus/Minus Icon */}
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="
                          flex-shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
                          flex items-center justify-center
                          rounded-xl md:rounded-2xl
                          bg-gradient-to-br from-[#01b47d] via-[#01b47d] to-[#01b47d]
                          text-white
                          group-hover:from-[#01b47d] group-hover:via-[#01b47d] group-hover:to-[#01b47d]
                          transition-all duration-500 ease-out
                          transform group-hover:scale-110 group-hover:rotate-3
                          shadow-xl md:shadow-2xl shadow-[#01b47d]/30
                        "
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </motion.div>
                    </button>

                    {/* Answer Content */}
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
                          <div className="px-5 md:px-8 lg:px-10 pb-5 md:pb-8 lg:pb-10 pt-2">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                              className="border-t border-slate-200/30 dark:border-navy-700/30 pt-5 md:pt-8 lg:pt-10"
                            >
                              <div className="
                                font-inter text-base md:text-lg lg:text-xl
                                text-slate-700 dark:text-slate-300
                                leading-relaxed
                                space-y-4 md:space-y-6 lg:space-y-8
                                font-light
                                mb-6 md:mb-8
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
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredFAQs.length === 0 && (
          <motion.div 
            className="text-center py-12 md:py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-navy-800 dark:to-navy-700 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Search className="h-8 w-8 md:h-10 md:w-10 text-slate-400 dark:text-slate-500" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
              No questions found
            </h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-sm md:text-base">
              Try adjusting your search terms or browse our popular questions above.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}