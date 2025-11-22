import { useEffect, Children } from 'react';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function PrivacyPage() {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    setPageMeta({
      title: 'Privacy Policy',
      description: 'Read Stadiumport’s privacy policy covering data collection, usage, cookies, and your rights as a user.',
      url: `${siteUrl}/legal/privacy`
    });
  }, []);

  const content = `## **Privacy Policy** 

 **Effective Date:** January 15, 2025  
 **Last Updated:** January 15, 2025 

 At **Stadiumport**, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website. 

 --- 

 ### **1. Information We Collect** 

 **Information You Provide:** 
 - **Email Address:** When you subscribe to our newsletter or contact us 
 - **Name:** If provided voluntarily through contact forms 
 - **Messages:** Any information you include in contact form submissions 

 **Information Collected Automatically:** 
 - **Usage Data:** Pages visited, time spent on site, referring websites 
 - **Device Information:** Browser type, operating system, IP address 
 - **Cookies:** Small text files stored on your device (see Cookie Policy) 

 We do **NOT** collect: 
 - ❌ Payment information (we don't process transactions) 
 - ❌ Sensitive personal data (health, religion, etc.) 
 - ❌ Children's information (our site is for adults 18+) 

 --- 

 ### **2. How We Use Your Information** 

 We use collected information to: 

 ✅ **Send Email Updates:** World Cup 2026 guides, hotel deals, travel tips (only if you subscribe)  
 ✅ **Improve Our Website:** Understand what content is most helpful  
 ✅ **Respond to Inquiries:** Answer questions via our contact form  
 ✅ **Analyze Traffic:** Monitor site performance and user behavior  

 We will **NEVER:** 
 - ❌ Sell your email to third parties 
 - ❌ Send you spam 
 - ❌ Share your data without consent (except as legally required) 

 --- 

 ### **3. Cookies and Tracking** 

 We currently use **minimal tracking**. In the future, we may implement: 
 - Google Analytics (site traffic analysis) 
 - Facebook Pixel (advertising optimization) 
 - Affiliate tracking cookies (commission attribution) 

 **You Control Cookies:** 
 - Most browsers allow you to refuse cookies 
 - You can delete cookies at any time 
 - Blocking cookies may limit site functionality 

 For detailed information, see our **Cookie Policy**. 

 --- 

 ### **4. Third-Party Services** 

 **Affiliate Partners:** 
 When you click our links to book hotels, flights, or experiences, you'll be redirected to third-party websites (Booking.com, Expedia, etc.). These partners have their own privacy policies governing data collection. We don't control their practices. 

 **Email Service:** 
 We use email service providers to send newsletters. Your email is stored securely by these providers and used only for our communications. 

 --- 

 ### **5. Your Rights** 

 Depending on your location, you may have these rights: 

 **All Users:** 
 - ✅ **Unsubscribe:** Every email includes an unsubscribe link 
 - ✅ **Contact Us:** Request information about data we hold 
 - ✅ **Opt-Out:** Stop receiving communications anytime 

 **EU Residents (GDPR):** 
 - ✅ **Access:** Request a copy of your personal data 
 - ✅ **Correction:** Update inaccurate information 
 - ✅ **Deletion:** Request we erase your data ("right to be forgotten") 
 - ✅ **Portability:** Receive your data in a common format 
 - ✅ **Object:** Stop us from processing your data for certain purposes 

 **California Residents (CCPA):** 
 - ✅ **Know:** What personal information we collect 
 - ✅ **Delete:** Request deletion of your data 
 - ✅ **Opt-Out:** Stop "sale" of personal information (note: we don't sell data) 
 - ✅ **Non-Discrimination:** Exercise rights without penalty 

 **To exercise your rights, contact us at:** [your email - create legal@stadiumport.com] 

 --- 

 ### **6. Data Security** 

 We implement reasonable security measures to protect your information: 
 - Secure hosting infrastructure 
 - Encrypted data transmission (HTTPS) 
 - Limited access to personal data 
 - Regular security updates 

 However, **no internet transmission is 100% secure**. We cannot guarantee absolute security. 

 --- 

 ### **7. International Data Transfers** 

 Our website is accessible globally. If you're outside the United States, your information may be transferred to and stored on servers in the US or other countries. By using our site, you consent to this transfer. 

 --- 

 ### **8. Children's Privacy** 

 Stadiumport is not intended for children under 18. We do not knowingly collect information from minors. If you believe a child has provided us data, contact us immediately for deletion. 

 --- 

 ### **9. Changes to This Policy** 

 We may update this Privacy Policy as our practices evolve. Changes will be posted on this page with a new "Last Updated" date. Continued use of our site after changes constitutes acceptance. 

 --- 

 ### **10. Contact Us** 

 Questions about this Privacy Policy? 

 **Stadiumport**  
 Email: [your email]  
 Website: stadiumport.com 

 --- 

 *This Privacy Policy is effective as of January 15, 2025.* 

 --- 

---`;

  // Wrap leading emoji characters in paragraphs and list items with a monochrome, styled span
  // This keeps content unchanged while ensuring premium black icons instead of colored emojis.
  const withMonochromeEmoji = (children: React.ReactNode) => {
    const arr = Children.toArray(children);
    const out: React.ReactNode[] = [];
    arr.forEach((child, i) => {
      if (typeof child === 'string') {
        // Only replace when the emoji is at the start of the string segment (start of line)
        const match = child.match(/^\s*(✅|❌|✓|✕)\s*/);
        if (match) {
          const icon = match[1];
          const symbol = icon === '❌' || icon === '✕' ? '✕' : '✓';
          out.push(
            <span key={`emoji-${i}`} className="emoji-black" aria-hidden="false">
              {symbol}
            </span>
          );
          const rest = child.slice(match[0].length);
          if (rest) out.push(rest);
        } else {
          out.push(child);
        }
      } else {
        out.push(child);
      }
    });
    return out;
  };

  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
       <Header />
       <main id="main-content" className="pt-20">
         <section className="relative py-28 bg-white dark:bg-navy-900">
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
            <div className="relative z-10 p-6 md:p-10">
              <div className="mx-auto max-w-2xl">
                <div className="prose prose-slate dark:prose-invert prose-lg xl:prose-xl max-w-none font-inter">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({ node, ...props }) => (
                        <h2
                          className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6"
                          {...props}
                        />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3
                          className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mt-10 mb-4"
                          {...props}
                        />
                      ),
                      p: ({ node, children, ...props }) => (
                        <p className="text-slate-700 leading-8 dark:text-slate-300" {...props}>
                          {withMonochromeEmoji(children)}
                        </p>
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="lux-ul space-y-2" {...props} />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol className="lux-ol space-y-2" {...props} />
                      ),
                      li: ({ node, children, ...props }) => (
                        <li className="text-slate-700 dark:text-slate-300" {...props}>
                          {withMonochromeEmoji(children)}
                        </li>
                      ),
                      strong: ({ node, ...props }) => (
                        <strong className="font-semibold text-slate-900 dark:text-white" {...props} />
                      ),
                      hr: () => (
                        <hr className="my-12 border-t border-slate-200" />
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}