const {Post} =require("../models/post");
const crudRepository = require("./crud_repository");

class postRepository extends crudRepository{
   constructor(){
      super(Post)
   }
   async getPost(id)
   {
       try {
            let post = await Post.findById(id);
            return post;
       }
       catch(error) {
           console.log(error);
           throw error;
       }
   }
}

module.exports=postRepository;