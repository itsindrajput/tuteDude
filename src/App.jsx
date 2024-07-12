import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/header/Navbar";
import Hero from "./components/heroSection/Hero";
import Course from "./components/courses/Course";
import Offer from "./components/offers/Offer";

const App = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Hero></Hero>
      <Course></Course>
      <Offer></Offer>
    </>
  );
};

export default App;
