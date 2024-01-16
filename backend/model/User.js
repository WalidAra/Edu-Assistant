const connectToDatabase = require("../config/db");
const { ObjectId } = require("mongodb");

const User = {
  login: async (email, password) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("user");
    try {
      const result = await collection.find({email:email , password:password}).toArray();
      return result;
    } catch (error) {
      console.error("Could not login user:", error);
    } 
  },

  signup: async (email, password, user_name) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("user");
    try {
      const result = await collection.insertOne({ email, password, user_name });
      console.log("User signed up successfully:", result.insertedId);
      return result.insertedId;
    } catch (error) {
      console.error("Could not sign up user:", error);
    } 
  },

  getUserByID: async (userID) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("user");
     try {
       const result = await collection
         .find({ _id: new ObjectId(userID) })
         .toArray();
       return result;
     } catch (error) {
       console.error("Could not get user by id:", error);
       throw error; 
     }
  },

  deleteUser: async (userID) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("user");
    try {
      const result = await collection.deleteOne({ _id: new ObjectId(userID) });
      console.log("User deleted successfully:", result.deletedCount);
      return result.deletedCount > 0; 
    } catch (error) {
      console.error("Could not delete user:", error);
    } finally {
      await mongoClient.close();
    }
  },
};

module.exports = User;
