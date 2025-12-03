import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars manually
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf8');
  envConfig.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^['"]|['"]$/g, ''); // Remove quotes if present
      process.env[key] = value;
    }
  });
}

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465');
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SENDER_EMAIL = process.env.SENDER_EMAIL;

console.log('Testing SMTP Connection...');
console.log(`Host: ${SMTP_HOST}`);
console.log(`Port: ${SMTP_PORT}`);
console.log(`User: ${SMTP_USER}`);

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.error('❌ Missing SMTP configuration in .env file');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

async function verifyAndSend() {
  try {
    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP Connection Verified Successfully!');

    // Send test email
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: `"${process.env.SENDER_NAME || 'Stadiumport Test'}" <${SENDER_EMAIL}>`,
      to: SENDER_EMAIL, // Send to self
      subject: 'Stadiumport SMTP Configuration Test',
      text: 'If you are reading this, the email infrastructure is working correctly.',
      html: '<b>If you are reading this, the email infrastructure is working correctly.</b>',
    });

    console.log('✅ Test Email Sent Successfully!');
    console.log('Message ID:', info.messageId);

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

verifyAndSend();
