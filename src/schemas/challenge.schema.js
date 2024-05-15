const moongoose = require("mongoose");

const challengeSchema = new moongoose.Schema({
  challengeId: {
    type: String,
    maxlength: 15,
    unique: true,
  },
  title: {
    type: String,
    maxlength: 45,
  },
  solution: {
    type: Array,
    default: [],
  },
});
