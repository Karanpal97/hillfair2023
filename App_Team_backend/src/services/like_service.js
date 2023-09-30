// const likeRepository=require("../repository/like_repository")
// const postRepository=require("../repository/post_Repository")
// const likeRepo=new likeRepository();
// const postRepo=new postRepository();

// async function ToggleLike(data){
//   try{ let likeable;
//    if(data.modelType=='Post'){
//        likeable= await postRepo.getPost(data.modelId)
//         console.log(likeable)
   
//       }else if(data.modelName=='comment'){

//  }
//    else{
//       console.log("wrong modelName is mention")
//    }
//    console.log(data)
//    const exists=await likeRepo.findByUserAndLikeable({
//       likeable:data.modelId,
//       onModel:data.modelType,
//       user:data.userId,
      
      
//    })
//    console.log(exists)
//    if(exists){

//    }
//    else{
//       const newLike=await likeRepo.create({
//       likeable:data.modelId,
//       onModel:data.modelType,
//       user:data.userId,
      
//       })
//       likeable.likes.push(newLike)
//       await likeable.save()
//    }}catch(error){
//       console.log(error)
//    }
// }

// module.exports={ToggleLike}



const LikeRepository =require("../repository/like_repository.js")
const PostRepository=require("../repository/post_Repository.js")

class LikeService {
    constructor() {
        this.likeRepository =new LikeRepository();
        this.postRepository =  new PostRepository();
    }

    async toggleLike(modelId,modelType,userId) { 
        let likeable;
        if(modelType === 'Post') {
            likeable = await this.postRepository.getPost(modelId)
        }
        else if(modelType === 'Comment') {
            //Todo
        }
        else{
            console.log("wrong modeltype")
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            user:userId,
            onModel: modelType,
            likeable:modelId
        })
        console.log("alreadypresent",exists)
        let isAdded;
        if(exists)
        {
            likeable.likes.pull(exists.id);
            await likeable.save();
            this.likeRepository.destroy(exists.id)
            isAdded =false;
        }
        else{
            const newLike = await this.likeRepository.create({
                user:userId,
                onModel: modelType,
                likeable:modelId 
            })
            likeable.likes.push(newLike);
            await likeable.save();
            isAdded =true;
        }
        console.log(isAdded)
        return isAdded;

    }
}


module.exports=LikeService;






