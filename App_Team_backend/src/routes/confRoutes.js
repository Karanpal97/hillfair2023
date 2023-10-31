const express = require("express");
const router = express.Router();

const {getConfessions, postConfession, deleteConfession} = require("../controllers/confession_controller")

router.get("/allConfessions", getConfessions);
router.post("/postConfession", postConfession);
router.delete("/deleteConfession/:id", deleteConfession);

module.exports = router;