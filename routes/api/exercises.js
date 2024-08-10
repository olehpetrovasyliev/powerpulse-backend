const express = require("express");
const exercises = require("../../models/exercises/exercises.json");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json(exercises);
});

router.get("/:id", (req, res, next) => {
  res.json(exercises[req.id]);
});

router.post("/", (req, res, next) => {});

router.put("/:id", (req, res, next) => {
  res.json(exercises[0]);
});

router.delete("/:id", (req, res, next) => {
  res.json(exercises[0]);
});

module.exports = router;
