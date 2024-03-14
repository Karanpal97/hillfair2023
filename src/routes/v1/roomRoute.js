const express = require("express");
const { RoomController } = require("../../controllers");

const router = express.Router();

router.post("/rooms", RoomController.postroomId);

router.get("/rooms/:rollNo", RoomController.getByRollNo);

module.exports = router;
