const { StatusCodes } = require("http-status-codes");
const { userService } = require("../services");

const { SuccessResponce, ErrorResponce } = require("../utils");

// Request for the signup of the user
async function signUp(req, res) {
    try {
        const user = await userService.create({
            bio: req.body.bio,

            name: req.body.name,
            rollNo: req.body.rollNo,
            instagram: req.body.instagram,
            linkedin: req.body.linkedin,
            image: req.body.image,
        });
        console.log(user);
        SuccessResponce.data = user;
        return res.status(StatusCodes.CREATED).json(SuccessResponce);
    } catch (error) {
        console.log(error);
        ErrorResponce.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponce);
    }
}

//Request for the signIn of the user
async function signIn(req, res) {
    try {
        const user = await userService.signin({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            rollNo: req.body.rollNo,
        });
        SuccessResponce.data = user;
        return res.status(StatusCodes.CREATED).json(SuccessResponce);
    } catch (error) {
        console.log(error);
        ErrorResponce.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponce);
    }
}

async function RollNo(req, res) {
    try {
        const user = await userService.rollNo(req.params.rollNo);
        console.log(user);
        SuccessResponce.data = user;
        return res.status(StatusCodes.CREATED).json(SuccessResponce);
    } catch (error) {
        console.log(error);
        ErrorResponce.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponce);
    }
}

async function findUser(req, res) {
    try {
        const user = await userService.userById(req.params.userId);
        console.log(user);
        SuccessResponce.data = user;
        return res.status(StatusCodes.CREATED).json(SuccessResponce);
    } catch (error) {
        console.log(error);
        ErrorResponce.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponce);
    }
}
async function updateUserInfo(req, res) {
    try {
        const user = await userService.updateUserInfo(req.body.id, req.body);
        SuccessResponce.data = user;
        return res.status(StatusCodes.CREATED).json(SuccessResponce);
    } catch (error) {
        console.log(error);
        ErrorResponce.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponce);
    }
}

module.exports = { signUp, signIn, RollNo, findUser, updateUserInfo };
