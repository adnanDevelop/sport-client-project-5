import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const CntactTwo = () => {
  return (
    <main className="contact-section relative lg:grid grid-cols-2">
      <section className="w-full contact-content-section py-[60px] md:ps-[40px] ps-[20px] px-[20px] bg-cover bg-center bg-no-repeat bg-[#F6F5F8]">
        <span className="red-badge mb-3">we are the best</span>
        <h2>JOin us to grow the best in you</h2>
        <form className="mt-8 w-full flex flex-col gap-y-4">
          {/* NAME FIELD */}
          <div>
            <input
              type="text"
              name="name"
              className="font-secondary lg:max-w-[450px] w-full h-[40px] bg-white text-black px-3 text-[14px] focus:outline-none"
              placeholder="YOUR NAME"
            />
          </div>
          {/* SELECT DATE FIELD */}
          <div>
            <input
              type="date"
              name="name"
              className="font-secondary lg:max-w-[450px] w-full h-[40px] bg-white text-black px-3 text-[14px] focus:outline-none"
              placeholder="DATE OF BIRTH"
            />
          </div>
          {/* SELECT OPTION */}
          <div>
            <select className="font-secondary lg:max-w-[450px] w-full h-[40px] bg-white text-black px-3 text-[14px] focus:outline-none">
              <option value="" defaultChecked>
                POSITION
              </option>
              <option value="">one</option>
              <option value="">two</option>
              <option value="">three</option>
            </select>
          </div>
          {/* PALYED FOR TEAM FIELD */}
          <div>
            <input
              type="text"
              name="name"
              className="font-secondary lg:max-w-[450px] w-full h-[40px] bg-white text-black px-3 text-[14px] focus:outline-none"
              placeholder="HAS PLAYED FOR THE TEAM"
            />{" "}
          </div>
          {/* CONTACT FIELD */}
          <div>
            <input
              type="number"
              name="name"
              className="font-secondary lg:max-w-[450px] w-full h-[40px] bg-white text-black px-3 text-[14px] focus:outline-none"
              placeholder="PARENT/CARER CONTACT NUMBER"
            />
          </div>
          {/* EMAIL FIELD */}
          <div>
            <input
              type="email"
              name="name"
              className="font-secondary lg:max-w-[450px] w-full h-[40px] bg-white text-black px-3 text-[14px] focus:outline-none"
              placeholder="PARENT/CARER EMAIL ID"
            />
          </div>
          <textarea
            className="font-secondary lg:max-w-[450px] w-full h-[150px] resize-none bg-white text-black px-3 pt-2 focus:outline-none"
            placeholder="ADDITIONAL COMMENTS"
          ></textarea>
          <button className="btn-primary lg:w-[450px] w-full flex items-center justify-center">
            SUBMIT{" "}
            <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
          </button>
        </form>
      </section>
      <section>
       <img src="/image/contact-img.png" className="w-full h-full object-cover" alt="" />
      </section>
    </main>
  );
};

export default CntactTwo;
