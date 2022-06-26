const getAllTasks=(req,res)=>{
    res.send('all tasks');
}

const addTask=(req,res)=>{
    const {id}=req.body;
    console.log(id);
    res.json({id,Completed:'true'});

}

const getTask=(req,res)=>{
    const {id}=req.params;
    res.json({
        id,
        success:'true'
    })
}

const deleteTask=(req,res)=>{
    res.send('deleted the task')
}

const updateTask=(req,res)=>{
    const {id}=req.params;
    res.json({
        id,
        success:'true'
    })
}


module.exports={
    getAllTasks,
    getTask,
    addTask,
    deleteTask,
    updateTask
}