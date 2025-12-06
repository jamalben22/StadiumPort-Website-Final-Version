
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
  console.log('📧 [Email Service] Initiating send to:', options.to);
  
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
