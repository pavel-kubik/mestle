import { Handler } from '@netlify/functions';
import { validateJWT } from 'jwt-auth-mongodb';
import { connectToDatabase } from '../../util/dbUtil';

export const handler: Handler = async (event, context) => {
  if (event.httpMethod === 'GET') {
    return await getHistory(event);
  } else if (event.httpMethod === 'POST') {
    return await setHistory(event);
  } else if (event.httpMethod === 'PATCH') {
    return await updateHistory(event);
  } else {
    return { statusCode: 404 };
  }
};

const getHistory = async (event) => {
  const response = await validateJWT(event, async (userData) => {
    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('history');
    const history = collection.findOne({ user_id: userData.user_id });
    return {
      code: 200,
      body: {
        history: history
      }
    };
  });
  return response;
};

const setHistory = async (event) => {
  const response = await validateJWT(event, async (userData) => {
    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('history');
    const result = await collection.updateOne(
      {
        user_id: userData.user_id
      },
      {
        $set: { history: event.history }
      },
      {
        upsert: true
      }
    );

    if (result) {
      return {
        code: 200
      };
    } else {
      return {
        code: 500
      };
    }
  });
  return response;
};

const updateHistory = async (event) => {
  const response = await validateJWT(event, async (userData) => {
    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('history');
    const key = event.history_id;
    const value = event.history_value;
    const result = await collection.updateOne(
      {
        user_id: userData.user_id
      },
      {
        $set: { key: value }
      },
      {
        upsert: true
      }
    );

    if (result) {
      return {
        code: 200
      };
    } else {
      return {
        code: 500
      };
    }
  });
  return response;
};
