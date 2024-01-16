/* eslint-disable no-unused-vars */
const BASE_URL = "http://localhost:9090/api/";

export const fetchers = {
  getTasks: async () => {
    const result = await fetch(`${String(BASE_URL).trim()}tasks`);
    const data = await result.json();
    return data;
  },

  createTask: async (user_id, task) => {
    const result = await fetch(`${String(BASE_URL).trim()}create-task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, task }),
    });

    const data = await result.json();
    return data;
  },

  deleteTask: async (taskId) => {
    try {
      const result = await fetch(
        `${String(BASE_URL).trim()}/delete-task/${taskId}`,
        {
          method: "DELETE", // Assuming you are using DELETE method for deleting the task
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }

      const data = await result.json();
      return data;
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error; // Throw the error to be caught by the calling code
    }
  },

  Login: async (email, password) => {
    const result = await fetch(`${String(BASE_URL).trim()}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await result.json();
    return data;
  },
  SignUp: async (email, password, user_name) => {
    const result = await fetch(`${String(BASE_URL).trim()}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, user_name }),
    });

    const data = await result.json();
    return data;
  },

  getUserRooms: async (user_id) => {
    const result = await fetch(`${String(BASE_URL).trim()}get-user-rooms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id }),
    });

    const data = await result.json();
    return data;
  },
  getUserEnrolledRooms: async (user_id) => {
    const result = await fetch(
      `${String(BASE_URL).trim()}get-enrolled-user-rooms`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id }),
      }
    );

    const data = await result.json();
    return data;
  },

  getUserByID: async (userID) => {
    const result = await fetch(`${String(BASE_URL).trim()}get-user-by-id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID }),
    });

    const data = await result.json();
    return data;
  },
  joinNewRoom: async (user_id, room_code) => {
    const result = await fetch(`${String(BASE_URL).trim()}enroll`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, room_code }),
    });

    const data = await result.json();
    return data;
  },
  getRoomByID: async (roomID) => {
    const result = await fetch(`${String(BASE_URL).trim()}/room/${roomID}`);
    const data = await result.json();
    return data;
  },

  CreateRoom: async (room_name, user_id) => {
    const result = await fetch(`${String(BASE_URL).trim()}room`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, room_name }),
    });

    const data = await result.json();
    return data;
  },
};
