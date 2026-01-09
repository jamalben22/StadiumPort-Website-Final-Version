import nodemailer from 'nodemailer';

const SENDER_EMAIL = process.env.SENDER_EMAIL || 'info@stadiumport.com';
const SENDER_NAME = process.env.SENDER_NAME || 'stadiumport';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
}

export const sendEmail = async (options: EmailOptions) => {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (RESEND_API_KEY) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `${SENDER_NAME} <${SENDER_EMAIL}>`,
          to: [options.to],
          subject: options.subject,
          html: options.html,
          text: options.text,
          reply_to: options.replyTo || SENDER_EMAIL,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        return { success: true, messageId: data.id, provider: 'resend' };
      }
    } catch (error) {
      console.error('Resend API failed, falling back to SMTP:', error);
    }
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('No SMTP credentials found. Email skipped.');
    return { success: true, messageId: 'mock-' + Date.now(), provider: 'mock' };
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
    return { success: true, messageId: info.messageId, provider: 'smtp' };
  } catch (error) {
    console.error('SMTP failed:', error);
    throw error;
  }
};
