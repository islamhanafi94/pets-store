const express = require('express');

const app = express();

require('./startup/db')();
require('./startup/morgan')(app);
require('./startup/cors')(app);
require('./startup/routes')(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// seeder to add users and pets if empty db
require('./app/seeder');
