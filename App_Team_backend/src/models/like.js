
const mongoose=require("mongoose");

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId
    },
    onModel:{
        type: String,
        required: true,
        enum : ["Post","Comment"]
    },
    likeable :{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    }
})

const Like =  mongoose.model('like',likeSchema);

module.exports={Like} ;