import { Handler } from '@netlify/functions';
import { validateJWT } from 'jwt-auth-mongodb';
import { connectToDatabase } from '../../util/dbUtil';

export const handler: Handler = async (event, context) => {
  if (event.httpMethod === 'GET') {
    return await getAttempt(event);
  } else if (event.httpMethod === 'PUT') {
    return await addAttempt(event);
  } else if (event.httpMethod === 'POST') {
    return await setAttempt(event);
  } else {
    return { statusCode: 404 };
  }
};

const setAttempt = async (event) => {
  const response = await validateJWT(event, async (userData) => {
    const { todaySeed, attempts, eog } = JSON.parse(event.body);

    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('history');
    const eogKey = todaySeed + '.eog';
    const attemptsKey = todaySeed + '.attempts';
    await collection.updateOne(
      { user_id: userData._id },
      {
        $set: {
          user_id: userData._id, //
          [eogKey]: eog,
          [attemptsKey]: attempts
        }
      },
      { upsert: true }
    );
    return {
      code: 200
    };
  });
  return response;
};

const addAttempt = async (event) => {
  const response = await validateJWT(event, async (userData) => {
    const { todaySeed, attempt, eog } = JSON.parse(event.body);

    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('history');
    const eogKey = todaySeed + '.eog';
    const attemptsKey = todaySeed + '.attempts';
    const result = await collection.updateOne(
      { user_id: userData._id },
      {
        $set: { user_id: userData._id, [eogKey]: eog },
        $push: {
          [attemptsKey]: attempt
        }
      },
      { upsert: true }
    );
    if (result.modifiedCount + result.upsertedCount === 1) {
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

const getAttempt = async (event) => {
  const response = await validateJWT(event, async (userData) => {
    const todaySeed = event.queryStringParameters.seed;

    const database = await connectToDatabase(process.env.MONGODB_URI);
    const collection = database.collection('history');
    const result = await collection.findOne({ user_id: userData._id });
    let todayHistory = {
      attempts: [],
      eog: false
    };
    if (result && result[todaySeed]) {
      todayHistory = result[todaySeed];
    }
    return {
      code: 200,
      body: {
        history: JSON.stringify(todayHistory)
      }
    };
  });
  return response;
};
