const Joi = require("joi");

const addBidToPet = Joi.object({
  amount: Joi.number().integer().required().min(1),
  userId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/u)
    .required(),
  petId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/u)
    .required(),
});

const mongoIdSchema = Joi.object({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/u)
    .required(),
});


module.exports = { addBidToPet, mongoIdSchema };
