const connectToDatabase = require("../config/db");
const { ObjectId } = require("mongodb");

const Room = {
  enrollRoom: async (code, user_id, prev) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const user = db.collection("user");
    const room = db.collection("room");

    try {
      // Find the room with the given code
      const roomData = await room.findOne({ code: code });

      if (!roomData) {
        console.error("Room not found");
        return false; // Return false if room not found
      }

      const room_id = roomData._id;

      // Update user document to add the enrolled room
      const result = await user.updateOne(
        { _id: new ObjectId(user_id) },
        { $addToSet: { enroll: room_id } } // Use $addToSet to add room_id to enroll array, avoiding duplicates
      );

      if (result.matchedCount === 1 && result.modifiedCount === 1) {
        return true; // Return true if the update was successful
      } else {
        console.error("Failed to enroll user in the room");
        return false; // Return false if the update was not successful
      }
    } catch (error) {
      console.error("Could not enroll user in the room:", error);
      return false; // Return false in case of an error
    } 
  },

  getUserEnrolledRooms: async (user_id) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("user");
    try {
      const result = await collection.findOne({ _id: new ObjectId(user_id) });
      return result.enroll;
    } catch (error) {
      console.error("Could not get user enrolled rooms :", error);
    }
  },
  getUserRooms: async (user_id) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("room");
    try {
      const result = collection
        .find({ user_id: new ObjectId(user_id) })
        .toArray();
      return result;
    } catch (error) {
      console.error("Could not get user rooms :", error);
    }
  },

  createRoom: async (room_name, user_id) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("room");
    try {
      const result = await collection.insertOne({
        room_name,
        user_id: new ObjectId(user_id),
      });
      console.log("Room created successfully:", result.insertedId);
      return result.insertedId;
    } catch (error) {
      console.error("Could not create room:", error);
    } finally {
      await mongoClient.close();
    }
  },

  getRoomById: async (roomID) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("room");
    try {
      const result = await collection
        .find({ _id: new ObjectId(roomID) })
        .toArray();
      return result;
    } catch (error) {
      console.error("Could not get room by id:", error);
    } finally {
      await mongoClient.close();
    }
  },

  updateRoom: async (roomID, updatedName) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("room");
    try {
      const result = await collection.updateOne(
        { _id: new ObjectId(roomID) },
        { $set: { room_name: updatedName } }
      );
      console.log("Room updated successfully:", result.modifiedCount);
      return result.modifiedCount > 0;
    } catch (error) {
      console.error("Could not update room:", error);
    } finally {
      await mongoClient.close();
    }
  },

  deleteRoom: async (roomID) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("room");
    try {
      const result = await collection.deleteOne({ _id: new ObjectId(roomID) });
      console.log("Room deleted successfully:", result.deletedCount);
      return result.deletedCount > 0;
    } catch (error) {
      console.error("Could not delete room:", error);
    } finally {
      await mongoClient.close();
    }
  },
};

module.exports = Room;
