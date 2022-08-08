import { Handler } from '@netlify/functions';

const { MongoClient } = require('mongodb');

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

export const handler: Handler = async (event, context) => {
  const { name, passwordHash } = event.queryStringParameters;

  // TODO: Create user in database and return user object
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    //console.log('DB: ' + JSON.stringify(database));
    const collection = database.collection('user');
    //console.log('Collection: ' + JSON.stringify(collection));

    // TODO store IP address and allow store only few new users from same IP per time frame

    collection.insertOne(
      {
        name: name,
        passwordHash: passwordHash
      },
      function (err, res) {
        if (err) throw err;
        console.log('1 document inserted: ' + JSON.stringify(res));

        collection.find({}).toArray(function (err, result) {
          if (err) throw err;
          console.log('Found: ' + JSON.stringify(result));
        });
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello, ${name}!`
      })
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
