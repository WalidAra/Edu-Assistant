const  connectToDatabase  = require("../config/db");
const { ObjectId } = require("mongodb");

const Post = {
  createPost: async (user_id, post_content, room_id) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("post");
    try {
      const result = await collection.insertOne({
        user_id: new ObjectId(user_id),
        post_content,
        room_id: new ObjectId(room_id),
      });
      console.log("Post created successfully:", result.insertedId);
      return result.insertedId;
    } catch (error) {
      console.error("Could not create post:", error);
    } finally {
      await mongoClient.close();
    }
  },

  getPostById: async (postID) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("post");
    try {
      const result = await collection
        .find({ _id: new ObjectId(postID) })
        .toArray();
      return result;
    } catch (error) {
      console.error("Could not get post by id:", error);
    } finally {
      await mongoClient.close();
    }
  },

  deletePost: async (postID) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("post");
    try {
      const result = await collection.deleteOne({ _id: new ObjectId(postID) });
      console.log("Post deleted successfully:", result.deletedCount);
      return result.deletedCount > 0; // Returns true if a post was deleted, false otherwise
    } catch (error) {
      console.error("Could not delete post:", error);
    } finally {
      await mongoClient.close();
    }
  },

  getPostsByRoomId: async (roomID) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("post");
    try {
      const result = await collection
        .find({ room_id: new ObjectId(roomID) })
        .toArray();
      return result;
    } catch (error) {
      console.error("Could not get posts by room ID:", error);
    } finally {
      await mongoClient.close();
    }
  },

  updatePost: async (postID, updatedContent) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("post");
    try {
      const result = await collection.updateOne(
        { _id: new ObjectId(postID) },
        { $set: { post_content: updatedContent } }
      );
      console.log("Post updated successfully:", result.modifiedCount);
      return result.modifiedCount > 0; // Returns true if a post was updated, false otherwise
    } catch (error) {
      console.error("Could not update post:", error);
    } finally {
      await mongoClient.close();
    }
  },

  
};

module.exports = Post;
