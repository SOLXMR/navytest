import { kv } from '@vercel/kv';
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ScoreSubmission {
  username: string;
  score: number;
  timestamp: number;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const body = req.body as ScoreSubmission;
    const { username, score, timestamp } = body;

    if (!username || typeof score !== 'number' || !timestamp) {
      return res.status(400).json({ message: 'Invalid request body' });
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

    return res.status(200).json({ message: 'Score submitted successfully' });
  } catch (error) {
    console.error('Error submitting score:', error);
    return res.status(500).json({ message: 'Error submitting score' });
  }
} 