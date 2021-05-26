const Pet = require("./pet.model");

const getPet = async (filter, selection = {}) => {
  const pet = await Pet.findOne(filter, selection);
  return pet;
};

const updatePet = async (petId, updateAttributes) => {
  const pet = await Pet.findByIdAndUpdate(petId, updateAttributes, {
    new: true,
  });

  return pet;
};

module.exports = { getPet, updatePet };
