import { useEffect } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import { SchemaOrg, generateBreadcrumbSchema } from '../../../components/seo/SchemaOrg';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { motion } from 'framer-motion';
import { 
  FileCheck, 
  Scale, 
  Copyright, 
  AlertTriangle, 
  ExternalLink, 
  ShieldAlert, 
  Mail, 
  Gavel,
  CheckCircle2,
  XCircle,
  FileText
} from 'lucide-react';

export default function TermsPage() {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    setPageMeta({
      title: 'Terms of Service – stadiumport',
      description: 'Read stadiumport’s Terms of Service outlining acceptable use, policies, and legal disclaimers.',
      url: `${siteUrl}/legal/terms`
    });
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://stadiumport.com' },
    { name: 'Legal', url: `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/legal/terms` },
    { name: 'Terms of Service', url: `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/legal/terms` }
  ]);

  const highlights = [
    {
      icon: FileCheck,
      title: "Agreement",
      description: "By using stadiumport, you agree to these terms, our Privacy Policy, and Affiliate Disclaimer."
    },
    {
      icon: Scale,
      title: "Responsibility",
      description: "You are responsible for your own travel decisions. We provide information, not guarantees."
    },
    {
      icon: Copyright,
      title: "Content Rights",
      description: "Our content is protected. You can share links, but you cannot copy or republish our guides."
    },
    {
      icon: AlertTriangle,
      title: "Disclaimers",
      description: "We strive for accuracy but cannot guarantee it. Always verify with official sources."
    }
  ];

  const sections = [
    "Acceptance of Terms",
    "About Stadiumport",
    "User Responsibilities",
    "Intellectual Property",
    "Accuracy of Information",
    "Third-Party Links",
    "Disclaimer of Warranties",
    "Limitation of Liability",
    "Indemnification",
    "User-Generated Content",
    "Email Communications",
    "Governing Law",
    "Changes to Terms",
    "Contact Us"
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] font-inter text-slate-900 dark:text-white selection:bg-indigo-500 selection:text-white transition-colors duration-500">
      <SchemaOrg schema={[
        breadcrumbSchema,
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms of Service",
          "url": `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/legal/terms`
        }
      ]} />
      <Header />

      <main className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-up">
            <div className="flex justify-center mb-8">
              <span className="px-3 py-1 rounded-full border border-slate-300 dark:border-white/30 text-slate-600 dark:text-white/90 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
                Last Updated: January 2, 2026
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Service</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Welcome to stadiumport. Please read these terms carefully before using our website, as they govern your access and use of our services.
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fade-up [animation-delay:200ms]">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
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

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-fade-up [animation-delay:400ms]">
            
            {/* Table of Contents / Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 dark:bg-white/5 rounded-3xl p-8 sticky top-32">
                <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-500" /> Contents
                </h3>
                <nav className="space-y-3">
                  {sections.map((item, i) => (
                    <a 
                      key={i}
                      href={`#section-${i + 1}`}
                      className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {i + 1}. {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Terms Details */}
            <div className="lg:col-span-2 space-y-16">
              
              <section id="section-1">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">1</div>
                  Acceptance of Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  By using stadiumport.com (the "Website"), you agree to these Terms of Service, our Privacy Policy, our Affiliate Disclaimer, and all applicable laws. <strong className="text-slate-900 dark:text-white">If you disagree with any terms, please do not use our Website.</strong>
                </p>
              </section>

              <section id="section-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">2</div>
                  About Stadiumport
                </h2>
                <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-3">What We Provide</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Travel guides for 2026 FIFA World Cup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Transport and accommodation information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Affiliate links to booking services</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-3">What We Do NOT Do</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        <span>Sell tickets to matches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        <span>Process payments directly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        <span>Operate as a travel agency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="section-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">3</div>
                  User Responsibilities
                </h2>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-500/20 rounded-2xl p-6 mb-6">
                  <p className="text-indigo-900 dark:text-indigo-200 font-medium">
                    You acknowledge that travel planning is your responsibility. You must verify all information before booking. Stadiumport is not liable for your travel decisions.
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  You agree to use the Website for lawful purposes only, not to disrupt our systems, and not to use automated bots or scrapers.
                </p>
              </section>

              <section id="section-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">4</div>
                  Intellectual Property
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  All content on stadiumport (text, images, design) is owned by us or licensed to us.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-6">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Permitted
                    </h3>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                      <li>• Personal, non-commercial use</li>
                      <li>• Sharing links on social media</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-6">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-500" /> Prohibited
                    </h3>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                      <li>• Republishing our guides</li>
                      <li>• Commercial use without permission</li>
                      <li>• Removing copyright notices</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="section-5">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">5</div>
                  Accuracy of Information
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  We strive for accuracy but <strong>cannot guarantee</strong> that all information is current or error-free. Stadium capacities, transport routes, and pricing can change.
                </p>
                <div className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/30 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-500 shrink-0" />
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Critical:</strong> Always verify critical information (visas, entry requirements, match times) with official sources like FIFA or government websites.
                  </p>
                </div>
              </section>

              <section id="section-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">6</div>
                  Third-Party Links
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Our website contains affiliate links to third-party services (Booking.com, Expedia, etc.). When you click these links, you leave our site. We are not responsible for third-party content or services.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <ExternalLink className="w-4 h-4" />
                  Issues with bookings must be resolved directly with the service provider.
                </div>
              </section>

              <section id="section-7">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">7</div>
                  Disclaimer of Warranties
                </h2>
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6">
                  <p className="text-slate-700 dark:text-slate-300 font-medium text-sm uppercase tracking-wider mb-2">The Website is provided "AS IS"</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee uninterrupted or error-free operation.
                  </p>
                </div>
              </section>

              <section id="section-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">8</div>
                  Limitation of Liability
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  To the maximum extent permitted by law, stadiumport shall not be liable for any lost profits, travel disruptions, personal injury, or incorrect information. This applies even if we have been advised of the possibility of such damages.
                </p>
                <p className="text-slate-900 dark:text-white font-medium">
                  Your sole remedy for dissatisfaction is to stop using the Website.
                </p>
              </section>

              <section id="section-9">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">9</div>
                  Indemnification
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  You agree to indemnify and hold harmless stadiumport from any claims, damages, or expenses arising from your use of the Website, your violation of these Terms, or your travel decisions based on our content.
                </p>
              </section>

              <section id="section-10">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">10</div>
                  User-Generated Content & Email
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  If you post comments or reviews, you grant us license to use them. You are responsible for your content.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  By subscribing to our newsletter, you consent to receive emails. You can unsubscribe anytime. We comply with anti-spam laws.
                </p>
              </section>

              <section id="section-11">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">11</div>
                  Governing Law & Changes
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Gavel className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Governing Law</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        These Terms are governed by the laws of the United States and the State of Delaware. Disputes shall be resolved in Delaware courts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldAlert className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Changes to Terms</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        We may modify these Terms at any time. Continued use constitutes acceptance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="section-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">12</div>
                  Contact Us
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Questions about these Terms?
                </p>
                <a 
                  href="mailto:info@stadiumport.com" 
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                >
                  <Mail className="w-5 h-5" /> info@stadiumport.com
                </a>
              </section>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
