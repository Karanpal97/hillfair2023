const { StatusCodes } = require("http-status-codes");
const  commentService  = require("../services/comment_service");

const { ErrorResponce, SuccessResponce } = require("../utils");

async function CommentController(req, res) {
    try {
        const response = await commentService.createComment({
            user: req.body.user,
            modelType: req.body.modelType,
            modelId: req.body.modelId,
            content: req.body.content,
        });
        SuccessResponce.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponce);
    } catch (error) {
        console.log(error);
        ErrorResponce.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponce);
    }
}

module.exports = CommentController;
