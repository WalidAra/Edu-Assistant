const express = require("express");
const userController = require("../controller/userController");
const roomController = require("../controller/roomController");
const postController = require("../controller/postController");
const commentController = require("../controller/commentController");
const taskController = require("../controller/taskController");

const router = express.Router();

// User routes
router.post("/login", userController.loginUser);
router.post("/signup", userController.signupUser);
router.post("/get-user-by-id", userController.getUserById);
// router.delete("/user/:userID", userController.deleteUserById);

// Room routes
router.post("/room", roomController.createRoom);
router.get("/room/:roomID", roomController.getRoomById);
router.put("/room/:roomID", roomController.updateRoom);
router.delete("/room/:roomID", roomController.deleteRoomById);
router.post("/get-user-rooms", roomController.getUserRooms);
router.post("/get-enrolled-user-rooms", roomController.getUserEnrolledRooms);
router.post("/enroll", roomController.enrollRoom);

// Post routes
router.post("/post", postController.createPost);
router.get("/post/:postID", postController.getPostById);
router.put("/post/:postID", postController.updatePost);
router.delete("/post/:postID", postController.deletePostById);

// Comment routes
router.post("/comment", commentController.createComment);
router.get("/comment/:commentID", commentController.getCommentById);
router.put("/comment/:commentID", commentController.updateComment);
router.delete("/comment/:commentID", commentController.deleteCommentById);

// task routes

router.post("/create-task" ,taskController.createTask );
router.delete("/delete-task" ,taskController.deleteTask );
router.get("/tasks" ,taskController.getUserTasks );

module.exports = router;
