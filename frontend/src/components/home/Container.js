import React from "react";
import SideBar from "./container/SideBar";
import Main from "./container/Main";

export default function Container() {
  return (
    <div className="flex-1 container flex items-start m-auto">
      <Main />
      <SideBar />
    </div>
  );
}
