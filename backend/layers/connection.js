const mongoClient = require('mongodb').MongoClient;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conexão local
const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

const DB_NAME = 'Block30Activities';

const connection = async () => {
  try {
    const connectionMongodb = await mongoClient.connect(MONGO_DB_URL, OPTIONS);
    global.db = await connectionMongodb.db(DB_NAME);
    console.log(`Connection to mongodb - database ${DB_NAME}`);
    return global.db;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = connection;
