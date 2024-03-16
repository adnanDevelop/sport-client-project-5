import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Community = () => {
  return (
    <main className="lg:py-[80px] py-[60px] md:px-[40px] px-[20px] bg-[#F6F5F8]">
      <h2 className="text-center">COMMUNITY OUTREACH</h2>
      <section className="max-w-[1100px] mx-auto">
        <Swiper
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper overflow-y-auto"
        >
          <SwiperBtn />
          <SwiperSlide className="mb-4">
            <div className="community-card mt-[30px]  lg:grid grid-cols-10 gap-x-[30px]">
              <div className="img-section col-span-4">
                <img
                  src="/image/about/community-img.png"
                  className="xl:max-w-[400px] sm:max-w-[350px]  h-auto"
                  alt=""
                />
              </div>
              <div className="content-section lg:max-w-[550px] col-span-6 sm:mt-0 mt-4">
                <h3 className="text-[35px] font-medium">EMMA</h3>
                <p className="text-gray font-primary text-[16px] text-justify mb-6">
                  "I highly recommend AJ Sport Academy to anybody who wants
                  there children to enjoy playing football, wants help with
                  fitness or just over all footy skills. They go above and
                  beyond from development centres to free afterschool sessions
                  to free summer camps and go out there way for all the children
                  using there free time to make football enjoyable for all. Very
                  commited!!!.
                  <span className="my-2 block"></span>
                  My son loves his 1:1 sessions with Ash, Jay and Geo too. Keep
                  it up guys"
                </p>
                <button className="btn-primary">
                  Learn more{" "}
                  <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-4">
            <div className="community-card mt-[30px]  lg:grid grid-cols-10 gap-x-[30px]">
              <div className="img-section col-span-4">
                <img
                  src="/image/about/community-img.png"
                  className="xl:max-w-[400px] sm:max-w-[350px]  h-auto"
                  alt=""
                />
              </div>
              <div className="content-section lg:max-w-[550px] col-span-6 sm:mt-0 mt-4">
                <h3 className="text-[35px] font-medium">EMMA</h3>
                <p className="text-gray font-primary text-[16px] text-justify mb-6">
                  "I highly recommend AJ Sport Academy to anybody who wants
                  there children to enjoy playing football, wants help with
                  fitness or just over all footy skills. They go above and
                  beyond from development centres to free afterschool sessions
                  to free summer camps and go out there way for all the children
                  using there free time to make football enjoyable for all. Very
                  commited!!!.
                  <span className="my-2 block"></span>
                  My son loves his 1:1 sessions with Ash, Jay and Geo too. Keep
                  it up guys"
                </p>
                <button className="btn-primary">
                  Learn more{" "}
                  <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-4">
            <div className="community-card mt-[30px]  lg:grid grid-cols-10 gap-x-[30px]">
              <div className="img-section col-span-4">
                <img
                  src="/image/about/community-img.png"
                  className="xl:max-w-[400px] sm:max-w-[350px]  h-auto"
                  alt=""
                />
              </div>
              <div className="content-section lg:max-w-[550px] col-span-6 sm:mt-0 mt-4">
                <h3 className="text-[35px] font-medium">EMMA</h3>
                <p className="text-gray font-primary text-[16px] text-justify mb-6">
                  "I highly recommend AJ Sport Academy to anybody who wants
                  there children to enjoy playing football, wants help with
                  fitness or just over all footy skills. They go above and
                  beyond from development centres to free afterschool sessions
                  to free summer camps and go out there way for all the children
                  using there free time to make football enjoyable for all. Very
                  commited!!!.
                  <span className="my-2 block"></span>
                  My son loves his 1:1 sessions with Ash, Jay and Geo too. Keep
                  it up guys"
                </p>
                <button className="btn-primary">
                  Learn more{" "}
                  <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
};

const SwiperBtn = () => {
  const swiper = useSwiper();

  return (
    <div>
      <div className="swiper-btns w-full flex items-center justify-end gap-x-4 pe-8 ">
        <button
          className="text-white bg-red transition duration-300 hover:bg-black hover:text-white text-[15px] w-[50px] h-[40px] flex items-center justify-center skew-x-[-10deg]"
          onClick={() => swiper.slideNext()}
        >
          <FaArrowLeftLong />
        </button>
        <button
          className="text-white bg-red transition duration-300 hover:bg-black hover:text-white text-[15px] w-[50px] h-[40px] flex items-center justify-center skew-x-[-10deg]"
          onClick={() => swiper.slidePrev()}
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Community;
