
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