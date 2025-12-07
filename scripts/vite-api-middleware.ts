
import { Connect } from 'vite';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

// Helper to load env vars if not already loaded
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split(/\r?\n/).forEach(line => {
      const lineContent = line.trim();
      if (!lineContent || lineContent.startsWith('#')) return;
      
      const delimiterIndex = lineContent.indexOf('=');
      if (delimiterIndex !== -1) {
        const key = lineContent.substring(0, delimiterIndex).trim();
        let value = lineContent.substring(delimiterIndex + 1).trim();
        
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
}

loadEnv();

// Initialize Supabase (Server-Side)
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

if (!supabase) {
  console.warn('⚠️ Supabase client not initialized in middleware. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env');
} else {
  console.log('✅ Supabase client initialized in middleware');
}

// Audit Logging Helper
const logAudit = (action: string, details: any) => {
  const logDir = path.resolve(process.cwd(), 'logs');
  if (!fs.existsSync(logDir)) {
    try {
      fs.mkdirSync(logDir, { recursive: true });
    } catch (err) {
      console.error('Failed to create logs directory:', err);
      return;
    }
  }
  
  const logFile = path.join(logDir, 'audit.log');
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${action}] ${JSON.stringify(details)}\n`;
  
  try {
    fs.appendFileSync(logFile, logEntry);
  } catch (err) {
    console.error('Failed to write to audit log:', err);
  }
};

// ----------------------------------------------------------------------
// PREMIUM EMAIL TEMPLATES (Apple/Nike/Tesla Style)
// ----------------------------------------------------------------------
const getPremiumEmailHtml = (options: { 
  type: 'verification' | 'confirmation' | 'general';
  title: string; 
  name?: string;
  bodyContent?: string; 
  ctaLink?: string; 
  ctaText?: string; 
  siteUrl: string;
  uniqueId?: string;
}) => {
  const { type, title, name, bodyContent, ctaLink, ctaText, siteUrl, uniqueId } = options;
  
  // Brand Colors
  const brandGold = '#FBBF24';
  const brandGreen = '#01b47d';
  const bgDark = '#020617';
  const textLight = '#f8fafc';
  const textMuted = '#94a3b8';

  // Common Header
  const header = `
    <table role="presentation" style="width:100%;border:none;border-spacing:0;">
      <tr>
        <td align="center" style="padding:40px 0 30px 0;background-color:${bgDark};">
          <a href="${siteUrl}" style="text-decoration:none;">
             <!-- Fallback Text Logo if Image Fails -->
             <span style="font-family:'Arial Black', sans-serif;font-size:24px;color:${brandGold};letter-spacing:2px;text-transform:uppercase;">STADIUMPORT</span>
          </a>
        </td>
      </tr>
    </table>
  `;

  // Content Blocks based on Type
  let content = '';

  if (type === 'confirmation' && uniqueId) {
    // PREMIUM CONFIRMATION LAYOUT
    content = `
      <table role="presentation" style="width:100%;border:none;border-spacing:0;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.1);">
        <!-- Hero Section -->
        <tr>
          <td align="center" style="padding:60px 40px 40px 40px;background-color:${bgDark};background-image:linear-gradient(180deg, ${bgDark} 0%, #0f172a 100%);">
            <h1 style="margin:0 0 20px 0;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:32px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;line-height:1.2;">Prediction Locked.</h1>
            <p style="margin:0;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:18px;color:${textMuted};line-height:1.6;">Your roadmap to World Cup 2026 glory is official.</p>
          </td>
        </tr>

        <!-- Unique ID Section (The "Ticket") -->
        <tr>
          <td align="center" style="padding:0 40px;">
            <div style="margin-top:-30px;background-color:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:30px;max-width:400px;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <p style="margin:0 0 10px 0;font-family:'Courier New', monospace;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Unique Prediction ID</p>
              <div style="font-family:'Arial Black', sans-serif;font-size:36px;color:${bgDark};letter-spacing:2px;line-height:1;">${uniqueId}</div>
              <p style="margin:15px 0 0 0;font-size:14px;color:#ef4444;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">Save this ID. It is your only key to claim prizes.</p>
            </div>
          </td>
        </tr>

        <!-- Main Body -->
        <tr>
          <td style="padding:40px 40px 60px 40px;">
            <p style="margin:0 0 20px 0;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;color:#334155;line-height:1.6;">
              Hello <strong>${name}</strong>,
            </p>
            <p style="margin:0 0 40px 0;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;color:#334155;line-height:1.6;">
              We have successfully recorded your prediction for the 2026 World Cup. You are now in the running for the Grand Prize.
            </p>

            <!-- Action Button -->
            <table role="presentation" style="width:100%;border:none;border-spacing:0;">
              <tr>
                <td align="center">
                  <a href="${ctaLink}" style="display:inline-block;padding:18px 48px;background-color:${brandGreen};color:#ffffff;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;text-decoration:none;border-radius:50px;box-shadow:0 4px 15px rgba(1, 180, 125, 0.3);">
                    ${ctaText}
                  </a>
                </td>
              </tr>
            </table>

            <!-- Next Steps -->
            <div style="margin-top:50px;border-top:1px solid #e2e8f0;padding-top:40px;">
              <h3 style="margin:0 0 20px 0;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:bold;color:${bgDark};text-transform:uppercase;letter-spacing:1px;">What's Next?</h3>
              <table role="presentation" style="width:100%;border:none;border-spacing:0;">
                <tr>
                  <td style="padding-bottom:15px;vertical-align:top;width:20px;">
                    <span style="color:${brandGreen};font-weight:bold;">•</span>
                  </td>
                  <td style="padding-bottom:15px;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;color:#475569;">
                    <strong>Share:</strong> Challenge friends to beat your bracket.
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:15px;vertical-align:top;width:20px;">
                    <span style="color:${brandGreen};font-weight:bold;">•</span>
                  </td>
                  <td style="padding-bottom:15px;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;color:#475569;">
                    <strong>Track:</strong> Check the leaderboard when the tournament starts.
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:15px;vertical-align:top;width:20px;">
                    <span style="color:${brandGreen};font-weight:bold;">•</span>
                  </td>
                  <td style="padding-bottom:15px;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;color:#475569;">
                    <strong>Win:</strong> Top predictor takes home $10,000.
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
    `;
  } else {
    // GENERIC / VERIFICATION LAYOUT
    content = `
      <table role="presentation" style="width:100%;border:none;border-spacing:0;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.1);">
        <tr>
          <td style="padding:60px 40px;">
            <h1 style="margin:0 0 25px 0;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:28px;font-weight:800;color:${bgDark};letter-spacing:-0.5px;">${title}</h1>
            <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;color:#334155;line-height:1.6;">
              ${bodyContent}
            </div>
            ${ctaLink && ctaText ? `
            <div style="margin-top:40px;text-align:center;">
              <a href="${ctaLink}" style="display:inline-block;padding:16px 40px;background-color:${bgDark};color:#ffffff;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;text-decoration:none;border-radius:8px;">
                ${ctaText}
              </a>
            </div>
            ` : ''}
          </td>
        </tr>
      </table>
    `;
  }

  // Footer
  const footer = `
    <table role="presentation" style="width:100%;border:none;border-spacing:0;">
      <tr>
        <td align="center" style="padding:40px 20px;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;color:#64748b;line-height:1.5;">
          <p style="margin:0 0 10px 0;">© 2026 StadiumPort. All rights reserved.</p>
          <p style="margin:0;">
            <a href="${siteUrl}/privacy" style="color:#64748b;text-decoration:underline;">Privacy Policy</a> &bull; 
            <a href="${siteUrl}/terms" style="color:#64748b;text-decoration:underline;">Terms of Service</a>
          </p>
        </td>
      </tr>
    </table>
  `;

  return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title>${title}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    body { margin: 0; padding: 0; background-color: #f3f4f6; }
    table, td, div, h1, p { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
  </style>
</head>
<body style="margin:0;padding:0;word-spacing:normal;background-color:#f3f4f6;">
  <div style="max-width:600px;margin:0 auto;padding:20px;">
    ${header}
    ${content}
    ${footer}
  </div>
</body>
</html>
  `;
};


const JWT_SECRET = process.env.JWT_SECRET || 'stadiumport-secure-secret-key-2026';
const SITE_URL = process.env.VITE_SITE_URL || 'http://localhost:3000';

// Setup Nodemailer Transporter (Fallback)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async (options: any) => {
  const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';
  const SENDER_NAME = process.env.SENDER_NAME || 'Stadiumport';
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  console.log(`📧 Preparing to send email to: ${options.to} | Subject: ${options.subject}`);

  // 1. Try Resend API first if key exists
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
          reply_to: options.replyTo
        })
      });

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error('Resend API Unauthorized (401) - Check API Key');
        }
        const errorText = await res.text();
        throw new Error(`Resend API Error (${res.status}): ${errorText}`);
      }

      const data = await res.json();
      console.log('✅ Email sent via Resend:', data.id);
      return { success: true, messageId: data.id, provider: 'resend' };
    } catch (error: any) {
      console.error('⚠️ Resend API failed:', error.message);
      console.log('🔄 Falling back to SMTP/Nodemailer...');
      // Fall through to Nodemailer
    }
  }

  // 2. Fallback to Nodemailer (SMTP)
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('⚠️ No SMTP credentials found. Email sending skipped (Mock Mode).');
    return { success: true, messageId: 'mock-id-' + Date.now(), provider: 'mock' };
  }

  try {
    const info = await transporter.sendMail({
      from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
      to: options.to,
      replyTo: options.replyTo || SENDER_EMAIL,
      subject: options.subject,
      text: options.text,
      html: options.html,
    });
    console.log('✅ Email sent via SMTP: %s', info.messageId);
    return { success: true, messageId: info.messageId, provider: 'smtp' };
  } catch (error) {
    console.error('❌ Error sending email via SMTP:', error);
    throw error;
  }
};

export const apiMiddleware = async (req: any, res: any, next: any) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  
  // ----------------------------------------------------------------------
  // HANDLE: Verification Email Click (GET)
  // ----------------------------------------------------------------------
  if (url.pathname === '/api/verify-email' && req.method === 'GET') {
    const token = url.searchParams.get('token');

    if (!token) {
      res.statusCode = 400;
      res.end('Missing verification token');
      return;
    }

    try {
      // Verify Token
      const decoded: any = jwt.verify(token, JWT_SECRET);
      const { name, email, country, uniqueId, timestamp } = decoded; // Added uniqueId
      const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';

      console.log(`🔐 Verifying email for: ${email} (ID: ${uniqueId || 'N/A'})`);
      
      logAudit('VERIFICATION_ATTEMPT', { email, name, country, uniqueId, status: 'SUCCESS' });

      // 1. Send Admin Notification
      await sendEmail({
        to: SENDER_EMAIL,
        subject: `New Verified Predictor: ${name}`,
        html: `
          <h2>New Verified Signup</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Unique ID:</strong> ${uniqueId || 'Not in token'}</p>
          <p><strong>Verified At:</strong> ${new Date().toLocaleString()}</p>
        `,
        replyTo: email,
      });

      // 2. Send Premium Confirmation Email to User
      await sendEmail({
        to: email,
        subject: 'Prediction Locked: Your World Cup 2026 Entry',
        html: getPremiumEmailHtml({
          type: 'confirmation',
          title: 'Prediction Locked',
          name,
          uniqueId: uniqueId || 'UNKNOWN-ID', // Fallback if old token
          siteUrl: SITE_URL,
          ctaText: 'View My Prediction',
          ctaLink: `${SITE_URL}/my-prediction?id=${uniqueId || ''}`
        }),
      });

      // 3. Redirect to Success Page
      res.writeHead(302, { Location: '/world-cup-2026-prediction-game/success?verified=true' });
      res.end();

    } catch (error: any) {
      console.error('Verification Error:', error);
      logAudit('VERIFICATION_ATTEMPT', { token: token ? '***' : 'missing', status: 'FAILED', error: error.message });
      res.statusCode = 400;
      res.end('Invalid or expired verification link. Please try signing up again.');
    }
    return;
  }

  // ----------------------------------------------------------------------
  // HANDLE: Form Submissions (POST)
  // ----------------------------------------------------------------------
  if (req.url === '/api/send-email' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk: any) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const parsedBody = JSON.parse(body);
        const { type, data } = parsedBody;
        const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';

        console.log(`Processing ${type} request...`);

        if (type === 'predictor-signup') {
          const { name, email, country, termsAccepted, uniqueId, predictions } = data;
          if (!name || !email || !country || !termsAccepted) throw new Error('Missing required fields');

          console.log(`📝 Processing signup for: ${email} with ID: ${uniqueId}`);
          
          // SAVE TO SUPABASE
          if (supabase) {
            try {
              const { data: savedData, error: dbError } = await supabase
                .from('predictions')
                .upsert({ 
                  unique_id: uniqueId,
                  name,
                  email,
                  country,
                  predictions: predictions || {},
                  created_at: new Date().toISOString()
                }, { onConflict: 'unique_id' })
                .select();

              if (dbError) {
                console.error('❌ Supabase SAVE Error:', JSON.stringify(dbError, null, 2));
              } else {
                console.log('✅ Prediction stored in Supabase successfully');
              }
            } catch (err) {
              console.error('❌ Database operation CRASHED:', err);
            }
          } else {
            console.warn('⚠️ Skipping Supabase save - client not initialized. Check .env variables.');
          }

          logAudit('SIGNUP_INITIATED', { email, name, country, uniqueId });

          // Generate Verification Token (expires in 24h)
          // IMPORTANT: Added uniqueId to payload so we can use it in the confirmation email
          const token = jwt.sign(
            { name, email, country, uniqueId, timestamp: Date.now() },
            JWT_SECRET,
            { expiresIn: '24h' }
          );

          const verificationLink = `${SITE_URL}/api/verify-email?token=${token}`;

          // Send Verification Email
          await sendEmail({
            to: email,
            subject: 'Action Required: Verify your StadiumPort entry',
            html: getPremiumEmailHtml({
              type: 'verification',
              title: 'Verify Your Email',
              bodyContent: `
                <p>Hello ${name},</p>
                <p>You are one step away from locking in your World Cup 2026 prediction.</p>
                <p>Please click the button below to verify your email address. This link is valid for 24 hours.</p>
              `,
              ctaText: 'Verify Email Address',
              ctaLink: verificationLink,
              siteUrl: SITE_URL
            }),
          });
          
          console.log(`Verification email sent to ${email}`);

        } else if (type === 'contact-form') {
          const { name, email, message } = data;
          if (!name || !email || !message) throw new Error('Missing required fields');

          // Admin
          await sendEmail({
            to: SENDER_EMAIL,
            subject: `Contact Form: ${name}`,
            html: `<h2>New Message</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br>')}</p>`,
            replyTo: email,
          });
          
          // User
          await sendEmail({
            to: email,
            subject: 'We received your message - Stadiumport',
            html: getPremiumEmailHtml({
              type: 'general',
              title: 'Message Received',
              bodyContent: `<p>Hi ${name},</p><p>Thanks for reaching out. We've received your message and will get back to you shortly.</p>`,
              siteUrl: SITE_URL
            }),
          });

        } else if (type === 'newsletter-signup') {
          const { email } = data;
          if (!email) throw new Error('Missing email');

          // Admin
          await sendEmail({
            to: SENDER_EMAIL,
            subject: 'New Newsletter Subscriber',
            html: `<h2>New Subscriber</h2><p>${email}</p>`,
            replyTo: email,
          });

          // User
          await sendEmail({
            to: email,
            subject: 'Welcome to Stadiumport!',
            html: getPremiumEmailHtml({
              type: 'general',
              title: 'Welcome to StadiumPort',
              bodyContent: `<p>Thanks for subscribing. You'll receive the latest updates about World Cup 2026.</p>`,
              siteUrl: SITE_URL
            }),
          });
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: true }));
      } catch (error: any) {
        console.error('API Error:', error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: error.message || 'Internal Server Error' }));
      }
    });
  } else {
    next();
  }
};
