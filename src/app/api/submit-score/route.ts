import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, score, timestamp } = body;

    if (!username || typeof score !== 'number' || !timestamp) {
      return NextResponse.json(
        { message: 'Invalid request body' },
        { status: 400 }
      );
    }

    // Create a unique ID for this score
    const scoreId = `${username}:${timestamp}`;

    // Store the score details in a hash
    await kv.hset(`fleetcommander:score:${scoreId}`, {
      username,
      timestamp: timestamp.toString()
    });

    // Add the score to a sorted set
    await kv.zadd('fleetcommander:scores', {
      score,
      member: scoreId
    });

    return NextResponse.json({ message: 'Score submitted successfully' });
  } catch (error) {
    console.error('Error submitting score:', error);
    return NextResponse.json(
      { message: 'Error submitting score' },
      { status: 500 }
    );
  }
} 