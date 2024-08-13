const express = require("express");
const exercisesService = require("../../models/exercises");
const { httpError } = require("../../helpers");
const { exercisesCtrl } = require("../../controllers");
const {
  addExerciseValidate,
} = require("../../controllers/exercisesControllers");

const router = express.Router();

router.get("/", exercisesCtrl.getAll);

router.get("/:id", exercisesCtrl.getById);

router.post("/", addExerciseValidate, exercisesCtrl.addNew);

router.put("/:id", addExerciseValidate, exercisesCtrl.updateById);

router.delete("/:id", exercisesCtrl.deleteById);

module.exports = router;
