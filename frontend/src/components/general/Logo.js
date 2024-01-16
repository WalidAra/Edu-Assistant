import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-3xl text-blue-500">
        <FaGraduationCap />{" "}
      </div>

      <span className="logo_text text-2xl text-black "> ClassUnity </span>
    </div>
  );
};

export default Logo;
