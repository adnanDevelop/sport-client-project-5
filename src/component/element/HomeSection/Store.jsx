import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Store = () => {
  const productImg = [
    "/image/home/store/img-1.png",
    "/image/home/store/img-2.png",
    "/image/home/store/img-3.png",
    "/image/home/store/img-2.png",
    "/image/home/store/img-1.png",
    "/image/home/store/img-3.png",
    "/image/home/store/img-1.png",
    "/image/home/store/img-2.png",
  ];

  return (
    <main className="store_section">
      {/* IMAGE SECTION */}
      <section>
        <img
          src="/image/home/store/store-img.png"
          className="w-full md:h-[400px] h-[300px] object-cover"
          alt=""
        />
      </section>
      {/* CARD SECTION */}
      <section className="md:px-[40px] px-[20px] lg:py-[80px] py-[60px] gradient">
        <div className="store-header flex items-center justify-between relative">
          <div className="store-title">
            <h2 className="text-white font-bold font-primary uppercase ">
              we provide best apparel,
            </h2>
            <h2 className="flex items-center  text-white font-bold font-primary uppercase ">
              visit our store
              <span className="ms-4 flex">
                <img src="/image/home/store/logoone.png" alt="" />{" "}
                <img
                  src="/image/home/store/logotwo.png"
                  className="ms-2"
                  alt=""
                />{" "}
              </span>
            </h2>
          </div>
        </div>
        <div className="product-slider mt-6">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              572: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper overflow-y-auto"
          >
            <SwiperBtn />
            {productImg.map((element, index) => {
              return (
                <SwiperSlide key={index} className="my-5">
                  <div className="relative group cursor-pointer">
                    <div className="animation w-[100px] h-[350px] bg-[#F45D71] absolute  top-[-3rem] left-[50%] skew-x-[-15deg] translate-x-[-50%] z-[-1] opacity-0 transition duration-300 group-hover:opacity-100"></div>
                    <div className="p-4 border rounded-[20px] border-white flex items-center justify-center">
                      <img src={element} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* BUTTON */}
          <div className="button mt-6 grid place-items-center ">
            <button className=" uppercase font-primary text-red bg-white px-6 py-3 font-semibold flex items-center transition duration-300 hover:scale-105">
              Learn more{" "}
              <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

const SwiperBtn = () => {
  const swiper = useSwiper();

  return (
    <div className=" lg:block hidden">
      <div className="swiper-btns w-full flex items-center justify-end gap-x-4 pe-8 ">
        <button
          className="text-red bg-white transition duration-300 hover:bg-black hover:text-white text-[15px] w-[50px] h-[40px] flex items-center justify-center skew-x-[-10deg]"
          onClick={() => swiper.slideNext()}
        >
          <FaArrowLeftLong />
        </button>
        <button
          className="text-red bg-white transition duration-300 hover:bg-black hover:text-white text-[15px] w-[50px] h-[40px] flex items-center justify-center skew-x-[-10deg]"
          onClick={() => swiper.slidePrev()}
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Store;
