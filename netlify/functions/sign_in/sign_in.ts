import { Handler } from '@netlify/functions';
import { signIn } from 'jwt-auth-mongodb/dist/be/auth';

export const handler: Handler = async (event, context) => {
  return await signIn(event, context);
};
