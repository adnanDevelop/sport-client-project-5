import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Gallery = () => {
  return (
    <main className="gallery-section md:px-[40px] px-[20px] md:py-[80px] py-[60px]">
      <section className="flex items-center justify-between">
        <div className="gallery-title">
          <span className="red-badge mb-4">our gallery</span>
          <h2>gallery, memories we shared</h2>
          <p className="text-gray text-[16px] max-w-[400px]">
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
    </main>
  );
};

export default Gallery;
