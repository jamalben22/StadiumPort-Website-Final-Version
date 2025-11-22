
import { useEffect, Children } from 'react';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function TermsPage() {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    setPageMeta({
      title: 'Terms of Service',
      description: 'Read Stadiumport’s Terms of Service outlining acceptable use, policies, and legal disclaimers.',
      url: `${siteUrl}/legal/terms`
    });
  }, []);

  const content = `## **Terms of Service** 

 **Effective Date:** January 15, 2025  
 **Last Updated:** January 15, 2025 

 Welcome to **Stadiumport**! By accessing or using our website, you agree to these Terms of Service. Please read them carefully. 

 --- 

 ### **1. Acceptance of Terms** 

 By using stadiumport.com (the "Website"), you agree to: 
 - These Terms of Service 
 - Our Privacy Policy 
 - Our Affiliate Disclaimer 
 - All applicable laws and regulations 

 **If you disagree with any terms, please do not use our Website.** 

 --- 

 ### **2. About Stadiumport** 

 **Stadiumport** provides: 
 - ✅ Travel guides for 2026 FIFA World Cup stadiums and host cities 
 - ✅ Information about transport, accommodation, and matchday experiences 
 - ✅ Affiliate links to third-party booking services 
 - ✅ Free newsletter with World Cup travel tips 

 **We do NOT:** 
 - ❌ Sell tickets to World Cup matches 
 - ❌ Process payments or bookings directly 
 - ❌ Operate as a travel agency or tour operator 
 - ❌ Guarantee availability of hotels, flights, or experiences 

 --- 

 ### **3. User Responsibilities** 

 **You Agree To:** 
 - ✅ Provide accurate information when subscribing or contacting us 
 - ✅ Use the Website for lawful purposes only 
 - ✅ Not attempt to hack, disrupt, or damage our systems 
 - ✅ Not copy, reproduce, or distribute our content without permission 
 - ✅ Not use automated systems (bots, scrapers) to access our site 

 **You Acknowledge:** 
 - Travel planning is your responsibility 
 - You must verify all information before booking 
 - Stadiumport is not liable for your travel decisions 

 --- 

 ### **4. Intellectual Property** 

 **Our Content:** 
 All content on Stadiumport—including text, images, logos, graphics, and design—is owned by Stadiumport or licensed to us. This content is protected by copyright, trademark, and other intellectual property laws. 

 **You May:** 
 - ✅ View and print content for personal, non-commercial use 
 - ✅ Share links to our pages on social media 

 **You May NOT:** 
 - ❌ Copy our stadium guides and republish them 
 - ❌ Use our content for commercial purposes without permission 
 - ❌ Remove copyright notices or attributions 
 - ❌ Create derivative works from our content 

 **To request permission for content use, contact us at:** legal@stadiumport.com 

 --- 

 ### **5. Accuracy of Information** 

 We strive for accuracy but **cannot guarantee** that all information is: 
 - Current and up-to-date 
 - Complete and error-free 
 - Suitable for your specific needs 

 **Information May Change:** 
 - Stadium capacities and configurations 
 - Transport routes and schedules 
 - Hotel availability and pricing 
 - Match schedules and locations 
 - Travel restrictions and visa requirements 

 **You Must:** 
 - ✅ Verify critical information with official sources (FIFA, stadium operators, governments) 
 - ✅ Check travel advisories before booking 
 - ✅ Confirm bookings directly with service providers 

 --- 

 ### **6. Third-Party Links and Services** 

 **Affiliate Links:** 
 Our Website contains links to third-party websites (hotels, airlines, tour operators). When you click these links: 
 - You leave our Website and enter third-party sites 
 - These companies have their own terms, policies, and practices 
 - We earn commissions on qualifying purchases at **no extra cost to you** 
 - We are **NOT responsible** for third-party content, services, or issues 

 **Examples:** 
 - Booking.com 
 - Expedia 
 - Airbnb 
 - GetYourGuide 
 - Car rental companies 
 - Airlines 

 **Issues with bookings must be resolved directly with these companies.** 

 See our **Affiliate Disclaimer** for details. 

 --- 

 ### **7. Disclaimer of Warranties** 

 **THE WEBSITE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.** 

 We disclaim all warranties, express or implied, including: 
 - ❌ Merchantability 
 - ❌ Fitness for a particular purpose 
 - ❌ Non-infringement 
 - ❌ Accuracy or reliability of information 
 - ❌ Uninterrupted or error-free operation 

 **Translation:** We provide information to help you, but we can't promise it's perfect. Use at your own risk. 

 --- 

 ### **8. Limitation of Liability** 

 **TO THE MAXIMUM EXTENT PERMITTED BY LAW:** 

 Stadiumport and its owners, employees, and partners **SHALL NOT BE LIABLE** for any: 
 - Lost profits, revenue, or business opportunities 
 - Travel disruptions, cancellations, or delays 
 - Personal injury or property damage 
 - Incorrect information or outdated content 
 - Third-party actions or omissions 
 - Technical issues or data loss 

 **This applies even if we've been advised of the possibility of such damages.** 

 **Your Sole Remedy:** If you're dissatisfied with our Website, stop using it. 

 --- 

 ### **9. Indemnification** 

 You agree to **indemnify and hold harmless** Stadiumport from any claims, damages, losses, or expenses (including legal fees) arising from: 
 - Your use of the Website 
 - Your violation of these Terms 
 - Your violation of any third-party rights 
 - Your travel decisions based on our content 

 **Translation:** If you do something that gets us sued, you're responsible. 

 --- 

 ### **10. User-Generated Content** 

 If we add features allowing user comments or reviews in the future: 
 - You grant us a license to use your submissions 
 - You're responsible for your own content 
 - We may moderate or remove inappropriate content 
 - You cannot post illegal, offensive, or infringing material 

 --- 

 ### **11. Email Communications** 

 **Newsletter Subscription:** 
 - By subscribing, you consent to receive emails from us 
 - We'll send World Cup guides, travel tips, and affiliate offers 
 - You can unsubscribe anytime using the link in every email 
 - We comply with CAN-SPAM Act and anti-spam laws 

 **We Will NOT:** 
 - ❌ Spam you with excessive emails 
 - ❌ Sell your email to third parties 
 - ❌ Send you unrelated marketing 

 --- 

 ### **12. Governing Law** 

 These Terms are governed by the laws of the **United States** and the State of **Delaware**, without regard to conflict of law principles. 

 Any disputes shall be resolved in the courts located in **Delaware**.

 --- 

 ### **13. Changes to Terms** 

 We may modify these Terms at any time. Changes will be posted on this page with a new "Last Updated" date. Continued use after changes constitutes acceptance. 

 **We recommend reviewing these Terms periodically.** 

 --- 

 ### **14. Severability** 

 If any provision of these Terms is found unenforceable, the remaining provisions remain in full effect. 

 --- 

 ### **15. Entire Agreement** 

 These Terms, together with our Privacy Policy and Affiliate Disclaimer, constitute the entire agreement between you and Stadiumport. 

 --- 

 ### **16. Contact Us** 

 Questions about these Terms? 

 **Stadiumport**  
 Email: legal@stadiumport.com  
 Website: stadiumport.com 

 --- 

 *These Terms of Service are effective as of January 15, 2025.* 

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
