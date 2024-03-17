import React from "react";

const Academy = () => {
  return (
    <main className="md:py-[60px] py-[40px] md:px-[40px] px-[20px] bg-[#F6F5F8] relative z-10 overflow-hidden">
      <div className="lg:block hidden animation max-w-[500px] w-full h-full gradient absolute  top-0 right-6 skew-x-[20deg] transition duration-300 z-[-1]"></div>
      <section className="lg:grid grid-cols-12">
        {/* CONTENT SECTION */}
        <div className="xl:col-span-5 col-span-4 lg:mb-0 mb-8">
          <div className="content-section">
            <span className="mb-4 red-badge">know us more</span>
            <h2 className="mb-5 font-[700] text-[35px]">
              welcome to the coolest sports academy
            </h2>
            <div className="lg:max-w-[500px]">
              <p className="text-gray text-[16px] font-normal mb-3">
                UK's Fastest Growing Club: Expanded to London and Manchester in
                just 48 months.
              </p>
              <p className="text-gray text-[16px] font-normal mb-3">
                Community and Connection: "AJ Sport Academy: A family beyond the
                field. Uniting passionate athletes in a supportive and
                growth-oriented community."
              </p>
              <p className="text-gray text-[16px] font-normal mb-3">
                Empowering Athletes: "Achieve your best with AJ Sport Academy.
                Nurturing talent, celebrating hard work, and fostering
                sportsmanship."
              </p>
              <p className="text-gray text-[16px] font-normal mb-3">
                Building Champions: "Training athletes, building champions. AJ
                Sport Academy - where sports leaders are made, on and off the
                field."
              </p>
            </div>
          </div>
        </div>
        {/* IMAGE SECTION */}
        <div className="xl:col-span-7 col-span-8">
          <div className="img-section lg:py-0 py-[40px] w-full relative z-10 overflow-hidden">
            <div className="lg:hidden block animation sm:max-w-[400px] max-w-[250px] w-full h-full gradient absolute  top-0 left-[50%] translate-x-[-50%] sm:skew-x-[20deg] skew-x-[15deg] transition duration-300 z-[-1]"></div>
            <img
              src="/image/hospitality/academy-img.png"
              className="xl:max-w-[700px] max-w-[600px] lg:ms-auto mx-auto w-full h-auto object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academy;
