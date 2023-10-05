const {Users2}=require("../models/user")
const crudRepository = require("./crud_repository");
  

class userRepository extends crudRepository{
   constructor(){
      super(Users2)
   }
   async getUserByEmail(email){
      const response= await Users2.findOne({email:email})
      return response;
  }
}

module.exports=userRepository