import React, { useEffect, useState } from "react";
import { fetchers } from "../../../lib/fetch";
import RoomCard from "./main/RoomCard";
import ShowRoomCard from "./main/ShowRoomCard";

export default function Main() {
  const [rooms, setRooms] = useState([]);
  const id = localStorage.getItem("id");

  const fetchData = async () => {
    const result = await fetchers.getUserRooms(id);

    if (result.success) {
      setRooms(result.rooms);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div className="w-full flex flex-wrap py-5 gap-5 ">
      <ShowRoomCard />

      {rooms.map((room) => (
        <RoomCard
          key={room._id}
          _id={room._id}
          room_name={room.room_name}
          user_id={room.user_id}
          bgURL={room.bgURL}
        />
      ))}

    </div>
  );
}
