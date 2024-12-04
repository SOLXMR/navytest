import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = 'xrpnavy';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const client = await MongoClient.connect(uri as string);
    const db = client.db(dbName);
    const collection = db.collection('messages');

    const { name, email, subject, message } = req.body;
    const timestamp = new Date();

    const result = await collection.insertOne({
      name,
      email,
      subject,
      message,
      timestamp,
    });

    await client.close();

    res.status(200).json({ success: true, messageId: result.insertedId });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, error: 'Failed to save message' });
  }
} 