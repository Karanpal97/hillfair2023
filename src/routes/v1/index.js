const express = require("express");
const postRoute = require("./postRoutes");
const userRoute = require("./userRoute");
const likeRoute = require("./likeRoute");
const commentRoute = require("./commentRoute");
const roomRoute = require("./roomRoute");

const router = express.Router();

router.use("/post", postRoute);
router.use("/user", userRoute);
router.use("/like", likeRoute);
router.use("/comment", commentRoute);
router.use("/id", roomRoute);

module.exports = router;
