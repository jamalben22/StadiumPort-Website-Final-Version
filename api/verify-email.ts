
import jwt from 'jsonwebtoken';
import { sendEmail, getSiteUrl } from './_utils/email';
import { getStadiumPortEmailHtml } from './_utils/template';

const JWT_SECRET = process.env.JWT_SECRET || 'stadiumport-secure-secret-key-2026';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token } = req.query;
  const SITE_URL = getSiteUrl();

  if (!token) {
    return res.status(400).send('Missing verification token');
  }

  try {
    // Verify Token
    const decoded: any = jwt.verify(token as string, JWT_SECRET);
    const { name, email, country, timestamp } = decoded;
    const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';

    console.log(`Verifying email for: ${email}`);

    // 1. Send Admin Notification
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
    res.redirect(302, `${SITE_URL}/world-cup-2026-prediction-game/success?verified=true`);

  } catch (error: any) {
    console.error('Verification Error:', error);
    res.status(400).send('Invalid or expired verification link. Please try signing up again.');
  }
}
