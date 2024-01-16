/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { fetchers } from "../../../../lib/fetch";

export default function SideRoomCard({ _id, room_name, user_id, bgURL }) {
  const [user, setUser] = useState({});
  const fetchData = async () => {
    const result = await fetchers.getUserByID(user_id);
    if (result.success) {
      setUser(result.user[0]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Link to={`/home/${_id}`}>
      <div className="w-full cursor-pointer rounded-md duration-200 hover:bg-gray-200 text-slate-950 py-2 px-4 flex items-center gap-3">
        <Avatar size="sm" name={`${room_name}`} />

        <div className="flex flex-col font-medium text-sm whitespace-nowrap">
          <h3> {room_name} </h3>
          <p className="text-xs"> {user.user_name} </p>
        </div>
      </div>
    </Link>
  );
}
