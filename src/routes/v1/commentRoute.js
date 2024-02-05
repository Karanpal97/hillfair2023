const express =require("express")

const router=express.Router();

const CommentController =require("../../controllers/comment_Controller")

router.post("/comment",CommentController);

module.exports=router