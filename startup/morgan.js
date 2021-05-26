const morgan = require('morgan');

module.exports = app => {
  app.use(morgan('dev'));
  console.log('morgan is enabled...');
};
