const express = require('express');
const petsRouter = require('../app/modules/pet/pet.routes');

module.exports = function (app) {
  app.use(express.json());
  app.use('/pets', petsRouter);
};
