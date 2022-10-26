import { Handler } from '@netlify/functions';

const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let cachedDb = null;

const connectToDatabase = async (uri) => {
  // we can cache the access to our database to speed things up a bit
  // (this is the only thing that is safe to cache here)
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true
  });

  cachedDb = client.db(process.env.MONGODB_DATABASE);

  return cachedDb;
};

export const handler: Handler = async (event, context) => {
  const { username, email, password } = JSON.parse(event.body);

  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('user');

    // TODO store IP address and allow store only few new users from same IP per time frame

    const encryptedPassword = await bcrypt.hash(password, 10);

    // TODO ensure email and username unique

    const res = await collection.insertOne({
      username: username,
      email: email,
      password: encryptedPassword
    });
    console.log('1 document inserted: ' + JSON.stringify(res));

    const token = jwt.sign(
      { user_id: res.insertedId, email }, //
      process.env.TOKEN_KEY, //
      {
        expiresIn: '7d'
      }
    );
    console.log(token);

    return {
      statusCode: 200,
      headers: {
        'x-access-token': token
      },
      body: JSON.stringify(token)
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
