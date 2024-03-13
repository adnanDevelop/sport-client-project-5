import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <main className="md:px-[40px] px-[20px] pt-[250px] pb-[150px] w-full hero_section flex items-center justify-start">
      <section className="hero_content">
        <span className="inline-block mb-4 red-badge  px-2 py-1 bg-red text-white font-secondary text-[14px] font-semibold uppercase">
          Globally Recognized Academy
        </span>
        <h2 className=" italic font-primary uppercase text-[30px] leading-none  text-white">
          Award-Winning Excellence: Recognized as the{" "}
        </h2>
        <h1 className="font-bold font-primary uppercase text-[55px] text-white leading-none">
          Community Group of the Year 2023 .
        </h1>
        <div className="mt-10">
          <button className="btn-primary">
            Learn more <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]"  />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
