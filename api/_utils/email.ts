
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
    ciphers: 'SSLv3'
  },
  // Timeouts to prevent Vercel function freezing
  connectionTimeout: 5000, // 5 seconds
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
  console.log('🔧 [Email Service] Config:', {
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth_user: SMTP_USER ? 'Set' : 'Missing',
    auth_pass: SMTP_PASS ? 'Set' : 'Missing'
  });

  if (!SMTP_USER || !SMTP_PASS) {
    console.error('❌ [Email Service] CRITICAL: Credentials missing.');
    throw new Error('SMTP Credentials missing');
  }

  try {
    // Skipping verify to save time on serverless execution
    const info = await transporter.sendMail({
      from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`, // sender address
      to: options.to, // list of receivers
      replyTo: options.replyTo || SENDER_EMAIL,
      subject: options.subject, // Subject line
      text: options.text, // plain text body
      html: options.html, // html body
    });
    console.log('✅ [Email Service] Success! Message ID:', info.messageId);
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
