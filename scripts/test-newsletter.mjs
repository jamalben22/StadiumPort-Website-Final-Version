import { sendEmail } from '../api/_utils/email.ts'; // This won't work directly in node with TS import unless using ts-node or compiling.
// Instead, I'll duplicate the logic in a standalone mjs script to test the email content and transport.

import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf8');
  envConfig.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^['"]|['"]$/g, '');
      process.env[key] = value;
    }
  });
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const SENDER_EMAIL = process.env.SENDER_EMAIL;
const TEST_EMAIL = SENDER_EMAIL; // Send to self for testing

async function testNewsletter() {
  try {
    console.log('Sending Admin Notification...');
    await transporter.sendMail({
      from: `"${process.env.SENDER_NAME}" <${SENDER_EMAIL}>`,
      to: SENDER_EMAIL,
      subject: 'New Newsletter Subscriber (TEST)',
      html: `
          <h2>New Newsletter Subscriber</h2>
          <p><strong>Email:</strong> ${TEST_EMAIL}</p>
        `,
      replyTo: TEST_EMAIL,
    });
    console.log('✅ Admin Notification Sent');

    console.log('Sending User Welcome Email...');
    await transporter.sendMail({
      from: `"${process.env.SENDER_NAME}" <${SENDER_EMAIL}>`,
      to: TEST_EMAIL,
      subject: 'Welcome to the Stadiumport Community! (TEST)',
      html: `
          <h2>Welcome!</h2>
          <p>Thanks for subscribing to the Stadiumport newsletter.</p>
          <p>You'll now receive exclusive stadium guides, host city travel tips, and expert planning strategies for World Cup 2026.</p>
          <br>
          <p>Best regards,</p>
          <p>The Stadiumport Team</p>
        `,
    });
    console.log('✅ User Welcome Email Sent');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

testNewsletter();
