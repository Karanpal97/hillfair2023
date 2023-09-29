const express=require("express")
const {postController}=require("../../controllers")


 const {validateMiddleware}=require("../../middleware")

const router=express.Router();


router.post("/",validateMiddleware.validCreateRequest,postController.createPost)
// router.patch("/",tweetController.remove)




// router.get("/get",tweetController.findAllTweet)

// router.get('/:id', tweetController.findTweet)


module.exports=router;