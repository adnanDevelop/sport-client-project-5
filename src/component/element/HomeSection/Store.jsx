import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

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
          className="w-full h-auto"
          alt=""
        />
      </section>
      {/* CARD SECTION */}
      <section className="md:px-[40px] px-[20px] lg:py-[80px] py-[60px] bg-red">
        <div className="store-header flex items-center justify-between">
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
            grabCursor={true}
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
            className="mySwiper"
          >
            {productImg.map((element, index) => {
              return (
                <SwiperSlide key={index} className="my-5">
                  <div className="relative">
                    <div className="animation w-[100px] h-[300px] bg-[#F45D71] absolute  top-[-1rem] left-[50%] skew-x-[-15deg] translate-x-[-50%] z-[-1]"></div>
                    <div className="p-4 border rounded-[20px] border-white flex items-center justify-center">
                      <img src={element} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default Store;
