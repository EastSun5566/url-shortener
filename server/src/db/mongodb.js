const mongoose = require('mongoose');

module.exports.connectDB = async () => {
  await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
  // eslint-disable-next-line no-console
  console.log('connect successfully');
};
