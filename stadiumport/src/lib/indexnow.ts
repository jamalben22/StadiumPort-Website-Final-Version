export interface IndexNowResponse {
  success: boolean;
  message: string;
  statusCode?: number;
}

export const INDEXNOW_API_KEY = 'REDACTED';
export const INDEXNOW_HOST = 'stadiumport.com';
export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_API_KEY}.txt`;
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';

/**
 * Submits URLs to IndexNow.
 * @param urls Array of URLs to submit. Must belong to stadiumport.com
 */
export async function submitToIndexNow(urls: string[]): Promise<IndexNowResponse> {
  if (!urls.length) {
    return { success: false, message: 'No URLs provided' };
  }

  // Ensure all URLs belong to the host
  const validUrls = urls.filter(url => {
    try {
      const parsed = new URL(url);
      return parsed.hostname === INDEXNOW_HOST || parsed.hostname === `www.${INDEXNOW_HOST}`;
    } catch {
      return false;
    }
  });

  if (validUrls.length === 0) {
    return { success: false, message: 'No valid URLs for this host provided' };
  }

  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_API_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: validUrls
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { success: true, message: 'Successfully submitted to IndexNow', statusCode: response.status };
    }

    // Handle specific error codes
    switch (response.status) {
      case 400:
        return { success: false, message: 'Bad Request: Invalid format or key', statusCode: 400 };
      case 403:
        return { success: false, message: 'Forbidden: Invalid key or key not found', statusCode: 403 };
      case 422:
        return { success: false, message: 'Unprocessable Entity: URLs do not belong to host', statusCode: 422 };
      case 429:
        return { success: false, message: 'Too Many Requests: Slow down', statusCode: 429 };
      default:
        return { success: false, message: `Error submitting to IndexNow: ${response.statusText}`, statusCode: response.status };
    }
  } catch (error: any) {
    console.error('IndexNow submission error:', error);
    return { success: false, message: `Network error: ${error.message}` };
  }
}
