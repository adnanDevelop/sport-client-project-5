import React from "react";

const AboutHeader = () => {
  return (
    <main className="md:px-[40px] px-[20px]  w-full lg:py-[180px] pt-[120px] pb-[320px]  about-gradient flex items-center justify-start relative z-10 overflow-hidden">
      <div className="animation max-w-[600px] w-full h-full bg-[#c20d25ef] absolute  top-0 left-[50%] skew-x-[-15deg] translate-x-[-50%] transition duration-300 z-[-1]"></div>
      <section className="hero_content">
        <div>
          <span className="mb-4 px-2 py-1 bg-white text-red font-secondary text-[14px] font-semibold uppercase inline-block">
           EXPLORE US
          </span>
          <h1 className="font-bold font-primary uppercase lg:text-[55px] sm:text-[40px] text-[35px] text-white leading-none">
            ABOUT AJ SPORTS
          </h1>
        </div>
        <div className="absolute bottom-0  right-0 ">
          <img src="/image/about/header-img.png" className="lg:max-w-[580px] max-w-[500px] h-auto object-cover" alt="" />
        </div>
      </section>
    </main>
  );
};

export default AboutHeader;
