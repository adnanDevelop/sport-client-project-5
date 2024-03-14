import React from "react";
import Hero from "../element/HomeSection/Hero";
import AboutClub from "../element/HomeSection/AboutClub";
import PlayerStory from "../element/HomeSection/PlayerStory";
import AcademyLocation from "../element/HomeSection/AcademyLocation";
import Store from "../element/HomeSection/Store";
import Joinus from "../element/HomeSection/Joinus";
import Gallery from "../element/HomeSection/Gallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutClub />
      <Store />
      <PlayerStory />
      <Joinus />
      <Gallery />
      <AcademyLocation />
      <div className="w-full h-screen "></div>
    </div>
  );
};

export default Home;
