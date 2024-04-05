const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const { SERVER_PORT, DB_PORT, DB_URL } = process.env;

const mongoose = require("mongoose");
mongoose
  .connect(DB_URL, {})
  .then(() => console.log(`MongoDB connected on port ${DB_PORT}`))
  .catch((err) => console.log("MongoDB connection error: ", err));

const app = express();
app.use(express.json());
app.use(cors());

app.use(require("./routes/routes"));

app.use(require("./helpers/response.helper").errorHandler);
app.listen(SERVER_PORT, () =>
  console.log(`Server started on port ${SERVER_PORT}`)
);
