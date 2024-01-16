/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "./general/Logo";
import { Input, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { fetchers } from "../lib/fetch";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_name, setUser_name] = useState("");
  const navigate = useNavigate();

  const HandleSignUp = async () => {
    const result = await fetchers.SignUp(email, password, user_name);

    if (result.success) {
      localStorage.setItem("id", result.user[0]._id);
      navigate("/home");
    }
  };

  return (
    <div className="w-full h-screen  center_div">
      <div className="w-[400px] p-5 rounded-lg border border-slate-300 flex flex-col gap-5">
        <div className="w-full center_div">
          <Logo />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="" className="font-medium">
            Username
          </label>

          <Input
            onChange={(e) => {
              setUser_name(e.target.value);
            }}
            variant="filled"
            placeholder="example123@gmail.com"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="" className="font-medium">
            Email
          </label>

          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            variant="filled"
            placeholder="example123@gmail.com"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="" className="font-medium">
            Password
          </label>

          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            variant="filled"
            placeholder="example123"
          />
        </div>

        <Button
          onClick={HandleSignUp}
          className="w-full"
          colorScheme="messenger"
        >
          Sign up
        </Button>

        <p className="py-3 w-full text-center text-sm font-medium">
          Already have account ?
          <Link to={"/"} className="text-blue-500 hover:underline ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
