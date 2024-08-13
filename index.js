const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(1111);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(DB_HOST);
  });
