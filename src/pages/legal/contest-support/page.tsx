import { useEffect, useState } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateBreadcrumbSchema } from '../../../components/seo/SchemaOrg';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  Mail, 
  Clock, 
  MessageCircle, 
  AlertCircle, 
  CheckCircle2, 
  Edit3, 
  Wifi, 
  Trophy,
  ChevronDown,
  ChevronUp,
  Send
} from 'lucide-react';

export default function ContestSupportPage() {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    setPageMeta({
      title: 'Contest Support – Stadiumport',
      description: 'Get help with the World Cup 2026 Prediction Contest. FAQs, troubleshooting, and direct support contact.',
      url: `${siteUrl}/world-cup-2026-prediction-contest-support`
    });
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://stadiumport.com' },
    { name: 'Contest Support', url: `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-prediction-contest-support` }
  ]);

  const faqs = [
    {
      question: "I didn't receive my confirmation email.",
      answer: "First, check your Spam/Junk folder. If it's not there after 15 minutes, please try registering again or contact us directly.",
      icon: Mail
    },
    {
      question: "Can I edit my predictions?",
      answer: "No. Once you submit, your predictions are locked and cannot be changed.",
      icon: Edit3
    },
    {
      question: "I'm experiencing technical issues.",
      answer: "Try clearing your browser cache or switching to a different browser (Chrome/Safari recommended). Ensure your internet connection is stable.",
      icon: Wifi
    },
    {
      question: "How and when are prizes distributed?",
      answer: "Winners will be contacted via email within 48 hours of the Final. Physical prizes ship via DHL/FedEx; cash via PayPal/Wise.",
      icon: Trophy
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800 font-inter text-slate-900 dark:text-white selection:bg-indigo-500 selection:text-white">
      <SchemaOrg schema={[
        breadcrumbSchema,
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contest Support",
          "url": `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/world-cup-2026-prediction-contest-support`
        }
      ]} />
      <Header />

      <main className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
                We're Here To Help
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
              Contest <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Support</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Having trouble with your predictions? Find answers below or get in touch with our team.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-fade-up [animation-delay:200ms]">
            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Support</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  Best for account issues or complex questions. We reply within 24 hours.
                </p>
                <a 
                  href="mailto:info@stadiumport.com" 
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                >
                  info@stadiumport.com <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden group hover:border-green-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-green-50 dark:bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                  <Clock className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Response Time</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  We monitor support channels 7 days a week during the contest period.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-lg w-fit">
                   <CheckCircle2 className="w-4 h-4" /> Current Status: Online
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16 animate-fade-up [animation-delay:400ms]">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
              <HelpCircle className="w-6 h-6 text-indigo-500" /> Common Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${openFaq === index ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400' : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'}`}>
                        <faq.icon className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-white">{faq.question}</span>
                    </div>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-indigo-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pl-[4.5rem] text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Report Issue CTA */}
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-3xl p-8 text-center animate-fade-up [animation-delay:600ms]">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-500/20 rounded-full text-red-600 dark:text-red-400 mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-red-900 dark:text-red-200 mb-2">Report An Issue</h2>
            <p className="text-red-800 dark:text-red-300 max-w-lg mx-auto mb-6 text-sm">
              If you suspect cheating, encounter a bug, or have privacy concerns, please report it immediately.
            </p>
            <a 
              href="mailto:info@stadiumport.com?subject=Contest Issue Report"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-red-500/20"
            >
              Contact Security Team <MessageCircle className="w-4 h-4" />
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
