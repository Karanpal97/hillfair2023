const Confession = require("../models/confession");

const getConfessions = async (req, res) => {
    try {
        const conf_data = await Confession.find();

        res.status(200).send(conf_data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
const getConfessionsByName = async (req, res) => {
    try {
        const name = req.params.name;
        const conf_data = await Confession.find({
            dedicated_to: name,
        });

        res.status(200).send(conf_data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const postConfession = async (req, res) => {
    const data = req.body;

    try {
        const newConf = await Confession.create(data);
        await newConf.populate("user");
        res.status(201).send(newConf);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const deleteConfession = async (req, res) => {
    const delId = req.params.id;
    console.log(delId, "the id");

    try {
        // Check if the confession exists
        const confession = await Confession.findById(delId);
        if (!confession) {
            return res.status(404).send("Confession not found");
        }

        // Increment the deletion counter
        confession.deleteCount = (confession.deleteCount || 0) + 1;

        // Check if the confession has been requested for deletion three times
        if (confession.deleteCount >= 3) {
            // If it has been requested three times, then delete the confession
            await Confession.findByIdAndDelete(delId);
            return res.status(200).send("Confession deleted");
        } else {
            // If it hasn't been requested three times, save the updated confession
            await confession.save();
            return res
                .status(200)
                .send(
                    "Delete request recorded. Needs 3 requests for deletion."
                );
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getConfessions,
    postConfession,
    deleteConfession,
    getConfessionsByName,
};
