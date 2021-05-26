const petRepository = require("./pet.repository");

const getBidsOnSpecificPet = async (petId, ownerId = "") => {
  const bids = await petRepository.getPet({ _id: petId }, { bids: 1, name: 1 });
  return bids;
};

const addBidToPet = async (petId, bid) => {
  await validatePetId(petId);
  const pet = await petRepository.updatePet(petId, {
    $push: { bids: { user: bid.userId, amount: bid.amount } },
  });

  return pet;
};

const validatePetId = async (petId) => {
  const pet = await petRepository.getPet({ _id: petId });
  if (!pet) {
    throw Error("Invalid pet id");
  }
};
module.exports = {
  getBidsOnSpecificPet,
  addBidToPet,
  validatePetId,
};
