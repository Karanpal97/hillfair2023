const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    conf_message: {
        type: String,
    },
    dedicated_to: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users2",
    },
    deleteCount: {
        type: Number,
        default: 0,
    },
});

const message = mongoose.model("message", messageSchema);

module.exports = message;
