const express = require("express");
const { exercisesCtrl } = require("../../controllers");
const {
  addExerciseValidate,
} = require("../../controllers/exercisesControllers");

const router = express.Router();

router.get("/", exercisesCtrl.getAll);

router.get("/:id", exercisesCtrl.getById);

router.post("/", exercisesCtrl.addNew);

router.put("/:id", addExerciseValidate, exercisesCtrl.updateById);

router.delete("/:id", exercisesCtrl.deleteById);

module.exports = router;
