
import { Connect } from 'vite';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';

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

// HTML Email Template Helper
const getStadiumPortEmailHtml = (options: { title: string; bodyContent: string; ctaLink?: string; ctaText?: string; footerText?: string; previewText?: string; siteUrl: string }) => {
  const { title, bodyContent, ctaLink, ctaText, footerText = '© 2025 StadiumPort. All rights reserved.', previewText = 'StadiumPort Update', siteUrl } = options;
  const primaryColor = '#01b47d';
  
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
        table, td, div, h1, p {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';}
        body {margin: 0; padding: 0;}
        .hover-btn:hover {background-color: #019a6b !important;}
        @media screen and (max-width: 600px) {
            .col-3, .col-2 {width: 100% !important; max-width: 100% !important; display: block !important;}
            .mobile-padding {padding-left: 20px !important; padding-right: 20px !important;}
            .mobile-center {text-align: center !important;}
        }
    </style>
</head>
<body style="margin:0;padding:0;word-spacing:normal;background-color:#f4f4f4;">
    <div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
        ${previewText}
    </div>
    <div role="article" aria-roledescription="email" lang="en" style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#f4f4f4;">
        <table role="presentation" style="width:100%;border:none;border-spacing:0;">
            <tr>
                <td align="center" style="padding:0;">
                    <table role="presentation" style="width:94%;max-width:600px;border:none;border-spacing:0;text-align:left;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#000000;background-color:#ffffff;margin-top:40px;margin-bottom:40px;box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <tr>
                            <td style="padding:30px 40px;background-color:#ffffff;text-align:center;">
                                <a href="${siteUrl}" style="text-decoration:none;">
                                    <img src="${siteUrl}/images/Logos/email/stadiumport-email-logo.png" alt="StadiumPort" width="200" style="width:200px;max-width:100%;height:auto;border:none;text-decoration:none;color:#000000;font-weight:bold;font-size:24px;letter-spacing:1px;">
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:0;">
                                <img src="${siteUrl}/images/Logos/email/stadiumport-email-banner.jpg" alt="Stadium Experience" width="600" style="width:100%;max-width:600px;height:auto;border:none;display:block;">
                            </td>
                        </tr>
                        <tr>
                            <td class="mobile-padding" style="padding:40px 40px 20px 40px;">
                                <h1 style="margin:0 0 20px 0;font-size:28px;line-height:36px;font-weight:bold;color:#000000;letter-spacing:-0.5px;">${title}</h1>
                                <div style="margin:0 0 25px 0;font-size:16px;line-height:28px;color:#444444;">
                                    ${bodyContent}
                                </div>
                            </td>
                        </tr>
                        ${ctaLink && ctaText ? `
                        <tr>
                            <td class="mobile-padding" style="padding:0 40px 40px 40px;text-align:center;">
                                <table role="presentation" style="margin:0 auto;border:none;border-spacing:0;">
                                    <tr>
                                        <td align="center" style="background-color:${primaryColor};border-radius:4px;">
                                            <a href="${ctaLink}" class="hover-btn" style="display:inline-block;padding:16px 36px;color:#ffffff;text-decoration:none;font-size:16px;font-weight:bold;border-radius:4px;background-color:${primaryColor};border:1px solid ${primaryColor};transition: background-color 0.3s ease;">
                                                ${ctaText}
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        ` : ''}
                        <tr>
                            <td style="padding:0 40px;">
                                <div style="height:1px;background-color:#eeeeee;line-height:1px;">&nbsp;</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:40px;background-color:#f9f9f9;text-align:center;">
                                <p style="margin:20px 0 10px 0;font-size:12px;line-height:18px;color:#999999;">
                                    ${footerText}
                                </p>
                                <p style="margin:0;font-size:12px;line-height:18px;color:#999999;">
                                    <a href="#" style="color:#999999;text-decoration:underline;">Unsubscribe</a> | <a href="#" style="color:#999999;text-decoration:underline;">Privacy Policy</a>
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
  `;
};


const JWT_SECRET = process.env.JWT_SECRET || 'stadiumport-secure-secret-key-2026';
const SITE_URL = process.env.VITE_SITE_URL || 'http://localhost:3000';

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
  
  // Check for SMTP credentials
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('⚠️ SMTP credentials missing. Email sending skipped (Mock Mode).');
    console.log('Would have sent email to:', options.to);
    return { success: true, messageId: 'mock-id-' + Date.now() };
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
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
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
      const { name, email, country, timestamp } = decoded;
      const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';

      console.log(`Verifying email for: ${email}`);
      
      logAudit('VERIFICATION_ATTEMPT', { email, name, country, status: 'SUCCESS' });

      // 1. Send Admin Notification (NOW it happens)
      await sendEmail({
        to: SENDER_EMAIL,
        subject: `New Verified Predictor Game Signup: ${name}`,
        html: `
          <h2>New Verified Signup</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Verified At:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Original Submission:</strong> ${new Date(timestamp).toLocaleString()}</p>
        `,
        replyTo: email,
      });

      // 2. Send Welcome Email to User
      await sendEmail({
        to: email,
        subject: 'Welcome to Stadiumport Predictor Game! (Verified)',
        html: getStadiumPortEmailHtml({
          title: `Welcome, ${name}!`,
          bodyContent: `
            <p>Your email has been successfully verified.</p>
            <p>You are now officially entered into the World Cup 2026 Predictor Game.</p>
            <p>We'll be in touch soon with more details.</p>
          `,
          ctaText: 'Go to Game',
          ctaLink: `${SITE_URL}/world-cup-2026-prediction-game`,
          siteUrl: SITE_URL
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
          const { name, email, country, termsAccepted } = data;
          if (!name || !email || !country || !termsAccepted) throw new Error('Missing required fields');

          logAudit('SIGNUP_INITIATED', { email, name, country });

          // Generate Verification Token (expires in 24h)
          const token = jwt.sign(
            { name, email, country, timestamp: Date.now() },
            JWT_SECRET,
            { expiresIn: '24h' }
          );

          const verificationLink = `${SITE_URL}/api/verify-email?token=${token}`;

          // ONLY Send Verification Email to User
          await sendEmail({
            to: email,
            subject: 'Verify your email to complete your StadiumPort Predictor Game signup',
            html: getStadiumPortEmailHtml({
              title: 'Verify Your Email',
              bodyContent: `
                <p>Hello ${name},</p>
                <p>Thank you for signing up for the StadiumPort Predictor Game.</p>
                <p>Please click the button below to verify your email address and complete your registration.</p>
                <p><small>This link will expire in 24 hours.</small></p>
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
            subject: `Contact Form Message from ${name}`,
            html: `<h2>New Contact Message</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
            replyTo: email,
          });
          
          // User
          await sendEmail({
            to: email,
            subject: 'We received your message - Stadiumport',
            html: getStadiumPortEmailHtml({
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
            html: `<h2>New Newsletter Subscriber</h2><p><strong>Email:</strong> ${email}</p>`,
            replyTo: email,
          });

          // User
          await sendEmail({
            to: email,
            subject: 'Welcome to Stadiumport!',
            html: getStadiumPortEmailHtml({
              title: 'Welcome to StadiumPort',
              bodyContent: `<p>Thanks for subscribing to our newsletter. You'll receive the latest updates about World Cup 2026.</p>`,
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
