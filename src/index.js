const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const DB_PORT = process.env.DB_PORT || 27017;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/cocode";

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
