const {Comment}=require("../models/comment")
const crudRepository = require("./crud_repository");
  

class userRepository extends crudRepository{
   constructor(){
      super(Comment)
   }
   async getUserByEmail(email){
      const response= await Users2.findOne({email:email})
      return response;
  }

  async getUserByRollNo(rollNo){
   const response= await Users2.findOne({rollNo:rollNo})
   return response;
}
}

module.exports=userRepository