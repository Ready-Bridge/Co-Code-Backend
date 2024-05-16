const mongoose = require("mongoose");

const problemRecordSchema = new mongoose.Schema({
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

const problemRecordModel = mongoose.model("problemRecord", problemRecordSchema);

module.exports = { problemRecordModel };