import React from "react";
import NavBar from "./NavBar";
import SideBar from "./container/SideBar";
import ToDos from "./ToDos";
import JoinContext from "../../context/JoinContext";
import JoinContainer from "./layers/JoinContainer";
import CreateContext from "../../context/CreateContext";
import CreateContainer from "./layers/CreateContainer";
import CreateTaskContext from "../../context/CreateTaskContext";
import CreateTaskLayer from "./layers/CreateTaskLayer";

export const Wrapper = () => {
  return (
    <main className="w-full h-screen flex flex-col">
      <JoinContext>
        <CreateContext>
          <CreateTaskContext>
            <JoinContainer />
            <CreateContainer />
            <CreateTaskLayer />
            <NavBar />
          </CreateTaskContext>
        </CreateContext>
      </JoinContext>
      <div className="flex-1 container flex items-start m-auto">
        <ToDos />

        <SideBar />
      </div>
    </main>
  );
};
