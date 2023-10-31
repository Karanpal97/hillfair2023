const mongoose =require("mongoose");
const {ObjectId}=require("bson")



const postSchema=new mongoose.Schema(
   {

   content:{
            type:String,
            required:true},
  likes:[{
   type:mongoose.Schema.Types.ObjectId,
   ref:'Like'
  }],

   comment:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Comment'
   }],

   User:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Users2'
   },
   photo:{
      type:String
   }

})

const Post=mongoose.model('Post',postSchema);

module.exports={Post};
