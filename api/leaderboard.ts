import { kv } from '@vercel/kv';
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface LeaderboardEntry {
  username: string;
  score: number;
  timestamp: number;
}

interface ScoreData {
  username: string;
  timestamp: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get all scores from the sorted set
    const scores: [string, string][] = await kv.zrange('fleetcommander:scores', 0, 9, {
      withScores: true,
      rev: true // Get highest scores first
    });

    // Format the scores
    const leaderboard: LeaderboardEntry[] = [];
    for (let i = 0; i < scores.length; i += 2) {
      const scoreData = await kv.hgetall<ScoreData>(`fleetcommander:score:${scores[i]}`);
      if (scoreData && scoreData.username && scoreData.timestamp) {
        leaderboard.push({
          username: scoreData.username,
          score: Number(scores[i + 1]),
          timestamp: parseInt(scoreData.timestamp)
        });
      }
    }

    return res.status(200).json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return res.status(500).json({ message: 'Error fetching leaderboard' });
  }
} 