const mongoose = require('mongoose');

let mongoDBClient;

module.exports.createMongoDBClient = async () => {
  if (mongoDBClient) return mongoDBClient;

  mongoDBClient = await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

  // eslint-disable-next-line no-console
  console.log('connect successfully');

  return mongoDBClient;
};
