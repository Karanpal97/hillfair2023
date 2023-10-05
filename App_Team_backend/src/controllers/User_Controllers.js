const { StatusCodes }=require("http-status-codes");
const {userService}=require("../services")


const {SuccessResponce,ErrorResponce}=require("../utils");

// Request for the signup of the user
async function signUp(req,res){
    try{
const user=await userService.create({
    email:req.body.email,
    password:req.body.password
})
console.log(user)
SuccessResponce.data=user;
return res
.status(StatusCodes.CREATED)
.json(SuccessResponce);
}

catch(error){
     console.log(error)
     ErrorResponce.error=error;
     return res
     .status(StatusCodes.BAD_REQUEST)
     .json(ErrorResponce)
     
    }
}

//Request for the signIn of the user
async function signIn(req,res){
    try{
const user=await userService.signin({
    email:req.body.email,
    password:req.body.password
})
SuccessResponce.data=user;
return res
.status(StatusCodes.CREATED)
.json(SuccessResponce)
}

catch(error){
     console.log(error)
     ErrorResponce.error=error;
     return res
     .status(StatusCodes.BAD_REQUEST)
     .json(ErrorResponce)
     
    }
}

module.exports= {signUp,signIn}