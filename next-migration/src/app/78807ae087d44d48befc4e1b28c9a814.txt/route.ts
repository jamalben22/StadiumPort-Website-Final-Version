import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export function GET() {
  return new NextResponse('REDACTED', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
