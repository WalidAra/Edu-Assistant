/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { fetchers } from "../../../lib/fetch";

const ToDoContainer = ({ task, user_id, _id }) => {
  const [isChecked, setIsChecked] = useState();
  const [User, setUser] = useState({});

  const fetchData = async () => {
    const result = await fetchers.getUserByID(user_id);
    if (result.success) {
      setUser(result.user[0]);
    }
  };

  const deleteData = async () => {
    await fetchers.deleteTask(_id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex items-center gap-4">
      <div id="checklist">
        <input
          checked={isChecked}
          onChange={() => {
            setIsChecked((prev) => !prev);
            deleteData();
          }}
          value="1"
          name="r"
          type="checkbox"
          id="01"
        />
        <label for="01"> {task} </label>
      </div>

      <p> {User.user_name} </p>
    </div>
  );
};

export default ToDoContainer;
