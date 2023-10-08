const express=require("express")
const {postController}=require("../../controllers")
const { AuthRequestMiddlewares } = require('../../middleware');


//  const {validateMiddleware}=require("../../middleware")

const router=express.Router();


router.post("/",AuthRequestMiddlewares.checkAuth ,postController.createPost)
router.get("/get",postController.find);
router.delete('/:id',postController.remove)




// 

// router.get('/:id', tweetController.findTweet)
//validateMiddleware.validCreateRequest,


module.exports=router;