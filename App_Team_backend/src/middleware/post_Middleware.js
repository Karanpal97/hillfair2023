const {StatusCodes}=require('http-status-codes');

const ErrorResponse=require('../utils')


function validCreateRequest(req,res,next){
   if(!req.body.content){
      ErrorResponse.message='something went wrong  while creating post'
      ErrorResponse.error={explanation:'content not found in the oncomming request in the current form'}
      
      return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
   }
   next();
}



module.exports={validCreateRequest}