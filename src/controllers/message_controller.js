const message = require("../models/message");

const getConfession = async (req, res) => {
    try {
        const conf_data = await message.find();

        res.status(200).send(conf_data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const postMessage = async (req, res) => {
    const data = req.body;

    try {
        const newConf = await message.create(data);
        await newConf.populate("user");
        res.status(201).send(newConf);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

module.exports = { getConfession, postMessage };
