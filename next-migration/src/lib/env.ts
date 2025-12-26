// Environment variable validation
// This file ensures that the application crashes at build time (or runtime) if required environment variables are missing.

const requiredServerEnvs = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'SENDER_EMAIL',
  'JWT_SECRET',
] as const;

const requiredPublicEnvs = [
  'NEXT_PUBLIC_SITE_URL',
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
] as const;

export function validateEnv() {
  const missingServerEnvs = requiredServerEnvs.filter(
    (key) => !process.env[key]
  );
  
  const missingPublicEnvs = requiredPublicEnvs.filter(
    (key) => !process.env[key]
  );

  if (missingServerEnvs.length > 0 && typeof window === 'undefined') {
    throw new Error(
      `Missing required server environment variables: ${missingServerEnvs.join(
        ', '
      )}`
    );
  }

  if (missingPublicEnvs.length > 0) {
    throw new Error(
      `Missing required public environment variables: ${missingPublicEnvs.join(
        ', '
      )}`
    );
  }
}

// Type-safe environment access
export const env = {
  SMTP: {
    HOST: process.env.SMTP_HOST,
    PORT: process.env.SMTP_PORT,
    USER: process.env.SMTP_USER,
    PASS: process.env.SMTP_PASS,
    SENDER: process.env.SENDER_EMAIL,
    SENDER_NAME: process.env.SENDER_NAME,
  },
  SECURITY: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  SUPABASE: {
    URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
} as const;
