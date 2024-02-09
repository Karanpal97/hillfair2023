const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
    },
    venue: {
        type: String,
    },
    info: {
        type: String,
    },
    image: {
        type: String,
    },
    regUrl: {
        type: String,
    },
    isWorkshop: {
        type: Boolean,
        default: false,
    },
    discription: {
        type: String,
    },
    time: {
        type: String,
    },
});

const Event = mongoose.model("event", EventSchema);

module.exports = Event;
