const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "groups",
    },
    chatWith: {
        type: String,
    },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
