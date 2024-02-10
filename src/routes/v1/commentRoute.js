const express = require("express");

const router = express.Router();

const {
    CommentController,
    getCommentController,
} = require("../../controllers/comment_Controller");
// const getCommentController = require("../../controllers/comment_Controller");

router.post("/comment", CommentController);
router.get("/:Confession", getCommentController);

module.exports = router;
