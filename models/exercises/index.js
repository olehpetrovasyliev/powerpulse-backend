const fs = require("fs/promises");
const path = require("path");
const nanoid = require("nanoid");

const exercisesPath = path.join(__dirname, "exercises.json");

const updateExercises = async (exercises) =>
  await fs.writeFile(exercisesPath, JSON.stringify(exercises, null, 2));

const getAllExercises = async () => {
  const data = await fs.readFile(exercisesPath);
  return JSON.parse(data);
};

const getExerciseById = async (id) => {
  const exercises = await getAllExercises();
  const result = exercises.find((item) => item.id === id);
  return result || null;
};

const addNewExercise = async (data) => {
  const exercises = await getAllExercises();
  const newExercise = {
    ...data,
    id: nanoid(),
  };
  exercises.push(newExercise);
  await updateExercises(exercises);
  return newExercise;
};
const updateExerciseById = async (id) => {
  const exercises = await getAllExercises();
  const index = exercises.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }

  exercises[index] = { id, ...data };

  await updateExercises(exercises);

  return exercises[index];
};

const deleteExerciseById = async (id) => {
  const exercises = await getAllExercises();
  const index = exercises.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }

  const [result] = exercises.splice(index, 1);

  await updateExercises(exercises);

  return result;
};

module.exports = {
  getAllExercises,
  getExerciseById,
  addNewExercise,
  updateExerciseById,
  deleteExerciseById,
};
