const commentRepository = require("../repository/comment_Repository");
const AppError = require("../utils/errors/app-error");

const commentRepo = new commentRepository();

async function createComment(data) {
    try {
        const comment = commentRepo.create(data);
        return comment;
    } catch (error) {
        console.log(error);
        throw new AppError(
            "cannot create the new user object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
async function getComment(Confession) {
    try {
        const comment = commentRepo.getConfesstion(Confession);
        return comment;
    } catch (error) {
        console.log(error);
        throw new AppError(
            "cannot create the new user object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
module.exports = { createComment, getComment };
