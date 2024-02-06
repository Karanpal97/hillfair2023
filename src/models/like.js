const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "Users2",
    },
    onModel: {
        type: String,
        required: true,
        enum: ["Post", "Comment"],
    },
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "onModel",
    },
});

const Like = mongoose.model("Like", likeSchema);

module.exports = { Like };
