import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export function GET() {
  return new NextResponse('78807ae087d44d48befc4e1b28c9a814', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
