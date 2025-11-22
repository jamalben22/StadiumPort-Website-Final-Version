
import { useEffect, Children } from 'react';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AffiliateDisclaimerPage() {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    setPageMeta({
      title: 'Affiliate Disclaimer',
      description: 'Stadiumport is a free resource supported by affiliate commissions. Learn how affiliate links work and our commitment to transparency.',
      url: `${siteUrl}/legal/affiliate-disclaimer`
    });
  }, []);

  const content = `## **Affiliate Disclaimer** 

 **Last Updated:** January 15, 2025 

 --- 

 ### **We're Honest About How We Make Money** 

 Stadiumport is a free resource funded by affiliate commissions. When you book hotels, flights, tours, or other travel services through our links, we may earn a commission at no additional cost to you. 

 **This page explains exactly how it works.** 

 --- 

 ### **What Are Affiliate Links?** 

 Affiliate links are special URLs that track when someone clicks from our site to a partner's website and makes a purchase. If you complete a booking, we receive a small percentage as a commission. 

 **Example:** 
 1. You read our New York City guide 
 2. You click our Booking.com hotel link 
 3. You book a hotel for $200/night 
 4. Booking.com pays us ~$6-12 commission 
 5. **You still pay $200** (no extra charge) 

 --- 

 ### **Our Affiliate Partners** 

 We partner with trusted travel services, including: 

 **Accommodation:** 
 - Booking.com 
 - Expedia 
 - Hotels.com 
 - Airbnb 
 - Vrbo 

 **Flights:** 
 - Skyscanner 
 - Google Flights (affiliate programs) 
 - Airline direct booking links 

 **Experiences & Tours:** 
 - GetYourGuide 
 - Viator 
 - TourRadar 

 **Transportation:** 
 - Rental car companies 
 - Airport transfer services 
 - Train and bus booking platforms 

 **Other Services:** 
 - Travel insurance providers 
 - SIM cards and eSIM services 
 - Luggage and travel gear 

 *This list may expand as we add partners who serve World Cup travelers.* 

 --- 

 ### **Our Promise: Honesty First** 

 **We Never:** 
 - ❌ Recommend services solely because they pay higher commissions 
 - ❌ Hide better options to push affiliate partners 
 - ❌ Lie about prices or availability 
 - ❌ Create fake reviews or endorsements 

 **We Always:** 
 - ✅ Recommend what we'd actually use ourselves 
 - ✅ Disclose when links are affiliate links 
 - ✅ Provide honest pros and cons 
 - ✅ Put your travel experience above our commissions 

 **Our Reputation Matters More Than Any Commission.** 

 If a hotel sucks, we'll tell you—even if they pay us. If a better non-affiliate option exists, we'll mention it. 

 --- 

 ### **Your Cost: Zero** 

 **Important:** Affiliate links cost you nothing extra. Prices are identical whether you: 
 - Click our affiliate link, or 
 - Go directly to the website yourself 

 Sometimes, our affiliate partnerships provide **exclusive discounts** or perks unavailable elsewhere. When that's the case, we'll highlight it. 

 --- 

 ### **Why We Use Affiliate Links** 

 Creating comprehensive World Cup guides requires: 
 - Extensive research and fact-checking 
 - Regular content updates 
 - Website hosting and maintenance 
 - Time and expertise 

 Affiliate commissions allow us to: 
 - ✅ Keep all guides **100% free** 
 - ✅ Avoid intrusive advertising 
 - ✅ Maintain editorial independence 
 - ✅ Continue expanding our content 

 **Your bookings support our ability to help thousands of World Cup fans plan better trips.** 

 --- 

 ### **FTC Compliance** 

 This disclosure complies with: 
 - **Federal Trade Commission (FTC)** 16 CFR Part 255: "Guides Concerning the Use of Endorsements and Testimonials in Advertising" 
 - FTC guidelines on affiliate marketing transparency 
 - International advertising standards 

 The FTC requires websites to disclose affiliate relationships. We take this seriously and clearly mark affiliate content. 

 --- 

 ### **How We Mark Affiliate Links** 

 We disclose affiliate relationships through: 
 - This Affiliate Disclaimer page (linked in footer) 
 - Statements within content (e.g., "We may earn a commission...") 
 - Clear labeling on promotional content 

 **You'll always know when we might earn from your click.** 

 --- 

 ### **Non-Affiliate Recommendations** 

 Not every link on Stadiumport is an affiliate link. We also link to: 
 - Official FIFA and stadium websites (informational) 
 - Government visa and travel advisory sites (safety) 
 - Public transportation authorities (practical planning) 
 - Free resources and tools 

 These links earn us nothing. We include them because they're helpful. 

 --- 

 ### **Price Comparisons** 

 When possible, we encourage you to: 
 - ✅ Compare prices across multiple platforms 
 - ✅ Check directly with hotels or airlines 
 - ✅ Use our links if prices are competitive 

 **Smart travel planning benefits everyone.** 

 --- 

 ### **Questions or Concerns?** 

 If you have questions about our affiliate relationships or believe we've made a biased recommendation, please contact us: 

 **Email:** legal@stadiumport.com 

 We take feedback seriously and will address any concerns promptly. 

 --- 

 ### **Changes to This Disclosure** 

 We may update this Affiliate Disclaimer as we add new partners or change practices. Updates will be noted with a new "Last Updated" date. 

 --- 

 ### **Thank You for Your Support** 

 By using our affiliate links, you're supporting free, high-quality World Cup travel content. We genuinely appreciate it. 

 **Now go plan an amazing 2026 World Cup adventure!** 

 --- 

 **Stadiumport**  
 Email: legal@stadiumport.com  
 Website: stadiumport.com 

 --- 

 *This Affiliate Disclaimer is effective as of January 15, 2025.* 

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
