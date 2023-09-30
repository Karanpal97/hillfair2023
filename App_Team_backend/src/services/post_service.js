const PostRepository=require("../repository/post_Repository");
const hashRepository=require("../repository/hash_repository");
const {StatusCodes}=require("http-status-codes")
const AppError=require("../utils/errors/app-error")
const postRepo=new PostRepository();
const hashRepo=new hashRepository();

async function create(data){
   try{

     const content=data.content;
     const tags=content.match(/#+[a-zA-Z0-9(_)]+/g).
     map((tag) => tag.substring(1).toLowerCase());
     const responce=await postRepo.create(data);
    

     let alReadyPresentTag= await hashRepo.findbyName(tags)
     console.log(alReadyPresentTag)

   
   let textOfPresentTags = alReadyPresentTag.map(tags => tags.text)
     let newTag=tags.filter((tag)=>!textOfPresentTags.includes(tag));
     newTag = newTag.map( tag => {
      return {
          text: tag,
          post : [responce.id]
      }
  })
  
  await hashRepo.bulkCreate(newTag);
   alReadyPresentTag.forEach((tag) => {
       tag.post.push(responce.id);
       tag.save();
   })
   return responce

   }catch(error){
      console.log(error)
       throw new AppError("connot create the post", StatusCodes.BAD_REQUEST)
   }
}

module.exports={create};