import Task from "../models/Task.js";
import User from "../models/User.js";

export const createTask = async (req, res) => {
  try {
    const newTask = new Task({
      taskName: req.body.taskName,
      description: req.body.description,
      assignedUser: req.body.assignedUser,
      deadLine: req.body.deadLine,
      taskStatus: req.body.taskStatus,
    });

    const theAssignedUser = await User.findOne({
      username: newTask.assignedUser,
    });

    !theAssignedUser && res.status(404).json("This user does not exist");
    theAssignedUser.tasks.push(newTask);
    theAssignedUser.save();
    const savedTask = await newTask.save();

    res.status(200).json(savedTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task.assignedUser !== req.user.username && req.user.isAdmin === false) {
      res.status(403).json("You're not allowed to do that");
    } else {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedTask);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    const taskAssignedUser = await User.findOne({
      username: task.assignedUser,
    });
    taskAssignedUser.tasks.pull(task);
    taskAssignedUser.save();
    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json("Successfully deleted task");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getTasks = async (req, res) => {
  try {
    const completed = req.query.completed;
    const notStarted = req.query.notStarted;
    const inProgress = req.query.inProgress;
    let tasks;
    if (completed) {
      tasks = await Task.find({ taskStatus: "completed" }).sort({
        createdAt: "desc",
      });
    } else if (notStarted) {
      tasks = await Task.find({ taskStatus: "not started" }).sort({
        createdAt: "desc",
      });
    } else if (inProgress) {
      tasks = await Task.find({ taskStatus: "in progress" }).sort({
        createdAt: "desc",
      });
    } else {
      tasks = await Task.find().sort({ createdAt: "desc" });
    }
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};
