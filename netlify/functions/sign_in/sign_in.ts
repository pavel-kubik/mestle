import { Handler } from '@netlify/functions';
import { connectToDatabase } from '../../util/dbUtil';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 404 };
  }

  const { email, password } = JSON.parse(event.body);

  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('user');

    console.log('Query: ' + email);

    const userData = await collection.findOne({ email: email });

    console.log('Found: ' + JSON.stringify(userData));

    if (userData && userData.password) {
      if (bcrypt.compare(password, userData.password)) {
        const token = jwt.sign(
          { user_id: userData._id, email }, //
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
          }
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
