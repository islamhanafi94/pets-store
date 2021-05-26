const petValidationSchema = require("./petValidationSchema");

const validateAddBid = async (bid) => {
  await petValidationSchema.addBidToPet.validateAsync(bid);
};

const validateMongoId = async (id) => {
  await petValidationSchema.mongoIdSchema.validateAsync(id);
};

module.exports = { validateAddBid, validateMongoId };
