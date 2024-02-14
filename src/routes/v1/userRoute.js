const express = require("express");

const { InfoController } = require("../../controllers");
const { UserController } = require("../../controllers");
const { AuthRequestMiddlewares } = require("../../middleware");

const router = express.Router();

router.get("/info", AuthRequestMiddlewares.checkAuth, InfoController.info);
router.post("/", UserController.signUp);
router.post(
    "/signIn",
    AuthRequestMiddlewares.validateAuthRequest,
    UserController.signIn
);
router.patch("/update", UserController.updateUserInfo);
router.get("/:rollNo", UserController.RollNo);
router.get("/id/user/:userId", UserController.findUser);
module.exports = router;
