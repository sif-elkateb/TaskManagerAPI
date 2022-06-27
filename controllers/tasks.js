const taskModel = require("../models/task");

const asyncWrapper = require("../middleware/async");

const {createCustomError}=require('../errors/customErrorHandler');

const getAllTasks = asyncWrapper(async (req, res,next) => {
  const tasks = await taskModel.find({});
  res.status(200).json({ success: true, tasks });
});

const addTask =asyncWrapper( async (req, res,next) => {
    const task = await taskModel.create(req.body);
    res.status(201).json({ success: true, task });
});

const getTask = asyncWrapper(async (req, res,next) => {
    const { id } = req.params;
    const task = await taskModel.findOne({ _id: id });
    if (!task) {
        return next(createCustomError('task not found',404));
    }
    res.status(200).json({ success: true, task });
})

const deleteTask = asyncWrapper(async (req, res,next) => {
    const { id } = req.params;
    const task = await taskModel.findOneAndDelete({ _id: id });
    if (!task) {
        return next(createCustomError('task not found',404));
    }
    res.status(200).json({ success: true, task });

});

const updateTask = asyncWrapper(async (req, res,next) => {
    const { id } = req.params;
    const task = await taskModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
        return next(createCustomError('task not found',404));
    }
    res.status(200).json({ success: true, task });
});

module.exports = {
  getAllTasks,
  getTask,
  addTask,
  deleteTask,
  updateTask,
};
