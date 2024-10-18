import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result =
      await sql`SELECT attend_count FROM event_stats WHERE event_id = 'afrofest'`;
    const count = result.rows[0].attend_count;
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching attendance count:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
