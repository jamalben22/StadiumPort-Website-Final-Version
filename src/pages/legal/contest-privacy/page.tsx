
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ContestPrivacyPage() {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    setPageMeta({
      title: 'World Cup 2026 Prediction Contest - Privacy Policy',
      description: 'Privacy policy for the StadiumPort World Cup 2026 Prediction Contest detailing data collection, use, and protection.',
      url: `${siteUrl}/world-cup-2026-prediction-contest-privacy`
    });
  }, []);

  const content = `
**Last Updated**: November 28, 2025 

## 1. Information We Collect 

**For Contest Participation:** 
- Email address (required) 
- Display name/username (required) 
- Country of residence (required) 
- Tournament predictions (all stages) 
- IP address (anti-cheating verification) 
- Browser/device info (fraud prevention) 

**For Prize Winners:** 
- Full legal name 
- Mailing address (physical prize delivery) 
- Government-issued ID (identity verification) 
- PayPal email or bank details (cash prize payment) 
- Phone number (shipping notifications) 

## 2. How We Use Your Data 

- Administer the contest and calculate scores 
- Verify identity and prevent fraud 
- Deliver prizes to winners 
- Send contest updates and winner announcements 
- Comply with legal/tax obligations 
- Improve user experience 

## 3. Data Sharing 

**We DO NOT sell your data.** 

We share data only with: 
- Shipping carriers (DHL, FedEx) for prize delivery 
- Payment processors (PayPal, Wise) for cash prizes 
- Tax authorities (if required by law) 
- Legal authorities (if subpoenaed) 

## 4. COPPA Compliance (Ages 13-17) 

For participants under 18: 
- We collect minimal necessary data 
- Parental consent required for prize claiming 
- Parents may request data deletion: info@stadiumport.com 
- No behavioral tracking or targeted advertising 

## 5. Public Information 

**What we publish:** 
- Winner's first name + country (e.g., "Maria from Brazil") 
- Final leaderboard with usernames 
- Winning prediction brackets (optional, with consent) 

**What we keep private:** 
- Full names, emails, addresses 
- Payment information 
- Government IDs 

## 6. Data Retention 

- Active contest data: Until July 31, 2026 (30 days post-Final) 
- Winner verification docs: 2 years (tax compliance) 
- Non-winners: Data deleted 90 days after contest ends 
- You may request early deletion: privacy@stadiumport.com 

## 7. Your Rights 

You can: 
- Access your data: Request via email 
- Correct errors: Update in account settings 
- Delete data: Email privacy@stadiumport.com (contest entries void) 
- Opt-out emails: Unsubscribe link in all emails 
- Withdraw consent: Forfeits contest entry 

## 8. Security 

- SSL encryption for all data transmission 
- Secure servers with regular backups 
- ID documents encrypted and access-restricted 
- Payment info processed by certified processors (PCI-DSS compliant) 

## 9. International Transfers 

- Data stored on servers in United States 
- International shipping requires sharing address with carriers 
- All transfers comply with GDPR (if applicable) 

## 10. Cookies & Tracking 

- Essential cookies: Login, preferences 
- Analytics: Google Analytics (anonymized) 
- No advertising cookies or tracking pixels 

## 11. Children's Privacy 

- Designed for ages 13+ 
- No intentional collection from under-13 
- Parents may contact privacy@stadiumport.com for removal 

## 12. Changes to Policy 

- Updates posted 7 days before effective date 
- Continued participation = acceptance 
- Major changes require re-consent 

## 13. Contact 

Privacy questions: [info@stadiumport.com](mailto:info@stadiumport.com)  
General support: [info@stadiumport.com](mailto:info@stadiumport.com) 
`;

  return (
    <div className="min-h-screen bg-[#fbfbfd] dark:bg-[#000000] flex flex-col font-sans transition-colors duration-300 text-[#1d1d1f] dark:text-[#f5f5f7]">
      <Header />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[800px] mx-auto"
        >
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-[48px] font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-4 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-[#86868b] dark:text-[#86868b] font-medium leading-relaxed">
              World Cup 2026 Prediction Contest
            </p>
          </div>

          <div className="h-px w-full bg-[#d2d2d7] dark:bg-[#424245] mb-12" />

          {/* Content Section */}
          <article className="prose prose-lg max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-[#1d1d1f] dark:prose-headings:text-[#f5f5f7]
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:text-[#1d1d1f] dark:prose-p:text-[#f5f5f7] prose-p:leading-relaxed prose-p:text-[17px] prose-p:font-normal
            prose-li:text-[#1d1d1f] dark:prose-li:text-[#f5f5f7] prose-li:text-[17px]
            prose-strong:text-[#1d1d1f] dark:prose-strong:text-[#f5f5f7] prose-strong:font-semibold
            prose-a:text-[#0066cc] dark:prose-a:text-[#2997ff] prose-a:no-underline hover:prose-a:underline
            prose-hr:border-[#d2d2d7] dark:prose-hr:border-[#424245]
            [&>ul]:list-disc [&>ul]:pl-5
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}