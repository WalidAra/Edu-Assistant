/* eslint-disable no-unused-vars */

import React, { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import SideRoomCard from "./sidebar/SideRoomCard";
import { useEffect, useState } from "react";
import { fetchers } from "../../../lib/fetch";
import { FaListCheck } from "react-icons/fa6";

export default function SideBar() {
  const [rooms, setRooms] = useState([]);
  const [enrolledRooms, setEnrolledRooms] = useState([]);
  const id = localStorage.getItem("id");

  const fetchData = async () => {
    const result = await fetchers.getUserRooms(id);

    if (result.success) {
      setRooms(result.rooms);
    }
  };

  const fetchDataTwo = async () => {
    const result = await fetchers.getUserEnrolledRooms(id);
    console.log(" enrolled ", result);
    if (result.success) {
      setEnrolledRooms(result.enrolledRooms);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
      fetchDataTwo();
    }
  }, [id]);
  return (
    <div className="w-80 py-4 flex flex-col  ">
      <Link to="/home">
        <div className="py-2 px-4 flex items-center gap-3 rounded-md duration-200 hover:bg-gray-200 text-slate-950">
          <div className="text-xl">
            <AiFillHome />
          </div>

          <p className="font-medium capitalize ">home</p>
        </div>
      </Link>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                className="flex items-center gap-3"
                flex="1"
                textAlign="left"
              >
                <div className="text-xl">
                  <FaChalkboardTeacher />
                </div>

                <p className="font-medium capitalize">teaching</p>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {rooms.length > 0 ? (
              rooms.map((room) => {
                return (
                  <SideRoomCard
                    key={room._id + "sidebar"}
                    _id={room._id}
                    room_name={room.room_name}
                    user_id={room.user_id}
                    bgURL={room.bgURL}
                  />
                );
              })
            ) : (
              <p className="text-center text-sm font-medium capitalize">
                you have no rooms
              </p>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                className="flex items-center gap-3"
                as="span"
                flex="1"
                textAlign="left"
              >
                <div className="text-xl">
                  <FaUserGraduate />
                </div>

                <p className="font-medium capitalize ">teaching</p>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {enrolledRooms.length > 0 ? (
              enrolledRooms.map(async (Enrolled_room) => {
                const room = await fetchers.getRoomByID(Enrolled_room._id);
                return (
                  <SideRoomCard
                    key={room._id + "EnrolledSidebar"}
                    _id={room._id}
                    room_name={room.room_name}
                    user_id={room.user_id}
                    bgURL={room.bgURL}
                  />
                );
              })
            ) : (
              <p className="text-center text-sm font-medium capitalize ">
                you have no enrolled rooms
              </p>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Link to="/toDos">
        <div className="py-2 px-4 flex items-center gap-3 rounded-md duration-200 hover:bg-gray-200 text-slate-950">
          <div className="text-xl">
            <FaListCheck />
          </div>
          <p className="font-medium capitalize">My Todo list</p>
        </div>
      </Link>
    </div>
  );
}
