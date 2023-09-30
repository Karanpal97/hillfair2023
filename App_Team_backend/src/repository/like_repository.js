// const {Like}=require("../models/like")
// const crudRepository=require("./crud_repository")

// class likeRepository extends crudRepository{
//   constructor(){
//    super(Like)
//   }

 

// async findByUserAndLikeable(data){
//   try {
//     console.log(data);
//     const like = await Like.findOne(data)
  
//     return like;
// } catch (error) {
//   console.log(error)
//     throw error;
// }

// }

// }

// module.exports=likeRepository


const {Like}=require("../models/like.js") ;
const CrudRepository= require("../repository/crud_repository.js");

class LikeRepository extends CrudRepository {
    constructor() {
        super(Like)
    }

    async findByUserAndLikeable(data){
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            throw error;
        }
    }
}
module.exports= LikeRepository