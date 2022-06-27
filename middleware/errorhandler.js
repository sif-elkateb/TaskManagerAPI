
const {customErrorHandler}=require('../errors/customErrorHandler');
const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof customErrorHandler){
    res.status(err.status).json({msg:err.message})

    }
    res.status(500).json({msg:err});
}

module.exports=errorHandlerMiddleware;