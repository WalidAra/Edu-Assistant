import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "./input.css";
import "./tail.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomeWrapper from "./components/HomeWrapper";
import { Wrapper } from "./components/home/Wrapper";

function App() {
  return (
    <main>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<HomeWrapper />} />
            <Route path="/toDos" element={<Wrapper />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </main>
  );
}

export default App;
