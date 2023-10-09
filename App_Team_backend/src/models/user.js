const mongoose=require("mongoose");

const bcrypt=require("bcrypt")


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
   
   name:{
      type:String
   },
   rollNo:{
      type:String
   },
   
   image: {
      type:String
   },
   Instagram:{
      type:String
   },
   
})




userSchema.pre("save",function(next){
   const user=this
   const encryptedPassword= bcrypt.hashSync(user.password,8)
   user.password= encryptedPassword;
   next();
   
   })
   const Users2=mongoose.model("Users2",userSchema)
   
  



module.exports={Users2}