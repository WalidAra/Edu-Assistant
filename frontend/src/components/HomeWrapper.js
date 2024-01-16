import React from "react";
import NavBar from "./home/NavBar";
import Container from "./home/Container";

const HomeWrapper = () => {
  return (
    <main className="w-full h-screen flex flex-col">
      <NavBar />
      <Container />
    </main>
  );
};

export default HomeWrapper;
