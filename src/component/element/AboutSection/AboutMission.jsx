import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const AboutMission = () => {
  return (
    <div className="relative z-10">
        <img src="/image/about/shape-one.png" className="lg:max-w-[800px] md:max-w-[600px] max-w-[320px] md:h-auto h-[800px] absolute top-0 right-0 z-[-1]" alt="" />
        <img src="/image/about/shape-two.png" className="lg:max-w-[850px] md:max-w-[650px] max-w-[360px] md:h-auto h-[820px] absolute top-0 right-0 z-[-2]" alt="" />
      <div
        className="w-full py-[60px] bg-cover md:px-[40px] px-[20px]"
        
      >
        <div className="club_section lg:max-w-[1100px] w-full mx-auto lg:grid grid-cols-12">
          <div className="club_img col-span-7 lg:block hidden">
            <img
              src="/image/about/mission-img.png"
              className="max-w-[500px] h-auto mx-auto"
              alt=""
            />
          </div>
          <div className="club_content col-span-5 lg:flex flex-col justify-center items-center">
            <div>
              <span className="red-badge mb-2">our mission</span>
              <h2 className="mb-4">THE MISSION</h2>
              <p className="text-[15px] text-gray font-medium mb-2">
                This took me back to my teacher training days – what is the
                difference between and aim and an objective when planning
                lessons. The best explanation I was given is that the Aims (your
                Mission) was like the brick wall you hope to build.
              </p>
              <p className=" text-[15px] text-gray font-medium mb-2 ">
                The Objectives (your Aim) are how you are going to lay the
                bricks to build the wall. The trick is to avoid saying the same
                thing twice. Mission
              </p>
              <p className=" text-[15px] text-gray font-medium mb-2 ">
                To provide, co-ordinate, champion and develop innovative sport
                services and solutions to support young people and communities
                by being a positive alternative to the high risk and negative
                lifestyles that currently involve too many
              </p>
              <p className=" text-[15px] text-gray font-medium mb-2 ">
                Our initial scope will be across the boroughs of Nottingham but,
                as a successful model develops, we hope to spread our activities
                as far as we can. Gang related activities and violence blight
                too many young lives and we are a positive alternative.
              </p>
              <button type="button" className="btn-primary-outline">
                JOIN US{" "}
                <MdOutlineKeyboardDoubleArrowRight className="ms-3 text-[20px]" />
              </button>
            </div>
          </div>
          <div className="club_img lg:hidden block  mt-8 ">
            <img
              src="/image/about/mission-img.png"
              className="md:max-w-[400px] max-w-[300px] h-auto"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full md:px-[40px] px-[20px] pb-[60px]">
        <div className="club_section lg:max-w-[1100px] w-full mx-auto lg:grid grid-cols-12">
          <div className="club_content col-span-4 lg:flex flex-col justify-center items-center">
            <div>
              <span className="red-badge mb-2">WE ARE FOCUSED</span>
              <h2 className="mb-4">OUR AIM</h2>
              <p className="text-[15px] text-gray font-medium mb-0">
                Using sport as a unifying focus we aim to contribute to the
                reduction of deprivation. We will do this by providing routes
                into positive lifestyles to help young people become positive
                role models in their communities.
              </p>
              <p className="text-[15px] text-gray font-medium mb-3">
                Enhancing community cohesion in this way will improve lives
                individually and across
              </p>
              <p className=" text-[15px] text-gray font-medium mb-2 ">
                The community and promote health and well-being. Our holistic
                approach combining fitness, sporting activity and mentoring aims
                to address the underlying causes of negative lifestyles.
              </p>
              <button type="button" className="btn-primary-outline">
                JOIN US{" "}
                <MdOutlineKeyboardDoubleArrowRight className="ms-3 text-[20px]" />
              </button>
            </div>
          </div>
          <div className="club_img col-span-8 lg:block hidden">
            <img
              src="/image/about/aim-img.png"
              className="max-w-[500px] h-auto mx-auto"
              alt=""
            />
          </div>
          <div className="club_img lg:hidden block  mt-8 ">
          <img
              src="/image/about/aim-img.png"
              className="md:max-w-[400px] max-w-[300px] h-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
