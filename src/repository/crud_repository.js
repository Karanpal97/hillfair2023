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
        const query = this.model.find();

        // Use populate on the query object
        query.populate([
            {
                path: "likes",
                populate: { path: "user", model: "Users2" }, // Assuming 'User' is the name of your User model
            },"User"
        ]
           
        );
        // Execute the query
        const result = await query.exec();

        return result;
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
