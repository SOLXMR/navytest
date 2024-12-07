import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get all scores from the sorted set
    const scores = await kv.zrange('fleetcommander:scores', 0, 9, {
      withScores: true,
      rev: true // Get highest scores first
    });

    // Format the scores
    const leaderboard = [];
    for (let i = 0; i < scores.length; i += 2) {
      const scoreData = await kv.hgetall(`fleetcommander:score:${scores[i]}`);
      if (scoreData) {
        leaderboard.push({
          username: scoreData.username as string,
          score: parseInt(scores[i + 1]),
          timestamp: parseInt(scoreData.timestamp as string)
        });
      }
    }

    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json(
      { message: 'Error fetching leaderboard' },
      { status: 500 }
    );
  }
} 