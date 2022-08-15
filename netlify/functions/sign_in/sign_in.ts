import { Handler } from '@netlify/functions';

const { MongoClient } = require('mongodb');

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
  const { username, password } = JSON.parse(event.body);

  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('user');

    console.log('Query: ' + username);

    const userData = await collection.findOne({ username: username });

    console.log('Found: ' + JSON.stringify(userData));

    if (userData) {
      if (userData.passwordHash == password) {
        //TODO generate token and return it

        return {
          statusCode: 200,
          body: JSON.stringify({
            token: 'token'
          })
        };
      } else {
        console.log('Password is incorrect');
        return {
          statusCode: 401,
          body: JSON.stringify({
            message: `Password is incorrect`
          })
        };
      }
    } else {
      console.log('User not found');
      return {
        statusCode: 401,
        body: JSON.stringify({
          message: `User not found`
        })
      };
    }
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: error.toString() };
  }
};
