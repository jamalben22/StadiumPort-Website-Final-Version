import { NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow, INDEXNOW_API_KEY } from '@/lib/indexnow';
import { getAllRoutes } from '@/data/routes';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  console.log('IndexNow API route initialized');
  try {
    const body = await request.json();
    const { urls, apiKey, action } = body;

    // Security check
    if (apiKey !== INDEXNOW_API_KEY) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    let urlsToSubmit: string[] = [];

    if (action === 'submit-all') {
      urlsToSubmit = getAllRoutes();
    } else {
      if (!urls || !Array.isArray(urls)) {
        return NextResponse.json({ success: false, message: 'Invalid payload: urls must be an array, or use action: "submit-all"' }, { status: 400 });
      }
      urlsToSubmit = urls;
    }

    if (urlsToSubmit.length === 0) {
      return NextResponse.json({ success: false, message: 'No URLs to submit' }, { status: 400 });
    }

    // IndexNow recommends submitting in batches of up to 10,000. 
    // Our site is small enough to submit all at once, but good to keep in mind.
    const result = await submitToIndexNow(urlsToSubmit);

    if (result.success) {
      return NextResponse.json({ 
        ...result, 
        count: urlsToSubmit.length 
      });
    } else {
      return NextResponse.json(result, { status: result.statusCode || 500 });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
