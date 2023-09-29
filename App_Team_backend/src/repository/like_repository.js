const {Likes}=require("../models/like")
const crudRepository=require("./crud_repository")

class likeRepository extends crudRepository{
  constructor(){
   super(Likes)
  }

 

async findByUserAndLikeable(data){
  try {
    const like = await Likes.findOne(data)
    console.log(like)
    return like;
} catch (error) {
  console.log(error)
    throw error;
}

}

}

module.exports=likeRepository