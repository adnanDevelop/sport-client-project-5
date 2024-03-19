import React from "react";
import NavbarTwo from "../NavFooter/NavbarTwo";
import AcademyHeader from "../element/AcademySection/AcademyHeader";
import JoinUs from "../element/AcademySection/JoinUs";
import Program from "../element/AcademySection/Program";
import AcademyStore from "../element/AcademySection/AcademyStore";
import ContactTwo from "../NavFooter/ContactTwo";

const Academy = () => {
  return (
    <>
      <NavbarTwo />
      <AcademyHeader />
      <JoinUs />
      <Program />
      <AcademyStore />
      <ContactTwo />
    </>
  );
};

export default Academy;
