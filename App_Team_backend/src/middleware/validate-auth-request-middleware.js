const { StatusCodes } = require('http-status-codes');

const { ErrorResponce } = require('../utils');
const AppError = require('../utils/errors/app-error');
const  {userService}  = require('../services');



function validateAuthRequest(req, res, next) {
    if(!req.body.email) {
        ErrorResponce.message = 'Something went wrong while authenticating user';
        ErrorResponce.error = new AppError(['Email was not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponce);
    }
    if(!req.body.password) {
        ErrorResponce.message = 'Something went wrong while authenticating user';
        ErrorResponce.error = new AppError(['password was not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponce);
    }
    next();
}



async function checkAuth(req,res,next){
    try{
        const response= await userService.isAuthentication(req.headers['x-access-token']);
        console.log(response)
    if(response){
        req.user=response;
        next()
    }
   }
    catch(error){
        console.log(error)
        return res
        .status(error.statusCode)
        .json(error);
    }
}
    

module.exports=  { validateAuthRequest, checkAuth}