import { Handler } from '@netlify/functions';
import { connectToDatabase } from '../../util/dbUtil';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 404 };
  }

  if (!event.body) {
    return { statusCode: 400 };
  }

  const { username, email, password, salt } = JSON.parse(event.body);

  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('user');

    // TODO store IP address and allow store only few new users from same IP per time frame

    // ensure email and username unique
    const userDataByEmail = await collection.findOne({ email: email });
    if (userDataByEmail) {
      return {
        statusCode: 409,
        body: JSON.stringify({
          message: 'Email is already used.'
        })
      };
    }
    const userDataByUsername = await collection.findOne({ username: username });
    if (userDataByUsername) {
      return {
        statusCode: 409,
        body: JSON.stringify({
          message: 'Username is already used.'
        })
      };
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const userData = await collection.insertOne({
      username: username,
      email: email,
      password: encryptedPassword,
      salt: salt
    });

    const token = jwt.sign({ user_id: userData.insertedId, email }, process.env.TOKEN_KEY, {
      expiresIn: '7d'
    });

    return {
      statusCode: 200,
      // TODO store jwt in http only session
      headers: {
        'x-access-token': token
      },
      body: JSON.stringify({
        id: userData.insertedId,
        username: username,
        token: token
      })
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: error.toString() };
  }
};
