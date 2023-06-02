import { Handler } from '@netlify/functions';
import { validateJWT } from 'jwt-auth-mongodb-be';

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 404 };
  }

  const response = await validateJWT(event, async (userData) => {
    return {
      code: 200,
      body: {
        username: userData.username
      }
    };
  });
  return response;
};
