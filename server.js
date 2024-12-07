const express = require('express');
const { kv } = require('@vercel/kv');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Get leaderboard
app.get('/api/leaderboard', async (req, res) => {
  console.log('Fetching leaderboard...');
  try {
    // Get all scores from the sorted set
    const scoresData = await kv.zrange('fleetcommander:scores', 0, 9, {
      withScores: true,
      rev: true // Get highest scores first
    });
    
    console.log('Raw scores data:', scoresData);

    // Format the scores
    const leaderboard = [];
    
    // Process scores in pairs (member, score)
    for (let i = 0; i < scoresData.length; i += 2) {
      const scoreId = String(scoresData[i]);
      const score = Number(scoresData[i + 1]);
      
      console.log(`Processing score ID: ${scoreId}, Score: ${score}`);
      
      const scoreData = await kv.hgetall(`fleetcommander:score:${scoreId}`);
      console.log('Score details:', scoreData);
      
      if (scoreData && scoreData.username && scoreData.timestamp) {
        leaderboard.push({
          username: String(scoreData.username),
          score: score,
          timestamp: Number(scoreData.timestamp)
        });
      }
    }

    console.log('Final leaderboard:', leaderboard);
    res.json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ message: 'Error fetching leaderboard' });
  }
});

// Submit score
app.post('/api/submit-score', async (req, res) => {
  console.log('Submitting new score...');
  try {
    const { username, score, timestamp } = req.body;
    console.log('Score submission data:', { username, score, timestamp });

    if (!username || typeof score !== 'number' || !timestamp) {
      console.log('Invalid submission data');
      return res.status(400).json({ message: 'Invalid request body' });
    }

    // Create a unique ID for this score
    const scoreId = `${String(username)}:${timestamp}`;
    console.log('Generated score ID:', scoreId);

    // Store the score details in a hash
    await kv.hset(`fleetcommander:score:${scoreId}`, {
      username: String(username),
      timestamp: String(timestamp)
    });

    // Add the score to a sorted set
    await kv.zadd('fleetcommander:scores', {
      score: Number(score),
      member: scoreId
    });

    console.log('Score submitted successfully');
    res.json({ message: 'Score submitted successfully' });
  } catch (error) {
    console.error('Error submitting score:', error);
    res.status(500).json({ message: 'Error submitting score' });
  }
});

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 