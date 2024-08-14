const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
  bodyPart: String,
  equipment: String,
  gifUrl: String,
  name: String,
  target: String,
  burnedCalories: Number,
  time: Number,
});

const Exercise = model("exercise", exerciseSchema);

module.exports = Exercise;
