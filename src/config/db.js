const mongoose=require("mongoose");

const connect =async()=>{
   await mongoose.connect(process.env.db)
}

module.exports={
   connect
}
