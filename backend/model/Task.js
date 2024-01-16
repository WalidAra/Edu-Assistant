const connectToDatabase = require("../config/db");
const { ObjectId } = require("mongodb");

const Tsk = {
  getAllTasks: async () => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("task");
    try {
      const result = await collection.find({}).toArray();
      return result;
    } catch (error) {}
    console.error("Error creating task:", error);
    throw error; // Throw the error to be caught by the caller
  },

  createTask: async (user_id, task) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("task");

    try {
      // Assuming 'task' is an object with properties like 'title', 'description', etc.
      const result = await collection.insertOne({
        user_id: ObjectId(user_id),
        task: task,
      });

      if (result.insertedId) {
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error("Error creating task:", error);
      throw error; // Throw the error to be caught by the caller
    } finally {
      await mongoClient.close();
    }
  },

  deleteTask: async (taskId) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("task");

    try {
      const result = await collection.deleteOne({
        _id: ObjectId(taskId),
      });

      if (result.deletedCount === 1) {
        return true; // Task deleted successfully
      } else {
        return false; // Task not found or not deleted
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error; // Throw the error to be caught by the caller
    } finally {
      await mongoClient.close();
    }
  },
};

module.exports = Tsk;
