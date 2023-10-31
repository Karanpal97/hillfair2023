const mongoose = require("mongoose")


const EventSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required: true,
    },
    endDate:{
        type:Date
    },
    venue:{
        type:String
    },
    info:{
        type:String
    },
    image:{
        type:String
    },
    regUrl:{
        type:String
    },
    isWorkshop:{
        type:Boolean,
        default:false
    }
})

const Event = mongoose.model("event", EventSchema);

module.exports = Event;