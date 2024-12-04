const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('build'));

// Ensure messages directory exists
const messagesDir = path.join(__dirname, 'messages');
fs.mkdir(messagesDir, { recursive: true }).catch(console.error);

// API endpoint to save messages
app.post('/api/save-message', async (req, res) => {
  try {
    const { name, email, subject, message, timestamp } = req.body;
    const fileName = `${timestamp.split('T')[0]}_${Date.now()}.json`;
    const filePath = path.join(messagesDir, fileName);

    await fs.writeFile(
      filePath,
      JSON.stringify({ name, email, subject, message, timestamp }, null, 2)
    );

    console.log(`Message saved: ${fileName}`);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, error: 'Failed to save message' });
  }
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 