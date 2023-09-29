const mongoose =require("mongoose")

const likes=new mongoose.Schema({

   user:{
      type:mongoose.Schema.Types.ObjectId

   },
   onModel:{
      type:String,
      required:true,
      enum:['Post','Comment']
   },
   likeable:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      refPath:'onModel'
   }
})

const Likes=mongoose.model('Likes',likes)
module.export={Likes}