const taskModel = require("../models/task");

const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await taskModel.find({});
  res.status(200).json({ success: true, tasks });
});

const addTask =asyncWrapper( async (req, res) => {
    const task = await taskModel.create(req.body);
    res.status(201).json({ success: true, task });
});

const getTask = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const task = await taskModel.findOne({ _id: id });
    if (!task) {
      return res.status(404).json({ msg: "task not found " });
    res.status(200).json({ success: true, task });
    }
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const task = await taskModel.findOneAndDelete({ _id: id });
    if (!task) {
      return res.status(404).json({ msg: "task not found " });
    }
    res.status(200).json({ success: true, task });

});

const updateTask = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const task = await taskModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: "task not found " });
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
