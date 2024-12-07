import { kv } from '@vercel/kv';
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface LeaderboardEntry {
  username: string;
  score: number;
  timestamp: number;
}

type KVScoreData = Record<string, string>;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get all scores from the sorted set
    const scoresData = await kv.zrange('fleetcommander:scores', 0, 9, {
      withScores: true,
      rev: true // Get highest scores first
    }) as string[];

    // Format the scores
    const leaderboard: LeaderboardEntry[] = [];
    
    for (let i = 0; i < scoresData.length; i += 2) {
      const scoreId = scoresData[i];
      const score = parseFloat(scoresData[i + 1]);
      
      const scoreData = await kv.hgetall(`fleetcommander:score:${scoreId}`) as KVScoreData;
      
      if (scoreData && scoreData.username && scoreData.timestamp) {
        leaderboard.push({
          username: scoreData.username,
          score,
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