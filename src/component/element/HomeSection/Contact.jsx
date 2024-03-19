import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Contact = () => {
  return (
    <main className="contact-section relative md:grid grid-cols-2 mt-[40px]">
        {/* <img src="/image/home/contact/contact-bg.png" className="absolute lg:block hidden z-[-1] max-w-[780px] h-[600px]" alt="" /> */}
      <section
        className="w-full contact-content-section py-[60px] md:ps-[40px] ps-[20px] px-[20px] bg-cover bg-center bg-no-repeat bg-[#F6F5F8]"
        // style={{ backgroundImage: "url('')" }}
      >
        <span className="red-badge mb-3">enquire here</span>
        <h2>contact us</h2>
        <div className="w-full h-[50px] flex items-center  mt-6 ">
          <button className="px-[50px] h-[40px] font-[600] text-white z-[10] contact-btn bg-red uppercase text-[14px] font-primary transition duration-300 hover:bg-red hover:text-white">
            london
          </button>
          <button className="px-[50px] h-[40px] font-[600] text-black bg-white contact-btn uppercase text-[14px] font-primary transition duration-300 hover:bg-red hover:text-white">
            manchester
          </button>
          <button className="px-[50px] h-[40px] font-[600] text-black bg-white contact-btn uppercase text-[14px] font-primary transition duration-300 hover:bg-red hover:text-white">
            nottingham
          </button>
        </div>
        <form className="mt-4 w-full flex flex-col gap-y-4">
          <div>
            <input
              type="text"
              name="name"
              className="lg:max-w-[450px] w-full h-[40px] bg-white text-black px-3 text-[14px] focus:outline-none"
              placeholder="NAME / ORGANIZATION"
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              className="lg:max-w-[450px] w-full h-[40px] bg-white text-black px-3 text-[14px] focus:outline-none"
              placeholder="YOUR EMAIL"
            />
          </div>
          <div>
            <select className="lg:max-w-[450px] w-full h-[40px] bg-white text-black px-3 text-[14px] focus:outline-none">
              <option value="" defaultChecked>
                ENQUIRE TYPE
              </option>
              <option value="">one</option>
              <option value="">two</option>
              <option value="">three</option>
            </select>
          </div>
          <textarea className=" lg:max-w-[450px] w-full h-[150px] resize-none bg-white text-black px-3 pt-2 focus:outline-none" placeholder="MESSAGE"></textarea>
            <button className="btn-primary lg:w-[450px] w-full flex items-center justify-center">
            Learn more{" "}
            <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
          </button>
        </form>
      </section>
      <section>
        {/* <img src="/image/home/contact/contact-img.png" className="lg:block hidden" alt="" /> */}
        <img src="/image/home/contact/contact-img-two.png" className="w-full md:h-[120vh] object-cover" alt="" />
      </section>
    </main>
  );
};

export default Contact;
