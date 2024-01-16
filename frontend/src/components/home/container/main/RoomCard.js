/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { fetchers } from "../../../../lib/fetch";

export default function RoomCard({ _id, room_name, user_id, bgURL }) {
  const [user, setUser] = useState({});

  const fetchUserData = async () => {
    const result = await fetchers.getUserByID(user_id);
    if (result.success) {
      setUser(result.user[0]);
    }
  };

  useEffect(() => {
    console.log(user_id);
    if (user_id) {
      fetchUserData();
    }
  }, []);

  return (
    <div className="w-72 flex flex-col h-52 rounded-lg border border-solid text-white border-slate-300 overflow-hidden duration-200 hover:shadow-lg">
      <Link className="h-1/2" to={`/home/${_id}`}>
        <div
          className={`h-full w-full gap-3 p-4 flex flex-col ${bgURL
            .split(" ")
            .join(" ")}`}
        >
          <h2 className="text-lg uppercase underline font-medium">
            {room_name}
          </h2>
          <p className="font-light">@{user.user_name}</p>
        </div>
      </Link>

      <div className="h-1/2 w-full p-4 relative flex justify-end items-end">
        <div className="absolute top-0 -translate-y-1/2 right-6 p-0.5 border-2 border-solid border-gray-300 rounded-full">
          <Avatar name={`${user.user_name}`} />
        </div>

        <div className="flex gap-3">
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="gray"
            aria-label="Done"
            fontSize="20px"
            icon={<FaTrashAlt />}
            className="hover:text-red-500"
          />
          <Link to="/toDos">
            <IconButton
              className="hover:text-blue-500"
              isRound={true}
              variant="solid"
              colorScheme="gray"
              aria-label="Done"
              fontSize="20px"
              icon={<FaListCheck />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
