const express=require("express")
const {postController}=require("../../controllers")


 const {validateMiddleware}=require("../../middleware")

const router=express.Router();


router.post("/",validateMiddleware.validCreateRequest,postController.createPost)
router.get("/get",postController.find);
router.patch('/:id',postController.remove)




// 

// router.get('/:id', tweetController.findTweet)


module.exports=router;