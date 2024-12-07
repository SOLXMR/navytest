import { kv } from '@vercel/kv';

export default async function handler(req, res) {
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
      const scoreId = scores[i];
      const score = Number(scores[i + 1]);
      
      const scoreData = await kv.hgetall(`fleetcommander:score:${scoreId}`);
      
      if (scoreData && scoreData.username && scoreData.timestamp) {
        leaderboard.push({
          username: scoreData.username,
          score,
          timestamp: Number(scoreData.timestamp)
        });
      }
    }

    return res.status(200).json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return res.status(500).json({ message: 'Error fetching leaderboard' });
  }
} 