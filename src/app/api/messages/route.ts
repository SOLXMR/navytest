import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = 'xrpnavy';

export async function POST(request: Request) {
  if (!uri) {
    return NextResponse.json(
      { error: 'MongoDB URI not configured' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection('messages');

    const { name, email, subject, message } = body;
    const timestamp = new Date();

    const result = await collection.insertOne({
      name,
      email,
      subject,
      message,
      timestamp,
    });

    await client.close();

    return NextResponse.json({ success: true, messageId: result.insertedId });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save message' },
      { status: 500 }
    );
  }
} 