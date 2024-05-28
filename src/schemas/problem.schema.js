const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  problemId: {
    type: Number,
    maxlength: 50,
    unique: true,
  },
  title: {
    type: String,
    maxlength: 50,
    unique: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    maxlength: 50,
  },
  rewardMoney: {
    type: Number,
    dafault: 0,
  },
  rewardItem: {
    type: Array,
    default: [],
  },
  isChallenged: {
    type: Boolean,
    default: false,
  },
  startedAt: {
    type: Date,
  },
  finishedAt: {
    type: Date,
  },
});

const problemModel = mongoose.model("Problem", problemSchema);

module.exports = { problemModel };
