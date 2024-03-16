import React from "react";

const KitSection = () => {
  return (
    <div
      className="kit_section py-[60px] w-full mx-auto bg-cover bg-[#F6F5F8] relative overflow-hidden z-10"
    //   style={{ background: "url('/image/store/kit-bg.png') no-repeat right" }}
    >
        <img src="/image/home/academy-location/bg-img.png" className="md:w-[400px] w-[400px] h-auto absolute  bottom-[-90%] left-[50%] md:left-[80%]  md:translate-x-[0px] translate-x-[-50%] z-[-1]" alt="" />
      <div className="max-w-[800px] mx-auto flex lg:flex-row flex-col lg:justify-normal justify-center items-center flex-wrap gap-x-[30px] z-10 md:px-[0px] px-[20px]">
        <img
          src="/image/store/kit-logo.png"
          className="w-[120px] h-auto"
          alt=""
        />
        <h1 className="text-black font-primary font-medium uppercase md:text-[45px] text-[35px] leading-none text-center lg:mt-0 mt-4">
          thank you for providing our kits
        </h1>
      </div>
    </div>
  );
};

export default KitSection;
