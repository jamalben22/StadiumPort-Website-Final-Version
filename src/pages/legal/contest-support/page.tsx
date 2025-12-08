
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setPageMeta } from '../../../components/seo/MetaUtils';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ContestSupportPage() {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    setPageMeta({
      title: 'World Cup 2026 Prediction Contest - Support',
      description: 'Get support for the StadiumPort World Cup 2026 Prediction Contest. Contact us for assistance with your account, predictions, or technical issues.',
      url: `${siteUrl}/world-cup-2026-prediction-contest-support`
    });
  }, []);

  const content = `
**Need help with the prediction contest? We're here to assist you.**

---

### **Contact Support**

**Email:** [info@stadiumport.com](mailto:info@stadiumport.com)  
**Response Time:** We aim to respond to all inquiries within **24 hours**.

---

### **Common Issues**

**1. I didn't receive my confirmation email.**
- Check your **Spam/Junk** folder.
- Ensure you entered the correct email address.
- If it hasn't arrived after 15 minutes, please contact us.

**2. Can I edit my predictions?**
- Yes, you can edit your predictions at any time **before the first match kicks off** on June 11, 2026.
- Use the unique link sent to your email to access your entry.

**3. I'm experiencing technical problems.**
- Try clearing your browser cache or using a different browser.
- Ensure you have a stable internet connection.
- If the issue persists, email us with a screenshot and description of the error.

**4. How are prizes distributed?**
- Winners will be contacted via email within 7 days of the tournament conclusion.
- Please refer to the [Official Terms & Conditions](/world-cup-2026-prediction-contest-terms) for full prize details.

---

### **Report Issues**

If you encounter any of the following, please report them immediately to [info@stadiumport.com](mailto:info@stadiumport.com):
- Suspected cheating or manipulation.
- Privacy or data concerns.
- General bugs or site errors.

**Thank you for playing and good luck!**
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
              Support
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
            prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:font-semibold
            prose-p:text-[#1d1d1f] dark:prose-p:text-[#f5f5f7] prose-p:leading-relaxed prose-p:text-[17px] prose-p:font-normal
            prose-li:text-[#1d1d1f] dark:prose-li:text-[#f5f5f7] prose-li:text-[17px]
            prose-strong:text-[#1d1d1f] dark:prose-strong:text-[#f5f5f7] prose-strong:font-semibold
            prose-a:text-[#0066cc] dark:prose-a:text-[#2997ff] prose-a:no-underline hover:prose-a:underline
            prose-hr:border-[#d2d2d7] dark:prose-hr:border-[#424245] prose-hr:my-12
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