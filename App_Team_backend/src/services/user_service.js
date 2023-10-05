const {StatusCodes}=require("http-status-codes")
const userRepository =require('../repository/user-repository')
const AppError=require("../utils/errors/app-error")
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken')
const ServerConfig =require('../config/ServerConfig')
console.log(ServerConfig)

const UserRepo =  new userRepository();


// Sign Up
async function create(data){
    try{
        const user= await UserRepo.create(data);
        return user;
    }
    catch(error){
        console.log(error)
        throw new AppError("cannot create the new user object", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


//Sign In
async function signin(data){
    try{
   const user = await UserRepo.getUserByEmail(data.email);
   if(!user){
    throw new AppError("User with the given email was not found",StatusCodes.NOT_FOUND)

   }
    
    const matchedPassword= checkPassword(data.password, user.password)
    if(!matchedPassword){
        throw new AppError("Password is invalid",StatusCodes.BAD_REQUEST)
    }
   return createToken({id:user.id, email:user.email});
}

catch(error){
console.log(error);
throw error;
    }
}

function checkPassword(plainPassword,encryptedPassword){
    const response= bcrypt.compareSync(plainPassword,encryptedPassword)
    return response;
}


 // Authentication
function isAuthentication(token){
    try{
        if (!token){
            throw new AppError('missing JWT token', StatusCodes.BAD_REQUEST);}
      const user= verifyToken(token)
     return user.id;
}
    catch(error){
        if (error instanceof AppError) throw error;
        if(error.name=='JsonWebTokenError'){
            throw new AppError('invalid jwt token', StatusCodes.BAD_REQUEST);
        }
        console.log(error);

    throw new AppError('something went wrong', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

// this is the function to create the JWT Token
function createToken(input){
const response= jwt.sign(input,ServerConfig.JWT_SECRET_KEY,{expiresIn:ServerConfig.EXPIRES_IN})
return response;
}

// this function is to verify the JWT token
function verifyToken(token){
    const response= jwt.verify(token,ServerConfig.JWT_SECRET_KEY);
    return response;}



module.exports={create,signin,isAuthentication}

