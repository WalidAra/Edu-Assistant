import React from "react";
import Logo from "../general/Logo";
import InputSearch from "./nav/InputSearch";
import UserOptions from "./nav/UserOptions";

const NavBar = () => {
  return (
    <nav className="py-3 px-6 flex items-center justify-between border-b border-solid border-slate-200">
      <Logo />
      <InputSearch />
      <UserOptions />
    </nav>
  );
};

export default NavBar;
