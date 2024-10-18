import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result =
      await sql`SELECT attend_count FROM event_stats WHERE event_id = 'afrofest'`;
    const count = result.rows[0].attend_count;
    // Add no-cache headers to the response
    const response = NextResponse.json({ count });
    response.headers.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    );
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching attendance count:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
