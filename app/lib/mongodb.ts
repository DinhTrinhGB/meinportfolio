import { MongoClient } from 'mongodb';


import externalClientPromise from '../lib/mongodb';

export async function handler(req, res) {
  const client = await localClientPromise;
  const db = client.db('your-database-name');
  const collection = db.collection('your-collection-name');

  const data = await collection.find({}).toArray();
  res.status(200).json(data);
}


const uri = process.env.MONGODB_URI || '';
const options = {};

let client;
let localClientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  localClientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  localClientPromise = client.connect();
}

export default localClientPromise;
