import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { getstadiumportEmailHtml } from '@/lib/email-templates';
import { supabase } from '@/lib/supabase';
import { escapeHtml, isRequestFromAllowedOrigin, rateLimit } from '@/lib/security';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

// Email API configuration
const EMAIL_API_VERSION = '1.0.0';

export async function POST(req: NextRequest) {
  const originCheck = isRequestFromAllowedOrigin(req.headers);
  if (!originCheck.allowed) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const limiter = rateLimit({
    key: `send-email:${originCheck.clientKey}`,
    windowMs: 60_000,
    max: 20,
  });
  if (!limiter.allowed) {
    return NextResponse.json(
      { error: 'Too Many Requests' },
      { status: 429, headers: { 'Retry-After': String(limiter.retryAfterSeconds) } }
    );
  }

  const requestId = crypto.randomUUID();

  try {
    const body = await req.json();
    const { type, data } = body;
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';

    if (type === 'predictor-signup') {
      const { name, email, country, uniqueId, predictions } = data;
      if (typeof name !== 'string' || name.length < 1 || name.length > 120) {
        return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
      }
      if (typeof email !== 'string' || email.length < 3 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
      }
      if (typeof country !== 'string' || country.length < 2 || country.length > 80) {
        return NextResponse.json({ error: 'Invalid country' }, { status: 400 });
      }
      if (typeof uniqueId !== 'string' || uniqueId.length < 6 || uniqueId.length > 64) {
        return NextResponse.json({ error: 'Invalid uniqueId' }, { status: 400 });
      }

      // 1. Store in Supabase if available
      if (supabase) {
        try {
          await supabase
            .from('predictions')
            .upsert({ 
              unique_id: uniqueId,
              name,
              email,
              country,
              predictions: predictions || {},
              created_at: new Date().toISOString()
            }, { onConflict: 'unique_id' });
        } catch (err) {
          console.error('Supabase upsert failed:', err);
        }
      }

      // 2. Send Emails (Wrap in try/catch so email failures don't block success response)
      try {
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeCountry = escapeHtml(country);
        const safeUniqueId = escapeHtml(uniqueId);

        const adminEmailPromise = sendEmail({
          to: SENDER_EMAIL,
          subject: `New Predictor Entry: ${name} (${country})`,
          html: `
            <h2>New Tournament Prediction Entry</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Country:</strong> ${safeCountry}</p>
            <p><strong>Unique ID:</strong> ${safeUniqueId}</p>
          `,
        });

        const userEmailPromise = sendEmail({
          to: email,
          subject: 'Prediction Locked! - World Cup 2026 Contest',
          html: getstadiumportEmailHtml({
            title: 'Your Prediction is Locked In!',
            siteUrl: SITE_URL,
            bodyContent: `
              <p>Hi ${safeName},</p>
              <p>Thanks for joining the stadiumport World Cup 2026 Predictor Game.</p>
              <p>Your unique entry ID is: <strong>${safeUniqueId}</strong></p>
              <p>You can view your bracket anytime using the link below:</p>
              <p><a href="${SITE_URL}/world-cup-2026-prediction-game/entry/${encodeURIComponent(uniqueId)}">${SITE_URL}/world-cup-2026-prediction-game/entry/${encodeURIComponent(uniqueId)}</a></p>
            `,
          }),
        });

        await Promise.all([adminEmailPromise, userEmailPromise]);
      } catch (emailErr) {
      }

      return NextResponse.json({ success: true });

    } else if (type === 'contact-form') {
      const { name, email, message } = data;
      if (typeof name !== 'string' || name.length < 1 || name.length > 120) {
        return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
      }
      if (typeof email !== 'string' || email.length < 3 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
      }
      if (typeof message !== 'string' || message.length < 1 || message.length > 4000) {
        return NextResponse.json({ error: 'Invalid message' }, { status: 400 });
      }

      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

      await sendEmail({
        to: SENDER_EMAIL,
        subject: `Contact Form: ${name}`,
        html: `<h2>New Message</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p>${safeMessage}</p>`,
        replyTo: email,
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid request type' }, { status: 400 });
  } catch {
    return NextResponse.json({ error: 'Failed to process request', requestId }, { status: 500 });
  }
}
