/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import Logo from "./general/Logo";
import { Input, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { fetchers } from "../lib/fetch";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const id = localStorage.getItem("id");

  const HandleLogin = async () => {
    const result = await fetchers.Login(email, password);

    if (result.success) {
      navigate("/home");
    }
  };

  useEffect(() => {
    if (id) {
      navigate("/home");
    }
  }, [id]);

  return (
    <div className="w-full h-screen  center_div">
      <div className="w-[400px] p-5 rounded-lg border border-slate-300 flex flex-col gap-5">
        <div className="w-full center_div">
          <Logo />
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
          onClick={HandleLogin}
          className="w-full"
          colorScheme="messenger"
        >
          Login
        </Button>

        <p className="py-3 w-full text-center text-sm font-medium">
          Dont have account ?
          <Link to={"/sign-up"} className="text-blue-500 hover:underline ml-2">
            Sign-up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
