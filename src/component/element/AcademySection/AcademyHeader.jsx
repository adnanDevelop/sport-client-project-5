import React from "react";

const AcademyHeader = () => {
  return (
    <main className="md:px-[40px] px-[20px]  w-full lg:py-[180px] pt-[120px] pb-[320px]  bg-black flex items-center justify-start relative z-10 overflow-hidden">
      <img className="animation max-w-[600px] w-full h-full  absolute  top-0 left-[60%]  translate-x-[-60%] transition duration-300 z-[-1]" src="/image/academy/shape.png" />
      <section className="hero_content">
        <div>
          <span className="mb-4 px-2 py-1 bg-red text-white font-secondary text-[14px] font-semibold uppercase inline-block">
          EXPLORE ACADEMy
          </span>
          <h1 className="font-bold font-primary uppercase lg:text-[55px] sm:text-[40px] text-[35px] text-[#CFA855] leading-none">
           AJ LONDON
          </h1>
        </div>
        <div className="absolute bottom-0  lg:left-[45%] left-[50%] lg:translate-x-0 translate-x-[-50%] ">
          <img
            src="/image/academy/header-img.png"
            className="sm:max-w-[320px] max-w-[300px] h-auto object-cover"
            alt=""
          />
        </div>
      </section>
    </main>
  );
};

export default AcademyHeader;
