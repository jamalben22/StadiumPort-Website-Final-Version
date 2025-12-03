import { useEffect, useState } from 'react';
import { setPageMeta } from '../../components/seo/MetaUtils';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { SchemaOrg, generateOrganizationSchema, generateBreadcrumbSchema } from '../../components/seo/SchemaOrg';
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    setPageMeta({
      title: 'Contact – Stadiumport',
      description: 'Get in touch with Stadiumport for World Cup 2026 questions, corrections, partnerships, press/media, and general inquiries.',
      url: `${siteUrl}/contact`
    });
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://example.com' },
    { name: 'Contact', url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/contact` }
  ]);

  const organizationSchema = generateOrganizationSchema();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact-form',
          data: formData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#01b47d] selection:text-white">
      <SchemaOrg schema={[breadcrumbSchema, organizationSchema]} />
      <Header />

      <main className="pt-24 pb-12 md:pt-32 md:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <Mail className="w-4 h-4 text-[#01b47d]" />
              <span className="text-xs font-bold text-white/70 uppercase tracking-widest font-['Rajdhani']">
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-['Teko'] uppercase tracking-wide mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
              Contact <span className="text-[#01b47d]">Stadiumport</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto font-['Rajdhani'] text-lg">
              Have a question about World Cup 2026? Spotted outdated information? Or just want to say hello? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#01b47d]/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
              
              <h2 className="text-2xl font-bold font-['Teko'] uppercase tracking-wide mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#01b47d]" /> Send a Message
              </h2>

              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#01b47d]/10 border border-[#01b47d]/20 rounded-2xl p-8 text-center py-12"
                >
                  <div className="w-16 h-16 bg-[#01b47d]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#01b47d]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-['Teko'] uppercase tracking-wide">Message Sent!</h3>
                  <p className="text-white/60 text-sm font-['Rajdhani']">
                    Thanks for reaching out. We'll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-[#01b47d] hover:text-white transition-colors font-bold uppercase tracking-wider font-['Rajdhani']"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-1 font-['Rajdhani']">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#01b47d]/50 focus:bg-white/10 transition-all font-['Rajdhani']"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-1 font-['Rajdhani']">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#01b47d]/50 focus:bg-white/10 transition-all font-['Rajdhani']"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-1 font-['Rajdhani']">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#01b47d]/50 focus:bg-white/10 transition-all resize-none font-['Rajdhani']"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-sm font-['Rajdhani']">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#01b47d] hover:bg-[#019f6e] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#01b47d]/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-['Rajdhani'] uppercase tracking-wider text-base mt-2"
                  >
                    {status === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl font-bold font-['Teko'] uppercase tracking-wide text-white mb-4">
                  Direct Inquiries
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors group">
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1 font-['Rajdhani']">General Inquiries</p>
                    <a href="mailto:info@stadiumport.com" className="text-[#01b47d] group-hover:text-white transition-colors font-mono text-lg">info@stadiumport.com</a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-['Teko'] uppercase tracking-wide text-white mb-4">
                  Response Time
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-['Rajdhani']">
                  We typically respond within <span className="text-white font-bold">24-48 hours</span> on business days. During peak World Cup planning season, response times may be slightly longer due to high volume.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-['Teko'] uppercase tracking-wide text-white mb-4">
                  Before You Email
                </h3>
                <ul className="space-y-3 text-sm font-['Rajdhani']">
                  <li className="flex items-start gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#01b47d] mt-1.5 shrink-0" />
                    <span>Check our <a href="/stadiums" className="text-white hover:text-[#01b47d] underline decoration-white/20 hover:decoration-[#01b47d]">Stadium Guides</a> for venue-specific questions.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#01b47d] mt-1.5 shrink-0" />
                    <span>See <a href="/cities" className="text-white hover:text-[#01b47d] underline decoration-white/20 hover:decoration-[#01b47d]">Host City Guides</a> for travel planning.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
