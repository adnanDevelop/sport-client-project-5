import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* FOOTER HEADER SECTION */}
      <section className="footer-header w-full flex items-center sm:justify-between justify-center sm:flex-row flex-col flex-wrap md:px-[40px] px-[20px] py-[20px] bg-red">
        <div className="flex items-center gap-x-6 sm:mb-0 mb-4">
          <img
            src="/image/logo.png"
            className="w-[120px] h-auto object-cover"
            alt=""
          />
          <img
            src="/image/sublogo-dark.png"
            className="w-[55px] h-auto object-cover"
            alt=""
          />
        </div>
        {/* SOCIAL ICONS */}
        <div className="flex items-center  gap-x-6 text-white">
          <i className=" text-[20px] cursor-pointer transition duration-300 hover:text-black fa fa-youtube"></i>
          <i className=" text-[20px] cursor-pointer transition duration-300 hover:text-black fa fa-facebook"></i>
          <i className=" text-[20px] cursor-pointer transition duration-300 hover:text-black fa fa-instagram"></i>
        </div>
      </section>
      {/* FOOTER SECTION */}
      <section className="md:grid grid-cols-4 gap-x-6 md:pt-[60px] pt-[40px] pb-[10px] md:px-[40px] px-[20px] bg-black">
        <div className="md:col-span-2 md:mb-0 mb-6">
          <div className="footer_img_section md:flex-none flex md:items-start items-center md:justify-start justify-center flex-col">
            <img
              src="/image/footer/img-1.png"
              className="lg:w-[90px] w-[60px] h-auto object-cover lg:pt-4  "
              alt=""
            />
            <div className="flex items-center flex-wrap md:justify-start justify-center md:gap-x-4 gap-x-20 md:gap-y-0 gap-y-4 md:mt-10 mt-4">
              <img
                src="/image/footer/img-2.png"
                className="w-auto md:h-[75px] h-[55px] object-cover"
                alt=""
              />
              <img
                src="/image/footer/img-3.png"
                className="w-auto md:h-[45px] h-[35px] object-cover"
                alt=""
              />
              <img
                src="/image/footer/img-4.png"
                className="w-auto md:h-[75px] h-[55px] object-cover"
                alt=""
              />
                <img
                src="/image/footer/img-3.png"
                className="w-auto md:h-[45px] h-[35px] object-cover md:hidden block"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* LINKS SECTION */}
        <div className="md:col-span-2">
          <div className="footer_link_section flex items-start justify-between flex-wrap gap-4">
            <div className="footer_link">
              <h3 className="font-primary text-[25px] mb-3 uppercase font-semibold text-white">
                about clubs
              </h3>
              <ul className="list-none">
                <li>
                  <Link
                    to="/"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    about
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    location
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    staff
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    our store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer_link">
              <h3 className="font-primary text-[25px] mb-3 uppercase font-semibold text-white">
                our club info
              </h3>
              <ul className="list-none">
                <li>
                  <Link
                    to="/"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    players & coaches
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    players profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    Fixtures
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    our matches
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    our store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer_link">
              <h3 className="font-primary text-[25px] mb-3 uppercase font-semibold text-white">
                other links
              </h3>
              <ul className="list-none">
                <li>
                  <Link
                    to="/"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    terms & conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    cookies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white uppercase mb-2 inline-block font-primary font-normal transition duration-300 hover:text-red focus:text-red"
                  >
                    site maps
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SUBFOOTER SECTION */}
      <section className="py-4 bg-black md:px-[40px] px-[20px]">
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex items-center justify-center pt-4">
          <p className="text-center text-white font-normal font-primary text-[14px]">
            Copyright © All Right Reserved. AJ Sport 2024
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
