import React from "react";
import PlusOp from "./options/PlusOp";
import UserShortCut from "./options/UserShortCut";
import CreateTask from "./options/CreateTask";

export default function UserOptions() {
  return (
    <div className="flex items-center gap-6">
      <CreateTask />
      <PlusOp />
      <UserShortCut />
    </div>
  );
}
