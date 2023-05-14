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

  const { email } = JSON.parse(event.body);

  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('user');

    const userData = await collection.findOne({ email: email });

    if (userData) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          salt: userData.salt
        })
      };
    }
    return {
      statusCode: 401,
      body: JSON.stringify({
        message: 'Username or password is incorrect'
      })
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: error.toString() };
  }
};
