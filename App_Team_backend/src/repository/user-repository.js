const {Users2}=require("../models/user")
const crudRepository =require("./crud_repository")
  

class userRepository extends crudRepository{
   constructor(){
      super(Users2)
   }
}

module.exports=userRepository