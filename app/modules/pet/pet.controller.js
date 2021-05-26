const petService = require('./pet.service');
const userService = require('../user/user.service');
const petValidator = require('./utils/pet.validator');

const getBidsOnSpecificPet = async (req, res) => {
  try {
    const { petId } = req.params;

    // validate user input
    await petValidator.validateMongoId({ id: petId });

    /* we need to get the current userId from access token to check
     * if the users requesting data is the owner of the pet
     * But as there is no required auth middlewares or additional routes I will
     * not implement it
     */

    const bids = await petService.getBidsOnSpecificPet(petId);

    return res.status(200).send({ status: true, code: '200', msg: '', data: bids });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ status: false, code: '400', msg: error.toString() });
  }
};

const addBid = async (req, res) => {
  try {
    const petId = req.params.petId;
    const { userId, amount } = req.body;

    // validate user input
    await petValidator.validateAddBid({ userId, amount, petId });

    // check if the user exists
    await userService.validateUserId(userId);

    // check if the pet exists
    await petService.validatePetId(petId);

    // update pet data and add new bid
    await petService.addBidToPet(petId, { userId, amount });

    return res.status(200).send({ status: true, code: '200', msg: 'bid added successfully' });
  } catch (error) {
    return res.status(400).send({ status: false, code: '400', msg: error.toString() });
  }
};

module.exports = { getBidsOnSpecificPet, addBid };
