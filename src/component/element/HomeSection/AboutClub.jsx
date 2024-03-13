import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const AboutClub = () => {
  return (
    <div
      className="w-full md:py-[80px] py-[60px] bg-cover md:px-[40px] px-[20px]"
      style={{ background: "url('/image/home/about-bg.png') no-repeat left" }}
    >
      <div className="club_section lg:max-w-[1100px] w-full mx-auto lg:grid grid-cols-5">
        <div className="club_img col-span-3 lg:block hidden">
          <img
            src="/image/home/about-img.png"
            className="max-w-[500px] h-auto"
            alt=""
          />
        </div>
        <div className="club_content col-span-2 lg:flex flex-col justify-center items-center">
          <div>
            <span className="red-badge mb-2">about the club</span>
            <h2 className="mb-4">
              welcome to aj sport academy
            </h2>
            <p className="text-[16px] text-gray font-medium text-justify mb-2">
              We know that people feel better when they stay active, and we’re
              proud to offer first-class facilities designed to help you do just
              that. AJ Sport Academy is a sport academy created to interact with
              young people between ages 5-23! We aim to develop young players’
              skills/abilities to a higher level and offer trials throughout our
              numerous football scouts and network relations with clubs and pro
              clubs around the world.
            </p>
            <p className=" text-[16px] text-justify text-gray font-medium mb-3 ">
              We are also very active in the community and provide free football
              camp for the community and promote healthy living, responsible
              citizenship and community cohesion.
            </p>
            <button type="button" className="btn-primary-outline">
              JOIN US{" "}
              <MdOutlineKeyboardDoubleArrowRight className="ms-3 text-[20px]" />
            </button>
          </div>
        </div>
        <div className="club_img lg:hidden block  mt-8 ">
          <img
            src="/image/home/about-img.png"
            className="md:max-w-[400px] max-w-[300px] h-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutClub;
