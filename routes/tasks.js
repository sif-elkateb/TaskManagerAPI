const express = require('express');

const router = express.Router();

const {getAllTasks,addTask,getTask,deleteTask,updateTask}= require('../controllers/tasks');


 

router.route('/').get(getAllTasks).post(addTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);



module.exports=router