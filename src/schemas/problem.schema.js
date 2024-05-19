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
  isChallenge: {
    type: Boolean,
    default: false,
  },
  startedAt: {
    type: Date,
    default: Date.now,
  },
  finishedAt: {
    type: Date,
    default: new Date("9999-12-31"),
  },
});

const problemModel = mongoose.model("Problem", problemSchema);

module.exports = { problemModel };
