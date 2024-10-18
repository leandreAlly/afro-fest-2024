'use server';

import { sql } from '@vercel/postgres';

export async function incrementAttendance() {
  try {
    await sql`UPDATE event_stats SET attend_count = attend_count + 1 WHERE event_id = 'afrofest'`;
    return { success: true };
  } catch (error) {
    console.error('Failed to increment attendance:', error);
    return { success: false, error: (error as Error).message };
  }
}
