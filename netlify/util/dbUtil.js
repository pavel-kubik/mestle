import { MongoClient } from 'mongodb';

let cachedDb = null;

export const connectToDatabase = async (uri) => {
  // we can cache the access to our database to speed things up a bit
  // (this is the only thing that is safe to cache here)
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true
  });

  cachedDb = client.db(process.env.MONGODB_DATABASE);

  return cachedDb;
};
