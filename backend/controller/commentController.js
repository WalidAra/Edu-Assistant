const Comment = require("../model/Comment");

const commentController = {
  createComment: async (req, res) => {
    const { user_id, comment_content, post_id } = req.body;

    try {
      const commentId = await Comment.createComment(
        user_id,
        comment_content,
        post_id
      );
      res.status(201).json({ success: true, commentId });
    } catch (error) {
      console.error("Error creating comment:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  getCommentById: async (req, res) => {
    const { commentID } = req.params;

    try {
      const comment = await Comment.getCommentById(commentID);

      if (comment.length > 0) {
        res.status(200).json({ success: true, comment });
      } else {
        res.status(404).json({ success: false, message: "Comment not found" });
      }
    } catch (error) {
      console.error("Error getting comment by ID:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  updateComment: async (req, res) => {
    const { commentID } = req.params;
    const { updatedContent } = req.body;

    try {
      const updated = await Comment.updateComment(commentID, updatedContent);

      if (updated) {
        res
          .status(200)
          .json({ success: true, message: "Comment updated successfully" });
      } else {
        res.status(404).json({ success: false, message: "Comment not found" });
      }
    } catch (error) {
      console.error("Error updating comment:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  deleteCommentById: async (req, res) => {
    const { commentID } = req.params;

    try {
      const deleted = await Comment.deleteComment(commentID);

      if (deleted) {
        res
          .status(200)
          .json({ success: true, message: "Comment deleted successfully" });
      } else {
        res.status(404).json({ success: false, message: "Comment not found" });
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};

module.exports = commentController;
