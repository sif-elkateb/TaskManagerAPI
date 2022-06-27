const taskModel=require('../models/task');
const getAllTasks= async (req,res)=>{
    try{
        const tasks=await taskModel.find({});
        res.status(200).json(tasks);

    }
    catch(err){
        res.status(500).json({msg:err});
        console.log(err);
        
    }
}

const addTask=async(req,res)=>{

    try{

    const task=await taskModel.create(req.body);

    res.status(201).json(task)
    }
    catch(err){
        res.status(500).json({msg:err});
        console.log(err);
    }

}

const getTask=async(req,res)=>{
    try{
        const {id}=req.params;
        const task=await taskModel.findOne({_id:id});
        if(!task){
            return res.status(404).json({msg:'task not found'});
        }
        res.status(200).json(task);

    }
    catch(err){
        res.status(500).json({msg:err});
        console.log(err);
    }



}

const deleteTask=async(req,res)=>{
    try{
        const {id}=req.params;
        const task=await taskModel.findOneAndDelete({_id:id});
        if(!task){
            return res.status(404).json({msg:'not found '});
        }
        res.status(200).json({success:true,deletion:'finished'})

    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:err});
    }
}

const updateTask=async(req,res)=>{
    try{
        const {id}=req.params;
        const task=await taskModel.findOneAndUpdate({_id:id},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:'not found'});
        }
        res.status(200).json(task);

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({msg:err});
    }
}


module.exports={
    getAllTasks,
    getTask,
    addTask,
    deleteTask,
    updateTask
}