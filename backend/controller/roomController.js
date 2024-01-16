const Room = require("../model/Room");

const roomController = {
  enrollRoom: async (req, res) => {
    const { user_id, room_code } = req.body;

    try {
      const result = await Room.enrollRoom(room_code, user_id);
      res.json(result);
    } catch (error) {
      console.error("Error getting enrolled room:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  getUserEnrolledRooms: (req, res) => {
    const { user_id } = req.body;
    try {
      const enrolledRooms = Room.getUserEnrolledRooms(user_id);
      if (enrolledRooms.length > 0) {
        res.status(201).json({ success: true, enrolledRooms });
      } else {
        res.status(404).json({
          success: false,
          message: "This user has no  enrolled rooms",
        });
      }
    } catch (error) {
      console.error("Error getting enrolled room:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  getUserRooms: async (req, res) => {
    const { user_id } = req.body;

    try {
      const rooms = await Room.getUserRooms(user_id);

      if (rooms.length > 0) {
        res.status(201).json({ success: true, rooms });
      } else {
        res
          .status(404)
          .json({ success: false, message: "This user has no rooms" });
      }
    } catch (error) {
      console.error("Error getting user rooms:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  createRoom: async (req, res) => {
    const { room_name, user_id } = req.body;

    try {
      const roomId = await Room.createRoom(room_name, user_id);
      res.status(201).json({ success: true, roomId });
    } catch (error) {
      console.error("Error creating room:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  getRoomById: async (req, res) => {
    const { roomID } = req.params;

    try {
      const room = await Room.getRoomById(roomID);

      if (room.length > 0) {
        res.status(200).json({ success: true, room });
      } else {
        res.status(404).json({ success: false, message: "Room not found" });
      }
    } catch (error) {
      console.error("Error getting room by ID:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  updateRoom: async (req, res) => {
    const { roomID } = req.params;
    const { updatedName } = req.body;

    try {
      const updated = await Room.updateRoom(roomID, updatedName);

      if (updated) {
        res
          .status(200)
          .json({ success: true, message: "Room updated successfully" });
      } else {
        res.status(404).json({ success: false, message: "Room not found" });
      }
    } catch (error) {
      console.error("Error updating room:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  deleteRoomById: async (req, res) => {
    const { roomID } = req.params;

    try {
      const deleted = await Room.deleteRoom(roomID);

      if (deleted) {
        res
          .status(200)
          .json({ success: true, message: "Room deleted successfully" });
      } else {
        res.status(404).json({ success: false, message: "Room not found" });
      }
    } catch (error) {
      console.error("Error deleting room:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};

module.exports = roomController;
