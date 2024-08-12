const express = require("express");
const exercisesService = require("../../models/exercises");
const { httpError } = require("../../helpers");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await exercisesService.getAllExercises();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await exercisesService.getExerciseById(id);

    if (!result) {
      throw httpError(404, `exercise with id ${id} not found`);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    console.log(req);

    res.json(req.body);
  } catch (error) {
    next(error);
  }
});

// router.put("/:id", (req, res, next) => {});

// router.delete("/:id", (req, res, next) => {});

module.exports = router;
