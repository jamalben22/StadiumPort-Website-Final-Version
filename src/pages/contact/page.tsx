import { useEffect, Children } from 'react';
import { setPageMeta } from '../../components/seo/MetaUtils';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Button } from '../../components/base/Button';
import { Link } from 'react-router-dom';
import { SchemaOrg, generateOrganizationSchema, generateBreadcrumbSchema } from '../../components/seo/SchemaOrg';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

  const content = ` ## **Contact Stadiumport** 
 
 ### **We're Here to Help** 
 
 Have a question about World Cup 2026? Spotted outdated information? Want to share your travel tips? 
 
 **We'd love to hear from you.** 
 
 --- 
 
 ### **Email Us** 
 
 **General Inquiries:**  
 hello@stadiumport.com *(create this email)* 
 
 **Legal/Privacy Matters:**  
 legal@stadiumport.com *(create this email)* 
 
 **Partnership Inquiries:**  
 partnerships@stadiumport.com *(create this email)* 
 
 **Press/Media:**  
 press@stadiumport.com *(create this email)* 
 
 --- 
 
 ### **What We Can Help With** 
 
 ✅ World Cup 2026 travel planning questions  
 ✅ Stadium and city guide recommendations  
 ✅ Corrections or updates to our content  
 ✅ Partnership and collaboration opportunities  
 ✅ Press and media inquiries  
 ✅ Privacy and data requests  
 ✅ Technical website issues  
 
 --- 
 
 ### **Response Time** 
 
 We typically respond within **24-48 hours** on business days. During peak World Cup planning season (March-July 2026), response times may be slightly longer due to high volume. 
 
 --- 
 
 ### **Before You Email** 
 
 **Check Our Resources First:** 
 - [All 16 Stadiums Guide](#) - Stadium-specific questions 
 - [Host Cities Guide](#) - City travel planning 
 - [FAQ](#) - Common questions answered 
 - [Privacy Policy](#) - Data and privacy concerns 
 
 --- 
 
 ### **Newsletter Subscription Issues** 
 
 **Not receiving our emails?** 
 - Check your spam/junk folder 
 - Add hello@stadiumport.com to your contacts 
 - Ensure you confirmed your subscription (check for confirmation email) 
 
 **Want to unsubscribe?** 
 - Click "Unsubscribe" at the bottom of any email 
 - Or email us to be removed manually 
 
 --- 
 
 ### **Report an Issue** 
 
 **Found incorrect information?** 
 We strive for accuracy. If you spot an error: 
 - Email us with the page URL 
 - Describe the issue clearly 
 - Provide the correct information (with source if possible) 
 
 We'll investigate and update promptly. 
 
 --- 
 
 ### **Partnership Opportunities** 
 
 **Travel Brands & Services:** 
 Interested in partnering with Stadiumport? Email partnerships@stadiumport.com with: 
 - Your company and services 
 - How you serve World Cup travelers 
 - Partnership proposal 
 
 We're selective about partnerships and prioritize companies that genuinely benefit our audience. 
 
 --- 
 
 ### **Social Media** 
 
 **Follow our World Cup journey:** 
 - **Twitter:** [@stadiumport](#) *(link when created)* 
 - **Instagram:** [@stadiumport](#) *(link when created)* 
 - **Facebook:** [Stadiumport](#) *(link when created)* 
 
 *Social media is monitored less frequently than email. For urgent matters, please email us.* 
 
 --- 
 
 ### **Mailing Address** 
 
 **Stadiumport**  
 [Your business address - can use a PO Box or virtual office for privacy]  
 [City, State, ZIP]  
 United States 
 
 *(Only needed for formal legal correspondence)* 
 
 --- 
 
 ### **Office Hours** 
 
 We operate Monday-Friday, 9:00 AM - 5:00 PM EST. 
 
 *Note: Stadiumport is a digital operation. We do not have a physical office for visitors.* 
 
 --- 
 
 ### **DMCA / Copyright Issues** 
 
 If you believe content on Stadiumport infringes your copyright, email legal@stadiumport.com with: 
 - Your contact information 
 - Description of copyrighted work 
 - Location of infringing material on our site 
 - Good faith statement 
 - Statement of accuracy under penalty of perjury 
 - Physical or electronic signature 
 
 We take intellectual property seriously and will respond promptly. 
 
 --- 
 
 ### **Legal Notices** 
 
 For formal legal notices, correspondence, or GDPR/CCPA requests, email: 
 
 **legal@stadiumport.com** 
 
 Include "LEGAL NOTICE" in the subject line. 
 
 --- 
 
 ### **Thank You** 
 
 We appreciate you taking the time to reach out. Stadiumport exists to serve World Cup fans, and your feedback helps us improve. 
 
 **Safe travels, and see you in 2026!** 
 
 --- 
 
 **Stadiumport** 
 *Your World Cup 2026 Travel Companion* 
 
 Email: hello@stadiumport.com 
 Website: stadiumport.com 
 
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