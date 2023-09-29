const mongoose=require("mongoose");
const {ObjectId}=require("bson");


const  userSchema=new mongoose.Schema({
   email:{
      type:String,
      required:true,
      unique:true
   },
   password:{
      type:String,
      required:true,

   },
   bio:{
      type:String
   },
   post:[{
      type:mongoose.Schema.Types.ObjectId
   }],
   name:{
      type:String
   }
})


const Users2=mongoose.model("Users2",userSchema)



module.exports={Users2}