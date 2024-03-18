import React, { useState } from "react";
import { SlArrowUp } from "react-icons/sl";

const Program = () => {
  const [showData, setShowData] = useState(false);
  const [showDataTwo, setShowDataTwo] = useState(false);
  const [showDataThree, setShowDataThree] = useState(false);
  const [showDataFour, setShowDataFour] = useState(false);
  const [showDataFifth, setShowDataFifth] = useState(false);
  const [showDataSixth, setShowDataSixth] = useState(false);
  const programContent = [
    {
      img: "/image/academy/img-1.png",
      title: "YOUTH TRAINING",
      badge: "stories of success",
    },
    {
      img: "/image/academy/img-2.png",
      title: "FOOTBALL 4 FREE",
      badge: "stories of success",
      content:
        "We provide a 'Football 4 Free' service funded by the 'Young Ealing Foundation' which provides FREE Football sessions for kids aged 4-12 of any and ALL abilities also held at William Perkins High School on 5G Astro Turf.",
    },
    {
      img: "/image/academy/img-3.png",
      title: "WEETABIX WILDCATS",
      badge: "stories of success",
      content:
        "We provide a 'Football 4 Free' service funded by the 'Young Ealing Foundation' which provides FREE Football sessions for kids aged 4-12 of any and ALL abilities also held at William Perkins High School on 5G Astro Turf.",
    },
    {
      img: "/image/academy/img-4.png",
      title: "AFTER SCHOOL CLUB",
      badge: "stories of success",
      content:
        "We provide a 'Football 4 Free' service funded by the 'Young Ealing Foundation' which provides FREE Football sessions for kids aged 4-12 of any and ALL abilities also held at William Perkins High School on 5G Astro Turf.",
    },
    {
      img: "/image/academy/img-5.png",
      title: "LEAGUE FIXTURES",
      badge: "stories of success",
      content:
        "We provide a 'Football 4 Free' service funded by the 'Young Ealing Foundation' which provides FREE Football sessions for kids aged 4-12 of any and ALL abilities also held at William Perkins High School on 5G Astro Turf.",
    },
    {
      img: "/image/academy/img-6.png",
      title: "YOUTH MENTORSHIP",
      badge: "stories of success",
      content:
        "We provide a 'Football 4 Free' service funded by the 'Young Ealing Foundation' which provides FREE Football sessions for kids aged 4-12 of any and ALL abilities also held at William Perkins High School on 5G Astro Turf.",
    },
  ];

  return (
    <main>
      <section className="text-center">
        <span className="mb-4 red-badge">stories of success</span>
        <h2>PROGRAMMES</h2>
      </section>
      {/* LARGE SECREEN */}
      <div>
        {/* FIRST */}
        <div className="lg:block hidden">
          <section className="w-full grid grid-cols-12 mt-8">
            <div className="col-span-8 h-[250px] overflow-hidden">
              <img
                src="/image/academy/program/img-1.png"
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
            <div className="col-span-4 flex flex-col items-center justify-center border-l-[3px] border-red h-[250px] overflow-hidden relative">
              <span className="mb-3 red-badge">stories of success</span>
              <h2>YOUTH TRAINING</h2>
              <button
                onClick={() => setShowData(true)}
                className="absolute bottom-[2rem] left-[50%] translate-x-[-50%] text-[35px] cursor-pointer transition duration-300 focus:rotate-[180deg] focus:opacity-0"
              >
                <SlArrowUp />
              </button>
            </div>
          </section>
          {showData && (
            <div className={`${showData ? "h-[120px]" : "h-0"} relative`}>
              <p
                className={`text-justify font-secondary max-w-[900px] w-full  mx-auto  text-[20px] leading-none py-8 transition duration-300`}
              >
                We provide a 'Football 4 Free' service funded by the 'Young
                Ealing Foundation' which provides FREE Football sessions for
                kids aged 4-12 of any and ALL abilities also held at William
                Perkins High School on 5G Astro Turf.
              </p>
              <button
                onClick={() => setShowData(false)}
                className="absolute bottom-[0rem] left-[50%] translate-x-[-50%] text-[35px] cursor-pointer transition duration-300 rotate-[180deg] focus:rotate-[0deg]"
              >
                <SlArrowUp />
              </button>
            </div>
          )}
        </div>
        {/* SECOND */}
        <div className="lg:block hidden">
          <section className="w-full grid grid-cols-12 mt-8">
            <div className="col-span-8 h-[250px] overflow-hidden">
              <img
                src="/image/academy/program/img-2.png"
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
            <div className="col-span-4 flex flex-col items-center justify-center border-l-[3px] border-red h-[250px] overflow-hidden relative">
              <span className="mb-3 red-badge">stories of success</span>
              <h2>FOOTBALL 4 FREE</h2>
              <button
                onClick={() => setShowDataTwo(true)}
                className="absolute bottom-[2rem] left-[50%] translate-x-[-50%] text-[35px] cursor-pointer transition duration-300 focus:rotate-[180deg] focus:opacity-0"
              >
                <SlArrowUp />
              </button>
            </div>
          </section>
          {showDataTwo && (
            <div className={`${showDataTwo ? "h-[120px]" : "h-0"} relative`}>
              <p
                className={`text-justify font-secondary max-w-[900px] w-full  mx-auto  text-[20px] leading-none py-8 transition duration-300`}
              >
                We provide a 'Football 4 Free' service funded by the 'Young
                Ealing Foundation' which provides FREE Football sessions for
                kids aged 4-12 of any and ALL abilities also held at William
                Perkins High School on 5G Astro Turf.
              </p>
              <button
                onClick={() => setShowDataTwo(false)}
                className="absolute bottom-[0rem] left-[50%] translate-x-[-50%] text-[35px] cursor-pointer transition duration-300 rotate-[180deg] focus:rotate-[0deg]"
              >
                <SlArrowUp />
              </button>
            </div>
          )}
        </div>
        {/* THIRD */}
        <div className="lg:block hidden">
          <section className="w-full grid grid-cols-12 mt-8">
            <div className="col-span-8 h-[250px] overflow-hidden">
              <img
                src="/image/academy/program/img-3.png"
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
            <div className="col-span-4 flex flex-col items-center justify-center border-l-[3px] border-red h-[250px] overflow-hidden relative">
              <span className="mb-3 red-badge">stories of success</span>
              <h2>WEETABIX WILDCATS</h2>
              <button
                onClick={() => setShowDataThree(true)}
                className="absolute bottom-[2rem] left-[50%] translate-x-[-50%] text-[35px] cursor-pointer transition duration-300 focus:rotate-[180deg] focus:opacity-0"
              >
                <SlArrowUp />
              </button>
            </div>
          </section>
          {showDataThree && (
            <div className={`${showDataThree ? "h-[120px]" : "h-0"} relative`}>
              <p
                className={`text-justify font-secondary max-w-[900px] w-full  mx-auto  text-[20px] leading-none py-8 transition duration-300`}
              >
                We provide a 'Football 4 Free' service funded by the 'Young
                Ealing Foundation' which provides FREE Football sessions for
                kids aged 4-12 of any and ALL abilities also held at William
                Perkins High School on 5G Astro Turf.
              </p>
              <button
                onClick={() => setShowDataThree(false)}
                className="absolute bottom-[0rem] left-[50%] translate-x-[-50%] text-[35px] cursor-pointer transition duration-300 rotate-[180deg] focus:rotate-[0deg]"
              >
                <SlArrowUp />
              </button>
            </div>
          )}
        </div>
        {/* FOURTH */}
        <div className="lg:block hidden">
          <section className="w-full grid grid-cols-12 mt-8">
            <div className="col-span-8 h-[250px] overflow-hidden">
              <img
                src="/image/academy/program/img-4.png"
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
            <div className="col-span-4 flex flex-col items-center justify-center border-l-[3px] border-red h-[250px] overflow-hidden relative">
              <span className="mb-3 red-badge">stories of success</span>
              <h2>AFTER SCHOOL CLUB</h2>
              <button
                onClick={() => setShowDataFour(true)}
                className="absolute bottom-[2rem] left-[50%] translate-x-[-50%] text-[35px] cursor-pointer transition duration-300 focus:rotate-[180deg] focus:opacity-0"
              >
                <SlArrowUp />
              </button>
            </div>
          </section>
          {showDataFour && (
            <div className={`${showDataFour ? "h-[120px]" : "h-0"} relative`}>
              <p
                className={`text-justify font-secondary max-w-[900px] w-full  mx-auto  text-[20px] leading-none py-8 transition duration-300`}
              >
                We provide a 'Football 4 Free' service funded by the 'Young
                Ealing Foundation' which provides FREE Football sessions for
                kids aged 4-12 of any and ALL abilities also held at William
                Perkins High School on 5G Astro Turf.
              </p>
              <button
                onClick={() => setShowDataFour(false)}
                className="absolute bottom-[0rem] left-[50%] translate-x-[-50%] text-[35px] cursor-pointer transition duration-300 rotate-[180deg] focus:rotate-[0deg]"
              >
                <SlArrowUp />
              </button>
            </div>
          )}
        </div>
        {/* FIFTH */}
        <div className="lg:block hidden">
          <section className="w-full grid grid-cols-12 mt-8">
            <div className="col-span-8 h-[250px] overflow-hidden">
              <img
                src="/image/academy/program/img-5.png"
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
            <div className="col-span-4 flex flex-col items-center justify-center border-l-[3px] border-red h-[250px] overflow-hidden relative">
              <span className="mb-3 red-badge">stories of success</span>
              <h2>LEAGUE FIXTURES</h2>
              <button
                onClick={() => setShowDataFifth(true)}
                className="absolute bottom-[2rem] left-[50%] translate-x-[-50%] text-[35px] cursor-pointer transition duration-300 focus:rotate-[180deg] focus:opacity-0"
              >
                <SlArrowUp />
              </button>
            </div>
          </section>
          {showDataFifth && (
            <div className={`${showDataFifth ? "h-[120px]" : "h-0"} relative`}>
              <p
                className={`text-justify font-secondary max-w-[900px] w-full  mx-auto  text-[20px] leading-none py-8 transition duration-300`}
              >
                We provide a 'Football 4 Free' service funded by the 'Young
                Ealing Foundation' which provides FREE Football sessions for
                kids aged 4-12 of any and ALL abilities also held at William
                Perkins High School on 5G Astro Turf.
              </p>
              <button
                onClick={() => setShowDataFifth(false)}
                className="absolute bottom-[0rem] left-[50%] translate-x-[-50%] text-[35px] cursor-pointer transition duration-300 rotate-[180deg] focus:rotate-[0deg]"
              >
                <SlArrowUp />
              </button>
            </div>
          )}
        </div>
        {/* SIXTH */}
        <div className="lg:block hidden mb-8">
          <section className="w-full grid grid-cols-12 mt-8">
            <div className="col-span-8 h-[250px] overflow-hidden">
              <img
                src="/image/academy/program/img-4.png"
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
            <div className="col-span-4 flex flex-col items-center justify-center border-l-[3px] border-red h-[250px] overflow-hidden relative">
              <span className="mb-3 red-badge">stories of success</span>
              <h2>YOUTH MENTORSHIP</h2>
              <button
                onClick={() => setShowDataSixth(true)}
                className="absolute bottom-[2rem] left-[50%] translate-x-[-50%] text-[35px] cursor-pointer transition duration-300 focus:rotate-[180deg] focus:opacity-0"
              >
                <SlArrowUp />
              </button>
            </div>
          </section>
          {showDataSixth && (
            <div className={`${showDataSixth ? "h-[120px]" : "h-0"} relative`}>
              <p
                className={`text-justify font-secondary max-w-[900px] w-full  mx-auto  text-[20px] leading-none py-8 transition duration-300`}
              >
                We provide a 'Football 4 Free' service funded by the 'Young
                Ealing Foundation' which provides FREE Football sessions for
                kids aged 4-12 of any and ALL abilities also held at William
                Perkins High School on 5G Astro Turf.
              </p>
              <button
                onClick={() => setShowDataSixth(false)}
                className="absolute bottom-[0rem] left-[50%] translate-x-[-50%] text-[35px] cursor-pointer transition duration-300 rotate-[180deg] focus:rotate-[0deg]"
              >
                <SlArrowUp />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* SMALL SCREEN */}
      <div className="lg:hidden block mt-8">
        {/* FIRST */}
        <div>
          <div>
            <img
              src="/image/academy/program/img-1.png"
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="px-[20px] flex flex-col  my-6 relative">
            <div className="flex gap-x-7 items-center">
              <div>
                <span className="mb-3 red-badge">stories of success</span>
                <h2>YOUTH TRAINING</h2>
              </div>
              <button
                onClick={() => setShowData(!showData)}
                className={`text-[35px] cursor-pointer transition duration-300 md:absolute left-[40%] top-[2rem] ${
                  showData ? "rotate-[0deg] " : "rotate-[180deg] "
                }`}
              >
                <SlArrowUp />
              </button>
            </div>
            {showData && (
              <p
                className={`text-justify font-secondary  text-[20px] leading-6  py-6 transition duration-300`}
              >
                We provide a 'Football 4 Free' service funded by the 'Young
                Ealing Foundation' which provides FREE Football sessions for
                kids aged 4-12 of any and ALL abilities also held at William
                Perkins High School on 5G Astro Turf.
              </p>
            )}
          </div>
        </div>
        {/* SECOND */}
        <div>
          <div>
            <img
              src="/image/academy/program/img-2.png"
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="px-[20px] flex flex-col  mt-6 relative">
            <div className="flex gap-x-7 items-center">
              <div>
                <span className="mb-3 red-badge">stories of success</span>
                <h2>FOOTBALL 4 FREE</h2>
              </div>
              <button
                onClick={() => setShowDataTwo(!showDataTwo)}
                className={`text-[35px] cursor-pointer transition duration-300 md:absolute left-[40%] top-[2rem] ${
                  showDataTwo ? "rotate-[0deg] " : "rotate-[180deg] "
                }`}
              >
                <SlArrowUp />
              </button>
            </div>
            {showDataTwo && (
              <p
                className={`text-justify font-secondary  text-[20px] leading-6  py-6 transition duration-300`}
              >
                We provide a 'Football 4 Free' service funded by the 'Young
                Ealing Foundation' which provides FREE Football sessions for
                kids aged 4-12 of any and ALL abilities also held at William
                Perkins High School on 5G Astro Turf.
              </p>
            )}
          </div>
        </div>
        {/* THIRD */}
        <div className="mt-6">
          <div>
            <img
              src="/image/academy/program/img-3.png"
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="px-[20px] flex flex-col  mt-6 relative">
            <div className="flex gap-x-7 items-center">
              <div>
                <span className="mb-3 red-badge">stories of success</span>
                <h2>WEETABIX WILDCATS</h2>
              </div>
              <button
                onClick={() => setShowDataThree(!showDataThree)}
                className={`text-[35px] cursor-pointer transition duration-300 md:absolute left-[40%] top-[2rem] ${
                  showDataThree ? "rotate-[0deg] " : "rotate-[180deg] "
                }`}
              >
                <SlArrowUp />
              </button>
            </div>
            {showDataThree && (
              <p
                className={`text-justify font-secondary  text-[20px] leading-6  py-6 transition duration-300`}
              >
                We provide a 'Football 4 Free' service funded by the 'Young
                Ealing Foundation' which provides FREE Football sessions for
                kids aged 4-12 of any and ALL abilities also held at William
                Perkins High School on 5G Astro Turf.
              </p>
            )}
          </div>
        </div>
        {/* FOUR */}
        <div className="mt-6">
          <div>
            <img
              src="/image/academy/program/img-4.png"
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="px-[20px] flex flex-col  mt-6 relative">
            <div className="flex gap-x-7 items-center">
              <div>
                <span className="mb-3 red-badge">stories of success</span>
                <h2>AFTER SCHOOL CLUB</h2>
              </div>
              <button
                onClick={() => setShowDataFour(!showDataFour)}
                className={`text-[35px] cursor-pointer transition duration-300 md:absolute left-[40%] top-[2rem] ${
                  showDataFour ? "rotate-[0deg] " : "rotate-[180deg] "
                }`}
              >
                <SlArrowUp />
              </button>
            </div>
            {showDataFour && (
              <p
                className={`text-justify font-secondary  text-[20px] leading-6  py-6 transition duration-300`}
              >
                We provide a 'Football 4 Free' service funded by the 'Young
                Ealing Foundation' which provides FREE Football sessions for
                kids aged 4-12 of any and ALL abilities also held at William
                Perkins High School on 5G Astro Turf.
              </p>
            )}
          </div>
        </div>
        {/* FIFTH */}
        <div className="my-6">
          <div>
            <img
              src="/image/academy/program/img-5.png"
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="px-[20px] flex flex-col  mt-6 relative">
            <div className="flex gap-x-7 items-center">
              <div>
                <span className="mb-3 red-badge">stories of success</span>
                <h2>YOUTH TRAINING</h2>
              </div>
              <button
                onClick={() => setShowDataFifth(!showDataFifth)}
                className={`text-[35px] cursor-pointer transition duration-300 md:absolute left-[40%] top-[2rem] ${
                  showDataFifth ? "rotate-[0deg] " : "rotate-[180deg] "
                }`}
              >
                <SlArrowUp />
              </button>
            </div>
            {showDataFifth && (
              <p
                className={`text-justify font-secondary  text-[20px] leading-6  py-6 transition duration-300`}
              >
                We provide a 'Football 4 Free' service funded by the 'Young
                Ealing Foundation' which provides FREE Football sessions for
                kids aged 4-12 of any and ALL abilities also held at William
                Perkins High School on 5G Astro Turf.
              </p>
            )}
          </div>
        </div>
      </div>


      <div className=" ms-[20px] my-[30px] bg-red w-[300px] p-4 flex items-center justify-between">
        <div>
          <img className="w-[100px]" src="/image/academy/program/logo-one.png" alt="" />
        </div>
        <img className="h-[80px]" src="/image/academy/program/logo-two.png" alt="" />
      </div>
    </main>
  );
};

export default Program;
