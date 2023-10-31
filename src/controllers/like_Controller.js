
const {LikeService} =require("../services")

const likeService = new LikeService();



 const toggleLike = async ( req,res ) => {
   
   try {
        const data = req.body;
        const response = await likeService.toggleLike(data.modelId,data.modelType,data.user)
        console.log(response)
        return res.status(201).json({
            success:true,
            message:"Successfully toggled a Like",
            data: response,
            err:{}
        });
   } catch (error) {
      console.log(error)
    return res.status(500).json({
        success:false,
        message:"Error Encountered in toggleing a Like",
        data: {},
        err:error
    });
   }
}

module.exports=toggleLike


