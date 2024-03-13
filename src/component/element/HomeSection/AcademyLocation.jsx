import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const AcademyLocation = () => {
  return (
    <main className="story-section md:px-[40px] px-[20px] md:py-[80xp] py-[60px] w-full">
      {/* HEADER SECTION */}
      <section className="story-header flex items-center justify-center flex-col">
        <span className="mb-3 red-badge">here we are</span>
        <h2>locate our aj sport academy</h2>
      </section>
      <section className="lg:max-w-[1000px] w-full mx-auto md:grid grid-cols-10 mt-8 relative">
        <img
          src="/image/home/academy-location/bg-img.png"
          className="absolute md:top-[70%] top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]  "
          alt=""
        />
        <div className="lg:col-span-6 col-span-5">
          <img
            src="/image/home/academy-location/location-img.png"
            className="w-full md:max-h-[500px] max-h-[400px] object-cover"
            alt=""
          />
        </div>
        <div className="lg:col-span-4 col-span-5 relative">
          <iframe
            className="w-full md:max-h-[500px] h-[400px] md:h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39745.36570906869!2d-0.26568937565602485!3d51.4933011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f94c8c4889f%3A0xfc19006596647d97!2sTenants%20Hall!5e0!3m2!1sen!2s!4v1710347222283!5m2!1sen!2s"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="story_content max-w-[300px] absolute bottom-[-4rem] md:right-[-2rem] right-[0rem] bg-white py-3 px-6">
            <h4 className="font-primary text-black font-medium mb-3 uppercase text-[20px]">
              tenants hall cl, lenton abbey, nottingham ng29 2rw
            </h4>
            <button className="btn-primary">
              Learn more{" "}
              <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AcademyLocation;
