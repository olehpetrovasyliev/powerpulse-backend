const Joi = require("joi");

const addUserExerciseSchema = Joi.object({
  exercise: Joi.string().required(),
  date: Joi.date().required(),
  time: Joi.number().min(1).required(),
  calories: Joi.number().min(1).required(),
});

module.exports = { addUserExerciseSchema };
