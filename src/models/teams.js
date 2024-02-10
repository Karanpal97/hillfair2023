const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    team_name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    name: {
        type: String,
    },
    position: {
        type: String,
    },
    instagram: {
        type: String,
    },
});

const team_model = new mongoose.model("team", teamSchema);

module.exports = team_model;
