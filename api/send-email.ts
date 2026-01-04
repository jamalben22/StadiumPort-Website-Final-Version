
import jwt from 'jsonwebtoken';
import { supabase } from './_utils/supabase.js';
import { sendEmail, getSiteUrl } from './_utils/email.js';
import { getstadiumportEmailHtml } from './_utils/template.js';

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
  
  console.log(`🚀 API Request Received: ${type}`);

  try {
    if (type === 'predictor-signup') {
      const { name, email, country, uniqueId, predictions } = data;
      const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';

      console.log(`📝 Processing signup for: ${email} with ID: ${uniqueId}`);

      // 1. Store in Supabase if available
      if (supabase) {
        try {
          const { error } = await supabase
            .from('predictions')
            .upsert({ 
              unique_id: uniqueId,
              name,
              email,
              country,
              predictions: predictions || {},
              created_at: new Date().toISOString()
            }, { onConflict: 'unique_id' });

          if (error) {
            console.error('Supabase error:', error);
          } else {
            console.log('✅ Prediction stored in Supabase');
          }
        } catch (dbError) {
          console.error('Database operation failed:', dbError);
        }
      }

      // Parallelize email sending to prevent timeout
      console.log('📤 Sending emails in parallel...');
      
      const adminEmailPromise = sendEmail({
        to: SENDER_EMAIL,
        subject: `New Prediction! ID: ${uniqueId} (${name})`,
        html: `
          <h2>New World Cup Prediction</h2>
          <p><strong>Unique ID:</strong> ${uniqueId}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <p><a href="${SITE_URL}/admin/predictions?search=${uniqueId}">View Full Prediction</a></p>
        `,
        replyTo: email,
      });

      const userEmailPromise = sendEmail({
        to: email,
        subject: 'Your World Cup 2026 Prediction ID',
        html: getstadiumportEmailHtml({
          title: `Prediction Saved!`,
          bodyContent: `
            <div style="background-color: #f0fdf4; border: 1px solid #10b981; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #065f46;">Your Unique Prediction ID</p>
              <p style="margin: 10px 0 0 0; font-size: 24px; font-weight: bold; color: #059669; letter-spacing: 1px;">${uniqueId}</p>
            </div>
            <p>Thanks for joining the stadiumport World Cup 2026 Predictor Game.</p>
            <p>Your prediction has been securely recorded. You can view your bracket anytime using your unique ID.</p>
          `,
          ctaText: 'View My Prediction',
          ctaLink: `${SITE_URL}/my-prediction?id=${uniqueId}`,
          siteUrl: SITE_URL
        }),
      });

      await Promise.all([adminEmailPromise, userEmailPromise]);

      console.log('✅ Signup emails sent successfully.');

      return res.status(200).json({ 
        success: true, 
        message: 'Registration successful.' 
      });

    } else if (type === 'contact') {
      const { name, email, subject, message } = data;
      const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';

      const adminEmailPromise = sendEmail({
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

      const userEmailPromise = sendEmail({
        to: email,
        subject: 'We received your message - stadiumport',
        html: getstadiumportEmailHtml({
          title: 'Message Received',
          bodyContent: `<p>Hi ${name},</p><p>Thanks for reaching out. We've received your message and will get back to you shortly.</p>`,
          siteUrl: SITE_URL
        }),
      });

      await Promise.all([adminEmailPromise, userEmailPromise]);

      return res.status(200).json({ success: true });

    } else if (type === 'newsletter') {
      const { email } = data;
      const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';

      const adminEmailPromise = sendEmail({
        to: SENDER_EMAIL,
        subject: 'New Newsletter Subscriber',
        html: `<p>New subscriber: ${email}</p>`,
      });

      const userEmailPromise = sendEmail({
        to: email,
        subject: 'Welcome to stadiumport!',
        html: getstadiumportEmailHtml({
          title: 'Welcome to stadiumport',
          bodyContent: `<p>Thanks for subscribing to our newsletter. You'll receive the latest updates about World Cup 2026.</p>`,
          siteUrl: SITE_URL
        }),
      });

      await Promise.all([adminEmailPromise, userEmailPromise]);

      return res.status(200).json({ success: true });
    }

    return res.status(400).json({ error: 'Invalid request type' });

  } catch (error) {
    console.error('❌ API Error Handler Caught:', error);
    
    // Extract error message safely
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : '';

    // Return detailed error for debugging (since we need to fix this)
    return res.status(500).json({ 
      error: 'Failed to process request',
      details: errorMessage,
      // stack: errorStack // Optional: uncomment for deep debugging, but risky to expose
    });
  }
}
