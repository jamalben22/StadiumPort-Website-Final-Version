
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

console.log('Current directory:', process.cwd());
const envPath = path.resolve(process.cwd(), '.env');
console.log('Env path:', envPath);

if (fs.existsSync(envPath)) {
  console.log('Loading .env file...');
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
} else {
  console.error('.env file not found!');
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

console.log('Testing SMTP Connection with config:', {
  host: config.host,
  port: config.port,
  secure: config.secure,
  user: config.auth.user,
  pass: config.auth.pass ? '****' : 'MISSING'
});

if (!config.auth.user || !config.auth.pass) {
  console.error('Missing SMTP credentials in environment variables');
  process.exit(1);
}

const transporter = nodemailer.createTransport(config);

transporter.verify(function (error, success) {
  if (error) {
    console.error('SMTP Connection Failed:', error);
    process.exit(1);
  } else {
    console.log('SMTP Connection Successful! Server is ready to take our messages');
    process.exit(0);
  }
});
