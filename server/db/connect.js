const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true })
  .then(() => console.log('資料庫連接成功 🎉'))
  .catch(err => console.error('資料庫連接失敗 😢', err));
