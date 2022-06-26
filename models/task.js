const mongoose = require('mongoose');


const taskSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide a name for the task'],
        trim:true,
        maxLength:[20,'can not enter more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})


const Task=mongoose.model('Task',taskSchema);


module.exports=Task