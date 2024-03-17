import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Hub = () => {
  return (
    <div className="md:py-[60px] py-[40px] md:px-[40px] px-[20px]">
      <section className="lg:grid grid-cols-12">
        {/* CONTENT SECTION */}
        <div className="col-span-4 lg:mb-0 mb-8">
          <div className="content-section">
            <span className="mb-4 red-badge">Locate us</span>
            <h2 className="mb-5">OUR HUB</h2>
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

              <button className="btn-primary">
                Learn more{" "}
                <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
              </button>
            </div>
          </div>
        </div>
        {/* IMAGE SECTION */}
        <div className="col-span-8">
          <div className="map-section lg:py-0 py-[40px] w-full relative z-10 overflow-hidden">
            <iframe
              className="xl:max-w-[550px] lg:max-w-[500px] w-full h-[500px] mx-auto  "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39745.36570906869!2d-0.26568937565602485!3d51.4933011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f94c8c4889f%3A0xfc19006596647d97!2sTenants%20Hall!5e0!3m2!1sen!2s!4v1710347222283!5m2!1sen!2s"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="story_content max-w-[300px] absolute lg:bottom-0 bottom-[2.5rem] lg:right-[5rem] right-[0rem] bg-white py-3 px-6">
              <h4 className="font-primary text-black font-medium mb-3 uppercase text-[20px]">
                tenants hall cl, lenton abbey, nottingham ng29 2rw
              </h4>
              <button className="btn-primary">contact us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hub;
