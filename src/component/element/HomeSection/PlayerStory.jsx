import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const PlayerStory = () => {
  const playerContent = [
    {
      img: "/image/home/story-slider/img-1.png",
      title: "Josh",
      content:
        "Hello my name is Player and I’m 8 years old and have been nat AJ Sport for 4 years now. I really like the football here and I’ve made so many friends.",
    },
    {
      img: "/image/home/story-slider/img-2.png",
      title: "Amare",
      content:
        "Hello my name is Player and I’m 8 years old and have been nat AJ Sport for 4 years now. I really like the football here and I’ve made so many friends.",
    },
    {
      img: "/image/home/story-slider/img-1.png",
      title: "Josh",
      content:
        "Hello my name is Player and I’m 8 years old and have been nat AJ Sport for 4 years now. I really like the football here and I’ve made so many friends.",
    },
    {
      img: "/image/home/story-slider/img-2.png",
      title: "Amare",
      content:
        "Hello my name is Player and I’m 8 years old and have been nat AJ Sport for 4 years now. I really like the football here and I’ve made so many friends.",
    },
    {
      img: "/image/home/story-slider/img-1.png",
      title: "Josh",
      content:
        "Hello my name is Player and I’m 8 years old and have been nat AJ Sport for 4 years now. I really like the football here and I’ve made so many friends.",
    },
    {
      img: "/image/home/story-slider/img-2.png",
      title: "Amare",
      content:
        "Hello my name is Player and I’m 8 years old and have been nat AJ Sport for 4 years now. I really like the football here and I’ve made so many friends.",
    },
  ];

  return (
    <main className="story-section md:px-[40px] px-[20px] md:py-[80xp] py-[60px] w-full">
      <section className="story-header flex items-center justify-center flex-col">
        <span className="mb-3 red-badge">stories of success</span>
        <h2>our player stories</h2>
      </section>
      {/* SWIPER SECTION */}
      <section className="swiper-section mt-4  select-none">
        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          navigation={true}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            998: {
              slidesPerView: 2,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperBtn />
          {playerContent.map((element, index) => {
            return (
              <SwiperSlide key={index} className="my-5">
                <div className="story_card relative">
                  <img
                    src={element.img}
                    className="lg:max-w-[400px] max-w-[3000px] lg:h-[400px] object-cover"
                    alt=""
                  />
                  <div className="story_content md:max-w-[280px] max-w-[400px] absolute bottom-[-2rem] md:left-[14rem]  left-[2.5rem] bg-white py-3 px-6">
                    <h4 className="font-primary text-black font-medium mb-3 uppercase text-[30px]">
                      {element.title}
                    </h4>
                    <p className="text-justify text-gray leading-5 text-[16px] mb-4 ">
                      {element.content}
                    </p>
                    <button className="btn-primary">
                      Learn more{" "}
                      <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
};

const SwiperBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-btns w-full flex items-center justify-end gap-x-4 mt-10 pe-8">
      <button className="text-white bg-red transition duration-300 hover:bg-black hover:text-white text-[15px] w-[50px] h-[40px] flex items-center justify-center skew-x-[-10deg]" onClick={() => swiper.slideNext()}>
        <FaArrowLeftLong />
      </button>
      <button className="text-white bg-red transition duration-300 hover:bg-black hover:text-white text-[15px] w-[50px] h-[40px] flex items-center justify-center skew-x-[-10deg]"  onClick={() => swiper.slidePrev()}>
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default PlayerStory;
