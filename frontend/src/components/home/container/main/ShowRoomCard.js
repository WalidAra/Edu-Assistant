/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import RoomCard from "./RoomCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ShowRoomCard() {
  const show = false;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in" className={` ${show ? "inline-block" : "hidden"} `}>
      <RoomCard
        key={"newCard"}
        _id={"newCard_id"}
        room_name={"room name"}
        user_id={"user_id"}
        bgURL={"bg-gradient-to-r from-sky-500 to-indigo-500"}
      />
    </div>
  );
}
