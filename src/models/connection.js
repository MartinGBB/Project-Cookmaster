const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;
const DB_NAME = 'Cookmaster';

let connection = null;

module.exports = async () => {
  try {
     connection = connection || (connection = (await MongoClient.connect(
      MONGO_DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )).db(DB_NAME));
    console.log('mongo conectado');
    return connection;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
