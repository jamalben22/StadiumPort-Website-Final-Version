
import { useEffect, Children } from 'react';
import { setPageMeta } from '../../components/seo/MetaUtils';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Button } from '../../components/base/Button';
import { Link } from 'react-router-dom';
import { SchemaOrg, generateOrganizationSchema, generateBreadcrumbSchema } from '../../components/seo/SchemaOrg';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
    { name: 'Home', url: import.meta.env.VITE_SITE_URL || 'https://example.com' },
    { name: 'About', url: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/about` }
  ]);

  const organizationSchema = generateOrganizationSchema();

  const content = ` 
 ## **About Stadiumport** 
 
 ### **Your Trusted Guide to World Cup 2026** 
 
 Welcome to **Stadiumport**—your comprehensive resource for planning the perfect 2026 FIFA World Cup experience across the United States, Canada, and Mexico. 
 
 --- 
 
 ### **Our Mission** 
 
 The 2026 World Cup will be the largest in history: 48 teams, 104 matches, 16 stadiums across three nations. Planning your trip shouldn't be overwhelming. 
 
 **We exist to make World Cup travel simple, informed, and unforgettable.** 
 
 Whether you're attending the Final at MetLife Stadium, experiencing Mexico City's legendary Estadio Azteca, or watching Canada play at home in Toronto, we've done the research so you don't have to. 
 
 --- 
 
 ### **What We Offer** 
 
 **Comprehensive Stadium Guides:** 
 - All 16 World Cup venues, from architecture to atmosphere 
 - Transport directions (metro, bus, parking, rideshare) 
 - Where to stay near each stadium 
 - Matchday tips from fans who know these venues 
 - What to do before and after matches 
 
 **Host City Travel Guides:** 
 - Neighborhood recommendations 
 - Local cuisine and dining spots 
 - Safety tips for international visitors 
 - Cultural attractions and experiences 
 - Budget, mid-range, and luxury accommodation options 
 
 **Practical Travel Resources:** 
 - Visa requirements and entry procedures 
 - Transportation between cities 
 - Mobile connectivity and eSIM guides 
 - Packing lists and weather considerations 
 - Safety protocols and emergency contacts 
 
 **Email Newsletter:** 
 - Hotel price drop alerts 
 - Match schedule updates 
 - Exclusive travel deals 
 - Insider tips from our research 
 - World Cup countdown updates 
 
 --- 
 
 ### **Our Approach** 
 
 **Research-First:** 
 We verify every fact. Stadium capacities, transport routes, hotel locations—if we publish it, we've checked it against official sources. 
 
 **Honest Recommendations:** 
 We use affiliate links to support our free content, but we **never** let commissions influence our opinions. If something isn't worth your money, we'll say so. 
 
 **Globally Friendly:** 
 We write for international travelers from every continent. Our guides include metric and imperial measurements, currency context, and cultural considerations. 
 
 **Constantly Updated:** 
 World Cup information evolves. We monitor official announcements, transport changes, and accommodation availability to keep guides current. 
 
 --- 
 
 ### **Why Trust Stadiumport?** 
 
 ✔ **Independent:** We're not affiliated with FIFA, hotels, or stadiums—just passionate about helping fans  
 ✔ **Comprehensive:** Every stadium, every city, every detail you need  
 ✔ **Transparent:** Clear disclosure of affiliate relationships  
 ✔ **Experienced:** Our team has attended major tournaments worldwide  
 ✔ **Free:** All guides are 100% free to access  
 
 --- 
 
 ### **Who We Serve** 
 
 **First-Time World Cup Attendees:** 
 Nervous about international travel? We've got you covered with step-by-step guidance. 
 
 **Veteran Football Fans:** 
 Want insider tips on stadium atmosphere, supporter sections, and local football culture? We deliver. 
 
 **Budget Travelers:** 
 Looking for hostels, public transport, and affordable experiences? Our guides cover every budget level. 
 
 **Luxury Seekers:** 
 Prefer 5-star hotels and premium experiences? We feature those too. 
 
 **Families:** 
 Traveling with kids? We include family-friendly accommodation, safety tips, and practical advice. 
 
 --- 
 
 ### **Our Values** 
 
 **1. Accuracy** 
 We fact-check obsessively. Your trip depends on good information. 
 
 **2. Honesty** 
 If we earn a commission, we disclose it. If a place isn't great, we tell you. 
 
 **3. Inclusivity** 
 Football is for everyone. Our guides welcome fans of all backgrounds, budgets, and abilities. 
 
 **4. Helpfulness** 
 We're here to solve problems, not create them. Every piece of content aims to make your trip easier. 
 
 **5. Passion** 
 We love football. We love travel. We love helping people experience both. 
 
 --- 
 
 ### **Looking Ahead** 
 
 The 2026 World Cup represents a historic moment: the first tournament across three nations, the largest World Cup ever, and North America's return to hosting after decades. 
 
 **We're honored to be part of your journey.** 
 
 Whether you're planning to attend one match or follow your team across the continent, Stadiumport is here to help you navigate every detail. 
 
 --- 
 
 ### **Get Started** 
 
 Ready to plan your World Cup 2026 adventure? 
 
 - **Explore all 16 stadiums** → [Link to stadiums page] 
 - **Discover host cities** → [Link to cities page] 
 - **Subscribe for updates** → [Link to newsletter signup] 
 - **Read travel guides** → [Link to travel guides page] 
 
 --- 
 
 ### **Contact Us** 
 
 Have questions? Spotted outdated information? Want to share your own World Cup tips? 
 
 **We'd love to hear from you:** 
 
 **Email:** [your email]  
 **Website:** stadiumport.com/contact 
 
 --- 
 
 ### **Join Our Community** 
 
 Follow us for daily World Cup content: 
 - **Newsletter:** [Subscribe link] 
 - **Twitter:** [@stadiumport - if you create it] 
 - **Instagram:** [@stadiumport - if you create it] 
 
 --- 
 
 **Let's make 2026 unforgettable. Together.** 
 
 --- 
 
 **Stadiumport**  
 *Your World Cup 2026 Travel Companion* 
 
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
      <main className="pt-20">
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
                          {children}
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
                          {children}
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
