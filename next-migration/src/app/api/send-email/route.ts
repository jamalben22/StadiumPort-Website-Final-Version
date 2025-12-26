import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { getStadiumportEmailHtml } from '@/lib/email-templates';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  console.log('Send Email API route initialized');
  try {
    const body = await req.json();
    const { type, data } = body;
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';

    // Log request type for debugging
    console.log(`🚀 API Request Received: ${type}`);

    if (type === 'predictor-signup') {
      const { name, email, country, uniqueId, predictions } = data;

      console.log(`📝 Processing signup for: ${email} with ID: ${uniqueId}`);

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
        const adminEmailPromise = sendEmail({
          to: SENDER_EMAIL,
          subject: `New Predictor Entry: ${name} (${country})`,
          html: `
            <h2>New Tournament Prediction Entry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Unique ID:</strong> ${uniqueId}</p>
          `,
        });

        const userEmailPromise = sendEmail({
          to: email,
          subject: 'Prediction Locked! - World Cup 2026 Contest',
          html: getStadiumportEmailHtml({
            title: 'Your Prediction is Locked In!',
            siteUrl: SITE_URL,
            bodyContent: `
              <p>Hi ${name},</p>
              <p>Thanks for joining the Stadiumport World Cup 2026 Predictor Game.</p>
              <p>Your unique entry ID is: <strong>${uniqueId}</strong></p>
              <p>You can view your bracket anytime using the link below:</p>
              <p><a href="${SITE_URL}/world-cup-2026-prediction-game/entry/${uniqueId}">${SITE_URL}/world-cup-2026-prediction-game/entry/${uniqueId}</a></p>
            `,
          }),
        });

        await Promise.all([adminEmailPromise, userEmailPromise]);
      } catch (emailErr) {
        console.error('Email sending failed, but continuing:', emailErr);
      }

      return NextResponse.json({ success: true });

    } else if (type === 'contact-form') {
      const { name, email, message } = data;

      await sendEmail({
        to: SENDER_EMAIL,
        subject: `Contact Form: ${name}`,
        html: `<h2>New Message</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br>')}</p>`,
        replyTo: email,
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid request type' }, { status: 400 });
  } catch (error: any) {
    console.error('❌ API Error Handler Caught:', error);
    return NextResponse.json({ 
      error: 'Failed to process request',
      details: error.message 
    }, { status: 500 });
  }
}
