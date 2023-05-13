import { Handler } from '@netlify/functions';
import { connectToDatabase } from '../../util/dbUtil';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 404 };
  }
  const { username, email, password } = JSON.parse(event.body);

  context.callbackWaitsForEmptyEventLoop = false;

  try {
    console.log('Connecting to DB: ' + process.env.MONGODB_URI);
    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('user');
    console.log('DB connected');

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
    const res = await collection.insertOne({
      username: username,
      email: email,
      password: encryptedPassword
    });
    console.log('1 document inserted: ' + JSON.stringify(res));

    const token = jwt.sign({ user_id: res.insertedId, email }, process.env.TOKEN_KEY, {
      expiresIn: '7d'
    });
    console.log(token);

    return {
      statusCode: 200,
      headers: {
        'x-access-token': token
      },
      body: JSON.stringify({
        message: 'User created.'
      })
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: error.toString() };
  }
};
