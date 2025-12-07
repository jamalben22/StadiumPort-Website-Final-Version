
import nodemailer from 'nodemailer';

// ----------------------------------------------------------------------
// Configuration & Environment Variables
// ----------------------------------------------------------------------

// SMTP Configuration (Hostinger defaults)
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465');
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';
const SENDER_NAME = process.env.SENDER_NAME || 'Stadiumport';

// Site URL Detection (Vercel vs Localhost)
export const getSiteUrl = () => {
  // 1. Explicit override (e.g., defined in Vercel dashboard)
  if (process.env.VITE_SITE_URL) return process.env.VITE_SITE_URL;
  
  // 2. Vercel System Env (automatically set on deployment)
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  
  // 3. Local Development Default
  return 'http://localhost:3000';
};

// ----------------------------------------------------------------------
// Email Transporter
// ----------------------------------------------------------------------

// Create reusable transporter object using the default SMTP transport
export const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465, // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    // Do not fail on invalid certs (common fix for some hosting providers like Hostinger)
    rejectUnauthorized: false,
    // Removed explicit ciphers to allow auto-negotiation (fixes potential SSLv3 issues)
  },
  // Timeouts to prevent Vercel function freezing
  connectionTimeout: 10000, // 10 seconds (relaxed)
  greetingTimeout: 5000,   // 5 seconds
  socketTimeout: 10000,    // 10 seconds
  logger: true,
  debug: true,
});

export interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
}

export const sendEmail = async (options: EmailOptions) => {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  console.log('📧 [Email Service] Initiating send to:', options.to);

  // 1. Try Resend API first
  if (RESEND_API_KEY) {
    try {
      console.log('🚀 Sending via Resend API...');
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: `${SENDER_NAME} <${SENDER_EMAIL}>`,
          to: [options.to],
          subject: options.subject,
          html: options.html,
          text: options.text,
          reply_to: options.replyTo || SENDER_EMAIL
        })
      });

      if (!res.ok) {
        if (res.status === 401) {
           throw new Error('Resend API Unauthorized (401) - Check API Key');
        }
        const errorText = await res.text();
        throw new Error(`Resend API Error (${res.status}): ${errorText}`);
      }

      // @ts-ignore
      const data = await res.json();
      console.log('✅ [Email Service] Sent via Resend:', data.id);
      return { success: true, messageId: data.id, provider: 'resend' };
    } catch (error: any) {
      console.error('⚠️ Resend API failed:', error.message);
      console.log('🔄 Falling back to SMTP/Nodemailer...');
    }
  }
  
  if (!SMTP_USER || !SMTP_PASS) {
    console.error('❌ [Email Service] CRITICAL: Credentials missing.');
    throw new Error('SMTP Credentials missing');
  }

  // Wrap sendMail in a promise race to enforce a strict timeout 
  // that is shorter than Vercel's default 10s function limit (for safety)
  const sendPromise = transporter.sendMail({
    from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
    to: options.to,
    replyTo: options.replyTo || SENDER_EMAIL,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });

  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Email sending timed out after 8 seconds')), 8000)
  );

  try {
    // @ts-ignore
    const info = await Promise.race([sendPromise, timeoutPromise]);
    // @ts-ignore
    console.log('✅ [Email Service] Success! Message ID:', info.messageId);
    // @ts-ignore
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ [Email Service] Send Failed:', error);
    throw error;
  }
};

export const verifyConnection = async () => {
  try {
    await transporter.verify();
    console.log('Server is ready to take our messages');
    return true;
  } catch (error) {
    console.error('SMTP Connection Error:', error);
    return false;
  }
};
