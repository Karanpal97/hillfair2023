const { postService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponce, ErrorResponce } = require("../utils");

async function createPost(req, res) {
    try {
        const postdata = {
            content: req.body.content,
            likes: req.body.likes,
            comment: req.body.comment,
            User: req.body.User,
        };
        // const response = await postService.create(postdata, req.User);
        const response = await postService.create(postdata);

        SuccessResponce.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponce);
    } catch (error) {
        console.log(error);
        ErrorResponce.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponce);
    }
}

async function find(req, res) {
    try {
        const responce = await postService.findPost();

        SuccessResponce.data = responce;
        return res.status(StatusCodes.OK).json(SuccessResponce);
    } catch (error) {
        console.log(error);

        ErrorResponce.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponce);
    }
}
async function remove(req, res) {
    try {
        const responce = await postService.deletePost(req.params.id);
        console.log(responce);
        SuccessResponce.data = responce;
        return res.status(StatusCodes.OK).json(SuccessResponce);
    } catch (error) {
        console.log(error);
        ErrorResponce.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponce);
    }
}
async function postByHastag(req, res) {
    try {
        const responce = await postService.findpostWithHastag(
            req.params.hashtag
        );
        console.log(responce);
        SuccessResponce.data = responce;
        return res.status(StatusCodes.OK).json(SuccessResponce);
    } catch (error) {
        console.log(error);
        ErrorResponce.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponce);
    }
}

module.exports = { createPost, find, remove, postByHastag };
