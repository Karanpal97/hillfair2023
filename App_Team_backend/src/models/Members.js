const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  member_name: {
    type: String,
    required: true,
  },
  team_name: {
    type: String,
  },
  teamId: {
    type:String
  },
  position: {
    type: String,
  },
  year:{
    type:Number
  },
  image: {
    type: String,
  },
  instagram:{
    type:String
  }
});

const member_model = new mongoose.model("member", memberSchema);

module.exports = member_model;