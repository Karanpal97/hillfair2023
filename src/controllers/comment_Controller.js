const { StatusCodes } = require("http-status-codes");
const commentService = require("../services/comment_service");

const { ErrorResponce, SuccessResponce } = require("../utils");

async function CommentController(req, res) {
    try {
        const response = await commentService.createComment({
            user: req.body.user,
            onModel: req.body.onModel,
            commentable: req.body.commentable,
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
async function getCommentController(req, res) {
    try {
        const response = await commentService.getComment(req.params.id);
        SuccessResponce.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponce);
    } catch (error) {
        console.log(error);
        ErrorResponce.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponce);
    }
}

module.exports = { CommentController, getCommentController };
