const Room = require("../models/room");

const getByRollNo = async (req, res) => {
    try {
        const rollNo = req.params.rollNo;
        const id = await Room.find({
            chatWith: rollNo,
        });
        res.status(200).send(id);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const postroomId = async (req, res) => {
    const data = {
        roomId: req.body.roomId,
        chatWith: req.body.chatWith,
    };

    try {
        const room = await Room.create(data);

        res.status(201).send(room);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};
module.exports = {
    getByRollNo,
    postroomId,
};
