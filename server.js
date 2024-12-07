const express = require('express');
const { kv } = require('@vercel/kv');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Get leaderboard
app.get('/api/leaderboard', async (req, res) => {
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

    res.json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ message: 'Error fetching leaderboard' });
  }
});

// Submit score
app.post('/api/submit-score', async (req, res) => {
  try {
    const { username, score, timestamp } = req.body;

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

    res.json({ message: 'Score submitted successfully' });
  } catch (error) {
    console.error('Error submitting score:', error);
    res.status(500).json({ message: 'Error submitting score' });
  }
});

// Serve static files from the build directory
app.use(express.static('build'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 