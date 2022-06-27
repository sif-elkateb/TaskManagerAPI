

const notFound=(req,res,next)=>{
    res.status(404).send('<h1>the resource you are looking for is not found </h1>')
}


module.exports=notFound;