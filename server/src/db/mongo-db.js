const mongoose = require('mongoose');


module.exports.connectDB = async () => {
  await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
  console.log('connect successfully');
};
