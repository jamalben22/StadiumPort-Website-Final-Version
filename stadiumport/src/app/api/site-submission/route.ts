import { NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow } from '@/lib/indexnow';
import { getAllRoutes } from '@/data/routes';
import { getBearerToken, isRequestFromAllowedOrigin, rateLimit } from '@/lib/security';

// Force dynamic to prevent static optimization
export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Service class to handle IndexNow operations
 * This structure helps differentiate this route from others during build optimization
 */
class SiteSubmissionService {
  static validateAuth(request: NextRequest): boolean {
    const expectedToken = process.env.SITE_SUBMISSION_TOKEN;
    if (!expectedToken) return false;

    const token = getBearerToken(request.headers);
    return token === expectedToken;
  }

  static async processRequest(body: any) {
    const { urls, action } = body;
    let urlsToSubmit: string[] = [];

    if (action === 'submit-all') {
      urlsToSubmit = getAllRoutes();
    } else {
      if (!urls || !Array.isArray(urls)) {
        throw new Error('Invalid payload: urls must be an array');
      }
      urlsToSubmit = urls;
    }

    return await submitToIndexNow(urlsToSubmit);
  }
}

export async function POST(request: NextRequest) {
  const originCheck = isRequestFromAllowedOrigin(request.headers);
  if (!originCheck.allowed) {
    return NextResponse.json({ success: false, message: 'Forbidden' }, { status: 403 });
  }

  const limiter = rateLimit({
    key: `site-submission:${originCheck.clientKey}`,
    windowMs: 60_000,
    max: 10,
  });
  if (!limiter.allowed) {
    return NextResponse.json(
      { success: false, message: 'Too Many Requests' },
      { status: 429, headers: { 'Retry-After': String(limiter.retryAfterSeconds) } }
    );
  }

  if (!SiteSubmissionService.validateAuth(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const result = await SiteSubmissionService.processRequest(body);
    
    return NextResponse.json({ 
      ...result, 
      service: 'SiteSubmission-v1',
    });
  } catch (error: any) {
    if (error.message.startsWith('Invalid payload')) {
      return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
