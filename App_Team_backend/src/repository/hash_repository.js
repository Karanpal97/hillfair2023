const crudRepository =require("./crud_repository")
const {HashTag2}=require("../models/hashtag")


class hashRepository extends crudRepository{
   constructor(){
      super(HashTag2)
   }
}


module.exports=hashRepository