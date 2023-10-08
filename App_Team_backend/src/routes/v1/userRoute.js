const express=require("express");


const { InfoController } = require('../../controllers');
const {UserController}=require('../../controllers');
const { AuthRequestMiddlewares } = require('../../middleware');



const router=express.Router();

router.get('/info', AuthRequestMiddlewares.checkAuth, InfoController.info);
router.post('/signUp' ,UserController.signUp);
router.post('/signIn' ,AuthRequestMiddlewares.validateAuthRequest,UserController.signIn);
router.get('/:rollNo',UserController.RollNo)
module.exports=router
