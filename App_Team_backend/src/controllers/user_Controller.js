const {userService} =require("../services");
const {StatusCodes}=require("http-status-codes")
const {SuccessResponce,ErrorResponce}=require("../utils")

async function createUser(req,res){
   try{
      const responce= await userService.signUp({
        email:req.body.email,
        password:req.body.password
      })
      SuccessResponce.data=responce
      return res
       .status(StatusCodes.CREATED)
       .json(SuccessResponce)
      

   }catch(error){ 
      console.log(error)
        ErrorResponce.error=error
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(
         ErrorResponce
        )
   }


}


module.exports={createUser}