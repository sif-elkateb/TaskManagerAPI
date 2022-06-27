class customErrorHandler extends Error {
    constructor(message,status){
        super(message);
        this.status=status;
    }
}


const createCustomError=(message,status)=>{
    return new customErrorHandler(message,status);
}


module.exports={customErrorHandler,createCustomError};