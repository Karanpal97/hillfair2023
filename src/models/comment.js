const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
    },

    onModel: {
        type: String,
        required: true,
        enum: ["Post", "Comment"],
    },

    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: onModel,
    },
});

const Comment = mongoose.model("Comment", commentSchema);
module.export = { Comment };
