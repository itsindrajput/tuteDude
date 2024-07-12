import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/header/Navbar";
import Hero from "./components/heroSection/Hero";
import Course from "./components/courses/Course";

const App = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Hero></Hero>
      <Course></Course>
    </>
  );
};

export default App;
