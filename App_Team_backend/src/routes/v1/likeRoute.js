const express=require("express")
const toggleLike=require("../../controllers/like_Controller")



const router=express.Router();
router.post('/',toggleLike)
module.exports=router;