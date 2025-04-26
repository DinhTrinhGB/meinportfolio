import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise; // Establish connection
    const db = client.db('Portflio'); // Connect to 'postboard' database
    const collection = db.collection('Postboard'); // Access 'posts' collection

    if (req.method === 'POST') {
      const { message } = req.body; // Extract the message
      if (!message || message.trim() === '') {
        return res.status(400).json({ error: 'Message is required' });
      }

      const result = await collection.insertOne({ message, timestamp: new Date() });
      res.status(201).json({ success: true, result });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error saving post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
