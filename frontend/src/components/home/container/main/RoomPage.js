/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const RoomPage = ({ _id }) => {
  const [room, setRoom] = useState({});

  const fetchData = async () => {};

  useEffect(() => {
    fetchData();
  }, []);

  return <main className="flex-1 w-full flex-col test">  {_id} </main>;
};

export default RoomPage;
