const Post = require("../model/Post");

const postController = {
  createPost: async (req, res) => {
    const { user_id, post_content, room_id } = req.body;

    try {
      const postId = await Post.createPost(user_id, post_content, room_id);
      res.status(201).json({ success: true, postId });
    } catch (error) {
      console.error("Error creating post:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  getPostById: async (req, res) => {
    const { postID } = req.params;

    try {
      const post = await Post.getPostById(postID);

      if (post.length > 0) {
        res.status(200).json({ success: true, post });
      } else {
        res.status(404).json({ success: false, message: "Post not found" });
      }
    } catch (error) {
      console.error("Error getting post by ID:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  updatePost: async (req, res) => {
    const { postID } = req.params;
    const { updatedContent } = req.body;

    try {
      const updated = await Post.updatePost(postID, updatedContent);

      if (updated) {
        res
          .status(200)
          .json({ success: true, message: "Post updated successfully" });
      } else {
        res.status(404).json({ success: false, message: "Post not found" });
      }
    } catch (error) {
      console.error("Error updating post:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  deletePostById: async (req, res) => {
    const { postID } = req.params;

    try {
      const deleted = await Post.deletePost(postID);

      if (deleted) {
        res
          .status(200)
          .json({ success: true, message: "Post deleted successfully" });
      } else {
        res.status(404).json({ success: false, message: "Post not found" });
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};

module.exports = postController;
