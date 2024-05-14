const mongoose = require("mongoose");

const stageRecordSchema = new mongoose.Schema({
    userId: {
        type: String,
        maxlegth: 15,
    },
    stageId: {
        type: String,
    },
    code: {
        type: [ String ]
    },
    clearedAt: {
        type: Date,
        default: Date.now
    }
});

const stageRecordModel = mongoose.model("stageRecord", stageRecordSchema);

module.exports = { stageRecordModel };