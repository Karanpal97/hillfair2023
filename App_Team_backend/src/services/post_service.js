const PostRepository=require("../repository/post_Repository");
const hashRepository=require("../repository/hash_repository");
// const {checkAuth}=require("../middleware/validate-auth-request-middleware")

const {StatusCodes}=require("http-status-codes")
const AppError=require("../utils/errors/app-error")
const postRepo=new PostRepository();
const hashRepo=new hashRepository();


async function create(data,response){
   try{
      console.log(response)
     const content=data.content;
   
    const tags=content.match(/#+[a-zA-Z0-9(_)]+/g).
     map((tag) => tag.substring(1).toLowerCase());
    
     const responce=await postRepo.create({...data,User:response});

    //  const id=await checkAuth()
    //  console.log(id)
    

   
    
  let alReadyPresentTag= await hashRepo.findbyName(tags)
   
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


async function findPost(){
try{const responce=await postRepo.findAll();
return responce;}
catch(error){
  return error
}
}
async function deletePost(id){
  try{const responce=await postRepo.destroy(id);
  return responce;}
  catch(error){
    return error
  }
  }

module.exports={create,findPost,deletePost};