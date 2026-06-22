import { NextRequest, NextResponse } from 'next/server';

const hits = new Map<string, { count: number; resetAt: number }>();

export function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'local';
  const now = Date.now();
  const bucket = hits.get(ip) ?? { count: 0, resetAt: now + 60_000 };
  if (bucket.resetAt < now) {
    bucket.count = 0;
    bucket.resetAt = now + 60_000;
  }
  bucket.count += 1;
  hits.set(ip, bucket);

  if (request.nextUrl.pathname.startsWith('/api') && bucket.count > 120) {
    return NextResponse.json({ error: 'تم تجاوز الحد المسموح من الطلبات' }, { status: 429 });
  }

  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Content-Security-Policy', "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; connect-src 'self'; frame-ancestors 'none'");
  return response;
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
