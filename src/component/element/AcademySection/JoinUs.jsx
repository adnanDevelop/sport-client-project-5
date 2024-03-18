import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const JoinUs = () => {
  return (
    <main className="md:py-[60px] py-[40px] bg-[rgba(255, 255, 255, 1)] relative z-10 overflow-hidden">
      <img
        src="/image/academy/shape-two.png"
        className="lg:block hidden animation xl:max-w-[800px] h-[500px] max-w-[650px] w-full absolute right-0  top-0  transition duration-300 z-[-1]"
      />
      <section className="lg:grid grid-cols-12">
        {/* CONTENT SECTION */}
        <div className="xl:col-span-5 col-span-4 lg:mb-0 mb-8 md:px-[30px] px-[20px]">
          <div className="content-section">
            <span className="mb-4 red-badge">why us</span>
            <h2 className="mb-5 font-[700] text-[35px]">HUMBLE BEGGININGS</h2>
            <div className="lg:max-w-[500px]">
              <p className="text-gray text-[16px] font-normal mb-3">
                We know that people feel better when they stay active, and we’re
                proud to offer first-class facilities designed to help you do
                just that. ​AJ Sport Academy is a sport academy created to
                interact with young people between ages 5-23!
              </p>
              <p className="text-gray text-[16px] font-normal mb-0">
                We aim to develop young players’ skills/abilities to a higher
                level and offer trials throughout our numerous football scouts
                and network relations with clubs and pro clubs around the world.
              </p>
              <p className="text-gray text-[16px] font-normal mb-3">
                We are also very active in the community and provide free
                football camp for the community and promote healthy living,
                responsible citizenship and community cohesion.
              </p>
              <button className="btn-primary">
                JOIN US <MdOutlineKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>
        </div>
        {/* IMAGE SECTION */}
        <div className="xl:col-span-7 col-span-8">
          <div className="img-section lg:py-0 py-[40px] w-full relative z-10">
            <img
              className="lg:hidden block absolute z-[-1] top-[0] left-0 h-full"
              src="/image/academy/shape-two.png"
            />
            <img
              src="/image/academy/join-img.png"
              className="xl:max-w-[650px] max-w-[600px] lg:ms-auto mx-auto w-full h-auto object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default JoinUs;
