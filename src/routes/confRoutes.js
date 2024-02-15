const express = require("express");
const router = express.Router();

const {
    getConfessions,
    postConfession,
    deleteConfession,
    getConfessionsByName,
} = require("../controllers/confession_controller");
const { getConfession } = require("../controllers/message_controller");

const { postMessage } = require("../controllers/message_controller");

router.post("/postMessage", postMessage);
router.get("/get/allConfessions", getConfessions);
router.get("/allConfessions", getConfession);
router.get("/getByName/:name", getConfessionsByName);

router.post("/postConfession", postConfession);
router.delete("/deleteConfession/:id", deleteConfession);

module.exports = router;
