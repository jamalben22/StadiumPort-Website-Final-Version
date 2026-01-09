export function getBearerToken(headers: Headers): string | undefined {
  const value = headers.get('authorization') || headers.get('Authorization');
  if (!value) return undefined;
  const match = value.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim();
}

export function isRequestFromAllowedOrigin(headers: Headers): { allowed: boolean; clientKey: string } {
  const forwardedFor = headers.get('x-forwarded-for') || '';
  const ip = forwardedFor.split(',')[0]?.trim() || headers.get('x-real-ip') || 'unknown';
  const origin = headers.get('origin');

  if (!origin) return { allowed: true, clientKey: ip };

  const allowedOrigins = new Set<string>();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VITE_SITE_URL;
  if (siteUrl) {
    try {
      allowedOrigins.add(new URL(siteUrl).origin);
    } catch {}
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    allowedOrigins.add(`https://${vercelUrl}`);
  }

  if (allowedOrigins.size === 0) return { allowed: true, clientKey: ip };

  return { allowed: allowedOrigins.has(origin), clientKey: ip };
}

type RateLimitState = { count: number; resetAt: number };

declare global {
  var __stadiumportRateLimit: Map<string, RateLimitState> | undefined;
}

function getStore(): Map<string, RateLimitState> {
  if (!globalThis.__stadiumportRateLimit) {
    globalThis.__stadiumportRateLimit = new Map<string, RateLimitState>();
  }
  return globalThis.__stadiumportRateLimit;
}

export function rateLimit(config: { key: string; windowMs: number; max: number }): {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
} {
  const store = getStore();
  const now = Date.now();
  const existing = store.get(config.key);

  if (!existing || now >= existing.resetAt) {
    store.set(config.key, { count: 1, resetAt: now + config.windowMs });
    return { allowed: true, remaining: Math.max(0, config.max - 1), retryAfterSeconds: 0 };
  }

  if (existing.count >= config.max) {
    const retryAfterSeconds = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
    return { allowed: false, remaining: 0, retryAfterSeconds };
  }

  existing.count += 1;
  store.set(config.key, existing);
  return { allowed: true, remaining: Math.max(0, config.max - existing.count), retryAfterSeconds: 0 };
}

export function escapeHtml(input: string): string {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
