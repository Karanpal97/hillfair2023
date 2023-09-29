const likeRepository=require("../repository/like_repository")
const postRepository=require("../repository/post_Repository")
const likeRepo=new likeRepository();
const postRepo=new postRepository();

async function ToggleLike(data){
  try{ let likeable;
   if(data.modelType=='Post'){
       likeable= await postRepo.getPost(data.modelId)
        console.log(likeable)
   
      }else if(data.modelName=='comment'){

 }
   else{
      console.log("wrong modelName is mention")
   }
   console.log(data)
   const exists=await likeRepo.findByUserAndLikeable({
      likeable:data.modelId,
      onModel:data.modelType,
      user:data.userId,
      
      
   })
   console.log(exists)
   if(exists){

   }
   else{
      const newLike=await likeRepo.create({
      likeable:data.modelId,
      onModel:data.modelType,
      user:data.userId,
      
      })
      likeable.likes.push(newLike)
      await likeable.save()
   }}catch(error){
      console.log(error)
   }
}

module.exports={ToggleLike}






