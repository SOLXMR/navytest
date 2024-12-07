import { kv } from '@vercel/kv';
import type { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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

    return res.status(200).json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return res.status(500).json({ message: 'Error fetching leaderboard' });
  }
} 