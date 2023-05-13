import { connectToDatabase } from './dbUtil';

const jwt = require('jsonwebtoken');

export const validateJWT = async (event, callback) => {
  try {
    const token = event.headers['x-access-token'];
    if (token) {
      const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
      if (decodedToken) {
        //if (decodedToken.role !== 'admin') {  // TODO check roles
        const database = await connectToDatabase(process.env.MONGODB_URI);
        const collection = database.collection('user');
        const userData = await collection.findOne({ email: decodedToken.email });
        let out = { statusCode: 500 };
        try {
          out = await callback(userData);
        } catch (error) {
          console.log('Callback during JWT validate failed ' + error);
        }
        if (out) {
          return {
            statusCode: out.code,
            body: JSON.stringify(out.body)
          };
        }
      }
    }
    return {
      statusCode: 401,
      body: JSON.stringify({
        message: 'Not authorized'
      })
    };
  } catch (error) {
    console.log('AUTH validate error: ' + error.message);
    return {
      statusCode: 401,
      body: JSON.stringify({
        message: 'Not authorized'
      })
    };
  }
};
