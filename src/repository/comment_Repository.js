const { Comment } = require("../models/comment");
const crudRepository = require("./crud_repository");

class commentRepository extends crudRepository {
    constructor() {
        super(Comment);
    }
    //  async getUserByEmail(email) {
    //      const response = await Users2.findOne({ email: email });
    //      return response;
    //  }

    //  async getUserByRollNo(rollNo) {
    //      const response = await Users2.findOne({ rollNo: rollNo });
    //      return response;
    //  }
    async getConfesstion(Confession) {
        try {
            const comment = await Comment.find({
                onModel: Confession,
            });
            return comment;
        } catch (error) {
            console.log(error);
            throw new AppError(
                "cannot create the new user object",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = commentRepository;
