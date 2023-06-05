import { Handler } from '@netlify/functions';
import { signInSalt } from 'jwt-auth-mongodb/dist/be/auth';

export const handler: Handler = async (event, context) => {
  return await signInSalt(event, context);
};
