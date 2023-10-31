const dotenv=require("dotenv");

dotenv.config();


module.exports={
   PORT:process.env.PORT,
   JWT_SECRET_KEY:process.env.JWT_SECRET_KEY,
   EXPIRES_IN:process.env.EXPIRES_IN
}