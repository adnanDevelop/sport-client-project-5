import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Support = () => {
  return (
    <div className="gradient lg:grid grid-cols-12">
      <div className="content-section lg:pt-[80px] pt-[60px] lg:pb-[40px] md:ps-[40px] ps-[20px] lg:pe-0 md:pe-[40px] pe-[20px] col-span-6">
        <span className="red-badge mb-4 text-red bg-white">WE SUPPORT</span>
        <h2 className="text-white">HOW WE SUPPORT</h2>
        <div className="max-w-[500px] my-5">
          <p className="text-justify text-white text-[16px]">
            We provide individuals with a complete, integrated and flexible
            system of support designed to meet each person’s needs.
          </p>
          <p className="text-justify text-white text-[16px] mb-4">
            Support is designed and coordinated by credible experts and the
            holistic, community centred, approach helps young people aspire to
            and achieve positive, successful lifestyles.
          </p>
          <p className="text-justify text-white text-[16px] mt-3">
            Specific support is provided for those young people who may not
            automatically qualify for the tailored support of local authority
            services.
          </p>
        </div>
        <button type="button" className="uppercase font-primary text-white bg-transparent border border-white px-6 py-3 font-semibold flex items-center transition duration-300 hover:scale-105">
          JOIN US{" "}
          <MdOutlineKeyboardDoubleArrowRight className="ms-3 text-[20px]" />
        </button>
      </div>
      <div className="join-img relative col-span-6 w-full lg:h-auto h-[400px] lg:mt-0 mt-8">
        <img
          src="/image/about/support-bg.png"
          className="xl:max-w-[450px] sm:max-w-[350px] max-w-[280px] h-auto object-cover absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]  md:right-[10%] z-[-1]"
          alt=""
        />
        <img
          src="/image/home/joinus/join-img.png"
          className="max-w-[350px] lg:h-auto h-[400px] object-cover absolute bottom-0 left-[50%] translate-x-[-50%]"
          alt=""
        />
      </div>
    </div>
  );
};

// style={{background : "url('/image/home/joinus/bg-img.png') no-repeat right"}}

export default Support;
