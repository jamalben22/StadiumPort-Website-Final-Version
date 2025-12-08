import { useEffect } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateBreadcrumbSchema } from '../../../components/seo/SchemaOrg';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { motion } from 'framer-motion';
import { 
  Users, 
  PenTool, 
  Globe2, 
  Map, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function AuthorsPage() {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    setPageMeta({
      title: 'Authors & Editorial Team – Stadiumport',
      description: 'Meet the team behind Stadiumport. Our dedicated writers, researchers, and editors work to provide the most accurate World Cup 2026 travel guides.',
      url: `${siteUrl}/about/authors`
    });
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://stadiumport.com' },
    { name: 'About', url: `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/about` },
    { name: 'Authors', url: `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/about/authors` }
  ]);

  const expertise = [
    {
      icon: Map,
      title: "Host City Analysis",
      description: "Deep dives into neighborhoods, safety, and local culture for all 16 cities."
    },
    {
      icon: PenTool,
      title: "Stadium Logistics",
      description: "Detailed breakdowns of seating, entry gates, and matchday operations."
    },
    {
      icon: Globe2,
      title: "Travel Planning",
      description: "Strategic advice on flights, visas, and cross-border itineraries."
    },
    {
      icon: ShieldCheck,
      title: "Fan Safety",
      description: "Comprehensive security guides and emergency protocols for international visitors."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800 font-inter text-slate-900 dark:text-white selection:bg-indigo-500 selection:text-white">
      <SchemaOrg schema={[
        breadcrumbSchema,
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Authors & Editorial Team",
          "url": `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/about/authors`
        }
      ]} />
      <Header />

      <main className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-24 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
                Behind the Scenes
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Stadiumport</span> Team
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We are a collective of football fans, travel experts, and researchers dedicated to helping you navigate the largest World Cup in history.
            </p>
          </div>

          {/* Editorial Philosophy */}
          <div className="mb-24 animate-fade-up [animation-delay:200ms]">
            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-16 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
              <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 blur-3xl rounded-full -translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-8 text-indigo-600 dark:text-indigo-400">
                    <Users className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    Accuracy Over Everything
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    Stadiumport isn't built by a single influencer. It's built by a dedicated editorial team focused on accuracy, utility, and factual integrity.
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Our writers, editors, and researchers work together to ensure every guide meets the highest standards. We verify information with official tourism boards, stadium operators, and FIFA publications.
                  </p>
                </div>
                
                <div className="lg:w-1/2 w-full">
                  <div className="bg-slate-50 dark:bg-black/20 rounded-2xl p-8 border border-slate-100 dark:border-white/5">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500" /> Our Process
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Verified Data Collection",
                        "Multi-Stage Fact Checking",
                        "Expert Review",
                        "Regular Updates",
                        "Technical Validation"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm font-medium bg-white dark:bg-white/5 p-3 rounded-xl border border-slate-100 dark:border-white/5">
                          <span className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400">
                            {i + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="mb-24 animate-fade-up [animation-delay:400ms]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Expertise</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Our content team specializes in the critical areas that make or break a World Cup trip.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 shadow-sm border border-slate-100 dark:border-white/5">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Commitment Section */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden animate-fade-up [animation-delay:600ms]">
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Committed to Transparency</h2>
              <p className="text-indigo-100 text-lg leading-relaxed mb-10">
                We are committed to transparent, unbiased, and helpful coverage. Our goal is to empower fans worldwide with everything needed to experience the World Cup confidently and stress-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/editorial-policy"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
                >
                  Read Editorial Policy <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
