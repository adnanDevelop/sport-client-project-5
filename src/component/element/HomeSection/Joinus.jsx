import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Joinus = () => {
  return (
    <div className="sm:pt-0 pt-[30px]  bg-[#F6F5F8] lg:grid grid-cols-8">
      <div className="content-section lg:py-[80px] md:ps-[40px] ps-[20px] lg:pe-0 md:pe-[40px] pe-[20px] col-span-4">
        <span className="red-badge mb-4">join us now</span>
        <h2>
          talk with your feet, <br />
          play with your heart
        </h2>
        <div className="max-w-[500px] my-5">
          <p className="text-justify text-gray text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt tempus venenatis. Aliquam in congue quam, eget accumsan
            lectus. In non sollicitudin quam.
          </p>
          <p className="text-justify text-gray text-[16px] mt-3">
            Duis quis nulla consectetur, eleifend nunc eu, varius massa. Quisque
            hendrerit placerat erat mattis blandit. In hendrerit odio vitae
            massa euismod dignissim.
          </p>
        </div>
        <button type="button" className="btn-primary-outline mt-r">
          JOIN US{" "}
          <MdOutlineKeyboardDoubleArrowRight className="ms-3 text-[20px]" />
        </button>
      </div>
      <div className="join-img gradient relative col-span-4 w-full lg:h-auto h-[400px] lg:mt-0 mt-8">
            <img src="/image/home/joinus/bg-img.png" className="max-w-[500px] h-auto object-cover  absolute top-0 right-0 z-[-1]" alt="" />
            <img src="/image/home/joinus/join-img.png" className="max-w-[350px] lg:h-auto h-[400px] object-cover absolute bottom-0 left-[50%] translate-x-[-50%]" alt="" />
      </div>
    </div>
  );
};

// style={{background : "url('/image/home/joinus/bg-img.png') no-repeat right"}}

export default Joinus;
