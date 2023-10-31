const express=require('express');
const postRoute=require("./postRoutes")
const userRoute=require("./userRoute")
const likeRoute=require("./likeRoute")



const router=express.Router();


router.use("/post",postRoute)
router.use("/user",userRoute)
router.use("/like",likeRoute)




module.exports=router;
