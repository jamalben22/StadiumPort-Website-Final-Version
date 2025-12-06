
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
  logger: true, // Log to console
  debug: true,  // Include debug info
});

export interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
}

export const sendEmail = async (options: EmailOptions) => {
  console.log('📧 Sending email to:', options.to);
  console.log('🔧 SMTP Config Check:', {
    host: SMTP_HOST,
    port: SMTP_PORT,
    userSet: !!SMTP_USER,
    passSet: !!SMTP_PASS ? 'YES (Hidden)' : 'NO',
    secure: SMTP_PORT === 465
  });

  if (!SMTP_USER || !SMTP_PASS) {
    console.error('❌ CRITICAL: SMTP Credentials missing in environment variables.');
    throw new Error('SMTP Credentials missing');
  }

  try {
    const info = await transporter.sendMail({
      from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`, // sender address
      to: options.to, // list of receivers
      replyTo: options.replyTo || SENDER_EMAIL,
      subject: options.subject, // Subject line
      text: options.text, // plain text body
      html: options.html, // html body
    });
    console.log('✅ Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ SMTP SEND ERROR:', error);
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
