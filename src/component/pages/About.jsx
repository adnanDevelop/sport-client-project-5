import React from "react";
import Navbar from "../NavFooter/Navbar";
import AboutHeader from "../element/AboutSection/AboutHeader";
import NavbarTwo from "../NavFooter/NavbarTwo";
import AboutMission from "../element/AboutSection/AboutMission";
import Support from "../element/AboutSection/Support";
import Community from "../element/AboutSection/Community";
import SocialModel from "../element/AboutSection/SocialModel";

const About = () => {
  return (
    <>
      <NavbarTwo />
      <AboutHeader />
      <AboutMission />
      <Support />
      <Community />
      <SocialModel />
    </>
  );
};

export default About;
