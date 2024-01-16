const Tsk = require("../model/Task");

const taskController = {
  getUserTasks: async (req, res) => {

    try {
      const result = await Tsk.getAllTasks();

      if (result.length) {
        res.json({ success: true, tasks: result });
      } else {
        res.json({ success: false, tasks: [] });
      }
    } catch (error) {
      console.error("Error creating task:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },

  createTask: async (req, res) => {
    const { user_id, task } = req.body;

    try {
      const taskId = await Tsk.createTask(user_id, task);
      res.json(taskId);
    } catch (error) {
      console.error("Error creating task:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  deleteTask: async (req, res) => {
    const taskId = req.params.taskId; // Assuming taskId is part of the URL

    try {
      const result = await Tsk.deleteTask(taskId);

      if (result) {
        res.json({ success: true, message: "Task deleted successfully" });
      } else {
        res.status(404).json({ success: false, message: "Task not found" });
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};

module.exports = taskController;
