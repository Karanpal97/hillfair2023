const mongoose =require("mongoose");
const {ObjectId}=require("bson")



const postSchema=new mongoose.Schema({

   content:{
            type:String,
            required:true},
  likes:[{
   type:mongoose.Schema.Types.ObjectId,
   ref:'Likes'
  }],

   comment:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Comment'
   }]

})

const Post=mongoose.model('Post',postSchema);

module.exports={Post};
