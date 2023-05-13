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

  const { email, password } = JSON.parse(event.body);

  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('user');

    const userData = await collection.findOne({ email: email });

    if (userData && userData.password) {
      if (await bcrypt.compare(password, userData.password)) {
        const token = jwt.sign(
          { user_id: userData._id, email }, //
          process.env.TOKEN_KEY, //
          {
            expiresIn: '7d'
          }
        );

        return {
          statusCode: 200,
          headers: {
            'x-access-token': token
            // TODO store jwt in http only session
          },
          body: JSON.stringify({
            id: userData._id,
            username: userData.username,
            token: token
          })
        };
      }
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
