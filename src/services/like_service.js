const LikeRepository = require("../repository/like_repository.js");
const PostRepository = require("../repository/post_Repository.js");

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.postRepository = new PostRepository();
    }

    async toggleLike(modelId, modelType, userId) {
        let likeable;
        if (modelType === "Post") {
            likeable = await this.postRepository.getPost(modelId);
        } else if (modelType === "Comment") {
            //Todo
        } else {
            console.log("wrong modeltype");
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId,
        });
        console.log("alreadypresent", exists);
        let isAdded;
        if (exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            this.likeRepository.destroy(exists.id);
            isAdded = false;
        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId,
            });
            likeable.likes.push(newLike);
            await likeable.save();
            isAdded = true;
        }
        console.log(isAdded);
        return isAdded;
    }
}

module.exports = LikeService;
