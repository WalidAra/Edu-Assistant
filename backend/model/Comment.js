const  connectToDatabase  = require("../config/db");
const { ObjectId } = require("mongodb");

const Comment = {
  createComment: async (user_id, comment_content, post_id) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("comment");
    try {
      const result = await collection.insertOne({
        user_id: new ObjectId(user_id),
        comment_content,
        post_id: new ObjectId(post_id),
      });
      console.log("Comment created successfully:", result.insertedId);
      return result.insertedId;
    } catch (error) {
      console.error("Could not create comment:", error);
    } finally {
      await mongoClient.close();
    }
  },

  getCommentById: async (commentID) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("comment");
    try {
      const result = await collection
        .find({ _id: new ObjectId(commentID) })
        .toArray();
      return result;
    } catch (error) {
      console.error("Could not get comment by id:", error);
    } finally {
      await mongoClient.close();
    }
  },

  updateComment: async (commentID, updatedContent) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("comment");
    try {
      const result = await collection.updateOne(
        { _id: new ObjectId(commentID) },
        { $set: { comment_content: updatedContent } }
      );
      console.log("Comment updated successfully:", result.modifiedCount);
      return result.modifiedCount > 0; 
    } catch (error) {
      console.error("Could not update comment:", error);
    } finally {
      await mongoClient.close();
    }
  },

  deleteComment: async (commentID) => {
    const mongoClient = await connectToDatabase();
    const db = mongoClient.db("edu");
    const collection = db.collection("comment");
    try {
      const result = await collection.deleteOne({
        _id: new ObjectId(commentID),
      });
      console.log("Comment deleted successfully:", result.deletedCount);
      return result.deletedCount > 0;
    } catch (error) {
      console.error("Could not delete comment:", error);
    } finally {
      await mongoClient.close();
    }
  },


};

module.exports = Comment;
