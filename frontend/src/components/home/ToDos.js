/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ToDoContainer from "./to do/ToDoContainer";
import { fetchers } from "../../lib/fetch";

const ToDos = () => {
  const [list, setList] = useState([]);

  const fetch = async () => {
    const result = await fetchers.getTasks();
    if (result.success) {
      setList(result.tasks);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="flex-1 w-full h-full flex flex-col gap-6 py-6">
      <h1 className="font-semibold text-3xl">To Do List</h1>

      <div className="w-4/5 flex flex-col gap-3">
        {list.map((item) => {
          return <ToDoContainer />;
        })}
      </div>
    </div>
  );
};

export default ToDos;
