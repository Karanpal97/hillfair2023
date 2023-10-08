const {postService} =require("../services");
const {StatusCodes}=require("http-status-codes")
const {SuccessResponce,ErrorResponce}=require("../utils")

async function createPost(req,res){
   try{
      const responce= await postService.create({
         content:req.body.content,
         likes:req.body.likes,
         comment:req.body.comment,
         User:req.body.User
      })
      console.log(responce)
     
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

async function find(req,res){
   try{
      const responce= await postService.findPost();
      SuccessResponce.data=responce
      return res
       .status(StatusCodes.OK)
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
async function remove(req,res){
   try{
      const responce= await postService.deletePost(req.params.id);
      console.log(responce)
      SuccessResponce.data=responce
      return res
       .status(StatusCodes.OK)
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


module.exports={createPost,find,remove}