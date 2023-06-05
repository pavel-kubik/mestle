import { Handler } from '@netlify/functions';
import { signUp } from 'jwt-auth-mongodb/dist/be/auth';

export const handler: Handler = async (event, context) => {
  return await signUp(event, context);
};
