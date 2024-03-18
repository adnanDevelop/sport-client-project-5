import React from "react";

const MenTeam = () => {
  return (
    <>
      <main className="py-[60px] md:px-[40px] px-[20px]">
        <section className="w-full flex flex-col items-center justify-center gap-y-4">
          <img src="/image/ajfc/team/logo.png" alt="" />
          <h2 className="uppercase">our men’s team</h2>
        </section>
        <section className="lg:grid grid-cols-12 mt-6 max-w-[1100px] mx-auto">
          {/* MOBILE VIEW  */}
          <div className="col-span-8 lg:hidden block">
            <div>
              <img
                src="/image/ajfc/team/img-2.png"
                className="max-h-[350px] w-full object-cover"
                alt=""
              />
            </div>
            <div className="right-content mt-4 ">
              <div className=" max-w-[680px] w-full">
                <div className="flex items-center justify-between flex-wrap">
                  <h3 className="uppercase text-black font-semibold lg:text-[30px] text-[25px]">
                    SPONSOR :{" "}
                    <span className="ps-2 text-red">Premiere Civils</span>
                  </h3>
                  <h3 className="uppercase text-black font-semibold lg:text-[30px] text-[25px]">
                    DIVISIONS :{" "}
                    <span className="ps-2 text-red">NCL Division 2</span>
                  </h3>
                </div>
                <div className="flex items-center justify-between text-white md:text-[25px] sm:text-[20px] text-[16px] px-3 py-2 bg-red font-bold  uppercase mt-4 max-w-[500px] w-full mx-auto">
                  <img
                    src="/image/ajfc/team/icon-1.png"
                    className="w-[20px] object-cover block me-4"
                    alt=""
                  />
                  accolades :{" "}
                  <span className="ps-2">forest rec champions 2021</span>
                  <img
                    src="/image/ajfc/team/icon-2.png"
                    className="w-[20px] object-cover block ms-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* LEFT SECTION */}
          <div className="col-span-4 lg:mt-1 mt-8">
            <div className="team-card gradient max-w-[350px] w-full lg:max-h-[350px] h-[350px] lg:ms-auto pt-6 relative">
              <img
                src="/image/ajfc/team/img-1.png"
                className="w-[250px] lg:ms-auto absolute right-8 bottom-0"
                alt=""
              />
            </div>
            <div className="team-content lg:ps-3 mt-4 sm:text-start text-center">
              <h3 className="uppercase text-black font-bold text-[30px] leading-nnone">
                DAZ
              </h3>
              <p className="text-gray font-primary uppercase">
                first team coach
              </p>
            </div>
          </div>
          {/* RIGHT SECTION LARGE SCREEN VIEW */}
          <div className="col-span-8 lg:block hidden">
            <div>
              <img
                src="/image/ajfc/team/img-2.png"
                className="max-h-[350px] w-full object-cover"
                alt=""
              />
            </div>
            <div className="right-content mt-4 ">
              <div className=" max-w-[680px] w-full">
                <div className="flex items-center justify-between flex-wrap">
                  <h3 className="uppercase text-black font-semibold lg:text-[30px] text-[25px]">
                    SPONSOR :{" "}
                    <span className="ps-2 text-red">Premiere Civils</span>
                  </h3>
                  <h3 className="uppercase text-black font-semibold lg:text-[30px] text-[25px]">
                    DIVISIONS :{" "}
                    <span className="ps-2 text-red">NCL Division 2</span>
                  </h3>
                </div>
                <div className="flex items-center justify-between text-white text-[25px] px-3 py-2 bg-red font-bold  uppercase mt-4 max-w-[500px] w-full mx-auto">
                  <img
                    src="/image/ajfc/team/icon-1.png"
                    className="w-[20px] object-cover block me-4"
                    alt=""
                  />
                  accolades :{" "}
                  <span className="ps-2">forest rec champions 2021</span>
                  <img
                    src="/image/ajfc/team/icon-2.png"
                    className="w-[20px] object-cover block ms-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION TWO */}
      <main className="py-[60px] md:px-[40px] px-[20px] bg-[#F6F5F8]">
        <section className="w-full flex flex-col items-center justify-center gap-y-2">
          <img
            src="/image/ajfc/team/enrich-logo.png"
            className="max-w-[170px]"
            alt=""
          />
          <h2 className="uppercase">UNDER 12'S</h2>
        </section>
        <section className="lg:grid grid-cols-12 mt-6 max-w-[1100px] mx-auto">
          {/* MOBILE VIEW  */}
          <div className="col-span-8 lg:hidden block">
            <div>
              <img
                src="/image/ajfc/team/img-3.png"
                className="max-h-[350px] w-full object-cover"
                alt=""
              />
            </div>
            <div className="right-content mt-4 ">
              <div className=" max-w-[680px] w-full">
                <div className="flex items-center justify-between flex-wrap">
                  <h3 className="uppercase text-black font-semibold lg:text-[30px] text-[25px]">
                    SPONSOR :{" "}
                    <span className="ps-2 text-red">Premiere Civils</span>
                  </h3>
                  <h3 className="uppercase text-black font-semibold lg:text-[30px] text-[25px]">
                    DIVISIONS :{" "}
                    <span className="ps-2 text-red">NCL Division 2</span>
                  </h3>
                </div>
                <div className="flex items-center justify-between text-white md:text-[25px] sm:text-[20px] text-[16px] px-3 py-2 bg-red font-bold  uppercase mt-4 max-w-[500px] w-full mx-auto">
                  <img
                    src="/image/ajfc/team/icon-1.png"
                    className="w-[20px] object-cover block me-4"
                    alt=""
                  />
                  accolades :{" "}
                  <span className="ps-2">forest rec champions 2021</span>
                  <img
                    src="/image/ajfc/team/icon-2.png"
                    className="w-[20px] object-cover block ms-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* LEFT SECTION */}
          <div className="col-span-4 lg:mt-1 mt-8">
            <div className="team-card gradient max-w-[350px] lg:max-h-[350px] h-[350px] lg:ms-auto pt-6 relative">
              <img
                src="/image/ajfc/team/img-1.png"
                className="w-[250px] lg:ms-auto absolute right-8 bottom-0"
                alt=""
              />
            </div>
            <div className="team-content lg:ps-3 mt-4 sm:text-start text-center">
              <h3 className="uppercase text-black font-bold text-[30px] leading-nnone">
                JAY
              </h3>
              <p className="text-gray font-primary uppercase">u15’s coach</p>
            </div>
          </div>
          {/* RIGHT SECTION LARGE SCREEN VIEW */}
          <div className="col-span-8 lg:block hidden">
            <div>
              <img
                src="/image/ajfc/team/img-3.png"
                className="max-h-[350px] w-full object-cover"
                alt=""
              />
            </div>
            <div className="right-content mt-4 ">
              <div className=" max-w-[680px] w-full">
                <div className="flex items-center justify-between flex-wrap">
                  <h3 className="uppercase text-black font-semibold lg:text-[30px] text-[25px]">
                    SPONSOR :{" "}
                    <span className="ps-2 text-red">Premiere Civils</span>
                  </h3>
                  <h3 className="uppercase text-black font-semibold lg:text-[30px] text-[25px]">
                    DIVISIONS :{" "}
                    <span className="ps-2 text-red">Division 1</span>
                  </h3>
                </div>
                <div className="flex items-center justify-between text-white text-[25px] px-3 py-2 bg-red font-bold  uppercase mt-4 max-w-[500px] w-full mx-auto">
                  <img
                    src="/image/ajfc/team/icon-1.png"
                    className="w-[20px] object-cover block me-4"
                    alt=""
                  />
                  accolades :{" "}
                  <span className="ps-2">DIVISION 2 champions 2021</span>
                  <img
                    src="/image/ajfc/team/icon-2.png"
                    className="w-[20px] object-cover block ms-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION THREE */}
      <main className="py-[40px] md:px-[40px] px-[20px] gradient">
        <section className="w-full flex flex-col items-center justify-center gap-y-2">
          <img
            src="/image/ajfc/team/lost-property.png"
            className="h-[100px]"
            alt=""
          />
          <h2 className="uppercase text-white">UNDER 12'S</h2>
        </section>
        <section className="lg:grid grid-cols-12 mt-6 max-w-[1000px] mx-auto">
          {/* LEFT SECTION */}
          <div className="col-span-8">
            <div>
              <img
                src="/image/ajfc/team/img-4.png"
                className="max-h-[350px] w-full object-cover"
                alt=""
              />
            </div>
            <div className="right-content mt-4 ">
              <div className=" max-w-[680px] w-full">
                <div className="flex items-center justify-between flex-wrap max-w-[600px]">
                  <h3 className="uppercase text-white font-semibold lg:text-[30px] text-[25px]">
                    SPONSOR :{" "}
                    <span className="ps-2 text-white">Premiere Civils</span>
                  </h3>
                  <h3 className="uppercase text-white font-semibold lg:text-[30px] text-[25px]">
                    DIVISIONS :{" "}
                    <span className="ps-2 text-white">Division 1</span>
                  </h3>
                </div>
                <div className="flex items-center justify-between text-red md:text-[25px] text-[16px] px-3 py-2 bg-white font-bold  uppercase mt-4 max-w-[500px] w-full mx-auto">
                  <img
                    src="/image/ajfc/team/icon-red-1.png"
                    className="w-[20px] object-cover block me-4"
                    alt=""
                  />
                  accolades :{" "}
                  <span className="ps-2">DIVISION 2 champions 2021</span>
                  <img
                    src="/image/ajfc/team/icon-red-2.png"
                    className="w-[20px] object-cover block ms-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT SECTION */}
          <div className="col-span-4 lg:mt-1 mt-8">
            <div className="team-card-two bg-black max-w-[350px] lg:max-h-[350px] h-[350px] lg:ms-auto pt-6 relative">
              <img
                src="/image/ajfc/team/img-1.png"
                className="w-[250px] lg:ms-auto absolute right-8 bottom-0"
                alt=""
              />
            </div>
            <div className="team-content lg:ps-3 mt-4 lg:text-end text-center lg:pe-[45px] max-w-[300px]">
              <h3 className="uppercase text-white font-bold text-[30px] leading-none ">
                TEE
              </h3>
              <p className="text-white font-primary uppercase">U7 coach</p>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION FOUR */}
      <main className="py-[40px] md:px-[40px] px-[20px]">
        <section>
          <h2 className="uppercase text-black text-center">UNDER 08'S</h2>
        </section>
        <section className="lg:grid grid-cols-12 mt-6 max-w-[1000px] mx-auto">
          {/* LEFT SECTION */}
          <div className="col-span-8">
            <div>
              <img
                src="/image/ajfc/team/img-5.png"
                className="max-h-[350px] w-full object-cover"
                alt=""
              />
            </div>
            <div className="right-content mt-4 ">
              <div className=" max-w-[680px] w-full">
                <div className="flex items-center justify-between flex-wrap max-w-[600px]">
                  <h3 className="uppercase text-black font-semibold lg:text-[30px] text-[25px]">
                    SPONSOR :{" "}
                    <span className="ps-2 text-red">LOST PROPERTY</span>
                  </h3>
                  <h3 className="uppercase text-red font-semibold lg:text-[30px] text-[25px]">
                    DIVISIONS :{" "}
                    <span className="ps-2 text-black">Division 2</span>
                  </h3>
                </div>  
              </div>
            </div>
          </div>
          {/* RIGHT SECTION */}
          <div className="col-span-4 lg:mt-1 mt-8">
            <div className="team-card-two gradient max-w-[350px] lg:max-h-[350px] h-[350px] lg:ms-auto pt-6 relative">
              <img
                src="/image/ajfc/team/img-1.png"
                className="w-[250px] lg:ms-auto absolute right-8 bottom-0"
                alt=""
              />
            </div>
            <div className="team-content lg:ps-3 mt-4 lg:text-end text-center lg:pe-[45px] max-w-[300px]">
              <h3 className="uppercase text-black font-bold text-[30px] leading-none ">
                JAY
              </h3>
              <p className="text-gray font-primary uppercase">u15’s coach</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MenTeam;
