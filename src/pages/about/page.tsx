import { useEffect } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { SchemaOrg, generateOrganizationSchema, generateBreadcrumbSchema } from '../../components/seo/SchemaOrg';
import { setPageMeta } from '../../components/seo/MetaUtils';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  Map, 
  ShieldCheck, 
  Users, 
  Heart, 
  CheckCircle2, 
  BookOpen, 
  Mail, 
  ArrowRight,
  Plane,
  Building2
} from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    setPageMeta({
      title: 'About Stadiumport – Your World Cup 2026 Travel Companion',
      description: 'Learn about Stadiumport — your trusted World Cup 2026 travel companion. Discover our mission, guides, and resources to help you plan an unforgettable tournament journey.',
      url: `${siteUrl}/about`
    });
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://stadiumport.com' },
    { name: 'About', url: `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/about` }
  ]);

  const organizationSchema = generateOrganizationSchema();

  const offerings = [
    {
      icon: Building2,
      title: "Stadium Guides",
      description: "Comprehensive breakdowns of all 16 venues. Seating views, transport logistics, bag policies, and pre-match atmosphere tips."
    },
    {
      icon: Map,
      title: "Host City Guides",
      description: "Neighborhood recommendations, local cuisine, safety tips, and cultural experiences for every budget level."
    },
    {
      icon: Plane,
      title: "Travel Resources",
      description: "Practical advice on visas, inter-city transport, mobile connectivity, packing lists, and emergency contacts."
    },
    {
      icon: Mail,
      title: "Weekly Updates",
      description: "Our newsletter delivers price drop alerts, schedule changes, and exclusive travel deals directly to your inbox."
    }
  ];

  const values = [
    {
      icon: CheckCircle2,
      title: "Accuracy",
      description: "We verify every fact. Stadium capacities, routes, prices—if we publish it, we've checked it against official sources."
    },
    {
      icon: ShieldCheck,
      title: "Honesty",
      description: "If we earn a commission, we disclose it. If a place isn't worth your time or money, we'll tell you straight."
    },
    {
      icon: Globe2,
      title: "Inclusivity",
      description: "Football is for everyone. Our guides welcome fans of all backgrounds, budgets, and abilities."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love football. We love travel. We're built by fans, for fans, to help you experience the beautiful game."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] font-inter text-slate-900 dark:text-white selection:bg-indigo-500 selection:text-white transition-colors duration-500">
      <SchemaOrg schema={[breadcrumbSchema, organizationSchema]} />
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
                Our Story
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Stadiumport</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Welcome to your comprehensive resource for planning the perfect 2026 FIFA World Cup experience across the United States, Canada, and Mexico.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-24 animate-fade-up [animation-delay:200ms]">
            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-16 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-indigo-600 dark:text-indigo-400">
                  <Users className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  The 2026 World Cup will be the largest in history: 48 teams, 104 matches, 16 stadiums. Planning shouldn't be overwhelming. <br className="hidden md:block" />
                  <span className="text-indigo-600 dark:text-indigo-400">We exist to make your journey simple, informed, and unforgettable.</span>
                </p>
              </div>
            </div>
          </div>

          {/* What We Offer Grid */}
          <div className="mb-24 animate-fade-up [animation-delay:400ms]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What We Offer</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Everything you need to navigate the tournament with confidence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offerings.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-lg transition-all"
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

          {/* Why Trust Us / Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 animate-fade-up [animation-delay:600ms]">
            <div className="bg-slate-900 dark:bg-white/5 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-center min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Why Trust Stadiumport?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300"><strong>Independent:</strong> Not affiliated with FIFA or hotels. Just passionate fans helping fans.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300"><strong>Comprehensive:</strong> Detailed guides for every stadium and city.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300"><strong>Transparent:</strong> We clearly disclose how we work.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300"><strong>Experienced:</strong> Built by travelers who know major tournaments.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-10 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Approach</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-500" /> Research-First
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    We verify every fact. Stadium capacities, transport routes, hotel locations—if we publish it, we've checked it against official sources.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-indigo-500" /> Globally Friendly
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    We write for international travelers. Our guides include metric/imperial measurements, currency context, and cultural considerations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-24 animate-fade-up [animation-delay:800ms]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Values</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                The principles that guide every article we publish.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((item, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600 dark:text-indigo-400">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden animate-fade-up [animation-delay:1000ms]">
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Planning?</h2>
              <p className="text-indigo-100 text-lg mb-10">
                Explore our comprehensive guides or subscribe to our newsletter for the latest updates on World Cup 2026.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/world-cup-2026-groups"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
                >
                  Explore Groups
                </Link>
                <a 
                  href="#newsletter"
                  className="inline-flex items-center justify-center px-8 py-4 bg-indigo-800/50 text-white border border-indigo-400/30 rounded-xl font-bold hover:bg-indigo-800/70 transition-colors backdrop-blur-sm"
                >
                  Join Newsletter <ArrowRight className="w-5 h-5 ml-2" />
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
