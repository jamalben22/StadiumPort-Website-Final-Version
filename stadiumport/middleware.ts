import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function base64Nonce(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function buildCsp(nonce: string): string {
  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
    `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://adservice.google.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://tpwgts.com https://www.travelpayouts.com https://api.mapbox.com`,
    "worker-src 'self' blob:",
    "style-src 'self' 'unsafe-inline' https:",
    "img-src 'self' blob: data: https: https://googleads.g.doubleclick.net",
    "font-src 'self' data: https:",
    "connect-src 'self' https: wss: https://api.mapbox.com https://events.mapbox.com https://www.google-analytics.com https://googleads.g.doubleclick.net",
    "frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com",
  ];

  return directives.join("; ") + ";";
}

export function middleware(request: NextRequest) {
  const nonceBytes = new Uint8Array(16);
  crypto.getRandomValues(nonceBytes);
  const nonce = base64Nonce(nonceBytes);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (process.env.NODE_ENV === "production") {
    response.headers.set("Content-Security-Policy", buildCsp(nonce));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};

