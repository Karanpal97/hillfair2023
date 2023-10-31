const Confession = require("../models/confession");

const getConfessions = async (req, res) =>{
        try {
            const conf_data = await Confession.find({},"conf_message");
            res.status(200).send(conf_data);
        }
         catch (error) {
            res.status(500).send(error);
        }
}

    const postConfession = async (req, res) =>{
        const data = req.body;

        try {
            const newConf = await Confession(data)
            await newConf.populate("user");
            res.status(201).send(newConf);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }


const deleteConfession = async (req, res) =>{
     const delId = req.params.id;

     try {
        const delConf = await Confession.findByIdAndDelete(delId);
        await delConf.populate("user");
        res.status(200).send(delConf)
     } catch (error) {
        res.status(500).send(error);
     }
}

module.exports = {getConfessions, postConfession, deleteConfession}