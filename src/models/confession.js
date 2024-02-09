const mongoose = require("mongoose");

const confessionSchema = new mongoose.Schema({
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
});

const Confession = mongoose.model("confession", confessionSchema);

module.exports = Confession;
