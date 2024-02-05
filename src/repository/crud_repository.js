class crudRepository {
    constructor(model) {
        this.model = model;
        console.log(this.model, "the model while api call");
    }

    async create(data) {
        try {
            const responce = await this.model.create(data);
            return responce;
        } catch (error) {
            throw error;
        }
    }

    async findOne(id) {
        const find = await this.model.findById(id);
        return find;
    }
    async destroy(id) {
        const responce = await this.model.findByIdAndDelete(id);
        return responce;
    }

    async findAll() {
        const find = await this.model.find().populate("User");
        return find;

        // try {
        //   const find = await this.model.find()
        //     .populate('User')
        //     .populate({
        //       path: 'likes',
        //       model: 'Like',
        //       populate: {
        //         path: 'User',
        //         model: 'Users2'
        //       }
        //     });
        //   return find;
        // } catch (error) {
        //   console.error(error); // Log the error for debugging purposes
        //   throw error; // Rethrow the error to handle it in the calling code
        // }
    }

    async findbyName(text) {
        try {
            const name = await this.model.find({
                text: text,
            });
            return name;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            const response = await this.model.findOneAndUpdate(
                { _id: id },
                data,
                { new: true }
            );
            return response;
        } catch (error) {
            throw error;
        }
    }

    async bulkCreate(data) {
        const responce = await this.model.insertMany(data);
        return responce;
    }
}

module.exports = crudRepository;
