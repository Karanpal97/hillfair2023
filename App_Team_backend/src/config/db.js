const mongoose=require("mongoose");

const connect =async()=>{
   await mongoose.connect("mongodb+srv://karangill1810:Notification%4097@cluster0.ipzbkbg.mongodb.net/")
}

module.exports={
   connect
}