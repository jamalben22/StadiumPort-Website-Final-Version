import { NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow, INDEXNOW_API_KEY } from '@/lib/indexnow';
import { getAllRoutes } from '@/data/routes';

// Force dynamic to prevent static optimization
export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Service class to handle IndexNow operations
 * This structure helps differentiate this route from others during build optimization
 */
class SiteSubmissionService {
  static async validateKey(key: string): Promise<boolean> {
    return key === INDEXNOW_API_KEY;
  }

  static async processRequest(body: any) {
    const { urls, apiKey, action } = body;
    
    if (!await this.validateKey(apiKey)) {
      throw new Error('Unauthorized');
    }

    let urlsToSubmit: string[] = [];

    if (action === 'submit-all') {
      console.log('Action: submit-all - Fetching all routes...');
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
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Site Submission API route invoked`);
  
  try {
    const body = await request.json();
    const result = await SiteSubmissionService.processRequest(body);
    
    return NextResponse.json({ 
      ...result, 
      service: 'SiteSubmission-v1',
      timestamp 
    });
  } catch (error: any) {
    console.error('Site Submission Error:', error);
    
    if (error.message === 'Unauthorized') {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    
    if (error.message.startsWith('Invalid payload')) {
      return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
