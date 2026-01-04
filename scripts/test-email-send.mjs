
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Load env vars
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
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });
}

const config = {
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

const transporter = nodemailer.createTransport(config);

const mailOptions = {
  from: `"${process.env.SENDER_NAME || 'stadiumport'}" <${process.env.SENDER_EMAIL || 'info@stadiumport.com'}>`,
  to: process.env.SENDER_EMAIL || 'info@stadiumport.com', // Send to self to verify
  subject: 'stadiumport Email Integration Test',
  text: 'This is a test email to verify the SMTP configuration and email sending capability.',
  html: '<h2>stadiumport Email Test</h2><p>This is a test email to verify the SMTP configuration and email sending capability.</p>',
};

console.log('Sending test email to:', mailOptions.to);

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error occurred:', error);
    process.exit(1);
  }
  console.log('Message sent successfully!');
  console.log('Message ID:', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  process.exit(0);
});
