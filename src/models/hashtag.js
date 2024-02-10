const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        unique: true,
    },
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
        },
    ],
});

const HashTag2 = mongoose.model("hashtag2", hashtagSchema);

module.exports = { HashTag2 };
