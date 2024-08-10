const express = require("express");
const cors = require("cors");

const exercisesRouter = require("./routes/api/exercises");
const filters = require("./db/filters.json");
const products = require("./db/products.json");
const productsCategories = require("./db/productsCategories.json");

const app = express();
app.use(cors());

app.use("/api/exercises", exercisesRouter);
app.get("/filters", (req, res, next) => {
  res.json(filters);
});
app.get("/products", (req, res, next) => {
  res.json(products);
});
app.get("/productsCategories", (req, res, next) => {
  res.json(productsCategories);
});
app.use((req, res) => {
  res.status(404).json({ message: "not found" });
});

module.exports = app;
