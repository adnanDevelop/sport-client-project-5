import React from "react";

const Feature = () => {
  return (
    <main className="md:px-[40px] px-[20px] md:py-[80xp] py-[60px] w-full">
      {/* HEADER SECTION */}
      <section className="text-center mb-8">
        <span className="mb-4 red-badge">globally best setup</span>
        <h2>FEATURES we provide to the players</h2>
      </section>
      {/* CONTENT SECTION */}
      <section className="md:grid grid-cols-12 lg:gap-8 gap-[25px]">
        <div className="md:mb-0 mb-6 lg:col-span-8 md:col-span-7">
          <img
            src="/image/hospitality/feature/img-one.png"
            className="w-full md:h-[450px] h-[400px] object-cover"
            alt=""
          />
          <h2 className="md:mt-4 mt-2">pool</h2>
        </div>
        <div className="md:mb-0 mb-6 lg:col-span-4 col-span-5">
          <img
            src="/image/hospitality/feature/img-two.png"
            className="w-full md:h-[450px] h-[400px] object-cover"
            alt=""
          />
          <h2 className="md:mt-4 mt-2">music studio</h2>
        </div>
        <div className="md:mb-0 mb-6 lg:col-span-4 col-span-5">
          <img
            src="/image/hospitality/feature/img-three.png"
            className="w-full md:h-[450px] h-[400px] object-cover"
            alt=""
          />
          <h2 className="md:mt-4 mt-2">kitchen</h2>
        </div>
        <div className="md:mb-0 mb-6 lg:col-span-8 md:col-span-7">
          <img
            src="/image/hospitality/feature/img-four.png"
            className="w-full md:h-[450px] h-[400px] object-cover"
            alt=""
          />
          <h2 className="md:mt-4 mt-2">social hub</h2>
        </div>
        <div className="md:mb-0 mb-6 lg:col-span-8 md:col-span-7">
          <div className="w-full relative">
            <img
              src="/image/hospitality/feature/logo-one.png"
              className="w-[60px] h-auto object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              alt=""
            />
            <img
              src="/image/hospitality/feature/img-five.png"
              className="w-full md:h-[450px] h-[400px] object-cover"
              alt=""
            />
          </div>
          <h2 className="md:mt-4 mt-2">play stations</h2>
        </div>
        <div className="md:mb-0 mb-6 lg:col-span-4 col-span-5">
          <div className="w-full relative">
            <img
              src="/image/hospitality/feature/logo-two.png"
              className="w-[60px] h-auto object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              alt=""
            />
            <img
              src="/image/hospitality/feature/img-six.png"
              className="w-full md:h-[450px] h-[400px] object-cover"
              alt=""
            />
          </div>
          <h2 className="md:mt-4 mt-2">joy con wheel</h2>
        </div>
      </section>
    </main>
  );
};

export default Feature;
