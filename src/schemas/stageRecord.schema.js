const mongoose = require("mongoose");

const stageRecordSchema = new mongoose.Schema({
  userId: {
    type: String,
    maxlegth: 15,
  },
  problemId: {
    type: Number,
  },
  code: {
    type: [String],
  },
  clearedAt: {
    type: Date,
    default: Date.now,
  },
  isCleared: {
    type: Boolean,
    default: false,
  },
});

const stageRecordModel = mongoose.model("stageRecord", stageRecordSchema);

module.exports = { stageRecordModel };
