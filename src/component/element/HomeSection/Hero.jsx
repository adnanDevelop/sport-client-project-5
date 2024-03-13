import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <main className="md:px-[40px] px-[20px]  w-full py-[200px] hero_section flex items-center justify-start">
      <section className="hero_content">
        <span className="mb-4 red-badge">Globally Recognized Academy</span>
        <h2 className=" italic font-normal font-primary uppercase lg:text-[30px] text-[25px] leading-none  text-white mb-2">
          Award-Winning Excellence: Recognized as the{" "}
        </h2>
        <h1 className="font-bold font-primary uppercase lg:text-[55px] text-[40px] text-white leading-none">
          Community Group of the Year 2023 .
        </h1>
        <div className="mt-10">
          <button className="btn-primary">
            Learn more{" "}
            <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
