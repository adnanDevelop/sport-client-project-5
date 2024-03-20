import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Gallery = () => {
  return (
    <main className="gallery-section  md:py-[80px] py-[60px] h-[120vh] overflow-hidden">
      <section className="flex items-center justify-between flex-wrap md:px-[40px] px-[20px]">
        <div className="gallery-title">
          <span className="red-badge mb-4">our gallery</span>
          <h2>gallery, memories we shared</h2>
          <p className="text-gray text-[16px] max-w-[450px] my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt tempus venenatis. Aliquam in congue quam, eget accumsan
            lectus. In non sollicitudin quam.{" "}
          </p>
        </div>
        <div className="gallery-btn">
          <button className="btn-primary">
            Learn more{" "}
            <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
          </button>
        </div>
      </section>
      {/* <section className="w-full gallery-img-section grid grid-cols-2 h-[550px] mt-4 ">
        <div className="gallery-img flex">
          <img src="/image/home/gallery/img-4.png" className="w-full h-auto" alt="" />
          <img src="/image/home/gallery/img-2.png" className="w-full h-auto" alt="" />
        </div>
        <div className="gallery-img  flex">
          <img src="/image/home/gallery/img-3.png" alt="" />
          <img src="/image/home/gallery/img-1.png" alt="" />
        </div>
      </section> */}
    </main>
  );
};

export default Gallery;
