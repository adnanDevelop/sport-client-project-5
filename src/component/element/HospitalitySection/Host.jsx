import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Host = () => {
  return (
    <main className="md:px-[40px] px-[20px] md:py-[80xp] py-[60px] w-full gradient">
      <section className="lg:grid grid-cols-12">
        <div className="col-span-5">
          <div className="content-section">
            <span className="mb-4 red-badge bg-white text-red">
              globally best setups
            </span>
            <h2 className="mb-5 font-[700] text-[35px] text-white">
              what we host
            </h2>
            <div className="lg:max-w-[550px]">
              <p className="text-white text-[16px] font-normal mb-3">
                UK's Fastest Growing Club: Expanded to London and Manchester in
                just 48 months.
              </p>
              <p className="text-white text-[16px] font-normal mb-3">
                Community and Connection: "AJ Sport Academy: A family beyond the
                field. Uniting passionate athletes in a supportive and
                growth-oriented community."
              </p>
              <p className="text-white text-[16px] font-normal mb-3">
                Empowering Athletes: "Achieve your best with AJ Sport Academy.
                Nurturing talent, celebrating hard work, and fostering
                sportsmanship."
              </p>
              <p className="text-white text-[16px] font-normal mb-3">
                Building Champions: "Training athletes, building champions. AJ
                Sport Academy - where sports leaders are made, on and off the
                field."
              </p>
              <button
                type="button"
                className="mt-8 uppercase font-primary text-white bg-transparent border border-white px-6 py-3 font-semibold flex items-center transition duration-300 hover:scale-105"
              >
                JOIN US{" "}
                <MdOutlineKeyboardDoubleArrowRight className="ms-3 text-[20px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-7">
          <div className="w-full flex items-center justify-center flex-col pt-8">
            <div className="flex items-center justify-center sm:gap-x-8 gap-x-5">
              <div className="xl:w-[250px] sm:w-[200px] w-[150px] xl:h-[250px] sm:h-[200px] h-[150px] bg-white rounded-lg flex items-center justify-center ">
                <img src="/image/hospitality/host/img-1.png" alt="" />
              </div>
              <div className="xl:w-[250px] sm:w-[200px] w-[150px] xl:h-[250px] sm:h-[200px] h-[150px] bg-white rounded-lg flex items-center justify-center ">
                <img src="/image/hospitality/host/img-2.png" className="sm:w-[180px] w-[100px]" alt="" />
              </div>
            </div>
            <h3 className="text-white uppercase text-[30px] font-semibold mt-4">
              sports night
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Host;
