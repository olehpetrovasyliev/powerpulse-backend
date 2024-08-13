const express = require("express");
const exercisesService = require("../models/exercises");
const { httpError } = require("../helpers");
const { ctrlWrapper, validateBody } = require("../decorators");
const { addUserExerciseSchema } = require("../schemas/exercisesSchemas");

const addExerciseValidate = validateBody(addUserExerciseSchema);

const getAll = async (req, res) => {
  const result = await exercisesService.getAllExercises();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await exercisesService.getExerciseById(id);
  if (!result) {
    throw httpError(404, `exercise with id ${id} not found`);
  }
  res.json(result);
};

const addNew = async (req, res, next) => {
  const { error } = addUserExerciseSchema.validate(req.body);
  if (error) {
    throw httpError(400, error.message);
  }
  console.log(req);
  const result = await exercisesService.addNewExercise(req.body);
  res.json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;

  const result = await exercisesService.updateExerciseById(id);
  if (!result) {
    throw httpError(404, `exercise with id ${id} not found`);
  }
  res.json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = exercisesService.deleteExerciseById(id);

  if (!result) {
    throw httpError(404, `exercise with id ${id} not found`);
  }
  res.json({ message: "Deleted successfully", exersise: result });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addNew: ctrlWrapper(addNew),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
  addExerciseValidate,
};
