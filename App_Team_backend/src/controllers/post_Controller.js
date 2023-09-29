const {postService} =require("../services");
const {StatusCodes}=require("http-status-codes")
const {SuccessResponce,ErrorResponce}=require("../utils")

async function createPost(req,res){
   try{
      const responce= await postService.create({
         content:req.body.content,
         likes:req.body.likes,
         comment:req.body.comment
      })
      SuccessResponce.data=responce
      return res
       .status(StatusCodes.CREATED)
       .json(SuccessResponce)
      

   }catch(error){ 
      
        ErrorResponce.error=error
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(
         ErrorResponce
        )
   }


}


module.exports={createPost}