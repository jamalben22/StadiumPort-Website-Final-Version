
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ContestTermsPage() {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    setPageMeta({
      title: 'World Cup 2026 Prediction Contest - Official Terms & Conditions',
      description: 'Official rules, eligibility requirements, and prize details for the StadiumPort World Cup 2026 Prediction Contest.',
      url: `${siteUrl}/world-cup-2026-prediction-contest-terms`
    });
  }, []);

  const content = `
**Last Updated**: November 28, 2025 
**Contest Period**: November 28, 2025 - July 19, 2026 

## 1. Eligibility 

- Open worldwide to legal residents aged 13 or older 
- Participants aged 13-17 must have parental/guardian consent 
- Void in countries where prohibited by law (North Korea, Iran, Syria, Cuba, Crimea) 
- Employees of Stadiumport, their immediate family, and affiliates are ineligible 
- One entry per person (verified by email + IP address) 

## 2. How To Enter 

- Register at [stadiumport.com/world-cup-2026-prediction-game](https://stadiumport.com/world-cup-2026-prediction-game)
- Complete predictions for all tournament stages 
- Predictions may be edited unlimited times until June 11, 2026, 11:00 AM ET 
- No purchase necessary to enter or win 

## 3. Scoring & Winner Selection 

- 1 point awarded for each correct prediction 
- Winner = highest total score after Final on July 19, 2026 
- Tie-breaking: (1) Correct champion → (2) Correct runner-up → (3) Random draw 
- Winners announced within 48 hours of Final via email + public announcement 

## 4. Prizes 

**1st Place:** 
- Official World Cup 2026 Winner Jersey (retail value: ~$150) 
- Official World Cup 2026 Adidas Ball (retail value: ~$200) 
- $500 USD Cash (via PayPal or bank transfer) 
- **Total Approximate Retail Value (ARV): $850 USD** 

**2nd-5th Place (Each):** 
- Official World Cup 2026 Winner Jersey (ARV: ~$150) 
- Official World Cup 2026 Adidas Ball (ARV: ~$200) 
- **Total ARV per winner: $350 USD** 

**Total Prize Pool ARV: $2,250 USD** 

## 5. Prize Claiming & Delivery 

- Winners must respond within 7 days of email notification 
- Identity verification (government ID) required before prize distribution 
- Physical prizes ship within 30 days via DHL/FedEx (free international shipping) 
- Cash prizes delivered via PayPal or international wire transfer 
- Winners responsible for any import duties, customs fees, or local taxes 
- Unclaimed prizes forfeit after 30 days; alternate winner selected 

## 6. Prize Substitution 

- Stadiumport reserves right to substitute prizes of equal or greater value if original prizes become unavailable 
- Jersey size/team preference honored when possible 
- Cash prize amount guaranteed ($500 USD for 1st place) 

## 7. Disqualification & Anti-Cheating 

Immediate disqualification for: 
- Multiple accounts or duplicate entries 
- Bot usage, scripts, or automated predictions 
- Sharing accounts or coordinating entries 
- False identity or fraudulent information 
- Attempting to manipulate scoring system 

Banned users forfeit all prizes and future participation. 

## 8. Data Collection & Use 

- Email, name, country, and predictions collected 
- Data used for contest administration, winner verification, and prize delivery 
- Winners' first name + country may be publicly announced 
- See our Contest Privacy Policy for full details 

## 9. Limitation Of Liability 

- Stadiumport not responsible for: technical failures, lost/delayed shipments, customs issues, prize damage during shipping, ISP/network problems, or force majeure events 
- Participants release Stadiumport from all liability related to prize acceptance/use 
- Maximum liability limited to prize retail value 

## 10. Disputes & Governing Law 

- All decisions by Stadiumport are final 
- Disputes resolved through binding arbitration 
- Governed by United States law 
- Class action waiver applies 

## 11. Modifications 

Stadiumport reserves right to: 
- Cancel, modify, or suspend contest for fraud, technical issues, or force majeure 
- Adjust scoring in case of official FIFA match result changes 
- Update these terms with 7 days notice (posted on this page) 

## 12. Taxes 

- Winners responsible for all applicable taxes in their jurisdiction 
- US winners receiving $500+ in prizes will receive IRS Form 1099-MISC 

## 13. Publicity 

By entering, winners grant Stadiumport rights to use name, country, and winning predictions for promotional purposes without compensation. 

## 14. Contact 

Questions? Email: [info@stadiumport.com](mailto:info@stadiumport.com) 

**NO PURCHASE NECESSARY. VOID WHERE PROHIBITED.**
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
              Official Terms & Conditions
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