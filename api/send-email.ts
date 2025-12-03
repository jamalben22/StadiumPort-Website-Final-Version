
import jwt from 'jsonwebtoken';
import { sendEmail, getSiteUrl } from './_utils/email';
import { getStadiumPortEmailHtml } from './_utils/template';

const JWT_SECRET = process.env.JWT_SECRET || 'stadiumport-secure-secret-key-2026';

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, data } = req.body;
  const SITE_URL = getSiteUrl();

  try {
    if (type === 'predictor-registration') {
      const { name, email, country } = data;

      // Generate Verification Token (24h expiry)
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

      return res.status(200).json({ 
        success: true, 
        message: 'Verification email sent. Please check your inbox.' 
      });

    } else if (type === 'contact') {
      const { name, email, subject, message } = data;
      const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';

      // Admin Notification
      await sendEmail({
        to: SENDER_EMAIL,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: email,
      });

      // User Auto-response
      await sendEmail({
        to: email,
        subject: 'We received your message - Stadiumport',
        html: getStadiumPortEmailHtml({
          title: 'Message Received',
          bodyContent: `<p>Hi ${name},</p><p>Thanks for reaching out. We've received your message and will get back to you shortly.</p>`,
          siteUrl: SITE_URL
        }),
      });

      return res.status(200).json({ success: true });

    } else if (type === 'newsletter') {
      const { email } = data;
      const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';

      // Admin Notification
      await sendEmail({
        to: SENDER_EMAIL,
        subject: 'New Newsletter Subscriber',
        html: `<p>New subscriber: ${email}</p>`,
      });

      // User Welcome
      await sendEmail({
        to: email,
        subject: 'Welcome to Stadiumport!',
        html: getStadiumPortEmailHtml({
          title: 'Welcome to StadiumPort',
          bodyContent: `<p>Thanks for subscribing to our newsletter. You'll receive the latest updates about World Cup 2026.</p>`,
          siteUrl: SITE_URL
        }),
      });

      return res.status(200).json({ success: true });
    }

    return res.status(400).json({ error: 'Invalid request type' });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
