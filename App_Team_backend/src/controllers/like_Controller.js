const {likeService} =require("../services");
const {StatusCodes}=require("http-status-codes")
const {SuccessResponce,ErrorResponce}=require("../utils")

async function createLike(req,res){
   try{
      const responce= await likeService.ToggleLike({
         modelId:req.body.modelId,
         modelType:req.body.modelType,
         userId:req.body.userId
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


module.exports={createLike}

