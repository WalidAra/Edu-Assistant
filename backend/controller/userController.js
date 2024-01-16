const User = require("../model/User");

const userController = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.login(email, password);

      if (user.length > 0) {
        res.status(200).json({ success: true, user });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  signupUser: async (req, res) => {
    const { email, password, user_name } = req.body;

    try {
      const userId = await User.signup(email, password, user_name);
      res.status(201).json({ success: true, userId });
    } catch (error) {
      console.error("Error signing up user:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  getUserById: async (req, res) => {
    const { userID } = req.body;

    if (!userID) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid user ID" });
    }

    try {
      const user = await User.getUserByID(userID);

      if (user.length > 0) {
        return res.status(200).json({ success: true, user });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
    } catch (error) {
      console.error("Error getting user by ID:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  deleteUserById: async (req, res) => {
    const { userID } = req.params;

    try {
      const deleted = await User.deleteUser(userID);

      if (deleted) {
        res
          .status(200)
          .json({ success: true, message: "User deleted successfully" });
      } else {
        res.status(404).json({ success: false, message: "User not found" });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};

module.exports = userController;
