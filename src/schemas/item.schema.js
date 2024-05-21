const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemId: {
        type: String,
        maxLength: 15,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    isProfile: {
        type: Boolean,
        require: true,
        default: true,
    }
});

const itemModel = mongoose.model("Item", itemSchema);

module.exports = { itemModel };
