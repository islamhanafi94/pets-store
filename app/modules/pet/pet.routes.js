const express = require('express');
const petController = require('./pet.controller');

const petRouter = express.Router();


petRouter.get('/:petId/bids', petController.getBidsOnSpecificPet);
petRouter.post('/:petId/bids', petController.addBid);

module.exports = petRouter;
