const mongoose = require('mongoose');
const config = require('config');

module.exports = () => {
  const DB_URL = config.get('db-url');
  mongoose
    .connect(DB_URL, {
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('Connected Successfuly To mongodb'))
    .catch(err => console.log(err));
};
